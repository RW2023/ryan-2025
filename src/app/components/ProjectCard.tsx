"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export interface ProjectCardProps {
    title: string;
    slug: string;
    description: string;
    tools?: string[];
    githubUrl: string;
    liveUrl?: string;
}

export default function ProjectCard({
    title,
    slug,
    description,
    tools,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    if (!tools) {
        console.warn(`⚠️ ProjectCard: 'tools' prop is missing for "${title}"`);
    }

    return (
        <Link href={`/projects/${slug}`} className="group block">
            <motion.div
                className="border border-primary/30 dark:border-primary/40 bg-base-100 dark:bg-base-200 rounded-xl shadow-md transition-all duration-300 p-6 flex flex-col group-hover:shadow-lg"
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:underline">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-base text-base-content/80 leading-relaxed mb-4">
                    {description}
                </p>

                {/* Divider */}
                <hr className="border-t border-base-300 dark:border-base-700 mb-4" />

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {(tools ?? []).map((tool) => (
                        <span key={tool} className="badge badge-secondary badge-sm">
                            {tool}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex gap-4 pt-2">
                    <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline border-primary text-primary hover:bg-primary hover:text-base-100"
                        onClick={(e) => e.stopPropagation()} // prevent card link
                    >
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                    </Link>
                    {liveUrl && (
                        <Link
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline border-primary text-primary hover:bg-primary hover:text-base-100"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live Site
                        </Link>
                    )}
                </div>
            </motion.div>
        </Link>
    );
}
