// app/page.tsx
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4">
      <HeroSection />
      <Projects />
      <AboutMe />
      <ContactSection />
    </main>
  );
}
