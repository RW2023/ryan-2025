"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SkillsCloud, { Skill } from "./SkillsGrid";

export interface ProjectCardProps {
    title: string;
    description: string;
    tools?: string[];
    slug: string;
}

export default function ProjectCard({
    title,
    description,
    tools = [],
    slug,
}: ProjectCardProps) {
    const skillProps: Skill[] = tools.map((tool) => ({ name: tool }));

    return (
        <Link href={`/projects/${slug}`} className="group">
            <motion.article
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="border border-primary/30 dark:border-primary/40 bg-base-100 dark:bg-base-200 rounded-xl shadow-sm group-hover:shadow-md hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-shadow duration-300 p-6 flex flex-col"
                aria-labelledby={`project-${slug}`}
            >
                <h3
                    id={`project-${slug}`}
                    className="text-xl font-[var(--font-heading)] text-[var(--foreground)] mb-2"
                >
                    {title}
                </h3>

                <p className="text-base font-[var(--font-sans)] text-[var(--foreground-muted)] leading-relaxed mb-4">
                    {description}
                </p>

                <hr className="border-t border-base-300 dark:border-base-700 mb-4" />

                <div className="-mt-2">
                    <SkillsCloud skills={skillProps} showSearch={false} />
                </div>
            </motion.article>
        </Link>
    );
}
