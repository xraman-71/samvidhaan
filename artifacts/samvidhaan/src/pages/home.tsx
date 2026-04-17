import { motion } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, Shield, Scale, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const CONSTITUTION_START = new Date("1950-01-26T10:30:00+05:30");

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
      className="py-16 px-4 md:px-8 bg-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      <div className="container mx-auto relative z-10 text-center">
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 px-4 md:px-8">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="container mx-auto relative z-10">
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
      <section className="py-20 bg-muted/50 px-4 md:px-8 border-y border-border/50">
        <div className="container mx-auto">
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
      <section className="py-24 px-4 md:px-8">
        <div className="container mx-auto">
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
    </div>
  );
}
