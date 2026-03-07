"use client";

import { useState } from "react";

export type Skill = {
    name: string;
    category?: string;
};

const defaultSkills: Skill[] = [
    // Frameworks
    { name: "Next.js", category: "Frameworks" },
    { name: "React", category: "Frameworks" },

    // Styling
    { name: "Tailwind CSS", category: "Styling" },
    { name: "DaisyUI", category: "Styling" },
    { name: "Figma", category: "Styling" },

    // UI Icons
    { name: "Lucide React", category: "UI Icons" },
    { name: "FontAwesome", category: "UI Icons" },

    // Animation
    { name: "Framer Motion", category: "Animation" },

    // Languages
    { name: "TypeScript", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "Shopify Liquid", category: "Languages" },

    // Backend / Databases
    { name: "Node.js", category: "Backend" },
    { name: "Supabase", category: "Backend" },
    { name: "Firebase", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "Neon Postgres", category: "Backend" },
    { name: "Prisma", category: "Backend" },
    { name: "MongoDB", category: "Backend" },

    // AI & APIs
    { name: "OpenAI API", category: "AI & APIs" },
    { name: "Claude API", category: "AI & APIs" },
    { name: "Resend", category: "AI & APIs" },
    { name: "Shopify Storefront API", category: "AI & APIs" },
    { name: "REST APIs", category: "AI & APIs" },
    { name: "Webhooks", category: "AI & APIs" },

    // Automation & Infrastructure
    { name: "n8n", category: "Automation" },
    { name: "Docker", category: "Automation" },
    { name: "Linux / VPS", category: "Automation" },
    { name: "CI/CD", category: "Automation" },
    { name: "Cron Jobs", category: "Automation" },

    // Dev Tools
    { name: "Git / GitHub", category: "Dev Tools" },
    { name: "Vercel", category: "Dev Tools" },
    { name: "VS Code", category: "Dev Tools" },
    { name: "Claude Code", category: "Dev Tools" },
    { name: "ESLint", category: "Dev Tools" },
    { name: "pnpm", category: "Dev Tools" },

    // Auth & Security
    { name: "Firebase Auth", category: "Auth" },
    { name: "Supabase RLS", category: "Auth" },
    { name: "NextAuth", category: "Auth" },

    // State Management
    { name: "React Context", category: "State Management" },
    { name: "Zustand", category: "State Management" },

    // Testing / Linting
    { name: "Jest", category: "Testing / Linting" },
    { name: "React Testing Library", category: "Testing / Linting" },
    { name: "Vitest", category: "Testing / Linting" },
    { name: "Prettier", category: "Testing / Linting" },
];

export default function SkillsGrid({
    skills = defaultSkills,
    showSearch = true,
}: {
    skills?: Skill[];
    showSearch?: boolean;
}) {
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const uniqueCategories = [
        "All",
        ...Array.from(new Set(skills.map((s) => s.category).filter(Boolean))),
    ];

    const filteredSkills = skills.filter((skill) => {
        const matchesCategory =
            selectedCategory === "All" || skill.category === selectedCategory;
        const matchesQuery = skill.name
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
    });

    return (
        <section className="py-12 px-4 max-w-4xl mx-auto">
            {showSearch && (
                <>
                    <h2 className="text-3xl font-bold mb-4 text-center text-primary">
                        Tool-Kit
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Search tools..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="input input-bordered w-full sm:w-1/2"
                        />
                        <select
                            title="Filter by category"
                            className="select select-bordered w-full sm:w-1/3"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {uniqueCategories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}

            <div className="flex flex-wrap justify-center gap-3">
                {filteredSkills.length > 0 ? (
                    filteredSkills.map((skill) => (
                        <span
                            key={skill.name}
                            className="badge badge-outline text-sm px-3 py-2 shadow hover:scale-105 transition-transform cursor-default"
                        >
                            {skill.name}
                        </span>
                    ))
                ) : (
                    <p className="text-center text-[hsl(var(--foreground-muted))]">
                        No matching skills found.
                    </p>
                )}
            </div>
        </section>
    );
}
