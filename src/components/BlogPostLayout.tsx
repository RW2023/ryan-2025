// src/components/BlogPostLayout.tsx
import { ReactNode } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

interface BlogPostLayoutProps {
    title: string;
    date: string;
    author: string;
    featuredImage?: string;
    children: ReactNode;
}

export default function BlogPostLayout({
    title,
    date,
    author,
    featuredImage,
    children,
}: BlogPostLayoutProps) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const shareUrl = `${siteUrl}/blog/${title.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {featuredImage && (
                <div className="mb-6 relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={featuredImage}
                        alt={title}
                        width={1200}
                        height={600}
                        className="object-cover w-full h-96"
                        priority
                    />
                </div>
            )}
            <header className="mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">{title}</h1>
                <p className="text-lg">{date} • By {author}</p>
                <hr className="mt-4 border-t border-gray-200" />
            </header>
            <article className="prose prose-lg max-w-none">{children}</article>
            <div className="mt-8 flex justify-center">
                <Button href="/blog" label="Back to Posts" />
            </div>
        </div>
    );
}
