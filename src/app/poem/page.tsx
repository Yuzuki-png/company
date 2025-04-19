"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { fadeInAnimation } from "@/utils/animations";

export default function Poem() {
  const pathname = usePathname();

  useEffect(() => {
    // アニメーションの実行
    fadeInAnimation();
  }, [pathname]);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="fade-in text-4xl md:text-5xl font-bold mb-12 text-center">
            月の庭
          </h1>

          <div className="fade-in prose prose-lg mx-auto mb-16">
            <p className="text-center text-lg md:text-xl mb-8">
              今宵も月は
              <br />
              そっと庭を照らし
              <br />
              風を運ぶ
            </p>

            <p className="text-center text-lg md:text-xl mb-8">
              木々のささやき
              <br />
              星々の瞬き
              <br />
              すべてを包み込む静寂
            </p>

            <p className="text-center text-lg md:text-xl mb-8">
              この庭で
              <br />
              あなたの心が
              <br />
              少しでも和らぎますように
            </p>

            <p className="text-center text-lg md:text-xl mb-8">
              誰もがいつでも
              <br />
              帰ってくる場所
              <br />
              それが「月の庭」
            </p>
          </div>

          <div className="fade-in bg-indigo-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">詩について</h2>
            <p className="mb-4">
              「月の庭」は、Waka-Tsukiの理念を表現した詩です。夜空の月のように静かに寄り添い、
              温かく包み込む場所でありたいという願いが込められています。
            </p>
            <p>
              詩は言葉を通じて心に直接語りかけ、共感と癒しをもたらします。
              私たちは詩とアートを通じて、人々の心に寄り添う活動を続けています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
