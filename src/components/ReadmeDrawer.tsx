// components/ReadmeDrawer.tsx
'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

interface ReadmeDrawerProps {
    githubUrl: string;
}

export default function ReadmeDrawer({ githubUrl }: ReadmeDrawerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [markdown, setMarkdown] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [fetched, setFetched] = useState(false);

    const fetchReadme = async () => {
        setLoading(true);
        setError(false);

        try {
            const match = githubUrl.match(/github\.com\/(.+?)\/(.+?)(?:\.git)?(?:\/|$)/);
            if (!match) throw new Error();

            const [, user, repo] = match;
            const branches = ['main', 'master'];
            let content = '';
            let found = false;

            for (const branch of branches) {
                const url = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/README.md`;
                const res = await fetch(url);
                if (res.ok) {
                    content = await res.text();
                    found = true;
                    break;
                }
            }

            if (!found) throw new Error();

            setMarkdown(content);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
            setFetched(true);
        }
    };

    const handleToggle = () => {
        const next = !isOpen;
        setIsOpen(next);
        if (next && !fetched) {
            fetchReadme();
        }
    };

    return (
        <div className="mt-8 w-full max-w-4xl mx-auto px-4">
            <button
                className="btn btn-outline btn-primary mb-4 w-full sm:w-auto"
                onClick={handleToggle}
            >
                {isOpen ? 'Hide README' : 'Show README'}
            </button>

            {isOpen && (
                <div className="collapse collapse-open border border-base-300 bg-base-100 rounded-box p-4">
                    {loading ? (
                        <div className="flex justify-center items-center h-24">
                            <span className="loading loading-bars loading-md"></span>
                        </div>
                    ) : error || !markdown ? (
                        <p className="text-error">README not available as this repository is private.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <div className="prose prose-sm md:prose max-w-full dark:prose-invert break-words">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        h1: ({ children, ...props }) => (
                                            <h1 className="text-2xl font-bold mt-4 mb-2" {...props}>
                                                {children}
                                            </h1>
                                        ),
                                        h2: ({ children, ...props }) => (
                                            <h2 className="text-xl font-semibold mt-4 mb-2" {...props}>
                                                {children}
                                            </h2>
                                        ),
                                        p: ({ children, ...props }) => (
                                            <p className="mb-2" {...props}>
                                                {children}
                                            </p>
                                        ),
                                        li: ({ children, ...props }) => (
                                            <li className="list-disc ml-6 mb-1" {...props}>
                                                {children}
                                            </li>
                                        ),
                                        a: ({ children, href, ...props }) => (
                                            <a
                                                href={href}
                                                className="text-primary underline hover:text-primary-focus break-all"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                {...props}
                                            >
                                                {children}
                                            </a>
                                        ),
                                        img: ({ src = '', alt = '' }) => (
                                            <div className="relative w-full max-w-full my-4 rounded-lg overflow-hidden">
                                                <Image
                                                    src={src}
                                                    alt={alt}
                                                    width={800}
                                                    height={400}
                                                    className="rounded-lg shadow-md w-auto"
                                                />
                                            </div>
                                        ),
                                        code: (
                                            { inline, className, children, ...props }: {
                                                inline?: boolean;
                                                className?: string;
                                                children?: React.ReactNode;
                                            } & React.HTMLAttributes<HTMLElement>
                                        ) =>
                                            inline ? (
                                                <code
                                                    className={`bg-gray-100 dark:bg-gray-800 px-1 rounded break-all ${className}`}
                                                    {...props}
                                                >
                                                    {children}
                                                </code>
                                            ) : (
                                                <pre
                                                    className="w-full overflow-x-auto bg-gray-200 dark:bg-gray-900 rounded p-2 mb-4"
                                                    {...props}
                                                >
                                                    <code>{children}</code>
                                                </pre>
                                            ),
                                        pre: (
                                            { children, ...props }: React.HTMLAttributes<HTMLPreElement> & {
                                                children?: React.ReactNode;
                                            }
                                        ) => (
                                            <pre className="hidden" {...props}>
                                                {children}
                                            </pre>
                                        ),
                                    }}
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
