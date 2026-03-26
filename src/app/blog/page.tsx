"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function BlogPage() {
  const [latest, ...rest] = blogPosts;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-14"
      >
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "var(--color-accent)" }}
        >
          Writing
        </span>
        <h1
          className="text-4xl md:text-5xl font-heading font-bold mt-3"
          style={{ color: "var(--color-text-bright)" }}
        >
          Blog
        </h1>
        <div
          className="w-16 h-0.5 mt-4"
          style={{ background: "rgba(0, 212, 255, 0.4)" }}
        />
        <p
          className="text-lg mt-4 max-w-xl"
          style={{ color: "var(--color-text-muted)" }}
        >
          Notes from a builder. Real systems, real architecture, no hype.
        </p>
      </motion.div>

      {blogPosts.length === 0 ? (
        <p style={{ color: "var(--color-text-muted)" }}>
          No posts yet. Check back soon.
        </p>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-8"
        >
          {/* Featured latest post */}
          {latest && (
            <motion.div variants={fadeUp}>
              <Link href={`/blog/${latest.slug}`} className="group block">
                <article
                  className="glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-5 transition-all duration-500"
                >
                  {/* Left: content (3 cols) */}
                  <div className="lg:col-span-3 p-7 md:p-9 flex flex-col justify-center gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border"
                        style={{
                          color: "var(--color-accent)",
                          borderColor: "rgba(0, 212, 255, 0.2)",
                          background: "rgba(0, 212, 255, 0.06)",
                        }}
                      >
                        Latest
                      </span>
                      <time
                        className="text-xs font-mono"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {latest.date}
                      </time>
                      {latest.readingTime && (
                        <span
                          className="flex items-center gap-1 text-xs font-mono"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          <Clock size={12} />
                          {latest.readingTime}
                        </span>
                      )}
                    </div>

                    <h2
                      className="text-2xl md:text-3xl font-heading font-bold leading-tight transition-colors duration-300 group-hover:text-[var(--color-accent)]"
                      style={{ color: "var(--color-text-bright)" }}
                    >
                      {latest.title}
                      <ArrowUpRight
                        size={20}
                        className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </h2>

                    <p
                      className="leading-relaxed"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {latest.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {latest.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-md border"
                          style={{
                            background: "var(--color-accent-dim)",
                            color: "rgba(0, 212, 255, 0.8)",
                            borderColor: "rgba(0, 212, 255, 0.1)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: decorative block (2 cols) */}
                  <div
                    className="hidden lg:flex lg:col-span-2 items-center justify-center relative overflow-hidden"
                    style={{ background: "var(--color-surface-light)" }}
                  >
                    {/* Large ghost number */}
                    <span
                      className="text-[120px] font-heading font-bold select-none"
                      style={{ color: "rgba(0, 212, 255, 0.04)" }}
                    >
                      01
                    </span>
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, transparent 40%, rgba(0, 212, 255, 0.03) 100%)",
                      }}
                    />
                  </div>
                </article>
              </Link>
            </motion.div>
          )}

          {/* Rest of posts */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <BlogCard post={post} index={i + 2} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
