export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime?: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Why I Started Writing",
    slug: "why-i-started-writing",
    date: "2026-03-19",
    excerpt:
      "I build things at the intersection of humanity and technology. This blog is where I document what that actually looks like.",
    readingTime: "4 min",
    tags: ["Personal", "Building", "AI"],
    content: `I have been building things with computers for most of my life. But this past year changed everything about how I think about what building means.

I am not a Silicon Valley founder. I did not study computer science at Stanford. I am a self-taught developer in Ontario, Canada who spent years doing the kind of work that does not get written about. Help desks. Infrastructure. Troubleshooting systems that other people built and walked away from.

Then AI got good enough to work with, not just talk to. And something shifted.

## What Changed

I started building systems where AI is not a feature. It is a collaborator. I have agents that monitor my business while I sleep. I have workflows that score leads, draft proposals, and flag problems before I see them. I built a personal operating system that gives me the kind of leverage that used to require a team.

None of this is theoretical. It is running right now on a VPS I maintain myself.

But here is the thing nobody talks about: the interesting part is not the technology. The interesting part is the decisions. When do you let the machine act on its own? When do you keep a human in the loop? Where is the line between automation and abdication?

## What This Blog Is About

This is a blog about building at the intersection of humanity and technology.

I will write about the systems I build, but not in a way that reads like a product launch. I will write about what worked, what broke, and what I learned. I will write about the architectural choices that sound boring on paper but determine whether a system survives contact with reality.

Some of what I will cover:

- **How AI agents actually coordinate.** Not the marketing version. The database tables, the failure modes, the design tradeoffs.
- **Automation with guardrails.** What it looks like to give AI real autonomy while keeping humans in control of what matters.
- **Building in public, mid-career.** The experience of starting something new in the second half of your career, with no venture funding and no safety net.
- **Infrastructure as identity.** Why the systems you build reflect how you think, and why that matters more than your tech stack.

## Who This Is For

If you are a developer who builds things alone or in a small team, this might resonate. If you are curious about AI but skeptical of the hype, you will find something honest here. If you are in the second half of your career and wondering whether it is too late to reinvent yourself, I can tell you it is not.

I am not going to pretend I have it figured out. I am going to document what it looks like to figure it out in real time.

That is the whole premise. No manifesto. No five-step framework. Just a builder writing about what he is building and why.

Welcome.`,
  },
  {
    title: "NanoRelay: How Two AI Agents Coordinate Without a Server",
    slug: "nanorelay-agent-coordination",
    date: "2026-03-19",
    excerpt:
      "How I built a lightweight message relay between a CLI agent and a Telegram bot using nothing but a shared database table.",
    readingTime: "6 min",
    tags: ["AI", "Infrastructure", "Agents", "PostgreSQL"],
    content: `I have two AI agents. One lives in my terminal. The other lives on my phone.

The first is a CLI-based coding agent that runs on my laptop inside a workspace full of context files, plans, scripts, and persistent memory. It has access to every tool I use for building: file system, Git, databases, integrations, web search. It is the builder.

The second is a mobile agent running on a VPS inside a Docker container, accessible through Telegram. It can query my database, trigger automation workflows, run SEO audits, monitor leads, and send me a morning briefing at 7 AM. It is the operator.

They needed to talk to each other.

## The Problem

These two agents live in completely different environments. The builder runs locally on my workstation. The operator runs inside ephemeral Docker containers on a remote VPS. There is no shared file system, no WebSocket connection, no pub/sub broker between them.

I considered several approaches:
- **Redis pub/sub** on the VPS. Adds infrastructure I need to maintain.
- **A webhook relay.** Requires exposing an endpoint on my local machine.
- **A shared file on cloud storage.** Polling latency, sync conflicts, fragile.

Then I realized I already had the answer: both agents can already talk to the same PostgreSQL database.

## The Solution: One Table

\`\`\`sql
CREATE TABLE agent_messages (
    id SERIAL PRIMARY KEY,
    sent_at TIMESTAMPTZ DEFAULT NOW(),
    from_agent TEXT NOT NULL,
    to_agent TEXT NOT NULL,
    message TEXT NOT NULL,
    context TEXT,
    read BOOLEAN DEFAULT FALSE
);
\`\`\`

That is the entire coordination layer. No broker. No queue. No WebSocket. A table with six columns.

The builder writes a row when it needs to tell the operator something:

\`\`\`sql
INSERT INTO agent_messages (from_agent, to_agent, message, context)
VALUES ('builder', 'operator', 'SEO audit complete. Score: 85/100.', 'ops');
\`\`\`

The operator checks for unread messages every 5 minutes when active. When the builder starts a new session, it checks for unread messages from the operator and marks them as read.

## Context Tagging

The \`context\` column solved a workspace isolation problem. I run the builder agent across multiple workspaces, each with different concerns:

- A personal operations hub for freelance and infrastructure work
- A business workspace for client-facing operations
- A content workspace for the creative brand

Without context tags, every workspace would see every message. Now each workspace only reads messages tagged for it (or broadcasts tagged for all). The rule is simple: tag by topic, not by where you are sitting. If you are in the operations hub but the message is about content, tag it for the content workspace.

## The Dashboard

Messages flow both directions, so I needed visibility. I added a relay panel to my central dashboard that shows all messages with:

- Direction indicators (who sent to whom)
- Color-coded context badges
- Unread highlighting
- Context filter buttons

The panel is read-only for me. The agents handle read/unread state. I just see what they are saying to each other.

## What I Learned

1. **The simplest coordination layer is a shared database.** If both agents already have database access, you do not need a message broker. SQL is the protocol.

2. **Context tagging prevents noise.** Without it, every agent sees every message. With it, each workspace stays focused on what matters to it.

3. **Async is fine.** The operator checks every 5 minutes. The builder checks at session start. Nobody needs real-time. The work is asynchronous by nature.

4. **Visibility matters more than automation.** I could have made the agents auto-act on messages. Instead, I made the messages visible on a dashboard. Seeing the conversation is more valuable than hiding it.

## The Bigger Picture

This is not a framework or a library. It is a pattern: two agents, one table, context tags, and a dashboard. You could implement it in any stack with any database.

The interesting part is not the technology. It is the organizational design. Each agent has a defined role, defined capabilities, and a defined communication channel. That is it. No orchestration layer. No central controller. Just two autonomous agents leaving notes for each other in a shared notebook.

Sometimes the simplest architecture is the right one.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
