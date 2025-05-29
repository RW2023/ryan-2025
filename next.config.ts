// next.config.ts
import path from 'path';
import mdx from '@next/mdx';

const withMDX = mdx({ extension: /\.mdx?$/ });

const nextConfig = withMDX({
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'ai-chatbot.example.com' },
      { protocol: 'https', hostname: 'shop.anotherseeker.com' },
      { protocol: 'https', hostname: 'swoletrack.vercel.app' },
      { protocol: 'https', hostname: 'lplanner.vercel.app' },
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve('./node_modules/react'),
      'react/jsx-runtime': path.resolve('./node_modules/react/jsx-runtime'),
    };
    return config;
  },
});

export default nextConfig;

export const config = {
  turbo: false,
};
