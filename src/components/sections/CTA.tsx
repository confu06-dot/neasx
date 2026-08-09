import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[140px]" />

      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/[0.08] via-white/[0.025] to-violet-500/[0.08] px-6 py-16 shadow-2xl shadow-black/20 sm:px-10 lg:px-16 lg:py-20 w-full">
          {/* Inner glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]" />

          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Top accent */}
          <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

          {/* w-full yapıldı ve genişletildi */}
          <div className="relative w-full text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
              Start Your Project
            </span>

            {/* Heading */}
            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Let's build something
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                amazing together.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:mt-8 sm:text-lg sm:leading-8">
              From idea to production, we build scalable software, AI
              solutions and modern digital experiences designed around your
              business.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button icon>Start Project</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>

            {/* Trust points */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                Custom solutions
              </span>
              <span className="hidden h-3 w-px bg-white/10 sm:block" />
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                Modern technology
              </span>
              <span className="hidden h-3 w-px bg-white/10 sm:block" />
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                Scalable architecture
              </span>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="pointer-events-none absolute bottom-5 left-5 h-16 w-16 rounded-bl-2xl border-b border-l border-blue-400/10" />
          <div className="pointer-events-none absolute right-5 top-5 h-16 w-16 rounded-tr-2xl border-r border-t border-violet-400/10" />
        </div>
      </Container>
    </Section>
  );
}