import { useState, useEffect } from "react";
import i18n from "@/lib/i18n";
import { auth, googleProvider, db } from "@/lib/firebase";
import { 
  signInWithPopup, 
  signOut as firebaseSignOut, 
  onAuthStateChanged,
  User as FirebaseUser 
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Initial mock/default data
const DEFAULT_USER = {
  name: "Guest Scholar",
  email: "",
  joined: "",
  avatar: "??",
  level: "Beginner",
  location: "India",
  articlesRead: 0,
  quizScore: 0,
  streak: 0,
  bookmarks: 0,
};

const INITIAL_SETTINGS = {
  theme: "system",
  compactMode: false,
  animations: true,
  language: "en",
  emailDigest: true,
  quizReminders: true,
};

export function useUserData() {
  const [user, setUser] = useState<any>(DEFAULT_USER);
  const [fbUser, setFbUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("samvidhaan_settings");
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  // Listen for Auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setFbUser(user);
      if (user) {
        // Fetch additional data from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUser(userDoc.data());
        } else {
          // Initialize new user in Firestore
          const newUser = {
            name: user.displayName || "Scholar",
            email: user.email || "",
            joined: new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }),
            avatar: (user.displayName || "S").split(" ").map(n => n[0]).join("").toUpperCase(),
            level: "Aspirant",
            location: "India",
            articlesRead: 0,
            quizScore: 0,
            streak: 1,
            bookmarks: 0,
          };
          await setDoc(doc(db, "users", user.uid), newUser);
          setUser(newUser);
        }
      } else {
        setUser(DEFAULT_USER);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    localStorage.setItem("samvidhaan_settings", JSON.stringify(settings));
    
    // Sync i18n language
    if (i18n.language !== settings.language) {
      i18n.changeLanguage(settings.language);
    }

    // Apply theme to document
    if (settings.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (settings.theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // System
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, [settings]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const updateProfile = async (data: Partial<typeof DEFAULT_USER>) => {
    if (fbUser) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      await setDoc(doc(db, "users", fbUser.uid), updatedUser, { merge: true });
    }
  };

  const updateSettings = (data: Partial<typeof INITIAL_SETTINGS>) => {
    setSettings((prev: any) => ({ ...prev, ...data }));
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return { user, fbUser, loading, settings, updateProfile, updateSettings, signInWithGoogle, signOut };
}

