export type AbAnswer = "A" | "B"

export interface Question {
  id: string
  section: string
  title: string
  optionA: string
  optionB: string
  /** 診断結果の「Bに近い回答」として数えるのが A列か B列か（列＝optionA / optionB） */
  countsAsB: AbAnswer
  /** true のときは上段の本文と下段の本文だけ入れ替え（表記は常に上=A・琥珀、下=B・緑） */
  invertDisplay: boolean
}
