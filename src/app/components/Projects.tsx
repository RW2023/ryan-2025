// app/components/Projects.tsx
"use client";

import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { ListMotion, ItemMotion } from "./ListMotion";

const allProjects: (ProjectCardProps & { category: string })[] = [
    {
        title: "AI-Powered Chatbot",
        description: "A conversational agent using OpenAI’s API integrated into Next.js.",
        tech: ["Next.js", "TypeScript", "OpenAI"],
        githubUrl: "https://github.com/yourusername/ai-chatbot",
        liveUrl: "https://ai-chatbot.example.com",
        category: "AI",
    },
    {
        title: "Headless Shopify Store",
        description: "A custom storefront built with Shopify Storefront API and DaisyUI.",
        tech: ["Next.js", "Shopify", "DaisyUI"],
        githubUrl: "https://github.com/yourusername/shopify-store",
        liveUrl: "https://shop.anotherseeker.com",
        category: "E-commerce",
    },
    {
        title: "SwoleTrac Workout App",
        description: "Workout tracker with Supabase backend and AI-generated summaries.",
        tech: ["Next.js", "Supabase", "OpenAI"],
        githubUrl: "https://github.com/yourusername/swoletrac",
        liveUrl: "https://swoletrac.example.com",
        category: "Full-stack",
    },
    // Add more projects here...
];

const categories = ["All", "AI", "E-commerce", "Full-stack"];

export default function Projects() {
    const [active, setActive] = useState("All");

    const normalize = (s: string) => s.trim().toLowerCase();

    const filtered =
        normalize(active) === "all"
            ? allProjects
            : allProjects.filter((p) => normalize(p.category) === normalize(active));

    return (
        <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-8">Projects Showcase</h2>

            {/* Filter Bar */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${normalize(active) === normalize(cat)
                                ? "bg-primary text-white"
                                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                            }`}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Animated Projects Grid */}
            <ListMotion className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((proj) => (
                    <ItemMotion key={proj.title}>
                        <ProjectCard {...proj} />
                    </ItemMotion>
                ))}
            </ListMotion>
        </section>
    );
}
