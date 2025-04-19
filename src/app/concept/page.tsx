"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Image from "next/image";

// GSAPプラグインの登録
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Concept() {
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

  const concepts = [
    {
      id: 1,
      title: "対話が紡ぐ温かな居場所",
      description:
        "一人ひとりの声に耳を傾け、心地よい対話を通じて互いを理解し合える場所を創ります。違いを認め合い、多様な価値観が共存する対話の文化を育てます。",
      icon: "💬",
      color: "bg-amber-50",
      borderColor: "border-amber-400",
    },
    {
      id: 2,
      title: "心に寄り添う言葉とアートの力",
      description:
        "詩やアートは、言葉を超えて心に直接語りかけます。感情や思いを表現し、共感を生み出す言葉とアートの力を大切にし、心の架け橋として活用します。",
      icon: "🎨",
      color: "bg-indigo-50",
      borderColor: "border-indigo-400",
    },
    {
      id: 3,
      title: "ゆるやかなつながりと循環",
      description:
        "強制ではなく、自発的な参加と貢献が生まれる場所。一人ひとりが自分のペースで関わりながら、互いに影響し合い、新たな価値を生み出す循環を促します。",
      icon: "🔄",
      color: "bg-emerald-50",
      borderColor: "border-emerald-400",
    },
    {
      id: 4,
      title: "誰もがのびのびと生きられる社会へ",
      description:
        "年齢、性別、バックグラウンドに関わらず、誰もが自分らしく生きられる社会を目指します。多様性を尊重し、互いの存在を認め合う文化の醸成に貢献します。",
      icon: "🌈",
      color: "bg-rose-50",
      borderColor: "border-rose-400",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      {/* ヘッダーセクション */}
      <section className="py-16 relative">
        {/* 背景画像 */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/home/home_tuki_background.jpg"
            alt="コンセプト背景"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-indigo-900 bg-opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">コンセプト</h1>
            <p className="text-xl md:text-2xl">誰もがいつでも帰ってこれる庭</p>
          </div>
        </div>
      </section>

      {/* 導入部分 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="fade-in-section max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-12">
              Waka-Tsukiは、詩とアートを通じて心の居場所を作る活動です。
              <br />
              月の光がそっと夜を包むように、一人ひとりの心に寄り添い、
              <br />
              共感と調和の世界を育んでいきます。
            </p>

            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
          </div>
        </div>
      </section>

      {/* 4つの理念 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="fade-in-section max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">4つの理念</h2>
            <p className="text-gray-700">
              私たちの活動の根底にある4つの大切な考え方です
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {concepts.map((concept) => (
                <div key={concept.id} className="fade-in-section">
                  <div
                    className={`h-full p-8 rounded-lg shadow-md ${concept.color} border-l-4 ${concept.borderColor}`}
                  >
                    <div className="text-4xl mb-4">{concept.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{concept.title}</h3>
                    <p className="text-gray-700">{concept.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 創設者メッセージ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="fade-in-section max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">
              創設者からのメッセージ
            </h2>
            <blockquote className="text-gray-700 italic mb-6">
              「誰もがありのままでいられる場所を作りたい。そんな思いから、Waka-Tsukiは始まりました。
              詩やアートには、言葉を超えて心と心をつなぐ力があります。その力を通じて、
              一人でも多くの人が自分の居場所を見つけ、互いに支え合える関係を築けるよう願っています。」
            </blockquote>
            <p className="text-right font-semibold">Maya Moon</p>
          </div>
        </div>
      </section>
    </div>
  );
}
