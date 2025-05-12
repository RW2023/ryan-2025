import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to my portfolio website',
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hello, I&apos;m Ryan</h1>
        <p className="text-xl text-muted mb-8">
          Building beautiful, functional web experiences with Next.js and AI.
        </p>
        <a href="#projects" className="btn btn-primary btn-lg">
          View Projects
        </a>
      </section>

      {/* Add more sections as you go */}
    </div>
  );
}
