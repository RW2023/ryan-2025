"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronDown } from "lucide-react";
import type { Components } from "react-markdown";

const accordionMdComponents: Components = {
  p: ({ children }) => (
    <p className="mb-4 text-base leading-[1.8] text-text-primary">{children}</p>
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
  em: ({ children }) => (
    <em className="italic text-text-primary">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-4 pl-4 border-l-2 border-accent/50 text-text-muted italic">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-1 space-y-2 list-none">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="flex gap-3 text-base leading-[1.8] text-text-primary">
      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-[0.65rem]" />
      <span className="flex-1">{children}</span>
    </li>
  ),
};

export type AccordionSection = {
  title: string;
  teaser?: string;
  body: string;
};

export default function BlogAccordion({
  sections,
  afterContent,
}: {
  sections: AccordionSection[];
  afterContent?: string;
}) {
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  const setAll = (open: boolean) => {
    detailsRefs.current.forEach((d) => {
      if (d) d.open = open;
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="my-10"
    >
      <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-border">
        <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
          {sections.length} sections
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setAll(true)}
            className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
          >
            Open all
          </button>
          <button
            type="button"
            onClick={() => setAll(false)}
            className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
          >
            Close all
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {sections.map((s, i) => (
          <details
            key={i}
            ref={(el) => {
              detailsRefs.current[i] = el;
            }}
            open={i === 0}
            className="group glass-card overflow-hidden"
          >
            <summary className="cursor-pointer p-5 flex items-start gap-4 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span className="text-xs font-mono text-accent tracking-widest pt-1.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-heading font-semibold text-text-bright leading-tight">
                  {s.title}
                </h3>
                {s.teaser && (
                  <p className="text-sm text-text-muted mt-1.5 italic">
                    {s.teaser}
                  </p>
                )}
              </div>
              <ChevronDown
                size={18}
                className="flex-shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180 group-open:text-accent mt-1.5"
              />
            </summary>
            <div className="px-5 pb-5 pt-4 border-t border-border">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={accordionMdComponents}
              >
                {s.body}
              </ReactMarkdown>
            </div>
          </details>
        ))}
      </div>

      {afterContent && (
        <div className="mt-10 pt-6 border-t border-border">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={accordionMdComponents}
          >
            {afterContent}
          </ReactMarkdown>
        </div>
      )}
    </motion.section>
  );
}
