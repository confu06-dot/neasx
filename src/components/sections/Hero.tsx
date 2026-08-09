import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Bot } from "lucide-react";

const deploymentStack = [
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
];

const revenueBars = [18, 25, 21, 32, 28, 42, 36, 50];

export default function Hero() {
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
            <Badge>🚀 SOFTWARE STUDIO</Badge>

            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[72px]">
              Building software
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                that grows
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                businesses.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Premium web applications, AI products, automation systems and
              scalable backend infrastructure built for startups and growing
              businesses.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Button icon>Start Project</Button>

              <Button variant="secondary">View Work</Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6 sm:mt-14 sm:gap-x-10">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  50+
                </h2>

                <p className="mt-1.5 text-sm text-slate-400">
                  Technologies
                </p>
              </div>

              <div className="hidden h-12 w-px bg-white/10 sm:block" />

              <div>
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  24h
                </h2>

                <p className="mt-1.5 text-sm text-slate-400">Response</p>
              </div>

              <div className="hidden h-12 w-px bg-white/10 sm:block" />

              <div>
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  100%
                </h2>

                <p className="mt-1.5 text-sm text-slate-400">Custom</p>
              </div>
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="relative mx-auto h-[600px] w-full max-w-[560px]">
            {/* Revenue */}
            <div className="absolute right-0 top-0 z-30 w-[min(100%,370px)] rounded-[24px] border border-white/10 bg-[#0b1220]/95 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm text-slate-400">Total Revenue</p>

                  <h3 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
                    $24,820
                  </h3>

                  <p className="mt-2 text-sm text-emerald-400">
                    ↑ 18.2%
                    <span className="ml-1 text-slate-500">
                      vs last month
                    </span>
                  </p>
                </div>

                {/* Mini chart */}
                <div className="flex h-12 items-end gap-1.5 pt-2">
                  {revenueBars.map((height, index) => (
                    <span
                      key={index}
                      className="w-1.5 rounded-full bg-gradient-to-t from-blue-500 to-violet-400"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Active Clients */}
            <div className="absolute left-0 top-[175px] z-30 w-[225px] rounded-[24px] border border-white/10 bg-[#0f172a]/95 p-5 shadow-xl shadow-black/30 backdrop-blur-xl">
              <p className="text-sm text-slate-400">Active Clients</p>

              <h3 className="mt-2 text-4xl font-black text-white">148</h3>

              <p className="mt-2 text-sm text-emerald-400">
                +12 this week
              </p>

              <div className="mt-5 flex -space-x-2">
                {["A", "M", "S", "K", "+"].map((item, index) => (
                  <div
                    key={index}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0f172a] bg-gradient-to-br from-blue-500 to-violet-500 text-[10px] font-bold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant */}
            <div className="absolute right-0 top-[190px] z-20 w-[290px] rounded-[24px] border border-white/10 bg-[#0f172a]/95 p-5 shadow-xl shadow-black/30 backdrop-blur-xl sm:w-[300px]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/20">
                  <Bot className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h4 className="font-bold text-white">AI Assistant</h4>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                    <p className="text-sm text-emerald-400">Online</p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                Generate code, automate workflows and build APIs instantly.
              </p>
            </div>

            {/* Deployment */}
            <div className="absolute bottom-0 right-0 z-30 w-[320px] rounded-[24px] border border-white/10 bg-[#0f172a]/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:w-[340px]">
              <div className="mb-5 flex items-center justify-between">
                <h4 className="font-bold text-white">Deployment</h4>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  LIVE
                </span>
              </div>

              <div className="space-y-3">
                {deploymentStack.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-slate-300">{item}</span>

                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
                  </div>
                ))}
              </div>

              {/* Decorative lines */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-14 w-full overflow-hidden rounded-b-[24px] opacity-20">
                <div className="absolute bottom-[-20px] left-0 h-16 w-full rounded-[50%] border-t border-blue-400/50" />
                <div className="absolute bottom-[-28px] left-10 h-16 w-full rounded-[50%] border-t border-violet-400/50" />
              </div>
            </div>

            {/* Dashboard glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[110px]" />
          </div>
        </div>
      </Container>
    </Section>
  );
}