import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute left-[-200px] top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-blue-500/[0.04] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-200px] bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-violet-500/[0.04] blur-[130px]" />

      <Container>
        {/* Header - mx-auto ve max-w-3xl kaldırıldı, w-full yapıldı */}
        <div className="w-full">
          <span className="inline-flex items-center rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">
            Client Feedback
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            What our clients{" "}
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              say about us.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            We care about the products we build and the people we build them
            with.
          </p>
        </div>

        {/* Testimonials - w-full eklendi */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3 w-full">
          {testimonials.map((item, index) => (
            <Card
              key={item.name}
              className="group relative overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:shadow-2xl hover:shadow-blue-950/20 sm:p-8 w-full"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/[0.06] blur-[70px] transition-all duration-500 group-hover:bg-blue-500/[0.13]" />

              {/* Number */}
              <div className="absolute right-7 top-7 text-[10px] font-bold tracking-[0.3em] text-slate-700">
                0{index + 1}
              </div>

              {/* Stars */}
              <div className="relative flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className="text-sm text-yellow-400 transition-transform duration-300 group-hover:scale-105"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <div className="relative mt-7">
                <span className="absolute -left-1 -top-5 text-5xl font-serif text-blue-400/20">
                  “
                </span>

                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  {item.comment}
                </p>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/10" />

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white shadow-lg shadow-blue-500/10">
                  {item.name.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 truncate text-xs text-slate-500">
                    {item.role} <span className="text-slate-700">•</span>{" "}
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
            </Card>
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-10 flex w-full">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-xs text-emerald-400">
              ✓
            </span>

            <span className="text-xs font-medium text-slate-400">
              Built with care. Delivered with confidence.
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}