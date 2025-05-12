"use client";

import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

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

    const filtered = active === "All"
        ? allProjects
        : allProjects.filter((p) => p.category === active);

    return (
        <section id="projects" className="py-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Projects Showcase</h2>

            {/* Filter Bar */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`btn btn-sm ${active === cat ? "btn-primary" : "btn-outline"
                            }`}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((proj) => (
                    <ProjectCard key={proj.title} {...proj} />
                ))}
            </div>
        </section>
    );
}
