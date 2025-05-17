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
      title: "Load Planner",
      slug: "load-planner",
      description: "Trucking Load Planner tool for planning assets.",
      tools: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "FontAwesome", "Framer Motion"],
      githubUrl: "https://github.com/RW2023/loader",
      liveUrl: "https://lplanner.vercel.app/",
      category: "Full-stack",
      imageUrl: "/projects/loader.png",
    },
    {
      title: "Headless Shopify Store",
      slug: "headless-shopify-store",
      description: "A custom storefront built with Shopify Storefront API and DaisyUI.",
      tools: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "DaisyUI", "Lucide React", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/shopify-store",
      liveUrl: "https://shop.anotherseeker.com",
      imageUrl: "/projects/storeScreenshot.png",
      category: "E-commerce",
    },
    {
      title: "SwoleTrac Workout App",
      slug: "swoletrac-workout-app",
      description: "Workout tracker with Supabase backend and AI-generated summaries.",
      tools: ["Next.js", "Supabase", "OpenAI", "Tailwind CSS", "DaisyUI", "Lucide React", "Chart.js"],
      githubUrl: "https://github.com/yourusername/swoletrac",
      liveUrl: "https://swoletrack.vercel.app/",
      imageUrl: "/projects/swoletrack.png",
      category: "Full-stack, AI",
    },
    // Add more projects as needed
  ];
  