// app/components/AboutMe.tsx
"use client";

export default function AboutMe() {
    return (
        <section id="about" className="py-20 px-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>

            {/* Bio */}
            <p className="text-lg text-text-primary mb-8">
                Hi, I’m Ryan — a Next.js and React developer who builds performant, user‐friendly web applications. In my free time I explore metaphysics and mindfulness, perspectives that inspire a thoughtful approach to every project.
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