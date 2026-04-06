"use client"

import { Button } from "@/components/ui/button"

interface StartScreenProps {
  onStart: () => void
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center p-8 sm:p-12 min-h-[500px] text-center max-w-2xl mx-auto">
        <div className="space-y-3 mb-6 sm:mb-8 sm:space-y-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-600 leading-snug">
            Inner Branding Check Test
          </h1>
          <p className="text-lg text-gray-500 sm:text-xl">インナーブランディングチェック診断</p>
        </div>

        <p className="text-gray-600 mb-2 text-base sm:text-lg font-medium leading-relaxed">
          あなたの会社は「一本の線」で<br className="showSP" />繋がっていますか？
        </p>
        <p className="text-gray-500 mb-8 max-w-2xl text-sm sm:text-base leading-relaxed">
          診断テストは、10項目になります。<br className="showSP" />自社の現状をチェックしてみてください。
        </p>

        <Button onClick={onStart} size="lg" className="px-8 py-6 text-lg text-center rounded-full startButton">
          診断を始める→
        </Button>
        <div className="text-center mt-8">
          <figure className="w-fit mx-auto">
            <img src="/images/logo.svg" alt="shunbin" loading="lazy" />
          </figure>
        </div>
      </div>
    </div>
  )
}
