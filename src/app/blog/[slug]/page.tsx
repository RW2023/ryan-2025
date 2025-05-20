// src/app/blog/[slug]/page.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMDXComponents } from '@/components/mdx-components';
import BlogPostLayout from '@/components/BlogPostLayout';

export const dynamicParams = true;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const res = await fetch(
        `${baseUrl}/api/posts/${slug}`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) return notFound();

    const post = await res.json();
    const components = getMDXComponents({});

    return (
        <BlogPostLayout
            title={post.frontMatter.title}
            date={post.frontMatter.date}
            author={post.frontMatter.author}
            featuredImage={post.frontMatter.featuredImage}
        >
            <MDXRemote source={post.content} components={components} />
        </BlogPostLayout>
    );
}
