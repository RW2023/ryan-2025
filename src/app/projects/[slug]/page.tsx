// app/projects/[slug]/page.tsx

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
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = allProjects.find((p) => p.slug === slug);
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
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = allProjects.find((p) => p.slug === slug);
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
        <article className="max-w-5xl mx-auto px-6 py-28">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
            />

            {/* Header */}
            <header className="mb-10">
                <span className="text-xs font-mono text-accent tracking-widest uppercase">
                    Project
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-3 font-heading text-text-bright">
                    {project.title}
                </h1>
                <div className="w-16 h-0.5 bg-accent/40 mt-4" />
            </header>

            {/* Image gallery */}
            <div className="glass-card overflow-hidden mb-10">
                {project.images && project.images.length > 0 ? (
                    <div className="space-y-px">
                        {project.images.map((img, i) => (
                            <div key={i} className="relative w-full aspect-[16/9]">
                                <Image
                                    src={img}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={i === 0}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="relative w-full aspect-[16/9]">
                        <Image
                            src={imageSrc}
                            alt={`Screenshot of ${project.title}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 mb-8" role="list" aria-label="Technologies used">
                {project.tools.map((tag) => (
                    <span
                        key={tag}
                        role="listitem"
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent-dim text-accent/80 border border-accent/10"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Description card */}
            <div className="glass-card p-6 md:p-8 mb-8">
                <p className="text-lg leading-relaxed text-text-muted">
                    {project.longDescription || project.description}
                </p>
            </div>

            {snippetList.length > 0 && (
                <div className="glass-card p-6 md:p-8 mb-8">
                    <CodeSnippetAccordion snippets={snippetList} />
                </div>
            )}

            <ReadmeDrawer githubUrl={project.githubUrl} />

            {/* Thoughts section in glass card */}
            {thoughts && (
                <div className="glass-card p-6 md:p-8 mb-8">
                    <ThoughtsSection thoughts={thoughts} />
                </div>
            )}

            {/* Action buttons */}
            <nav className="flex flex-wrap gap-4 mt-10" aria-label="Project links">
                {showGitHub && project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        className="px-5 py-2.5 rounded-lg border border-border text-text-primary font-medium font-heading hover:border-accent/40 hover:text-accent transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        className="px-5 py-2.5 rounded-lg bg-accent text-accent-on font-medium font-heading hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Site
                    </a>
                )}
                <Button
                    href="/projects"
                    label="Back to Projects"
                    variant="outline"
                    size="lg"
                />
            </nav>
        </article>
    );
}
