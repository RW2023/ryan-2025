// app/projects/[slug]/page.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { notFound } from "next/navigation";
import { allProjects } from "@/data/projects";
import { projectThoughts } from "@/data/projectThoughts";
import { snippetsBySlug } from "@/data/snippets";
import Image from "next/image";
import Button from "@/components/Button";
import ThoughtsSection from "@/components/ThoughtsSection";
import ReadmeDrawer from "@/components/ReadmeDrawer";
import CodeSnippetAccordion from "@/components/CodeSnippetAccordion";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ryanwilson.dev";

async function isRepoAvailable(url: string) {
    try {
        const res = await fetch(url, { method: "HEAD", cache: "no-store" });
        return res.ok;
    } catch {
        return false;
    }
}

export async function generateStaticParams() {
    return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const project = allProjects.find((p) => p.slug === params.slug);
    if (!project) return {};

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: `${project.title} | Ryan Wilson`,
            description: project.description,
            url: `${siteUrl}/projects/${project.slug}`,
            images: project.imageUrl
                ? [{ url: project.imageUrl, width: 1200, height: 630, alt: `${project.title} screenshot` }]
                : undefined,
        },
        alternates: {
            canonical: `${siteUrl}/projects/${project.slug}`,
        },
    };
}

export default async function ProjectDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const project = allProjects.find((p) => p.slug === params.slug);
    if (!project) return notFound();

    const imageSrc =
        project.imageUrl ||
        `https://placehold.co/800x400.png?text=Preview+Unavailable`;

    const thoughts = projectThoughts[project.slug];
    const snippetList = snippetsBySlug[project.slug] || [];
    const showGitHub = await isRepoAvailable(project.githubUrl);

    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.description,
        url: project.liveUrl,
        codeRepository: project.githubUrl,
        programmingLanguage: project.tools,
        author: {
            "@type": "Person",
            name: "Ryan Wilson",
            url: siteUrl,
        },
    };

    return (
        <article className="max-w-4xl mx-auto px-4 py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
            />

            <header>
                <h1 className="text-4xl font-bold mb-4 font-heading text-text-bright">{project.title}</h1>
            </header>

            <div className="relative w-full h-[200px] md:h-[300px] mb-6">
                <Image
                    src={imageSrc}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover rounded-lg shadow"
                    priority
                />
            </div>

            <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                {project.tools.map((tag) => (
                    <span
                        key={tag}
                        role="listitem"
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent-dim text-accent border border-border"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <p className="text-lg leading-relaxed mb-6 text-text-primary">{project.description}</p>

            {snippetList.length > 0 && (
                <CodeSnippetAccordion snippets={snippetList} />
            )}

            <ReadmeDrawer githubUrl={project.githubUrl} />

            <nav className="flex gap-4 mt-8" aria-label="Project links">
                {showGitHub && (
                    <a
                        href={project.githubUrl}
                        className="px-5 py-2.5 rounded-lg border border-border text-text-primary font-medium font-heading hover:border-accent/40 hover:text-accent transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                )}
                <a
                    href={project.liveUrl}
                    className="px-5 py-2.5 rounded-lg bg-accent text-accent-on font-medium font-heading hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Demo
                </a>
            </nav>

            {thoughts && <ThoughtsSection thoughts={thoughts} />}

            <div className="mt-8">
                <Button
                    href="/projects"
                    label="Back to Projects"
                    variant="outline"
                    size="lg"
                />
            </div>
        </article>
    );
}
