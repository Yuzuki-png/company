"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "./SocialIcon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="mb-16">
          <p className="text-lg font-light mb-24">株式会社月の庭</p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
          <Link
            href="/about"
            className="text-black hover:opacity-70 font-light"
          >
            about
          </Link>
          <Link
            href="/profile"
            className="text-black hover:opacity-70 font-light"
          >
            profile
          </Link>
          <Link
            href="/works"
            className="text-black hover:opacity-70 font-light"
          >
            works
          </Link>
          <Link href="/shop" className="text-black hover:opacity-70 font-light">
            shop
          </Link>
          <Link
            href="/contact"
            className="text-black hover:opacity-70 font-light"
          >
            contact
          </Link>
        </div>

        {/* Copyright and social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <p className="text-black font-light">
              copyright©Tsukinoniwa.All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/privacy-policy"
                className="text-black hover:opacity-70 font-light text-sm"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms-of-service"
                className="text-black hover:opacity-70 font-light text-sm"
              >
                利用規約
              </Link>
            </div>
          </div>

          <div className="flex space-x-6">
            {/* Instagram icon */}
            <SocialIcon href="https://www.instagram.com/mayamoon0000/" label="Instagram">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </SocialIcon>

            {/* Note icon */}
            <SocialIcon href="https://note.com/mayamoon" label="note">
              <Image
                src="/images/icon/note_black.png"
                alt="note"
                width={32}
                height={32}
                className="object-contain w-40 h-40"
              />
            </SocialIcon>

            {/* Facebook icon */}
            <SocialIcon href="https://www.facebook.com/mayako.nishi.3" label="Facebook">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialIcon>

            {/* Spotify icon */}
            <SocialIcon href="https://open.spotify.com/show/5E4o9e5st8ZMeSAPxwUzgn?si=c3ba103b18884e5a&nd=1&dlsi=d5c736c154144527" label="Spotify">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99 0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
