import "./globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import type { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ryan-w.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ryan Wilson | Full-Stack Developer",
    template: "%s | Ryan Wilson",
  },
  description:
    "Ryan Wilson is a full-stack developer and automation engineer building production web applications and AI-powered workflows with Next.js, TypeScript, n8n, Claude API, and PostgreSQL.",
  keywords: [
    "Ryan Wilson",
    "full-stack developer",
    "automation engineer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "n8n",
    "AI integration",
    "Claude API",
    "workflow automation",
    "PostgreSQL",
    "portfolio",
  ],
  authors: [{ name: "Ryan Wilson", url: siteUrl }],
  creator: "Ryan Wilson",
  manifest: "/favicon/manifest.json",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [{ rel: "shortcut icon", url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ryan Wilson | Developer Portfolio",
    title: "Ryan Wilson | Full-Stack Developer & Automation Engineer",
    description:
      "Full-stack developer and automation engineer building production web applications and AI-powered workflows with Next.js, TypeScript, n8n, and Claude API.",
    images: [
      {
        url: "/favicon/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ryan Wilson — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Wilson | Full-Stack Developer",
    description:
      "Full-stack developer building performant web applications with modern tools.",
    images: ["/favicon/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "google0d0f0710e74862e1",
  },
};

// JSON-LD structured data for AEO
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntity: {
    "@type": "Person",
    name: "Ryan Wilson",
    url: siteUrl,
    image: `${siteUrl}/profile/darkProfile.jpg`,
    jobTitle: "Full-Stack Developer & Automation Engineer",
    description:
      "Full-stack developer and automation engineer specializing in Next.js, TypeScript, React, AI integration, and workflow automation with n8n and Claude API.",
    sameAs: [
      "https://github.com/RW2023",
      "https://www.linkedin.com/in/ryan-e-wilson/",
      "https://www.maplelinkservices.ca",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "n8n",
      "Claude API",
      "OpenAI API",
      "PostgreSQL",
      "Firebase",
      "Supabase",
      "Docker",
      "Workflow Automation",
      "AI Integration",
      "REST APIs",
      "Webhooks",
      "Linux / VPS Administration",
      "Framer Motion",
      "Prisma",
      "Web Performance",
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ryan Wilson | Developer Portfolio",
  url: siteUrl,
  description:
    "Portfolio of Ryan Wilson, a full-stack developer building performant web applications and AI-powered automation systems.",
  author: {
    "@type": "Person",
    name: "Ryan Wilson",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "meta[name='description']"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([profilePageSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="bg-base text-text-primary antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
