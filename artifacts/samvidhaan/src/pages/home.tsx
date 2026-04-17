import { motion } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, Shield, Scale, Users, ArrowRight, CheckCircle2, Sparkles, Layers, Gavel, Landmark, Quote, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const CONSTITUTION_START = new Date("1950-01-26T10:30:00+05:30");
const PAGE_GUTTER = "px-6 sm:px-8 lg:px-14 xl:px-20 2xl:px-28";
const PAGE_CONTAINER = "mx-auto w-full max-w-7xl 2xl:max-w-[1440px]";

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`py-16 ${PAGE_GUTTER} bg-primary relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      <div className={`${PAGE_CONTAINER} relative z-10 text-center`}>
        <p className="text-primary-foreground/60 text-sm font-medium tracking-widest uppercase mb-3">
          Constitution in Force Since 26 January 1950
        </p>
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary-foreground mb-10">
          The World's Longest Written Constitution — Still Going Strong
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {units.map(({ label, value }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center"
            >
              <div className="relative w-20 md:w-24 h-20 md:h-24 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center overflow-hidden">
                <AnimatedNumber value={value} />
              </div>
              <span className="mt-2 text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider">
                {label}
              </span>
              {i < units.length - 1 && (
                <span className="hidden md:block absolute text-2xl font-bold text-primary-foreground/40 mt-[-3.5rem] ml-[6.5rem]">:</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const [prev, setPrev] = useState(value);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setAnimating(true);
      const t = setTimeout(() => {
        setPrev(value);
        setAnimating(false);
      }, 300);
      return () => clearTimeout(t);
      
    }
    return;
  }, [value, prev]);

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <motion.span
        key={value}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-bold text-white tabular-nums"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
    </div>
  );
}

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className={`relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 ${PAGE_GUTTER}`}>
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className={`${PAGE_CONTAINER} relative z-10`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
                Know your rights. Understand your duties.
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-primary mb-6 leading-[1.1]">
                The <span className="text-secondary">Constitution</span> of India, Simplified.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                A majestic but accessible guide to the founding document of the world's largest democracy. 
                Empowering every citizen to understand the laws that govern our nation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/explore">
                  <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 shadow-md hover:translate-y-[-2px] transition-all">
                    Explore Articles <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/quiz">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all">
                    Take the Quiz
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="relative lg:ml-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none">
                <img 
                  src="/images/hero-constitution.png" 
                  alt="Majestic Indian Constitution in a modern library setting" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply" />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-4 rounded-xl shadow-lg border border-border hidden md:flex items-center gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-sm">6 Fundamental</p>
                  <p className="text-xs text-muted-foreground">Rights Guaranteed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <ConstitutionTimer />

      {/* Features Section */}
      <section className={`py-20 bg-muted/50 ${PAGE_GUTTER} border-y border-border/50`}>
        <div className={PAGE_CONTAINER}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">A Trusted Civic Companion</h2>
            <p className="text-muted-foreground text-lg">
              Designed for 2025, Samvidhaan+ breaks down complex legal language into plain, understandable concepts.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: BookOpen,
                title: "Plain Language",
                description: "Complex legal jargon translated into everyday language that anyone can understand without a law degree.",
                color: "text-secondary",
                bg: "bg-secondary/10"
              },
              {
                icon: Scale,
                title: "Real-world Examples",
                description: "Practical scenarios demonstrating how constitutional articles apply to your daily life and situations.",
                color: "text-primary",
                bg: "bg-primary/10"
              },
              {
                icon: Users,
                title: "For Every Citizen",
                description: "Whether you're a student, professional, or just curious, find exactly what you need to know about your rights.",
                color: "text-accent",
                bg: "bg-accent/10"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`${feature.bg} ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Explore Teaser Section */}
      <section className={`py-24 ${PAGE_GUTTER}`}>
        <div className={PAGE_CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">
                Discover the Pillars of our Democracy
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The Constitution is not just a document; it is a living framework that guides our nation. Explore its core components structured for easy learning.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Fundamental Rights (Articles 12-35)",
                  "Directive Principles of State Policy",
                  "Fundamental Duties (Article 51A)",
                  "Important Amendments and Schedules"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent h-6 w-6 shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/explore">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-md px-6">
                  Start Browsing
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4 pt-8">
                <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                  <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary font-bold">14</div>
                  <h4 className="font-bold mb-2">Right to Equality</h4>
                  <p className="text-sm text-muted-foreground">Equality before law and equal protection.</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent font-bold">21</div>
                  <h4 className="font-bold mb-2">Right to Life</h4>
                  <p className="text-sm text-muted-foreground">Protection of life and personal liberty.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary font-bold">19</div>
                  <h4 className="font-bold mb-2">Right to Freedom</h4>
                  <p className="text-sm text-muted-foreground">Freedom of speech, expression, and movement.</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                  <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary font-bold">32</div>
                  <h4 className="font-bold mb-2">Remedies</h4>
                  <p className="text-sm text-muted-foreground">Right to constitutional remedies.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Learning Paths */}
      <section className={`py-24 ${PAGE_GUTTER} bg-muted/30 border-y border-border/50`}>
        <div className={PAGE_CONTAINER}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Premium learning paths
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-3">
                Learn by intent, not by page number
              </h2>
              <p className="text-muted-foreground text-lg">
                Curated journeys that feel modern: bite-sized, scenario-first, and designed to build real civic confidence.
              </p>
            </div>
            <Link href="/explore">
              <Button size="lg" variant="outline" className="h-12 px-6 border-primary/20 hover:bg-primary/5">
                Browse everything <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Compass,
                title: "Citizen Starter Pack",
                description: "A premium overview of the rights and remedies that show up in everyday life — from freedom to due process.",
                bullets: ["Rights that matter daily", "Court remedies, simplified", "Common misconceptions"],
                accent: "text-secondary",
                bg: "bg-secondary/10",
              },
              {
                icon: Layers,
                title: "How Government Works",
                description: "A clean mental model of Parliament, executive power, courts, and how accountability is designed to work.",
                bullets: ["Bills → laws", "Checks & balances", "Institutions decoded"],
                accent: "text-primary",
                bg: "bg-primary/10",
              },
              {
                icon: Landmark,
                title: "Democracy in Practice",
                description: "Elections, citizenship, and participation — the civic layer every voter and student should know.",
                bullets: ["Voting basics", "Citizenship concepts", "Practical civic actions"],
                accent: "text-accent",
                bg: "bg-accent/10",
              },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-card rounded-3xl border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-7">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${p.bg} ${p.accent} mb-5`}>
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{p.description}</p>
                  <ul className="space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="text-sm text-foreground/80 flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${p.accent.replace("text-", "bg-")}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-7 pb-7">
                  <Link href="/quiz">
                    <Button className="w-full h-11" variant="secondary">
                      Start a quiz <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Constitution in Action Timeline */}
      <section className={`py-24 ${PAGE_GUTTER}`}>
        <div className={PAGE_CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-3 flex items-center gap-2">
                <Gavel className="h-4 w-4" /> Constitution in action
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
                From text to lived experience
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The Constitution isn’t just history — it’s a working system. These are the moments where rights, institutions,
                and remedies become real in daily life.
              </p>

              <div className="bg-card rounded-3xl border border-border p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Quote className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">A modern civic reminder</p>
                    <p className="text-base md:text-lg font-medium leading-relaxed text-foreground">
                      Rights feel premium only when they are usable. The best constitution is the one a citizen can actually apply.
                    </p>
                    <p className="text-xs text-muted-foreground mt-3">
                      Built for clarity, not intimidation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.ol
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              className="space-y-4"
            >
              {[
                {
                  k: "Equality",
                  title: "When a rule treats people unfairly",
                  desc: "Learn how equality principles shape policies and how courts test arbitrariness.",
                  tag: "Articles 14–16",
                },
                {
                  k: "Liberty",
                  title: "When your freedom is restricted",
                  desc: "Understand due process, safeguards, and how ‘procedure’ became ‘just, fair, reasonable’.",
                  tag: "Articles 19–22",
                },
                {
                  k: "Dignity",
                  title: "When life and privacy are at stake",
                  desc: "See how modern judgments expanded Article 21 to dignity, privacy, and humane governance.",
                  tag: "Article 21",
                },
                {
                  k: "Remedy",
                  title: "When you need a constitutional fix",
                  desc: "Know the idea of writs and how remedies are the bridge between rights and reality.",
                  tag: "Articles 32 & 226",
                },
              ].map((t, idx) => (
                <motion.li
                  key={idx}
                  variants={item}
                  className="bg-card border border-border rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                        {t.k}
                      </p>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{t.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground whitespace-nowrap">
                      {t.tag}
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className={`py-24 ${PAGE_GUTTER} bg-primary text-primary-foreground relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
        <div className={`${PAGE_CONTAINER} relative z-10`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary-foreground/70 text-xs font-semibold tracking-widest uppercase mb-3">
                Premium learning experience
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Make civic knowledge your advantage
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Explore the Constitution with modern design, real-world framing, and a smoother path from curiosity to clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/explore">
                  <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90">
                    Explore now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="h-12 px-8 border-white/30 text-white hover:bg-white/10">
                    Why it matters
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "Rights-first", desc: "Start from what you face, then learn the article." },
                { icon: BookOpen, title: "Plain language", desc: "No intimidation. Just clarity, structure, and examples." },
                { icon: Scale, title: "Real scenarios", desc: "Learn how principles apply outside textbooks." },
                { icon: Users, title: "For everyone", desc: "Students, voters, professionals — all welcome." },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5"
                >
                  <b.icon className="h-5 w-5 text-white mb-3" />
                  <p className="font-semibold mb-1">{b.title}</p>
                  <p className="text-sm text-primary-foreground/75 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
