import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inner Branding Check Test | インナーブランディングチェック診断",
  description:
    "あなたの会社は「一本の線」で繋がっていますか？10項目の診断で自社の現状をチェックできます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-noto-sans-jp font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
