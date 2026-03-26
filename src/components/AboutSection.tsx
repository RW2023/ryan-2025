"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cpu, Cloud } from "lucide-react";

const skillCategories = [
  {
    label: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    icon: Server,
    skills: ["Node.js", "PostgreSQL", "Supabase", "Firebase", "Prisma", "REST APIs"],
  },
  {
    label: "AI & Automation",
    icon: Cpu,
    skills: ["n8n", "Claude API", "OpenAI API", "Webhooks", "Resend", "Cron Jobs"],
  },
  {
    label: "Infrastructure",
    icon: Cloud,
    skills: ["Docker", "Linux / VPS", "Git", "Vercel", "CI/CD", "Claude Code"],
  },
];

const stats = [
  { value: "9+", label: "Production Projects" },
  { value: "20+", label: "Custom AI Commands" },
  { value: "15+", label: "MCP Integrations" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      {/* Subtle background accent */}
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
            Background
          </span>
          <h2
            className="text-4xl md:text-5xl font-heading font-bold mt-3"
            style={{ color: "var(--color-text-bright)" }}
          >
            About Me
          </h2>
          <div
            className="w-16 h-0.5 mt-4"
            style={{ background: "rgba(0, 212, 255, 0.4)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-5">
              <p
                className="leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                Full-stack developer and automation engineer building production
                web applications and AI-powered workflows. I ship real systems
                that run in production daily, from voice-powered PWAs to
                end-to-end lead intake pipelines.
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                I specialize in the React/Next.js ecosystem, backend automation
                with n8n, and AI integration using Claude and OpenAI APIs. My
                focus is building reliable, well-architected systems that solve
                real problems.
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                I bring strong systems thinking, clean code practices, and the
                ability to own a project end-to-end, from database schema design
                to deployment and monitoring.
              </p>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-4 pt-4 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl md:text-3xl font-heading font-bold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[11px] font-mono mt-1 leading-tight"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  className="glass-card p-5 space-y-3 group hover:border-[var(--color-border-hover)] transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center"
                      style={{
                        background: "var(--color-accent-dim)",
                        border: "1px solid rgba(0, 212, 255, 0.1)",
                      }}
                    >
                      <Icon
                        size={14}
                        style={{ color: "var(--color-accent)" }}
                      />
                    </div>
                    <h3
                      className="text-sm font-mono tracking-wider uppercase"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {category.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-md border transition-all duration-200 cursor-default hover:-translate-y-0.5"
                        style={{
                          background: "var(--color-surface-light)",
                          color: "var(--color-text)",
                          borderColor: "var(--color-border)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.3)";
                          e.currentTarget.style.color = "var(--color-accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--color-border)";
                          e.currentTarget.style.color = "var(--color-text)";
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
