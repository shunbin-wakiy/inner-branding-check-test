"use client"

import { Button } from "@/components/ui/button"
import type { ResultTier } from "@/types/result-tier"
import { RefreshCw } from "lucide-react"

interface ResultScreenProps {
  bCount: number
  tier: ResultTier
  onRestart: () => void
}

export default function ResultScreen({ bCount, tier, onRestart }: ResultScreenProps) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex flex-col items-center justify-center p-8 min-h-[350px] text-center px-4">
        <p className="text-lg text-gray-600 mb-2">
          B の回答は <span className="font-bold text-gray-800 text-2xl tabular-nums">{bCount}</span>{" "}
          個（全10問中）
        </p>
        <p className="text-sm text-gray-500 mb-8">{tier.bandLabel}</p>

        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{tier.message}</p>
      </div>

      <div className="flex justify-center p-6">
        <Button onClick={onRestart} variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full restartButton">
          <RefreshCw className="mr-2 h-5 w-5 text-gray-500" />
          <span className="text-gray-500">もう一度診断する</span>
        </Button>
      </div>

      <div className="text-center pb-6 text-xs text-gray-400 font-medium">インナーブランディングチェック診断</div>
      <div className="text-center pb-8">
        <figure className="w-fit mx-auto">
          <img src="/images/logo.svg" alt="shunbin" loading="lazy" />
        </figure>
      </div>
    </div>
  )
}
