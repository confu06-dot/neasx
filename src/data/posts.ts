export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  tag: string;
}

export const posts: Post[] = [
  {
    slug: "introducing-neasx",
    title: "Introducing NEASX: An ecosystem of AI products for real work",
    excerpt:
      "Today we're excited to announce NEASX — a growing ecosystem of AI products designed to automate real work and help people and businesses move faster.",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    tag: "Announcement",
    content: [
      "Today we're excited to announce NEASX — a growing ecosystem of AI products designed to automate real work and help people and businesses move faster.",
      "For the past year, we've been building behind the scenes: Writer for long-form content, Chat for everyday answers, Agent for autonomous workflows, Studio for creative work, Voice for spoken interaction, Vision for understanding images, and an API for developers.",
      "The core idea is simple: one account, one credit system, one workspace — and every product works together. Write a draft in Writer, polish it with Chat, automate the follow-up with Agent, and publish through the API.",
      "NEASX is free to start. No credit card required. Every account comes with 30,000 free credits per month to explore the entire ecosystem.",
      "We can't wait to see what you build. Welcome to NEASX.",
    ],
  },
  {
    slug: "writer-vs-chat",
    title: "Writer vs. Chat: Which NEASX product should you use?",
    excerpt:
      "Both Writer and Chat are powered by advanced language models, but they serve different purposes. Here's how to choose the right tool.",
    date: "Feb 3, 2026",
    readTime: "4 min read",
    tag: "Guides",
    content: [
      "A question we hear a lot: 'What's the difference between Writer and Chat?' Both use advanced language models, but they're optimized for different jobs.",
      "Writer is built for long-form, focused creation. It's ideal for blog posts, essays, reports, emails and any writing that needs structure. It keeps your context, remembers your style, and helps you finish drafts faster.",
      "Chat is optimized for conversation. Use it for quick answers, brainstorming, research, coding help, and anything where back-and-forth matters. It's fast, sharp and great at iterating with you.",
      "The best workflow? Use both. Brainstorm with Chat, write with Writer, refine with Chat again. They share the same account and credits, so switching is seamless.",
      "Start free today at neasx.com — no credit card required.",
    ],
  },
  {
    slug: "agents-101",
    title: "Agents 101: How autonomous AI agents work",
    excerpt:
      "AI agents are transforming how we work. Learn what they are, how they differ from chatbots, and how you can use them.",
    date: "Mar 12, 2026",
    readTime: "7 min read",
    tag: "AI Explained",
    content: [
      "Everyone is talking about AI agents — but what actually are they? At a high level, an agent is an AI system that can take a goal, break it into steps, use tools, and act on your behalf.",
      "Unlike a chatbot that only responds to prompts, an agent can plan. Give it a task like 'research competitors and draft a comparison table' and it will search the web, gather data, structure the output, and hand you a result.",
      "NEASX Agent is designed around this idea. It has access to browsing, reasoning and structured outputs — and it can chain multiple steps together without you babysitting it.",
      "The best use cases today: research, data gathering, content planning, scheduling, and any repetitive workflow that follows rules.",
      "Agents aren't magic — they're just good at following instructions and connecting tools. But as they improve, they'll handle more of the work so you can focus on the decisions that matter.",
    ],
  },
];