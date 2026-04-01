"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { destinations } from "@/lib/destinations";
import Image from "next/image";

interface Question {
  question: string;
  options: { label: string; scores: [number, number, number] }[];
}

const questions: Question[] = [
  {
    question: "Quel type d'expérience recherchez-vous ?",
    options: [
      { label: "Culturelle et artistique", scores: [1, 0, 2] },
      { label: "Aventure et nature", scores: [0, 2, 0] },
      { label: "Élégance et raffinement", scores: [2, 0, 1] },
    ],
  },
  {
    question: "Votre période préférée ?",
    options: [
      { label: "Histoire moderne (XIXe-XXe siècle)", scores: [2, 0, 0] },
      { label: "Temps anciens et origines", scores: [0, 2, 0] },
      { label: "Renaissance et classicisme", scores: [0, 0, 2] },
    ],
  },
  {
    question: "Vous préférez :",
    options: [
      { label: "L'effervescence urbaine", scores: [2, 0, 1] },
      { label: "La nature sauvage", scores: [0, 2, 0] },
      { label: "L'art et l'architecture", scores: [1, 0, 2] },
    ],
  },
  {
    question: "Votre activité idéale :",
    options: [
      { label: "Visiter des monuments", scores: [2, 0, 1] },
      { label: "Observer la faune", scores: [0, 2, 0] },
      { label: "Explorer des musées", scores: [1, 0, 2] },
    ],
  },
];

export default function Quiz() {
  const [step, setStep] = useState(-1); // -1 = intro, 0-3 = questions, 4 = result
  const [scores, setScores] = useState([0, 0, 0]);

  const handleAnswer = (optionScores: [number, number, number]) => {
    const newScores = scores.map((s, i) => s + optionScores[i]);
    setScores(newScores);
    setStep(step + 1);
  };

  const reset = () => {
    setStep(-1);
    setScores([0, 0, 0]);
  };

  const getResult = () => {
    const maxIndex = scores.indexOf(Math.max(...scores));
    return destinations[maxIndex];
  };

  return (
    <section id="quiz" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
            Trouvez votre <span className="text-primary">époque idéale</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Répondez à 4 questions pour découvrir la destination temporelle faite
            pour vous.
          </p>
        </motion.div>

        <div className="relative bg-card border border-border rounded-2xl p-6 md:p-10 min-h-[340px]">
          <AnimatePresence mode="wait">
            {step === -1 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Compass className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Prêt pour l&apos;aventure ?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md">
                  En 4 questions, nous allons déterminer quelle époque
                  correspond le mieux à votre personnalité.
                </p>
                <Button
                  onClick={() => setStep(0)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold"
                >
                  Commencer le quiz
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            )}

            {step >= 0 && step < questions.length && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>
                      Question {step + 1}/{questions.length}
                    </span>
                    <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: `${(step / questions.length) * 100}%` }}
                      animate={{
                        width: `${((step + 1) / questions.length) * 100}%`,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-6">
                  {questions[step].question}
                </h3>

                <div className="flex flex-col gap-3">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.scores)}
                      className="w-full text-left px-6 py-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-sm md:text-base"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step >= questions.length && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                {(() => {
                  const result = getResult();
                  return (
                    <>
                      <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden mb-6">
                        <Image
                          src={result.image}
                          alt={`Destination recommandée : ${result.title} — ${result.epoch}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </div>
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-2">
                        Votre destination idéale :
                      </h3>
                      <p className="text-primary text-xl font-semibold mb-4">
                        {result.title} - {result.epoch}
                      </p>
                      <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                        {result.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                          href="#destinations"
                          className={cn(
                            buttonVariants(),
                            "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                          )}
                        >
                          Voir les détails
                        </a>
                        <Button
                          variant="outline"
                          onClick={reset}
                          className="rounded-full border-primary/30"
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Recommencer
                        </Button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
