// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { allProjects } from "@/data/projects";
import Image from "next/image";

export async function generateStaticParams() {
    return allProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const project = allProjects.find((p) => p.slug === params.slug);
    if (!project) return notFound();

    const imageSrc = project.imageUrl ||
        `https://placehold.co/800x400.png?text=Preview`;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4 text-primary">{project.title}</h1>

            {/* Responsive image container for fill mode */}
            <div className="relative w-full h-[200px] md:h-[300px] mb-6">
                <Image
                    src={imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg shadow"
                    priority
                />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tag) => (
                    <span key={tag} className="badge badge-secondary text-primary">
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
                    className="btn btn-success"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Demo
                </a>
            </div>
        </div>
    );
}
