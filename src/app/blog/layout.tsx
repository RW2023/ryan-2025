import type { Metadata } from "next";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ryan-w.dev";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from a builder. Real systems, real architecture, no hype. Technical writing about AI agents, automation, and full-stack development.",
  openGraph: {
    title: "Blog | Ryan Wilson",
    description:
      "Notes from a builder. Real systems, real architecture, no hype.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

const blogBreadcrumbSchema = {
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
  ],
};

const blogCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ryan Wilson Blog",
  description:
    "Technical writing about AI agents, automation infrastructure, and full-stack development. Written by a builder documenting real systems.",
  url: `${siteUrl}/blog`,
  author: {
    "@type": "Person",
    name: "Ryan Wilson",
    url: siteUrl,
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "meta[name='description']"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([blogBreadcrumbSchema, blogCollectionSchema]),
        }}
      />
      <main className="min-h-screen pt-24 pb-16 px-6">{children}</main>
      <Footer />
    </>
  );
}
