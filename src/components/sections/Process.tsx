import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { process } from "@/data/process";

export default function Process() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.035] blur-[140px]" />

      <Container>
        {/* Header - mx-auto ve max-w-3xl kaldırıldı, w-full yapıldı */}
        <div className="w-full">
          <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
            Our Process
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            From idea to{" "}
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              production.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A clear and collaborative process designed to turn your idea into
            reliable software.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-16 w-full">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-blue-500/20 via-violet-500/40 to-blue-500/20 lg:block" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 w-full">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="group relative w-full"
              >
                {/* Step indicator */}
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-[#080f1c] shadow-lg shadow-blue-950/20 transition-all duration-500 group-hover:border-blue-400/40 group-hover:shadow-blue-500/10 lg:mx-0">
                  <span className="text-sm font-black text-blue-400 transition-colors duration-300 group-hover:text-cyan-300">
                    {item.step}
                  </span>
                </div>

                {/* Card */}
                <div className="mt-5 h-full rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-blue-400/20 group-hover:bg-white/[0.045] group-hover:shadow-2xl group-hover:shadow-blue-950/20 w-full">
                  {/* Large step number */}
                  <div className="text-5xl font-black tracking-[-0.05em] text-white/[0.05] transition-colors duration-500 group-hover:text-blue-400/[0.08]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                    {item.description}
                  </p>

                  {/* Accent */}
                  <div className="mt-7 h-px w-10 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex w-full">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />

            <span className="text-xs font-medium text-slate-400">
              Clear communication at every step.
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}