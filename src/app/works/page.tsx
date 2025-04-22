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

export default function Works() {
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

      // 見出しと画像を画面外右側に配置
      gsap.set(".section-title, .slide-in-image", {
        opacity: 0,
        x: isMobile ? 150 : 300, // モバイルでは少なめに
      });

      // スクロールアニメーション設定
      const sections = document.querySelectorAll(".fade-in-section");
      sections.forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.6 : 0.8, // モバイルでは少し速く
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
          duration: isMobile ? 0.8 : 1.2, // モバイルでは少し速く
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
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
    <div className="relative bg-white text-black pt-28 pb-16">
      {/* 背景画像を削除し、白い背景に変更 */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/works/works_background.jpg"
          alt="作品背景"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="opacity-90"
        />
      </div> */}

      <div className="container mx-auto px-2 relative z-10 max-w-4xl">
        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-6">
          {/* 別冊天然生活 */}
          <div className="relative">
            <h3 className="text-base font-bold mb-1 fade-in-section text-black absolute top-0 left-0 z-10 bg-white/80 px-2 py-1">
              別冊天然生活「暮らしのまんなか」 vol.40
            </h3>
            <div className="relative w-full aspect-[3/4] pt-8">
              <a
                href="https://tennenseikatsu.jp/_ct/17740970"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/works/1_magazine_publications_In_the_middle_of_life.jpg"
                  alt="日常の風景"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  priority
                  className="opacity-100 slide-in-image"
                />
              </a>
            </div>
          </div>

          {/* note「日常の風景日記」 */}
          <div className="relative">
            <h3 className="text-base font-bold mb-1 fade-in-section text-black absolute top-0 left-0 z-10 bg-white/80 px-2 py-1">
              note「日常の風景日記」毎日更新
            </h3>
            <div className="relative w-full aspect-[3/4] pt-8">
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
                  className="opacity-100 slide-in-image"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-6">
          {/* instagram */}
          <div className="relative">
            <h3 className="text-base font-bold mb-1 fade-in-section text-black absolute top-0 left-0 z-10 bg-white/80 px-2 py-1">
              instagram
            </h3>
            <div className="relative w-full aspect-[3/4] pt-8">
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
                  className="opacity-100 slide-in-image"
                />
              </a>
            </div>
          </div>

          {/* instagram(artwork) */}
          <div className="relative">
            <h3 className="text-base font-bold mb-1 fade-in-section text-black absolute top-0 left-0 z-10 bg-white/80 px-2 py-1">
              instagram(artwork)
            </h3>
            <div className="relative w-full aspect-[3/4] pt-8">
              <a
                href="https://www.instagram.com/mayamoon_artwork/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/works/4_instagram_art.jpg"
                  alt="instagram"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  priority
                  className="opacity-100 slide-in-image"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-6">
          {/* youtube */}
          <div className="relative">
            <h3 className="text-base font-bold mb-1 fade-in-section text-black absolute top-0 left-0 z-10 bg-white/80 px-2 py-1">
              youtube
            </h3>
            <div className="relative w-full aspect-[3/4] pt-8">
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
                  className="opacity-100 slide-in-image"
                />
              </a>
            </div>
          </div>

          {/* facebook */}
          <div className="relative">
            <h3 className="text-base font-bold mb-1 fade-in-section text-black absolute top-0 left-0 z-10 bg-white/80 px-2 py-1">
              facebook
            </h3>
            <div className="relative w-full aspect-[3/4] pt-8">
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
                  className="opacity-100 slide-in-image"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-6">
          {/* やさしいあなたへお手紙を */}
          <div className="relative">
            <h3 className="text-base font-bold mb-1 fade-in-section text-black absolute top-0 left-0 z-10 bg-white/80 px-2 py-1">
              やさしいあなたへお手紙を
            </h3>
            <div className="relative w-full aspect-[3/4] pt-8">
              <a
                href="https://entrie.net/category/mayamoon/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/works/7_letter_to_you.jpg"
                  alt="latter"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  priority
                  className="opacity-100 slide-in-image"
                />
              </a>
            </div>
          </div>

          {/* まちなかで自然くらし */}
          <div className="relative">
            <h3 className="text-base font-bold mb-1 fade-in-section text-black absolute top-0 left-0 z-10 bg-white/80 px-2 py-1">
              まちなかで自然くらし
            </h3>
            <div className="relative w-full aspect-[3/4] pt-8">
              <a
                href="https://www.manpuku-veggie.com/at-home-veggies/mayamoon-01"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/works/8_natural_living_in_the_city.jpg"
                  alt="natural life"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  priority
                  className="opacity-100 slide-in-image"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-6">
          {/* インタビュー */}
          <div className="relative">
            <h3 className="text-base font-bold mb-1 fade-in-section text-black absolute top-0 left-0 z-10 bg-white/80 px-2 py-1">
              インタビュー
            </h3>
            <div className="relative w-full aspect-[3/4] pt-8">
              <a
                href="https://natulan.jp/natulagi/article/garden-veranda-mayamoon/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/works/9_interview_natural.jpg"
                  alt="interview"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  priority
                  className="opacity-100 slide-in-image"
                />
              </a>
            </div>
          </div>

          {/* 緑がおしえてくれること */}
          <div className="relative">
            <h3 className="text-base font-bold mb-1 fade-in-section text-black absolute top-0 left-0 z-10 bg-white/80 px-2 py-1">
              緑がおしえてくれること
            </h3>
            <div className="relative w-full aspect-[3/4] pt-8">
              <a
                href="https://natulan.jp/natulagi/article/mayamoon-column-1/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/works/10_what_green_teaches_us.jpg"
                  alt="what green teaches us"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  priority
                  className="opacity-100 slide-in-image"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ノートと種まき */}
        <div className="content-section max-w-md mx-auto">
          <div className="relative">
            <h3 className="text-base font-bold mb-1 fade-in-section text-black absolute top-0 left-0 z-10 bg-white/80 px-2 py-1">
              ノートと種まき
            </h3>
            <div className="relative w-full aspect-[3/4] pt-8">
              <a
                href="https://natulan.jp/natulagi/article/garden-veranda-mayamoon/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/works/11_notes_and_seeding.png"
                  alt="notes and seeding"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  priority
                  className="opacity-100 slide-in-image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
