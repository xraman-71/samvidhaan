import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  User, Sun, Moon, Smartphone, Camera, Globe, Check,
  LogOut, ArrowLeft, Star, HelpCircle, Trophy,
  Zap, ChevronRight, Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AshokaChakra } from "@/components/layout/AshokaChakra";
import { useUserData } from "@/hooks/use-user-data";
import { useToast } from "@/hooks/use-toast";

const PAGE_GUTTER = "px-6 sm:px-10 lg:px-16 xl:px-24";
const PAGE_CONTAINER = "mx-auto w-full max-w-6xl";

const languages = [
  { code: "en", name: "English", label: "International" },
  { code: "hi", name: "हिन्दी", label: "Official" },
  { code: "as", name: "অসমীয়া", label: "Assamese" },
  { code: "bn", name: "বাংলা", label: "Bengali" },
  { code: "brx", name: "बड़ो", label: "Bodo" },
  { code: "doi", name: "डोगरी", label: "Dogri" },
  { code: "gu", name: "ગુજરાતી", label: "Gujarati" },
  { code: "kn", name: "ಕನ್ನಡ", label: "Kannada" },
  { code: "ks", name: "کٲشُر", label: "Kashmiri" },
  { code: "kok", name: "कोंकणी", label: "Konkani" },
  { code: "mai", name: "मैथिली", label: "Maithili" },
  { code: "ml", name: "മലയാളം", label: "Malayalam" },
  { code: "mni", name: "মৈতৈলোন", label: "Manipuri" },
  { code: "mr", name: "मराठी", label: "Marathi" },
  { code: "ne", name: "नेपाली", label: "Nepali" },
  { code: "or", name: "ଓଡ଼ିଆ", label: "Odia" },
  { code: "pa", name: "ਪੰਜਾਬੀ", label: "Punjabi" },
  { code: "sa", name: "संस्कृतम्", label: "Sanskrit" },
  { code: "sat", name: "संताली", label: "Santali" },
  { code: "sd", name: "سنڌي", label: "Sindhi" },
  { code: "ta", name: "தமிழ்", label: "Tamil" },
  { code: "te", name: "తెలుగు", label: "Telugu" },
  { code: "ur", name: "اردو", label: "Urdu" },
];

function Toggle({ isOn, onToggle, label }: { isOn: boolean; onToggle: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative w-9 h-5 rounded-full transition-colors duration-300 focus:outline-none shrink-0 ${isOn ? "bg-primary" : "bg-muted-foreground/20"}`}
      aria-checked={isOn}
      aria-label={label}
      title={label}
      role="switch"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${isOn ? "translate-x-4" : "translate-x-0"}`}
      />
    </button>
  );
}

