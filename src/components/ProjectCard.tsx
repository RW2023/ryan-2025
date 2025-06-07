'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import SkillsCloud, { Skill } from './SkillsGrid';

export interface ProjectCardProps {
  title: string;
  description: string;
  tools?: string[];
  slug: string;
  /** Path or URL to a 16 × 9 screenshot thumbnail */
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tools = [],
  slug,
  imageUrl,
}: ProjectCardProps) {
  const skillProps: Skill[] = tools.map((tool) => ({ name: tool }));

  return (
    <Link href={`/projects/${slug}`} className="group">
      <motion.article
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="rounded-xl border overflow-hidden transition-shadow duration-200"
        style={{
          backgroundColor: 'hsl(var(--card-bg))',
          color: 'hsl(var(--foreground))',
          borderColor: 'hsl(var(--card-hover))',
        }}
        aria-labelledby={`project-${slug}`}
      >
        {/* Screenshot */}
        {imageUrl && (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={imageUrl}
              alt={`${title} screenshot`}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Text & tools */}
        <div className="p-6 space-y-4">
          <h3
            id={`project-${slug}`}
            className="text-xl flex items-center gap-2 font-[var(--font-heading)]"
          >
            {title}
            <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </h3>

          <p className="text-base leading-relaxed text-[hsl(var(--foreground-muted))] font-sans">
            {description}
          </p>

          <SkillsCloud skills={skillProps} showSearch={false} />
        </div>
      </motion.article>
    </Link>
  );
}
