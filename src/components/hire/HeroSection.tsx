"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-3xl mx-auto bg-base-100 shadow-xl rounded-box p-10 backdrop-blur-md bg-opacity-90"
        >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-snug text-primary flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center px-4">
                <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                >
                    <Sparkles className="text-yellow-500 dark:text-yellow-400" size={28} />
                </motion.span>
                Your Website Should Work as Hard as You Do
            </h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl text-base-content/80 max-w-2xl mx-auto"
            >
                Don’t have a website yet? Or maybe your current one feels outdated or slow? Either way, you&apos;re missing out on opportunities to connect with customers, build trust, and grow your business.
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-base-content/80 max-w-2xl mx-auto"
            >
                I design clean, professional websites that look great on any device and work fast. No tech talk, no stress. Just a beautiful online presence that helps you stand out and get results.
            </motion.p>
        </motion.section>
    );
}
