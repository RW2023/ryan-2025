"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin } from "lucide-react";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const formspreeAction = formspreeId
  ? `https://formspree.io/f/${formspreeId}`
  : undefined;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-text-bright">
            Contact
          </h2>
          <div className="w-16 h-0.5 bg-accent/40 mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-text-muted leading-relaxed text-lg">
              Have a project in mind, want to collaborate, or just want to say
              hello? I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col gap-4 pt-4">
              <a
                href="https://github.com/RW2023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-text-muted hover:text-accent transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-light border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Github size={18} />
                </div>
                <span className="font-mono text-sm">github.com/RW2023</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-e-wilson/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-text-muted hover:text-accent transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-light border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Linkedin size={18} />
                </div>
                <span className="font-mono text-sm">linkedin.com/in/ryan-e-wilson</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            action={formspreeAction}
            method="POST"
            target="_blank"
            onSubmit={() => setSubmitted(true)}
            className="glass-card p-6 md:p-8 space-y-5"
          >
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-mono text-text-muted uppercase tracking-wider"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-surface-light border border-border text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-mono text-text-muted uppercase tracking-wider"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-surface-light border border-border text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-mono text-text-muted uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-surface-light border border-border text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-accent text-accent-on font-semibold font-heading hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Send Message
              <Send size={16} />
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-accent font-mono"
              >
                Message sent. I&apos;ll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
