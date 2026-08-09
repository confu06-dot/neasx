import { reasons } from "@/data/why";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function WhyNEASX() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute left-[-200px] top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-blue-500/[0.045] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-200px] bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-violet-500/[0.04] blur-[130px]" />

      <Container>
        <div className="w-full text-center">
          <Badge>Why NEASX</Badge>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Built for real work.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              Built to scale.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            One ecosystem. Five principles. Every product designed to help
            you accomplish more with AI.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-5 w-full">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-blue-950/20 w-full"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/[0.08] blur-[60px] transition-all duration-500 group-hover:bg-blue-500/[0.16]" />

                <div className="absolute right-6 top-6 text-[10px] font-bold tracking-[0.25em] text-slate-700 transition-colors duration-300 group-hover:text-slate-600">
                  0{index + 1}
                </div>

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 transition-all duration-500 group-hover:border-blue-400/25 group-hover:from-blue-500/25 group-hover:to-violet-500/25 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                  <Icon
                    size={28}
                    className="text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-300"
                  />
                </div>

                <h3 className="relative mt-7 text-xl font-bold tracking-tight text-white">
                  {reason.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-400">
                  {reason.description}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}