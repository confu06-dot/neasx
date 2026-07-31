"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { faqs } from "@/data/faq";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Container>

        <Heading
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Everything you might want to know before starting a project."
        />

        <div className="mx-auto mt-20 max-w-4xl space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <span className="text-3xl text-blue-400">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="border-t border-white/10 px-8 py-6 text-slate-400 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}