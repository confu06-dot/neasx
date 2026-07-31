import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { process } from "@/data/process";

export default function Process() {
  return (
    <Section id="process">
      <Container>
        <Heading
          badge="OUR PROCESS"
          title="How We"
          highlight="Work"
          description="A simple and transparent process from idea to launch."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {process.map((item) => (
            <Card key={item.step} className="p-8">
              <span className="text-5xl font-black text-blue-500/30">
                {item.step}
              </span>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}