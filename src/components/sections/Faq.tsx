"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { faqs } from "@/data/faq";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[150px]" />

      <Container>
        <div className="w-full">
          <Heading
            badge="FAQ"
            title="Frequently Asked"
            highlight="Questions"
            description="Everything you might want to know before starting a project."
          />
        </div>

        {/* FAQ List - mx-auto ve max-w-4xl kaldırıldı, w-full yapıldı */}
        <div className="w-full mt-14 space-y-3 lg:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className={`group overflow-hidden rounded-2xl border transition-all duration-500 w-full ${
                  isOpen
                    ? "border-blue-400/20 bg-white/[0.045] shadow-xl shadow-blue-950/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.035]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 px-6 py-5 text-left sm:px-7 sm:py-6"
                >
                  {/* Number */}
                  <span
                    className={`hidden text-xs font-bold tracking-[0.2em] transition-colors duration-300 sm:block ${
                      isOpen ? "text-blue-400" : "text-slate-700"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-sm font-semibold transition-colors duration-300 sm:text-base ${
                      isOpen ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-blue-400/20 bg-blue-500/10 text-blue-400"
                        : "border-white/10 bg-white/[0.03] text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-6 py-6 sm:px-7">
                      <p className="w-full text-sm leading-7 text-slate-400 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active accent */}
                <div
                  className={`h-px bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 ${
                    isOpen ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-10 flex justify-center w-full">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-xs text-blue-400">
              ?
            </span>

            <span className="text-xs font-medium text-slate-500">
              Still have questions? Let's talk about your project.
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}