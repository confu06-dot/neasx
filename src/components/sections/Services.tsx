import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Code2, Smartphone, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "Redis",
  "Docker",
  "OpenAI",
];

const translations: Record<
  string,
  {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    learnMore: string;
    web: {
      title: string;
      description: string;
      features: string[];
    };
    mobile: {
      title: string;
      description: string;
      features: string[];
    };
    ai: {
      title: string;
      description: string;
      features: string[];
    };
  }
> = {
  tr: {
    badge: "MODERN TEKNOLOJİLERLE GELİŞTİRİLDİ",
    title: "Neler",
    titleHighlight: "İnşa Ediyoruz",
    description:
      "Yeni kurulan şirketlerin ve işletmelerin modern yazılım mühendisliğiyle ürünlerini daha hızlı piyasaya sürmelerine yardımcı oluyoruz.",
    learnMore: "Daha Fazla Bilgi",
    web: {
      title: "Web Geliştirme",
      description:
        "Modern, ölçeklenebilir ve ışık hızında web uygulamaları.",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "Mobil Uygulamalar",
      description:
        "iOS ve Android için yerel his veren modern mobil deneyimler.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "Yapay Zeka",
      description:
        "Otomasyon, yapay zeka entegrasyonları ve akıllı iş akışları.",
      features: ["OpenAI", "LangChain", "Vektör DB'leri", "Fine-tuning"],
    },
  },

  en: {
    badge: "BUILT WITH MODERN TECHNOLOGIES",
    title: "What We",
    titleHighlight: "Build",
    description:
      "We help startups and businesses launch products faster with modern software engineering.",
    learnMore: "Learn More",
    web: {
      title: "Web Development",
      description: "Modern, scalable and lightning-fast web applications.",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "Mobile Apps",
      description: "Native-feeling mobile experiences for iOS & Android.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "Artificial Intelligence",
      description: "Automation, AI integrations and intelligent workflows.",
      features: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
    },
  },

  de: {
    badge: "MIT MODERNEN TECHNOLOGIEN ENTWICKELT",
    title: "Was Wir",
    titleHighlight: "Bauen",
    description:
      "Wir helfen Startups und Unternehmen, Produkte mit moderner Softwareentwicklung schneller auf den Markt zu bringen.",
    learnMore: "Mehr erfahren",
    web: {
      title: "Webentwicklung",
      description:
        "Moderne, skalierbare und blitzschnelle Webanwendungen.",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "Mobile Apps",
      description:
        "Native mobile Erlebnisse für iOS und Android.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "Künstliche Intelligenz",
      description:
        "Automatisierung, KI-Integrationen und intelligente Workflows.",
      features: ["OpenAI", "LangChain", "Vector DBs", "Fine-Tuning"],
    },
  },

  fr: {
    badge: "CONÇU AVEC DES TECHNOLOGIES MODERNES",
    title: "Ce Que Nous",
    titleHighlight: "Construisons",
    description:
      "Nous aidons les startups et les entreprises à lancer leurs produits plus rapidement grâce à une ingénierie logicielle moderne.",
    learnMore: "En savoir plus",
    web: {
      title: "Développement Web",
      description:
        "Des applications web modernes, évolutives et ultra-rapides.",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "Applications Mobiles",
      description:
        "Des expériences mobiles natives pour iOS et Android.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "Intelligence Artificielle",
      description:
        "Automatisation, intégrations IA et flux de travail intelligents.",
      features: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
    },
  },

  es: {
    badge: "CONSTRUIDO CON TECNOLOGÍAS MODERNAS",
    title: "Lo Que",
    titleHighlight: "Construimos",
    description:
      "Ayudamos a startups y empresas a lanzar productos más rápido con ingeniería de software moderna.",
    learnMore: "Más información",
    web: {
      title: "Desarrollo Web",
      description:
        "Aplicaciones web modernas, escalables y ultrarrápidas.",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "Aplicaciones Móviles",
      description:
        "Experiencias móviles nativas para iOS y Android.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "Inteligencia Artificial",
      description:
        "Automatización, integraciones de IA y flujos de trabajo inteligentes.",
      features: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
    },
  },

  id: {
    badge: "DIBANGUN DENGAN TEKNOLOGI MODERN",
    title: "Apa yang Kami",
    titleHighlight: "Bangun",
    description:
      "Kami membantu startup dan bisnis meluncurkan produk lebih cepat dengan rekayasa perangkat lunak modern.",
    learnMore: "Pelajari lebih lanjut",
    web: {
      title: "Pengembangan Web",
      description: "Aplikasi web modern, skalabel, dan sangat cepat.",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "Aplikasi Seluler",
      description:
        "Pengalaman seluler yang terasa native untuk iOS dan Android.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "Kecerdasan Buatan",
      description:
        "Otomatisasi, integrasi AI, dan alur kerja cerdas.",
      features: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
    },
  },

  ja: {
    badge: "最新テクノロジーで構築",
    title: "私たちが",
    titleHighlight: "作るもの",
    description:
      "最新のソフトウェアエンジニアリングで、スタートアップや企業の製品開発を加速します。",
    learnMore: "詳しく見る",
    web: {
      title: "Web開発",
      description:
        "モダンでスケーラブル、そして高速なWebアプリケーション。",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "モバイルアプリ",
      description:
        "iOSとAndroid向けのネイティブ感のあるモバイル体験。",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "人工知能",
      description:
        "自動化、AI統合、インテリジェントなワークフロー。",
      features: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
    },
  },

  ko: {
    badge: "최신 기술로 구축",
    title: "우리가",
    titleHighlight: "만드는 것",
    description:
      "현대적인 소프트웨어 엔지니어링으로 스타트업과 기업이 제품을 더 빠르게 출시할 수 있도록 돕습니다.",
    learnMore: "더 알아보기",
    web: {
      title: "웹 개발",
      description:
        "현대적이고 확장 가능하며 매우 빠른 웹 애플리케이션.",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "모바일 앱",
      description:
        "iOS 및 Android를 위한 네이티브 수준의 모바일 경험.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "인공지능",
      description:
        "자동화, AI 통합 및 지능형 워크플로우.",
      features: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
    },
  },

  pt: {
    badge: "DESENVOLVIDO COM TECNOLOGIAS MODERNAS",
    title: "O Que",
    titleHighlight: "Construímos",
    description:
      "Ajudamos startups e empresas a lançar produtos mais rapidamente com engenharia de software moderna.",
    learnMore: "Saiba mais",
    web: {
      title: "Desenvolvimento Web",
      description:
        "Aplicações web modernas, escaláveis e extremamente rápidas.",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "Aplicações Móveis",
      description:
        "Experiências móveis nativas para iOS e Android.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "Inteligência Artificial",
      description:
        "Automação, integrações de IA e fluxos de trabalho inteligentes.",
      features: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
    },
  },

  ru: {
    badge: "СОЗДАНО С ПОМОЩЬЮ СОВРЕМЕННЫХ ТЕХНОЛОГИЙ",
    title: "Что Мы",
    titleHighlight: "Создаём",
    description:
      "Мы помогаем стартапам и компаниям быстрее запускать продукты благодаря современной разработке ПО.",
    learnMore: "Подробнее",
    web: {
      title: "Веб-разработка",
      description:
        "Современные, масштабируемые и очень быстрые веб-приложения.",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "Мобильные приложения",
      description:
        "Нативные мобильные решения для iOS и Android.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "Искусственный интеллект",
      description:
        "Автоматизация, интеграции ИИ и интеллектуальные рабочие процессы.",
      features: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
    },
  },

  zh: {
    badge: "采用现代技术构建",
    title: "我们",
    titleHighlight: "构建什么",
    description:
      "我们通过现代软件工程帮助初创企业和公司更快地推出产品。",
    learnMore: "了解更多",
    web: {
      title: "Web 开发",
      description:
        "现代化、可扩展且高速的 Web 应用程序。",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "移动应用",
      description:
        "适用于 iOS 和 Android 的原生体验移动应用。",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "人工智能",
      description:
        "自动化、AI 集成和智能工作流程。",
      features: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
    },
  },

  ar: {
    badge: "مبني باستخدام التقنيات الحديثة",
    title: "ما الذي",
    titleHighlight: "نبنيه",
    description:
      "نساعد الشركات الناشئة والمؤسسات على إطلاق منتجاتها بشكل أسرع باستخدام هندسة البرمجيات الحديثة.",
    learnMore: "معرفة المزيد",
    web: {
      title: "تطوير الويب",
      description:
        "تطبيقات ويب حديثة وقابلة للتوسع وسريعة للغاية.",
      features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    mobile: {
      title: "تطبيقات الجوال",
      description:
        "تجارب جوال أصلية لنظامي iOS وAndroid.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    ai: {
      title: "الذكاء الاصطناعي",
      description:
        "الأتمتة وتكاملات الذكاء الاصطناعي وسير العمل الذكي.",
      features: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
    },
  },
};

export default function Services({
  lang,
}: {
  lang: string;
  dict?: any;
}) {
  const content = translations[lang] ?? translations.en;

  const services = [
    {
      icon: Code2,
      title: content.web.title,
      description: content.web.description,
      features: content.web.features,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: content.mobile.title,
      description: content.mobile.description,
      features: content.mobile.features,
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Brain,
      title: content.ai.title,
      description: content.ai.description,
      features: content.ai.features,
      gradient: "from-fuchsia-500 to-pink-500",
    },
  ];

  return (
    <Section id="services" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/[0.04] blur-[140px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            {content.badge}
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
            {content.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              {content.titleHighlight}
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.05]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-blue-500/[0.14]" />

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${service.gradient}`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                      <span className="text-sm text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${lang}/contact`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all duration-300 hover:gap-3"
                >
                  {content.learnMore}
                  <ArrowRight size={16} />
                </Link>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}