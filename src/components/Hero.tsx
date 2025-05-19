"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
    return (
        <section
            id="hero"
            className="py-20 md:py-32 px-4 text-center flex flex-col items-center gap-y-6"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-36 h-36 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-2xl ring-4 ring-[var(--accent-color)]"
            >
                <Image
                    src="/profile/darkProfile.jpg"
                    alt="Profile picture of Ryan"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            <motion.h1
                className="text-5xl md:text-7xl font-bold font-[var(--font-heading)] text-[var(--foreground)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Hello, I&apos;m Ryan
            </motion.h1>

            <motion.p
                className="text-lg md:text-2xl font-[var(--font-sans)] text-[var(--foreground-muted)] max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                Creating clean, efficient web applications as a full-stack developer.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
                <Button
                    href="/projects"
                    label="View Projects"
                    variant="primary"
                    size="lg"
                    icon
                />
            </motion.div>
        </section>
    );
}
