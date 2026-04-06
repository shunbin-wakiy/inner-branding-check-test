"use client"

import { Button } from "@/components/ui/button"
import type { AbAnswer, Question } from "@/types/question"

interface QuestionScreenProps {
  question: Question
  questionIndex: number
  totalQuestions: number
  onAnswer: (answer: AbAnswer) => void
}

export default function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
}: QuestionScreenProps) {
  const n = questionIndex + 1
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col items-stretch justify-center py-8 px-4 sm:px-6">
        <p className="text-center text-xl font-bold mb-2">
          Q. {n}/{totalQuestions}
        </p>
        <p className="text-center text-sm font-medium text-gray-500 mb-6">{question.section}</p>
        <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-8 leading-snug">
          {question.title}
        </h2>

        <div className="flex flex-col gap-4 w-full">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => onAnswer("A")}
            className="h-auto min-h-14 py-4 px-4 sm:px-6 text-left whitespace-normal rounded-2xl border-2 border-gray-200 bg-white hover:bg-amber-50 hover:border-amber-300 text-base leading-relaxed justify-start"
          >
            <span className="font-bold text-amber-700 mr-2 shrink-0">A</span>
            <span className="text-gray-800">{question.optionA}</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => onAnswer("B")}
            className="h-auto min-h-14 py-4 px-4 sm:px-6 text-left whitespace-normal rounded-2xl border-2 border-gray-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-base leading-relaxed justify-start"
          >
            <span className="font-bold text-emerald-700 mr-2 shrink-0">B</span>
            <span className="text-gray-800">{question.optionB}</span>
          </Button>
        </div>
      </div>

      <div className="brandingBg mb-8 mt-12">
        <div className="inner">
          <div className="tane">
            <figure>
              <img src="/images/tane.svg" alt="" loading="lazy" />
            </figure>
          </div>
          <div className="dog">
            <figure>
              <img src="/images/dog.svg" alt="" loading="lazy" />
            </figure>
          </div>
          <div className="tree">
            <figure>
              <img src="/images/tree.svg" alt="" loading="lazy" width={178} />
            </figure>
          </div>
        </div>
      </div>
      <div className="text-center pb-4 text-xs text-gray-400 font-medium">インナーブランディングチェック診断</div>
      <div className="text-center pb-8">
        <figure className="w-fit mx-auto">
          <img src="/images/logo.svg" alt="shunbin" loading="lazy" />
        </figure>
      </div>
    </div>
  )
}
