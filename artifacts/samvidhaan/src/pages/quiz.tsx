import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw, Award, ArrowLeft, BookOpen, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { quizCategories, type QuizCategory } from "@/data/quiz";
import { Link } from "wouter";
import { AshokaChakra } from "@/components/layout/AshokaChakra";

const difficultyColor: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700 border-green-200",
  Intermediate: "bg-amber-100 text-amber-700 border-amber-200",
  Advanced: "bg-red-100 text-red-700 border-red-200",
};

const colorMap: Record<string, { card: string; badge: string; accent: string }> = {
  amber:   { card: "bg-amber-50 border-amber-200 hover:border-amber-400",   badge: "bg-amber-100 text-amber-800", accent: "text-amber-700" },
  orange:  { card: "bg-orange-50 border-orange-200 hover:border-orange-400", badge: "bg-orange-100 text-orange-800", accent: "text-orange-700" },
  green:   { card: "bg-green-50 border-green-200 hover:border-green-400",   badge: "bg-green-100 text-green-800", accent: "text-green-700" },
  blue:    { card: "bg-blue-50 border-blue-200 hover:border-blue-400",     badge: "bg-blue-100 text-blue-800", accent: "text-blue-700" },
  indigo:  { card: "bg-indigo-50 border-indigo-200 hover:border-indigo-400", badge: "bg-indigo-100 text-indigo-800", accent: "text-indigo-700" },
  purple:  { card: "bg-purple-50 border-purple-200 hover:border-purple-400", badge: "bg-purple-100 text-purple-800", accent: "text-purple-700" },
  teal:    { card: "bg-teal-50 border-teal-200 hover:border-teal-400",     badge: "bg-teal-100 text-teal-800", accent: "text-teal-700" },
  red:     { card: "bg-red-50 border-red-200 hover:border-red-400",       badge: "bg-red-100 text-red-800", accent: "text-red-700" },
  lime:    { card: "bg-lime-50 border-lime-200 hover:border-lime-400",     badge: "bg-lime-100 text-lime-800", accent: "text-lime-700" },
  sky:     { card: "bg-sky-50 border-sky-200 hover:border-sky-400",       badge: "bg-sky-100 text-sky-800", accent: "text-sky-700" },
  rose:    { card: "bg-rose-50 border-rose-200 hover:border-rose-400",     badge: "bg-rose-100 text-rose-800", accent: "text-rose-700" },
  cyan:    { card: "bg-cyan-50 border-cyan-200 hover:border-cyan-400",     badge: "bg-cyan-100 text-cyan-800", accent: "text-cyan-700" },
  stone:   { card: "bg-stone-50 border-stone-200 hover:border-stone-400",  badge: "bg-stone-100 text-stone-800", accent: "text-stone-700" },
  neutral: { card: "bg-neutral-50 border-neutral-200 hover:border-neutral-400", badge: "bg-neutral-100 text-neutral-800", accent: "text-neutral-700" },
  fuchsia: { card: "bg-fuchsia-50 border-fuchsia-200 hover:border-fuchsia-400", badge: "bg-fuchsia-100 text-fuchsia-800", accent: "text-fuchsia-700" },
};

