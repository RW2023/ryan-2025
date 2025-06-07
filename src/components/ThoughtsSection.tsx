'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface ThoughtsSectionProps {
    thoughts: string;
}

export default function ThoughtsSection({ thoughts }: ThoughtsSectionProps) {
    /* custom markdown → JSX renderer, theme-aware */
    const mdComponents: Components = {
        h1: ({ children }) => (
            <h1
                className="mt-8 mb-4 text-3xl font-bold"
                style={{ color: 'hsl(var(--primary))' }}
            >
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2
                className="mt-6 mb-3 text-2xl font-semibold"
                style={{ color: 'hsl(var(--primary))' }}
            >
                {children}
            </h2>
        ),
        a: ({ children, href }) => (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
                style={{ color: 'hsl(var(--primary))' }}
            >
                {children}
            </a>
        ),
    };

    return (
        <section className="mt-10 max-w-none">
            <h2
                className="text-2xl font-semibold mb-4"
                style={{ color: 'hsl(var(--primary))' }}
            >
                My Thoughts
            </h2>

            {/* prose handles basic typography; overrides above tweak color */}
            <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                    {thoughts}
                </ReactMarkdown>
            </div>
        </section>
    );
}
