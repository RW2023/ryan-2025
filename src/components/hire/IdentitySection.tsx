"use client";

import { motion } from "framer-motion";
import { Hammer, Target, Network } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const traits = [
  {
    icon: Hammer,
    title: "Self-Taught. Production-Tested.",
    description:
      "No CS degree. I learned every tool by shipping real systems with it. n8n, Next.js, Python, Docker, PostgreSQL, Claude API. All picked up by building, debugging, and deploying production code.",
  },
  {
    icon: Target,
    title: "50+ Debug Sessions. Zero Unsolved.",
    description:
      "I document every non-trivial bug I fix. Root cause analysis, not band-aids. That discipline means fewer recurring issues and faster resolution when something does break.",
  },
  {
    icon: Network,
    title: "Systems Thinker. Business-First.",
    description:
      "I trace problems to root causes, not symptoms. I see how data flows, tools connect, and processes create bottlenecks. Then I build the system that eliminates them.",
  },
];

export default function IdentitySection() {
  return (
    <section className="relative py-24 md:py-32 px-6" aria-label="About Ryan Wilson - Self-taught automation engineer and full-stack developer">
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
            Who I Am
          </span>
          <h2
            className="text-3xl md:text-5xl font-heading font-bold mt-3"
            style={{ color: "var(--color-text-bright)" }}
          >
            Built by Shipping, Not by Studying
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Career changer. Built all of this in weeks, not years. Every skill was earned by solving a real problem for a real system.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {traits.map((trait) => (
            <motion.div
              key={trait.title}
              variants={fadeUp}
              className="glass-card p-8 text-center group hover:border-[var(--color-border-hover)] transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{
                  background: "rgba(245, 158, 11, 0.08)",
                  border: "1px solid rgba(245, 158, 11, 0.15)",
                }}
              >
                <trait.icon size={24} style={{ color: "var(--color-secondary)" }} />
              </div>
              <h3
                className="text-lg font-heading font-semibold mb-3"
                style={{ color: "var(--color-text-bright)" }}
              >
                {trait.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {trait.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
