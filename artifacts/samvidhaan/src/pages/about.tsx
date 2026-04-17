import React from "react";
import { motion } from "framer-motion";
import { constitutionFacts } from "@/data/constitution";
import { Calendar, Clock, BookOpen, ScrollText } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About the Constitution
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Constitution of India is the supreme law of India. The document lays down the framework that demarcates fundamental political code, structure, procedures, powers, and duties of government institutions and sets out fundamental rights, directive principles, and the duties of citizens.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 md:px-8 border-b border-border/50 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-secondary" />
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Adopted On</p>
              <p className="text-lg font-bold">{constitutionFacts.adoptedDate}</p>
            </div>
            <div className="text-center">
              <ScrollText className="w-8 h-8 mx-auto mb-3 text-secondary" />
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Effective On</p>
              <p className="text-lg font-bold">{constitutionFacts.effectiveDate}</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-secondary" />
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Time Taken</p>
              <p className="text-lg font-bold">{constitutionFacts.timeTaken}</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-secondary" />
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Articles</p>
              <p className="text-lg font-bold">{constitutionFacts.totalArticles}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">Dr. B. R. Ambedkar</h2>
              <h3 className="text-xl text-secondary font-medium mb-6">The Chief Architect</h3>
              
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  Dr. Bhimrao Ramji Ambedkar, widely known as Babasaheb, was a jurist, economist, scholar, and social reformer who chaired the Drafting Committee of the Constituent Assembly. His life story is inseparable from India’s democratic promise: that dignity is not inherited — it is guaranteed.
                </p>
                <p>
                  Ambedkar’s constitutional vision was not abstract. It was built from lived experience of exclusion, and from rigorous study of law, economics, and political institutions across the world. He argued that rights must be practical, enforceable, and backed by remedies — not merely written ideals. That is why the Constitution places equal weight on liberty, equality, and fraternity, and why it empowers citizens to approach courts when those promises are broken.
                </p>
                <p>
                  Presenting the draft Constitution, he warned that political democracy cannot survive without social democracy — a culture where every person is treated as equal, where discrimination is dismantled, and where the State is bound by the rule of law. His work continues to shape how India thinks about justice: from equal citizenship to safeguards for the vulnerable, from due process to the everyday meaning of freedom in a diverse society.
                </p>
              </div>
            </motion.div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card lg:-mt-8"
              >
                <div className="aspect-[4/5] relative">
                  <img 
                    src="/images/ambedkar-about.png" 
                    alt="Dr B R Ambedkar drafting the Constitution" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center border-t border-border">
                  <p className="italic text-muted-foreground font-serif">
                    "Life should be great rather than long."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6"
              >
                <div className="bg-card/70 backdrop-blur-sm border border-border rounded-3xl p-5 md:p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                        Academic island
                      </p>
                      <p className="text-lg font-bold text-foreground mt-1">
                        32 degrees & honors
                      </p>
                    </div>
                    <div className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                      Individual cards
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      ["BA", "University of Bombay"],
                      ["BA", "University of Bombay"],
                      ["MA", "University of Bombay"],
                      ["MA", "University of Columbia"],
                      ["MA", "Columbia University"],
                      ["MSc", "London School of Economics"],
                      ["LLD", "University of Nagpur"],
                      ["LLD", "University of Kerala"],
                      ["LLD", "University of Baroda"],
                      ["LLD", "University of Mysore"],
                      ["LLD", "University of Punjab"],
                      ["LLD", "University of Karnataka"],
                      ["LLD", "Columbia University"],
                      ["LLD", "Osmania University"],
                      ["LLD", "University of London"],
                      ["LLD", "Nagpur University"],
                      ["LLD", "University of Sagar"],
                      ["LLD", "University of Rangoon"],
                      ["LLD", "University of Bombay"],
                      ["LLD", "University of Osmania"],
                      ["DSc", "University of London"],
                      ["DSc", "University of Bombay"],
                      ["DSc", "University of Nagpur"],
                      ["DSc", "University of Punjab"],
                      ["DSc", "London School of Economics"],
                      ["D.Litt.", "Osmania University"],
                      ["D.Litt.", "Banaras Hindu University"],
                      ["D.Litt.", "Aligarh Muslim University"],
                      ["D.Litt.", "Columbia University"],
                      ["D.Litt.", "Nagpur University"],
                      ["PhD", "Columbia University"],
                      ["Barrister-at-Law", "Gray’s Inn, London"],
                    ].map(([degree, inst], idx) => (
                      <div
                        key={`${degree}-${inst}-${idx}`}
                        className="rounded-2xl border border-border bg-background/60 px-3.5 py-3 flex items-start justify-between gap-3"
                      >
                        <span className="text-xs font-bold tracking-wide text-primary whitespace-nowrap">
                          {String(idx + 1).padStart(2, "0")} · {degree}
                        </span>
                        <span className="text-xs text-muted-foreground text-right leading-snug line-clamp-2">
                          {inst}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Preamble Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-serif text-primary mb-12">The Preamble</h2>
          
          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-sm border border-border relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 py-2 text-sm font-bold tracking-widest text-secondary uppercase rounded-full border border-border">
              Soul of the Constitution
            </div>
            
            <div className="font-serif text-lg md:text-xl leading-loose whitespace-pre-wrap">
              {constitutionFacts.preamble}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
