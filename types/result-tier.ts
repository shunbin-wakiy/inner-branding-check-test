export type ResultTierId = "high" | "mid" | "low"

export interface ResultTier {
  id: ResultTierId
  bandLabel: string
  /** 結果のリード文（大きめフォントで表示） */
  headline: string
  /** 設定時は 480px 以下のみ headline の直後に改行して続けて表示 */
  headlineLine2?: string
  /** headline に続く本文 */
  message: string
}
