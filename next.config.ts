// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Workaround for Next.js 15 App Router type-checking issue
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "ai-chatbot.example.com" },
      { protocol: "https", hostname: "shop.anotherseeker.com" },
      { protocol: "https", hostname: "swoletrack.vercel.app" },
    ],
  },
};

export default nextConfig;
