"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // 初回マウント時のアニメーション
    animateHeader();

    // パス変更時のイベントリスナー
    function handleRouteChange() {
      animateHeader();
    }

    // クリーンアップ関数
    return () => {
      // 必要に応じてクリーンアップを行う
    };
  }, [pathname]);

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
    { href: "/", label: "Home" },
    { href: "/poem", label: "Poem" },
    { href: "/vision", label: "Vision" },
    { href: "/concept", label: "Concept" },
    { href: "/project", label: "Project" },
    { href: "/profile", label: "Profile" },
    { href: "/event", label: "Event" },
    { href: "/contact", label: "Contact" },
  ];

  const externalLinks = [
    { href: "https://www.mayamoon-art.com/", label: "Shop" },
    { href: "https://www.instagram.com/mayamoon0000/", label: "Instagram" },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="header-content container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold">Waka-Tsuki</div>
        </Link>

        {/* デスクトップメニュー */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-indigo-600 transition-colors ${
                pathname === item.href ? "text-indigo-600 font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="border-l border-gray-300 h-6 mx-2"></div>

          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
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
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-indigo-600 transition-colors ${
                  pathname === item.href ? "text-indigo-600 font-medium" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t border-gray-300 my-2"></div>

            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
