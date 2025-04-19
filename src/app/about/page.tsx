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

export default function About() {
  const pathname = usePathname();

  useEffect(() => {
    // スクロールアニメーション初期化
    const initAnimations = () => {
      // 既存のアニメーションをクリア（オプショナル）
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => trigger.kill());

      // メディアクエリの設定
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      // 要素をリセット
      gsap.set(".fade-in-section", {
        opacity: 0,
        y: isMobile ? 30 : 50, // モバイルでは少し控えめに
      });

      // セクションタイトルを画面外右側に配置
      gsap.set(".section-title", {
        opacity: 0,
        x: isMobile ? 150 : 300, // モバイルでは少なめに
      });

      // スクロールアニメーション再設定
      const sections = document.querySelectorAll(".fade-in-section");
      sections.forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.6 : 0.8, // モバイルでは少し速く
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // もう少し早めにトリガー
            toggleActions: "play none none none",
          },
        });
      });

      // セクションタイトルのアニメーション
      const titles = document.querySelectorAll(".section-title");
      titles.forEach((title) => {
        gsap.to(title, {
          opacity: 1,
          x: 0,
          duration: isMobile ? 0.8 : 1.2, // モバイルでは少し速く
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%", // もう少し早めにトリガー
            toggleActions: "play none none none",
          },
        });
      });
    };

    // リサイズにも対応
    const handleResize = () => {
      // リサイズ時にもアニメーションを再初期化
      initAnimations();
    };

    // アニメーション初期化を実行
    initAnimations();

    // リサイズイベントリスナーを追加
    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <>
      {/* ヘッダーセクション */}
      <section className="relative min-h-screen py-20 md:py-0 md:h-screen flex items-end">
        {/* 背景画像プレースホルダー - 後でPNG画像に置き換え */}
        <div className="absolute inset-0 bg-green-50">
          {/* 後でここに葉の画像を入れる */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/about/about_corporation_background.png"
              alt="月の庭の背景"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              className="opacity-90"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pb-12 md:pb-24">
          <div className="max-w-3xl mx-auto md:ml-auto md:text-right text-center">
            <h2 className="text-xl md:text-2xl font-light mb-4 text-black">
              株式会社月の庭
            </h2>
            <p className="text-base md:text-lg font-light mb-6 text-black">
              「誰もがいつでも帰ってこれる庭」
              を目指して、対話を大切にした場づくりを行っています
            </p>
          </div>
        </div>
      </section>

      {/* Visionセクション */}
      <section className="relative min-h-screen py-20 md:py-0 md:h-screen flex items-center">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/about/about_vision_background.png"
              alt="月の庭の背景"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              className="opacity-90"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="fade-in-section max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <p className="text-base md:text-lg font-light mb-8 md:mb-12 text-black">
                共感・調和・共存を基盤とした、ポスト資本主義社会の先駆けとなる事業を目指します
              </p>
              <p className="text-base md:text-lg font-light mb-8 md:mb-16 text-black">
                時をかけて育ち、次世代へとつながる未来に実を結ぶ流れを生み出します
              </p>
            </div>

            <div className="text-center md:text-right">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-light section-title">
                Vision
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophyセクション */}
      <section className="relative min-h-screen py-20 md:py-0 md:h-screen flex items-center">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/about/about_philosophy_background.png"
              alt="月の庭の背景"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              className="opacity-90"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="fade-in-section max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <p className="text-base md:text-lg font-light mb-6 md:mb-8 text-black">
                年齢や立場を超えて、互いを尊重し合い、誰もが対等に過ごせる空間
              </p>
              <p className="text-base md:text-lg font-light mb-6 md:mb-8 text-black">
                忙しい日々の中で、ふと立ち止まり、自分の心のうちに耳を傾ける時間
              </p>
              <p className="text-base md:text-lg font-light mb-8 md:mb-16 text-black">
                安心して本音で語り合え、新しい気づきや深いつながりが生まれる場所
              </p>
            </div>

            <div className="text-center md:text-right">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-light section-title">
                Philosophy
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Projectセクション */}
      <section className="relative min-h-screen py-20 md:py-0 md:h-screen flex items-center">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/about/about_project_background.png"
              alt="月の庭の背景"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              className="opacity-90"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="fade-in-section max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <p className="text-base md:text-lg font-light mb-4 md:mb-6 text-black">
                • ゆったりとした雰囲気の中でお互いの話を聞き合う対話の会
              </p>
              <p className="text-base md:text-lg font-light mb-4 md:mb-6 text-black">
                • 気軽に集い交流できるイベント、講座、ワークショップ
              </p>
              <p className="text-base md:text-lg font-light mb-4 md:mb-6 text-black">
                • 日常の気づきや想いを綴る言葉
              </p>
              <p className="text-base md:text-lg font-light mb-8 md:mb-16 text-black">
                • 優しく包み込むようなアート作品
              </p>
            </div>

            <div className="text-center md:text-right">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-light section-title">
                Project
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Companyセクション */}
      <section className="relative min-h-screen py-20 md:py-0 md:h-screen flex items-center">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/about/about_company_background.png"
              alt="月の庭の背景"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              className="opacity-90"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="fade-in-section max-w-5xl mx-auto">
            <div className="mb-12 md:mb-20 text-center md:text-left">
              {/* 会社情報テキスト画像 - 標準imgタグで表示サイズを確保 */}
              <div className="w-full mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/about_company_text.png"
                  alt="株式会社月の庭 会社情報"
                  className="w-full md:w-4/5 lg:w-3/4 mx-auto md:mx-0"
                />
              </div>
            </div>

            <div className="text-center md:text-right">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-light section-title">
                Company
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
