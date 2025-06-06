// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import BlogPostLayout from '@/components/BlogPostLayout';
import MDXWrapper from '@/components/MDXWrapper';
import { getAllPosts, getPostBySlug } from '@/data/posts';

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const postMeta = getPostBySlug(slug);
    if (!postMeta) return notFound();

    try {
        // Dynamically import the MDX file for this post
        const { default: Content } = await import(`@/../content/posts/${slug}.mdx`);

        return (
            <BlogPostLayout
                title={postMeta.frontMatter.title}
                date={postMeta.frontMatter.date}
                author={postMeta.frontMatter.author}
                featuredImage={postMeta.frontMatter.featuredImage}
            >
                <MDXWrapper>
                    <Content />
                </MDXWrapper>
            </BlogPostLayout>
        );
    } catch {
        return notFound();
    }
}
