import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Code2, Smartphone, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, scalable and lightning-fast web applications.",
    features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native feeling mobile experiences for iOS & Android.",
    features: ["React Native", "Flutter", "Swift", "Kotlin"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Automation, AI integrations and intelligent workflows.",
    features: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
    gradient: "from-fuchsia-500 to-pink-500",
  },
];

export default function Services({ lang, dict }: { lang: string; dict: any }) {
  return (
    <Section id="services" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/[0.04] blur-[140px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            BUILT WITH MODERN TECHNOLOGIES
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
            What We{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Build
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            We help startups and businesses launch products faster with modern
            software engineering.
          </p>
        </div>

        {/* Technology Badges */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "FastAPI",
            "Python",
            "PostgreSQL",
            "Redis",
            "Docker",
            "OpenAI",
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.05]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-blue-500/[0.14]" />

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${service.gradient}`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${lang}/contact`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all duration-300 hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
