"use client";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Waka-Tsuki</h3>
            <p className="text-gray-400 mb-4">
              誰もがいつでも帰ってこれる詩とアートの庭
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mayamoon0000/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.235.585 1.8 1.15.565.565.901 1.132 1.15 1.8.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427-.25.668-.585 1.235-1.15 1.8-.565.565-1.132.901-1.8 1.15-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465-.668-.25-1.235-.585-1.8-1.15-.565-.565-.901-1.132-1.15-1.8-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427.25-.668.585-1.235 1.15-1.8.565-.565 1.132-.901 1.8-1.15.636-.247 1.363-.416 2.427-.465 1.024-.048 1.379-.06 3.808-.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mayamoon_artwork/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Artwork Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.235.585 1.8 1.15.565.565.901 1.132 1.15 1.8.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427-.25.668-.585 1.235-1.15 1.8-.565.565-1.132.901-1.8 1.15-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465-.668-.25-1.235-.585-1.8-1.15-.565-.565-.901-1.132-1.15-1.8-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427.25-.668.585-1.235 1.15-1.8.565-.565 1.132-.901 1.8-1.15.636-.247 1.363-.416 2.427-.465 1.024-.048 1.379-.06 3.808-.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://note.com/mayamoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">note</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 016.5 2h11A2.5 2.5 0 0120 4.5v15a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 19.5zm2.5-15v15h11v-15h-11z" />
                  <path d="M8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC1SB60kDwlY-B7WA4sc45Ew"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/poem"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  詩
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  プロフィール
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  活動内容
                </Link>
              </li>
              <li>
                <Link
                  href="/event"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  イベント
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">活動</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://community.camp-fire.jp/projects/view/379133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ノートと種まき
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/p/DGKhlNDPK6m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  心が旅するお茶会
                </a>
              </li>
              <li>
                <a
                  href="https://entrie.net/category/mayamoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  やさしいあなたへお手紙を
                </a>
              </li>
              <li>
                <a
                  href="https://www.manpuku-veggie.com/at-home-veggies/mayamoon-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  まちなかで自然くらし
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <p className="text-gray-400 mb-2">メール: info@waka-tsuki.jp</p>
            <p className="text-gray-400 mb-2">東京都世田谷区</p>
            <p className="text-gray-400">お気軽にご連絡ください</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} Waka-Tsuki All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
