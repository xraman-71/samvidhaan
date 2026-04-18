import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider, db } from "@/lib/firebase";
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { ref, get, set, update } from "firebase/database";
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

function decodeUser(c: CompressedUser): UserData {
  return {
    name: c.n || "", email: c.e || "", joined: c.j || "", avatar: c.a || "GS",
    level: c.l || "Beginner", location: c.loc || "India",
    articlesRead: c.ar || 0, quizScore: c.qs || 0, streak: c.s || 0, bookmarks: c.b || 0,
    activity: (c.act || []).map(a => ({ icon: a.i, text: a.t, time: a.tm, color: a.c, bg: a.bg, link: a.lk })),
    saved: (c.sv || []).map(s => ({ id: s.id, title: s.tt, part: s.p, icon: s.ic })),
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
  const [dataLoaded, setDataLoaded] = useState(false);

  // Single global auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setFbUser(firebaseUser);
      
      if (!firebaseUser) {
        setUser(DEFAULT_USER);
        setDataLoaded(true);
        setLoading(false);
        return;
      }

      try {
        const userRef = ref(db, `users/${firebaseUser.uid}`);
        const userSnapshot = await get(userRef);
        
        if (userSnapshot.exists()) {
          const decoded = decodeUser(userSnapshot.val() as CompressedUser);
          setUser(decoded);
        } else {
          // Initialize new user
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
          await set(userRef, encodeUser(newUser));
          setUser(newUser);
        }
      } catch (error) {
        console.error("Database fetch error:", error);
      } finally {
        setDataLoaded(true);
        setLoading(false);
      }
    });

    return () => unsubscribe();
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
      window.location.href = "/";
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  const updateProfile = async (data: Partial<UserData>) => {
    if (fbUser && dataLoaded) {
      // Functional update to ensure we use latest state
      setUser(prev => {
        const updated = { ...prev, ...data };
        // Fire and forget the DB update to keep UI snappy
        set(ref(db, `users/${fbUser.uid}`), encodeUser(updated))
          .catch(err => console.error("Sync error:", err));
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
