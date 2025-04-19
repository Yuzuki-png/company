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
    // 既存のトリガーをクリア
    const triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => trigger.kill());

    // 要素をリセット
    gsap.set(".content-section", {
      opacity: 0,
      y: 30,
    });

    // スクロールアニメーション設定
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => {
      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // クリーンアップ
    return () => {
      const allTriggers = ScrollTrigger.getAll();
      allTriggers.forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return (
    <div className="pt-24 pb-32 relative">
      {/* 背景画像 */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/works/works_background.jpg"
          alt="作品背景"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="opacity-90"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-lg font-light mb-4">
              別冊天然生活「暮らしのまんなか」 vol.40
            </h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-start justify-start">
                <a
                  href="https://tennenseikatsu.jp/_ct/17740970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[90%] h-[calc(100%-2rem)]"
                >
                  <Image
                    src="/images/works/1_magazine_publications_In_the_middle_of_life.jpg"
                    alt="日常の風景"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "left center",
                    }}
                    priority
                    className="opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* note「日常の風景日記」 */}
          <div>
            <h3 className="text-lg font-light mb-4">
              note「日常の風景日記」毎日更新
            </h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://note.com/mayamoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block absolute inset-0 z-0"
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
                    className="opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-lg font-light mb-4">instagram</h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-start justify-start">
                <a
                  href="https://www.instagram.com/mayamoon0000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[90%] h-[calc(100%-2rem)]"
                >
                  <Image
                    src="/images/works/3_instagram.jpg"
                    alt="instagram"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "left center",
                    }}
                    priority
                    className="opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4">instagram(artwork)</h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.instagram.com/mayamoon_artwork/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block absolute inset-0 z-0"
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
                    className="opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-lg font-light mb-4">youtube</h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-start justify-start">
                <a
                  href="https://www.youtube.com/channel/UC1SB60kDwlY-B7WA4sc45Ew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[90%] h-[calc(100%-2rem)]"
                >
                  <Image
                    src="/images/works/5_youtube.jpg"
                    alt="youtube"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "left center",
                    }}
                    priority
                    className="opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4">facebook</h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.facebook.com/mayako.nishi.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block absolute inset-0 z-0"
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
                    className="opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-lg font-light mb-4">
              やさしいあなたへお手紙を
            </h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-start justify-start">
                <a
                  href="https://entrie.net/category/mayamoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[90%] h-[calc(100%-2rem)]"
                >
                  <Image
                    src="/images/works/7_letter_to_you.jpg"
                    alt="latter"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "left center",
                    }}
                    priority
                    className="opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4">まちなかで自然くらし</h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.manpuku-veggie.com/at-home-veggies/mayamoon-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block absolute inset-0 z-0"
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
                    className="opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-lg font-light mb-4">インタビュー</h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-start justify-start">
                <a
                  href="https://natulan.jp/natulagi/article/garden-veranda-mayamoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[90%] h-[calc(100%-2rem)]"
                >
                  <Image
                    src="/images/works/9_interview_natural.jpg"
                    alt="interview"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "left center",
                    }}
                    priority
                    className="opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4">緑がおしえてくれること</h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://natulan.jp/natulagi/article/mayamoon-column-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block absolute inset-0 z-0"
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
                    className="opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-lg font-light mb-4">ノートと種まき</h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-start justify-start">
                <a
                  href="https://natulan.jp/natulagi/article/garden-veranda-mayamoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[90%] h-[calc(100%-2rem)]"
                >
                  <Image
                    src="/images/works/11_notes_and_seeding.png"
                    alt="notes and seeding"
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "left center",
                    }}
                    priority
                    className="opacity-100"
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
