// app/components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface ProjectCardProps {
    title: string;
    description: string;
    tools?: string[];
    slug: string;
}

const badgeColors: Record<string, string> = {
    "Next.js": "badge-primary",
    TypeScript: "badge-info",
    OpenAI: "badge-accent",
    Supabase: "badge-success",
    Shopify: "badge-warning",
    DaisyUI: "badge-secondary",
};

const getBadgeColor = (tool: string) => badgeColors[tool] || "badge-neutral";

export default function ProjectCard({
    title,
    description,
    tools,
    slug,
}: ProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`} className="group">
            <motion.div
                className="border border-primary/30 dark:border-primary/40 bg-base-100 dark:bg-base-200 rounded-xl shadow-md transition-all duration-300 p-6 flex flex-col group-hover:shadow-lg"
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>

                <p className="text-base text-base-content/80 leading-relaxed mb-4">
                    {description}
                </p>

                <hr className="border-t border-base-300 dark:border-base-700 mb-4" />

                <div className="flex flex-wrap gap-2">
                    {(tools ?? []).map((tool) => (
                        <span
                            key={tool}
                            className={`badge badge-sm ${getBadgeColor(tool)} text-[var(--foreground)]`}
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </motion.div>
        </Link>
    );
}
