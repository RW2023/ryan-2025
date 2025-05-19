"use client";

import { useState } from "react";

export type Skill = {
    name: string;
    category?: string;
};

const defaultSkills: Skill[] = [
    { name: "Next.js", category: "Frameworks" },
    { name: "React", category: "Frameworks" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "DaisyUI", category: "Styling" },
    { name: "Lucide React", category: "UI Icons" },
    { name: "FontAwesome", category: "UI Icons" },
    { name: "Framer Motion", category: "Animation" },
    { name: "TypeScript", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "Supabase", category: "Backend" },
    { name: "Firebase", category: "Backend" },
    { name: "Shopify Storefront API", category: "CMS / API" },
    { name: "MDX", category: "CMS / API" },
    { name: "Vercel", category: "Dev Tools" },
    { name: "GitHub", category: "Dev Tools" },
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
                        My Toolkit
                    </h2>
                    <input
                        type="text"
                        placeholder="Search skills..."
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
