import React from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, Map, HelpCircle, Info, Menu, X, ScrollText, Users, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AshokaChakra } from "./AshokaChakra";
import { useUserData } from "@/hooks/use-user-data";

export function Header() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const { fbUser, user, signInWithGoogle } = useUserData();

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
          <div className="hidden md:flex items-center">
            {fbUser ? (
              <Link href="/settings">
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-10 px-4 rounded-xl hover:bg-primary/5 group transition-all duration-200 flex items-center gap-3"
                >
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-foreground leading-none">{user.name}</span>
                    <span className="text-[10px] font-medium text-muted-foreground leading-none mt-1">{user.level}</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black text-xs group-hover:bg-primary group-hover:text-white transition-all">
                    {user.avatar}
                  </div>
                </Button>
              </Link>
            ) : (
              <Button
                size="sm"
                onClick={signInWithGoogle}
                className="h-9 px-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-primary/20 hover:-translate-y-px transition-all duration-200 font-semibold text-sm gap-2"
              >
                <User className="h-3.5 w-3.5" />
                Sign In
              </Button>
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
                <Link href="/settings" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full h-12 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base gap-2">
                    <User className="h-5 w-5" />
                    Settings
                  </Button>
                </Link>
              ) : (
                <Button 
                  onClick={() => {
                    signInWithGoogle();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full h-12 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base gap-2"
                >
                  <User className="h-5 w-5" />
                  Sign In with Google
                </Button>
              )}
            </div>
          </motion.nav>
        </div>
      </div>
    </>
  );
}
