export type ResultTierId = "high" | "mid" | "low"

export interface ResultTier {
  id: ResultTierId
  bandLabel: string
  message: string
}
