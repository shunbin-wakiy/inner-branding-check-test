export type ResultTierId = "high" | "mid" | "low"

export interface ResultTier {
  id: ResultTierId
  bandLabel: string
  /** 結果のリード文（大きめフォントで表示） */
  headline: string
  /** headline に続く本文 */
  message: string
}
