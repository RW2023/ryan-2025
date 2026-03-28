import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/data/blogPosts";
import BlogPost from "@/components/BlogPost";
import BlogCTA from "@/components/BlogCTA";
import BlogComments from "@/components/BlogComments";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ryan-w.dev";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Ryan Wilson`,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Ryan Wilson"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${siteUrl}/blog/${post.slug}`,
    wordCount: post.content.split(/\s+/).length,
    author: {
      "@type": "Person",
      name: "Ryan Wilson",
      url: siteUrl,
      jobTitle: "Full-Stack Developer & Automation Engineer",
      sameAs: [
        "https://github.com/RW2023",
        "https://www.linkedin.com/in/ryan-e-wilson/",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Ryan Wilson",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    ...(post.audio
      ? {
          audio: {
            "@type": "AudioObject",
            name: `Listen: ${post.title}`,
            description: `Audio discussion of "${post.title}" by Ryan Wilson`,
            contentUrl: `${siteUrl}${post.audio}`,
            encodingFormat: "audio/mp4",
            inLanguage: "en",
          },
        }
      : {}),
    keywords: post.tags.join(", "),
    inLanguage: "en",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "article header p", "article h2"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, articleSchema]),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-mono text-text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>
        <BlogPost post={post} />
        <BlogCTA postSlug={post.slug} />
        <BlogComments slug={post.slug} />
      </div>
    </>
  );
}
