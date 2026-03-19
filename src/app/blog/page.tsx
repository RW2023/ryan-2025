"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";
import { fadeUp, stagger } from "@/lib/motion";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-12"
      >
        <h1 className="text-4xl font-heading font-bold text-text-bright mb-3">
          Blog
        </h1>
        <p className="text-text-muted text-lg">
          Notes from a builder. Real systems, real architecture, no hype.
        </p>
      </motion.div>

      {blogPosts.length === 0 ? (
        <p className="text-text-muted">No posts yet. Check back soon.</p>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid gap-6 md:grid-cols-2"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={fadeUp}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
