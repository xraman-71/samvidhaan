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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
                  Dr. Bhimrao Ramji Ambedkar, affectionately known as Babasaheb, was a jurist, economist, politician, and social reformer who chaired the Drafting Committee of the Constituent Assembly.
                </p>
                <p>
                  His extensive knowledge of constitutions from around the world, combined with his deep understanding of India's complex social structure, made him uniquely qualified for this monumental task. He strongly advocated for the protection of minority rights and the eradication of social inequalities through legal frameworks.
                </p>
                <p>
                  Presenting the draft Constitution, Dr. Ambedkar famously warned that political democracy must be accompanied by social democracy to survive.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card"
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
