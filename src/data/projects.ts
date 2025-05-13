// data/projects.ts

export type Project = {
    title: string;
    slug: string;
    description: string;
    tools: string[];
    githubUrl: string;
    liveUrl: string;
    category: string;
  };
  
  export const allProjects: Project[] = [
    {
      title: "AI-Powered Chatbot",
      slug: "ai-powered-chatbot",
      description: "A conversational agent using OpenAI’s API integrated into Next.js.",
      tools: ["Next.js", "TypeScript", "OpenAI"],
      githubUrl: "https://github.com/yourusername/ai-chatbot",
      liveUrl: "https://ai-chatbot.example.com",
      category: "AI",
    },
    {
      title: "Headless Shopify Store",
      slug: "headless-shopify-store",
      description: "A custom storefront built with Shopify Storefront API and DaisyUI.",
      tools: ["Next.js", "Shopify", "DaisyUI"],
      githubUrl: "https://github.com/yourusername/shopify-store",
      liveUrl: "https://shop.anotherseeker.com",
      category: "E-commerce",
    },
    {
      title: "SwoleTrac Workout App",
      slug: "swoletrac-workout-app",
      description: "Workout tracker with Supabase backend and AI-generated summaries.",
      tools: ["Next.js", "Supabase", "OpenAI"],
      githubUrl: "https://github.com/yourusername/swoletrac",
      liveUrl: "https://swoletrack.vercel.app/",
      category: "Full-stack",
    },
    // Add more projects as needed
  ];
  