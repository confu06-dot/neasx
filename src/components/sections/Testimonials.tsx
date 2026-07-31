import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <Heading
          badge="TESTIMONIALS"
          title="What Our"
          highlight="Clients Say"
          description="Trusted by startups and businesses building modern software."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="p-8">
              <div className="mb-6 text-4xl">⭐️⭐️⭐️⭐️⭐️</div>

              <p className="leading-8 text-slate-300">
                "{item.comment}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-white">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {item.role} • {item.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}