// app/blog/page.tsx
import ArticleList from '@/components/ArticleList';

export default async function BlogPage() {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/posts`, {
        next: { revalidate: 60 },
    });
    const posts = await res.json();

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <ArticleList posts={posts} />
        </main>
    );
}
