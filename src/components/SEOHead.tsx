// src/components/SEOHead.tsx
import Head from 'next/head';

interface SEOHeadProps {
    title: string;
    description: string;
    date: string;
    author: string;
    featuredImage: string;
    keywords?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    date,
    author,
    featuredImage,
    keywords = [],
}) => {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${title
        .toLowerCase()
        .replace(/\s+/g, '-')}`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={featuredImage} />
            <meta property="og:url" content={url} />

            {/* Article metadata */}
            <meta property="article:published_time" content={date} />
            <meta property="article:author" content={author} />
            {keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(', ')} />
            )}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={featuredImage} />
        </Head>
    );
};

export default SEOHead;
