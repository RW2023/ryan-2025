"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="card bg-card shadow-sm hover:shadow-lg transition"
        aria-labelledby={`project-${slug}`}
      >
        <div className="card-body">
          <h3 id={`project-${slug}`} className="card-title text-xl">
            {title}
            <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100" />
          </h3>

          <p className="text-base text-foreground-muted leading-relaxed mb-4">
            {description}
          </p>
          <SkillsCloud skills={skillProps} showSearch={false} />
        </div>
      </motion.article>
    </Link>
  );
}
