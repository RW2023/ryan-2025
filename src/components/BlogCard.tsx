"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

export default function BlogCard({
  post,
  index,
}: {
  post: BlogPost;
  index?: number;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="glass-card p-6 h-full flex flex-col relative overflow-hidden transition-all duration-300"
      >
        {/* Ghost number */}
        {index !== undefined && (
          <span
            className="absolute top-3 right-4 text-3xl font-heading font-bold select-none"
            style={{ color: "rgba(0, 212, 255, 0.04)" }}
          >
            {String(index).padStart(2, "0")}
          </span>
        )}

        <div className="flex items-center gap-3 mb-3">
          <time
            className="text-xs font-mono"
            style={{ color: "var(--color-text-muted)" }}
          >
            {post.date}
          </time>
          {post.readingTime && (
            <span
              className="flex items-center gap-1 text-xs font-mono"
              style={{ color: "var(--color-text-muted)" }}
            >
              <Clock size={12} />
              {post.readingTime}
            </span>
          )}
        </div>

        <h2
          className="text-lg font-heading font-semibold mb-3 flex items-start gap-2 transition-colors duration-200 group-hover:text-[var(--color-accent)]"
          style={{ color: "var(--color-text-bright)" }}
        >
          <span className="flex-1">{post.title}</span>
          <ArrowUpRight
            size={16}
            className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
          />
        </h2>

        <p
          className="text-sm leading-relaxed mb-4 flex-1"
          style={{ color: "var(--color-text-muted)" }}
        >
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md border"
              style={{
                background: "var(--color-accent-dim)",
                color: "rgba(0, 212, 255, 0.8)",
                borderColor: "rgba(0, 212, 255, 0.1)",
              }}
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span
              className="text-[11px] font-mono px-2 py-0.5"
              style={{ color: "var(--color-text-muted)" }}
            >
              +{post.tags.length - 3}
            </span>
          )}
        </div>
      </motion.article>
    </Link>
  );
}
