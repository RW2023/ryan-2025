import HireHero from "@/components/hire/HireHero";
import PainSection from "@/components/hire/PainSection";
import BenefitsGrid from "@/components/hire/BenefitsGrid";
import ProcessTimeline from "@/components/hire/ProcessTimeline";
import StatsSection from "@/components/hire/StatsSection";
import FinalCTA from "@/components/hire/FinalCTA";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ryan-w.dev";

export const metadata: Metadata = {
    title: "Hire Me",
    description:
        "Need a fast, professional website that actually gets results? Ryan Wilson builds clean, modern websites for small businesses — no tech headaches, just results.",
    openGraph: {
        title: "Hire Ryan Wilson | Web Developer for Small Business",
        description:
            "Fast, professional websites that look great and convert. Built with modern tools, delivered with zero tech headaches.",
        url: `${siteUrl}/hire`,
    },
    alternates: {
        canonical: `${siteUrl}/hire`,
    },
};

const hireBreadcrumbSchema = {
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
            name: "Hire Me",
            item: `${siteUrl}/hire`,
        },
    ],
};

const hireSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development by Ryan Wilson",
    description:
        "Custom website design and development for small businesses. Fast, responsive, SEO-optimized sites built with Next.js and modern web technologies.",
    provider: {
        "@type": "Person",
        name: "Ryan Wilson",
        url: siteUrl,
    },
    serviceType: "Web Development",
    areaServed: "Worldwide",
    potentialAction: {
        "@type": "CommunicateAction",
        name: "Hire Ryan Wilson",
        target: `${siteUrl}/hire`,
        description: "Get in touch to discuss your web development project.",
    },
    speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "meta[name='description']"],
    },
};

export default function HireMePage() {
    return (
        <main className="bg-base text-text-primary overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([hireBreadcrumbSchema, hireSchema]) }}
            />
            <HireHero />
            <PainSection />
            <BenefitsGrid />
            <ProcessTimeline />
            <StatsSection />
            <FinalCTA />
        </main>
    );
}
