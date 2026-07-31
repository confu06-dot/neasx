import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-40 lg:pt-52">
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-[-300px] top-[-300px] h-[700px] w-[700px] rounded-full bg-blue-500/15 blur-[180px]" />

        <div className="absolute right-[-300px] bottom-[-300px] h-[700px] w-[700px] rounded-full bg-violet-500/15 blur-[180px]" />

      </div>

      <Container>

        <div className="grid items-center gap-24 lg:grid-cols-[1.1fr_.9fr]">

          {/* LEFT */}

          <div>

            <Badge>
              🚀 SOFTWARE STUDIO
            </Badge>

            <h1 className="mt-8 text-6xl font-black leading-[1.02] text-white lg:text-7xl">

              Building software

              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">

                that grows businesses.

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

              Premium web applications,
              AI products, automation systems
              and scalable backend infrastructure
              built for startups.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button icon>
                Start Project
              </Button>

              <Button variant="secondary">
                View Work
              </Button>

            </div>

            <div className="mt-16 flex gap-16">

              <div>

                <h2 className="text-4xl font-black text-white">
                  50+
                </h2>

                <p className="mt-2 text-slate-400">
                  Technologies
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-white">
                  24h
                </h2>

                <p className="mt-2 text-slate-400">
                  Response
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-white">
                  100%
                </h2>

                <p className="mt-2 text-slate-400">
                  Custom
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative h-[650px]">
                        {/* Code Editor */}

            <div className="absolute left-0 top-0 w-[460px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1220]/90 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-xl">

              <div className="flex items-center justify-between border-b border-white/10 bg-[#111827] px-5 py-4">

                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  app.tsx
                </span>

              </div>

              <div className="space-y-3 p-6 font-mono text-sm">

                <p>
                  <span className="text-violet-400">export default function</span>{" "}
                  <span className="text-cyan-300">Dashboard</span>() {"{"}
                </p>

                <p className="pl-5 text-slate-300">
                  return (
                </p>

                <p className="pl-10 text-blue-300">
                  {"<Analytics />"}
                </p>

                <p className="pl-5 text-slate-300">
                  )
                </p>

                <p className="text-violet-400">
                  {"}"}
                </p>

              </div>

            </div>

            {/* Revenue */}

            <div className="absolute right-0 top-12 w-[260px] rounded-[26px] border border-white/10 bg-[#0F172A]/90 p-6 backdrop-blur-xl">

              <p className="text-sm text-slate-400">
                Monthly Revenue
              </p>

              <h3 className="mt-2 text-5xl font-black text-white">
                $24,820
              </h3>

              <p className="mt-2 text-sm text-emerald-400">
                +18.2%
              </p>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" />

              </div>

            </div>

            {/* Floating Stats */}

            <div className="absolute left-10 top-[360px] w-[220px] rounded-[24px] border border-white/10 bg-[#111827]/90 p-5 backdrop-blur-xl">

              <p className="text-sm text-slate-400">
                Active Clients
              </p>

              <h3 className="mt-3 text-4xl font-black text-white">
                148
              </h3>

              <p className="mt-2 text-sm text-emerald-400">
                +12 this week
              </p>

            </div>
                        {/* AI Assistant */}

            <div className="absolute right-0 top-[250px] w-[260px] rounded-[26px] border border-white/10 bg-[#0F172A]/90 p-6 backdrop-blur-xl">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-2xl">
                  🤖
                </div>

                <div>

                  <h4 className="font-bold text-white">
                    AI Assistant
                  </h4>

                  <p className="text-sm text-emerald-400">
                    Online
                  </p>

                </div>

              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Generate code, automate workflows and build APIs instantly.
              </p>

            </div>

            {/* Deployment */}

            <div className="absolute bottom-0 right-0 w-[320px] rounded-[28px] border border-white/10 bg-[#0F172A]/90 p-6 backdrop-blur-xl">

              <div className="mb-5 flex items-center justify-between">

                <h4 className="font-bold text-white">
                  Deployment
                </h4>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  LIVE
                </span>

              </div>

              <div className="space-y-4">

                {[
                  "Next.js",
                  "FastAPI",
                  "PostgreSQL",
                  "Redis",
                  "Docker",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between"
                  >
                    <span className="text-slate-300">
                      {item}
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                ))}

              </div>

            </div>

            {/* Background Decoration */}

            <div className="absolute left-[180px] top-[220px] -z-10 h-48 w-48 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="absolute right-[120px] bottom-[120px] -z-10 h-40 w-40 rounded-full bg-violet-500/10 blur-[100px]" />
                      </div>

        </div>

      </Container>

    </Section>
  );
}