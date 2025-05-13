import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co", // modern, reliable placeholder service
      },
      {
        protocol: "https",
        hostname: "ai-chatbot.example.com",
      },
      {
        protocol: "https",
        hostname: "shop.anotherseeker.com",
      },
      {
        protocol: "https",
        hostname: "swoletrack.vercel.app",
      },
    ],
  },
};

export default nextConfig;
