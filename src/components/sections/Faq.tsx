"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { getFaqs } from "@/data/faq";

export default function Faq({ lang }: { lang: string }) {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = getFaqs(lang);

  const headingTranslations: Record<
    string,
    {
      badge: string;
      title: string;
      highlight: string;
      description: string;
      bottom: string;
    }
  > = {
    tr: {
      badge: "SSS",
      title: "Sık Sorulan",
      highlight: "Sorular",
      description:
        "Bir projeye başlamadan önce bilmek isteyebileceğiniz her şey.",
      bottom: "Hâlâ sorularınız mı var? Projeniz hakkında konuşalım.",
    },

    en: {
      badge: "FAQ",
      title: "Frequently Asked",
      highlight: "Questions",
      description:
        "Everything you might want to know before starting a project.",
      bottom: "Still have questions? Let's talk about your project.",
    },

    de: {
      badge: "FAQ",
      title: "Häufig gestellte",
      highlight: "Fragen",
      description:
        "Alles, was Sie vor dem Start eines Projekts wissen möchten.",
      bottom:
        "Noch Fragen? Lassen Sie uns über Ihr Projekt sprechen.",
    },

    fr: {
      badge: "FAQ",
      title: "Questions",
      highlight: "fréquentes",
      description:
        "Tout ce que vous pourriez vouloir savoir avant de commencer un projet.",
      bottom:
        "Vous avez encore des questions ? Parlons de votre projet.",
    },

    es: {
      badge: "Preguntas frecuentes",
      title: "Preguntas",
      highlight: "frecuentes",
      description:
        "Todo lo que quizás quieras saber antes de comenzar un proyecto.",
      bottom:
        "¿Todavía tienes preguntas? Hablemos de tu proyecto.",
    },

    id: {
      badge: "FAQ",
      title: "Pertanyaan yang",
      highlight: "Sering Diajukan",
      description:
        "Semua yang mungkin ingin Anda ketahui sebelum memulai proyek.",
      bottom:
        "Masih punya pertanyaan? Mari bicarakan proyek Anda.",
    },

    ja: {
      badge: "よくある質問",
      title: "よくある",
      highlight: "質問",
      description:
        "プロジェクトを始める前に知っておきたいことをまとめました。",
      bottom:
        "まだ質問がありますか？プロジェクトについてお話ししましょう。",
    },

    ko: {
      badge: "자주 묻는 질문",
      title: "자주 묻는",
      highlight: "질문",
      description:
        "프로젝트를 시작하기 전에 알고 싶을 수 있는 모든 내용을 확인하세요.",
      bottom:
        "아직 궁금한 점이 있나요? 프로젝트에 대해 이야기해 보세요.",
    },

    pt: {
      badge: "FAQ",
      title: "Perguntas",
      highlight: "frequentes",
      description:
        "Tudo o que você pode querer saber antes de iniciar um projeto.",
      bottom:
        "Ainda tem dúvidas? Vamos conversar sobre seu projeto.",
    },

    ru: {
      badge: "Часто задаваемые вопросы",
      title: "Часто задаваемые",
      highlight: "вопросы",
      description:
        "Всё, что вы можете захотеть узнать перед началом проекта.",
      bottom:
        "Остались вопросы? Давайте обсудим ваш проект.",
    },

    zh: {
      badge: "常见问题",
      title: "常见",
      highlight: "问题",
      description:
        "开始项目之前，您可能想了解的所有信息。",
      bottom:
        "还有问题吗？让我们聊聊您的项目。",
    },

    ar: {
      badge: "الأسئلة الشائعة",
      title: "الأسئلة",
      highlight: "الشائعة",
      description:
        "كل ما قد ترغب في معرفته قبل بدء المشروع.",
      bottom:
        "هل لديك المزيد من الأسئلة؟ لنتحدث عن مشروعك.",
    },
  };

  const content =
    headingTranslations[lang] ?? headingTranslations.en;

  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[150px]" />

      <Container>
        <div className="w-full">
          <Heading
            badge={content.badge}
            title={content.title}
            highlight={content.highlight}
            description={content.description}
          />
        </div>

        {/* FAQ List */}
        <div className="mt-14 w-full space-y-3 lg:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className={`group w-full overflow-hidden rounded-2xl border transition-all duration-500 ${
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
        <div className="mt-10 flex w-full justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-xs text-blue-400">
              ?
            </span>

            <span className="text-xs font-medium text-slate-500">
              {content.bottom}
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}