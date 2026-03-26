"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useTheme } from "next-themes";
import { Clock, Headphones, ArrowLeft } from "lucide-react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import sql from "react-syntax-highlighter/dist/esm/languages/hljs/sql";
import ts from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import atomOneLight from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";
import type { Components } from "react-markdown";
import type { BlogPost as BlogPostType } from "@/data/blogPosts";
import Link from "next/link";
import { motion } from "framer-motion";

SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage("ts", ts);
SyntaxHighlighter.registerLanguage("tsx", ts);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("sh", bash);

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <div
        className="h-full transition-[width] duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--color-accent), #818cf8)",
        }}
      />
    </div>
  );
}

export default function BlogPost({ post }: { post: BlogPostType }) {
  const { resolvedTheme } = useTheme();
  const syntaxTheme = resolvedTheme === "light" ? atomOneLight : atomOneDark;

  const mdComponents: Components = {
    h1: ({ children }) => (
      <h1 className="mt-12 mb-4 text-3xl font-heading font-bold text-text-bright">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-heading font-semibold text-text-bright flex items-center gap-3">
        <span className="w-8 h-px bg-accent/40 flex-shrink-0" />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-heading font-semibold text-text-bright">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-5 text-base leading-[1.8] text-text-primary">
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-text-bright">{children}</strong>
    ),
    ul: ({ children }) => (
      <ul className="mb-5 ml-1 space-y-2 list-none">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-5 space-y-3 list-none counter-reset-item">{children}</ol>
    ),
    li: ({ children, ...props }) => {
      const ordered = (props as Record<string, unknown>).ordered;
      if (ordered) {
        return (
          <li className="flex gap-3 text-base leading-[1.8] text-text-primary">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-dim text-accent text-xs font-mono flex items-center justify-center mt-1">
              {(props as Record<string, unknown>).index !== undefined
                ? String(Number((props as Record<string, unknown>).index) + 1)
                : ""}
            </span>
            <span className="flex-1">{children}</span>
          </li>
        );
      }
      return (
        <li className="flex gap-3 text-base leading-[1.8] text-text-primary">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-[0.65rem]" />
          <span className="flex-1">{children}</span>
        </li>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="mb-5 pl-4 border-l-2 border-accent/40 text-text-muted italic">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      const match = /language-(\w+)/.exec(className || "");
      const lang = match ? match[1] : "";

      if (!className) {
        return (
          <code className="text-sm font-mono px-1.5 py-0.5 rounded bg-accent-dim text-accent border border-border">
            {children}
          </code>
        );
      }

      return (
        <div className="mb-6 rounded-lg overflow-hidden border border-border">
          {lang && (
            <div className="px-4 py-2 bg-surface-light border-b border-border flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent/60" />
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                {lang}
              </span>
            </div>
          )}
          <SyntaxHighlighter
            language={lang || "text"}
            style={syntaxTheme}
            customStyle={{
              margin: 0,
              padding: "1.25rem",
              background: "var(--color-surface-light)",
              fontSize: "0.85rem",
              lineHeight: "1.7",
            }}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      );
    },
    pre: ({ children }) => <>{children}</>,
    hr: () => (
      <hr className="my-10 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    ),
  };

  return (
    <>
      <ReadingProgress />
      <article className="max-w-3xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono transition-colors duration-200 hover:-translate-x-0.5"
            style={{ color: "var(--color-text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-muted)")
            }
          >
            <ArrowLeft size={14} />
            Back to blog
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <time
              className="text-sm font-mono"
              style={{ color: "var(--color-text-muted)" }}
            >
              {post.date}
            </time>
            {post.readingTime && (
              <span
                className="flex items-center gap-1 text-sm font-mono"
                style={{ color: "var(--color-text-muted)" }}
              >
                <Clock size={14} />
                {post.readingTime}
              </span>
            )}
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight mb-5"
            style={{ color: "var(--color-text-bright)" }}
          >
            {post.title}
          </h1>

          <p
            className="text-lg leading-relaxed mb-5"
            style={{ color: "var(--color-text-muted)" }}
          >
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
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

          {/* Separator */}
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(90deg, var(--color-accent), rgba(129, 140, 248, 0.4), transparent)",
            }}
          />
        </motion.header>

        {post.audio && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-5 mb-8"
          >
            <div
              className="flex items-center gap-2 text-sm mb-3"
              style={{ color: "var(--color-text-muted)" }}
            >
              <Headphones
                size={16}
                style={{ color: "var(--color-accent)" }}
              />
              <span
                className="font-mono font-medium"
                style={{ color: "var(--color-text-bright)" }}
              >
                Listen to this article
              </span>
            </div>
            <audio controls preload="none" className="w-full h-10">
              <source src={post.audio} type="audio/mp4" />
              Your browser does not support the audio element.
            </audio>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-6 md:p-10"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {post.content}
          </ReactMarkdown>
        </motion.div>
      </article>
    </>
  );
}
