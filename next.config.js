/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "ai-chatbot.example.com" },
      { protocol: "https", hostname: "shop.anotherseeker.com" },
      { protocol: "https", hostname: "swoletrack.vercel.app" },
    ],
  },
};

module.exports = nextConfig;
