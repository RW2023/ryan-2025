"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, Github } from "lucide-react";
import { allProjects } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function getCategory(tools: string[]): string {
  if (tools.some((t) => ["n8n", "Webhook", "REST API"].includes(t)) && !tools.includes("Next.js"))
    return "Automation";
  if (tools.some((t) => ["Claude Code", "NanoClaw", "Shell Scripting"].includes(t)) && !tools.includes("Next.js"))
    return "AI System";
  if (tools.includes("Next.js") || tools.includes("React"))
    return "Web App";
  return "Project";
}

function getCategoryColor(category: string): string {
  switch (category) {
    case "Automation":
      return "var(--color-secondary)";
    case "AI System":
      return "#818cf8";
    case "Web App":
      return "var(--color-accent)";
    default:
      return "var(--color-text-muted)";
  }
}

export default function ProjectsShowcase() {
  const hero = allProjects[0];
  const featured = allProjects.slice(1, 3);
  const rest = allProjects.slice(3);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between gap-4"
        >
          <div>
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Selected Work
            </span>
            <h2
              className="text-4xl md:text-5xl font-heading font-bold mt-3"
              style={{ color: "var(--color-text-bright)" }}
            >
              Projects
            </h2>
            <div
              className="w-16 h-0.5 mt-4"
              style={{ background: "rgba(0, 212, 255, 0.4)" }}
            />
          </div>
          <span
            className="text-sm font-mono hidden md:block"
            style={{ color: "var(--color-text-muted)" }}
          >
            {allProjects.length} projects
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {/* Hero project: full-width horizontal layout */}
          <motion.div variants={fadeUp}>
            <Link href={`/projects/${hero.slug}`} className="group block">
              <article
                className="glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-2 transition-all duration-500"
                style={{ minHeight: "340px" }}
              >
                {/* Image side */}
                {hero.imageUrl && (
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <Image
                      src={hero.imageUrl}
                      alt={`${hero.title} screenshot`}
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 60%, var(--color-surface) 100%)",
                      }}
                    />
                  </div>
                )}

                {/* Content side */}
                <div className="p-8 md:p-10 flex flex-col justify-center gap-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-3xl font-heading font-bold"
                      style={{ color: "rgba(0, 212, 255, 0.15)" }}
                    >
                      01
                    </span>
                    <span
                      className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border"
                      style={{
                        color: getCategoryColor(getCategory(hero.tools)),
                        borderColor: `color-mix(in srgb, ${getCategoryColor(getCategory(hero.tools))} 25%, transparent)`,
                        background: `color-mix(in srgb, ${getCategoryColor(getCategory(hero.tools))} 8%, transparent)`,
                      }}
                    >
                      {getCategory(hero.tools)}
                    </span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-heading font-bold transition-colors duration-300 group-hover:text-[var(--color-accent)]"
                    style={{ color: "var(--color-text-bright)" }}
                  >
                    {hero.title}
                    <ArrowUpRight
                      size={20}
                      className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </h3>

                  <p
                    className="leading-relaxed text-sm md:text-base"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {hero.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {hero.tools.slice(0, 5).map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-mono px-2.5 py-1 rounded-md border"
                        style={{
                          background: "var(--color-accent-dim)",
                          color: "rgba(0, 212, 255, 0.8)",
                          borderColor: "rgba(0, 212, 255, 0.1)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                    {hero.tools.length > 5 && (
                      <span
                        className="text-xs font-mono px-2.5 py-1 rounded-md"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        +{hero.tools.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>

          {/* Featured pair: 2-column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project, i) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full"
                >
                  <article className="glass-card overflow-hidden h-full flex flex-col transition-all duration-500">
                    {project.imageUrl && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={`${project.title} screenshot`}
                          fill
                          sizes="(max-width:768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(180deg, transparent 50%, var(--color-surface) 100%)",
                          }}
                        />
                        {/* Number overlay */}
                        <span
                          className="absolute top-4 left-5 text-4xl font-heading font-bold"
                          style={{ color: "rgba(255,255,255,0.08)" }}
                        >
                          0{i + 2}
                        </span>
                      </div>
                    )}

                    <div className="p-6 md:p-7 flex flex-col gap-3 flex-1">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border"
                          style={{
                            color: getCategoryColor(getCategory(project.tools)),
                            borderColor: `color-mix(in srgb, ${getCategoryColor(getCategory(project.tools))} 25%, transparent)`,
                            background: `color-mix(in srgb, ${getCategoryColor(getCategory(project.tools))} 8%, transparent)`,
                          }}
                        >
                          {getCategory(project.tools)}
                        </span>
                      </div>

                      <h3
                        className="text-xl md:text-2xl font-heading font-bold transition-colors duration-300 group-hover:text-[var(--color-accent)]"
                        style={{ color: "var(--color-text-bright)" }}
                      >
                        {project.title}
                        <ArrowUpRight
                          size={16}
                          className="inline-block ml-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </h3>

                      <p
                        className="text-sm leading-relaxed flex-1"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tools.slice(0, 4).map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-mono px-2.5 py-1 rounded-md border"
                            style={{
                              background: "var(--color-accent-dim)",
                              color: "rgba(0, 212, 255, 0.8)",
                              borderColor: "rgba(0, 212, 255, 0.1)",
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 4 && (
                          <span
                            className="text-xs font-mono px-2.5 py-1 rounded-md"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            +{project.tools.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Remaining projects: compact 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project, i) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full"
                >
                  <article className="glass-card overflow-hidden h-full flex flex-col transition-all duration-500">
                    {project.imageUrl && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={`${project.title} screenshot`}
                          fill
                          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(180deg, transparent 40%, var(--color-surface) 100%)",
                          }}
                        />
                        <span
                          className="absolute top-3 left-4 text-3xl font-heading font-bold"
                          style={{ color: "rgba(255,255,255,0.06)" }}
                        >
                          0{i + 4}
                        </span>
                      </div>
                    )}

                    <div className="p-5 md:p-6 flex flex-col gap-2.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border"
                          style={{
                            color: getCategoryColor(getCategory(project.tools)),
                            borderColor: `color-mix(in srgb, ${getCategoryColor(getCategory(project.tools))} 25%, transparent)`,
                            background: `color-mix(in srgb, ${getCategoryColor(getCategory(project.tools))} 8%, transparent)`,
                          }}
                        >
                          {getCategory(project.tools)}
                        </span>
                      </div>

                      <h3
                        className="text-lg font-heading font-bold transition-colors duration-300 group-hover:text-[var(--color-accent)]"
                        style={{ color: "var(--color-text-bright)" }}
                      >
                        {project.title}
                        <ArrowUpRight
                          size={14}
                          className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        />
                      </h3>

                      <p
                        className="text-sm leading-relaxed flex-1"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md border"
                            style={{
                              background: "var(--color-accent-dim)",
                              color: "rgba(0, 212, 255, 0.8)",
                              borderColor: "rgba(0, 212, 255, 0.1)",
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 3 && (
                          <span
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            +{project.tools.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
