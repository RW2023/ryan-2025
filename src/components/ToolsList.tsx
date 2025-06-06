'use client';

import { getBadgeColor } from "@/utils/getBadgeColor";

type ToolsListProps = {
    tools: string[];
};

export default function ToolsList({ tools }: ToolsListProps) {
    if (!tools || tools.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {tools.map((tool) => (
                <span key={tool} className={`badge badge-sm ${getBadgeColor(tool)}`}>
                    {tool}
                </span>
            ))}
        </div>
    );
}