function CategoryGrid({ onSelect }: { onSelect: (cat: QuizCategory) => void }) {
  return (
    <div className="min-h-[calc(100vh-10rem)] bg-background py-16 px-4 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/5 blur-[100px] -z-10" />
          <h1 className="text-4xl md:text-5xl font-black font-serif text-primary mb-4 tracking-tight">Challenge Your Wisdom</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From Fundamental Rights to Constitutional Amendments—choose a module and test your understanding of India's supreme document.
          </p>
          <div className="flex items-center justify-center gap-5 mt-8 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Beginner Friendly</span>
            </div>
            <div className="flex items-center gap-2 border-l border-border/60 pl-5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Intermediate Mastery</span>
            </div>
            <div className="flex items-center gap-2 border-l border-border/60 pl-5">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Advanced Jurisprudence</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {quizCategories.map((cat, i) => {
            const colors = colorMap[cat.colorClass] ?? colorMap.amber;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                onClick={() => onSelect(cat)}
                className="group relative flex flex-col h-full"
              >
                {/* Background Shadow/Glow */}
                <div className="absolute -inset-2 rounded-4xl bg-linear-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />
                
                <div className="flex-1 bg-card rounded-4xl border border-border/50 p-7 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 flex flex-col items-start text-left relative overflow-hidden">
                  {/* Subtle color accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${colors.badge} opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className={`w-14 h-14 rounded-2xl ${colors.badge} flex items-center justify-center text-3xl mb-6 shadow-sm border border-white/10`}>
                    {cat.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">{cat.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-border/40 w-full flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className={`text-[10px] font-black uppercase tracking-tighter ${colors.accent}`}>{cat.difficulty}</span>
                      <span className="text-[11px] font-bold text-muted-foreground/60">{cat.questions.length} Questions</span>
                    </div>
                    <div className={`w-8 h-8 rounded-full ${colors.badge} flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-sm`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function QuizResult({
  score,
  total,
  category,
  onRestart,
  onBack,
}: {
  score: number;
  total: number;
  category: QuizCategory;
  onRestart: () => void;
  onBack: () => void;
}) {
  const percentage = Math.round((score / total) * 100);
  let performance = { label: "", sub: "", icon: Award, color: "text-amber-500", bg: "bg-amber-50" };
  
  if (percentage === 100) { 
    performance = { label: "Constitutional Expert", sub: "A perfect score! You've mastered this domain.", icon: Award, color: "text-amber-600", bg: "bg-amber-100/50" };
  } else if (percentage >= 80) { 
    performance = { label: "Legal Scholar", sub: "Excellent performance! Your knowledge is impressive.", icon: Star, color: "text-blue-600", bg: "bg-blue-100/50" };
  } else if (percentage >= 60) { 
    performance = { label: "Civic Leader", sub: "Good progress! You're well on your way to mastery.", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100/50" };
  } else { 
    performance = { label: "Aspiring Citizen", sub: "Keep exploring! Every session brings you closer to wisdom.", icon: BookOpen, color: "text-muted-foreground", bg: "bg-muted/50" };
  }

  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center p-4 md:p-8 bg-linear-to-b from-background via-muted/20 to-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative max-w-2xl w-full"
      >
        {/* Decorative background glow */}
        <div className="absolute -inset-4 bg-linear-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl opacity-50 -z-10" />

        <div className="bg-card rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 relative">
          {/* Header Banner */}
          <div className="h-32 bg-linear-to-r from-primary/5 via-secondary/5 to-primary/5 border-b border-border/40 relative flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
              <AshokaChakra className="w-48 h-48" />
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, delay: 0.2 }}
              className={`w-24 h-24 rounded-full ${performance.bg} flex items-center justify-center shadow-lg border-4 border-card relative z-10`}
            >
              <performance.icon className={`w-12 h-12 ${performance.color}`} />
            </motion.div>
          </div>

          <div className="p-8 md:p-12 pt-16 text-center">
            <h2 className="text-4xl font-black font-serif text-primary mb-2">Quiz Complete!</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-2xl">{category.icon}</span>
              <p className="font-bold text-muted-foreground tracking-widest uppercase text-xs">{category.title}</p>
            </div>

            {/* Performance Card */}
            <div className="bg-muted/30 rounded-3xl p-6 border border-border/40 mb-10">
              <h3 className={`text-2xl font-bold ${performance.color} mb-2`}>{performance.label}</h3>
              <p className="text-muted-foreground leading-relaxed">{performance.sub}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Score</p>
                <p className="text-3xl font-black text-foreground">{score}</p>
              </div>
              <div className="space-y-1 border-x border-border/60 px-4">
                <p className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Accuracy</p>
                <p className="text-3xl font-black text-foreground">{percentage}%</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Total Qs</p>
                <p className="text-3xl font-black text-foreground">{total}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button onClick={onRestart} className="h-14 px-8 rounded-2xl gap-3 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <RotateCcw className="w-5 h-5" /> Retake Quiz
              </Button>
              <Button variant="outline" onClick={onBack} className="h-14 px-8 rounded-2xl gap-3 text-base font-bold bg-card border-border/60 hover:bg-muted/50 transition-all">
                <ChevronRight className="w-5 h-5 order-last" /> All Modules
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border/40">
              <Link href="/explore">
                <button className="text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-2 mx-auto transition-colors">
                  <BookOpen className="w-4 h-4" /> Deep Dive into Articles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function QuizPlayer({ category, onBack }: { category: QuizCategory; onBack: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = category.questions;
  const question = questions[currentIdx];
  const progress = (currentIdx / questions.length) * 100;
  const colors = colorMap[category.colorClass] ?? colorMap.amber;

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === question.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((i) => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <QuizResult
        score={score}
        total={questions.length}
        category={category}
        onRestart={handleRestart}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="min-h-[calc(100vh-10rem)] bg-background py-10 px-4 md:px-8 bg-linear-to-b from-background via-muted/20 to-background">
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span>Back to Modules</span>
            </button>
            <div className="flex items-center gap-3 bg-card border border-border/60 px-4 py-2 rounded-2xl shadow-sm">
              <span className="text-xl">{category.icon}</span>
              <span className="font-bold text-foreground text-xs uppercase tracking-widest hidden sm:block">{category.title}</span>
            </div>
            <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-black text-xs tracking-tighter">
              {currentIdx + 1} / {questions.length}
            </div>
          </div>
          
          <div className="relative h-2.5 w-full bg-muted rounded-full overflow-hidden shadow-inner">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-linear-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${isAnswered ? ((currentIdx + 1) / questions.length) * 100 : progress}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </div>
          
          <div className="flex items-center justify-between mt-3 px-1">
            <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${colors.accent}`}>
              {category.difficulty} Mode
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Current Score</span>
              <span className="text-sm font-black text-foreground">{score}</span>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-4xl p-8 md:p-12 shadow-2xl border border-border/50 relative overflow-hidden"
          >
            {/* Subtle background ornament */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl z-0" />

            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-10 leading-relaxed relative z-10 font-serif">
              {question.question}
            </h2>

            <div className="space-y-4 mb-10 relative z-10">
              {question.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = isAnswered && index === question.correctAnswer;
                const isWrong = isAnswered && isSelected && !isCorrect;

                let cls = "border-border/60 hover:border-primary/40 hover:bg-muted/40 hover:-translate-y-1 shadow-sm";
                if (isSelected && !isAnswered) cls = "border-primary bg-primary/5 text-primary shadow-lg shadow-primary/5 -translate-y-1";
                if (isCorrect) cls = "border-green-500 bg-green-50/50 text-green-800 font-bold shadow-lg shadow-green-500/10";
                if (isWrong) cls = "border-destructive bg-destructive/5 text-destructive font-bold";

                return (
                  <button
                    key={index}
                    onClick={() => !isAnswered && setSelectedOption(index)}
                    disabled={isAnswered}
                    className={`w-full text-left px-6 py-5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-center justify-between gap-4 ${cls}`}
                  >
                    <span className="text-base leading-snug">{option}</span>
                    <AnimatePresence>
                      {isCorrect && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                        </motion.div>
                      )}
                      {isWrong && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          <XCircle className="w-6 h-6 text-destructive shrink-0" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-linear-to-br from-muted/50 to-muted/30 border border-border/60 rounded-2xl p-6 mb-8 relative"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-black uppercase tracking-widest text-[10px] text-primary">Explanation</p>
                </div>
                <p className="text-sm text-foreground/80 leading-[1.8] font-medium italic">{question.explanation}</p>
              </motion.div>
            )}

            <div className="flex justify-end pt-2 relative z-10">
              {!isAnswered ? (
                <Button
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  className="h-14 px-10 rounded-2xl text-base font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Confirm Answer
                </Button>
              ) : (
                <Button onClick={handleNext} className="h-14 px-10 rounded-2xl text-base font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all group">
                  <span>{currentIdx === questions.length - 1 ? "Complete Quiz" : "Next Challenge"}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | null>(null);

  return (
    <AnimatePresence mode="wait">
      {!selectedCategory ? (
        <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <CategoryGrid onSelect={setSelectedCategory} />
        </motion.div>
      ) : (
        <motion.div key={selectedCategory.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <QuizPlayer category={selectedCategory} onBack={() => setSelectedCategory(null)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
