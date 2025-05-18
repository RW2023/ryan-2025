"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SkillsCloud, { Skill } from "./SkillsGrid"; // Adjust path as needed

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
    // Convert tools to Skill[] format
    const skillProps: Skill[] = tools.map((tool) => ({ name: tool }));

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

                <div className="-mt-2">
                    <SkillsCloud skills={skillProps} showSearch={false} />
                </div>
            </motion.div>
        </Link>
    );
}
