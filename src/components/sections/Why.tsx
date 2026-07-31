import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { features } from "@/data/features";

export default function Why() {
  return (
    <Section>
      <Container>
        <Heading
          badge="WHY NEASX"
          title="Why Companies"
          highlight="Choose Us"
          description="We build software with performance, scalability and design in mind."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-2xl">
                ⚡
              </div>

              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}