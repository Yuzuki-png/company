"use client";
import React from "react";
import Link from "next/link";

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
          <p className="text-black font-light mb-4 md:mb-0">
            copyright©Tsukinoniwa.All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            {/* Instagram icon */}
            <a
              href="https://www.instagram.com/mayamoon0000/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* Note icon */}
            <a
              href="https://note.com/mayamoon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.7 3.3v15.4H5.3V3.3h13.4m0-3.3H5.3C2.4 0 0 2.4 0 5.3v15.4C0 21.6 2.4 24 5.3 24h13.4c2.9 0 5.3-2.4 5.3-5.3V5.3C24 2.4 21.6 0 18.7 0zm-3.7 11.9c0 .9-.7 1.6-1.6 1.6H8.2c-.9 0-1.6-.7-1.6-1.6v-1.8h2.4v1.7h4v-4.1l-5-.7c-.4-.1-.7-.4-.7-.8V5.1c0-.8.7-1.5 1.6-1.5h5.2c.9 0 1.6.7 1.6 1.6v1.8h-2.4V5.2h-4v4.1l5 .7c.4.1.7.4.7.8v1.9l0 .2z" />
              </svg>
            </a>

            {/* Facebook icon */}
            <a
              href="https://www.facebook.com/mayako.nishi.3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
