import { useState, useEffect } from "react";
import i18n from "@/lib/i18n";

// Initial mock data
const INITIAL_USER = {
  name: "Arjun Sharma",
  email: "arjun.sharma@example.com",
  joined: "January 2024",
  avatar: "AS",
  level: "Constitutional Scholar",
  location: "New Delhi, India",
  articlesRead: 48,
  quizScore: 87,
  streak: 14,
  bookmarks: 12,
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
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("samvidhaan_user");
    return saved ? JSON.parse(saved) : INITIAL_USER;
  });

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("samvidhaan_settings");
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem("samvidhaan_user", JSON.stringify(user));
  }, [user]);

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

  const updateProfile = (data: Partial<typeof INITIAL_USER>) => {
    setUser((prev: any) => ({ ...prev, ...data }));
  };

  const updateSettings = (data: Partial<typeof INITIAL_SETTINGS>) => {
    setSettings((prev: any) => ({ ...prev, ...data }));
  };

  const signOut = () => {
    // Logic for sign out
    console.log("Signing out...");
    window.location.href = "/";
  };

  return { user, settings, updateProfile, updateSettings, signOut };
}
