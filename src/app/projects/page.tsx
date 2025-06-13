// app/projects/page.tsx
'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { ListMotion, ItemMotion } from '@/components/ListMotion';
import { allProjects } from '@/data/projects';

const categories = ['All', 'Full-stack', 'AI', 'E-commerce', 'Utility App', 'API Integration'];
const normalize = (s: string) => s.trim().toLowerCase();

export default function Projects() {
    const [active, setActive] = useState('All');
    console.log(categories);

    const filtered =
        normalize(active) === 'all'
            ? allProjects
            : allProjects.filter((p) =>
                p.category
                    .split(',')
                    .map(normalize)
                    .includes(normalize(active)),
            );

    return (
        <section
            id="projects"
            className="py-20 px-4"
            style={{
                backgroundColor: 'hsl(var(--bg))',
                color: 'hsl(var(--foreground))',
            }}
        >
            {/* Heading */}
            <h2
                className="text-4xl md:text-5xl font-bold text-center mb-10"
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                Projects Showcase
            </h2>

            {/* Filter Bar */}
            <div className="flex justify-center gap-3 mb-12 flex-wrap">
                {categories.map((cat) => {
                    const isActive = normalize(active) === normalize(cat);
                    return (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className="px-4 py-2 rounded-full text-sm font-semibold border transition-colors"
                            style={{
                                backgroundColor: isActive
                                    ? 'hsl(var(--primary))'
                                    : 'hsl(var(--card-bg))',
                                color: isActive
                                    ? 'white'
                                    : 'hsl(var(--foreground-muted))',
                                borderColor: isActive
                                    ? 'hsl(var(--primary))'
                                    : 'hsl(var(--card-hover))',
                            }}
                        >
                            {cat.toUpperCase()}
                        </button>
                    );
                })}
            </div>

            {/* Animated Projects Grid */}
            <ListMotion className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((proj) => (
                    <ItemMotion key={proj.slug}>
                        {/* imageUrl flows to the updated ProjectCard and shows the screenshot */}
                        <ProjectCard {...proj} />
                    </ItemMotion>
                ))}
            </ListMotion>
        </section>
    );
}
