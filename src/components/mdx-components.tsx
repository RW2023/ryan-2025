// src/components/mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import AudioPlayer from '@/components/AudioPlayer';
import SEOHead from '@/components/SEOHead';

/**
 * Returns the MDX components mapping.
 * Renamed from useMDXComponents to avoid React Hooks lint rules.
 */
export function getMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        img: ({ src, width, height, alt, ...rest }) => {
            if (!src) return null;

            const parsedWidth = width ? parseInt(width as string) : 500;
            const parsedHeight = height ? parseInt(height as string) : 300;

            return (
                <Image
                    src={src}
                    width={parsedWidth}
                    height={parsedHeight}
                    layout="responsive"
                    alt={alt || ''}
                    {...rest}
                />
            );
        },
        table: ({ children, ...rest }) => (
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300" {...rest}>
                    {children}
                </table>
            </div>
        ),
        th: ({ children, ...rest }) => (
            <th className="px-4 py-2 text-left border border-gray-300 bg-gray-100" {...rest}>
                {children}
            </th>
        ),
        td: ({ children, ...rest }) => (
            <td className="px-4 py-2 border border-gray-300" {...rest}>
                {children}
            </td>
        ),
        AudioPlayer: ({ src, title, ...rest }) => {
            if (!src) return null;
            return <AudioPlayer src={src} title={title} {...rest} />;
        },
        SEOHead: ({ title, description, date, author, featuredImage, keywords, ...rest }) => {
            if (!title || !description || !date || !featuredImage) return null;
            return (
                <SEOHead
                    title={title}
                    description={description}
                    date={date}
                    author={author}
                    featuredImage={featuredImage}
                    keywords={keywords}
                    {...rest}
                />
            );
        },
    };
}
