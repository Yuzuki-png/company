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

export default function Works() {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // スクロールアニメーション初期化
    const initAnimations = () => {
      // 既存のアニメーションをクリア
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => trigger.kill());

      // メディアクエリの設定
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      // 要素をリセット
      gsap.set(".fade-in-section", {
        opacity: 0,
        y: isMobile ? 20 : 40,
      });

      // カテゴリータイトルを左から
      gsap.set(".category-title", {
        opacity: 0,
        x: -50,
        y: 0,
      });

      // 見出しと画像を画面外右側に配置
      gsap.set(".section-title, .slide-in-image", {
        opacity: 0,
        x: isMobile ? 100 : 200,
      });

      // カテゴリータイトルのアニメーション
      const categoryTitles = document.querySelectorAll(".category-title");
      categoryTitles.forEach((title, index) => {
        gsap.to(title, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // コンテンツのアニメーション
      const sections = document.querySelectorAll(".fade-in-section");
      sections.forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.6 : 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // 見出しと画像のスライドインアニメーション
      const slidingElements = document.querySelectorAll(
        ".section-title, .slide-in-image"
      );
      slidingElements.forEach((element) => {
        gsap.to(element, {
          opacity: 1,
          x: 0,
          duration: isMobile ? 0.7 : 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    };

    // リサイズにも対応
    const handleResize = () => {
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
  }, [pathname, activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="relative bg-white text-black pt-20 md:pt-28 pb-10 md:pb-16">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* カテゴリー切り替えタブ */}
        <div className="flex flex-wrap justify-center mb-8 md:mb-10 gap-2">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`px-5 py-3 md:px-4 md:py-2 rounded-full text-base md:text-base transition-all ${
              activeCategory === "all"
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            すべて
          </button>
          <button
            onClick={() => handleCategoryChange("media")}
            className={`px-5 py-3 md:px-4 md:py-2 rounded-full text-base md:text-base transition-all ${
              activeCategory === "media"
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            メディア掲載
          </button>
          <button
            onClick={() => handleCategoryChange("essay")}
            className={`px-5 py-3 md:px-4 md:py-2 rounded-full text-base md:text-base transition-all ${
              activeCategory === "essay"
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            連載エッセイ/お手紙
          </button>
          <button
            onClick={() => handleCategoryChange("activity")}
            className={`px-5 py-3 md:px-4 md:py-2 rounded-full text-base md:text-base transition-all ${
              activeCategory === "activity"
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            活動
          </button>
          <button
            onClick={() => handleCategoryChange("sns")}
            className={`px-5 py-3 md:px-4 md:py-2 rounded-full text-base md:text-base transition-all ${
              activeCategory === "sns"
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            SNS
          </button>
        </div>

        {/* メディア掲載セクション */}
        <div
          className={
            activeCategory === "all" || activeCategory === "media"
              ? "block"
              : "hidden"
          }
        >
          <h2 className="text-4xl md:text-4xl font-light mb-6 md:mb-8 pb-2 border-b border-gray-200 category-title">
            メディア掲載
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
            {/* 別冊天然生活 */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                別冊天然生活「暮らしのまんなか」 vol.40
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://tennenseikatsu.jp/_ct/17740970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/1_magazine_publications_In_the_middle_of_life.jpg"
                    alt="暮らしのまんなか"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>

            {/* インタビュー */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                インタビュー
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://natulan.jp/natulagi/article/garden-veranda-mayamoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/9_interview_natural.jpg"
                    alt="インタビュー"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 連載エッセイ/お手紙セクション */}
        <div
          className={
            activeCategory === "all" || activeCategory === "essay"
              ? "block"
              : "hidden"
          }
        >
          <h2 className="text-4xl md:text-4xl font-light mb-6 md:mb-8 pb-2 border-b border-gray-200 category-title">
            連載エッセイ/お手紙
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {/* 緑がおしえてくれること */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                緑がおしえてくれること
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://natulan.jp/natulagi/article/mayamoon-column-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/10_what_green_teaches_us.jpg"
                    alt="緑がおしえてくれること"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>

            {/* まちなかで自然くらし */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                まちなかで自然くらし
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://www.manpuku-veggie.com/at-home-veggies/mayamoon-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/8_natural_living_in_the_city.jpg"
                    alt="まちなかで自然くらし"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>

            {/* やさしいあなたへお手紙を */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                やさしいあなたへお手紙を
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://entrie.net/category/mayamoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/7_letter_to_you.jpg"
                    alt="やさしいあなたへお手紙を"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 活動セクション */}
        <div
          className={
            activeCategory === "all" || activeCategory === "activity"
              ? "block"
              : "hidden"
          }
        >
          <h2 className="text-4xl md:text-4xl font-light mb-6 md:mb-8 pb-2 border-b border-gray-200 category-title">
            活動
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
            {/* ノートと種まき */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                ノートと種まき
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://natulan.jp/natulagi/article/garden-veranda-mayamoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/11_notes_and_seeding.png"
                    alt="ノートと種まき"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>

            {/* 心が旅するお茶会 */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                心が旅するお茶会
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://www.instagram.com/p/DHPqEC8PCdv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/12_work_shop.png"
                    alt="心が旅するお茶会"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SNSセクション */}
        <div
          className={
            activeCategory === "all" || activeCategory === "sns"
              ? "block"
              : "hidden"
          }
        >
          <h2 className="text-4xl md:text-4xl font-light mb-6 md:mb-8 pb-2 border-b border-gray-200 category-title">
            SNS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {/* note */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                note
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://note.com/mayamoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/2_daily_scenery_diary.png"
                    alt="note"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>

            {/* instagram */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                instagram
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://www.instagram.com/mayamoon0000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/3_instagram.jpg"
                    alt="instagram"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>

            {/* instagram(artwork) */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                instagram(artwork)
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://www.instagram.com/mayamoon_artwork/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/4_instagram_art.jpg"
                    alt="instagram artwork"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>

            {/* youtube */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                youtube
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://www.youtube.com/channel/UC1SB60kDwlY-B7WA4sc45Ew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/5_youtube.jpg"
                    alt="youtube"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>

            {/* facebook */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all fade-in-section">
              <h3 className="text-lg md:text-base font-medium p-4 md:p-3 bg-white border-b border-gray-100">
                facebook
              </h3>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] p-3 md:p-4">
                <a
                  href="https://www.facebook.com/mayako.nishi.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/images/works/6_facebook.jpg"
                    alt="facebook"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority
                    className="slide-in-image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
