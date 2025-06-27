"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// GSAPプラグインの登録
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Profile() {
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
    // アニメーション初期化
    const initAnimations = () => {
      // 既存のアニメーションをクリア
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => trigger.kill());

      // 要素をリセット
      gsap.set(".profile-content", {
        opacity: 0,
        y: 30,
      });

      // フェードインアニメーション
      gsap.to(".profile-content", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
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

  // モバイル版Mayamoonプロフィール
  const MobileProfileLayout = () => (
    <>
      {/* Mayamoonプロフィール - モバイル */}
      <section className="relative py-12">
        {/* 背景画像 */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/profile/mayamoon_background.png"
            alt="Mayamoon背景"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-90"
          />
        </div>

        <div className="relative z-10 w-full max-w-sm mx-auto px-4 profile-content">
          <div className="flex flex-col items-center mb-6">
            {/* プロフィール画像 - サイズ調整 */}
            <div className="w-120 h-120 mb-4 relative">
              <Image
                src="/images/profile/mayamoonProfile.png"
                alt="Mayamoon プロフィール画像"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-black text-lg font-light mb-1">
              株式会社月の庭　代表取締役
            </h2>
            <h3 className="text-black text-lg font-light mb-4">
              Mayamoon　プロフィール
            </h3>

            <div className="text-black space-y-3 text-sm font-light text-center mb-8">
              <p>
                18年間の商社勤務を経て、子どもの不登校・引きこもりを機に退職。
              </p>
              <p>
                現在は絵描き詩人としてアート作品や言葉を表現しながら、自然とともに暮らす日々を送っている。
              </p>
              <p>
                日本全国で個展やイベントに出展、海外にも活動範囲を広げている。
              </p>
              <p>
                無農薬・無肥料の畑仕事、家の中での静かな時間や当たり前の日常の生活を大切にしている。
              </p>
              <p>
                オンラインコミュニティ「ノートと種まき」の主宰、
                哲学対話を通じて安心して本音を語れる場を育んでいる。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* よしこばプロフィール - モバイル */}
      <section className="relative py-12">
        {/* 背景画像 */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/profile/mayamoon_background.png"
            alt="よしこば背景"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-90"
          />
        </div>

        <div className="relative z-10 w-full max-w-sm mx-auto px-4 profile-content">
          <div className="flex flex-col items-center mb-6">
            {/* プロフィール画像 */}
            <div className="w-80 h-80 mb-4 relative">
              <Image
                src="/images/profile/yosikobaProfile.png"
                alt="よしこば プロフィール画像"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <h2 className="text-black text-lg font-light mb-1 text-center">
              株式会社月の庭　取締役
            </h2>
            <h3 className="text-black text-lg font-light mb-4 text-center">
              よしこば　プロフィール
            </h3>

            <div className="text-black space-y-3 text-sm font-light text-center max-w-xs">
              <p>
                東京国税局の国税専門官を経て2017年にライターとして独立。富裕層の税務調査を行なった経験を活かし、書籍の出版やセミナーなどを行っている。
                自分らしい生き方を目指す人に向けた『よしこばリバティカレッジ』を主宰。
              </p>
              <p className="text-black mt-4">
                仕事の実績は
                <Link
                  href="https://yoshi-koba.com/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  こちら
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // Mayamoonプロフィール - デスクトップ
  const renderMayamoonProfile = () => {
    return (
      <div className="h-screen relative flex flex-col justify-center items-center">
        {/* 背景画像 */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/profile/mayamoon_background.png"
            alt="Mayamoon背景"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-90"
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 profile-content">
          <div className="flex flex-col items-center mb-10">
            {/* プロフィール画像 - 輪郭なし */}
            <div className="w-64 h-64 mb-6 relative overflow-hidden">
              <Image
                src="/images/profile/mayamoonProfile.png"
                alt="Mayamoon プロフィール画像"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-black text-xl font-light mb-2">
              株式会社月の庭　代表取締役
            </h2>
            <h3 className="text-black text-xl font-light mb-8">
              Mayamoon　プロフィール
            </h3>

            <div className="text-black space-y-4 text-lg font-light text-center">
              <p>
                18年間の商社勤務を経て、子どもの不登校・引きこもりを機に退職。
              </p>
              <p>
                現在は絵描き詩人としてアート作品や言葉を表現しながら、自然とともに暮らす日々を送っている。
              </p>
              <p>
                日本全国で個展やイベントに出展、海外にも活動範囲を広げている。
              </p>
              <p>
                無農薬・無肥料の畑仕事、家の中での静かな時間や当たり前の日常の生活を大切にしている。
              </p>
              <p>
                オンラインコミュニティ「ノートと種まき」の主宰、
                <br />
                哲学対話を通じて安心して本音を語れる場を育んでいる。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // よしこばプロフィール - デスクトップ
  const renderYoshikobaProfile = () => {
    return (
      <div className="min-h-screen relative flex flex-col justify-center items-center py-20">
        {/* 背景画像 */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/profile/mayamoon_background.png"
            alt="よしこば背景"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-90"
          />
        </div>

        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 profile-content">
          <div className="flex flex-col items-center mb-10">
            {/* プロフィール画像 */}
            <div className="w-80 h-80 mb-6 relative">
              <Image
                src="/images/profile/yosikobaProfile.png"
                alt="よしこば プロフィール画像"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <h2 className="text-black text-xl font-light mb-1 text-center">
              株式会社月の庭　取締役
            </h2>
            <h3 className="text-black text-xl font-light mb-8 text-center">
              よしこば　プロフィール
            </h3>

            <div className="text-black space-y-4 text-lg font-light text-center max-w-2xl">
              <p>
                東京国税局の国税専門官を経て2017年にライターとして独立。富裕層の税務調査を行なった経験を活かし、書籍の出版やセミナーなどを行っている。
                <br />
                自分らしい生き方を目指す人に向けた『よしこばリバティカレッジ』を主宰。
              </p>
              <p className="text-black mt-6">
                仕事の実績は
                <Link
                  href="https://yoshi-koba.com/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  こちら
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // モバイルとデスクトップで表示を分ける
  return isMobile ? (
    <MobileProfileLayout />
  ) : (
    <>
      {renderMayamoonProfile()}
      {renderYoshikobaProfile()}
    </>
  );
}
