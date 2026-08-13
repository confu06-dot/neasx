import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Bot, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const agentSteps = [
  { label: "Research complete", done: true },
  { label: "Data analyzed", done: true },
  { label: "Report generated", done: true },
];

interface HeroProps {
  lang: string;
  dict: any;
}

export default function Hero({ lang, dict }: HeroProps) {
  return (
    <Section className="relative overflow-hidden !pt-20 !pb-8 sm:!pt-24 lg:!pt-28 lg:!pb-10">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-280px] top-[-260px] h-[650px] w-[650px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-300px] bottom-[-280px] h-[700px] w-[700px] rounded-full bg-violet-500/15 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[150px]" />
      </div>

      <Container>
        <div className="grid min-h-[540px] items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          {/* LEFT */}
          <div className="relative z-10">
            <Badge>{dict.hero?.badge || '🤖 AI PRODUCT COMPANY'}</Badge>

            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[72px]">
              {dict.hero?.title || 'AI that gets'}
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                {dict.hero?.titleHighlight || 'work done.'}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {dict.hero?.description || 'NEASX builds intelligent AI products that automate repetitive work, accelerate ideas, and help people and businesses accomplish more.'}
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={`/${lang}#products`}>
                <Button icon>{dict.hero?.exploreProducts || 'Explore Products'}</Button>
              </Link>

              <Link href={`/${lang}/signup`}>
                <Button variant="secondary">{dict.hero?.getStarted || 'Get Started'}</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6 sm:mt-14 sm:gap-x-10">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  7
                </h2>

                <p className="mt-1.5 text-sm text-slate-400">
                  {dict.hero?.stats?.products || 'AI Products'}
                </p>
              </div>

              <div className="hidden h-12 w-px bg-white/10 sm:block" />

              <div>
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  1
                </h2>

                <p className="mt-1.5 text-sm text-slate-400">
                  {dict.hero?.stats?.ecosystem || 'Ecosystem'}
                </p>
              </div>

              <div className="hidden h-12 w-px bg-white/10 sm:block" />

              <div>
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  ∞
                </h2>

                <p className="mt-1.5 text-sm text-slate-400">
                  {dict.hero?.stats?.possibilities || 'Possibilities'}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT AGENT UI */}
          <div className="relative mx-auto h-[600px] w-full max-w-[560px]">
            {/* Agent Card */}
            <div className="absolute right-0 top-0 z-30 w-[min(100%,420px)] rounded-[24px] border border-white/10 bg-[#0b1220]/95 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
                  <Bot className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h4 className="font-bold text-white">NEASX Agent</h4>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                    <p className="text-sm text-emerald-400">Working</p>
                  </div>
                </div>
              </div>

              {/* Task */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Task
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Analyze this report
                </p>

                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" />
                </div>
              </div>

              {/* Steps */}
              <div className="mt-6 space-y-3">
                {agentSteps.map((step) => (
                  <div
                    key={step.label}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="text-sm text-slate-300">
                      {step.label}
                    </span>

                    <CheckCircle2
                      className="h-4 w-4 text-emerald-400"
                      size={16}
                    />
                  </div>
                ))}
              </div>

              {/* Completion */}
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.06] px-5 py-4">
                <span className="text-sm font-medium text-emerald-400">
                  Done in 42 sec
                </span>

                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
              </div>
            </div>

            {/* Secondary card - Writer */}
            <div className="absolute bottom-0 left-0 z-20 w-[250px] rounded-[24px] border border-white/10 bg-[#0f172a]/95 p-5 shadow-xl shadow-black/30 backdrop-blur-xl sm:w-[270px]">
              <p className="text-sm text-slate-400">NEASX Writer</p>

              <h3 className="mt-2 text-3xl font-black text-white">
                Write
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                                Rewrite, summarize, research and translate — in one
                workspace.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  AVAILABLE
                </span>
              </div>
            </div>

            {/* Secondary card - Chat */}
            <div className="absolute right-6 top-[190px] z-20 w-[200px] rounded-[24px] border border-white/10 bg-[#0f172a]/95 p-5 shadow-xl shadow-black/30 backdrop-blur-xl sm:w-[220px]">
              <p className="text-sm text-slate-400">NEASX Chat</p>

              <p className="mt-2 text-xl font-bold text-white">
                Intelligent workspace
              </p>

              <div className="mt-4 space-y-2">
                <div className="h-2 w-3/4 rounded-full bg-white/[0.08]" />
                <div className="h-2 w-1/2 rounded-full bg-white/[0.08]" />
                <div className="h-2 w-2/3 rounded-full bg-blue-400/30" />
              </div>
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[110px]" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
