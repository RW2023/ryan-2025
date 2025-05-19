// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "ai-chatbot.example.com" },
      { protocol: "https", hostname: "shop.anotherseeker.com" },
      { protocol: "https", hostname: "swoletrack.vercel.app" },
      { protocol: "https", hostname: "lplanner.vercel.app" }, // ✅ Add this line
    ],
  },
};

export default nextConfig;
