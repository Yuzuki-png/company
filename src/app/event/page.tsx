"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

// GSAPプラグインの登録
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Event() {
  const [activeTab, setActiveTab] = useState("upcoming");
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
    gsap.set(".fade-in-section", {
      opacity: 0,
      y: 50,
    });

    // スクロールアニメーション設定
    document.querySelectorAll(".fade-in-section").forEach((section) => {
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

  const upcomingEvents = [
    {
      id: 1,
      title: "月明かりの詩の会",
      date: "2023年12月15日",
      time: "19:00-21:00",
      location: "東京都渋谷区",
      description:
        "月の光の下で心に響く詩を分かち合い、対話を通じて新たな気づきを得る特別な夜。参加者が持ち寄った詩の朗読や、即興での詩作りなど、言葉と感性を豊かに育む時間をお過ごしください。",
      category: "イベント",
      price: "3,000円",
      capacity: "20名",
      image: "🌙",
      color: "bg-indigo-50",
    },
    {
      id: 2,
      title: "アート&詩のワークショップ",
      date: "2024年1月20日",
      time: "14:00-16:30",
      location: "オンライン開催",
      description:
        "絵を描くことと詩を書くことを組み合わせたクリエイティブなワークショップ。自分の内側にある感情や思いを、色と言葉を通して表現する方法を学びます。初心者の方も安心してご参加いただけます。",
      category: "ワークショップ",
      price: "4,500円（材料費込）",
      capacity: "15名",
      image: "🎨",
      color: "bg-purple-50",
    },
    {
      id: 3,
      title: "新年の言葉を見つける会",
      date: "2024年1月7日",
      time: "10:00-12:00",
      location: "カフェスペース「光の庭」",
      description:
        "新しい年の始まりに、一年の指針となる言葉を見つけるワークショップ。自分だけのテーマワードや短い詩を創作し、その言葉とともに一年を歩むための方法をお伝えします。",
      category: "ワークショップ",
      price: "2,500円",
      capacity: "30名",
      image: "🌱",
      color: "bg-emerald-50",
    },
  ];

  const pastEvents = [
    // 2024年のイベント
    {
      id: "2024-12",
      title: "ブックナイトマーケット「フリーランスの光と影」トークイベント",
      date: "2024年12月",
      location: "草加",
    },
    {
      id: "2024-12b",
      title: "ノートワークショップ",
      date: "2024年12月",
      location: "こころの本屋（東京 東長崎）",
    },
    {
      id: "2024-12c",
      title: "1dayコラボカフェ",
      date: "2024年12月",
      location: "カフェ湊（埼玉 東大宮）",
    },
    {
      id: "2024-11",
      title: "△マーケット",
      date: "2024年11月",
      location: "lettler（埼玉 南浦和）",
    },
    {
      id: "2024-10",
      title: "好好手感微笑市集",
      date: "2024年10月",
      location: "台北 中正紀念堂（台湾）",
    },
    {
      id: "2024-09a",
      title: "この灯火が消えるまで",
      date: "2024年9月",
      location: "PAKAN hibi二人展",
    },
    {
      id: "2024-09b",
      title: "ムサシフェス",
      date: "2024年9月",
      location: "武蔵浦和",
    },
    {
      id: "2024-06a",
      title: "なんてことない土曜日の、花と植物と本のおはなし",
      date: "2024年6月",
      location: "blend park（国府津）",
    },
    {
      id: "2024-06b",
      title: "ノートワークショップ",
      date: "2024年6月",
      location: "こころの本屋（東京 東長崎）",
    },
    {
      id: "2024-05",
      title: "popoup「ひとりぼっちの夕方と本の匂い」",
      date: "2024年5月",
      location: "ゆとぴやぶっくす（南浦和）",
    },
    {
      id: "2024-03",
      title: "個展「存在の祝福」",
      date: "2024年3月",
      location: "pratocafe（兵庫 小野市）",
    },
    {
      id: "2024-02",
      title: "zinefes",
      date: "2024年2月",
      location: "浦和パルコ",
    },

    // 2023年のイベント
    {
      id: "2023-11",
      title: "好好手感微笑市集",
      date: "2023年11月",
      location: "高雄美術館（台湾）",
    },
    {
      id: "2023-10a",
      title: "香る月の市",
      date: "2023年10月",
      location: "川越",
    },
    {
      id: "2023-10b",
      title: "個展「傷をふさぐ蝶」",
      date: "2023年10月",
      location: "maru（さいたま新都心）",
    },
    {
      id: "2023-06a",
      title: "てのわ市",
      date: "2023年6月",
      location: "カフェおきもと（国分寺）",
    },
    {
      id: "2023-06b",
      title: "5年分のDIO ライブペイント",
      date: "2023年6月",
      location: "つなぐば草加（草加）",
    },
    {
      id: "2023-05",
      title: "文学フリマ",
      date: "2023年5月",
      location: "東京流通センター",
    },
    {
      id: "2023-04a",
      title: "なんてことない土曜日の、花と植物と本のおはなし",
      date: "2023年4月",
      location: "blend park（国府津）",
    },
    {
      id: "2023-04b",
      title: "個展「泣かないで、ロウソクの火を繋いでいくから」",
      date: "2023年4月",
      location: "綴ル（富山）",
    },

    // 2022年のイベント
    {
      id: "2022-12",
      title: "けやきの下のマルシェ",
      date: "2022年12月",
      location: "けやき広場1階プラザ（さいたま市新都心）",
    },
    {
      id: "2022-10",
      title: "手紙舎が佐伯にやってくる",
      date: "2022年10月",
      location: "La vie douce（佐伯）",
    },
    {
      id: "2022-09",
      title: "ブインフェス",
      date: "2022年9月",
      location: "手紙社ギャラリーsoel&EDiTORS（西調布）",
    },
    {
      id: "2022-08",
      title: "mayamoon'n'dubluvoon",
      date: "2022年8月",
      location: "モダナークギャラリー（神戸）",
    },
    {
      id: "2022-05",
      title: "なんてことない土曜日の、花と植物と本のおはなし",
      date: "2022年5月",
      location: "blend park（国府津）",
    },
    {
      id: "2022-03",
      title: "春のちハレ市",
      date: "2022年3月",
      location: "ニシクボ食堂（三鷹）",
    },
    {
      id: "2022-01",
      title: "心の扉をノックする",
      date: "2022年1月",
      location: "シェアアトリエつなぐば（草加）",
    },

    // 2021年のイベント
    {
      id: "2021-12",
      title: "レンタル絵画スタート",
      date: "2021年12月",
      location: "entrie times ebisu",
    },
    {
      id: "2021-11",
      title: "feria de soel 手紙にまつわるエトセトラ",
      date: "2021年11月",
      location: "手紙社ギャラリー soel&EDiTORS（西調布）",
    },
    {
      id: "2021-05",
      title: "なんてことない土曜日の、花と植物のおはなし",
      date: "2021年5月",
      location: "blend park（国府津）",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="fade-in text-4xl md:text-5xl font-bold mb-8 text-center">
            イベント情報
          </h1>

          <p className="fade-in text-lg text-center text-gray-700 mb-12">
            詩とアートを通じた様々なイベントやワークショップを開催しています。
            <br />
            一人ひとりの心に寄り添う、温かな対話と創造の場にぜひご参加ください。
          </p>

          {/* タブ切り替え */}
          <div className="fade-in flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === "upcoming"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border border-indigo-300`}
              >
                開催予定
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === "past"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border border-l-0 border-indigo-300`}
              >
                過去のイベント
              </button>
            </div>
          </div>

          {/* イベントリスト */}
          <div className="space-y-8">
            {activeTab === "upcoming" ? (
              upcomingEvents.map((event) => (
                <div key={event.id} className="fade-in-section">
                  <div
                    className={`${event.color} rounded-lg shadow-md overflow-hidden`}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-semibold text-indigo-800 mb-3">
                            {event.category}
                          </span>
                          <h2 className="text-2xl font-bold mb-2">
                            {event.title}
                          </h2>
                        </div>
                        <div className="text-4xl">{event.image}</div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center text-gray-700 mb-1">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span>{event.date}</span>
                        </div>

                        <div className="flex items-center text-gray-700 mb-1">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{event.time}</span>
                        </div>

                        <div className="flex items-center text-gray-700">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6">{event.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-6">
                        <div className="bg-white px-3 py-1 rounded-full">
                          参加費: {event.price}
                        </div>
                        <div className="bg-white px-3 py-1 rounded-full">
                          定員: {event.capacity}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <a
                          href="#"
                          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
                        >
                          詳細を見る
                        </a>
                        <a
                          href="#"
                          className="inline-block border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 px-6 rounded-full transition-colors"
                        >
                          申し込む
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {pastEvents.map((event) => (
                  <div
                    key={event.id}
                    className="fade-in-section bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.date}</p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">場所：</span>{" "}
                      {event.location}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
