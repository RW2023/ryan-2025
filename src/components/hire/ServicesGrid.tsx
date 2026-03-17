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
import { fadeUp, stagger } from "@/lib/motion";

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
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            What I Build
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-text-bright">
            Automation, AI, and Full-Stack Systems
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
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
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="glass-card p-6 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-dim flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors duration-200">
                <service.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-bright mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
