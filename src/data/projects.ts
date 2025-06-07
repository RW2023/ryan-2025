// data/projects.ts

export type Project = {
  title: string;
  slug: string;
  description: string;
  tools: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  imageUrl?: string; // Optional property for project image
};

export const allProjects: Project[] = [
  {
    title: 'Clayton C Music',
    slug: 'clayton-c-music',
    description: 'Official website and store for Clayton C Music, featuring e-commerce and media content.',
    tools: [
      "Next.js", "TypeScript", "Tailwind CSS",
      "DaisyUI", "Shopify", "Framer Motion"
    ],
    githubUrl: "https://github.com/RW2023/clayton-c",
    liveUrl: 'https://clayton-c.vercel.app/',
    imageUrl: '/projects/claytonC.png',
    category: 'Full-stack, Personal Website, E-commerce',
  },
  {
    title: "Load Planner",
    slug: "load-planner",
    description: "Trucking Load Planner tool for planning loads. Allow Realtime determination of load configuration.",
    tools: [
      "Next.js", "TypeScript", "Tailwind CSS",
      "DaisyUI", "FontAwesome", "Framer Motion"
    ],
    githubUrl: "https://github.com/RW2023/loader",
    liveUrl: "https://lplanner.vercel.app/",
    category: "Full-stack, Utility App, Custom Tool",
    imageUrl: "/projects/loader.png",
  },
  {
    title: "Headless Shopify Store",
    slug: "headless-shopify-store",
    description: "A custom storefront built with Shopify Storefront API and DaisyUI.",
    tools: [
      "Next.js", "Shopify Storefront API", "Tailwind CSS",
      "DaisyUI", "Lucide React", "Framer Motion"
    ],
    githubUrl: "https://github.com/yourusername/shopify-store",
    liveUrl: "https://shop.anotherseeker.com",
    imageUrl: "/projects/storeScreenshot.png",
    category: "E-commerce, Full-stack",
  },
  {
    title: "SwoleTrac Workout App",
    slug: "swoletrac-workout-app",
    description: "Workout tracker with Supabase backend and AI-generated summaries.",
    tools: [
      "Next.js", "Supabase", "OpenAI",
      "Tailwind CSS", "DaisyUI", "Lucide React", "Chart.js"
    ],
    githubUrl: "https://github.com/yourusername/swoletrac",
    liveUrl: "https://swoletrack.vercel.app/",
    imageUrl: "/projects/swoletrack.png",
    category: "Full-stack, AI, Fitness App",
  },
];
