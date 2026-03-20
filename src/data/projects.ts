export type Project = {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  tools: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
  images?: string[];
  featured?: boolean;
};

export const allProjects: Project[] = [
  {
    title: "JotThis",
    slug: "jotthis",
    description:
      "Full-stack AI app with real-time transcription, intelligent analysis, and cloud sync. Firebase auth, OpenAI integration, and polished UI with Framer Motion.",
    tools: ["Next.js", "TypeScript", "Firebase", "OpenAI API", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/RW2023/jotthis",
    liveUrl: "https://jotthis.vercel.app",
    imageUrl: "/projects/jotthis.png",
    images: ["/projects/jotthis.png", "/projects/jotthis-dashboard.png"],
    longDescription: "JotThis turns messy voice notes into structured insights, action items, and clear summaries. Demonstrates full-stack AI integration: Firebase for authentication and real-time data sync, OpenAI API for transcription and intelligent analysis, and a responsive React UI with Framer Motion animations. Includes a triage center with urgency scoring, action buckets for task organization, and full CRUD operations with optimistic UI updates.",
    featured: true,
  },
  {
    title: "Clayton C Music",
    slug: "clayton-c-music",
    description:
      "Production client website with Shopify e-commerce integration, media galleries, and GSAP animations. Full delivery: requirements to deployment.",
    tools: ["Next.js", "TypeScript", "Shopify", "GSAP", "n8n", "Resend", "Tailwind CSS"],
    githubUrl: "https://github.com/RW2023/clayton-c",
    liveUrl: "https://www.clayton-c.com",
    imageUrl: "/projects/claytonC.png",
    images: ["/projects/claytonC.png", "/projects/claytonC-backend.png"],
    longDescription: "A production client website built for a professional reggae artist. End-to-end delivery from requirements to deployment and ongoing maintenance. Shopify Storefront API integration for merchandise, GSAP scroll-driven animations, and streaming platform deep links. The backend runs on n8n: a webhook-driven workflow handles contact forms, newsletter signups, and booking inquiries, routing each to branded Resend emails and logging to Postgres. Demonstrates full-stack ownership from frontend polish to backend automation.",
    featured: true,
  },
  {
    title: "LP Landing",
    slug: "lp-landing",
    description:
      "High-conversion landing page with AI-powered lead scoring, custom SVG architecture diagrams, and a component-driven design system.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Custom SVG"],
    githubUrl: "https://github.com/RW2023/lp-landing",
    liveUrl: "https://www.maplelinkservices.ca/landing-pages",
    imageUrl: "/projects/lp-landing.png",
    images: ["/projects/lp-landing.png"],
    longDescription: "A high-performance conversion landing page built for MapleLink Services. Features a multi-phase lead intake form with AI-powered scoring, custom SVG architecture diagrams illustrating the backend pipeline, and a component-driven design system with design tokens. Demonstrates frontend engineering skills: responsive layout, accessibility, performance optimization, and conversion-focused UX design.",
    featured: true,
  },
  {
    title: "Athene Wilson",
    slug: "athene-wilson",
    description:
      "Production client website for a gospel artist. GSAP animations, multi-step booking form, AI-powered inquiry pipeline, and automated mailing list.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "n8n", "Claude AI", "Resend"],
    githubUrl: "https://github.com/RW2023/athene",
    liveUrl: "https://athene-snowy.vercel.app",
    imageUrl: "/projects/athene.png",
    images: ["/projects/athene.png"],
    longDescription: "A production client website built for a gospel and jazz vocalist with international clientele. Features GSAP scroll-driven animations, a split-layout hero, a multi-step booking form with event type selection and budget ranges, and an upcoming events section. The backend runs two live n8n automation pipelines: an AI-powered booking intake that scores inquiries 1-10, classifies them by value, drafts personalized replies referencing the specific event, and sends color-coded admin briefs. A separate mailing list pipeline handles signups with honeypot filtering and automated welcome emails. Deployed on Vercel with webhook-secured form submissions.",
    featured: true,
  },
  {
    title: "Grocery PWA",
    slug: "grocery-pwa",
    description:
      "Voice-first PWA with AI-powered natural language parsing, multi-user auth, real-time inventory tracking, and n8n backend automation.",
    tools: ["Next.js", "TypeScript", "n8n", "Neon Postgres", "Claude AI", "Tailwind CSS"],
    githubUrl: "https://github.com/RW2023/grocery-pwa",
    liveUrl: "https://grocery-pwa.vercel.app",
    imageUrl: "/projects/grocery-pwa.png",
    images: ["/projects/grocery-pwa.png", "/projects/grocery-pwa-empty.png"],
    longDescription: "A voice-first grocery management PWA in daily production use by a family of four. Natural language voice input gets parsed by Claude AI into structured, categorized grocery items. Features multi-user authentication with speaker profiles, real-time inventory tracking with purchase history, category-based views, and a dislike/feedback system. Backend automation via n8n webhooks with Neon Postgres for persistence. Demonstrates end-to-end system design: voice capture, AI processing pipeline, database schema design, and responsive PWA with offline support.",
    featured: true,
  },
  {
    title: "NanoRelay",
    slug: "nanorelay",
    description:
      "Two-AI agent coordination system. A CLI agent and a Telegram bot communicate through a shared PostgreSQL table with context tagging and a real-time dashboard.",
    tools: ["PostgreSQL", "Python", "Flask", "NanoClaw", "Claude Code", "Telegram Bot API", "Docker"],
    githubUrl: "",
    liveUrl: "",
    imageUrl: "/projects/nanorelay.png",
    images: ["/projects/nanorelay-dashboard.png"],
    longDescription: "A lightweight agent-to-agent coordination system. Two AI agents in completely separate environments (a CLI coding agent on a local workstation and a mobile operations agent on a VPS via Telegram) communicate through a single PostgreSQL table. Context tagging isolates messages by workspace so each environment only sees relevant traffic. An Agent Relay panel on the central dashboard shows both directions with color-coded context badges and unread highlighting. No message broker, no WebSocket, no orchestration layer. Just two autonomous agents leaving notes for each other in a shared notebook. The pattern is stack-agnostic and has been replicated across three workspaces.",
    featured: true,
  },
  {
    title: "MapleLink Intake Pipeline",
    slug: "maplelink-intake",
    description:
      "Production automation pipeline: AI lead scoring, email delivery via Resend, CRM routing, and full Postgres audit logging. Runs 24/7.",
    tools: ["n8n", "Claude AI", "Resend", "Neon Postgres", "Webhook", "REST API"],
    githubUrl: "",
    liveUrl: "",
    imageUrl: "/projects/maplelink-intake.png",
    images: ["/projects/maplelink-intake.png"],
    longDescription: "The production lead intake pipeline for MapleLink Services. Captures inbound inquiries from web forms and email, scores them with Claude AI for qualification, routes qualified leads to the appropriate handler, and sends branded confirmation emails via Resend API. Every step is logged to Postgres for analytics and audit trails. Demonstrates systems integration skills: multi-service orchestration, API design, transactional email delivery, AI-powered business logic, and production monitoring with error alerting.",
    featured: true,
  },
  {
    title: "Personal AI OS",
    slug: "personal-ai-os",
    description:
      "A Claude Code workspace structured as a personal operating system. Safety hooks, subagents, persistent memory, and 20+ custom slash commands.",
    tools: ["Claude Code", "Python", "n8n", "Notion", "Shell Scripting", "SQLite"],
    githubUrl: "https://github.com/RW2023/personal-ai-os",
    liveUrl: "",
    imageUrl: "/projects/ai-os.png",
    images: ["/projects/ai-os.png"],
    longDescription: "A Claude Code workspace architected as a full personal operating system. Features 20+ custom slash commands, PreToolUse safety guardrails that block dangerous operations, a Stop hook that auto-generates daily session logs, specialized subagents (researcher with read-only tools, content-writer with write tools), modular rules that auto-load from .claude/rules/, runtime configuration via YAML args, and persistent memory across sessions. Integrates with n8n for automation, Notion for task management, and Neon Postgres for structured data. Demonstrates advanced AI engineering: prompt architecture, tool orchestration, safety-by-design patterns, and building reliable systems on top of LLM capabilities.",
    featured: true,
  },
];
