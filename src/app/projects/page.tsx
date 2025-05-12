// app/projects/page.tsx
"use client";

import Projects from "../components/Projects";



export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            {/* Page Title */}
            <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
                Projects
            </h1>

            {/* Optional Intro */}
            <p className="max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-12">
                A selection of my work, showcasing full-stack web applications, integrations with AI, and headless commerce solutions.
            </p>

            {/* Projects Showcase */}
            <Projects />
        </main>
    );
}
