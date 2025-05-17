"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { getBadgeColor } from "@/utils/getBadgeColor";

const allSkills = [
    "Next.js", "React", "TypeScript",
    "Tailwind CSS", "DaisyUI", "ShadCN/UI",
    "Framer Motion", "Lucide Icons", "Headless UI",
    "Supabase", "Firebase", "Firestore",
    "OpenAI API", "Chart.js", "REST API Integration",
    "Firebase Auth", "Supabase Auth", "RLS Policies",
    "Shopify Storefront API", "Systeme.io",
    "Zod", "tRPC", "Responsive Design",
    "CI/CD Automation", "Open Graph SEO", "GitHub Actions",
    "Semantic HTML", "ARIA Roles", "Accessible Components",
    "SEO Optimization", "Meta Tags", "Structured Data"
];

export default function AboutMe() {
    const [query, setQuery] = useState("");

    const filteredSkills = allSkills.filter((skill) =>
        skill.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <section id="about" className="py-20 px-4 text-center max-w-3xl mx-auto">
            <motion.div
                className="w-36 h-36 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-xl ring-4 ring-[var(--accent-color)] mx-auto mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Image
                    src="/profile/darkProfile.jpg"
                    alt="Photo of Ryan"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>

            <p className="text-lg text-text-primary mb-8">
                Hi, I’m Ryan — a full-stack developer focused on building clean, performant web applications using modern tools.
                My work blends thoughtful design with real-world functionality. I also explore consciousness, metaphysics, and systems thinking—because clarity in code often begins with clarity of mind.
            </p>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-secondary">My Relevant Skills</h3>

                <input
                    type="text"
                    placeholder="Search skills..."
                    className="input input-bordered w-full max-w-sm mb-4 block mx-auto"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <div className="flex flex-wrap gap-2 justify-center">
                    {filteredSkills.map((skill) => (
                        <span
                            key={skill}
                            className={`badge badge-sm ${getBadgeColor(skill)}`}
                        >
                            {skill}
                        </span>
                    ))}
                    {filteredSkills.length === 0 && (
                        <p className="text-sm text-center text-base-content/70 w-full">No matching skills</p>
                    )}
                </div>
            </div>

            <blockquote className="italic text-text-muted">
                “I believe technology is most powerful when it reflects clarity of purpose—transforming lines of code into tools that make life a little easier.”
            </blockquote>
        </section>
    );
}
