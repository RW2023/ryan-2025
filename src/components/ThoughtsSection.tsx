'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface ThoughtsSectionProps {
    thoughts: string;
}

export default function ThoughtsSection({ thoughts }: ThoughtsSectionProps) {
    const mdComponents: Components = {
        h1: ({ children }) => (
            <h1 className="mt-8 mb-4 text-3xl font-bold text-accent">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="mt-6 mb-3 text-2xl font-semibold text-accent">
                {children}
            </h2>
        ),
        a: ({ children, href }) => (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium text-accent"
            >
                {children}
            </a>
        ),
    };

    return (
        <section className="mt-10 max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-accent font-heading">
                My Thoughts
            </h2>
            <div className="prose max-w-none text-text-primary prose-headings:text-text-bright prose-strong:text-text-bright prose-p:text-text-muted">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                    {thoughts}
                </ReactMarkdown>
            </div>
        </section>
    );
}
