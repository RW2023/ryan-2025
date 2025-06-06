'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import type { Components } from 'react-markdown';

interface ReadmeDrawerProps {
    githubUrl: string;
}

/* ------------------------------------------------------------------ */
/* 1️⃣  Utility: Code renderer with a prop type that includes `inline` */
/* ------------------------------------------------------------------ */
type MarkdownCodeProps = React.HTMLAttributes<HTMLElement> & {
    inline?: boolean;
    children: React.ReactNode;
};

const CodeRenderer = ({ inline, children, ...rest }: MarkdownCodeProps) =>
    inline ? (
        <code
            {...rest}
            className="px-1 py-0.5 rounded bg-[hsl(var(--surface))] text-[0.95em]"
        >
            {children}
        </code>
    ) : (
        <pre
            {...rest}
            className="p-3 mb-4 rounded bg-[hsl(var(--surface))] overflow-x-auto text-sm"
        >
            <code>{children}</code>
        </pre>
    );

/* Tell TypeScript this matches React-Markdown’s expected signature */
const codeComponent = CodeRenderer as Components['code'];
/* ------------------------------------------------------------------ */

export default function ReadmeDrawer({ githubUrl }: ReadmeDrawerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [markdown, setMarkdown] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [fetched, setFetched] = useState(false);

    /* Fetch README ---------------------------------------------------- */
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

    /* Toggle drawer --------------------------------------------------- */
    const handleToggle = () => {
        setIsOpen((prev) => !prev);
        if (!fetched) void fetchReadme();
    };

    /* React-Markdown component map ------------------------------------ */
    const mdComponents: Components = {
        h1: ({ children }) => (
            <h1
                className="text-2xl font-bold mt-4 mb-2"
                style={{ color: 'hsl(var(--text-primary))' }}
            >
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2
                className="text-xl font-semibold mt-4 mb-2"
                style={{ color: 'hsl(var(--text-muted))' }}
            >
                {children}
            </h2>
        ),
        p: ({ children }) => <p className="mb-2">{children}</p>,
        li: ({ children }) => <li className="list-disc ml-6 mb-1">{children}</li>,
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
        img: ({ src = '', alt = '' }) => (
            <div className="relative w-full my-6 rounded-lg overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    width={800}
                    height={400}
                    className="rounded-lg shadow-md w-auto h-auto max-w-full mx-auto"
                />
            </div>
        ),
        code: codeComponent, // 👈 the correctly-typed renderer
        pre: () => null, // outer <pre> handled inside `code`
    };

    /* Render ---------------------------------------------------------- */
    return (
        <div className="mt-10 w-full max-w-4xl mx-auto px-4">
            <button
                onClick={handleToggle}
                className="w-full sm:w-auto font-semibold py-2 px-4 rounded border transition"
                style={{
                    backgroundColor: 'hsl(var(--surface))',
                    color: 'hsl(var(--primary))',
                    borderColor: 'hsl(var(--primary))',
                }}
            >
                {isOpen ? 'Hide README' : 'Show README'}
            </button>

            {isOpen && (
                <div
                    className="mt-6 rounded-xl overflow-hidden border"
                    style={{
                        backgroundColor: 'hsl(var(--card-bg))',
                        borderColor: 'hsl(var(--card-hover))',
                    }}
                >
                    {loading ? (
                        <div className="flex justify-center items-center h-24">
                            <span className="loading loading-bars loading-md" />
                        </div>
                    ) : error || !markdown ? (
                        <p
                            className="text-sm px-4 py-3 font-medium"
                            style={{ color: 'hsl(var(--accent))' }}
                        >
                            ⚠️ README not available — this repo may be private or missing a
                            README.md.
                        </p>
                    ) : (
                        <div className="overflow-x-auto p-4">
                            <div className="prose prose-sm md:prose max-w-none dark:prose-invert break-words">
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
