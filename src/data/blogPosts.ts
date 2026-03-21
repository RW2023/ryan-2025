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
    title: "AI Can't Tattoo You",
    slug: "ai-cant-tattoo-you",
    date: "2026-03-21",
    excerpt:
      "AI will take over many jobs. But some are AI-resistant. Not because of technical limitation, but because they require embodied knowledge. Knowing what pain feels like.",
    readingTime: "10 min",
    tags: ["AI", "Philosophy", "Automation", "Human Experience"],
    content: `My wife had Ink Master on in the background. One of those competition shows where tattoo artists get judged on their craft. I wasn't really watching. I was at my laptop running fal.ai, generating portfolio images for a client. I fed it a prompt, waited maybe five minutes, and had a dozen clean, professional-looking photos that would have taken a photographer half a day to shoot.

Two screens. Two completely different worlds. One of them was collapsing the distance between idea and output. The other one was showing me something that couldn't be collapsed at all.

I kept half-watching the show while I worked, and at some point it clicked. These two things were happening at the same moment, in the same room, and they were pointing in completely opposite directions.

---

## The Pain Argument

Here's what a tattoo artist actually does.

They're not just executing a design. They're managing a conscious human being's experience of pain in real time. Every person sits differently. Every person has a different threshold. Some people go pale and quiet. Some people joke louder the more uncomfortable they get. Some people hit a wall and don't know how to say it.

The artist has to read all of that. Micro-expressions. Breathing. Muscle tension. When to keep going, when to pause, when to check in. They make dozens of adjustments per session that they're probably not even consciously aware of, because they've sat with enough people in pain to recognize the patterns.

That knowledge doesn't come from data. It comes from having a body. From having felt pain yourself. From being the kind of being who can sit across from someone in discomfort and understand, on a physical level, what that person is going through.

An AI cannot know what it feels like to get a needle dragged across your ribs for three hours. No training data bridges that gap. You can describe pain to a machine in infinite detail and it still won't know pain. It knows the description.

This is the line I've been turning over. Not "what can AI do technically?" but "what requires being the kind of thing that has actually experienced something?"

---

## The Surgeon Contrast

Here's where it gets interesting, and where I'd push back on myself a little.

A surgeon performs incredibly complex, skilled procedures. Many of those procedures are candidates for robotic assistance, and some are already partially automated. We trust machines to assist in surgery. We're moving toward trusting them more.

But the patient in surgery is unconscious. They're not there in the same way. The trust equation is different. You don't need the surgeon to understand what the anesthesia feels like because you're not awake to need that.

A tattoo client is conscious the entire time. They're present. They're vulnerable. They need the person holding the needle to understand, from the inside, what that experience is. That's not a technical requirement. It's a human one.

This distinction matters. It's not about whether AI is capable. It's about whether consciousness is part of the interaction. Wherever a person is awake, aware, and in some kind of real-time vulnerable exchange with another person, the living experience of the practitioner becomes part of what they're offering.

The surgeon contrast shows me this isn't about skill level. It's about whether being human is actually the product.

---

## The Enabler Frame

I build AI agents and automation pipelines for small businesses. This is what I do every day. Chatbots, workflows, data pipelines, automated lead management. I have seen what these tools can actually do, not from the outside looking in, but from the inside building the systems.

And I am not afraid of it. Most of the time, I think it's genuinely good.

Here's why. Think about a mother with a newborn. She has infinite things to manage. Scheduling, admin, groceries, home logistics, sleep tracking. If AI can take ten of those things off her plate, what does that free up? More time with the baby. More presence. More of the thing that only she can give.

She wouldn't hand the baby to a robot nanny. But she might absolutely let a system handle her calendar so she's not mentally somewhere else when her kid is in front of her.

That's the frame that makes sense to me. Automation handles the friction. It clears the path. What it's clearing the path toward is what matters. And the things it's clearing the path toward, the things worth having the time for, are usually deeply human ones.

Cooking a meal with your family. Not because the food needs to be cooked by hand, but because the act of doing it together is the point. The conversation. The mess. The kid who keeps stealing bits of cheese before anything hits the pan. A robot could produce a better meal. That's not actually the issue.

Some things are the product because of what they require you to be. Not because of what they produce.

---

## The Forge

Here's something I didn't think about at first.

The essay up to this point is about the person receiving the service. The tattoo client. The child. The student. But what about the person doing the work?

A tattoo artist who has sat with hundreds of people in pain over years becomes a different kind of human because of that work. Not just more skilled. More human. More patient. More attuned to suffering. The practice of holding space for someone else's vulnerability, day after day, reshapes you. It's a forge.

A teacher who has invested deeply in struggling students doesn't just produce better outcomes. They grow through the investment. The work of caring about someone else's development, of showing up even when it's hard, of watching someone fail and choosing to stay, that changes who the teacher is.

If we automate these roles, we don't just take something from the recipients. We remove the forge that makes certain people who they are. We lose the process that builds depth, patience, empathy, the qualities we value most in each other. And we get a thinner species because of it.

The work shapes the worker. That's not a side effect. It might be the most important thing happening.

---

## Theater of Knowing

AI is very good at performing understanding.

If you talk to a well-designed chatbot, it will ask follow-up questions. It will mirror your language. It will respond in a way that feels attuned to you. For a lot of interactions, that's more than enough.

But there's a difference between the theater of knowing and actually knowing. A difference between a system that has learned to produce the outputs of empathy and a person who has lived through something and carries it.

A coach who has failed, who has been exactly where you are, who has felt the specific weight of not knowing if it's going to work out. That person gives you something different. Not better information necessarily. Something else. The evidence that someone who has been through it is still standing in front of you and believes it's possible. You can't fake that. A machine can simulate it but it doesn't have it.

The interesting question isn't whether people will accept the simulation. Context determines that. Some will. Some won't. The question is whether, over time, we can tell the difference, and whether it matters if we can't.

---

## The Hidden Cost

Here's the thread I can't stop pulling on, and it's darker.

An adult who has lived some life can usually feel when they're getting the simulation instead of the real thing. It's not always obvious, but there's usually something. A flatness. A feeling that the words are right but something is missing.

A kid doesn't have that calibration yet.

If children grow up with AI tutors as their primary source of educational mentorship, with AI systems managing their emotional check-ins, with algorithmic content replacing adult conversation about what matters, nobody sounds an alarm. The AI tutor answers questions. The AI system is available at 2am. The metrics look fine.

But what's actually being transmitted in a real student-teacher relationship isn't just information. It's the modeling of what it looks like to be human. To care about an idea. To fail at something and keep going. To struggle with a concept out loud. To actually invest in another person's development. You can't transfer that through a system that doesn't know what caring actually costs.

I don't think we're going to wake up one day and realize the damage. I think it will be more gradual than that. A slow erasure of something we assumed was always there.

This is the part of the conversation where I don't have neat answers. I just think it's worth naming.

---

## The Luxury Problem

And here's where it gets uncomfortable.

If most things get automated, the remaining human-provided services become scarce. Scarcity drives price. A human tattoo artist becomes a premium experience. A human teacher becomes a privilege. A human therapist who has actually been through something becomes something only certain people can afford.

Everyone else gets the simulation.

That's a class divide nobody's really talking about yet. Not a divide in access to technology, but in access to real human presence. The wealthy get the craftsperson, the mentor, the person who has actually lived through what they're helping you with. Everyone else gets the algorithm that performs the same role convincingly enough.

I don't know what to do with that. But I know it's coming. And I think we should be honest about it before we get there.

---

## What About the Rest of Us

I can already hear the pushback. And it's fair.

Everything I've written so far is about the tattoo artist, the teacher, the mother, the coach. Jobs where being human is obviously the point. But what about the trucker? The warehouse worker? The person doing data entry or driving a forklift or processing invoices? Nobody's paying them to be human. They're being paid to move things from one place to another. And a machine can move things.

I don't have a comfortable answer for that. I'm not going to pretend this essay covers everyone. It doesn't.

But I will say this. I think we undervalue the human knowledge in those jobs because we've already started thinking of them as mechanical. A trucker with twenty years on the road reads weather, reads other drivers, makes judgment calls in situations no training dataset has ever seen. A warehouse worker who has been in the same facility for a decade knows things about flow, timing, and edge cases that no system has been taught. That knowledge is real. It's embodied. It's the same kind of knowing I've been talking about this whole essay.

The problem is that nobody frames it that way. Not the companies. Not the public conversation. Not even the workers themselves, sometimes. And the moment you accept that your work has no human value, you make it easier for everyone else to accept it too.

I'm not saying every job will survive. Some won't. But I think more jobs have a human core than we're willing to admit. And the first step to protecting them is refusing to agree that they're purely mechanical when they're not.

---

## I Build This Stuff

I should be transparent about something.

I'm not writing this from the outside. I build AI agents. I build chatbots. I build the automation pipelines that take tasks off people's plates. This is my work. This is how I pay my bills.

So when I say "choose carefully what you automate," I'm saying it as the person who builds the thing. Not as someone afraid of it. I know what it can do because I make it do those things every day. And precisely because I'm that close to it, I can see where the line is.

A school district that saves 40% by switching to AI tutors isn't really choosing. A nursing home that can't hire enough staff isn't really choosing. The market will push toward automation in every space, including the ones that matter most. Intentionality alone won't hold the line when the economics are that compelling.

So the question isn't just "what should we protect?" It's "what are we willing to pay to protect it?" Because human presence is going to cost more. And if we don't decide it's worth the cost, the market will decide for us.

---

## Choose Carefully

I'm not writing this as an anti-AI argument. I use these tools every day. I build with them. I think they're genuinely going to improve a lot of things for a lot of people.

But the frame matters. The question isn't only "can AI do this?" The question is "is the human presence part of what makes this thing what it is?"

Sometimes the answer is no. A lot of back-office work, a lot of research, a lot of logistics and scheduling and data processing. Fine. Build the system. Free yourself up.

But when you're sitting with someone who is in pain, or trying to teach someone something that requires a person to believe in them, or cooking dinner with your kids and the point is the dinner-making and not the dinner, something is at stake that has nothing to do with technical capability.

The jobs that survive automation won't be the ones machines technically can't do. They'll be the ones where being human, having a body, having felt things, having actually been somewhere, is the whole point.

A machine can draw a perfect design. It cannot manage your pain. It cannot sit with you while the needle is moving across your ribs and know, from the inside, that you're getting close to your limit and you need a ten-second break and a breath before you continue.

That's still a person's job.

---

*What would you refuse to hand off to a machine, even if it could do it better than you?*`,
  },
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
- **Building in public, mid-career.** What it looks like to start something new when you have experience but no institutional backing.
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
