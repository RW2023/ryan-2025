"use client";

import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 text-center bg-background">
      <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-4">
        <Mail /> Contact
      </h2>
      <p className="max-w-md mx-auto text-foreground-muted mb-6">
        Interested in collaborating? Reach out and let&apos;s build something
        great.
      </p>
      <a href="mailto:hello@ryanwilson.dev" className="btn btn-primary">
        Say Hello
      </a>
    </section>
  );
}
