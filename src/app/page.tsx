import HeroSection from "@/components/HeroSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ryanwilson.dev";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Ryan Wilson specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ryan Wilson is a full-stack developer specializing in Next.js, TypeScript, React, and AI-powered web applications. He builds performant, polished web apps with modern frameworks.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Ryan Wilson use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ryan works with React, Next.js, TypeScript, Tailwind CSS, Node.js, Firebase, Supabase, Prisma, OpenAI API, Framer Motion, and GSAP. He focuses on the React/Next.js ecosystem.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ryan Wilson available for hire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes, Ryan is available for freelance and contract work. Visit ${siteUrl}/hire to learn more or use the contact form to get in touch.`,
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main className="bg-base">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <ProjectsShowcase />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
