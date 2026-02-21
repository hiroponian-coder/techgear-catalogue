import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ローカル開発・Vercelデプロイ両方で画像が確実に表示されるよう、
    // Next.jsの画像最適化パイプラインを使わずにそのまま配信する設定
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
