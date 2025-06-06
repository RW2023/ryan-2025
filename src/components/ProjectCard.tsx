'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SkillsCloud, { Skill } from './SkillsGrid';

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
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="rounded-xl border transition-shadow duration-200"
        style={{
          backgroundColor: 'hsl(var(--card-bg))',
          color: 'hsl(var(--foreground))',
          borderColor: 'hsl(var(--card-hover))',
        }}
        aria-labelledby={`project-${slug}`}
      >
        <div className="p-6 space-y-4">
          <h3
            id={`project-${slug}`}
            className="text-xl font-semibold flex items-center gap-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
            <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </h3>

          <p
            className="text-base leading-relaxed"
            style={{ color: 'hsl(var(--foreground-muted))', fontFamily: 'var(--font-sans)' }}
          >
            {description}
          </p>

          <SkillsCloud skills={skillProps} showSearch={false} />
        </div>
      </motion.article>
    </Link>
  );
}
