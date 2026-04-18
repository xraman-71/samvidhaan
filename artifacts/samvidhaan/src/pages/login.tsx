import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Shield, ArrowRight, Lock, CheckCircle2, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AshokaChakra } from "@/components/layout/AshokaChakra";
import { useUserData } from "@/hooks/use-user-data";

export default function LoginPage() {
  const { t } = useTranslation();
  const { fbUser, signInWithGoogle } = useUserData();
  const [, setLocation] = useLocation();

  // If already logged in, redirect to home
  React.useEffect(() => {
    if (fbUser) {
      setLocation("/");
    }
  }, [fbUser, setLocation]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center py-12 px-6 sm:px-10">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-md z-10">
        {/* Brand Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 mb-6 shadow-lg shadow-primary/5"
          >
            <AshokaChakra className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-black font-serif text-foreground tracking-tight"
          >
            Samvidhaan<span className="text-primary">+</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-3 font-medium"
          >
            Enter the digital sanctuary of the Indian Constitution.
          </motion.p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-black/40 border border-border/60 rounded-[32px] p-8 shadow-2xl shadow-black/5 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-linear-to-b from-primary/2 to-transparent pointer-events-none" />

          <div className="space-y-8 relative">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-foreground">Scholar Authentication</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Connect your identity to access the full range of Samvidhaan+ features and track your constitutional journey.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={signInWithGoogle}
                className="w-full h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-border/80 text-foreground hover:bg-muted font-bold text-sm shadow-sm flex items-center justify-center gap-3 group transition-all"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>Continue with Google</span>
              </Button>
            </div>

            <div className="flex items-center gap-3 py-2">
              <div className="h-px grow bg-border/40" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">One-Tap Authentication</span>
              <div className="h-px grow bg-border/40" />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-foreground mb-0.5">Secure Authentication</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">Industry-standard encryption powered by Google to keep your account safe and accessible.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-foreground mb-0.5">Instant Access</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">Zero-configuration setup. Just one click to enter the digital sanctuary of the Indian Constitution.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-[11px] text-muted-foreground font-medium">
            By continuing, you are embarking on a journey of Constitutional literacy.
            <br />
            <Link href="/privacy">
              <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>
            </Link>
            {" • "}
            <Link href="/about">
              <span className="text-primary hover:underline cursor-pointer">Project Samvidhaan</span>
            </Link>
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 opacity-40 grayscale group-hover:grayscale-0 transition-all">
            <Shield className="h-4 w-4" />
            <Lock className="h-4 w-4" />
            <Globe className="h-4 w-4" />
            <CheckCircle2 className="h-4 w-4" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
