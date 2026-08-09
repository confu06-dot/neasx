import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { reasons } from "@/data/why";

export default function WhyNEASX() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute left-[-200px] top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-blue-500/[0.045] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-200px] bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-violet-500/[0.04] blur-[130px]" />

      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">
            Why NEASX
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Built Different.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              Built to Scale.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            We combine engineering, design and AI to build software that
            solves real business problems.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-blue-950/20"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/[0.08] blur-[60px] transition-all duration-500 group-hover:bg-blue-500/[0.16]" />

                {/* Number */}
                <div className="absolute right-6 top-6 text-[10px] font-bold tracking-[0.25em] text-slate-700 transition-colors duration-300 group-hover:text-slate-600">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 transition-all duration-500 group-hover:border-blue-400/25 group-hover:from-blue-500/25 group-hover:to-violet-500/25 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                  <Icon
                    size={28}
                    className="text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-300"
                  />
                </div>

                {/* Content */}
                <h3 className="relative mt-7 text-xl font-bold tracking-tight text-white">
                  {reason.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-400">
                  {reason.description}
                </p>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />

            <span className="text-xs font-medium text-slate-400">
              Engineering focused. Business driven.
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}