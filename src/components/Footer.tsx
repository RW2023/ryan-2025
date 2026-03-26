"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span
            className="font-heading text-lg font-bold tracking-tight"
            style={{ color: "var(--color-accent)" }}
          >
            RW<span style={{ color: "var(--color-text-muted)" }}>.</span>
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/RW2023"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: "var(--color-text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-e-wilson/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: "var(--color-text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <p
          className="text-sm font-mono"
          style={{ color: "var(--color-text-muted)" }}
        >
          &copy; {new Date().getFullYear()} Ryan Wilson
        </p>

        <p
          className="text-xs font-mono"
          style={{ color: "var(--color-text-muted)", opacity: 0.5 }}
        >
          Next.js &middot; Tailwind CSS &middot; Framer Motion
        </p>
      </div>
    </footer>
  );
}
