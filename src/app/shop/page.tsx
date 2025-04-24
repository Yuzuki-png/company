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

export default function Shop() {
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
        y: 30,
      });

      // セクションタイトルを画面外右側に配置
      gsap.set(".section-title", {
        opacity: 0,
        x: 300,
        y: 0,
        rotation: 0,
        transformOrigin: "center center",
        force3D: false,
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

      // セクションタイトルのアニメーション
      const titles = document.querySelectorAll(".section-title");
      titles.forEach((title) => {
        gsap.to(title, {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          force3D: false,
          scrollTrigger: {
            trigger: title,
            start: "top 100%",
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
      {/* ヘッダーセクション */}
      <section className="relative h-screen flex items-center">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/shop/shop_background.png"
              alt="月の庭の背景"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              className="opacity-90"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-light text-white section-title">
                Shop
              </h2>
            </div>

            <div className="fade-in-section bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-xl transition-all hover:shadow-2xl max-w-xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-light mb-4 text-gray-800">
                  Mayamoon オンラインショップ
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  オリジナルの絵から心温まる
                  <br />
                  アイテムをお届けします。
                  <br />
                  すべて一点一点心を込めて創作しております。
                </p>
                <a
                  href="https://www.mayamoon-art.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#006400] hover:bg-[#007800] text-white px-6 py-3 rounded-full font-light transition-all hover:scale-105"
                >
                  オンラインショップへ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
