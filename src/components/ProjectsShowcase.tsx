"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allProjects } from "@/data/projects";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative py-32 px-6">
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
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-text-bright">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-accent/40 mt-4" />
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {allProjects.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
              <motion.article
                variants={cardVariants}
                className={`glass-card group overflow-hidden cursor-pointer ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* Image */}
                {project.imageUrl && (
                  <div
                    className={`relative w-full overflow-hidden ${
                      i === 0 ? "aspect-[21/9]" : "aspect-[16/9]"
                    }`}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes={
                        i === 0
                          ? "(max-width:768px) 100vw, 100vw"
                          : "(max-width:768px) 100vw, 50vw"
                      }
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-text-bright group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-text-muted opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1"
                    />
                  </div>

                  <p className="text-text-muted leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent-dim text-accent/80 border border-accent/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
