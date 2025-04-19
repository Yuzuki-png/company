import "./globals.css";
import { Shippori_Mincho } from "next/font/google";
import { Fira_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const firaSans = Fira_Sans({
  weight: ["100", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Waka-Tsuki | 詩とアートの庭",
  description: "誰もがいつでも帰ってくる詩とアートの庭",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${shipporiMincho.className} ${firaSans.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
