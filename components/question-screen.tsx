"use client"

import { Button } from "@/components/ui/button"
import type { AbAnswer, Question } from "@/types/question"
import Image from "next/image"

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
  /** 上段は常に表記「A」・琥珀、下段は常に表記「B」・緑。invert のときだけ本文（option）を入れ替え */
  const slotA = question.invertDisplay
    ? { text: question.optionB, value: "B" as const }
    : { text: question.optionA, value: "A" as const }
  const slotB = question.invertDisplay
    ? { text: question.optionA, value: "A" as const }
    : { text: question.optionB, value: "B" as const }

  const rows = [
    {
      key: "top",
      label: "A" as const,
      text: slotA.text,
      value: slotA.value,
      className:
        "h-auto min-h-14 py-4 px-4 sm:px-6 text-left whitespace-normal rounded-2xl border-2 border-gray-200 bg-white hover:bg-amber-50 hover:border-amber-300 text-base leading-relaxed justify-start",
      labelClass: "font-bold text-amber-700 mr-2 shrink-0",
    },
    {
      key: "bottom",
      label: "B" as const,
      text: slotB.text,
      value: slotB.value,
      className:
        "h-auto min-h-14 py-4 px-4 sm:px-6 text-left whitespace-normal rounded-2xl border-2 border-gray-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-base leading-relaxed justify-start",
      labelClass: "font-bold text-emerald-700 mr-2 shrink-0",
    },
  ]

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
          {rows.map((row) => (
            <Button
              key={row.key}
              type="button"
              variant="outline"
              size="lg"
              onClick={() => onAnswer(row.value)}
              className={row.className}
            >
              <span className={row.labelClass}>{row.label}</span>
              <span className="text-gray-800">{row.text}</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="brandingBg mb-8 mt-12">
        <div className="inner" />
      </div>
      <div className="text-center pb-4 text-xs text-gray-400 font-medium">インナーブランディングチェック診断</div>
      <div className="text-center pb-8">
        <figure className="w-fit mx-auto">
          <Image src="/images/logo.svg" alt="shunbin" width={160} height={48} className="h-auto w-auto max-w-[160px]" unoptimized />
        </figure>
      </div>
    </div>
  )
}
