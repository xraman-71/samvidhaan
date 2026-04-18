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

  // 2. Auth State Listener
  useEffect(() => {
    const authUnsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setFbUser(firebaseUser);
      setLoading(false);
      if (!firebaseUser) {
        setUser(DEFAULT_USER);
        setDataLoaded(true);
      }
    });
    return () => authUnsubscribe();
  }, []);

  // 3. Data Sync Listener (Pure Firebase)
  useEffect(() => {
    if (!fbUser) return;

    const syncUser = async () => {
      console.log("Samvidhaan Cloud: Connecting to database for", fbUser.email);
      const userRef = ref(db, `users/${fbUser.uid}`);
      
      try {
        // Direct check for existence (More stable for creation)
        const snapshot = await get(userRef);
        
        if (!snapshot.exists()) {
          console.log("Samvidhaan Cloud: New scholar detected. Initializing cloud profile...");
          const initials = (fbUser.displayName || "Scholar")
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
          
          const newUser: UserData = {
            ...DEFAULT_USER,
            name: fbUser.displayName || "Scholar",
            email: fbUser.email || "",
            joined: new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" }),
            avatar: initials,
          };

          // Direct set like the user snippet
          await set(userRef, encodeUser(newUser));
          console.log("Samvidhaan Cloud: Profile successfully added to Firebase!");
          setUser(newUser);
        } else {
          setUser(decodeUser(snapshot.val()));
          console.log("Samvidhaan Cloud: Existing profile loaded.");
        }
        
        setDataLoaded(true);

        // Start realtime listener for subsequent updates
        const onValueUnsubscribe = onValue(userRef, (snap) => {
          if (snap.exists()) {
            setUser(decodeUser(snap.val()));
          }
        }, (error) => {
          console.error("Samvidhaan Cloud: Sync error", error);
        });

        return onValueUnsubscribe;
      } catch (error: any) {
        console.error("Samvidhaan Cloud: Connection error:", error);
        alert("DATABASE CONNECTION FAILED! \n\nReason: " + error.message);
        setDataLoaded(true);
      }
    };

    let unsubscribe: (() => void) | undefined;
    syncUser().then(unsub => {
      unsubscribe = unsub;
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [fbUser]);

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
      setUser(prev => {
        const updated = { ...prev, ...data };
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
