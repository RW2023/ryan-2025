"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Database,
  Brain,
  MessageCircle,
  BookOpen,
  GitPullRequest,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const supportStrengths = [
  {
    icon: Wrench,
    title: "Technical Troubleshooting",
    description:
      "Hardware, software, networking, and API issues. I isolate which link in the chain actually failed and drive it to resolution instead of guessing.",
  },
  {
    icon: Database,
    title: "Database Literacy",
    description:
      "I query the database directly to confirm a customer's real state, spot data problems, and hand engineering a precise reproduction, not a vague 'it is broken.'",
  },
  {
    icon: Brain,
    title: "AI-Assisted Support",
    description:
      "I build with Claude and LLMs every day. I use AI support tooling fluently, and improve it, exactly as support teams roll out AI agents.",
  },
  {
    icon: MessageCircle,
    title: "Plain-Language Communication",
    description:
      "I translate a complex technical problem into a calm, clear answer that a non-technical customer can actually act on.",
  },
  {
    icon: BookOpen,
    title: "Knowledge-Base Authoring",
    description:
      "I document every non-trivial fix. A 30+ entry production gotcha library is the proof: fewer repeat tickets and a smarter team.",
  },
  {
    icon: GitPullRequest,
    title: "Escalations Engineers Respect",
    description:
      "Because I speak the engineering language, my escalations arrive with reproduction steps and a root-cause hypothesis, shortening the loop to a fix.",
  },
];

export default function SupportSection() {
  return (
    <section
      id="support"
      className="relative py-24 md:py-32 px-6"
      aria-label="Customer and technical support strengths backed by an engineering background"
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.15), transparent)" }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "var(--color-secondary)" }}
          >
            Support, Engineered
          </span>
          <h2
            className="text-3xl md:text-5xl font-heading font-bold mt-3"
            style={{ color: "var(--color-text-bright)" }}
          >
            An Engineer on the Support Desk
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Most support reps follow a script. I read the system. The same coding, database, and AI skills I build with mean I can reproduce the bug, query the data, and resolve the tickets others escalate, then document the fix so it never comes back.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {supportStrengths.map((strength) => (
            <motion.div
              key={strength.title}
              variants={fadeUp}
              className="glass-card p-6 group hover:border-[var(--color-border-hover)] transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-200"
                style={{
                  background: "rgba(245, 158, 11, 0.08)",
                  border: "1px solid rgba(245, 158, 11, 0.15)",
                }}
              >
                <strength.icon size={20} style={{ color: "var(--color-secondary)" }} />
              </div>
              <h3
                className="text-lg font-heading font-semibold mb-2"
                style={{ color: "var(--color-text-bright)" }}
              >
                {strength.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {strength.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
