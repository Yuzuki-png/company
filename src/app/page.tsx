"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import { usePathname } from "next/navigation";

// GSAPプラグインの登録
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
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
        y: 50,
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
      <Hero />

      {/* ニュースセクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="fade-in-section max-w-5xl mx-auto">
            <h2 className="text-3xl font-light mb-16 text-black fira-sans-thin">
              news
            </h2>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-80 overflow-y-auto pr-4">
                <div className="mb-8">
                  <div className="mb-2 text-gray-600 font-light">2025年4月</div>
                  <h3 className="text-xl font-light mb-2 text-black">
                    「いつか消えてしまう私たちへ」個展開催
                  </h3>
                  <Link
                    href="https://www.instagram.com/p/DGz73WMPkQt/?img_index=1"
                    className="text-gray-600 hover:opacity-70 font-light"
                  >
                    詳細はこちら
                  </Link>
                </div>

                <div className="mb-8">
                  <div className="mb-2 text-gray-500 font-light fira-sans-thin">
                    2025年5月
                  </div>
                  <h3 className="text-xl font-light mb-2 text-gray-600">
                    大宮「tokiwa」にてpopup開催
                  </h3>
                </div>

                <div className="mb-8">
                  <div className="mb-2 text-gray-600 font-light">2025年6月</div>
                  <h3 className="text-xl font-light mb-2 text-black">
                    月の庭ポッドキャストはじめました
                  </h3>
                  <Link
                    href="https://open.spotify.com/show/5E4o9e5st8ZMeSAPxwUzgn?si=c3ba103b18884e5a&nd=1&dlsi=d5c736c154144527"
                    className="text-gray-600 hover:opacity-70 font-light"
                  >
                    詳細はこちら
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <div className="w-full md:w-96 h-64 relative sticky top-0">
                  {/* 画像部分は固定 */}
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/月.png"
                      alt="月の庭の背景"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      priority
                      className="opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 庭のコンセプトセクション */}
      <section className="py-24 relative text-white">
        <div className="flex items-center justify-center">
          <Image
            src="/images/home/home_tuki_background.jpg"
            alt="月の庭の背景"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="opacity-90"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="fade-in-section max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-16">月の庭</h2>
            <div className="flex flex-col space-y-10 font-bold text-xl text-white leading-relaxed">
              <p>
                心の奥底にある
                <br />
                小さな庭
              </p>

              <p>
                月明かりは
                <br />
                生き物を照らす
              </p>

              <p>
                植物のおしゃべり
                <br />
                土の吐息
                <br />
                妖精のダンス
              </p>

              <p>
                迷子になっても
                <br />
                いつでも
                <br />
                ここに
                <br />
                帰ってくる
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* コンセプト紹介セクション - 削除または変更 */}

      {/* 事業内容ハイライト - 削除または変更 */}

      {/* 最新イベント情報 - 削除または変更 */}

      {/* インスタグラムフィード - 削除または変更 */}
    </>
  );
}
