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

  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem("samvidhaan_settings");
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  // Single global auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setFbUser(firebaseUser);
      if (firebaseUser) {
        try {
          const userRef = ref(db, `users/${firebaseUser.uid}`);
          const userSnapshot = await get(userRef);
          if (userSnapshot.exists()) {
            setUser(userSnapshot.val() as UserData);
          } else {
            const initials = (firebaseUser.displayName || "Scholar")
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();
            const newUser: UserData = {
              name: firebaseUser.displayName || "Scholar",
              email: firebaseUser.email || "",
              joined: new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" }),
              avatar: initials,
              level: "Aspirant",
              location: "India",
              articlesRead: 0,
              quizScore: 0,
              streak: 1,
              bookmarks: 0,
              activity: [],
              saved: [],
            };
            await set(userRef, newUser);
            setUser(newUser);
          }
        } catch (error) {
          console.error("Database error (possibly offline):", error);
          const initials = (firebaseUser.displayName || "S")
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
          setUser({
            ...DEFAULT_USER,
            name: firebaseUser.displayName || "Scholar",
            email: firebaseUser.email || "",
            avatar: initials,
          });
        }
      } else {
        setUser(DEFAULT_USER);
      }
      setLoading(false);
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
    if (fbUser) {
      const updated = { ...user, ...data };
      setUser(updated);
      try {
        await update(ref(db, `users/${fbUser.uid}`), data);
      } catch (error) {
        console.error("Error updating profile:", error);
      }
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
