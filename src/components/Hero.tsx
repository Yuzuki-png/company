"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Hero = () => {
  const pathname = usePathname();

  useEffect(() => {
    // アニメーション実行前に初期状態にリセット
    gsap.set(".hero-title, .hero-text, .hero-button", {
      opacity: 0,
      y: 50,
    });

    // ヒーローセクションのアニメーション
    const tl = gsap.timeline();

    tl.to(".hero-title", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    })
      .to(
        ".hero-text",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .to(
        ".hero-button",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );
  }, [pathname]);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* 背景画像 */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/20230607_101856 (1).jpg"
          alt="Waka-Tsuki背景"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="opacity-85"
        />
      </div>

      {/* 装飾要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-indigo-300 opacity-10 blur-3xl"></div>
      </div>

      {/* コンテンツ */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
          Waka-Tsuki
        </h1>
        <div className="hero-text text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          誰もがいつでも帰ってこれる詩とアートの庭
        </div>
        <button className="hero-button bg-white text-indigo-900 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full text-lg transition-colors">
          詳しく見る
        </button>
      </div>
    </section>
  );
};

export default Hero;
