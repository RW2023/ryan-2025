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
      { protocol: "https", hostname: "lplanner.vercel.app" }, 
      { protocol: "https", hostname: "https://www.ryan-w.dev" }, 
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
