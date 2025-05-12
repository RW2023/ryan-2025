import type { Metadata } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my portfolio website",
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <Hero />

      {/* Next: Projects Showcase */}
      {/* <Projects /> */}
    </main>
  );
}
