import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { quizQuestions } from "@/data/quiz";
import { Link } from "wouter";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (!isAnswered) {
      setIsAnswered(true);
      if (selectedOption === question.correctAnswer) {
        setScore(score + 1);
      }
    } else {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setIsFinished(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = (score / quizQuestions.length) * 100;
    let message = "";
    if (percentage === 100) message = "Perfect! You are a true constitutional expert.";
    else if (percentage >= 80) message = "Excellent! You have a great understanding of the Constitution.";
    else if (percentage >= 50) message = "Good job! You know the basics well.";
    else message = "Good attempt! Keep exploring to learn more about your rights.";

    return (
      <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card max-w-lg w-full rounded-3xl p-8 md:p-12 text-center shadow-xl border border-border"
        >
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
            <Award className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold font-serif text-primary mb-2">Quiz Complete!</h2>
          <p className="text-muted-foreground mb-8 text-lg">{message}</p>
          
          <div className="text-6xl font-bold text-foreground mb-8">
            {score} <span className="text-2xl text-muted-foreground font-normal">/ {quizQuestions.length}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleRestart} className="h-12 px-8 text-md gap-2">
              <RotateCcw className="w-4 h-4" /> Try Again
            </Button>
            <Link href="/explore">
              <Button variant="outline" className="h-12 px-8 text-md w-full sm:w-auto">
                Keep Learning
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-10rem)] bg-background py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <h1 className="text-3xl font-bold font-serif text-primary">Knowledge Quiz</h1>
            <span className="text-muted-foreground font-medium">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </span>
          </div>
          <Progress value={isAnswered ? ((currentQuestionIndex + 1) / quizQuestions.length) * 100 : progress} className="h-2" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-3xl p-6 md:p-10 shadow-sm border border-border"
          >
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 leading-relaxed">
              {question.question}
            </h2>

            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = isAnswered && index === question.correctAnswer;
                const isWrong = isAnswered && isSelected && !isCorrect;

                let optionClasses = "border-border hover:border-primary/30 hover:bg-muted";
                if (isSelected && !isAnswered) optionClasses = "border-primary bg-primary/5 text-primary";
                if (isCorrect) optionClasses = "border-accent bg-accent/10 text-accent font-medium";
                if (isWrong) optionClasses = "border-destructive bg-destructive/10 text-destructive";

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ${optionClasses}`}
                  >
                    <span className="text-lg">{option}</span>
                    {isCorrect && <CheckCircle2 className="w-5 h-5 text-accent" />}
                    {isWrong && <XCircle className="w-5 h-5 text-destructive" />}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-secondary/10 border border-secondary/20 rounded-xl p-5 mb-8 text-foreground"
              >
                <p className="font-medium text-secondary mb-1">Explanation:</p>
                <p>{question.explanation}</p>
              </motion.div>
            )}

            <div className="flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={selectedOption === null}
                className="h-12 px-8 text-md w-full sm:w-auto"
                variant={isAnswered ? "default" : "secondary"}
              >
                {isAnswered 
                  ? (currentQuestionIndex === quizQuestions.length - 1 ? "Show Results" : "Next Question") 
                  : "Submit Answer"
                }
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
