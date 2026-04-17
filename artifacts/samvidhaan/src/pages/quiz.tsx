import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw, Award, ArrowLeft, BookOpen, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { quizCategories, type QuizCategory } from "@/data/quiz";
import { Link } from "wouter";

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
    <div className="min-h-[calc(100vh-10rem)] bg-background py-10 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold font-serif text-primary mb-3">Constitution Quiz</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {quizCategories.length} categories · {quizCategories.reduce((sum, c) => sum + c.questions.length, 0)} questions total. Test your knowledge of the Indian Constitution.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyColor.Beginner}`}>Beginner</span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyColor.Intermediate}`}>Intermediate</span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyColor.Advanced}`}>Advanced</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quizCategories.map((cat, i) => {
            const colors = colorMap[cat.colorClass] ?? colorMap.amber;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => onSelect(cat)}
                className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 shadow-sm hover:shadow-md group ${colors.card}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform mt-1" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1 leading-tight">{cat.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">{cat.description}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${difficultyColor[cat.difficulty]}`}>
                    {cat.difficulty}
                  </span>
                  <span className="text-xs text-muted-foreground">{cat.questions.length} Qs</span>
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
  const percentage = (score / total) * 100;
  let message = "";
  let stars = 0;
  if (percentage === 100) { message = "Perfect score! You are a constitutional expert."; stars = 3; }
  else if (percentage >= 80) { message = "Excellent! You have a strong grasp of this topic."; stars = 3; }
  else if (percentage >= 60) { message = "Good job! A few more revisions and you'll ace it."; stars = 2; }
  else if (percentage >= 40) { message = "Keep learning! Revisit the articles and try again."; stars = 1; }
  else { message = "Keep exploring the Constitution and try again!"; stars = 0; }

  const colors = colorMap[category.colorClass] ?? colorMap.amber;

  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card max-w-lg w-full rounded-3xl p-8 md:p-12 text-center shadow-xl border border-border"
      >
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl ${colors.badge}`}>
          {category.icon}
        </div>
        <h2 className="text-3xl font-bold font-serif text-primary mb-1">Quiz Complete!</h2>
        <p className="text-muted-foreground mb-2">{category.title}</p>
        <div className="flex justify-center gap-1 mb-6">
          {[1, 2, 3].map((s) => (
            <Star key={s} className={`w-6 h-6 ${s <= stars ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`} />
          ))}
        </div>
        <div className="text-6xl font-bold text-foreground mb-2">
          {score} <span className="text-2xl text-muted-foreground font-normal">/ {total}</span>
        </div>
        <p className="text-lg text-muted-foreground mb-8">{message}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={onRestart} className="h-12 px-8 gap-2">
            <RotateCcw className="w-4 h-4" /> Try Again
          </Button>
          <Button variant="outline" onClick={onBack} className="h-12 px-8 gap-2">
            <BookOpen className="w-4 h-4" /> All Categories
          </Button>
          <Link href="/explore">
            <Button variant="ghost" className="h-12 px-8 w-full sm:w-auto">Keep Learning</Button>
          </Link>
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
    <div className="min-h-[calc(100vh-10rem)] bg-background py-10 px-4">
      <div className="container max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All Categories
            </button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{category.icon}</span>
              <span className="font-semibold text-foreground text-sm hidden sm:block">{category.title}</span>
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              {currentIdx + 1} / {questions.length}
            </span>
          </div>
          <Progress value={isAnswered ? ((currentIdx + 1) / questions.length) * 100 : progress} className="h-2" />
          <div className="flex items-center justify-between mt-2">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${difficultyColor[category.difficulty]}`}>
              {category.difficulty}
            </span>
            <span className="text-xs text-muted-foreground">Score: {score}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="bg-card rounded-3xl p-6 md:p-10 shadow-sm border border-border"
          >
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-8 leading-relaxed">
              {question.question}
            </h2>

            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = isAnswered && index === question.correctAnswer;
                const isWrong = isAnswered && isSelected && !isCorrect;

                let cls = "border-border hover:border-primary/40 hover:bg-muted/60";
                if (isSelected && !isAnswered) cls = "border-primary bg-primary/5 text-primary";
                if (isCorrect) cls = "border-green-500 bg-green-50 text-green-800 font-medium";
                if (isWrong) cls = "border-destructive bg-destructive/10 text-destructive";

                return (
                  <button
                    key={index}
                    onClick={() => !isAnswered && setSelectedOption(index)}
                    disabled={isAnswered}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between gap-3 ${cls}`}
                  >
                    <span className="text-sm md:text-base leading-snug">{option}</span>
                    {isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />}
                    {isWrong && <XCircle className="w-5 h-5 text-destructive shrink-0" />}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-secondary/10 border border-secondary/20 rounded-xl p-5 mb-6"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <p className="font-semibold text-secondary text-sm">Explanation</p>
                </div>
                <p className="text-sm text-foreground leading-relaxed">{question.explanation}</p>
              </motion.div>
            )}

            <div className="flex justify-end gap-3">
              {!isAnswered ? (
                <Button
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  variant="secondary"
                  className="h-11 px-8"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button onClick={handleNext} className="h-11 px-8">
                  {currentIdx === questions.length - 1 ? "See Results" : "Next Question"}
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
