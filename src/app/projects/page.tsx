// app/projects/page.tsx
import type { Metadata } from "next";
import Projects from "../components/Projects";

export const metadata: Metadata = {
    title: "Projects",
    description: "My project showcase",
};

export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <Projects />
        </main>
    );
}
