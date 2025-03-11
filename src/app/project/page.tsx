"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

// GSAPプラグインの登録
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Project() {
  const pathname = usePathname();

  useEffect(() => {
    // 既存のトリガーをクリア
    const triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => trigger.kill());

    // 要素をリセット
    gsap.set(".fade-in-section", {
      opacity: 0,
      y: 50,
    });

    // スクロールアニメーション設定
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // クリーンアップ
    return () => {
      const allTriggers = ScrollTrigger.getAll();
      allTriggers.forEach((trigger) => trigger.kill());
    };
  }, [pathname]); // pathnameが変わった時に再実行

  const projects = [
    {
      id: 1,
      title: "対話の会",
      description:
        "心地よい対話の場を通じて、互いの理解を深め、新たな気づきを生み出します。定期的に開催される対話の会では、テーマに沿った深い会話を通じて、参加者同士のつながりを育みます。",
      features: [
        "月に2回の定期開催",
        "オンラインとオフラインのハイブリッド形式",
        "少人数制で心を開いて話せる環境",
        "テーマに沿った深い対話と気づきの共有",
      ],
      icon: "🗣️",
      color: "bg-blue-50",
    },
    {
      id: 2,
      title: "イベント・ワークショップ",
      description:
        "創造性を育み、自己表現を促す多様なワークショップを開催しています。詩の朗読会、アート制作体験、自己探求ワークショップなど、様々な形で自分自身と向き合い、表現する機会を提供します。",
      features: [
        "詩の朗読と鑑賞の会",
        "アート制作ワークショップ",
        "季節に合わせた特別イベント",
        "企業・学校向けカスタマイズプログラム",
      ],
      icon: "🎨",
      color: "bg-purple-50",
    },
    {
      id: 3,
      title: "エッセイ・詩の制作",
      description:
        "心に響く言葉を通じて、日常に新たな視点と彩りをお届けします。オリジナルの詩やエッセイの制作、出版物の発行を通じて、言葉の持つ力と美しさを伝えています。",
      features: [
        "オリジナル詩集の出版",
        "WEBメディアでの定期エッセイ配信",
        "企業広報や商品に添える詩の制作",
        "詩の書き方ガイダンス",
      ],
      icon: "✒️",
      color: "bg-amber-50",
    },
    {
      id: 4,
      title: "アート作品の創作",
      description:
        "感情や思いを視覚的に表現し、見る人の心に寄り添うアート作品を制作しています。詩と融合したアート作品は、言葉だけでは表現しきれない感情や世界観を伝えます。",
      features: [
        "詩とアートを融合した複合作品",
        "感情や思いを視覚化する抽象画",
        "空間インスタレーション",
        "オーダーメイドアート作品の制作",
      ],
      icon: "🖼️",
      color: "bg-emerald-50",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      {/* ヘッダーセクション */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">事業内容</h1>
            <p className="text-xl">詩とアートを通じた活動の数々</p>
          </div>
        </div>
      </section>

      {/* 導入部分 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="fade-in-section max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Waka-Tsukiでは、詩とアートの力を活かした様々な活動を展開しています。
              <br />
              心に寄り添い、共感と対話を大切にした4つの主要な事業をご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* プロジェクト一覧 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`fade-in-section mb-20 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`p-8 rounded-lg shadow-lg ${project.color}`}>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 flex justify-center items-start">
                      <div className="text-8xl">{project.icon}</div>
                    </div>

                    <div className="md:w-2/3">
                      <h2 className="text-2xl font-bold mb-4">
                        {project.title}
                      </h2>
                      <p className="text-gray-700 mb-6">
                        {project.description}
                      </p>

                      <h3 className="font-semibold mb-3">主な特徴:</h3>
                      <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>

                      <button className="inline-block bg-white hover:bg-gray-100 text-indigo-600 font-semibold py-2 px-6 border border-indigo-600 rounded-full transition-colors">
                        詳しく見る
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="fade-in-section max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              あなたのプロジェクトに詩とアートの力を
            </h2>
            <p className="text-lg mb-8">
              企業イベント、チームビルディング、商品開発など、あなたのプロジェクトに詩とアートの力を取り入れませんか？
              カスタマイズされたプログラムをご提案いたします。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-indigo-900 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
