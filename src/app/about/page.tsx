"use client";
import React, { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 初期表示時にモバイルかどうかを判定
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 初回実行
    checkMobile();

    // ウィンドウリサイズ時にも実行
    window.addEventListener("resize", checkMobile);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    // スクロールアニメーション初期化
    const initAnimations = () => {
      // 既存のアニメーションをクリア（オプショナル）
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => trigger.kill());

      // メディアクエリの設定
      const isMobileCheck = window.matchMedia("(max-width: 768px)").matches;

      // 要素をリセット
      gsap.set(".fade-in-section", {
        opacity: 0,
        y: isMobileCheck ? 30 : 50, // モバイルでは少し控えめに
      });

      // セクションタイトルを画面外右側に配置
      gsap.set(".section-title", {
        opacity: 0,
        x: isMobileCheck ? 150 : 300, // モバイルでは少なめに
      });

      // スクロールアニメーション再設定
      const sections = document.querySelectorAll(".fade-in-section");
      sections.forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: isMobileCheck ? 0.6 : 0.8, // モバイルでは少し速く
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
          duration: isMobileCheck ? 0.8 : 1.2, // モバイルでは少し速く
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

  // モバイル版コンポーネント
  const MobileLayout = () => (
    <>
      {/* ヘッダーセクション - モバイル */}
      <section className="relative min-h-screen py-16 flex items-end">
        <div className="absolute inset-0">
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

        <div className="container mx-auto px-4 relative z-10 pb-12">
          <div className="max-w-xs mx-auto text-center">
            <h2 className="text-xl font-light mb-4 text-black">
              株式会社月の庭
            </h2>
            <p className="text-lg font-light mb-6 text-black leading-relaxed tracking-wide">
              「誰もがいつでも帰ってこれる庭」を目指して、
              対話を大切にした場づくりを行っています
            </p>
          </div>
        </div>
      </section>

      {/* Visionセクション - モバイル */}
      <section className="relative min-h-screen py-16 flex items-center">
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
          <div className="fade-in-section max-w-xs mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg font-light mb-8 text-black leading-relaxed tracking-wide">
                共感・調和・共存を 基盤とした、
                <br />
                ポスト資本主義社会の先駆けとなる事業を目指します
              </p>
              <p className="text-lg font-light mb-8 text-black leading-relaxed tracking-wide">
                時をかけて育ち、
                <br />
                次世代へとつながる未来に実を結ぶ流れを生み出します
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-6xl font-light section-title text-white">
                Vision
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophyセクション - モバイル */}
      <section className="relative min-h-screen py-16 flex items-center">
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
          <div className="fade-in-section max-w-xs mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg font-light mb-6 text-black leading-relaxed tracking-wide">
                年齢や立場を超えて、
                <br />
                互いを尊重し合い、
                <br />
                誰もが対等に過ごせる空間
              </p>
              <p className="text-lg font-light mb-6 text-black leading-relaxed tracking-wide">
                忙しい日々の中で、
                <br />
                ふと立ち止まり、
                <br />
                自分の心のうちに耳を傾ける時間
              </p>
              <p className="text-lg font-light mb-8 text-black leading-relaxed tracking-wide">
                安心して本音で語り合え、
                <br />
                新しい気づきや深いつながりが
                <br />
                生まれる場所
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-6xl font-light section-title text-white">
                Philosophy
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Projectセクション - モバイル */}
      <section className="relative min-h-screen py-16 flex items-center">
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
          <div className="fade-in-section max-w-xs mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg font-light mb-4 text-black leading-relaxed tracking-wide">
                ゆったりとした雰囲気の中でお互いの話を聞き合う対話の会
              </p>
              <p className="text-lg font-light mb-4 text-black leading-relaxed tracking-wide">
                気軽に集い交流できるイベント、講座、ワークショップ
              </p>
              <p className="text-lg font-light mb-4 text-black leading-relaxed tracking-wide">
                日常の気づきや想いを綴る言葉
              </p>
              <p className="text-lg font-light mb-8 text-black leading-relaxed tracking-wide">
                優しく包み込むようなアート作品
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-6xl font-light section-title text-white">
                Project
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Companyセクション - モバイル */}
      <section className="relative min-h-screen py-16 flex items-center">
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
          <div className="fade-in-section max-w-xs mx-auto">
            <div className="mb-12 text-center">
              {/* 会社情報テキスト */}
              <div className="w-full mx-auto">
                <meta name="robots" content="noindex, nofollow" />
                <div className="mb-4 text-black">
                  <h3 className="text-xl font-medium mb-4">
                    会社名 株式会社月の庭
                  </h3>
                  <p className="text-lg mb-2 font-light leading-relaxed tracking-wide">
                    所在地 〒336-0021 埼玉県さいたま市南区別所5丁目15番地2
                  </p>
                  <p className="text-lg mb-2 font-light leading-relaxed tracking-wide">
                    代表取締役 西 麻耶子
                  </p>
                  <p className="text-lg mb-2 font-light leading-relaxed tracking-wide">
                    設立 2025年4月21日
                  </p>
                  <p className="text-lg mb-2 font-light leading-relaxed tracking-wide">
                    資本金 150万円
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-6xl font-light section-title text-white">
                Company
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // デスクトップ版コンポーネント
  const DesktopLayout = () => (
    <>
      {/* ヘッダーセクション */}
      <section className="relative h-screen flex items-end">
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

        <div className="container mx-auto px-4 relative z-10 pb-24">
          <div className="max-w-3xl mx-auto ml-auto text-right">
            <h2 className="text-2xl font-light mb-4 text-black">
              株式会社月の庭
            </h2>
            <p className="text-lg font-light mb-6 text-black">
              「誰もがいつでも帰ってこれる庭」を目指して、対話を大切にした場づくりを行っています
            </p>
          </div>
        </div>
      </section>

      {/* Visionセクション */}
      <section className="relative h-screen flex items-center">
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
            <div className="text-center mb-20">
              <p className="text-lg font-light mb-12 text-black">
                共感・調和・共存を基盤とした、ポスト資本主義社会の先駆けとなる事業を目指します
              </p>
              <p className="text-lg font-light mb-16 text-black">
                時をかけて育ち、次世代へとつながる未来に実を結ぶ流れを生み出します
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-8xl lg:text-9xl font-light section-title text-white">
                Vision
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophyセクション */}
      <section className="relative h-screen flex items-center">
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
            <div className="text-center mb-20">
              <p className="text-lg font-light mb-8 text-black">
                年齢や立場を超えて、互いを尊重し合い、誰もが対等に過ごせる空間
              </p>
              <p className="text-lg font-light mb-8 text-black">
                忙しい日々の中で、ふと立ち止まり、自分の心のうちに耳を傾ける時間
              </p>
              <p className="text-lg font-light mb-16 text-black">
                安心して本音で語り合え、新しい気づきや深いつながりが生まれる場所
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-8xl lg:text-9xl font-light section-title text-white">
                Philosophy
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Projectセクション */}
      <section className="relative h-screen flex items-center">
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
            <div className="text-center mb-20">
              <p className="text-lg font-light mb-6 text-black">
                ゆったりとした雰囲気の中でお互いの話を聞き合う対話の会
              </p>
              <p className="text-lg font-light mb-6 text-black">
                気軽に集い交流できるイベント、講座、ワークショップ
              </p>
              <p className="text-lg font-light mb-6 text-black">
                日常の気づきや想いを綴る言葉
              </p>
              <p className="text-lg font-light mb-16 text-black">
                優しく包み込むようなアート作品
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-8xl lg:text-9xl font-light section-title text-white">
                Project
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Companyセクション */}
      <section className="relative h-screen flex items-center">
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
            <div className="mb-20 text-left">
              {/* 会社情報テキスト */}
              <div className="w-full mx-auto">
                <meta name="robots" content="noindex, nofollow" />
                <div className="mb-4 text-black">
                  <h3 className="text-2xl font-medium mb-6">
                    会社名 株式会社月の庭
                  </h3>
                  <p className="text-lg mb-3 font-light leading-relaxed tracking-wide">
                    所在地 〒336-0021 埼玉県さいたま市南区別所5丁目15番地2
                  </p>
                  <p className="text-lg mb-3 font-light leading-relaxed tracking-wide">
                    代表取締役 西 麻耶子
                  </p>
                  <p className="text-lg mb-3 font-light leading-relaxed tracking-wide">
                    設立 2025年4月21日
                  </p>
                  <p className="text-lg mb-3 font-light leading-relaxed tracking-wide">
                    資本金 150万円
                  </p>
                </div>
              </div>
            </div>

            <div className="text-right">
              <h2 className="text-8xl lg:text-9xl font-light section-title text-white">
                Company
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // isMobileの状態に応じて適切なレイアウトを表示
  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}
