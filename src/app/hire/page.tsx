import HireHero from "@/components/hire/HireHero";
import IdentitySection from "@/components/hire/IdentitySection";
import ServicesGrid from "@/components/hire/ServicesGrid";
import ProcessTimeline from "@/components/hire/ProcessTimeline";
import ProofSection from "@/components/hire/ProofSection";
import FinalCTA from "@/components/hire/FinalCTA";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ryan-w.dev";

export const metadata: Metadata = {
    title: "Hire Ryan Wilson | Automation Engineer, AI Integration, Full-Stack Developer",
    description:
        "Hire Ryan Wilson. Automation engineer and full-stack developer with production experience in n8n, Next.js, React, Python, PostgreSQL, Docker, and Claude API. 1,500+ jobs processed via automated pipelines. Available for freelance, contract, or full-time roles. Ontario, Canada. Remote-ready.",
    keywords: [
        "hire automation engineer",
        "freelance n8n developer",
        "AI integration engineer",
        "hire full-stack developer",
        "workflow automation developer",
        "freelance developer Canada",
        "n8n automation expert",
        "Next.js developer for hire",
        "React developer available",
        "Python automation engineer",
        "hire AI developer",
        "Claude API integration",
        "automation engineer available",
        "full-stack developer Ontario",
        "remote developer for hire",
    ],
    openGraph: {
        title: "Hire Ryan Wilson | Automation Engineer, AI Integration, Full-Stack Developer",
        description:
            "Automation engineer who ships production systems. 1,500+ jobs processed via n8n pipelines. 9+ real-time dashboards. AI scoring engines, full-stack apps, and DevOps. Available for freelance, contract, or full-time.",
        url: `${siteUrl}/hire`,
        type: "profile",
        siteName: "Ryan Wilson - Developer Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hire Ryan Wilson | Automation & AI Engineer",
        description:
            "Production automation systems. AI integration. Full-stack development. Available for hire.",
    },
    alternates: {
        canonical: `${siteUrl}/hire`,
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Ryan Wilson",
    url: siteUrl,
    jobTitle: "Automation Engineer & Full-Stack Developer",
    description:
        "Self-taught automation engineer and full-stack developer with production experience in n8n, Next.js, React, Python, PostgreSQL, Docker, and Claude API. Available for freelance, contract, or full-time roles.",
    knowsAbout: [
        "Workflow Automation",
        "AI Integration",
        "Full-Stack Development",
        "n8n",
        "Next.js",
        "React",
        "Node.js",
        "Python",
        "PostgreSQL",
        "Docker",
        "Claude API",
        "LLM Integration",
        "MCP Servers",
        "Neon Database",
        "API Orchestration",
        "VPS Management",
        "CI/CD",
        "Framer Motion",
        "Tailwind CSS",
        "Vercel Deployment",
    ],
    knowsLanguage: "en",
    address: {
        "@type": "PostalAddress",
        addressRegion: "Ontario",
        addressCountry: "CA",
    },
    sameAs: [siteUrl],
};

const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/hire#profilepage`,
    name: "Hire Ryan Wilson - Automation Engineer & Full-Stack Developer",
    description:
        "Portfolio and hire page for Ryan Wilson, an automation engineer specializing in n8n workflow automation, AI integration with Claude API, and full-stack development with Next.js and Python.",
    url: `${siteUrl}/hire`,
    mainEntity: { "@id": `${siteUrl}/#person` },
    dateModified: new Date().toISOString().split("T")[0],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automation & AI Engineering Services",
    description:
        "Workflow automation with n8n, AI integration with Claude API and LLMs, full-stack web development with Next.js, React, and Python. Production-grade systems for businesses that need reliable automation.",
    provider: { "@id": `${siteUrl}/#person` },
    serviceType: [
        "Workflow Automation",
        "AI Integration",
        "Full-Stack Web Development",
        "Process Optimization",
        "Data Pipeline Engineering",
        "DevOps and Infrastructure",
    ],
    areaServed: {
        "@type": "Place",
        name: "Worldwide (Remote)",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engineering Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Workflow Automation",
                    description: "n8n pipelines, API orchestration, and scheduled automation systems",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "AI Integration Engineering",
                    description: "Claude API, LLM scoring engines, AI agents, and MCP server integration",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Full-Stack Development",
                    description: "Next.js, React, Node.js, Python, PostgreSQL web applications and dashboards",
                },
            },
        ],
    },
    potentialAction: {
        "@type": "CommunicateAction",
        name: "Hire Ryan Wilson",
        target: `${siteUrl}/hire#hire-contact`,
        description: "Get in touch about freelance, contract, or full-time automation and development work.",
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
            name: "Hire Ryan Wilson",
            item: `${siteUrl}/hire`,
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What kind of automation systems does Ryan Wilson build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ryan builds production automation systems using n8n, Python, and API orchestration. His systems include automated job discovery pipelines that have processed over 1,500 listings, AI-powered scoring engines, data pipelines with real-time dashboards, and end-to-end workflow automation that runs 24/7 without manual intervention.",
            },
        },
        {
            "@type": "Question",
            name: "What technologies does Ryan Wilson work with?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ryan works with n8n for workflow automation, Next.js and React for frontend development, Node.js and Python for backend services, PostgreSQL and Neon for databases, Docker for containerization, Claude API for AI integration, and Vercel for deployment. He also manages VPS infrastructure, CI/CD pipelines, and MCP server integrations.",
            },
        },
        {
            "@type": "Question",
            name: "Is Ryan Wilson available for remote work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Ryan is based in Ontario, Canada and is available for remote, hybrid, or on-site positions. He is open to freelance projects, contract work, and full-time roles in automation engineering, AI integration, or full-stack development.",
            },
        },
        {
            "@type": "Question",
            name: "Does Ryan Wilson have a CS degree?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Ryan is entirely self-taught. He learned every tool in his stack by building and deploying production systems. His portfolio includes 50+ deployed automations, 9+ real-time dashboards, and AI-powered pipelines processing thousands of records. His approach to learning by shipping means he adapts quickly to new technologies.",
            },
        },
    ],
};

export default function HireMePage() {
    return (
        <main className="bg-base text-text-primary overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        personSchema,
                        profilePageSchema,
                        serviceSchema,
                        hireBreadcrumbSchema,
                        faqSchema,
                    ]),
                }}
            />
            <HireHero />
            <IdentitySection />
            <ServicesGrid />
            <ProcessTimeline />
            <ProofSection />
            <FinalCTA />
        </main>
    );
}
