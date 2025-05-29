// next.config.ts
import withMDX from '@next/mdx';
import type { NextConfig } from 'next';
import type { RemotePattern } from 'next/dist/shared/lib/image-config';

const remotePatterns: RemotePattern[] = [
  { protocol: 'https', hostname: 'placehold.co' },
  { protocol: 'https', hostname: 'ai-chatbot.example.com' },
  { protocol: 'https', hostname: 'shop.anotherseeker.com' },
  { protocol: 'https', hostname: 'swoletrack.vercel.app' },
  { protocol: 'https', hostname: 'lplanner.vercel.app' },
];

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true, // Enable native MDX support
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns,
  },
};

export default withMDX({ extension: /\.mdx?$/ })(nextConfig);
