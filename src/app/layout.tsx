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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ryanwilson.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ryan Wilson | Full-Stack Developer",
    template: "%s | Ryan Wilson",
  },
  description:
    "Ryan Wilson is a full-stack developer building performant web applications with Next.js, TypeScript, React, and AI integration. View projects, skills, and get in touch.",
  keywords: [
    "Ryan Wilson",
    "full-stack developer",
    "web developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "AI integration",
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
    title: "Ryan Wilson | Full-Stack Developer",
    description:
      "Full-stack developer building performant web applications with Next.js, TypeScript, and AI integration.",
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
};

// JSON-LD structured data for AEO
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ryan Wilson",
  url: siteUrl,
  image: `${siteUrl}/profile/darkProfile.jpg`,
  jobTitle: "Full-Stack Developer",
  description:
    "Self-taught full-stack developer specializing in Next.js, TypeScript, React, and AI-powered web applications.",
  sameAs: [
    "https://github.com/RW2023",
    "https://www.linkedin.com/in/ryan-e-wilson/",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Firebase",
    "Supabase",
    "OpenAI API",
    "Framer Motion",
    "GSAP",
    "Prisma",
    "Web Performance",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ryan Wilson | Developer Portfolio",
  url: siteUrl,
  description:
    "Portfolio of Ryan Wilson, a full-stack developer building performant web applications.",
  author: {
    "@type": "Person",
    name: "Ryan Wilson",
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
            __html: JSON.stringify([personSchema, websiteSchema]),
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
