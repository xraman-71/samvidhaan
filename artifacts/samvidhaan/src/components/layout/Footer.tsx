import React from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { AshokaChakra } from "./AshokaChakra";
import { BookOpen, Scale, Users, Gavel, Landmark, Shield, ArrowRight, Globe, Mail, Github, AlertCircle } from "lucide-react";

const PAGE_GUTTER = "px-6 sm:px-8 lg:px-14 xl:px-20 2xl:px-28";
const PAGE_CONTAINER = "mx-auto w-full max-w-7xl 2xl:max-w-[1440px]";

export function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    {
      heading: "Explore",
      links: [
        { label: t('nav.explore'), href: "/explore", icon: BookOpen },
        { label: t('nav.journey'), href: "/making", icon: Landmark },
        { label: t('nav.quiz'), href: "/quiz", icon: Gavel },
        { label: t('nav.framers'), href: "/framers", icon: Users },
      ]
    },
    {
      heading: "Rights & Duties",
      links: [
        { label: "Fundamental Rights", href: "/explore", icon: Shield },
        { label: "Directive Principles", href: "/explore", icon: Scale },
        { label: "Fundamental Duties", href: "/explore", icon: Gavel },
        { label: "Amendments", href: "/explore", icon: BookOpen },
      ]
    },
    {
      heading: "Project",
      links: [
        { label: t('footer.about_title'), href: "/about", icon: Globe },
        { label: "Contact Us", href: "/contact", icon: Mail },
        { label: "Privacy Policy", href: "/privacy", icon: Shield },
        { label: "Open Source", href: "https://github.com", icon: Github },
      ]
    },
  ];

  const quickFacts = [
    { num: "448", label: "Articles" },
    { num: "25", label: "Parts" },
    { num: "12", label: "Schedules" },
    { num: "106+", label: "Amendments" },
  ];

  return (
    <footer className="bg-background border-t border-border/60 relative overflow-hidden">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--primary)/0.02),transparent_30%)] pointer-events-none" />

      {/* Constitutional Quote Banner */}
      <div className={`py-10 ${PAGE_GUTTER} border-b border-border/40 relative z-10`}>
        <div className={PAGE_CONTAINER}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-1 h-14 rounded-full bg-linear-to-b from-primary to-secondary hidden sm:block" />
              <div>
                <p className="text-lg md:text-xl font-serif italic text-foreground leading-relaxed max-w-2xl">
                  "The Constitution is not a mere lawyers' document; it is a vehicle of Life."
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mt-2">— Dr. B.R. Ambedkar</p>
              </div>
            </div>
            <Link href="/explore">
              <div className="flex items-center gap-3 bg-primary/6 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 rounded-2xl px-6 py-3 group cursor-pointer shrink-0">
                <span className="text-sm font-bold text-primary">Start Exploring</span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={`py-16 md:py-20 ${PAGE_GUTTER} relative z-10`}>
        <div className={PAGE_CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <AshokaChakra className="h-5 w-5 text-primary" />
                </div>
                <span className="text-2xl font-bold font-serif text-foreground">Samvidhaan<span className="text-primary">+</span></span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t('footer.about_text')}
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-4 gap-3 pt-2">
                {quickFacts.map((f, i) => (
                  <div key={i} className="bg-muted/60 rounded-2xl p-3 text-center border border-border/50">
                    <p className="text-lg font-bold text-primary">{f.num}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">{f.label}</p>
                  </div>
                ))}
              </div>

              {/* Social/External Links */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com/xraman-71/samvidhaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our GitHub repository"
                  title="GitHub Repository"
                  className="w-10 h-10 rounded-xl bg-muted border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300 flex items-center justify-center"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://mail.google.com/mail/u/7/#inbox?compose=CllgCHrjnPnhHlkgsxGNWsfxzLVvQmjPGfHdnbHbqtJwJwSjVnZkfsxMRMRqHNgTHMGNRQCNNHL"
                  aria-label="Email us at [xrbrowserextension@gmail.com]"
                  title="Contact Email"
                  className="w-10 h-10 rounded-xl bg-muted border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="/"
                  aria-label="Visit our official website"
                  title="Official Website"
                  className="w-10 h-10 rounded-xl bg-muted border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300 flex items-center justify-center"
                >
                  <Globe className="h-4 w-4" />
                </a>
              </div>

            </div>

            {/* Nav Columns Grouped */}
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {navLinks.map((col) => (
                <div key={col.heading} className="space-y-5">
                  <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-foreground/50">{col.heading}</h3>
                  <ul className="space-y-4">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}>
                          <span className="group flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer">
                            <link.icon className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
                            <span className="text-sm font-medium">{link.label}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* QR Code Column */}
            <div className="space-y-6 lg:col-span-1 flex flex-col items-center lg:items-start">
              <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-foreground/50">{t('footer.support_title')}</h3>

              {/* QR Code Section */}
              <div className="w-full bg-muted/40 rounded-3xl p-4 border border-border/50 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden max-w-[180px]">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-white p-2 shadow-inner">
                  <img
                    src="https://i.postimg.cc/s3wPT5DD/qr-url-2026-04-18.png"
                    alt="Donate QR Code"
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{t('footer.scan_donate')}</p>
                  <p className="text-[9px] text-muted-foreground mt-1 leading-tight">Help us keep Samvidhaan+ free for all.</p>
                </div>
              </div>

              {/* Donation Button */}
              <a
                href="https://razorpay.me/@amanxr71"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-linear-to-r from-[#FF9933] via-white/90 to-[#138808] text-black font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/20 group"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <span className="text-blue-900 text-lg">₹</span>
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase tracking-widest opacity-70">SUPPORT</span>
                  <span className="text-sm">{t('footer.support_now')}</span>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className={`py-6 ${PAGE_GUTTER} border-t border-border/20 bg-muted/20 relative z-10`}>
        <div className={`${PAGE_CONTAINER} flex gap-4 items-start`}>
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 shrink-0 mt-0.5 border border-amber-500/20">
            <AlertCircle className="w-4 h-4" />
          </div>
          <p className="text-[11px] leading-relaxed text-muted-foreground font-medium max-w-5xl">
            <strong className="text-foreground uppercase tracking-widest text-[10px]">Disclaimer:</strong> The content provided on Samvidhaan+ is for educational and informational purposes only and does not constitute official legal advice. While every effort is made to ensure the accuracy of the articles and amendments, there may be inadvertent errors, omissions, or delays in updates. In case of any discrepancies or for formal legal matters, please refer exclusively to the official gazette notifications and certified documents published by the Government of India.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`py-6 ${PAGE_GUTTER} border-t border-border/40 relative z-10`}>
        <div className={`${PAGE_CONTAINER} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <div className="flex items-center gap-2">
            <AshokaChakra className="h-3.5 w-3.5 text-primary/50" />
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Samvidhaan+. Open educational initiative. Built with respect for the Constitution of India.
            </p>
          </div>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Contact", href: "/contact" },
              { label: t('nav.about'), href: "/about" },
            ].map((l) => (
              <Link key={l.label} href={l.href}>
                <span className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer">{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
