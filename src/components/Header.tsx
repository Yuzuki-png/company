"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

        {/* SNSアイコン */}
        <div className="hidden md:flex items-center ml-10 space-x-10">
          {/* Instagramアイコン */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-75"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          {/* noteアイコン */}
          <a
            href="https://note.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-75 flex items-center"
          >
            <Image
              src="/images/icon/note.png"
              alt="note"
              width={70}
              height={70}
              className="object-contain"
            />
          </a>
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

            {/* モバイルSNSアイコン */}
            <div className="flex items-center space-x-8 pt-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://note.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center"
              >
                <Image
                  src="/images/icon/note.png"
                  alt="note"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