function SettingRow({ icon: Icon, label, desc, badge, children }: {
  icon: React.ElementType; label: string; desc: string; badge?: string; children?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-6 py-5 border-b border-border/30 last:border-0 group">
      <div className="flex items-start gap-4 grow min-w-0">
        <div className="w-9 h-9 rounded-xl bg-muted/40 border border-border/40 flex items-center justify-center shrink-0 text-muted-foreground mt-0.5 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{label}</p>
            {badge && (
              <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary text-white shadow-sm shadow-primary/20">
                {badge}
              </span>
            )}
          </div>
          <p className="text-[11px] text-muted-foreground leading-tight font-medium opacity-80">{desc}</p>
        </div>
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

function SectionCard({ title, icon: Icon, children }: {
  title: string; icon: React.ElementType; children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white dark:bg-black/30 border border-border/40 rounded-3xl overflow-hidden shadow-sm shadow-black/2"
    >
      <div className="px-7 py-5 flex items-center justify-between border-b border-border/30 bg-muted/10">
        <div className="flex items-center gap-3">
          <Icon className="h-4 w-4 text-primary" />
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground">{title}</h3>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
      </div>
      <div className="px-7 pb-4">{children}</div>
    </motion.div>
  );
}

export default function SettingsPage() {
  const { t } = useTranslation();
  const { user, fbUser, settings, updateProfile, updateSettings, signOut } = useUserData();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = React.useState("General");
  const [formData, setFormData] = React.useState({
    firstName: user.name.split(" ")[0] || "",
    lastName: user.name.split(" ")[1] || "",
  });

  const handleProfileUpdate = () => {
    updateProfile({
      name: `${formData.firstName} ${formData.lastName}`.trim()
    });
    toast({
      title: "Configuration Saved",
      description: "Profile architecture updated successfully.",
    });
  };

  const tabs: Array<{ label: string; desc: string; icon: React.ElementType; badge?: string }> = [
    { label: "General", desc: "Identity & Core", icon: User },
    { label: "Preferences", desc: "Experience & UI", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 overflow-x-hidden">
      <div className={`${PAGE_GUTTER} ${PAGE_CONTAINER}`}>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-serif text-foreground tracking-tight">{t('settings.title')}</h1>
            </div>
            <p className="text-muted-foreground text-lg font-medium max-w-xl leading-relaxed">
              Refine your digital workspace and tailor the constitutional study environment to your needs.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/account">
              <Button variant="outline" className="h-12 px-6 rounded-2xl border-border/60 hover:bg-muted font-bold text-sm gap-2">
                <ArrowLeft className="h-4 w-4" /> Return to Account
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Sidebar Nav */}
          <div className="md:col-span-3 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                title={tab.label}
                aria-label={tab.label}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[11px] font-bold transition-all relative group text-left ${
                  activeTab === tab.label 
                    ? "text-primary bg-primary/5 shadow-sm shadow-primary/5 border border-primary/20" 
                    : "text-muted-foreground hover:bg-muted/40 hover:text-foreground border border-transparent"
                }`}
              >
                {activeTab === tab.label && (
                  <motion.div layoutId="activeTabCompact" className="absolute left-1 w-1 h-5 bg-primary rounded-full" />
                )}
                <tab.icon className={`h-5 w-5 shrink-0 transition-all ${activeTab === tab.label ? "scale-110 text-primary" : "group-hover:scale-110"}`} />
                <div className="grow">
                  <span className="block">{tab.label}</span>
                  <span className={`text-[9px] font-medium opacity-60 block mt-0.5 ${activeTab === tab.label ? "text-primary/70" : ""}`}>{tab.desc}</span>
                </div>
                {tab.badge && (
                  <span className={`text-[8px] px-1.5 py-0.5 rounded-md font-black tracking-widest ${activeTab === tab.label ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}


          </div>

          {/* Settings Viewport */}
          <div className="md:col-span-9">
            <AnimatePresence mode="wait">
              {activeTab === "General" && (
                <SectionCard key="general" title={t('settings.personal_identity')} icon={User}>
                  <div className="flex items-center gap-6 py-8 border-b border-border/30">
                    <div className="relative group">
                      <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-primary via-primary/80 to-secondary flex items-center justify-center text-primary-foreground font-black text-2xl shadow-lg shadow-primary/10">
                        {user.avatar}
                      </div>
                      <button 
                        type="button"
                        aria-label="Upload new avatar"
                        title="Upload new avatar"
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-background border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-all shadow-md"
                      >
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground">Scholar Identity</p>
                      <p className="text-[11px] text-muted-foreground mt-1 font-medium leading-relaxed">This avatar and name will be visible to other scholars on the global leaderboard and forum.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-b border-border/30">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 ml-1">Legal First Name</label>
                      <input 
                        id="firstName"
                        value={formData.firstName} 
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-muted/40 border border-border/40 rounded-xl px-4 py-3 text-sm font-bold text-foreground focus:border-primary focus:bg-background outline-none transition-all shadow-inner" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 ml-1">Legal Last Name</label>
                      <input 
                        id="lastName"
                        value={formData.lastName} 
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full bg-muted/40 border border-border/40 rounded-xl px-4 py-3 text-sm font-bold text-foreground focus:border-primary focus:bg-background outline-none transition-all shadow-inner" 
                      />
                    </div>
                  </div>

                  <div className="py-8 border-b border-border/30">
                    <label htmlFor="email" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 ml-1 mb-3 block">Authorized Email Address</label>
                    <div className="flex gap-4">
                      <input 
                        id="email"
                        value={fbUser?.email || user.email || ""} 
                        readOnly
                        className="grow bg-muted/20 border border-border/40 rounded-xl px-4 py-3 text-sm font-bold text-muted-foreground outline-none shadow-inner cursor-not-allowed opacity-70" 
                      />
                      <div className="shrink-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-500/10 px-4 rounded-xl border border-green-500/20">
                        <Check className="h-3.5 w-3.5" /> Verified
                      </div>
                    </div>
                  </div>

                  <SettingRow icon={Globe} label={t('settings.language')} desc={t('settings.language_desc')}>
                    <select 
                      id="interfaceLanguage"
                      title="Select Interface Language"
                      value={settings.language}
                      onChange={(e) => updateSettings({ language: e.target.value })}
                      className="text-[11px] font-black bg-muted/60 border border-border/40 rounded-xl px-4 py-2 text-foreground outline-none cursor-pointer hover:border-primary transition-colors min-w-[160px]"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.name} ({lang.label})
                        </option>
                      ))}
                    </select>
                  </SettingRow>

                  <div className="py-8">
                    <Button 
                      onClick={handleProfileUpdate}
                      className="h-11 px-10 rounded-2xl bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:translate-y-[-2px] active:translate-y-0 transition-all"
                    >
                      Commit Configuration
                    </Button>
                  </div>
                </SectionCard>
              )}

              {activeTab === "Preferences" && (
                <SectionCard key="preferences" title="Experience Architecture" icon={Zap}>
                  <SettingRow icon={Sun} label={t('settings.theme')} desc={t('settings.theme_desc')}>
                    <div className="flex bg-muted/40 p-1 rounded-xl border border-border/40">
                      {[
                        { id: "light", icon: Sun },
                        { id: "system", icon: Smartphone },
                        { id: "dark", icon: Moon }
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => updateSettings({ theme: t.id })}
                          title={`Switch to ${t.id} mode`}
                          aria-label={`Switch to ${t.id} mode`}
                          className={`p-2 rounded-lg transition-all ${settings.theme === t.id ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                        >
                          <t.icon className="h-4 w-4" />
                        </button>
                      ))}
                    </div>
                  </SettingRow>

                  <SettingRow icon={Smartphone} label="Compact Module View" desc="Reduce layout spacing for higher density information">
                    <Toggle isOn={settings.compactMode} onToggle={() => updateSettings({ compactMode: !settings.compactMode })} label="Toggle compact mode" />
                  </SettingRow>

                  <SettingRow icon={Zap} label="Fluid Animations" desc="Enable high-performance transition effects across modules">
                    <Toggle isOn={settings.animations} onToggle={() => updateSettings({ animations: !settings.animations })} label="Toggle animations" />
                  </SettingRow>
                </SectionCard>
              )}


            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
