import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <Heading
          badge="OUR SERVICES"
          title="What We"
          highlight="Build"
          description="We help startups and businesses launch products faster with modern software engineering."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="p-8"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20">
                  <Icon
                    size={48}
                    className="text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {service.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-medium text-blue-400 transition-all duration-300 group-hover:gap-4">
                  Learn More
                  <span>→</span>
                </button>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}