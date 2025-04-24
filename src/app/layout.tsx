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
    "「誰もがいつでも帰ってこれる庭」を目指して、対話を大切にした場づくりを行っています。共感・調和・共存を基盤とした、ポスト資本主義社会の先駆けとなる事業です。",
  metadataBase: new URL("https://www.tsuki-no-niwa.site"),
  openGraph: {
    title: "株式会社月の庭",
    description:
      "「誰もがいつでも帰ってこれる庭」を目指して、対話を大切にした場づくりを行っています。共感・調和・共存を基盤とした、ポスト資本主義社会の先駆けとなる事業です。",
    url: "https://www.tsuki-no-niwa.site/",
    siteName: "株式会社月の庭",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://www.tsuki-no-niwa.site/images/home/home_tuki_background.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社月の庭",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社月の庭",
    description:
      "「誰もがいつでも帰ってこれる庭」を目指して、対話を大切にした場づくりを行っています。",
    images: [
      {
        url: "https://www.tsuki-no-niwa.site/images/home/home_tuki_background.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社月の庭",
      },
    ],
  },
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
