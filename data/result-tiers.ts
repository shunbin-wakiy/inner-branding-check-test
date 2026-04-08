import type { ResultTier, ResultTierId } from "@/types/result-tier"

const tiers: Record<ResultTierId, ResultTier> = {
  high: {
    id: "high",
    bandLabel: "Bが8個以上",
    headline: "素晴らしい状態です。",
    message:
      "さらにその精度を高め、\n社会課題を解決する「本物」へと進化させましょう。",
  },
  mid: {
    id: "mid",
    bandLabel: "Bが5〜7個",
    headline: "ブラッシュアップが\n必要な状態です。",
    message: "設計か、あるいは運営のどこかに\n「ズレ」が生じているかもしれません。",
  },
  low: {
    id: "low",
    bandLabel: "Bが4個以下",
    headline: "危険信号です。",
    message:
      "社長のガムシャラな努力が、\n組織の空回りや社員の疲弊に\n繋がっている可能性があります。",
  },
}

export function tierFromBCount(bCount: number): ResultTier {
  if (bCount >= 8) return tiers.high
  if (bCount >= 5) return tiers.mid
  return tiers.low
}
