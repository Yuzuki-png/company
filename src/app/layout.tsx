import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import { Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 日本語フォント設定
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

// 英語フォント設定
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "株式会社月の庭",
  description:
    "株式会社月の庭は、日本の伝統文化と現代の感性を融合させた空間づくりを通じて、心の豊かさと美しい暮らしを提案します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Noto+Serif+JP:wght@200..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${notoSerifJP.className} ${lora.className} ${lora.variable} min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
