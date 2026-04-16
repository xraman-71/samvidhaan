import React from "react";
import { Link, useLocation } from "wouter";
import { BookOpen, Map, HelpCircle, Info, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AshokaChakra } from "./AshokaChakra";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: BookOpen },
    { href: "/explore", label: "Explore", icon: Map },
    { href: "/quiz", label: "Quiz", icon: HelpCircle },
    { href: "/about", label: "About", icon: Info },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <AshokaChakra className="h-8 w-8 text-accent group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />
            <span className="text-xl font-bold tracking-tight text-foreground font-serif">Samvidhaan<span className="text-secondary">+</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location === link.href ? "text-secondary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/explore">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 ml-4 shadow-sm hover:translate-y-[-2px] transition-all">
                Start Learning
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden pt-16">
          <nav className="flex flex-col p-6 gap-6 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-4 text-xl font-medium p-4 rounded-lg transition-colors ${
                  location === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <link.icon className={`h-6 w-6 ${location === link.href ? "text-secondary" : "text-muted-foreground"}`} />
                {link.label}
              </Link>
            ))}
            <div className="mt-auto pb-8">
              <Link href="/explore" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-lg">
                  Start Learning
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
