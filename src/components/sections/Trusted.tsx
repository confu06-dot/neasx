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
    <Section>
      <Container>
        <p className="mb-10 text-center text-sm uppercase tracking-[0.35em] text-slate-500">
          Built with modern technologies
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10"
            >
              {tech}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}