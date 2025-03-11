"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

// GSAPプラグインの登録
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Vision() {
  const pathname = usePathname();

  useEffect(() => {
    // ヒーローコンテンツのリセットとアニメーション
    gsap.set(".hero-content", {
      opacity: 0,
      y: 50,
    });

    gsap.to(".hero-content", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    // スクロールアニメーション
    // 既存のトリガーをクリア
    const triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => trigger.kill());

    // 要素をリセット
    gsap.set(".scroll-reveal", {
      opacity: 0,
      y: 50,
    });

    // スクロールアニメーション設定
    const sections = document.querySelectorAll(".scroll-reveal");
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

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative pt-28 pb-20 bg-indigo-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-content max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ビジョン</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              月の光がそっと夜を包むように、
              <br />
              一人ひとりの心に寄り添い、
              <br />
              共感と調和の世界を育む
            </p>
          </div>
        </div>
      </section>

      {/* ビジョン詳細 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">
                私たちが目指す世界
              </h2>
              <p className="text-lg text-gray-700">
                Waka-Tsukiは、詩とアートの力を通じて、すべての人が自分らしく生きられる社会の実現を目指しています。
                言葉や芸術が持つ力を活かし、心の交流を深め、互いの違いを尊重し合える文化を育んでいきます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="scroll-reveal">
                <div className="bg-indigo-50 rounded-lg p-8 h-full">
                  <h3 className="text-xl font-bold mb-4">共感の広がり</h3>
                  <p className="text-gray-700">
                    誰もが互いの感情や経験に共感し、理解し合える社会。
                    詩やアートは言葉を超えた共感を生み出し、心と心をつなぐ架け橋となります。
                    私たちは共感の輪を広げ、孤独や分断を癒やす活動を推進します。
                  </p>
                </div>
              </div>

              <div className="scroll-reveal">
                <div className="bg-purple-50 rounded-lg p-8 h-full">
                  <h3 className="text-xl font-bold mb-4">調和と循環</h3>
                  <p className="text-gray-700">
                    自然と人間、伝統と革新、個人と集団が調和する世界。
                    対立ではなく共存を、競争ではなく協力を重んじ、
                    様々な価値観や生き方が互いに影響し合い、豊かな循環を生み出す社会づくりに貢献します。
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-reveal text-center mb-16">
              <blockquote className="text-2xl font-serif italic text-gray-800">
                "一人ひとりの小さな光が集まれば、
                <br />
                夜空を照らす月のような輝きになる"
              </blockquote>
            </div>

            <div className="scroll-reveal">
              <div className="bg-white shadow-lg rounded-lg p-8 border-l-4 border-indigo-600">
                <h3 className="text-xl font-bold mb-4">2030年に向けた目標</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✦</span>
                    全国100箇所以上での詩とアートを通じた交流の場の創出
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✦</span>
                    1万人以上の人々が参加する創造的なコミュニティの形成
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✦</span>
                    教育機関と連携し、次世代への詩とアートの大切さの継承
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✦</span>
                    企業や自治体との協働プロジェクトによる社会課題の解決
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
