import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider, db } from "@/lib/firebase";
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { ref, get, set, update, onValue } from "firebase/database";
import i18n from "@/lib/i18n";

// ── Compressed DB Schema ──────────────────────────────────
// Keys are shortened for minimal RTDB storage usage.
// n=name, e=email, j=joined, a=avatar, l=level, loc=location
// ar=articlesRead, qs=quizScore, s=streak, b=bookmarks
// act=activity[], sv=saved[]
// Activity item: i=icon, t=text, tm=time, c=color, bg=bg, lk=link
// Saved item: id=id, tt=title, p=part, ic=icon

interface CompressedActivity { i: string; t: string; tm: string; c: string; bg: string; lk: string; }
interface CompressedSaved { id: string; tt: string; p: string; ic: string; }
interface CompressedUser {
  n: string; e: string; j: string; a: string; l: string; loc: string;
  ar: number; qs: number; s: number; b: number;
  act?: CompressedActivity[]; sv?: CompressedSaved[];
}

// ── Full (UI-friendly) User Data ──────────────────────────
const DEFAULT_USER = {
  name: "Guest Scholar",
  email: "",
  joined: "",
  avatar: "GS",
  level: "Beginner",
  location: "India",
  articlesRead: 0,
  quizScore: 0,
  streak: 0,
  bookmarks: 0,
  activity: [] as Array<{ icon: string; text: string; time: string; color: string; bg: string; link: string }>,
  saved: [] as Array<{ id: string; title: string; part: string; icon: string }>,
};

const INITIAL_SETTINGS = {
  theme: "system",
  compactMode: false,
  animations: true,
  language: "en",
  emailDigest: true,
  quizReminders: true,
};

type UserData = typeof DEFAULT_USER;
type Settings = typeof INITIAL_SETTINGS;

// ── Encode / Decode helpers ───────────────────────────────
function encodeUser(u: UserData): CompressedUser {
  return {
    n: u.name, e: u.email, j: u.joined, a: u.avatar, l: u.level, loc: u.location,
    ar: u.articlesRead, qs: u.quizScore, s: u.streak, b: u.bookmarks,
    act: (u.activity || []).map(a => ({ i: a.icon, t: a.text, tm: a.time, c: a.color, bg: a.bg, lk: a.link })),
    sv: (u.saved || []).map(s => ({ id: s.id, tt: s.title, p: s.part, ic: s.icon })),
  };
}

function decodeUser(c: any): UserData {
  // Migration Layer: Support both compressed (new) and uncompressed (legacy) keys
  return {
    name: c.n || c.name || "",
    email: c.e || c.email || "",
    joined: c.j || c.joined || "",
    avatar: c.a || c.avatar || "GS",
    level: c.l || c.level || "Beginner",
    location: c.loc || c.location || "India",
    articlesRead: c.ar ?? c.articlesRead ?? 0,
    quizScore: c.qs ?? c.quizScore ?? 0,
    streak: c.s ?? c.streak ?? 0,
    bookmarks: c.b ?? c.bookmarks ?? 0,
    activity: (c.act || c.activity || []).map((a: any) => ({
      icon: a.i || a.icon || "BookOpen",
      text: a.t || a.text || "",
      time: a.tm || a.time || "",
      color: a.c || a.color || "text-primary",
      bg: a.bg || a.bg || "bg-primary/5",
      link: a.lk || a.link || "#"
    })),
    saved: (c.sv || c.saved || []).map((s: any) => ({
      id: s.id || s.id || "",
      title: s.tt || s.title || "",
      part: s.p || s.part || "",
      icon: s.ic || s.icon || "BookMarked"
    })),
  };
}

// ── Context ───────────────────────────────────────────────
interface AuthContextValue {
  user: UserData;
  fbUser: FirebaseUser | null;
  loading: boolean;
  settings: Settings;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<UserData>) => Promise<void>;
  updateSettings: (data: Partial<Settings>) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData>(DEFAULT_USER);
  const [fbUser, setFbUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem("samvidhaan_settings");
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  // 1. Initial Load: Instant recovery from cache
  useEffect(() => {
    const lastUid = localStorage.getItem("samvidhaan_last_uid");
    if (lastUid) {
      const cached = localStorage.getItem(`samvidhaan_cache_${lastUid}`);
      if (cached) {
        try {
          setUser(JSON.parse(cached));
        } catch (e) {}
      }
    }
  }, []);

  // 2. Auth & Realtime Sync
  useEffect(() => {
    let dbUnsubscribe: (() => void) | null = null;

    const authUnsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setFbUser(firebaseUser);
      
      if (!firebaseUser) {
        setUser(DEFAULT_USER);
        localStorage.removeItem("samvidhaan_last_uid");
        setDataLoaded(true);
        setLoading(false); // Auth is determined (None)
        if (dbUnsubscribe) dbUnsubscribe();
        return;
      }

      // Record this UID for next boot
      localStorage.setItem("samvidhaan_last_uid", firebaseUser.uid);
      
      // AUTH IS DETERMINED - Stop blocking the app!
      setLoading(false); 

      // Check for scoped cache
      const cacheKey = `samvidhaan_cache_${firebaseUser.uid}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        try {
          setUser(JSON.parse(cached));
          setDataLoaded(true);
        } catch (e) {}
      }

      // Set up realtime listener for data sync
      const userRef = ref(db, `users/${firebaseUser.uid}`);
      const onValueUnsubscribe = onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const decoded = decodeUser(snapshot.val());
          setUser(decoded);
          localStorage.setItem(cacheKey, JSON.stringify(decoded));
        } else {
          // Initialize New User
          const initials = (firebaseUser.displayName || "Scholar")
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
          const newUser: UserData = {
            ...DEFAULT_USER,
            name: firebaseUser.displayName || "Scholar",
            email: firebaseUser.email || "",
            joined: new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" }),
            avatar: initials,
          };
          set(userRef, encodeUser(newUser));
          setUser(newUser);
          localStorage.setItem(cacheKey, JSON.stringify(newUser));
        }
        setDataLoaded(true);
      }, (error) => {
        console.error("Sync error:", error);
        setDataLoaded(true);
      });

      dbUnsubscribe = onValueUnsubscribe;
    });

    return () => {
      authUnsubscribe();
      if (dbUnsubscribe) dbUnsubscribe();
    };
  }, []);

  // Apply settings side effects
  useEffect(() => {
    localStorage.setItem("samvidhaan_settings", JSON.stringify(settings));
    if (i18n.language !== settings.language) i18n.changeLanguage(settings.language);
    if (settings.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (settings.theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, [settings]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      // No need to clear ALL caches, just stop current session
      window.location.href = "/";
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  const updateProfile = async (data: Partial<UserData>) => {
    if (fbUser && dataLoaded) {
      const cacheKey = `samvidhaan_cache_${fbUser.uid}`;
      setUser(prev => {
        const updated = { ...prev, ...data };
        localStorage.setItem(cacheKey, JSON.stringify(updated));
        // Push update to DB (non-blocking)
        update(ref(db, `users/${fbUser.uid}`), encodeUser(updated))
          .catch(err => console.error("Update error:", err));
        return updated;
      });
    }
  };

  const updateSettings = (data: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...data }));
  };

  return (
    <AuthContext.Provider value={{ user, fbUser, loading, settings, signInWithGoogle, signOut, updateProfile, updateSettings }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
