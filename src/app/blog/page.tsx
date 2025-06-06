// app/blog/page.tsx
import ArticleList from '@/components/ArticleList';
import { getAllPosts } from '@/data/posts';

export default function BlogPage() {
    // Read all posts directly from the content directory
    const posts = getAllPosts();

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <ArticleList posts={posts} />
        </main>
    );
}
