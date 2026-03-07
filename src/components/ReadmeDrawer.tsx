'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import type { Components } from 'react-markdown';

interface ReadmeDrawerProps {
    githubUrl: string;
}

type MarkdownCodeProps = React.HTMLAttributes<HTMLElement> & {
    inline?: boolean;
    children: React.ReactNode;
};

const CodeRenderer = ({ inline, children, ...rest }: MarkdownCodeProps) =>
    inline ? (
        <code
            {...rest}
            className="px-1 py-0.5 rounded bg-surface-light text-[0.95em]"
        >
            {children}
        </code>
    ) : (
        <pre
            {...rest}
            className="p-3 mb-4 rounded bg-surface-light overflow-x-auto text-sm"
        >
            <code>{children}</code>
        </pre>
    );

const codeComponent = CodeRenderer as Components['code'];

export default function ReadmeDrawer({ githubUrl }: ReadmeDrawerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [markdown, setMarkdown] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [fetched, setFetched] = useState(false);

    const fetchReadme = async () => {
        setLoading(true);
        setError(false);

        try {
            const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)(?:\.git)?/);
            if (!match) throw new Error('Bad GitHub URL');

            const [, user, repo] = match;
            const branches = ['main', 'master'];

            for (const branch of branches) {
                const res = await fetch(
                    `https://raw.githubusercontent.com/${user}/${repo}/${branch}/README.md`
                );
                if (res.ok) {
                    setMarkdown(await res.text());
                    return;
                }
            }
            throw new Error('README not found');
        } catch {
            setError(true);
        } finally {
            setLoading(false);
            setFetched(true);
        }
    };

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
        if (!fetched) void fetchReadme();
    };

    const mdComponents: Components = {
        h1: ({ children }) => (
            <h1 className="text-2xl font-bold mt-4 mb-2 text-text-bright">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-xl font-semibold mt-4 mb-2 text-text-muted">{children}</h2>
        ),
        p: ({ children }) => <p className="mb-2 text-text-primary">{children}</p>,
        li: ({ children }) => <li className="list-disc ml-6 mb-1 text-text-primary">{children}</li>,
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
        img: ({ src = '', alt = '' }) => {
            const normalizedSrc = src.startsWith('http')
                ? src
                : src.startsWith('public/')
                    ? src.replace('public/', '/')
                    : src;

            return (
                <div className="relative w-full my-6 rounded-lg overflow-hidden">
                    <Image
                        src={normalizedSrc}
                        alt={alt}
                        width={800}
                        height={400}
                        className="rounded-lg shadow-md w-auto h-auto max-w-full mx-auto"
                    />
                </div>
            );
        },
        code: codeComponent,
        pre: () => null,
    };

    return (
        <div className="mt-10 w-full max-w-4xl mx-auto">
            <button
                onClick={handleToggle}
                className="w-full sm:w-auto font-semibold py-2 px-4 rounded-lg border border-border text-accent hover:border-accent/40 bg-surface transition-all duration-200"
            >
                {isOpen ? 'Hide README' : 'Show README'}
            </button>

            {isOpen && (
                <div className="mt-6 glass-card overflow-hidden">
                    {loading ? (
                        <div className="flex justify-center items-center h-24">
                            <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : error || !markdown ? (
                        <p className="text-sm px-4 py-3 font-medium text-secondary">
                            README not available — this repo may be private or missing a README.md.
                        </p>
                    ) : (
                        <div className="overflow-x-auto p-4">
                            <div className="prose prose-sm md:prose max-w-none break-words text-text-primary">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={mdComponents}
                                >
                                    {markdown}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
