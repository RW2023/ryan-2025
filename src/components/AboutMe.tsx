// app/components/AboutMe.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section id="about" className="py-20 px-4 text-center max-w-3xl mx-auto">
            <motion.div
                className="w-36 h-36 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-xl ring-4 ring-[var(--accent-color)] mx-auto mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Image
                    src="/profile/darkProfile.jpg"
                    alt="Photo of Ryan"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>

            {/* Bio */}
            <p className="text-lg text-text-primary mb-8">
                Hi, I’m Ryan — a Next.js and React developer who builds performant, user‐friendly web applications.
                In my free time I explore metaphysics and mindfulness, perspectives that inspire a thoughtful approach to every project.
            </p>

            {/* Skills (Badge Cloud example) */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-secondary">My Skills</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    {[
                        "Next.js", "React", "TypeScript",
                        "Tailwind CSS", "DaisyUI",
                        "Framer Motion", "Supabase",
                        "OpenAI API"
                    ].map((skill) => (
                        <span key={skill} className="badge badge-outline border-accent text-accent text-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Philosophy */}
            <blockquote className="italic text-text-muted">
                “I believe technology is most powerful when it reflects clarity of purpose—transforming lines of code into tools that make life a little easier.”
            </blockquote>
        </section>
    );
}
