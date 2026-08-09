import { solutions } from "@/data/solutions";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { UserRound, Rocket, Code2, Building2 } from "lucide-react";

const icons = [UserRound, Rocket, Code2, Building2];

export default function UseCases() {
  return (
    <Section id="solutions" className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute left-[-200px] top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-blue-500/[0.045] blur-[130px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Who it's for</Badge>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
            AI that fits{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              your workflow.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            From freelancers to enterprise teams, NEASX products adapt to how
            you work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => {
            const Icon = icons[index];

            return (
              <div
                key={solution.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.045]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-violet-500/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-violet-500/[0.14]" />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 transition-all duration-500 group-hover:border-blue-400/25 group-hover:from-blue-500/25 group-hover:to-violet-500/25">
                  <Icon
                    size={26}
                    className="text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-300"
                  />
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300/60">
                  {solution.subtitle}
                </p>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                  {solution.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}