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
    params: { slug: string };
}) {
    const { slug } = params;

    const postMeta = getPostBySlug(slug);
    if (!postMeta) return notFound();

    try {
        const { default: Content } = await import(`../../../posts/${slug}.mdx`);

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
