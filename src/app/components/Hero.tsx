// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
    return (
        <section id="hero" className="pt-20 md:pt-32 px-4 text-center flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-36 h-36 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-xl ring-4 ring-[var(--accent-color)] mb-6"
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
                className="text-5xl md:text-7xl font-bold mb-4 text-[var(--foreground)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Hello, I&apos;m Ryan
            </motion.h1>

            <motion.p
                className="text-lg md:text-2xl text-[var(--foreground-muted)] mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Creating clean, efficient web applications as a full-stack developer.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
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
