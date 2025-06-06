// app/about/page.tsx
import type { Metadata } from "next";
import AboutMe from "@/components/AboutMe";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about Ryan Wilson – full-stack developer",
};

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-16 bg-background text-text-primary">
            <AboutMe />
        </main>
    );
}