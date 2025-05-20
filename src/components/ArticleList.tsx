// src/components/ArticleList.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Post {
    slug: string;
    frontMatter: {
        title: string;
        date: string;
        author: string;
        featuredImage?: string;
        keywords?: string[];
    };
}

interface ArticleListProps {
    posts: Post[];
}

const ArticleList: React.FC<ArticleListProps> = ({ posts }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredPosts = posts.filter((post) => {
        const query = searchQuery.toLowerCase();
        return (
            post.frontMatter.title.toLowerCase().includes(query) ||
            post.frontMatter.keywords?.some((keyword) => keyword.toLowerCase().includes(query))
        );
    });

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hover: { scale: 1.03 },
    };

    return (
        <div>
            <header className="mb-6">
                <p className="text-lg text-paragraph dark:text-dark-paragraph">
                    Explore my latest articles..
                </p>
            </header>

            <div className="mb-6">
                <label htmlFor="search" className="sr-only">
                    Search posts
                </label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search posts by title or keywords..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full p-3 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-[#2e3c45] dark:text-gray-200 dark:placeholder-gray-400 dark:border-dark-stroke dark:focus:ring-dark-primary"
                    aria-label="Search posts"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <motion.div
                            key={post.slug}
                            className="p-4 bg-background dark:bg-[#2e3c45] rounded-lg shadow-lg dark:shadow-lg border dark:border-dark-stroke"
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            variants={cardVariants}
                        >
                            {post.frontMatter.featuredImage && (
                                <Link href={`/blog/${post.slug}`}>
                                    <Image
                                        src={post.frontMatter.featuredImage}
                                        alt={post.frontMatter.title}
                                        width={400}
                                        height={250}
                                        className="object-cover w-full h-48 rounded-t-lg"
                                    />
                                </Link>
                            )}
                            <div className="p-4">
                                <Link href={`/blog/${post.slug}`}>
                                    <h3 className="text-2xl font-bold text-headline dark:text-dark-headline">
                                        {post.frontMatter.title}
                                    </h3>
                                </Link>
                                <p className="text-paragraph dark:text-dark-paragraph">
                                    {post.frontMatter.date} - By {post.frontMatter.author}
                                </p>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-lg text-paragraph dark:text-dark-paragraph">
                        No posts found. Try a different search term.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ArticleList;
