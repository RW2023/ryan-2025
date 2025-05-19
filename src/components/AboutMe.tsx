"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SkillsGrid from "./SkillsGrid";

export default function AboutMe() {
    return (
        <section id="about" className="py-20 px-4 text-center max-w-3xl mx-auto">
            <motion.div
                className="w-36 h-36 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-xl ring-4 ring-[var(--accent-color)] mx-auto mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Image
                    src="/profile/darkProfile.jpg"
                    alt="Photo of Ryan"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            <motion.h2
                className="text-3xl font-bold mb-6 text-primary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                About Me
            </motion.h2>

            <motion.p
                className="text-lg text-text-primary mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                Hi, I’m Ryan — a full-stack developer focused on building clean, performant web applications using modern tools.
                My work blends thoughtful design with real-world functionality. I also explore consciousness, metaphysics, and systems thinking—because clarity in code often begins with clarity of mind.
            </motion.p>

            <div className="mb-8">
                <SkillsGrid />
            </div>

            <motion.blockquote
                className="italic text-text-muted"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
                “I believe technology is most powerful when it reflects clarity of purpose—transforming lines of code into tools that make life a little easier.”
            </motion.blockquote>
        </section>
    );
}
