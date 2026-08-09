import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { services } from "@/data/services";

export default function Services() {
  const featuredServices = services.slice(0, 3);

  return (
    <Section
      id="services"
      className="relative overflow-hidden !py-20 sm:!py-24 lg:!py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[140px]" />

      <Container>
        {/* max-w-3xl ve mx-auto kaldırıldı, sola hizalandı veya tam genişlik verildi */}
        <div className="w-full">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            What We{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Build
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            We help startups and businesses launch products faster with
            modern software engineering.
          </p>
        </div>

        {/* max-w-[1400px] ve mx-auto kaldırıldı, w-full yapıldı */}
        <div className="w-full mt-12 grid gap-6 md:grid-cols-3 lg:mt-14">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group relative min-h-[270px] p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8 w-full"
              >
                <span className="absolute right-7 top-7 text-[10px] font-bold tracking-[0.25em] text-slate-700">
                  0{index + 1}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 transition-all duration-500 group-hover:border-blue-400/30 group-hover:from-blue-500/25 group-hover:to-violet-500/25">
                  <Icon
                    size={30}
                    className="text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-300"
                  />
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {service.description}
                </p>

                <button
                  type="button"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all duration-300 group-hover:gap-3 group-hover:text-cyan-300"
                >
                  Learn More
                  <span>→</span>
                </button>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}