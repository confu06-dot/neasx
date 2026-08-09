import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { features } from "@/data/features";

export default function Why() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[150px]" />

      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/[0.07] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              The NEASX Advantage
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
              Software built for
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                real-world impact.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-400 lg:ml-auto lg:pb-1 sm:text-lg">
            From the first idea to production, we focus on building reliable,
            scalable and maintainable software that creates measurable value.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:shadow-2xl hover:shadow-blue-950/20 sm:p-9"
            >
              {/* Background glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/[0.06] blur-[80px] transition-all duration-500 group-hover:bg-blue-500/[0.13]" />

              {/* Number */}
              <div className="absolute right-7 top-7 text-[10px] font-bold tracking-[0.3em] text-slate-700 transition-colors duration-300 group-hover:text-slate-600">
                0{index + 1}
              </div>

              <div className="relative flex gap-5">
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-xl transition-all duration-500 group-hover:border-blue-400/25 group-hover:from-blue-500/25 group-hover:to-violet-500/25 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                  ⚡
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
            </Card>
          ))}
        </div>

        {/* Bottom metrics */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
            <p className="text-2xl font-black text-white">01</p>
            <p className="mt-1 text-xs text-slate-500">
              One dedicated team
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
            <p className="text-2xl font-black text-white">∞</p>
            <p className="mt-1 text-xs text-slate-500">
              Built to scale
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
            <p className="text-2xl font-black text-white">24/7</p>
            <p className="mt-1 text-xs text-slate-500">
              Production mindset
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}