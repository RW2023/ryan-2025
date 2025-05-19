// components/CodeSnippetAccordion.tsx
"use client";

import { useState } from "react";
import { Code } from "lucide-react";
import { useTheme } from "next-themes";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import jsx from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import html from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import atomOneLight from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";

// Register languages
SyntaxHighlighter.registerLanguage("ts", ts);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("json", json);

type CodeSnippet = {
    title: string;
    description?: string;
    code: string;
    language?: string;
};

export default function CodeSnippetAccordion({
    snippets,
    title = "Code Snippets",
}: {
    snippets: CodeSnippet[];
    title?: string;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { theme } = useTheme();

    return (
        <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" /> {title}
            </h2>
            {snippets.map((snippet, i) => (
                <div key={i} className="border border-base-300 rounded-lg">
                    <button
                        type="button"
                        className="w-full text-left px-4 py-3 bg-base-200 hover:bg-base-300 transition-colors font-medium"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                        {snippet.title}
                    </button>
                    {openIndex === i && (
                        <div className="p-4 bg-base-100">
                            {snippet.description && (
                                <p className="mb-2 text-sm text-base-content/70">{snippet.description}</p>
                            )}
                            <SyntaxHighlighter
                                language={snippet.language || "ts"}
                                style={theme === "dark" ? atomOneDark : atomOneLight}
                                wrapLongLines={true}
                                customStyle={{
                                    borderRadius: "0.5rem",
                                    fontSize: "0.875rem",
                                    padding: "1rem",
                                }}
                            >
                                {snippet.code}
                            </SyntaxHighlighter>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
