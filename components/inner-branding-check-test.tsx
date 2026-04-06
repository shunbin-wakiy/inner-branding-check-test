"use client"

import { useState } from "react"
import StartScreen from "@/components/start-screen"
import QuestionScreen from "@/components/question-screen"
import ResultScreen from "@/components/result-screen"
import { questions, TOTAL_QUESTIONS } from "@/data/questions"
import { tierFromBCount } from "@/data/result-tiers"
import type { AbAnswer } from "@/types/question"
import type { ResultTier } from "@/types/result-tier"

function countB(answers: Record<string, AbAnswer>): number {
  return questions.reduce((acc, q) => (answers[q.id] === "B" ? acc + 1 : acc), 0)
}

export default function InnerBrandingCheckTest() {
  const [currentScreen, setCurrentScreen] = useState<"start" | "question" | "result">("start")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, AbAnswer>>({})
  const [result, setResult] = useState<{ bCount: number; tier: ResultTier } | null>(null)

  const handleStartTest = () => {
    setCurrentScreen("question")
    setCurrentQuestionIndex(0)
    setAnswers({})
    setResult(null)
  }

  const handleAnswer = (answer: AbAnswer) => {
    const currentQuestion = questions[currentQuestionIndex]
    const newAnswers = { ...answers, [currentQuestion.id]: answer }
    setAnswers(newAnswers)

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((i) => i + 1)
    } else {
      const bCount = countB(newAnswers)
      setResult({ bCount, tier: tierFromBCount(bCount) })
      setCurrentScreen("result")
    }
  }

  const handleRestart = () => {
    setCurrentScreen("start")
    setCurrentQuestionIndex(0)
    setAnswers({})
    setResult(null)
  }

  return (
    <div className="flex items-center justify-center min-h-dvh">
      <div className="w-full">
        {currentScreen === "start" && <StartScreen onStart={handleStartTest} />}

        {currentScreen === "question" && (
          <QuestionScreen
            question={questions[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            totalQuestions={TOTAL_QUESTIONS}
            onAnswer={handleAnswer}
          />
        )}

        {currentScreen === "result" && result && (
          <ResultScreen bCount={result.bCount} tier={result.tier} onRestart={handleRestart} />
        )}
      </div>
    </div>
  )
}
