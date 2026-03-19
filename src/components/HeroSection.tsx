"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, ChevronDown } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const roles = ["Full-Stack Developer", "Automation Engineer", "AI Integrator"];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid scanline"
    >
      {/* Radial glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8"
      >
        {/* Profile image */}
        <motion.div
          variants={fadeUp}
          className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-2 ring-accent/30 shadow-lg"
          style={{ boxShadow: "var(--glow-accent)" }}
        >
          <Image
            src="/profile/darkProfile.jpg"
            alt="Ryan Wilson"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Terminal-style label */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          <span className="text-xs font-mono text-accent tracking-wider uppercase">
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight"
        >
          <span className="text-text-bright">Ryan</span>{" "}
          <span className="text-gradient">Wilson</span>
        </motion.h1>

        {/* Rotating roles */}
        <motion.div variants={fadeUp} className="h-8 overflow-hidden">
          <motion.div
            animate={{ y: [0, -32, -64, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 1],
            }}
            className="flex flex-col items-center"
          >
            {roles.map((role) => (
              <span
                key={role}
                className="h-8 flex items-center text-lg md:text-xl text-text-muted font-mono"
              >
                {role}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-text-muted max-w-xl leading-relaxed"
        >
          I build performant, polished web applications with modern frameworks
          and AI-powered workflows.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="flex gap-4">
          <button
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-lg bg-accent text-accent-on font-semibold font-heading hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-lg border border-border text-text-primary font-semibold font-heading hover:border-accent/40 hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div variants={fadeUp} className="flex gap-5 pt-2">
          <a
            href="https://github.com/RW2023"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-accent transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-e-wilson/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-accent transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-text-muted/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
