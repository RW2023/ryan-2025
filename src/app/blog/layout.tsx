// src/app/blog/layout.tsx
import React, { ReactNode } from 'react';

interface BlogLayoutProps {
    children: ReactNode;
}

// Layout for all /blog routes, only wraps children
export default function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            {children}
        </main>
    );
}
