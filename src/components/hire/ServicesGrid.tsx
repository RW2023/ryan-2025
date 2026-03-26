"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Brain,
  Settings,
  Code2,
  Database,
  Server,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "n8n pipelines that scrape, score, route, and deliver. I automated a proposal system that processes 1,500+ job listings without manual input.",
  },
  {
    icon: Brain,
    title: "AI Integration Engineering",
    description:
      "Claude API, LLM scoring engines, intelligent agents, and MCP servers. I build AI systems that reason about your data, not just move it around.",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description:
      "I map existing workflows, find the bottlenecks, and build the system that removes them. Fewer manual steps, faster outcomes, lower error rates.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Next.js, React, Node.js, Python, PostgreSQL. Production web apps, real-time dashboards, REST APIs, and polished user interfaces deployed on Vercel.",
  },
  {
    icon: Database,
    title: "Data Pipelines",
    description:
      "Scraping, transformation, storage in Neon PostgreSQL, and 9+ real-time dashboards. I build the plumbing that keeps your data flowing and visible.",
  },
  {
    icon: Server,
    title: "Infrastructure and DevOps",
    description:
      "Docker containers, VPS deployment, CI/CD pipelines, systemd services, and monitoring. Production environments that stay up and scale when you need them to.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-24 md:py-32 px-6" aria-label="Automation engineering, AI integration, and full-stack development services">
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.15), transparent)" }}
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
            style={{ color: "var(--color-accent)" }}
          >
            What I Build
          </span>
          <h2
            className="text-3xl md:text-5xl font-heading font-bold mt-3"
            style={{ color: "var(--color-text-bright)" }}
          >
            Automation, AI, and Full-Stack Systems
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Every service below is backed by production systems I built and operate daily. Not demos. Not tutorials. Working software.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="glass-card p-6 group hover:border-[var(--color-border-hover)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Ghost number */}
              <span
                className="absolute top-3 right-4 text-3xl font-heading font-bold select-none"
                style={{ color: "rgba(0, 212, 255, 0.04)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-200"
                style={{
                  background: "var(--color-accent-dim)",
                  border: "1px solid rgba(0, 212, 255, 0.1)",
                }}
              >
                <service.icon size={20} style={{ color: "var(--color-accent)" }} />
              </div>
              <h3
                className="text-lg font-heading font-semibold mb-2"
                style={{ color: "var(--color-text-bright)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
