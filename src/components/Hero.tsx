"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Hero = () => {
  const pathname = usePathname();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // アニメーション実行前に初期状態にリセット
    gsap.set(".hero-title, .hero-text, .hero-subtext", {
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
        ".hero-subtext",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );
  }, [pathname]);

  const handleButtonClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* 背景画像 */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/20230607_101856 (1).jpg"
          alt="月の庭の背景"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="opacity-90"
        />
      </div>

      {/* コンテンツ */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="hero-title text-5xl md:text-7xl font-light mb-14">
          月の庭
        </h1>
        <div className="hero-text text-lg md:text-xl font-light mb-6 max-w-3xl mx-auto">
          月の光がそっと夜を包むように、誰かの心に静かに寄り添えますように
        </div>
        <div className="hero-subtext text-lg font-light max-w-3xl mx-auto opacity-80">
          (触ると出てくるように)
        </div>

        {showMessage && (
          <div className="mt-10 bg-black/30 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto animate-fade-in">
            <p className="text-lg md:text-xl font-light">
              この文言をホームページが現れた時(home)に追加
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
