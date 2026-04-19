import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut as firebaseSignOut, 
  User as FirebaseUser 
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

// Basic Scholar Data (Local Only)
export interface Activity {
  icon: string;
  text: string;
  time: string;
  color: string;
  bg: string;
  link: string;
}

export interface SavedItem {
  id: string;
  title: string;
  part: string;
  icon: string;
}

export interface UserData {
  name: string;
  email: string;
  avatar: string;
  level: string;
  streak: number;
  articlesRead: number;
  activity: Activity[];
  saved: SavedItem[];
  bookmarks: number;
  quizScore: number;
}

const DEFAULT_USER: UserData = {
  name: "Scholar",
  email: "",
  avatar: "S",
  level: "Beginner",
  streak: 0,
  articlesRead: 0,
  activity: [],
  saved: [],
  bookmarks: 0,
  quizScore: 0,
};

// Simple Settings (Local Only)
export interface Settings {
  language: "en" | "hi";
  theme: "light" | "dark" | "system";
}

const INITIAL_SETTINGS: Settings = {
  language: "en",
  theme: "system",
};

interface AuthContextValue {
  fbUser: FirebaseUser | null;
  user: UserData;
  settings: Settings;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  updateSettings: (data: Partial<Settings>) => void;
  updateProfile: (data: Partial<UserData>) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [fbUser, setFbUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserData>(DEFAULT_USER);
  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem("samvidhaan_settings");
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  // Auth State Listener (Auth Only)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFbUser(user);
      if (user) {
        setUser({
          ...DEFAULT_USER,
          name: user.displayName || "Scholar",
          email: user.email || "",
          avatar: (user.displayName || "S").charAt(0).toUpperCase(),
        });
      } else {
        setUser(DEFAULT_USER);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Persistent Settings (Local Storage Only)
  useEffect(() => {
    localStorage.setItem("samvidhaan_settings", JSON.stringify(settings));
    document.documentElement.classList.toggle("dark", settings.theme === "dark");
  }, [settings]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Auth: Google Sign-in failed", error);
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Auth: Sign-out failed", error);
    }
  };

  const updateSettings = (data: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...data }));
  };

  const updateProfile = async (data: Partial<UserData>) => {
    setUser((prev) => ({ ...prev, ...data }));
    // In a real app, you would also save this to Firebase/DB here
  };

  return (
    <AuthContext.Provider value={{ 
      fbUser, 
      user, 
      settings, 
      loading, 
      signInWithGoogle, 
      signOut,
      updateSettings,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
