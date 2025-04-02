import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ eslint: {
    // プロダクションビルド時にESLintエラーを無視
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
