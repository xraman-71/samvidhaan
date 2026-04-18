import { motion, Variants } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { BookOpen, Shield, Scale, Users, ArrowRight, CheckCircle2, Sparkles, Layers, Gavel, Landmark, Quote, Compass, HelpCircle, Info, Palette, PenTool, RefreshCw, Eye, Star, Search, GraduationCap, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CONSTITUTION_START = new Date("1950-01-26T10:30:00+05:30");
const PAGE_GUTTER = "px-6 sm:px-10 lg:px-16 xl:px-24";
const PAGE_CONTAINER = "mx-auto w-full max-w-7xl";

function getElapsed() {
  const now = new Date();
  const diff = now.getTime() - CONSTITUTION_START.getTime();

  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);

  let years = now.getFullYear() - CONSTITUTION_START.getFullYear();
  let months = now.getMonth() - CONSTITUTION_START.getMonth();
  let days = now.getDate() - CONSTITUTION_START.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days, hours, minutes, seconds, totalDays };
}

function ConstitutionTimer() {
  const [elapsed, setElapsed] = useState(getElapsed);

  useEffect(() => {
    const id = setInterval(() => setElapsed(getElapsed()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Years",   value: elapsed.years },
    { label: "Months",  value: elapsed.months },
    { label: "Days",    value: elapsed.days },
    { label: "Hours",   value: elapsed.hours },
    { label: "Minutes", value: elapsed.minutes },
    { label: "Seconds", value: elapsed.seconds },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`py-10 ${PAGE_GUTTER} bg-primary relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[24px_24px]" />
      <div className={`${PAGE_CONTAINER} relative z-10 flex flex-col md:flex-row items-center justify-between gap-8`}>
        <div className="text-center md:text-left">
          <p className="text-primary-foreground/50 text-[10px] font-black tracking-[0.2em] uppercase mb-1">
            In Force Since 1950
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-primary-foreground leading-tight">
            The World's Longest <br className="hidden md:block" /> Written Constitution
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {units.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center">
                <AnimatedNumber value={value} />
              </div>
              <span className="mt-1.5 text-[8px] font-black text-primary-foreground/60 uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <motion.span
        key={value}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl md:text-2xl font-bold text-white tabular-nums"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
    </div>
  );
}

function AshokChakraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.03] dark:opacity-[0.05] select-none">
      {/* Main Large Chakra */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
          className="w-[70vh] h-[70vh] shrink-0"
        >
          <ChakraSVG />
        </motion.div>
      </div>

      {/* Top Left Small Chakra */}
      <div className="absolute top-[-10vh] left-[-10vh]">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="w-[40vh] h-[40vh]"
        >
          <ChakraSVG />
        </motion.div>
      </div>

      {/* Bottom Right Small Chakra */}
      <div className="absolute bottom-[-15vh] right-[-10vh]">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="w-[50vh] h-[50vh]"
        >
          <ChakraSVG />
        </motion.div>
      </div>
    </div>
  );
}

function ChakraSVG() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary">
      <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="0.5" />
      {Array.from({ length: 24 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 15} 100 100)`}>
          <path
            d="M100 100 L100 2"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <circle cx="100" cy="2" r="1.5" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] relative">
      <AshokChakraBackground />
      {/* Hero Section */}
      <section className={`relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20 ${PAGE_GUTTER} border-b border-border/40`}>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[500px] bg-gradient-radial from-primary/5 to-transparent blur-3xl opacity-60" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]" />
        </div>
        
        <div className={`${PAGE_CONTAINER} relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
          {/* Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/2 px-3 py-1 text-[10px] font-black tracking-widest uppercase text-primary shadow-sm">
                <Sparkles className="mr-2 h-3 w-3" />
                <span>{t('hero.tagline')}</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-[4.8rem] font-bold tracking-tight text-foreground mb-6 leading-[1.05]"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              {t('hero.title_1')} <span className="text-primary">{t('hero.title_2')}</span> <br className="hidden md:block" /> {t('hero.title_3')}
            </motion.h1>

            <motion.p 
              className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground mb-10 leading-relaxed font-medium"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            >
              <Link href="/explore">
                <Button size="lg" className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-sm hover:-translate-y-px transition-all">
                  {t('hero.cta_explore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/quiz">
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-xl border-border/60 text-sm font-bold bg-background/50 hover:bg-muted transition-all">
                  {t('hero.cta_quiz')}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Hero Image (Ambedkar) */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[420px] aspect-4/5 rounded-[2.5rem] overflow-hidden border border-border/40 shadow-2xl bg-muted/20 group">
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent z-10" />
              <img 
                src="/images/ambedkar-about.png" 
                alt="Dr. B.R. Ambedkar" 
                className="w-full h-full object-cover grayscale-10 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">Chief Architect</p>
                  <h4 className="text-xl font-bold text-white font-serif">Dr. Bhimrao Ambedkar</h4>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Stats/Timer Strip */}
      <ConstitutionTimer />

      {/* Why Samvidhaan+ (Expanded Features Section) */}
      <section className={`py-24 ${PAGE_GUTTER} relative`}>
        <div className={PAGE_CONTAINER}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black tracking-[0.2em] uppercase text-secondary mb-3">Why Samvidhaan+</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">A Trusted Civic Companion</h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              We've bridged the gap between complex legal code and everyday understanding, creating a platform that empowers every citizen to own their rights.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {[
              { 
                icon: BookOpen, 
                title: "Plain Language", 
                desc: "We've translated complex legal jargon and archaic phrasing into modern, everyday language that anyone can understand without a law degree.", 
                color: "text-secondary", 
                bg: "bg-secondary/5" 
              },
              { 
                icon: Scale, 
                title: "Practical Examples", 
                desc: "Every article is accompanied by real-world scenarios demonstrating how constitutional laws apply to your daily life, business, and community.", 
                color: "text-primary", 
                bg: "bg-primary/5" 
              },
              { 
                icon: Users, 
                title: "For Every Citizen", 
                desc: "Whether you're a student preparing for competitive exams, a legal professional, or a curious citizen, find exactly what you need with ease.", 
                color: "text-accent", 
                bg: "bg-accent/5" 
              },
              { 
                icon: Search, 
                title: t('home.feature_explorer_title'), 
                desc: t('home.feature_explorer_desc'), 
                color: "text-primary", 
                bg: "bg-primary/5" 
              },
              { 
                icon: GraduationCap, 
                title: t('home.feature_insights_title'), 
                desc: t('home.feature_insights_desc'), 
                color: "text-secondary", 
                bg: "bg-secondary/5" 
              },
              { 
                icon: Zap, 
                title: t('home.feature_learning_title'), 
                desc: t('home.feature_learning_desc'), 
                color: "text-accent", 
                bg: "bg-accent/5" 
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={item} className="bg-white dark:bg-black/20 p-8 rounded-2xl border border-border/40 hover:border-primary/20 hover:shadow-xl transition-all duration-500 group flex flex-col h-full">
                <div className={`${feature.bg} ${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-transparent group-hover:border-current/10 shadow-sm`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium grow">{feature.desc}</p>
                <div className="mt-6 flex items-center text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Architects Section */}
      <section className={`py-20 ${PAGE_GUTTER} bg-muted/10 border-y border-border/30 relative overflow-hidden`}>
        <div className={`${PAGE_CONTAINER} relative z-10`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} className="order-2 lg:order-1 relative">
              <div className="aspect-16/10 rounded-2xl overflow-hidden border border-border/40 shadow-sm relative">
                <img src="/images/ambedkar-about.png" alt="Framers" className="object-cover w-full h-full grayscale-20 hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-border/40">
                  <p className="text-xs italic text-foreground mb-1">"Constitution is a vehicle of Life, and its spirit is always the spirit of Age."</p>
                  <p className="text-[9px] font-black text-primary uppercase tracking-widest">— Dr. B.R. Ambedkar</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 lg:order-2">
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-secondary mb-3">{t('home.architects_tag')}</p>
              <h2 className="text-3xl font-bold text-primary mb-5">{t('home.architects_title')}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-6">
                {t('home.architects_desc')}
              </p>
              <Link href="/framers">
                <Button variant="outline" size="sm" className="h-10 px-6 rounded-lg border-primary/20 hover:bg-primary/5 text-xs font-bold gap-2 group">
                  Meet the Framers <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className={`py-20 ${PAGE_GUTTER}`}>
        <div className={PAGE_CONTAINER}>
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-3">{t('home.pillars_title')}</h2>
              <p className="text-sm text-muted-foreground font-medium">{t('home.pillars_desc')}</p>
            </div>
            <Link href="/explore">
              <Button variant="link" className="text-primary font-black uppercase tracking-widest text-[10px] p-0 h-auto gap-1.5 group">
                {t('home.pillars_view_all')} <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "III", title: "Fundamental Rights", desc: "Arts 12-35", color: "text-secondary", bg: "bg-secondary/10" },
              { num: "IV", title: "Directive Principles", desc: "Arts 36-51", color: "text-primary", bg: "bg-primary/10" },
              { num: "IVA", title: "Fundamental Duties", desc: "Art 51A", color: "text-accent", bg: "bg-accent/10" },
              { num: "XX", title: "Amendment Process", desc: "Art 368", color: "text-muted-foreground", bg: "bg-muted/10" },
            ].map((part, i) => (
              <Link key={i} href="/explore">
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className="bg-white dark:bg-black/20 p-6 rounded-2xl border border-border/40 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className={`w-10 h-10 rounded-lg ${part.bg} ${part.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-[10px] font-black">{part.num}</span>
                  </div>
                  <h3 className="text-sm font-bold mb-1">{part.title}</h3>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{part.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* A Living Document Section */}
      <section className={`py-24 ${PAGE_GUTTER} bg-muted/10 border-y border-border/30 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-3xl pointer-events-none" />
        <div className={PAGE_CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-5 sticky top-32">
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-secondary mb-3 flex items-center gap-2">
                <Gavel className="h-3.5 w-3.5" /> {t('home.living_tag')}
              </p>
              <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">{t('home.living_title')}</h2>
              <p className="text-base text-muted-foreground font-medium mb-10 leading-relaxed">
                {t('home.living_desc')}
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/50 dark:bg-black/30 p-7 rounded-2xl border border-border/40 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/3 rounded-bl-full -mr-12 -mt-12 transition-colors group-hover:bg-primary/5" />
                  <Quote className="h-8 w-8 text-primary/10 mb-4" />
                  <p className="text-lg font-serif italic text-foreground mb-4 leading-relaxed">
                    "{t('home.quote_text')}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-primary/20" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">{t('home.quote_sub')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-2">
                  <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary">
                    <Star className="h-5 w-5 fill-primary/10" />
                  </div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{t('home.motto')}</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { k: "Equality", title: "Dynamic Fairness", tag: "Arts 14–16", icon: Scale, desc: "Not just formal equality, but substantive justice that accounts for historical disadvantages." },
                { k: "Liberty", title: "Safeguarded Freedom", tag: "Arts 19–22", icon: Shield, desc: "Protection against arbitrary state action through fair, just, and reasonable procedures." },
                { k: "Dignity", title: "The Right to Be", tag: "Art 21", icon: Users, desc: "Expanded by courts to include privacy, environment, and the right to live with full human dignity." },
                { k: "Remedy", title: "The Soul's Shield", tag: "Art 32", icon: Landmark, desc: "The 'Heart and Soul'—allowing every citizen to directly approach the highest court for their rights." },
                { k: "Evolution", title: "Organic Growth", tag: "Art 368", icon: RefreshCw, desc: "The ability to amend and adapt to new social realities while preserving the inviolable 'Basic Structure' of the Republic." },
                { k: "Guardian", title: "Judicial Oversight", tag: "Review", icon: Eye, desc: "The power of courts to strike down any law that violates the fundamental spirit of the Constitution." },
                { k: "Secularism", title: "Plural Harmony", tag: "Preamble", icon: Compass, desc: "A positive concept where the state maintains a principled distance while respecting all faiths equally." },
                { k: "Federalism", title: "Shared Power", tag: "Part XI", icon: Layers, desc: "A unique balance where the Union and States work in cooperative harmony to govern a diverse nation." },
              ].map((t, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                  className="bg-white dark:bg-black/20 border border-border/40 rounded-2xl p-6 hover:border-primary/20 hover:shadow-md transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <t.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-[9px] font-black uppercase tracking-widest text-primary">{t.k}</p>
                        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-muted border border-border text-muted-foreground/60">{t.tag}</span>
                      </div>
                      <h3 className="text-sm font-bold text-foreground">{t.title}</h3>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground font-medium leading-relaxed grow">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Judicial History */}
      <section className={`py-24 ${PAGE_GUTTER} relative overflow-hidden`}>
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border/40 to-transparent" />
        <div className={PAGE_CONTAINER}>
          <div className="text-center mb-20">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-secondary mb-3">{t('home.judicial_tag')}</p>
            <h3 className="text-4xl font-bold text-primary mb-6">{t('home.judicial_title')}</h3>
            <p className="text-sm text-muted-foreground font-medium max-w-2xl mx-auto">
              {t('home.judicial_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                year: "1973", 
                case: "Kesavananda Bharati v. State of Kerala", 
                principle: "Basic Structure Doctrine", 
                tag: "Art 368", 
                color: "text-primary", 
                bg: "bg-primary/5",
                desc: "Established that Parliament cannot alter the basic features of the Constitution. The most significant judgment in Indian legal history."
              },
              { 
                year: "2017", 
                case: "Justice K.S. Puttaswamy v. Union of India", 
                principle: "Right to Privacy", 
                tag: "Art 21", 
                color: "text-accent", 
                bg: "bg-accent/5",
                desc: "A unanimous 9-judge bench ruling that privacy is a fundamental right, intrinsic to life and personal liberty."
              },
              { 
                year: "1978", 
                case: "Maneka Gandhi v. Union of India", 
                principle: "Due Process of Law", 
                tag: "Art 21", 
                color: "text-secondary", 
                bg: "bg-secondary/5",
                desc: "Revolutionized Art 21 by holding that 'procedure established by law' must be just, fair, and reasonable, not arbitrary."
              },
              { 
                year: "1980", 
                case: "Minerva Mills v. Union of India", 
                principle: "Harmony of Rights", 
                tag: "Art 14 & 19", 
                color: "text-primary", 
                bg: "bg-primary/5",
                desc: "Reinforced the balance between Fundamental Rights and Directive Principles, striking down sections that gave the latter absolute priority."
              },
              { 
                year: "1992", 
                case: "Indra Sawhney v. Union of India", 
                principle: "Equality & Reservation", 
                tag: "Art 16", 
                color: "text-secondary", 
                bg: "bg-secondary/5",
                desc: "Defined the 50% cap on reservations and introduced the 'creamy layer' concept to ensure social justice reaches the truly needy."
              },
              { 
                year: "2018", 
                case: "Navtej Singh Johar v. Union of India", 
                principle: "Decriminalization of §377", 
                tag: "Art 14 & 15", 
                color: "text-accent", 
                bg: "bg-accent/5",
                desc: "Decriminalized consensual same-sex relations, upholding the rights to equality, dignity, and personal autonomy."
              },
              { 
                year: "1985", 
                case: "Shah Bano Case", 
                principle: "Right to Maintenance", 
                tag: "Art 44 & 14", 
                color: "text-primary", 
                bg: "bg-primary/5",
                desc: "The Supreme Court upheld the right of a divorced Muslim woman to maintenance under Section 125 CrPC, sparking a national debate on the UCC."
              },
              { 
                year: "1994", 
                case: "S.R. Bommai v. Union of India", 
                principle: "Federalism & Secularism", 
                tag: "Art 356", 
                color: "text-secondary", 
                bg: "bg-secondary/5",
                desc: "The Court curtailed the arbitrary dismissal of state governments by the Centre and declared Secularism as a part of the Basic Structure."
              },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="bg-white dark:bg-black/20 border border-border/40 rounded-2xl p-8 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[10px] font-black tracking-widest uppercase ${c.color} px-2.5 py-1 rounded bg-muted/50 border border-border/40`}>{c.year}</span>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10 text-primary">{c.tag}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{c.case}</h3>
                <p className={`text-[10px] font-black uppercase tracking-widest ${c.color} mb-4`}>{c.principle}</p>
                <p className="text-[11px] text-muted-foreground font-medium leading-relaxed grow">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Masterpiece Section */}
      <section className={`py-20 ${PAGE_GUTTER}`}>
        <div className={PAGE_CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}>
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-secondary mb-3 flex items-center gap-2">
                <Palette className="h-3.5 w-3.5" /> {t('home.masterpiece_tag')}
              </p>
              <h2 className="text-3xl font-bold text-primary mb-6">{t('home.masterpiece_title')}</h2>
              <div className="space-y-5">
                {[
                  { icon: PenTool, title: t('home.feature_handwritten'), desc: t('home.feature_handwritten_desc') },
                  { icon: Sparkles, title: t('home.feature_illuminated'), desc: t('home.feature_illuminated_desc') },
                  { icon: Info, title: t('home.feature_preserved'), desc: t('home.feature_preserved_desc') },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "251", label: "Pages handwritten" },
                { number: "284", label: "Members signed" },
                { number: "2,000+", label: "Amendments debated" },
                { number: "11", label: "Sessions held" },
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-black/20 border border-border/40 rounded-2xl p-6 text-center hover:border-primary/20 transition-all">
                  <p className="text-3xl font-bold text-primary mb-1">{stat.number}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voices Section */}
      <section className={`py-20 ${PAGE_GUTTER} bg-muted/10 border-y border-border/30`}>
        <div className={PAGE_CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { quote: "Constitution is not a mere lawyers' document; it is a vehicle of Life.", author: "Dr. B.R. Ambedkar", initials: "BA" },
              { quote: "The quest of India is unending, trackless centuries filled with striving.", author: "Jawaharlal Nehru", initials: "JN" },
            ].map((q, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-black/20 border border-border/40 rounded-2xl p-8 hover:border-primary/20 transition-all relative overflow-hidden"
              >
                <Quote className="h-6 w-6 text-primary/10 mb-4" />
                <p className="text-lg font-serif italic text-foreground mb-6 leading-relaxed">"{q.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">{q.initials}</div>
                  <p className="text-xs font-bold text-foreground">{q.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Center Section */}
      <section className={`py-24 ${PAGE_GUTTER}`}>
        <div className={`${PAGE_CONTAINER} max-w-4xl`}>
          <div className="text-center mb-16">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-secondary mb-3 flex items-center justify-center gap-2">
              <HelpCircle className="h-3.5 w-3.5" /> Help Center
            </p>
            <h3 className="text-4xl font-bold text-foreground mb-6">Common Inquiries</h3>
            <p className="text-sm text-muted-foreground font-medium max-w-xl mx-auto">
              Everything you need to know about the Indian Constitution, its origins, and how it governs our nation.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                q: "Who is the Father of the Indian Constitution?", 
                a: "Dr. B.R. Ambedkar is widely regarded as the Father of the Indian Constitution. As Chairman of the Drafting Committee, he played a pivotal role in ensuring that the document protected the rights of all citizens, especially the marginalized." 
              },
              { 
                q: "Is it the longest written constitution in the world?", 
                a: "Yes, it is the longest written constitution of any sovereign country. At its commencement, it had 395 articles in 22 parts and 8 schedules. Today, it has about 448 articles in 25 parts and 12 schedules." 
              },
              { 
                q: "What is the significance of Republic Day (26th January)?", 
                a: "While the Constitution was adopted on 26th November 1949, it came into effect on 26th January 1950. This date was chosen to honor the 'Purna Swaraj' declaration by the Indian National Congress in 1930." 
              },
              {
                q: "What is the 'Basic Structure Doctrine'?",
                a: "Established in the Kesavananda Bharati case (1973), this doctrine states that Parliament can amend the Constitution, but it cannot alter its essential, basic features—such as secularism, federalism, and judicial review."
              },
              {
                q: "Can the Preamble of the Constitution be amended?",
                a: "Yes, the Preamble has been amended once. The 42nd Amendment Act (1976) added three new words to the Preamble: 'Socialist', 'Secular', and 'Integrity'."
              },
              {
                q: "What are Fundamental Duties and where are they found?",
                a: "Fundamental Duties are moral obligations of all citizens to help promote a spirit of patriotism and uphold the unity of India. They are found in Part IVA (Article 51A) and were added by the 42nd Amendment."
              },
              {
                q: "How is the original Constitution preserved today?",
                a: "The original handwritten copies of the Constitution are kept in special helium-filled cases in the Library of the Parliament of India to prevent them from deteriorating over time."
              },
              {
                q: "What are the Directive Principles of State Policy (DPSP)?",
                a: "DPSPs are guidelines given to the federal and state governments to be kept in mind while framing laws and policies. They aim to establish social and economic democracy through a welfare state."
              },
              {
                q: "How many amendments have been made to the Indian Constitution?",
                a: "As of early 2024, there have been 106 amendments made to the Constitution since it was first enacted in 1950. The amendment process is defined in Article 368."
              },
              {
                q: "What is the difference between Fundamental Rights and Fundamental Duties?",
                a: "Fundamental Rights are enforceable by courts (justiciable) and protect individual liberties against state encroachment. Fundamental Duties are non-justiciable moral obligations meant to guide citizens' behavior towards the nation."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white dark:bg-black/10 border border-border/40 px-8 rounded-2xl overflow-hidden data-[state=open]:border-primary/30 transition-all duration-300">
                <AccordionTrigger className="text-base font-bold py-6 hover:no-underline hover:text-primary transition-colors text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-8 rounded-3xl bg-primary/3 border border-primary/10 text-center">
            <h4 className="text-lg font-bold text-primary mb-2">Still have questions?</h4>
            <p className="text-sm text-muted-foreground mb-6">Our scholarly community and resources are here to help you understand every aspect of our nation's law.</p>
            <Link href="/about">
              <Button variant="outline" className="rounded-xl border-primary/20 hover:bg-primary/5 text-xs font-bold">
                Learn More About Samvidhaan+
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
