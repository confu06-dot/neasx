import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const translations: Record<
  string,
  {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    reasons: {
      title: string;
      description: string;
    }[];
  }
> = {
  tr: {
    badge: "Neden NEASX",
    title: "Gerçek iş için yapıldı.",
    titleHighlight: "Ölçeklenmek için yapıldı.",
    description:
      "Tek ekosistem. Beş ilke. Yapay zeka ile daha fazlasını başarmanıza yardımcı olmak için tasarlanmış her ürün.",
    reasons: [
      {
        title: "Gerçek iş için yapıldı",
        description:
          "Yapay zeka sadece sohbet için değil. NEASX ürünleri gerçek görevleri tamamlamak ve sonuç vermek için tasarlandı.",
      },
      {
        title: "Tasarımdan hızlı",
        description:
          "Sonuçlara hızlı ulaşın. Her ürün hem performans hem de çıktı süresi açısından hız için optimize edilmiştir.",
      },
      {
        title: "Tek ekosistem",
        description:
          "Tek bir NEASX hesabı her ürünün kilidini açar. Writer, Chat, Agent ve daha fazlası — hepsi bağlı.",
      },
      {
        title: "Önce gizlilik",
        description:
          "Güvenlik ve veri koruması, her NEASX ürününün ve API'sinin temelinde yer alır.",
      },
      {
        title: "Ölçeklenmek için yapıldı",
        description:
          "Bireylerden kurumsal ekiplere, NEASX sizinle büyür — ilk talebinizden milyonlara.",
      },
    ],
  },

  en: {
    badge: "Why NEASX",
    title: "Built for real work.",
    titleHighlight: "Built to scale.",
    description:
      "One ecosystem. Five principles. Every product designed to help you accomplish more with AI.",
    reasons: [
      {
        title: "Built for real work",
        description:
          "AI isn't just for conversation. NEASX products are designed to complete actual tasks and deliver results.",
      },
      {
        title: "Fast by design",
        description:
          "Get to results quickly. Every product is optimized for speed, both in performance and time-to-output.",
      },
      {
        title: "One ecosystem",
        description:
          "A single NEASX account unlocks every product. Writer, Chat, Agent and more — all connected.",
      },
      {
        title: "Privacy first",
        description:
          "Security and data protection are built into the foundation of every NEASX product and API.",
      },
      {
        title: "Built to scale",
        description:
          "From individuals to enterprise teams, NEASX grows with you — from your first request to millions.",
      },
    ],
  },

  de: {
    badge: "Warum NEASX",
    title: "Für echte Arbeit gemacht.",
    titleHighlight: "Für Wachstum gemacht.",
    description:
      "Ein Ökosystem. Fünf Prinzipien. Jedes Produkt wurde entwickelt, damit Sie mit KI mehr erreichen.",
    reasons: [
      {
        title: "Für echte Arbeit gemacht",
        description:
          "KI ist nicht nur für Gespräche da. NEASX-Produkte sind darauf ausgelegt, echte Aufgaben zu erledigen und Ergebnisse zu liefern.",
      },
      {
        title: "Schnell by Design",
        description:
          "Erreichen Sie Ergebnisse schneller. Jedes Produkt ist auf Geschwindigkeit und Leistung optimiert.",
      },
      {
        title: "Ein Ökosystem",
        description:
          "Ein NEASX-Konto schaltet jedes Produkt frei. Writer, Chat, Agent und mehr — alles verbunden.",
      },
      {
        title: "Datenschutz zuerst",
        description:
          "Sicherheit und Datenschutz sind die Grundlage jedes NEASX-Produkts und jeder API.",
      },
      {
        title: "Für Skalierung gemacht",
        description:
          "Von Einzelpersonen bis zu Unternehmen wächst NEASX mit Ihnen.",
      },
    ],
  },

  fr: {
    badge: "Pourquoi NEASX",
    title: "Conçu pour le vrai travail.",
    titleHighlight: "Conçu pour évoluer.",
    description:
      "Un écosystème. Cinq principes. Chaque produit est conçu pour vous aider à accomplir davantage avec l'IA.",
    reasons: [
      {
        title: "Conçu pour le vrai travail",
        description:
          "L'IA ne sert pas seulement à discuter. Les produits NEASX sont conçus pour accomplir de vraies tâches et produire des résultats.",
      },
      {
        title: "Rapide par conception",
        description:
          "Obtenez des résultats rapidement. Chaque produit est optimisé pour les performances et la vitesse de production.",
      },
      {
        title: "Un seul écosystème",
        description:
          "Un seul compte NEASX donne accès à tous les produits. Writer, Chat, Agent et plus encore — tout est connecté.",
      },
      {
        title: "La confidentialité d'abord",
        description:
          "La sécurité et la protection des données sont intégrées à chaque produit et API NEASX.",
      },
      {
        title: "Conçu pour évoluer",
        description:
          "Des particuliers aux équipes d'entreprise, NEASX évolue avec vous.",
      },
    ],
  },

  es: {
    badge: "Por qué NEASX",
    title: "Creado para el trabajo real.",
    titleHighlight: "Creado para escalar.",
    description:
      "Un ecosistema. Cinco principios. Cada producto está diseñado para ayudarte a lograr más con IA.",
    reasons: [
      {
        title: "Creado para el trabajo real",
        description:
          "La IA no es solo para conversar. Los productos NEASX están diseñados para completar tareas reales y ofrecer resultados.",
      },
      {
        title: "Rápido por diseño",
        description:
          "Llega a los resultados rápidamente. Cada producto está optimizado para el rendimiento y la velocidad.",
      },
      {
        title: "Un solo ecosistema",
        description:
          "Una sola cuenta de NEASX desbloquea todos los productos. Writer, Chat, Agent y más — todo conectado.",
      },
      {
        title: "Privacidad primero",
        description:
          "La seguridad y la protección de datos están integradas en cada producto y API de NEASX.",
      },
      {
        title: "Creado para escalar",
        description:
          "Desde individuos hasta equipos empresariales, NEASX crece contigo.",
      },
    ],
  },

  id: {
    badge: "Mengapa NEASX",
    title: "Dibuat untuk pekerjaan nyata.",
    titleHighlight: "Dibuat untuk berkembang.",
    description:
      "Satu ekosistem. Lima prinsip. Setiap produk dirancang untuk membantu Anda mencapai lebih banyak dengan AI.",
    reasons: [
      {
        title: "Dibuat untuk pekerjaan nyata",
        description:
          "AI bukan hanya untuk percakapan. Produk NEASX dirancang untuk menyelesaikan tugas nyata dan memberikan hasil.",
      },
      {
        title: "Cepat sejak awal",
        description:
          "Dapatkan hasil dengan cepat. Setiap produk dioptimalkan untuk performa dan kecepatan.",
      },
      {
        title: "Satu ekosistem",
        description:
          "Satu akun NEASX membuka semua produk. Writer, Chat, Agent, dan lainnya — semuanya terhubung.",
      },
      {
        title: "Privasi terlebih dahulu",
        description:
          "Keamanan dan perlindungan data menjadi dasar setiap produk dan API NEASX.",
      },
      {
        title: "Dibuat untuk berkembang",
        description:
          "Dari individu hingga tim perusahaan, NEASX berkembang bersama Anda.",
      },
    ],
  },

  ja: {
    badge: "NEASXを選ぶ理由",
    title: "実際の仕事のために。",
    titleHighlight: "スケールのために。",
    description:
      "ひとつのエコシステム。5つの原則。AIでより多くを達成できるよう、すべての製品が設計されています。",
    reasons: [
      {
        title: "実際の仕事のために",
        description:
          "AIは会話だけのものではありません。NEASX製品は実際のタスクを完了し、結果を提供するために設計されています。",
      },
      {
        title: "高速設計",
        description:
          "すばやく結果に到達できます。すべての製品がパフォーマンスと出力速度のために最適化されています。",
      },
      {
        title: "ひとつのエコシステム",
        description:
          "1つのNEASXアカウントですべての製品を利用できます。Writer、Chat、Agentなど、すべてが接続されています。",
      },
      {
        title: "プライバシー第一",
        description:
          "セキュリティとデータ保護は、すべてのNEASX製品とAPIの基盤に組み込まれています。",
      },
      {
        title: "スケールのために",
        description:
          "個人から企業チームまで、NEASXはあなたとともに成長します。",
      },
    ],
  },

  ko: {
    badge: "왜 NEASX인가",
    title: "실제 업무를 위해 만들어졌습니다.",
    titleHighlight: "확장성을 위해 만들어졌습니다.",
    description:
      "하나의 생태계. 다섯 가지 원칙. AI로 더 많은 일을 할 수 있도록 설계된 모든 제품.",
    reasons: [
      {
        title: "실제 업무를 위해",
        description:
          "AI는 단순한 대화를 위한 것이 아닙니다. NEASX 제품은 실제 작업을 완료하고 결과를 제공하도록 설계되었습니다.",
      },
      {
        title: "속도를 위한 설계",
        description:
          "빠르게 결과를 얻으세요. 모든 제품은 성능과 출력 속도를 위해 최적화되어 있습니다.",
      },
      {
        title: "하나의 생태계",
        description:
          "하나의 NEASX 계정으로 모든 제품을 사용할 수 있습니다. Writer, Chat, Agent 등이 모두 연결됩니다.",
      },
      {
        title: "개인정보 보호 우선",
        description:
          "보안과 데이터 보호는 모든 NEASX 제품과 API의 기반에 포함되어 있습니다.",
      },
      {
        title: "확장성을 위해",
        description:
          "개인 사용자부터 기업 팀까지 NEASX는 함께 성장합니다.",
      },
    ],
  },

  pt: {
    badge: "Por que NEASX",
    title: "Feito para o trabalho real.",
    titleHighlight: "Feito para escalar.",
    description:
      "Um ecossistema. Cinco princípios. Cada produto foi criado para ajudar você a realizar mais com IA.",
    reasons: [
      {
        title: "Feito para o trabalho real",
        description:
          "A IA não serve apenas para conversas. Os produtos NEASX foram projetados para concluir tarefas reais e entregar resultados.",
      },
      {
        title: "Rápido por design",
        description:
          "Chegue aos resultados rapidamente. Cada produto é otimizado para desempenho e velocidade.",
      },
      {
        title: "Um único ecossistema",
        description:
          "Uma única conta NEASX desbloqueia todos os produtos. Writer, Chat, Agent e muito mais — tudo conectado.",
      },
      {
        title: "Privacidade em primeiro lugar",
        description:
          "Segurança e proteção de dados estão integradas em todos os produtos e APIs da NEASX.",
      },
      {
        title: "Feito para escalar",
        description:
          "De indivíduos a equipes empresariais, a NEASX cresce com você.",
      },
    ],
  },

  ru: {
    badge: "Почему NEASX",
    title: "Создано для реальной работы.",
    titleHighlight: "Создано для масштабирования.",
    description:
      "Одна экосистема. Пять принципов. Каждый продукт создан, чтобы помочь вам делать больше с ИИ.",
    reasons: [
      {
        title: "Для реальной работы",
        description:
          "ИИ — это не только разговоры. Продукты NEASX созданы для выполнения реальных задач и получения результатов.",
      },
      {
        title: "Быстрота по замыслу",
        description:
          "Получайте результаты быстро. Каждый продукт оптимизирован для производительности и скорости.",
      },
      {
        title: "Единая экосистема",
        description:
          "Один аккаунт NEASX открывает доступ ко всем продуктам. Writer, Chat, Agent и другие — всё связано.",
      },
      {
        title: "Конфиденциальность прежде всего",
        description:
          "Безопасность и защита данных встроены в каждый продукт и API NEASX.",
      },
      {
        title: "Создано для масштабирования",
        description:
          "От отдельных пользователей до корпоративных команд — NEASX растёт вместе с вами.",
      },
    ],
  },

  zh: {
    badge: "为什么选择 NEASX",
    title: "为真实工作而打造。",
    titleHighlight: "为规模化而打造。",
    description:
      "一个生态系统。五项原则。每款产品都旨在帮助您借助 AI 完成更多工作。",
    reasons: [
      {
        title: "为真实工作而打造",
        description:
          "AI 不只是用于聊天。NEASX 产品旨在完成真实任务并交付结果。",
      },
      {
        title: "速度优先设计",
        description:
          "快速获得结果。每款产品都针对性能和输出速度进行了优化。",
      },
      {
        title: "一个生态系统",
        description:
          "一个 NEASX 账户即可解锁所有产品。Writer、Chat、Agent 等全部互联。",
      },
      {
        title: "隐私优先",
        description:
          "安全和数据保护融入每一个 NEASX 产品和 API 的基础架构。",
      },
      {
        title: "为规模化而打造",
        description:
          "从个人用户到企业团队，NEASX 与您一起成长。",
      },
    ],
  },

  ar: {
    badge: "لماذا NEASX",
    title: "مصمم للعمل الحقيقي.",
    titleHighlight: "مصمم للتوسع.",
    description:
      "منظومة واحدة. خمسة مبادئ. كل منتج مصمم لمساعدتك على تحقيق المزيد باستخدام الذكاء الاصطناعي.",
    reasons: [
      {
        title: "مصمم للعمل الحقيقي",
        description:
          "الذكاء الاصطناعي ليس للمحادثة فقط. تم تصميم منتجات NEASX لإنجاز المهام الفعلية وتقديم النتائج.",
      },
      {
        title: "السرعة في التصميم",
        description:
          "الوصول إلى النتائج بسرعة. كل منتج محسّن للأداء وسرعة الإخراج.",
      },
      {
        title: "منظومة واحدة",
        description:
          "حساب NEASX واحد يفتح جميع المنتجات. Writer وChat وAgent وغيرها — كلها متصلة.",
      },
      {
        title: "الخصوصية أولاً",
        description:
          "الأمان وحماية البيانات جزء أساسي من كل منتج وواجهة API في NEASX.",
      },
      {
        title: "مصمم للتوسع",
        description:
          "من الأفراد إلى فرق المؤسسات، تنمو NEASX معك.",
      },
    ],
  },
};

export default function WhyNEASX({
  lang,
  dict,
}: {
  lang: string;
  dict?: any;
}) {
  const content = translations[lang] ?? translations.en;

  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute left-[-200px] top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-blue-500/[0.045] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-200px] bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-violet-500/[0.04] blur-[130px]" />

      <Container>
        <div className="w-full text-center">
          <Badge>{content.badge}</Badge>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            {content.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              {content.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {content.reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-blue-950/20"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/[0.08] blur-[60px] transition-all duration-500 group-hover:bg-blue-500/[0.16]" />

              <div className="absolute right-6 top-6 text-[10px] font-bold tracking-[0.25em] text-slate-700 transition-colors duration-300 group-hover:text-slate-600">
                0{index + 1}
              </div>

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 transition-all duration-500 group-hover:border-blue-400/25 group-hover:from-blue-500/25 group-hover:to-violet-500/25 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                <div className="text-2xl text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-300">
                  {["◫", "ϟ", "◎", "♢", "↗"][index]}
                </div>
              </div>

              <h3 className="relative mt-7 text-xl font-bold tracking-tight text-white">
                {reason.title}
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                {reason.description}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}