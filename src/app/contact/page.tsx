"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
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
  }, [pathname]); // pathnameが変わった時に再実行

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "お問い合わせの送信に失敗しました");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("送信エラー:", err);
      setError(
        err instanceof Error ? err.message : "不明なエラーが発生しました"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="fade-in text-4xl md:text-5xl font-bold mb-12 text-center">
          お問い合わせ
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="fade-in bg-white p-8 md:p-10 rounded-lg shadow-md mb-16">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✉️</div>
                <h2 className="text-2xl font-bold mb-4">
                  お問い合わせありがとうございます
                </h2>
                <p className="text-gray-700 mb-6">
                  内容を確認次第、担当者よりご連絡いたします。
                  <br />
                  しばらくお待ちくださいませ。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
                >
                  新しいお問い合わせをする
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                    {error}
                  </div>
                )}

                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-colors ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="fade-in grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">メール</h3>
              <p className="text-gray-700">info@waka-tsuki.jp</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">SNS</h3>
              <p className="text-gray-700">Instagram: @mayamoon0000</p>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">所在地</h3>
              <p className="text-gray-700">東京都世田谷区</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
