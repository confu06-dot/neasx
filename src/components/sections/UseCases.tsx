import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { UserRound, Rocket, Code2, Building2 } from "lucide-react";

const icons = [UserRound, Rocket, Code2, Building2];

const translations: Record<
  string,
  {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    cards: {
      subtitle: string;
      title: string;
      description: string;
    }[];
  }
> = {
  tr: {
    badge: "Kimler için",
    title: "İş akışınıza",
    titleHighlight: "uyan yapay zeka.",
    description:
      "Serbest çalışanlardan kurumsal ekiplere, NEASX ürünleri çalışma şeklinize uyum sağlar.",
    cards: [
      {
        subtitle: "Her hafta saatler kazanın",
        title: "Serbest Çalışanlar İçin",
        description:
          "Tekrarlayan işleri otomatikleştirin, içeriği daha hızlı oluşturun ve müşterilerinize daha fazlasını sunun.",
      },
      {
        subtitle: "Daha hızlı geliştirin ve otomatikleştirin",
        title: "Startup'lar İçin",
        description:
          "Yapay zeka destekli iş akışları, araştırma ve otomasyon ile ürünleri daha hızlı gönderin.",
      },
      {
        subtitle: "Ürünlerinize yapay zeka ekleyin",
        title: "Geliştiriciler İçin",
        description:
          "Uygulamalarınıza zeka eklemek için NEASX API'lerini ve SDK'larını entegre edin.",
      },
      {
        subtitle: "Ekipler için yapay zeka altyapısı",
        title: "Kurumsal İçin",
        description:
          "Güvenlik, gizlilik ve kontrol ile ölçeklenebilir yapay zeka altyapısı dağıtın.",
      },
    ],
  },

  en: {
    badge: "Who it's for",
    title: "AI that fits",
    titleHighlight: "your workflow.",
    description:
      "From freelancers to enterprise teams, NEASX products adapt to how you work.",
    cards: [
      {
        subtitle: "Save hours every week",
        title: "For Freelancers",
        description:
          "Automate repetitive work, create content faster, and deliver more for your clients.",
      },
      {
        subtitle: "Build and automate faster",
        title: "For Startups",
        description:
          "Ship products faster with AI-powered workflows, research, and automation.",
      },
      {
        subtitle: "Add AI to your products",
        title: "For Developers",
        description:
          "Integrate NEASX APIs and SDKs to add intelligence to your applications.",
      },
      {
        subtitle: "AI infrastructure for teams",
        title: "For Enterprise",
        description:
          "Deploy scalable AI infrastructure with security, privacy, and control.",
      },
    ],
  },

  de: {
    badge: "Für wen",
    title: "KI, die zu Ihrem",
    titleHighlight: "Workflow passt.",
    description:
      "Von Freelancern bis zu Unternehmensteams passen sich NEASX-Produkte an Ihre Arbeitsweise an.",
    cards: [
      {
        subtitle: "Jede Woche Stunden sparen",
        title: "Für Freelancer",
        description:
          "Automatisieren Sie wiederkehrende Aufgaben, erstellen Sie Inhalte schneller und bieten Sie Ihren Kunden mehr.",
      },
      {
        subtitle: "Schneller entwickeln und automatisieren",
        title: "Für Startups",
        description:
          "Bringen Sie Produkte schneller auf den Markt – mit KI-Workflows, Recherche und Automatisierung.",
      },
      {
        subtitle: "KI in Ihre Produkte integrieren",
        title: "Für Entwickler",
        description:
          "Integrieren Sie NEASX APIs und SDKs, um Ihre Anwendungen intelligenter zu machen.",
      },
      {
        subtitle: "KI-Infrastruktur für Teams",
        title: "Für Unternehmen",
        description:
          "Stellen Sie skalierbare KI-Infrastruktur mit Sicherheit, Datenschutz und Kontrolle bereit.",
      },
    ],
  },

  fr: {
    badge: "Pour qui",
    title: "Une IA qui s'adapte à",
    titleHighlight: "votre workflow.",
    description:
      "Des freelances aux équipes d'entreprise, les produits NEASX s'adaptent à votre façon de travailler.",
    cards: [
      {
        subtitle: "Gagnez des heures chaque semaine",
        title: "Pour les freelances",
        description:
          "Automatisez les tâches répétitives, créez du contenu plus rapidement et offrez davantage à vos clients.",
      },
      {
        subtitle: "Développez et automatisez plus vite",
        title: "Pour les startups",
        description:
          "Lancez vos produits plus rapidement grâce aux workflows IA, à la recherche et à l'automatisation.",
      },
      {
        subtitle: "Ajoutez l'IA à vos produits",
        title: "Pour les développeurs",
        description:
          "Intégrez les APIs et SDKs NEASX pour ajouter de l'intelligence à vos applications.",
      },
      {
        subtitle: "Infrastructure IA pour les équipes",
        title: "Pour les entreprises",
        description:
          "Déployez une infrastructure IA évolutive avec sécurité, confidentialité et contrôle.",
      },
    ],
  },

  es: {
    badge: "Para quién",
    title: "IA que se adapta a",
    titleHighlight: "tu flujo de trabajo.",
    description:
      "Desde freelancers hasta equipos empresariales, los productos NEASX se adaptan a tu forma de trabajar.",
    cards: [
      {
        subtitle: "Ahorra horas cada semana",
        title: "Para Freelancers",
        description:
          "Automatiza tareas repetitivas, crea contenido más rápido y ofrece más a tus clientes.",
      },
      {
        subtitle: "Desarrolla y automatiza más rápido",
        title: "Para Startups",
        description:
          "Lanza productos más rápido con flujos de trabajo impulsados por IA, investigación y automatización.",
      },
      {
        subtitle: "Añade IA a tus productos",
        title: "Para Desarrolladores",
        description:
          "Integra las APIs y SDKs de NEASX para añadir inteligencia a tus aplicaciones.",
      },
      {
        subtitle: "Infraestructura de IA para equipos",
        title: "Para Empresas",
        description:
          "Implementa infraestructura de IA escalable con seguridad, privacidad y control.",
      },
    ],
  },

  id: {
    badge: "Untuk siapa",
    title: "AI yang cocok dengan",
    titleHighlight: "alur kerja Anda.",
    description:
      "Dari freelancer hingga tim perusahaan, produk NEASX menyesuaikan dengan cara Anda bekerja.",
    cards: [
      {
        subtitle: "Hemat waktu setiap minggu",
        title: "Untuk Freelancer",
        description:
          "Otomatiskan pekerjaan berulang, buat konten lebih cepat, dan berikan lebih banyak kepada klien Anda.",
      },
      {
        subtitle: "Bangun dan otomatisasi lebih cepat",
        title: "Untuk Startup",
        description:
          "Kirim produk lebih cepat dengan alur kerja berbasis AI, riset, dan otomatisasi.",
      },
      {
        subtitle: "Tambahkan AI ke produk Anda",
        title: "Untuk Pengembang",
        description:
          "Integrasikan API dan SDK NEASX untuk menambahkan kecerdasan ke aplikasi Anda.",
      },
      {
        subtitle: "Infrastruktur AI untuk tim",
        title: "Untuk Perusahaan",
        description:
          "Terapkan infrastruktur AI yang dapat diskalakan dengan keamanan, privasi, dan kontrol.",
      },
    ],
  },

  ja: {
    badge: "対象者",
    title: "ワークフローに合う",
    titleHighlight: "AI。",
    description:
      "フリーランサーから企業チームまで、NEASXの製品はあなたの働き方に適応します。",
    cards: [
      {
        subtitle: "毎週の時間を節約",
        title: "フリーランサー向け",
        description:
          "繰り返し作業を自動化し、コンテンツをより速く作成して、クライアントにより多くを提供します。",
      },
      {
        subtitle: "より速く開発・自動化",
        title: "スタートアップ向け",
        description:
          "AIワークフロー、リサーチ、自動化で製品をより速く市場に届けます。",
      },
      {
        subtitle: "製品にAIを追加",
        title: "開発者向け",
        description:
          "NEASX APIとSDKを統合して、アプリケーションにインテリジェンスを追加します。",
      },
      {
        subtitle: "チーム向けAIインフラ",
        title: "企業向け",
        description:
          "セキュリティ、プライバシー、制御を備えたスケーラブルなAIインフラを展開します。",
      },
    ],
  },

  ko: {
    badge: "대상 사용자",
    title: "워크플로우에 맞는",
    titleHighlight: "AI.",
    description:
      "프리랜서부터 기업 팀까지 NEASX 제품은 여러분의 업무 방식에 맞춰집니다.",
    cards: [
      {
        subtitle: "매주 시간을 절약하세요",
        title: "프리랜서를 위한",
        description:
          "반복 작업을 자동화하고 콘텐츠를 더 빠르게 만들어 고객에게 더 많은 가치를 제공하세요.",
      },
      {
        subtitle: "더 빠르게 개발하고 자동화하세요",
        title: "스타트업을 위한",
        description:
          "AI 기반 워크플로우, 리서치 및 자동화를 통해 제품을 더 빠르게 출시하세요.",
      },
      {
        subtitle: "제품에 AI 추가",
        title: "개발자를 위한",
        description:
          "NEASX API와 SDK를 통합하여 애플리케이션에 지능을 추가하세요.",
      },
      {
        subtitle: "팀을 위한 AI 인프라",
        title: "기업을 위한",
        description:
          "보안, 개인정보 보호 및 제어 기능을 갖춘 확장 가능한 AI 인프라를 구축하세요.",
      },
    ],
  },

  pt: {
    badge: "Para quem é",
    title: "IA que se adapta ao",
    titleHighlight: "seu fluxo de trabalho.",
    description:
      "De freelancers a equipes empresariais, os produtos NEASX se adaptam à sua forma de trabalhar.",
    cards: [
      {
        subtitle: "Economize horas toda semana",
        title: "Para Freelancers",
        description:
          "Automatize tarefas repetitivas, crie conteúdo mais rapidamente e ofereça mais aos seus clientes.",
      },
      {
        subtitle: "Desenvolva e automatize mais rápido",
        title: "Para Startups",
        description:
          "Lance produtos mais rapidamente com fluxos de trabalho com IA, pesquisa e automação.",
      },
      {
        subtitle: "Adicione IA aos seus produtos",
        title: "Para Desenvolvedores",
        description:
          "Integre APIs e SDKs da NEASX para adicionar inteligência aos seus aplicativos.",
      },
      {
        subtitle: "Infraestrutura de IA para equipes",
        title: "Para Empresas",
        description:
          "Implante infraestrutura de IA escalável com segurança, privacidade e controle.",
      },
    ],
  },

  ru: {
    badge: "Для кого",
    title: "ИИ, который подходит вашему",
    titleHighlight: "рабочему процессу.",
    description:
      "От фрилансеров до корпоративных команд — продукты NEASX адаптируются под ваш стиль работы.",
    cards: [
      {
        subtitle: "Экономьте часы каждую неделю",
        title: "Для фрилансеров",
        description:
          "Автоматизируйте повторяющиеся задачи, быстрее создавайте контент и предлагайте больше клиентам.",
      },
      {
        subtitle: "Разрабатывайте и автоматизируйте быстрее",
        title: "Для стартапов",
        description:
          "Быстрее выпускайте продукты с помощью рабочих процессов ИИ, исследований и автоматизации.",
      },
      {
        subtitle: "Добавьте ИИ в свои продукты",
        title: "Для разработчиков",
        description:
          "Интегрируйте API и SDK NEASX, чтобы добавить интеллект в свои приложения.",
      },
      {
        subtitle: "ИИ-инфраструктура для команд",
        title: "Для предприятий",
        description:
          "Развертывайте масштабируемую ИИ-инфраструктуру с безопасностью, конфиденциальностью и контролем.",
      },
    ],
  },

  zh: {
    badge: "适用人群",
    title: "适合您",
    titleHighlight: "工作流程的 AI。",
    description:
      "从自由职业者到企业团队，NEASX 产品都会适应您的工作方式。",
    cards: [
      {
        subtitle: "每周节省大量时间",
        title: "适用于自由职业者",
        description:
          "自动化重复工作，更快创建内容，为客户提供更多价值。",
      },
      {
        subtitle: "更快开发和自动化",
        title: "适用于初创企业",
        description:
          "借助 AI 工作流程、研究和自动化，更快地推出产品。",
      },
      {
        subtitle: "为产品添加 AI",
        title: "适用于开发者",
        description:
          "集成 NEASX API 和 SDK，为您的应用添加智能能力。",
      },
      {
        subtitle: "面向团队的 AI 基础设施",
        title: "适用于企业",
        description:
          "部署具备安全性、隐私保护和控制能力的可扩展 AI 基础设施。",
      },
    ],
  },

  ar: {
    badge: "لمن؟",
    title: "ذكاء اصطناعي يناسب",
    titleHighlight: "سير عملك.",
    description:
      "من المستقلين إلى فرق المؤسسات، تتكيف منتجات NEASX مع طريقة عملك.",
    cards: [
      {
        subtitle: "وفّر ساعات كل أسبوع",
        title: "للمستقلين",
        description:
          "أتمت المهام المتكررة، وأنشئ المحتوى بشكل أسرع، وقدم المزيد لعملائك.",
      },
      {
        subtitle: "طوّر وأتمت بشكل أسرع",
        title: "للشركات الناشئة",
        description:
          "أطلق المنتجات بشكل أسرع باستخدام سير العمل المدعوم بالذكاء الاصطناعي والبحث والأتمتة.",
      },
      {
        subtitle: "أضف الذكاء الاصطناعي إلى منتجاتك",
        title: "للمطورين",
        description:
          "ادمج واجهات API وحزم SDK من NEASX لإضافة الذكاء إلى تطبيقاتك.",
      },
      {
        subtitle: "بنية تحتية للذكاء الاصطناعي للفرق",
        title: "للمؤسسات",
        description:
          "انشر بنية تحتية قابلة للتوسع للذكاء الاصطناعي مع الأمان والخصوصية والتحكم.",
      },
    ],
  },
};

export default function UseCases({
  lang,
  dict,
}: {
  lang: string;
  dict?: any;
}) {
  const content = translations[lang] ?? translations.en;

  return (
    <Section id="solutions" className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute left-[-200px] top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-blue-500/[0.045] blur-[130px]" />

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.cards.map((solution, index) => {
            const Icon = icons[index];

            return (
              <div
                key={solution.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.045]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-violet-500/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-violet-500/[0.14]" />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 transition-all duration-500 group-hover:border-blue-400/25 group-hover:from-blue-500/25 group-hover:to-violet-500/25">
                  <Icon
                    size={26}
                    className="text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-300"
                  />
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300/60">
                  {solution.subtitle}
                </p>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                  {solution.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}