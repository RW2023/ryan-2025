"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="glass-card p-6 h-full flex flex-col"
      >
        <div className="flex items-center gap-3 mb-3">
          <time className="text-xs font-mono text-text-muted">{post.date}</time>
          {post.readingTime && (
            <span className="flex items-center gap-1 text-xs font-mono text-text-muted">
              <Clock size={12} />
              {post.readingTime}
            </span>
          )}
        </div>

        <h2 className="text-lg font-heading font-semibold text-text-bright mb-3 flex items-center gap-2 group-hover:text-accent transition-colors duration-200">
          {post.title}
          <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </h2>

        <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded bg-accent-dim text-accent border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </Link>
  );
}
