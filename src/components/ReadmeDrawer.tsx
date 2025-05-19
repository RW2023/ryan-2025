// components/ReadmeDrawer.tsx
'use client';

import { useState, useEffect } from 'react';
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
    const [hasReadme, setHasReadme] = useState(false);

    useEffect(() => {
        if (!githubUrl) return;

        const checkReadme = async () => {
            try {
                const match = githubUrl.match(/github\.com\/(.+?)\/(.+?)(?:\.git)?(?:\/|$)/);
                if (!match) return;

                const [, user, repo] = match;
                const readmeUrl = `https://raw.githubusercontent.com/${user}/${repo}/main/README.md`;

                const res = await fetch(readmeUrl);
                if (!res.ok) return;

                const text = await res.text();
                setMarkdown(text);
                setHasReadme(true);
            } catch {
                setHasReadme(false);
            }
        };

        checkReadme();
    }, [githubUrl]);

    useEffect(() => {
        if (!isOpen || !hasReadme) return;
        setError(false); // reset error state if retrying
    }, [isOpen, hasReadme]);

    if (!hasReadme) return null;

    return (
        <div className="mt-8 w-full max-w-4xl mx-auto px-4">
            <button
                className="btn btn-outline btn-primary mb-4 w-full sm:w-auto"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Hide README' : 'Show README'}
            </button>

            {isOpen && (
                <div className="collapse collapse-open border border-base-300 bg-base-100 rounded-box p-4">
                    {loading ? (
                        <div className="flex justify-center items-center h-24">
                            <span className="loading loading-bars loading-md"></span>
                        </div>
                    ) : error ? (
                        <p className="text-error">Failed to load README from GitHub.</p>
                    ) : (
                        <div className="prose prose-sm md:prose max-w-full dark:prose-invert">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h1: (props) => <h1 className="text-2xl font-bold mt-4 mb-2" {...props} />,
                                    h2: (props) => <h2 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                                    p: (props) => <p className="mb-2" {...props} />,
                                    li: (props) => <li className="list-disc ml-6" {...props} />,
                                    a: (props) => (
                                        <a
                                            className="text-primary underline hover:text-primary-focus"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            {...props}
                                        />
                                    ),
                                    img: ({ src = '', alt = '' }) => (
                                        <div className="relative w-full max-w-full my-4 rounded-lg overflow-hidden">
                                            <Image
                                                src={src}
                                                alt={alt}
                                                width={800}
                                                height={400}
                                                className="rounded-lg shadow-md"
                                            />
                                        </div>
                                    ),
                                }}
                            >
                                {markdown}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
