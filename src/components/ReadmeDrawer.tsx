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
                    ) : error ? (
                        <p className="text-error">README not available for private repositories.</p>
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
