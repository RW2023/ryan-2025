export const badgeColors: Record<string, string> = {
    "Next.js": "bg-neutral-900 text-white",
    "React": "bg-blue-500 text-white",
    "TypeScript": "bg-blue-600 text-white",
    "Tailwind CSS": "bg-sky-500 text-white",
    "DaisyUI": "bg-purple-500 text-white",
    "ShadCN/UI": "bg-indigo-500 text-white",
    "Framer Motion": "bg-pink-500 text-white",
    "Lucide Icons": "bg-amber-500 text-white",
    "Headless UI": "bg-fuchsia-600 text-white",
    "Supabase": "bg-green-600 text-white",
    "Firebase": "bg-orange-500 text-white",
    "Firestore": "bg-yellow-500 text-black",
    "OpenAI API": "bg-emerald-500 text-white",
    "Chart.js": "bg-rose-500 text-white",
    "REST API Integration": "bg-cyan-600 text-white",
    "Firebase Auth": "bg-orange-400 text-black",
    "Supabase Auth": "bg-green-700 text-white",
    "RLS Policies": "bg-lime-600 text-white",
    "Shopify Storefront API": "bg-green-500 text-white",
    "Systeme.io": "bg-violet-600 text-white",
    "Zod": "bg-red-500 text-white",
    "tRPC": "bg-blue-400 text-white",
    "Responsive Design": "bg-teal-500 text-white",
    "CI/CD Automation": "bg-slate-600 text-white",
    "Open Graph SEO": "bg-gray-500 text-white",
    "GitHub Actions": "bg-black text-white",
    "Semantic HTML": "bg-zinc-600 text-white",
    "ARIA Roles": "bg-yellow-600 text-black",
    "Accessible Components": "bg-green-400 text-white",
    "SEO Optimization": "bg-gray-700 text-white",
    "Meta Tags": "bg-stone-500 text-white",
    "Structured Data": "bg-blue-700 text-white",
    "FireAuth": "bg-orange-300 text-black",
    "RLS": "bg-lime-500 text-white",
    "Shopify": "bg-amber-400 text-black",
    "Systeme": "bg-violet-500 text-white",
    "Authentication": "bg-orange-600 text-white",
    "Authorization": "bg-rose-600 text-white",
    "API Integration": "bg-blue-500 text-white"
  };
  
export const getBadgeColor = (tool: string): string =>
    badgeColors[tool] || "bg-card text-foreground";
