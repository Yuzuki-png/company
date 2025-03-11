"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import { usePathname } from "next/navigation";

// GSAPプラグインの登録
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    // スクロールアニメーション初期化
    const initAnimations = () => {
      // 既存のアニメーションをクリア（オプショナル）
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => trigger.kill());

      // 要素をリセット
      gsap.set(".fade-in-section", {
        opacity: 0,
        y: 50,
      });

      // スクロールアニメーション再設定
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
    };

    // アニメーション初期化を実行
    initAnimations();

    // クリーンアップ
    return () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return (
    <>
      <Hero />

      {/* コンセプト紹介セクション */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="fade-in-section max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              誰もがいつでも帰ってこれる庭
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              月の光がそっと夜を包むように、ここでは一人ひとりの心に寄り添う言葉とアートの力を大切にしています。
              対話が紡ぐ温かな居場所で、ゆるやかなつながりと循環を生み出し、
              誰もがのびのびと生きられる社会を目指しています。
            </p>
            <Link
              href="/concept"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              コンセプトを詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* 事業内容ハイライト */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            私たちの活動
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "対話の会",
                description:
                  "心地よい対話の場を通じて、互いの理解を深め、新たな気づきを生み出します。",
                icon: "🗣️",
              },
              {
                title: "イベント・ワークショップ",
                description:
                  "創造性を育み、自己表現を促す多様なワークショップを開催しています。",
                icon: "🎨",
              },
              {
                title: "エッセイ・詩の制作",
                description:
                  "心に響く言葉を通じて、日常に新たな視点と彩りをお届けします。",
                icon: "✒️",
              },
              {
                title: "アート作品の創作",
                description:
                  "感情や思いを視覚的に表現し、見る人の心に寄り添うアート作品を制作しています。",
                icon: "🖼️",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="fade-in-section bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/project"
              className="inline-block border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              事業内容を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* 最新イベント情報 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            最新イベント情報
          </h2>

          <div className="fade-in-section max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center text-indigo-400">
                    <span className="text-6xl">🌙</span>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">月明かりの詩の会</h3>
                <p className="text-gray-500 mb-4">2023年12月15日 19:00-21:00</p>
                <p className="text-gray-700 mb-6">
                  月の光の下で心に響く詩を分かち合い、対話を通じて新たな気づきを得る特別な夜。
                  参加者が持ち寄った詩の朗読や、即興での詩作りなど、言葉と感性を豊かに育む時間をお過ごしください。
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
                  >
                    詳細を見る
                  </a>
                  <a
                    href="#"
                    className="inline-block border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 px-6 rounded-full transition-colors"
                  >
                    申し込む
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/event"
              className="inline-block border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              すべてのイベントを見る
            </Link>
          </div>
        </div>
      </section>

      {/* インスタグラムフィード */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Instagram
          </h2>
          <p className="text-center text-gray-600 mb-12">
            日々の活動や作品の制作過程をシェアしています
          </p>

          <div className="fade-in-section grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="relative aspect-square bg-gray-100 overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-indigo-50 flex items-center justify-center text-indigo-300">
                  <span className="text-4xl">📷</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/mayamoon0000/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              <span>Instagramをフォローする</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
