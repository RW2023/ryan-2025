"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Loader2, Mail, MessageSquare } from "lucide-react";

const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;
const webhookSecret = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_SECRET;

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!webhookUrl) return;

    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check (bot filled the hidden field)
    if (data.get("website")) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": webhookSecret || "",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          source_page: "homepage",
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
    <section id="contact" className="relative py-32 px-6">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.15), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Get in Touch
          </span>
          <h2
            className="text-4xl md:text-5xl font-heading font-bold mt-3"
            style={{ color: "var(--color-text-bright)" }}
          >
            Contact
          </h2>
          <div
            className="w-16 h-0.5 mt-4"
            style={{ background: "rgba(0, 212, 255, 0.4)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Message + Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                Have a project in mind, want to collaborate, or just want to say
                hello? I&apos;d love to hear from you.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)", opacity: 0.7 }}
              >
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                {
                  icon: Github,
                  label: "github.com/RW2023",
                  href: "https://github.com/RW2023",
                },
                {
                  icon: Linkedin,
                  label: "linkedin.com/in/ryan-e-wilson",
                  href: "https://www.linkedin.com/in/ryan-e-wilson/",
                },
                {
                  icon: Mail,
                  label: "ryanwilson@ryan-w.dev",
                  href: "mailto:ryanwilson@ryan-w.dev",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-3 group transition-all duration-200 hover:-translate-x-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-text-muted)")
                  }
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200"
                    style={{
                      background: "var(--color-surface-light)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <link.icon size={18} />
                  </div>
                  <span className="font-mono text-sm">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Availability note */}
            <div
              className="glass-card p-4 flex items-start gap-3"
            >
              <MessageSquare
                size={16}
                className="mt-0.5 flex-shrink-0"
                style={{ color: "var(--color-accent)" }}
              />
              <div>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-bright)" }}
                >
                  Open to freelance and contract work
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Available for full-stack builds, automation pipelines, and AI integrations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 space-y-5"
          >
            {/* Honeypot field */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute opacity-0 h-0 w-0 overflow-hidden"
              aria-hidden="true"
            />

            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-mono uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                style={{
                  background: "var(--color-surface-light)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.5)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 212, 255, 0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-mono uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                style={{
                  background: "var(--color-surface-light)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.5)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 212, 255, 0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-mono uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-all duration-200"
                style={{
                  background: "var(--color-surface-light)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.5)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 212, 255, 0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-semibold font-heading overflow-hidden transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-accent-on)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === "sending" ? (
                  <>
                    Sending...
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent), #818cf8)",
                }}
              />
            </button>

            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm font-mono"
                style={{ color: "var(--color-accent)" }}
              >
                Message sent. I&apos;ll get back to you soon.
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm font-mono text-red-400"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
