"use client"

import { Button } from "@/components/ui/button"
import type { ResultTier } from "@/types/result-tier"
import Image from "next/image"
import { RefreshCw } from "lucide-react"

interface ResultScreenProps {
  tier: ResultTier
  onRestart: () => void
}

export default function ResultScreen({ tier, onRestart }: ResultScreenProps) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex flex-col items-center justify-center p-8 min-h-[200px] text-center px-4">
        <p className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug mb-4">
          {tier.headline}
          {tier.headlineLine2 != null && (
            <>
              <br className="showSP" />
              {tier.headlineLine2}
            </>
          )}
        </p>
        <p className="text-lg text-gray-700 font-medium leading-relaxed whitespace-pre-line">{tier.message}</p>
      </div>

      <div className="flex justify-center p-6">
        <Button onClick={onRestart} variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full restartButton">
          <RefreshCw className="mr-2 h-5 w-5 text-gray-500" />
          <span className="text-gray-500">もう一度診断する</span>
        </Button>
      </div>

      <div className="text-center pb-6 text-xs text-gray-400 font-medium">インナーブランディングチェック診断</div>
      <div className="text-center pb-8">
        <figure className="w-fit mx-auto"><a href="https://www.shun-bin.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/images/logo.svg" alt="shunbin" width={160} height={48} className="h-auto w-auto max-w-[160px]" unoptimized />
        </a></figure>
      </div>
    </div>
  )
}
