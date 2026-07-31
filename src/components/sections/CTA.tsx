import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-600/20 via-slate-900 to-violet-600/20 px-12 py-24">

          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl text-center">

            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-blue-400">
              START YOUR PROJECT
            </span>

            <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
              Let's build something
              <span className="block bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                amazing together.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              From idea to production, we build scalable software,
              AI solutions and modern digital experiences.
            </p>

            <div className="mt-12 flex justify-center gap-5">

              <Button icon>
                Start Project
              </Button>

              <Button variant="secondary">
                Contact Us
              </Button>

            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}