"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Contact() {
  const pathname = usePathname();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    gsap.set(".fade-in", { opacity: 0, y: 30 });
    gsap.to(".fade-in", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, [pathname]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setError("すべての項目を入力してください。");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "送信に失敗しました");

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("送信エラー:", err);
      }
      setError(
        err instanceof Error ? err.message : "不明なエラーが発生しました"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 relative min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/contacts/contacts_background.png"
          alt="お問い合わせ背景"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="opacity-90"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="fade-in text-4xl md:text-5xl font-bold mb-12 text-center text-white">
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
                  className="inline-block bg-[#8fbc8f] hover:bg-[#7daa7d] text-white font-semibold py-2 px-6 rounded-full transition-colors"
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

                {[
                  { label: "お名前", id: "name", type: "text" },
                  { label: "メールアドレス", id: "email", type: "email" },
                  { label: "件名", id: "subject", type: "text" },
                ].map(({ label, id, type }) => (
                  <div className="mb-6" key={id}>
                    <label
                      htmlFor={id}
                      className="block text-gray-700 font-medium mb-2"
                    >
                      {label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                    />
                  </div>
                ))}

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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-block bg-[#8fbc8f] hover:bg-[#7daa7d] text-white font-semibold py-3 px-8 rounded-full transition-colors ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
