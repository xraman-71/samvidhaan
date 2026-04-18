import React from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, Map, HelpCircle, Info, Menu, X, ScrollText, Users, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AshokaChakra } from "./AshokaChakra";
import { useUserData } from "@/hooks/use-user-data";

export function Header() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const { fbUser, user, signInWithGoogle, signOut } = useUserData();

  const navLinks = [
    { href: "/", label: t('nav.home'), icon: BookOpen },
    { href: "/explore", label: t('nav.explore'), icon: Map },
    { href: "/making", label: t('nav.journey'), icon: ScrollText },
    { href: "/framers", label: t('nav.framers'), icon: Users },
    { href: "/quiz", label: t('nav.quiz'), icon: HelpCircle },
    { href: "/about", label: t('nav.about'), icon: Info },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-sm"
            : "bg-background/60 backdrop-blur-md border-b border-transparent"
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-primary/40 to-transparent" />

        <div className="mx-auto flex h-[68px] items-center justify-between px-6 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 max-w-7xl 2xl:max-w-[1440px] w-full">

          {/* Logo */}
          <Link href="/">
            <span className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-primary/8 border border-primary/20 group-hover:bg-primary/15 transition-colors duration-300">
                <AshokaChakra className="h-5 w-5 text-primary group-hover:rotate-360 transition-transform duration-1000 ease-in-out" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground font-serif">
                Samvidhaan<span className="text-primary">+</span>
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer group flex items-center gap-1.5 ${
                      isActive
                        ? "text-primary bg-primary/8"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                    {/* Active indicator dot */}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Account CTA */}
          <div className="hidden md:flex items-center gap-3">
            {fbUser ? (
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold text-foreground leading-none">{user.name}</span>
                  <span className="text-[10px] font-medium text-muted-foreground leading-none mt-1">{user.level}</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
                  {user.avatar}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => signOut()}
                  className="h-8 px-3 rounded-xl border-destructive/20 text-destructive hover:bg-destructive/5 font-bold text-[10px] uppercase tracking-widest"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link href="/login">
                <Button
                  size="sm"
                  className="h-9 px-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-primary/20 hover:-translate-y-px transition-all duration-200 font-semibold text-sm gap-2"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-200 ${
              mobileMenuOpen
                ? "bg-primary/10 border-primary/30 text-primary"
                : "bg-muted border-border text-foreground hover:border-border/80"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            title={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen ? "true" : "false"}
          >
            <span
              className={`absolute transition-all duration-200 ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
            >
              <X size={18} />
            </span>
            <span
              className={`absolute transition-all duration-200 ${mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
            >
              <Menu size={18} />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-lg"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-[68px] left-0 right-0 bg-background border-b border-border shadow-2xl transition-all duration-300 ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <motion.nav 
            className="flex flex-col p-5 gap-1.5"
            initial="closed"
            animate={mobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
            }}
          >
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -10 }
                    }}
                    className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <link.icon
                      className={`h-5 w-5 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                    />
                    <span className="text-base font-semibold">{link.label}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </motion.span>
                </Link>
              );
            })}

            {/* Mobile Account CTA */}
            <div className="mt-4 pt-4 border-t border-border pb-2">
              {fbUser ? (
                <Button 
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full h-12 rounded-2xl bg-destructive/10 text-destructive hover:bg-destructive/15 font-semibold text-base gap-2 border border-destructive/20"
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </Button>
              ) : (
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full h-12 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base gap-2">
                    <User className="h-5 w-5" />
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </motion.nav>
        </div>
      </div>
    </>
  );
}
