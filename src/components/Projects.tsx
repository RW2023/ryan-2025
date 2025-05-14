// app/projects/page.tsx
"use client";

import { useState } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import { ListMotion, ItemMotion } from "@/app/components/ListMotion";
import { allProjects } from "@/data/projects";

const categories = ["All", "AI", "E-commerce", "Full-stack"];

export default function Projects() {
    const [active, setActive] = useState("All");

    const normalize = (s: string) => s.trim().toLowerCase();

    const filtered =
        normalize(active) === "all"
            ? allProjects
            : allProjects.filter((p) => normalize(p.category) === normalize(active));

    return (
        <section id="projects" className="py-20 px-4 bg-base-100 text-base-content">
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
                    <ItemMotion key={proj.slug}>
                        <ProjectCard {...proj} />
                    </ItemMotion>
                ))}
            </ListMotion>
        </section>
    );
}
