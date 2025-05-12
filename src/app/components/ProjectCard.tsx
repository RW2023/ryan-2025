// app/components/ProjectCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    githubUrl: string;
    liveUrl?: string;
}

export default function ProjectCard({
    title,
    description,
    tech,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{
                translateY: -4,
                boxShadow:
                    "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-base-100 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
        >
            <div className="p-6 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
                    {description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map((tag) => (
                        <span
                            key={tag}
                            className="badge badge-outline badge-primary text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap gap-4">
                    <Link
                        href={githubUrl}
                        target="_blank"
                        className="inline-flex items-center btn btn-sm btn-outline"
                    >
                        <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                    {liveUrl && (
                        <Link
                            href={liveUrl}
                            target="_blank"
                            className="inline-flex items-center btn btn-sm btn-primary"
                        >
                            <ArrowUpRight className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
