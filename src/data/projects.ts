export type Project = {
  title: string;
  slug: string;
  description: string;
  tools: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
  featured?: boolean;
};

export const allProjects: Project[] = [
  {
    title: "JotThis",
    slug: "jotthis",
    description:
      "AI-powered voice notes app with real-time transcription, intelligent analysis, and cloud sync. Record, transcribe, and extract insights from your voice.",
    tools: ["Next.js", "TypeScript", "Firebase", "OpenAI", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/RW2023/jotthis",
    liveUrl: "https://jotthis.vercel.app",
    imageUrl: "/projects/jotthis.png",
    featured: true,
  },
  {
    title: "Clayton C Music",
    slug: "clayton-c-music",
    description:
      "Official website and storefront for a reggae artist. Custom e-commerce integration with Shopify, media galleries, and streaming platform links.",
    tools: ["Next.js", "TypeScript", "Shopify", "GSAP", "DaisyUI", "Tailwind CSS"],
    githubUrl: "https://github.com/RW2023/clayton-c",
    liveUrl: "https://www.clayton-c.com",
    imageUrl: "/projects/claytonC.png",
    featured: true,
  },
  {
    title: "ChoreStreet",
    slug: "chorestreet",
    description:
      "Gamified household chore marketplace with stock-market-style pricing, surge/decay mechanics, role-based auth, and PWA support.",
    tools: ["Next.js", "TypeScript", "Prisma", "NextAuth", "Zustand", "Tailwind CSS"],
    githubUrl: "https://github.com/RW2023/chorestreet",
    liveUrl: "https://chorestreet.vercel.app",
    imageUrl: "/projects/chorestreet.png",
    featured: true,
  },
  {
    title: "LP Landing",
    slug: "lp-landing",
    description:
      "High-conversion landing page with custom SVG architecture diagrams, backend pipeline integration, and a Neo-Professional design system.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Custom SVG"],
    githubUrl: "https://github.com/RW2023/lp-landing",
    liveUrl: "https://lp-landing.vercel.app",
    imageUrl: "/projects/lp-landing.png",
    featured: true,
  },
  {
    title: "Promptor",
    slug: "promptor",
    description:
      "Prompt vault for storing, organizing, and optimizing AI prompts. Supabase backend with tag-based filtering and PWA offline access.",
    tools: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Serwist", "Tailwind CSS"],
    githubUrl: "https://github.com/RW2023/promptor",
    liveUrl: "https://promptor.vercel.app",
    imageUrl: "/projects/promptor.png",
    featured: true,
  },
];
