import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { MapPin, ArrowLeft, Check } from "lucide-react";

export const dynamicParams = true;

const roles = [
  {
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote / Istanbul",
    type: "Full-time",
    summary:
      "You'll build polished, high-performance interfaces for the NEASX ecosystem using React, Next.js and TypeScript.",
    responsibilities: [
      "Own the architecture of our frontend applications",
      "Build reusable, accessible UI components",
      "Collaborate with design to create delightful experiences",
      "Optimize performance across all products",
      "Mentor junior engineers on the team",
    ],
    requirements: [
      "5+ years of frontend engineering experience",
      "Deep expertise in React, Next.js and TypeScript",
      "Strong understanding of web performance and accessibility",
      "Experience with design systems and component libraries",
      "Fluent in English; Turkish is a plus",
    ],
  },
  {
    slug: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    department: "AI",
    location: "Remote / Istanbul",
    type: "Full-time",
    summary:
      "You'll work on inference pipelines, prompt optimization and model evaluation across all NEASX AI products.",
    responsibilities: [
      "Design and maintain inference infrastructure",
      "Optimize prompts and model selection for cost and quality",
      "Build evaluation frameworks for AI quality",
      "Collaborate with product teams on new AI features",
      "Stay current with the latest research and models",
    ],
    requirements: [
      "3+ years of ML engineering experience",
      "Strong Python and PyTorch skills",
      "Experience with LLM APIs (OpenAI, Anthropic, etc.)",
      "Understanding of vector databases and RAG",
      "Production experience with GPU infrastructure is a plus",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Remote / Istanbul",
    type: "Full-time",
    summary:
      "You'll craft beautiful, intuitive experiences that make AI tools approachable for everyone.",
    responsibilities: [
      "Design end-to-end product experiences",
      "Build and maintain our design system",
      "Run user research and usability testing",
      "Partner with engineering to ship pixel-perfect UI",
      "Prototype interactions and micro-animations",
    ],
    requirements: [
      "4+ years of product design experience",
      "Strong portfolio showing end-to-end product work",
      "Proficiency in Figma and prototyping tools",
      "Experience designing developer or AI tools is a plus",
      "Excellent visual and interaction design skills",
    ],
  },
  {
    slug: "developer-relations-lead",
    title: "Developer Relations Lead",
    department: "Community",
    location: "Remote (Global)",
    type: "Full-time",
    summary:
      "You'll build our developer community, create technical content and advocate for the NEASX API.",
    responsibilities: [
      "Build and nurture the NEASX developer community",
      "Create tutorials, docs and sample projects",
      "Speak at events and represent NEASX publicly",
      "Gather feedback and advocate for developer needs",
      "Own the developer newsletter and social channels",
    ],
    requirements: [
      "4+ years in developer relations or technical content",
      "Strong technical writing skills",
      "Comfortable coding in at least one language (Python, TS, etc.)",
      "Public speaking experience",
      "Self-driven and comfortable working remotely",
    ],
  },
  {
    slug: "backend-engineer-go",
    title: "Backend Engineer (Go)",
    department: "Engineering",
    location: "Remote / Istanbul",
    type: "Full-time",
    summary:
      "You'll build scalable microservices that power credits, billing and core platform services.",
    responsibilities: [
      "Design and build Go microservices",
      "Implement credit metering and billing systems",
      "Ensure high availability and low latency",
      "Write tests and maintain CI/CD pipelines",
      "Collaborate with frontend and ML teams",
    ],
    requirements: [
      "4+ years of backend engineering experience",
      "Strong Go programming skills",
      "Experience with PostgreSQL and Redis",
      "Understanding of distributed systems",
      "Experience with cloud platforms (AWS/GCP)",
    ],
  },
];

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);

  if (!role) {
    return { title: "Job not found" };
  }

  return {
    title: `${role.title} at NEASX`,
    description: role.summary,
  };
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);

  if (!role) {
    notFound();
  }

  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />
        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            All roles
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Badge>{role.department}</Badge>
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400">
              {role.type}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin size={12} />
              {role.location}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            {role.title}
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-400">
            {role.summary}
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-lg font-bold tracking-tight text-white">
                What you'll do
              </h2>
              <ul className="mt-4 space-y-3">
                {role.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                  >
                    <Check
                      size={16}
                      className="mt-1.5 shrink-0 text-blue-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold tracking-tight text-white">
                What you'll bring
              </h2>
              <ul className="mt-4 space-y-3">
                {role.requirements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                  >
                    <Check
                      size={16}
                      className="mt-1.5 shrink-0 text-blue-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-12 rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-sm">
            <h2 className="text-xl font-bold tracking-tight text-white">
              Interested in this role?
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Send your CV and a short note about why you're a great fit
              to careers@neasx.com
            </p>
            <Link
              href="mailto:careers@neasx.com"
              className="mt-6 inline-block rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20"
            >
              Apply now
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}