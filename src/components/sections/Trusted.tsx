import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "Redis",
  "OpenAI",
];

export default function Trusted() {
  return (
    <Section className="relative py-8 sm:py-10">
      <Container>
        <div className="relative">
          {/* Heading */}
          <p className="mb-5 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-slate-500">
            Built with modern technologies
          </p>

          {/* Technology Grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="group flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] px-3 text-xs font-medium text-slate-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/25 hover:bg-white/[0.05] hover:text-slate-200"
              >
                <span className="transition-colors duration-300 group-hover:text-blue-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}