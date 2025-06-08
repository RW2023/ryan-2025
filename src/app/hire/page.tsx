"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { ListMotion, ItemMotion } from "@/components/ListMotion";

export default function HireMePage() {
    return (
        <main className="min-h-screen bg-var(--background) via-base-200 to-base-100 text-base-content px-6 pt-24 pb-12 space-y-24">
            {/* Hero Section */}
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
                    className="text-xl md:text-2xl text-base-content/80 max-w-2xl mx-auto "
                >
                    I design clean, professional websites that look great on any device  and work fast. No tech talk, no stress. Just a beautiful online presence that helps you stand out and get results.
                </motion.p>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-box p-10 backdrop-blur-md bg-opacity-90"
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    Here’s What You Get
                </h2>
                <ListMotion className="text-left space-y-4 text-base-content/90">
                    <div className="hover:scale-[1.015] hover:bg-base-200/50 transition-all duration-200 rounded-md px-2 py-1">
                        <ItemMotion>
                            <CheckCircle className="inline w-5 h-5 text-success mr-2" />
                            ⚡ Loads fast and looks great on phones and desktops
                        </ItemMotion>
                    </div>
                    <div className="hover:scale-[1.015] hover:bg-base-200/50 transition-all duration-200 rounded-md px-2 py-1">
                        <ItemMotion>
                            <CheckCircle className="inline w-5 h-5 text-success mr-2" />
                            🎯 Easy for people (and Google) to find you
                        </ItemMotion>
                    </div>
                    <div className="hover:scale-[1.015] hover:bg-base-200/50 transition-all duration-200 rounded-md px-2 py-1">
                        <ItemMotion>
                            <CheckCircle className="inline w-5 h-5 text-success mr-2" />
                            📈 Ready to grow with your business over time
                        </ItemMotion>
                    </div>
                </ListMotion>
            </motion.section>

            {/* Pitch + Contact */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto space-y-6"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Ready to Make It Real?
                </h2>
                <p className="text-lg md:text-xl text-center text-base-content/80 max-w-2xl mx-auto">
                    Let’s chat about your goals, your vision, and how we can bring it to life without the tech headaches. I’ll take care of the code so you can focus on what you do best.
                </p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <Mail className="text-primary animate-pulse w-8 h-8" />
                </motion.div>
                {/* Wrapped the form in a container div to control bottom space */}
                <div className="max-w-2xl mx-auto pb-0">
                    <ContactForm />
                </div>
            </motion.section>
        </main>
    );
}
