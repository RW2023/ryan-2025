export const badgeColors: Record<string, string> = {
    "Next.js": "bg-neutral-900 text-white",
    TypeScript: "bg-blue-600 text-white",
    OpenAI: "bg-emerald-500 text-white",
    Supabase: "bg-green-600 text-white",
    Shopify: "bg-amber-500 text-black",
    DaisyUI: "bg-purple-500 text-white",
    "Tailwind CSS": "bg-sky-500 text-white",
    "Lucide React": "bg-amber-600 text-white",
    "Chart.js": "bg-rose-500 text-white",
    "Framer Motion": "bg-pink-500 text-white",
  };
  
  export const getBadgeColor = (tool: string): string =>
    badgeColors[tool] || "bg-gray-400 text-white";
  