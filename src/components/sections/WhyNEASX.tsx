import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { reasons } from "@/data/why";

export default function WhyNEASX() {
  return (
    <Section id="about">
      <Container>
        <Heading
          badge="WHY CHOOSE US"
          title="Why"
          highlight="NEASX"
          description="Everything we build is focused on speed, quality and long-term scalability."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
              >
                <Icon
                  size={38}
                  className="mb-6 text-blue-400 transition group-hover:scale-110"
                />

                <h3 className="text-xl font-semibold text-white">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}