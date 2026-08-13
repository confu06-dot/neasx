"use client";

import { testimonials } from "@/data/testimonials";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const translations: Record<
  string,
  {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    at: string;
  }
> = {
  tr: {
    badge: "Binlerce kişi tarafından tercih ediliyor",
    title: "Üreticiler, geliştiriciler",
    titleHighlight: "ve ekipler tarafından seviliyor.",
    description:
      "NEASX kullanan binlerce profesyonele katılın ve yapay zeka ile daha fazlasını yapın.",
    at: "şirketinde",
  },

  en: {
    badge: "Trusted by thousands",
    title: "Loved by creators,",
    titleHighlight: "builders, and teams.",
    description:
      "Join thousands of professionals using NEASX to get more done with AI.",
    at: "at",
  },

  de: {
    badge: "Von Tausenden vertraut",
    title: "Beliebt bei Entwicklern,",
    titleHighlight: "Machern und Teams.",
    description:
      "Schließen Sie sich Tausenden von Fachleuten an, die NEASX nutzen, um mit KI mehr zu erreichen.",
    at: "bei",
  },

  fr: {
    badge: "Approuvé par des milliers d'utilisateurs",
    title: "Apprécié par les créateurs,",
    titleHighlight: "les développeurs et les équipes.",
    description:
      "Rejoignez des milliers de professionnels qui utilisent NEASX pour accomplir davantage avec l'IA.",
    at: "chez",
  },

  es: {
    badge: "Con la confianza de miles",
    title: "Adorado por creadores,",
    titleHighlight: "desarrolladores y equipos.",
    description:
      "Únete a miles de profesionales que utilizan NEASX para hacer más con IA.",
    at: "en",
  },

  id: {
    badge: "Dipercaya oleh ribuan pengguna",
    title: "Disukai kreator,",
    titleHighlight: "pengembang, dan tim.",
    description:
      "Bergabunglah dengan ribuan profesional yang menggunakan NEASX untuk menyelesaikan lebih banyak pekerjaan dengan AI.",
    at: "di",
  },

  ja: {
    badge: "数千人に信頼されています",
    title: "クリエイター、開発者、",
    titleHighlight: "チームに選ばれています。",
    description:
      "NEASXを使ってAIでより多くの仕事をこなしている数千人のプロフェッショナルに参加しましょう。",
    at: "所属",
  },

  ko: {
    badge: "수천 명이 신뢰합니다",
    title: "크리에이터, 개발자,",
    titleHighlight: "팀이 사랑하는 NEASX.",
    description:
      "NEASX를 사용해 AI로 더 많은 일을 해내고 있는 수천 명의 전문가와 함께하세요.",
    at: "에서",
  },

  pt: {
    badge: "Confiado por milhares",
    title: "Amado por criadores,",
    titleHighlight: "desenvolvedores e equipes.",
    description:
      "Junte-se a milhares de profissionais que usam a NEASX para fazer mais com IA.",
    at: "na",
  },

  ru: {
    badge: "Нам доверяют тысячи пользователей",
    title: "Любима создателями,",
    titleHighlight: "разработчиками и командами.",
    description:
      "Присоединяйтесь к тысячам профессионалов, которые используют NEASX, чтобы делать больше с помощью ИИ.",
    at: "в",
  },

  zh: {
    badge: "数千名用户信赖",
    title: "深受创作者、开发者",
    titleHighlight: "和团队喜爱。",
    description:
      "加入数千名使用 NEASX 借助 AI 完成更多工作的专业人士。",
    at: "于",
  },

  ar: {
    badge: "موثوق به من قبل الآلاف",
    title: "يحبه المبدعون،",
    titleHighlight: "والمطورون والفرق.",
    description:
      "انضم إلى آلاف المحترفين الذين يستخدمون NEASX لإنجاز المزيد باستخدام الذكاء الاصطناعي.",
    at: "في",
  },
};

export default function Testimonials({
  lang,
  dict,
}: {
  lang: string;
  dict?: any;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const content = translations[lang] ?? translations.en;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += 0.5;

        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute right-[-200px] top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-violet-500/[0.04] blur-[130px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>{content.badge}</Badge>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
            {content.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              {content.titleHighlight}
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#050816] to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#050816] to-transparent" />

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {[...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="group min-w-[380px] rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    "{testimonial.content}"
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full border border-white/10"
                    />

                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.name}
                      </p>

                      <p className="text-xs text-slate-500">
                        {testimonial.role} {content.at}{" "}
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {testimonial.product && (
                    <div className="mt-4 inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                      {testimonial.product}
                    </div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}