import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { changelogEntries } from "@/data/changelog";
import { Sparkles, TrendingUp, Wrench, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Latest updates, new features and improvements to NEASX products. Stay up to date with product releases.",
  keywords: ["changelog", "updates", "releases", "new features", "NEASX news"],
};

const typeIcons = {
  new: Sparkles,
  improved: TrendingUp,
  fixed: Wrench,
};

const typeLabels = {
  new: "New",
  improved: "Improved",
  fixed: "Fixed",
};

const typeColors = {
  new: "text-emerald-400 bg-emerald-500/10 border-emerald-400/20",
  improved: "text-blue-400 bg-blue-500/10 border-blue-400/20",
  fixed: "text-amber-400 bg-amber-500/10 border-amber-400/20",
};

export default function ChangelogPage() {
  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />
        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Changelog</Badge>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            What's new in{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              NEASX
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            The latest features, improvements and fixes across the NEASX
            ecosystem.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {changelogEntries.map((entry, index) => (
              <div key={entry.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-8 hidden h-3 w-3 rounded-full border-2 border-blue-400 bg-[#050816] md:block" />

                <div className="rounded-[32px] border border-white/10 bg-white/[0.025] p-8 backdrop-blur-sm md:ml-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300">
                          v{entry.version}
                        </span>

                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Calendar size={14} />
                          {new Date(entry.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>

                      <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
                        {entry.title}
                      </h2>

                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {entry.description}
                      </p>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.products.map((product) => (
                      <span
                        key={product}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-500"
                      >
                        {product}
                      </span>
                    ))}
                  </div>

                  {/* Changes */}
                  <div className="mt-6 space-y-6">
                    {entry.changes.map((change, changeIndex) => {
                      const Icon = typeIcons[change.type];

                      return (
                        <div key={changeIndex}>
                          <div
                            className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold ${typeColors[change.type]}`}
                          >
                            <Icon size={14} />
                            {typeLabels[change.type]}
                          </div>

                          <ul className="mt-3 space-y-2">
                            {change.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe */}
        <div className="mx-auto mt-16 max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white">
            Stay updated with new releases
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Get notified when we ship new features and improvements.
          </p>

          <div className="mx-auto mt-6 flex max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-blue-400/30 focus:bg-white/10"
            />

            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
