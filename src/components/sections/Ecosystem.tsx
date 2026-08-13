import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { PenLine, MessageSquare, Bot, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const ecosystemProducts = [
  { name: "Writer", icon: PenLine, color: "from-blue-500 to-violet-500" },
  { name: "Chat", icon: MessageSquare, color: "from-cyan-500 to-blue-500" },
  { name: "Agent", icon: Bot, color: "from-violet-500 to-fuchsia-500" },
];

export default function Ecosystem({ lang, dict }: { lang: string; dict: any }) {
  return (
    <Section id="ecosystem" className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute right-[-200px] top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-violet-500/[0.045] blur-[130px]" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <Badge>Ecosystem</Badge>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
              One ecosystem.{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                Infinite possibilities.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Every NEASX product is built on the same platform. One account,
              one ecosystem, and tools that work together seamlessly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {ecosystemProducts.map((product) => {
                const Icon = product.icon;

                return (
                  <div
                    key={product.name}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/25 hover:bg-white/[0.05]"
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br text-white ${product.color}`}
                    >
                      <Icon size={16} />
                    </div>

                    <span className="text-sm font-semibold text-white">
                      {product.name}
                    </span>
                  </div>
                );
              })}

              <div className="flex items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-transparent px-5 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <Layers size={16} className="text-slate-400" />
                </div>

                <span className="text-sm font-semibold text-slate-400">
                  +3 more
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/[0.06] via-white/[0.02] to-violet-500/[0.06] p-8 backdrop-blur-sm sm:p-10">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[100px]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  NEASX Platform
                </h3>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                  Connected
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Authentication, AI models, billing, storage and more — shared
                across every product.
              </p>

              <div className="mt-8 space-y-3">
                {["Single sign-on", "Shared AI credits", "Unified billing", "Central workspace"].map(
                  (feature) => (
                    <div
                      key={feature}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="text-sm text-slate-300">{feature}</span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                    </div>
                  )
                )}
              </div>

              <Link
                href="#products"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-cyan-300"
              >
                Explore the ecosystem
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}