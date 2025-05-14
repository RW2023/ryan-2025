// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { allProjects } from "@/data/projects";
import Image from "next/image";

export function generateStaticParams() {
    return allProjects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: Record<string, string> }) {
    const project = allProjects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4 text-primary">{project.title}</h1>

            <Image
                src="https://placehold.co/800x400.png?text=Preview"
                alt={project.title}
                width={800}
                height={400}
                className="rounded-lg shadow mb-6"
            />

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tag) => (
                    <span key={tag} className="badge badge-secondary">
                        {tag}
                    </span>
                ))}
            </div>

            <p className="text-lg leading-relaxed mb-6">{project.description}</p>

            <div className="flex gap-4">
                <a
                    href={project.githubUrl}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    href={project.liveUrl}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Demo
                </a>
            </div>
        </div>
    );
}
