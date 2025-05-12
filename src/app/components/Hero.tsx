"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="hero"
            className="pt-20 md:pt-32 px-4 text-center"
        >
            <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Hello, I&apos;m Ryan
            </motion.h1>

            <motion.p
                className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
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
                <Link
                    href="/projects"
                    className="btn btn-primary btn-lg"
                >
                    View Projects
                </Link>
            </motion.div>
        </section>
    );
}
