// src/components/MDXWrapper.tsx
'use client';
import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { getMDXComponents } from './mdx-components';

export default function MDXWrapper({ children }: { children: ReactNode }) {
    const components = getMDXComponents({});
    return <MDXProvider components={components}>{children}</MDXProvider>;
}
