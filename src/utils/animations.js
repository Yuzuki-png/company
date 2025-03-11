// GSAPを使用したアニメーション例
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// プラグイン登録
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ヘッダーのフェードインアニメーション
export const headerAnimation = () => {
  // 一度リセット
  gsap.set(".header-content", {
    opacity: 0,
    y: -50,
  });

  // アニメーション
  gsap.to(".header-content", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  });
};

// ヒーローセクションアニメーション
export const heroAnimation = () => {
  // リセット
  gsap.set(".hero-title, .hero-text, .hero-button", {
    opacity: 0,
    y: 50,
  });

  // アニメーション
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
};

// 通常のフェードインアニメーション
export const fadeInAnimation = () => {
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
};

// スクロールトリガーアニメーション
export const scrollAnimations = () => {
  // 既存のアニメーションをクリア
  const triggers = ScrollTrigger.getAll();
  triggers.forEach((trigger) => trigger.kill());

  // 要素をリセット
  gsap.set(".fade-in-section", {
    opacity: 0,
    y: 50,
  });

  // スクロールアニメーション設定
  gsap.utils.toArray(".fade-in-section").forEach((section) => {
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
