// src/components/MDXWrapper.tsx
'use client';
import { ReactNode } from 'react';

export default function MDXWrapper({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}
