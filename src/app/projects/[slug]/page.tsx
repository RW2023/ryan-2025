// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import { allProjects } from "@/data/projects";
import { projectThoughts } from "@/data/projectThoughts";
import { snippetsBySlug } from "@/data/snippets";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ThoughtsSection from "@/components/ThoughtsSection";
import ReadmeDrawer from "@/components/ReadmeDrawer";
import CodeSnippetAccordion from "@/components/CodeSnippetAccordion";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ryan-w.dev";

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

function getCategory(tools: string[]): string {
    if (tools.some((t) => ["n8n", "Webhook", "REST API"].includes(t)) && !tools.includes("Next.js"))
        return "Automation";
    if (tools.some((t) => ["Claude Code", "NanoClaw", "Shell Scripting"].includes(t)) && !tools.includes("Next.js"))
        return "AI System";
    if (tools.includes("Next.js") || tools.includes("React"))
        return "Web App";
    return "Project";
}

function getCategoryColor(category: string): string {
    switch (category) {
        case "Automation":
            return "var(--color-secondary)";
        case "AI System":
            return "#818cf8";
        case "Web App":
            return "var(--color-accent)";
        default:
            return "var(--color-text-muted)";
    }
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = allProjects.find((p) => p.slug === slug);
    if (!project) return notFound();

    const projectIndex = allProjects.findIndex((p) => p.slug === slug);
    const imageSrc =
        project.imageUrl ||
        `https://placehold.co/800x400.png?text=Preview+Unavailable`;

    const thoughts = projectThoughts[project.slug];
    const snippetList = snippetsBySlug[project.slug] || [];
    const showGitHub = await isRepoAvailable(project.githubUrl);
    const category = getCategory(project.tools);
    const categoryColor = getCategoryColor(category);

    const projectBreadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: `${siteUrl}/projects`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: project.title,
                item: `${siteUrl}/projects/${project.slug}`,
            },
        ],
    };

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
        speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", "article p"],
        },
    };

    return (
        <article className="max-w-5xl mx-auto px-6 py-28">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([projectBreadcrumbSchema, projectSchema]) }}
            />

            {/* Back link */}
            <div className="mb-8">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-mono transition-colors duration-200"
                    style={{ color: "var(--color-text-muted)" }}
                >
                    <ArrowLeft size={14} />
                    Back to Projects
                </Link>
            </div>

            {/* Header */}
            <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <span
                        className="text-xs font-mono tracking-widest uppercase"
                        style={{ color: "var(--color-accent)" }}
                    >
                        Project
                    </span>
                    <span
                        className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border"
                        style={{
                            color: categoryColor,
                            borderColor: `color-mix(in srgb, ${categoryColor} 25%, transparent)`,
                            background: `color-mix(in srgb, ${categoryColor} 8%, transparent)`,
                        }}
                    >
                        {category}
                    </span>
                    <span
                        className="text-3xl font-heading font-bold"
                        style={{ color: "rgba(0, 212, 255, 0.1)" }}
                    >
                        {String(projectIndex + 1).padStart(2, "0")}
                    </span>
                </div>

                <h1
                    className="text-4xl md:text-5xl font-bold font-heading"
                    style={{ color: "var(--color-text-bright)" }}
                >
                    {project.title}
                </h1>

                {/* Gradient separator */}
                <div
                    className="h-px mt-6"
                    style={{
                        background: "linear-gradient(90deg, var(--color-accent), rgba(129, 140, 248, 0.4), transparent)",
                    }}
                />
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
                                    className="object-contain"
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
                        className="text-xs font-mono px-2.5 py-1 rounded-md border"
                        style={{
                            background: "var(--color-accent-dim)",
                            color: "rgba(0, 212, 255, 0.8)",
                            borderColor: "rgba(0, 212, 255, 0.1)",
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Description card */}
            <div className="glass-card p-6 md:p-8 mb-8">
                <p
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                >
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border font-medium font-heading transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                            borderColor: "var(--color-border)",
                            color: "var(--color-text)",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github size={16} />
                        GitHub
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium font-heading overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                            background: "var(--color-accent)",
                            color: "var(--color-accent-on)",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <ExternalLink size={16} />
                            Live Site
                        </span>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: "linear-gradient(135deg, var(--color-accent), #818cf8)" }}
                        />
                    </a>
                )}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border font-medium font-heading transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-text)",
                    }}
                >
                    <ArrowLeft size={16} />
                    All Projects
                </Link>
            </nav>
        </article>
    );
}
