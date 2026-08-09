import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Play, ListTodo, PackageCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Run",
    description:
      "Pick a product or agent, describe your task, and run it. No complex setup.",
    icon: Play,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-400/20",
  },
  {
    number: "02",
    title: "Task",
    description:
      "NEASX breaks the work into manageable steps and executes them with AI.",
    icon: ListTodo,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-400/20",
  },
  {
    number: "03",
    title: "Receive",
    description:
      "Get your results — documents, data, images, insights — ready to use.",
    icon: PackageCheck,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-400/20",
  },
];

export default function HowItWorks() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.03] blur-[150px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>How it Works</Badge>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
            Run. Task.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              Receive.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Turn a simple instruction into real results in three steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          {/* Connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.045]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-blue-500/[0.13]" />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${step.bg}`}
                  >
                    <Icon size={26} className={step.color} />
                  </div>

                  <span className="text-4xl font-black text-white/[0.06] transition-colors duration-500 group-hover:text-white/[0.12]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>

                {index < 2 && (
                  <ChevronRight
                    className="absolute right-6 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-slate-600 lg:block"
                    size={24}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="#products"
            className="text-sm font-semibold text-blue-400 transition hover:text-cyan-300"
          >
            See how it works →
          </Link>
        </div>
      </Container>
    </Section>
  );
}