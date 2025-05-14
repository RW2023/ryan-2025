// app/page.tsx
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4">
      <Hero />
      {/* AboutMe, Projects, and Blog sections go here */}
    </main>
  );
}