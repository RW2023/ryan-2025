"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Prisma", "Supabase", "Firebase", "PostgreSQL"],
  },
  {
    label: "AI & APIs",
    skills: ["OpenAI", "Claude API", "Shopify Storefront", "REST", "n8n"],
  },
  {
    label: "Tools",
    skills: ["Git", "Vercel", "Docker", "Figma", "VS Code", "ESLint"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
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
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-text-bright">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-accent/40 mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-text-muted leading-relaxed">
              I&apos;m a self-taught full-stack developer focused on building clean,
              performant web applications with modern tools. My work blends
              thoughtful design with real-world functionality.
            </p>
            <p className="text-text-muted leading-relaxed">
              I specialize in the React/Next.js ecosystem and love integrating AI
              into practical products. Every project is an opportunity to push
              what&apos;s possible on the web.
            </p>
            <p className="text-text-muted leading-relaxed">
              When I&apos;m not coding, I explore consciousness, metaphysics, and
              the nature of being. I believe technology is most powerful when it
              reflects clarity of purpose.
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="glass-card p-5 space-y-3"
              >
                <h3 className="text-sm font-mono text-accent tracking-wider uppercase">
                  {category.label}
                </h3>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={fadeUp}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-light text-text-primary border border-border hover:border-accent/30 hover:text-accent transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
