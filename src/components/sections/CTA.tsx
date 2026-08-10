import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.09] via-[#0b1220]/90 to-violet-500/[0.09] px-6 py-16 text-center sm:px-12 lg:py-24">
          {/* Glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/[0.12] blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/[0.12] blur-[100px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[90px]" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300/70">
              Start today
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Ready to get{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                work done?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Join NEASX and unlock the full ecosystem of AI products.
              Free to start. No credit card required.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/signup">
                <Button icon>Start for Free</Button>
              </Link>

              <Link href="#products">
                <Button variant="secondary">View Products</Button>
              </Link>
            </div>

            <p className="mt-8 text-xs text-slate-600">
              No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}