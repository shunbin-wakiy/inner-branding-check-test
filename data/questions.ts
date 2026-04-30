import type { AbAnswer, Question } from "@/types/question"

/**
 * 各設問のフィールドの意味（UIは question-screen.tsx）
 *
 * - optionA / optionB … データ上の「A列」「B列」の本文。保存される回答は常に "A" か "B"（どちらの列を選んだか）。
 * - countsAsB … 結果の「B寄り」として数える列。"B" なら optionB を選んだ回数がティア判定に効く（現状すべて "B"）。
 * - invertDisplay … true のとき、**表記は常に上=A（琥珀）・下=B（緑）**のまま、**本文だけ**入れ替える。
 *   - false: 上に optionA、下に optionB
 *   - true: 上に optionB の文、下に optionA の文（押した位置から A/B 列は正しく記録される）
 */

/** 回答記録に対し、「ティアB寄り」の選択が何回あったか（tierFromBCount の引数） */
export function countTierBPicks(answers: Record<string, AbAnswer>): number {
  return questions.reduce((acc, q) => {
    return answers[q.id] === q.countsAsB ? acc + 1 : acc
  }, 0)
}

export const questions: Question[] = [
  {
    id: "q1",
    section: "設計",
    title: "会社のミッションの視点",
    optionA: "自分たちが「何をしたいか（主観）」で決まっている",
    optionB: "社会や顧客から「何を求められているか（顧客目線）」で設計されている",
    countsAsB: "B",
    invertDisplay: false,
  },
  {
    id: "q2",
    section: "設計",
    title: "ビジョンの浸透度",
    optionA:
      "社長の頭の中にだけあり、社員は「どこを目指しているか」を自分の言葉で説明できない",
    optionB: "社長の個性と歴史が反映された未来図を、社員がワクワクしながら語れる",
    countsAsB: "B",
    invertDisplay: true,
  },
  {
    id: "q3",
    section: "設計",
    title: "歴史の活用",
    optionA: "過去の苦労や創業の精神が、今の事業と切り離されている",
    optionB: "Must（使命）・Can（強み）・Will（意志）が、歴史という土台の上で重なっている",
    countsAsB: "B",
    invertDisplay: false,
  },
  {
    id: "q4",
    section: "表現",
    title: "一貫性のチェック",
    optionA: "Webサイト、SNS、名刺、オフィス空間のトーンがバラバラである",
    optionB: "あらゆる接点で「同じ刺激（らしさ）」が顧客、社員に伝わっている",
    countsAsB: "B",
    invertDisplay: true,
  },
  {
    id: "q5",
    section: "表現",
    title: "判断の基準",
    optionA: "デザインや言葉を決めるとき、最終的には「社長の好み」で決まる",
    optionB:
      "具体的な「たった一人のペルソナ（理想の顧客）ならどう思うか」を基準に決まる",
    countsAsB: "B",
    invertDisplay: false,
  },
  {
    id: "q6",
    section: "表現",
    title: "空間のメッセージ",
    optionA: "オフィスは単なる「作業場」であり、ブランドを体現する場にはなっていない",
    optionB: "オフィスを訪れた瞬間に、会社の志や世界観が五感で伝わるようになっている",
    countsAsB: "B",
    invertDisplay: true,
  },
  {
    id: "q7",
    section: "運営・制度",
    title: "バリュー（行動指針）の体温",
    optionA: "壁に貼ってあるだけで、現場の判断基準にはなっていない",
    optionB: "社員自らが紡いだ言葉であり、日々の称賛や反省の基準として機能している",
    countsAsB: "B",
    invertDisplay: false,
  },
  {
    id: "q8",
    section: "運営・制度",
    title: "評価の納得感",
    optionA: "数字の結果だけで評価が決まり、プロセスやバリュー体現は見られていない",
    optionB: "多角的な視点で見守られ、「努力を誰かが見てくれている」という安心感がある",
    countsAsB: "B",
    invertDisplay: true,
  },
  {
    id: "q9",
    section: "運営・制度",
    title: "SNSと一貫性",
    optionA: "SNSの発信が担当者任せで、ブランドの人格とズレが生じている",
    optionB: "発信の一つひとつが、バリュー（行動指針）に基づいている",
    countsAsB: "B",
    invertDisplay: false,
  },
  {
    id: "q10",
    section: "運営・制度",
    title: "経営者の役割",
    optionA: "自分が現場で指示を出さないと、組織が止まってしまう",
    optionB: "仕組みと文化が整っており、自分が不在でも社員が自律的に動き、成長している",
    countsAsB: "B",
    invertDisplay: true,
  },
]

export const TOTAL_QUESTIONS = questions.length
