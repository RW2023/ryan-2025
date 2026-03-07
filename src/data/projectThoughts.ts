// data/projectThoughts.ts
export const projectThoughts: Record<string, string> = {
  // ───────────── swoletrac-workout-app ─────────────
  "swoletrac-workout-app": `
## 🚀 Why I Built This
I wanted a fitness companion that **mirrors my real workouts** sets, reps, progressive overload not another calorie counter.

## ⚔️ Challenges
- Wrangling **Next.js authentication** (middleware, callbacks, redirects).  
- Staying motivated while learning unfamiliar patterns.

## 🌟 Proud Code
The *workout-streak* logic is tiny but mighty seeing that green streak bar motivates me to lace up for a walk just to keep it alive.
`,

  // ───────────── load-planner ─────────────
  "load-planner": `
## 🚚 Why I Built This
As a local trucker I’d rather let code **do math** so I can focus on the road.

## ⚔️ Challenges
Building from scratch no starter templates meant:  
1. Designing a custom use case app.  
2. Testing edge cases on the job at 2 a.m.

## 🌟 Proud Code
1. The **sideways-loading check** is a nice feature to instantly let me know when the load will be a PITA. 
2. The trailer indicator lets me know which size truck or trailer I can use at a glance. 
`,

  // ───────────── personal-portfolio ─────────────
  "personal-portfolio": `
## 🧠 Why I Built This

I wanted a portfolio to display what I wanted to show and how i wanted to show it. Not just a resume but a dynamic portfolio that shows what I can do *and* how I think.

## ⚔️ Challenges

1. Designing something that balances creativity with professionalism.
2. Pulling together code snippets, project logic, and deployment details into a single, smooth experience.

## 🌟 Proud Code

1. Dynamic routing with project slugs keeps the site scalable as I add more work.
2. The conditional GitHub and README rendering shows attention to UX and error-proofing.
`,

  // ───────────── pet-age-calculator ─────────────
  "pet-age-calculator": `
## 🐾 Why I Built This

My kids kept asking how old our new kitten was “in human years.” I realized most charts out there are oversimplified or inconsistent so I built something better. This was also a perfect excuse to sharpen my front-end skills with a real-world use case.

## ⚔️ Challenges

1. Creating a conversion logic that felt more accurate and dynamic than the usual "x7 rule."
2. Making the UI feel fun and family-friendly without sacrificing clean code, responsiveness, and accessibility.

## 🌟 Proud Code

1. The **\`calculatePetAge\` function** handles dogs and cats, supports both directions, and adjusts for dog size making it far more flexible than a basic chart.
2. The **theme-aware UI** built with Tailwind, DaisyUI, and Next.js showcases polished design and responsiveness across devices.
`,

  // ───────────── clayton-c-music ─────────────
  "clayton-c-music": `
## Why I Built This

My brother is a solo reggae artist and needed a site that truly represented his music, style, and story. This is a living streaming hub, merch store, and event listing all in one.

## Architecture

The frontend is Next.js with TypeScript, GSAP for scroll-driven animations, and a Shopify Storefront API integration for merchandise. The backend runs on n8n: an automation workflow handles the contact form, newsletter signups, and booking inquiries. Submissions hit a webhook, get validated, then route to the artist’s email via Resend with branded templates. Newsletter signups sync to a subscriber list in Postgres for future campaigns.

## Proud Code

1. The **event filter logic** cleanly splits past and upcoming shows based on the current date, then animates them into a responsive grid with Framer Motion.
2. The **n8n backend workflow** is the real engine. A single webhook catches contact, newsletter, and booking submissions, branches by type, validates the input, sends confirmation emails through Resend, and logs everything to Postgres. Zero manual work on the artist’s end.
`,

  // ───────────── countries-explorer ─────────────
  "countries-explorer": `
## 🌍 Why I Built This
When I started to learn to code one of my virtual classmates made a countries explorer app with react. It was my first exposure to apis and the power of dynamic data. I wanted to recreate that experience with a modern stack and my own twist.
## ⚔️ Challenges
1. Working with the REST Countries API to fetch and display data dynamically.
2. Making sure dynamic route generation worked properly with Next.js.
3. Trying to pull the most out of the countries API in a creative way.
## 🌟 Proud Code
I like when data starts to flow. Very satisfying to me for some reason. So setting up the API and fetching the data is always my favorite part of working with API's. The versions I saw years ago were SPA's that were static and didn't have any dynamic routing. My idea was to use the dynamic routing capabilities to explore more of the Countries API and create a cool little app. 
`,




  // ───────────── jotthis ─────────────
  "jotthis": `
## Why I Built This

I wanted a tool that captures thoughts as fast as they come. Typing on a phone is slow. Voice-to-text transcription exists, but raw transcripts are messy. JotThis bridges that gap: speak naturally, get structured output.

## Architecture

The app uses Firebase for auth and real-time data sync, OpenAI Whisper for transcription, and GPT-4o for intelligent analysis. Every recording is transcribed, auto-titled, auto-tagged, and analyzed for action items, content ideas, and research topics.

## Key Engineering Decisions

1. **Optimistic UI updates** keep the interface fast while Firebase syncs in the background.
2. **Text-to-speech caching** means AI voices load instantly on replay instead of hitting the API again.
3. **Triage center** with urgency scoring and action buckets turns a simple notes app into a productivity system.
`,

  // ───────────── promptor ─────────────
  "promptor": `
## Why I Built This

Working with AI daily, I accumulated hundreds of prompts across different tools. I needed a single place to store, search, tag, and improve them.

## Architecture

Supabase handles auth (Google + email), database (PostgreSQL), and row-level security so each user only sees their own prompts. The AI optimizer endpoint sends prompts to OpenAI for analysis and improvement suggestions.

## Key Engineering Decisions

1. **Row-level security policies** in Supabase mean the app is multi-tenant with zero backend auth code.
2. **PWA with service workers** via Serwist enables offline prompt access, important for working in low-connectivity environments.
3. **Tag-based filtering** uses Supabase array columns with GIN indexes for fast lookups at scale.
`,

  // ───────────── lp-landing ─────────────
  "lp-landing": `
## Why I Built This

MapleLink needed a landing page that does more than look good. It needed to capture, score, and route leads automatically. This is a conversion system, not a brochure.

## Architecture

The frontend is Next.js with a multi-phase intake form. Submissions hit an n8n workflow on a private VPS that scores the lead using Claude AI, sends a confirmation via Resend, and delivers a scored brief to the team. Every step is logged to Postgres.

## Key Engineering Decisions

1. **AEO-first design** with JSON-LD structured data (Organization, Service, WebSite schemas) so AI search engines understand the business.
2. **Backend scoring pipeline** means leads are qualified before a human ever sees them.
3. **Playwright E2E tests** on the form submission flow ensure the intake pipeline never breaks silently.
`,

  // ───────────── grocery-pwa ─────────────
  "grocery-pwa": `
## Why I Built This

My family of four needed a shared grocery list that anyone could add to by speaking. No app installs, no accounts to manage. Just open the browser and talk.

## Architecture

Zero-framework PWA: a single HTML file with embedded CSS and JavaScript. Backend runs on n8n workflows connected to Neon Postgres. Voice input uses the Web Speech API with speaker attribution.

## Key Engineering Decisions

1. **Zero-framework approach** means the app loads instantly and works offline as a PWA. No build step, no JavaScript framework overhead.
2. **n8n backend** handles all CRUD, auth, inventory tracking, and purchase history through API endpoints.
3. **Dislike system with reasons** lets family members explain why they flagged an item ("nobody is eating them"), turning the app into a household communication tool.
`,

  // ───────────── grocery-voice-processor ─────────────
  "grocery-voice-processor": `
## Why I Built This

The Grocery PWA needed a smart backend that could take messy voice input ("we need milk, eggs, and that cereal the kids like") and turn it into structured, categorized grocery items.

## Architecture

An n8n workflow that receives voice transcriptions via webhook, parses them with Claude AI to extract individual items with categories, handles duplicates by updating quantity instead of creating new entries, and persists everything to Postgres.

## Proud Code

The workflow itself is the code. It starts with a webhook that catches voice transcriptions from the PWA, then passes the raw text to Claude AI with a structured prompt that extracts individual items, assigns grocery categories (Produce, Dairy, Pantry, etc.), and returns clean JSON. A Postgres query checks for duplicates before inserting. If the item already exists, quantity gets updated instead of creating a duplicate. If anything fails, an error branch logs the issue and flags it instead of silently dropping the input. The whole pipeline runs in under 2 seconds per voice submission.
`,

  // ───────────── personal-ai-os ─────────────
  "personal-ai-os": `
## Why I Built This

I run my entire work life through Claude Code. After building and rebuilding my workspace across multiple projects, I extracted the best patterns into a reusable template that gives Claude full context from the first message.

## Architecture

The workspace is structured around layered context files (business, personal, strategy, current data) that load in order via a /prime command. Safety hooks written in Python intercept dangerous tool calls before they execute. A Stop hook auto-appends session summaries to daily log files, creating a persistent memory layer across conversations.

## Key Engineering Decisions

1. **PreToolUse guardrails** catch dangerous Bash commands (rm -rf, force push, etc.) before they execute, not after. Safety is structural, not behavioral.
2. **Subagent architecture** routes research tasks to a read-only Sonnet agent and writing tasks to a write-enabled agent, keeping the main context window clean.
3. **Modular rules in .claude/rules/** auto-load without editing CLAUDE.md, making the system extensible without touching core config.
4. **Open-sourced as a template** so other developers can fork and customize for their own workflows.
`,

  // ───────────── maplelink-intake ─────────────
  "maplelink-intake": `
## Why I Built This

MapleLink Services needed an automated lead intake pipeline that captures inquiries 24/7, qualifies them with AI, and delivers scored briefs to the team without any manual work.

## Architecture

An n8n workflow that receives inbound inquiries from web forms and email, scores them with Claude AI for qualification, routes qualified leads to the appropriate handler, sends branded confirmation emails via Resend API, and logs every step to Postgres.

## Proud Code

The workflow is the product. A webhook receives inbound inquiries from the landing page form, then a Claude AI node scores each lead on budget, timeline, fit, and complexity, returning a structured qualification brief. Based on the score, an IF gate routes high-quality leads to a Resend node that fires a branded confirmation email to the prospect and a scored brief to the team. Every step writes to Postgres with timestamps, so there is a full audit trail from first touch to team handoff. Low-quality leads still get logged but skip the team notification. The whole pipeline runs 24/7 with zero manual work.
`,
};

