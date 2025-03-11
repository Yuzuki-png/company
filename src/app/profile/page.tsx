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

export default function Profile() {
  const pathname = usePathname();

  useEffect(() => {
    // フェードイン要素の初期化
    gsap.set(".fade-in", {
      opacity: 0,
      y: 30,
    });

    // フェードインアニメーション
    gsap.to(".fade-in", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
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
    document.querySelectorAll(".scroll-reveal").forEach((section) => {
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

  const timeline = [
    {
      year: "2015",
      title: "詩作活動の開始",
      description: "個人的な詩作活動を始め、SNSでの発信を開始",
    },
    {
      year: "2017",
      title: "初の詩集出版",
      description: "自費出版で詩集「月の囁き」を出版",
    },
    {
      year: "2018",
      title: "アート活動の開始",
      description: "詩と融合したアート作品の制作を開始",
    },
    {
      year: "2020",
      title: "Waka-Tsuki設立",
      description: "詩とアートの活動を本格化し、Waka-Tsukiを設立",
    },
    {
      year: "2021",
      title: "定期イベントの開始",
      description: "月に一度の詩の朗読会・対話の会を開始",
    },
    {
      year: "2022",
      title: "オンラインショップ開設",
      description: "詩とアートを融合した作品のオンラインショップを開設",
    },
    {
      year: "2023",
      title: "企業コラボレーション",
      description: "複数の企業とのコラボレーションプロジェクトを実施",
    },
  ];

  const mediaFeatures = [
    {
      title: "インタビュー記事",
      publication: "natulan.jp",
      url: "https://natulan.jp/natulagi/article/garden-veranda-mayamoon/",
      description: "「まちなかベランダで、自然くらし」特集インタビュー",
    },
    {
      title: "連載コラム",
      publication: "natulan.jp",
      url: "https://natulan.jp/natulagi/article/mayamoon-column-1/",
      description: "「緑が教えてくれること」連載コラム",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* プロフィールセクション */}
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="fade-in text-4xl md:text-5xl font-bold mb-16 text-center">
            プロフィール
          </h1>

          <div className="fade-in flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-indigo-100 flex items-center justify-center">
                <div className="text-8xl">👩‍🎨</div>
                {/* 実際の画像を使用する場合:
                <Image
                  src="/images/profile-image.jpg"
                  alt="Maya Moon"
                  fill
                  style={{ objectFit: "cover" }}
                />
                */}
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-3">Maya Moon</h2>
              <p className="text-gray-600 mb-6">
                詩人・アーティスト / Waka-Tsuki創設者
              </p>

              <p className="text-gray-700 mb-4">
                月の光のように、そっと心に寄り添う詩とアートを通じて、
                一人ひとりの内側にある美しさと強さを引き出す活動を行っています。
              </p>

              <p className="text-gray-700 mb-6">
                20代で始めた詩作活動から、言葉の持つ力と可能性に魅了され、
                アートと融合した表現方法を模索。「誰もがいつでも帰ってこれる庭」をコンセプトに、
                Waka-Tsukiを設立し、詩とアートを通じた対話と共感の場づくりに取り組んでいます。
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/mayamoon0000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.mayamoon-art.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  公式サイト
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 経歴 */}
        <div className="max-w-3xl mx-auto">
          <h2 className="scroll-reveal text-3xl font-bold mb-12 text-center">
            これまでの歩み
          </h2>

          <div className="relative border-l-2 border-indigo-300 ml-6 md:ml-0 md:mx-auto md:max-w-2xl pl-8 pb-8">
            {timeline.map((item, index) => (
              <div key={index} className="scroll-reveal mb-12 relative">
                <div className="absolute -left-10 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
                <div className="text-indigo-600 font-bold mb-1">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 fade-in">
            メディア掲載
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaFeatures.map((item, index) => (
              <div
                key={index}
                className="fade-in bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.publication}</p>
                <p className="mb-4">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  記事を読む →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
