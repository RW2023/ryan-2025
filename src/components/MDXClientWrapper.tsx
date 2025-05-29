// src/components/MDXWrapper.tsx
'use client';

import { MDXProvider } from '@mdx-js/react';
import React from 'react';

export default function MDXWrapper({ children }: { children: React.ReactNode }) {
    return <MDXProvider>{children}</MDXProvider>;
}
