"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
    <div className="pt-24 pb-32">
      {/* ページ全体のコンテナ */}
      <div className="container mx-auto px-4">
        {/* Section 1: note と 暮らしのまんなか */}
        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          {/* 別冊天然生活「暮らしのまんなか」 */}
          <div>
            <h3 className="text-lg font-light mb-4">
              別冊天然生活「暮らしのまんなか」 vol.40
            </h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/日常の風景日記 (1).png"
                  alt="日常の風景"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  priority
                  className="opacity-100"
                />
              </div>
            </div>

            <div className="bg-white p-4 border border-gray-200">
              <p className="text-sm font-light">
                やりたいことがいっぱいだから、ノートに書き出して自分のトリセツづくり、時間を自分のものに...
              </p>
              <p className="text-sm text-gray-500 mt-1">tennenkatsuji.jp</p>
            </div>
          </div>

          {/* note「日常の風景日記」 */}
          <div>
            <h3 className="text-lg font-light mb-4">
              note「日常の風景日記」毎日更新
            </h3>

            <div className="mb-4 relative w-full aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/日常の風景日記 (1).png"
                  alt="日常の風景"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  priority
                  className="opacity-100"
                />
              </div>
            </div>

            <div className="bg-white p-4 border border-gray-200">
              <p className="text-sm font-light">mayamoon | note</p>
              <p className="text-sm font-light">
                絵描き/詩人/哲学対話/無肥料無農薬栽培/ノートと種まき
                特に何もない日常のかけがえのない風景。感じたことを言葉で綴る日常の風景日記。メンバーシップでは毎日更新。職...
              </p>
              <p className="text-sm text-gray-500 mt-1">note（ノート）</p>
            </div>
          </div>
        </div>

        {/* Section 2: Instagram */}
        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-lg font-light mb-4 text-black">instagram</h3>

            <div className="bg-white p-4 border border-gray-200">
              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-gray-100 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Instagram (@mayamoon0000)</p>
                  <p className="text-sm text-gray-500">
                    Instagram photos and videos
                  </p>
                  <p className="text-sm text-pink-500">instagram.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4 text-black">
              instagram(artwork)
            </h3>

            <div className="bg-white p-4 border border-gray-200">
              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-gray-100 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Instagram (@mayamoon_artwork)</p>
                  <p className="text-sm text-gray-500">
                    Instagram photos and videos
                  </p>
                  <p className="text-sm text-pink-500">instagram.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: YouTube と Facebook */}
        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-lg font-light mb-4 text-black">youtube</h3>

            <div className="bg-white p-4 border border-gray-200">
              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-gray-100 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Mayamoon</p>
                  <p className="text-sm text-gray-500">
                    ご覧いただきありがとうございます。畑で野菜を育てて家庭を作る毎日です。現在は日々の手仕事をvlogにしています。すべてスマホで撮影、編集。たかいもない日常をどう...
                  </p>
                  <p className="text-sm text-red-500">YouTube</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4 text-black">facebook</h3>

            <div className="p-4">
              <p className="text-sm font-light">
                https://www.facebook.com/mayako.nishi.3
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: やさしいあなたへ と まちなかで自然くらし */}
        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-lg font-light mb-4">
              やさしいあなたへお手紙を
            </h3>

            <div className="bg-white p-4 border border-gray-200">
              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-gray-100 flex-shrink-0 flex items-center justify-center text-5xl">
                  e
                </div>
                <div>
                  <p className="font-medium">
                    やさしいあなたへお手紙を mayamoonからの日々 | entrie
                    magazine - エントリーマガ...
                  </p>
                  <p className="text-sm text-gray-500">
                    お元気ですか？
                    週に一度、あなた宛にお手紙を書きます。また弱いもの朗、平凡な木々の暮らしから、真実に宿る押...
                  </p>
                  <p className="text-sm mt-1">e entrie.net</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4 text-black">
              まちなかで自然くらし
            </h3>

            <div className="bg-white p-4 border border-gray-200">
              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-gray-100 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">
                    Mayamoon まちなかで自然くらし vol.1「静かな豊かさのなかで」|
                    まんぷく vege | manpuku veggie
                  </p>
                  <p className="text-sm text-gray-500">
                    畑をはじめたのは今（2025年2月現在）からおよそ14年前のこと。東日本大震災がきっかけで、少しでも食べ物を自給できるようになったらいいなと思い、市民農園で家庭菜園をはじめた。当時はフルタイムで働きながら子どもを育てていたけれど...
                  </p>
                  <p className="text-sm text-amber-500 mt-1">
                    manpuku-veggie.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: インタビュー と 緑が教えてくれること */}
        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-lg font-light mb-4 text-black">インタビュー</h3>

            <div className="mb-4 relative h-48 w-full bg-gray-100">
              {/* 後で画像を置き換え */}
            </div>

            <div className="bg-white p-4 border border-gray-200">
              <p className="text-sm font-light">
                【ハキハキベランダ暮らしをもっと楽し】第2回 絵描き Mayamoonさん
                | 花が咲くこと、心がうごくこと。 | ナチュラン型Webマガジン
                ナチュるん
              </p>
              <p className="text-sm text-gray-500">
                人それぞれが自然とのつながりをテーマに、この連載でベランダ暮らしのお裾分けをお届け。第2回目は、オンラ
              </p>
              <p className="text-sm text-gray-400 mt-1">
                ナチュるん Apr 5, 2023
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4 text-black">
              緑が教えてくれること
            </h3>

            <div className="mb-4 relative h-48 w-full bg-gray-100">
              {/* 後で画像を置き換え */}
            </div>

            <div className="bg-white p-4 border border-gray-200">
              <p className="text-sm font-light">
                Mayamoonさん連載 『緑が教えてくれること』6月 |
                永遠のおさまりが美しい風景 | ナチュラン型Webマガジン ナチュるん
              </p>
              <p className="text-sm text-gray-500">
                【ハキハキベランダ暮らしをもっと楽し】の第2回にもご登場いただいたMayamoon（マヤムーン）さんの連載がスタート
              </p>
              <p className="text-sm text-gray-400 mt-1">
                ナチュるん Jun 20, 2023
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: ノートと種まき と 心が旅するお茶会 */}
        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-lg font-light mb-4 text-black">
              ノートと種まき
            </h3>

            <div className="mb-4 relative h-48 w-full bg-gray-100">
              {/* 後で画像を置き換え */}
            </div>

            <div className="bg-white p-4 border border-gray-200">
              <p className="text-sm font-light">
                《手帳×HSP×自分軸》ノートと種まき by Mayamoon
              </p>
              <p className="text-sm text-gray-500">
                HSP認定スペシャリストMayamoon主宰。ノートや手帳を使って、未来の自分の種を蒔いて育てようコミュニティ。毎月MTGあり！ワークを通して自分を見つめ、プレイな自分の種を混ぜ合わせ、仲間同士で交流も深め合い、モチベーションを高め合...
              </p>
              <p className="text-sm text-red-400 mt-1">CAMP_community_</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4">心が旅するお茶会</h3>

            <div className="p-4">
              <p className="text-sm text-gray-500">Instagram埋め込み</p>
            </div>
          </div>
        </div>

        {/* ページの最後の「右に進んでいくように」 */}
        <div className="text-center mt-20">
          <h2 className="text-xl font-light">右に進んでいくように</h2>
        </div>
      </div>
    </div>
  );
}
