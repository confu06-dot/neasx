import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  MessageCircle,
  AtSign,
  Code,
  Video,
  BookOpen,
  Users,
  Sparkles,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the NEASX community. Connect with other users, share ideas, and get help from our team and community members.",
  keywords: [
    "NEASX community",
    "AI community",
    "Discord",
    "developer community",
  ],
};

const channels = [
  {
    icon: MessageCircle,
    name: "Discord",
    description: "Join our Discord server for real-time chat and support",
    members: "12,000+ members",
    link: "https://discord.gg/neasx",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: AtSign,
    name: "Twitter / X",
    description: "Follow for product updates and AI insights",
    members: "25,000+ followers",
    link: "https://x.com/neasxlabs",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code,
    name: "GitHub",
    description: "Contribute to open-source projects and examples",
    members: "5,000+ stars",
    link: "https://github.com/neasx",
    color: "from-slate-500 to-slate-700",
  },
  {
    icon: Video,
    name: "YouTube",
    description: "Watch tutorials, demos and product walkthroughs",
    members: "8,000+ subscribers",
    link: "https://youtube.com/@neasxlabs",
    color: "from-red-500 to-pink-500",
  },
];

const showcaseProjects = [
  {
    title: "AI Content Pipeline",
    author: "Sarah Chen",
    description:
      "Automated content creation workflow using Writer, Agent and API",
    category: "Automation",
    likes: 234,
  },
  {
    title: "Research Assistant Bot",
    author: "Marcus Rodriguez",
    description:
      "Built a research bot that summarizes academic papers using NEASX Chat",
    category: "Research",
    likes: 189,
  },
  {
    title: "Multi-language Support",
    author: "Emma Thompson",
    description:
      "Translation workflow for blog posts across 10 languages with Writer",
    category: "Translation",
    likes: 156,
  },
  {
    title: "Data Analysis Agent",
    author: "David Kim",
    description:
      "Automated data processing and reporting with NEASX Agent API",
    category: "Data",
    likes: 198,
  },
];

const resources = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Guides, tutorials and API reference",
    link: "/docs",
  },
  {
    icon: Code2,
    title: "Code Examples",
    description: "Sample projects and integrations",
    link: "https://github.com/neasx/examples",
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Ask questions and share knowledge",
    link: "https://community.neasx.com",
  },
  {
    icon: Sparkles,
    title: "Feature Requests",
    description: "Vote on and suggest new features",
    link: "https://feedback.neasx.com",
  },
];

export default function CommunityPage() {
  return (
    <>
      <Section className="relative overflow-hidden !pt-32 !pb-16 lg:!pt-36">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />
          <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Community</Badge>

            <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Join the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                NEASX community
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Connect with other builders, share projects, get help, and stay
              up to date with the latest from NEASX.
            </p>
          </div>

          {/* Channels */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {channels.map((channel) => {
              const Icon = channel.icon;

              return (
                <Link
                  key={channel.name}
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.04]"
                >
                  <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-blue-500/[0.14]" />

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${channel.color}`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {channel.name}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {channel.description}
                  </p>

                  <div className="mt-4 inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    {channel.members}
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Community Showcase */}
      <Section className="!py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Built by the community
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-400">
              Amazing projects created by NEASX users around the world.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {showcaseProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{project.title}</h3>

                    <p className="mt-1 text-xs text-slate-500">
                      by {project.author}
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-500">
                    {project.category}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <span>❤️</span>
                  <span>{project.likes} likes</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="text-sm font-semibold text-blue-400 transition hover:text-cyan-300"
            >
              Share your project →
            </Link>
          </div>
        </Container>
      </Section>

      {/* Resources */}
      <Section className="!py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Community resources
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-400">
              Everything you need to build, learn and contribute.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <Link
                  key={resource.title}
                  href={resource.link}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-violet-500/15">
                    <Icon size={24} className="text-blue-400" />
                  </div>

                  <h3 className="mt-4 font-bold text-white">
                    {resource.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {resource.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="!py-20">
        <Container>
          <div className="rounded-[40px] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.09] via-[#0b1220]/90 to-violet-500/[0.09] px-8 py-16 text-center sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              Ready to join the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                community?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
              Start building with NEASX and connect with thousands of creators.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/signup">
                <Button icon>Get Started Free</Button>
              </Link>

              <Link href="https://discord.gg/neasx" target="_blank">
                <Button variant="secondary">Join Discord</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
