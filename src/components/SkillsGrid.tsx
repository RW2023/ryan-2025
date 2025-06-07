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

    // UI Icons
    { name: "Lucide React", category: "UI Icons" },
    { name: "FontAwesome", category: "UI Icons" },

    // Animation
    { name: "Framer Motion", category: "Animation" },

    // Languages
    { name: "TypeScript", category: "Languages" },
    { name: "JavaScript", category: "Languages" },

    // Backend / Databases
    { name: "Supabase", category: "Backend" },
    { name: "Firebase", category: "Backend" },

    // CMS / APIs
    { name: "Shopify Storefront API", category: "CMS / API" },
    { name: "MDX", category: "CMS / API" },
    { name: "OpenAI API", category: "CMS / API" },

    // Dev Tools
    { name: "Vercel", category: "Dev Tools" },
    { name: "GitHub", category: "Dev Tools" },
    { name: "pnpm", category: "Dev Tools" },

    // Auth & Security
    { name: "Firebase Auth", category: "Auth" },
    { name: "Supabase RLS", category: "Auth" },

    // State Management
    { name: "React Context", category: "State Management" },
    { name: "useReducer", category: "State Management" },

    // Testing / Linting (optional but recruiter-positive)
    { name: "ESLint", category: "Testing / Linting" },
    { name: "Prettier", category: "Testing / Linting" }
];


export default function SkillsGrid({
    skills = defaultSkills,
    showSearch = true,
}: {
    skills?: Skill[];
    showSearch?: boolean;
}) {
    const [query, setQuery] = useState("");
    const filteredSkills = skills.filter((skill) =>
        skill.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <section className="py-12 px-4 max-w-4xl mx-auto">
            {showSearch && (
                <>
                    <h2 className="text-3xl font-bold mb-4 text-center text-primary">
                        Tool-Kit
                    </h2>
                    <input
                        type="text"
                        placeholder="Search tools..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="input input-bordered w-full max-w-md mx-auto block mb-6"
                    />
                </>
            )}

            <div className="flex flex-wrap justify-center gap-3">
                {filteredSkills.map((skill) => (
                    <span
                        key={skill.name}
                        className="badge badge-outline text-sm px-3 py-2 shadow hover:scale-105 transition-transform cursor-default"
                    >
                        {skill.name}
                    </span>
                ))}
            </div>
        </section>
    );
}
