import type { ResultTier, ResultTierId } from "@/types/result-tier"

const tiers: Record<ResultTierId, ResultTier> = {
  high: {
    id: "high",
    bandLabel: "Bが8個以上",
    message:
      "素晴らしい状態です。さらにその精度を高め、社会課題を解決する「本物」へと進化させましょう。",
  },
  mid: {
    id: "mid",
    bandLabel: "Bが5〜7個",
    message:
      "惜しい状態です。設計か、あるいは運営のどこかに「ズレ」が生じているかもしれません。",
  },
  low: {
    id: "low",
    bandLabel: "Bが4個以下",
    message:
      "危険信号です。社長のガムシャラな努力が、組織の空回りや社員の疲弊に繋がっている可能性があります。",
  },
}

export function tierFromBCount(bCount: number): ResultTier {
  if (bCount >= 8) return tiers.high
  if (bCount >= 5) return tiers.mid
  return tiers.low
}
