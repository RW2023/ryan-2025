import Link from "next/link";

export interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    githubUrl: string;
    liveUrl?: string;
}

export default function ProjectCard({
    title,
    description,
    tech,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body">
                <h3 className="card-title text-xl font-semibold">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((tag) => (
                        <span key={tag} className="badge badge-outline">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="card-actions">
                    <Link href={githubUrl} target="_blank" className="btn btn-sm btn-outline">
                        GitHub
                    </Link>
                    {liveUrl && (
                        <Link href={liveUrl} target="_blank" className="btn btn-sm btn-primary">
                            Live
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
