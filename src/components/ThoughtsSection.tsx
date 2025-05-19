"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

interface ThoughtsSectionProps {
    thoughts: string;
}

export default function ThoughtsSection({ thoughts }: ThoughtsSectionProps) {
    return (
        <div className="mt-10 prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-primary mb-4">My Thoughts</h2>
            <ReactMarkdown>{thoughts}</ReactMarkdown>
        </div>
    );
}
