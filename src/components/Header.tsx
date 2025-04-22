"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // ページ遷移検出とスクロールリセット
  useEffect(() => {
    // ページ遷移時に強制的にトップにスクロール
    window.scrollTo(0, 0);

    // スクロール状態をリセット
    setScrolled(false);

    // 初回マウント時のアニメーション
    animateHeader();
  }, [pathname]);

  // スクロール検出（別のuseEffectで分離）
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 初期状態の確認
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animateHeader = () => {
    gsap.from(".header-content", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/profile", label: "profile" },
    { href: "/works", label: "works" },
    { href: "/shop", label: "shop" },
    { href: "/contact", label: "contact" },
  ];

  // スクロール状態に基づく背景
  const headerBgClass = scrolled
    ? "bg-black/80 backdrop-blur-md"
    : "bg-transparent !important";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}
      style={{
        background: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="header-content container mx-auto px-4 py-6 flex justify-end items-center">
        {/* デスクトップメニュー（右寄せ） */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-light text-white text-lg hover:opacity-75 ${
                  pathname === item.href ? "font-normal" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md py-6 px-4">
          <nav className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors text-white text-lg ${
                  pathname === item.href ? "font-normal" : "font-light"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
