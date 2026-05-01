"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, ArrowUpRight } from "lucide-react";

const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;
const webhookSecret = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_SECRET;

export default function BlogCTA({
  postSlug,
  title,
  body,
}: {
  postSlug?: string;
  title?: string;
  body?: string;
}) {
  const headline = title || "Want to work together?";
  const description =
    body ||
    "I'm Ryan. I build full-stack apps, AI integrations, and the infrastructure that connects them. If something here caught your eye, reach out.";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!webhookUrl) return;

    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: webhookSecret || "",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          source_page: `blog/${postSlug || "unknown"}`,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mt-12"
    >
      <div className="glass-card p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Who I am */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-accent tracking-widest uppercase">
              About the author
            </span>
            <h3 className="text-2xl font-heading font-bold text-text-bright">
              {headline}
            </h3>
            <p className="text-text-muted leading-relaxed">{description}</p>
            <div className="flex gap-4 pt-2">
              <a
                href="/hire"
                className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:underline underline-offset-2 transition-colors"
              >
                See my services
                <ArrowUpRight size={14} />
              </a>
              <a
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm font-mono text-text-muted hover:text-accent transition-colors"
              >
                View portfolio
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: Compact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute opacity-0 h-0 w-0 overflow-hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label
                  htmlFor="cta-name"
                  className="text-xs font-mono text-text-muted uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  id="cta-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-3 py-2.5 rounded-lg bg-surface-light border border-border text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="cta-email"
                  className="text-xs font-mono text-text-muted uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  id="cta-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-3 py-2.5 rounded-lg bg-surface-light border border-border text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="cta-message"
                className="text-xs font-mono text-text-muted uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="cta-message"
                name="message"
                required
                rows={3}
                placeholder="Tell me about your project..."
                className="w-full px-3 py-2.5 rounded-lg bg-surface-light border border-border text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-lg bg-accent text-accent-on font-semibold font-heading hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {status === "sending" ? (
                <>
                  Sending...
                  <Loader2 size={14} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send size={14} />
                </>
              )}
            </button>

            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-accent font-mono"
              >
                Sent. I&apos;ll get back to you soon.
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-red-400 font-mono"
              >
                Something went wrong. Try again.
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
}
