import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Check } from "lucide-react";
import Link from "next/link";

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  featured: boolean;
  features: string[];
};

const translations: Record<
  string,
  {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    popular: string;
    footer: string;
    plans: Plan[];
  }
> = {
  tr: {
    badge: "Fiyatlandırma",
    title: "Basit fiyatlandırma.",
    titleHighlight: "Tek ekosistem.",
    description:
      "Ücretsiz başlayın. Hazır olduğunuzda yükseltin. Gizli ücret yok.",
    popular: "En Popüler",
    footer: "Tüm planlar tam NEASX ekosistemine erişim içerir.",
    plans: [
      {
        name: "Ücretsiz",
        price: "$0",
        period: "/ay",
        description:
          "Her ürüne temel erişimle NEASX ekosistemini keşfetmeye başlayın.",
        cta: "Başla",
        featured: false,
        features: [
          "7 ürünün tamamına erişim",
          "Ayda 30 yapay zeka işlemi",
          "1 çalışma alanı",
          "Topluluk desteği",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/ay",
        description:
          "Her gün tam yapay zeka gücüne ihtiyaç duyan bireyler için.",
        cta: "Ücretsiz Denemeyi Başlat",
        featured: true,
        features: [
          "Sınırsız yapay zeka işlemi",
          "Gelişmiş modeller ve ajanlar",
          "Sınırsız çalışma alanı",
          "Öncelikli destek",
          "Yeni özelliklere erken erişim",
        ],
      },
      {
        name: "İşletme",
        price: "Özel",
        period: "",
        description:
          "Güvenlik, kontrol ve ölçeklenebilirliğe ihtiyaç duyan ekipler için.",
        cta: "Satış Ekibiyle İletişime Geç",
        featured: false,
        features: [
          "Pro'daki her şey",
          "Ekip yönetimi ve SSO",
          "Merkezi faturalandırma",
          "Özel yapay zeka modelleri",
          "Özel destek",
        ],
      },
    ],
  },

  en: {
    badge: "Pricing",
    title: "Simple pricing.",
    titleHighlight: "One ecosystem.",
    description:
      "Start free. Upgrade when you're ready. No hidden fees.",
    popular: "Most Popular",
    footer: "All plans include access to the full NEASX ecosystem.",
    plans: [
      {
        name: "Free",
        price: "$0",
        period: "/mo",
        description:
          "Start exploring with basic access to every product.",
        cta: "Get Started",
        featured: false,
        features: [
          "Access to all 7 products",
          "30 AI actions / month",
          "1 workspace",
          "Community support",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/mo",
        description:
          "For individuals who need full AI power, every day.",
        cta: "Start Free Trial",
        featured: true,
        features: [
          "Unlimited AI actions",
          "Advanced models & agents",
          "Unlimited workspaces",
          "Priority support",
          "Early access features",
        ],
      },
      {
        name: "Business",
        price: "Custom",
        period: "",
        description:
          "For teams that need security, control and scale.",
        cta: "Contact Sales",
        featured: false,
        features: [
          "Everything in Pro",
          "Team management & SSO",
          "Centralized billing",
          "Custom AI models",
          "Dedicated support",
        ],
      },
    ],
  },

  de: {
    badge: "Preise",
    title: "Einfache Preise.",
    titleHighlight: "Ein Ökosystem.",
    description:
      "Starten Sie kostenlos. Upgraden Sie, wenn Sie bereit sind. Keine versteckten Gebühren.",
    popular: "Am beliebtesten",
    footer:
      "Alle Pläne beinhalten Zugriff auf das gesamte NEASX-Ökosystem.",
    plans: [
      {
        name: "Kostenlos",
        price: "$0",
        period: "/Monat",
        description:
          "Entdecken Sie das Ökosystem mit grundlegendem Zugriff auf alle Produkte.",
        cta: "Loslegen",
        featured: false,
        features: [
          "Zugriff auf alle 7 Produkte",
          "30 KI-Aktionen / Monat",
          "1 Arbeitsbereich",
          "Community-Support",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/Monat",
        description:
          "Für Personen, die jeden Tag die volle Leistung der KI benötigen.",
        cta: "Kostenlose Testversion starten",
        featured: true,
        features: [
          "Unbegrenzte KI-Aktionen",
          "Erweiterte Modelle und Agenten",
          "Unbegrenzte Arbeitsbereiche",
          "Priorisierter Support",
          "Früher Zugriff auf Funktionen",
        ],
      },
      {
        name: "Business",
        price: "Individuell",
        period: "",
        description:
          "Für Teams, die Sicherheit, Kontrolle und Skalierung benötigen.",
        cta: "Vertrieb kontaktieren",
        featured: false,
        features: [
          "Alles aus Pro",
          "Teamverwaltung und SSO",
          "Zentrale Abrechnung",
          "Individuelle KI-Modelle",
          "Dedizierter Support",
        ],
      },
    ],
  },

  fr: {
    badge: "Tarification",
    title: "Tarification simple.",
    titleHighlight: "Un seul écosystème.",
    description:
      "Commencez gratuitement. Passez à une offre supérieure quand vous êtes prêt. Aucun frais caché.",
    popular: "Le plus populaire",
    footer:
      "Tous les forfaits incluent l'accès à l'ensemble de l'écosystème NEASX.",
    plans: [
      {
        name: "Gratuit",
        price: "$0",
        period: "/mois",
        description:
          "Commencez à explorer avec un accès de base à tous les produits.",
        cta: "Commencer",
        featured: false,
        features: [
          "Accès aux 7 produits",
          "30 actions IA / mois",
          "1 espace de travail",
          "Support communautaire",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/mois",
        description:
          "Pour les personnes qui ont besoin de toute la puissance de l'IA chaque jour.",
        cta: "Commencer l'essai gratuit",
        featured: true,
        features: [
          "Actions IA illimitées",
          "Modèles et agents avancés",
          "Espaces de travail illimités",
          "Support prioritaire",
          "Accès anticipé aux fonctionnalités",
        ],
      },
      {
        name: "Entreprise",
        price: "Sur mesure",
        period: "",
        description:
          "Pour les équipes qui ont besoin de sécurité, de contrôle et d'évolutivité.",
        cta: "Contacter les ventes",
        featured: false,
        features: [
          "Tout ce qui est inclus dans Pro",
          "Gestion d'équipe et SSO",
          "Facturation centralisée",
          "Modèles IA personnalisés",
          "Support dédié",
        ],
      },
    ],
  },

  es: {
    badge: "Precios",
    title: "Precios sencillos.",
    titleHighlight: "Un solo ecosistema.",
    description:
      "Empieza gratis. Mejora tu plan cuando estés listo. Sin cargos ocultos.",
    popular: "Más popular",
    footer:
      "Todos los planes incluyen acceso al ecosistema completo de NEASX.",
    plans: [
      {
        name: "Gratis",
        price: "$0",
        period: "/mes",
        description:
          "Comienza a explorar con acceso básico a todos los productos.",
        cta: "Empezar",
        featured: false,
        features: [
          "Acceso a los 7 productos",
          "30 acciones de IA / mes",
          "1 espacio de trabajo",
          "Soporte de la comunidad",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/mes",
        description:
          "Para quienes necesitan toda la potencia de la IA todos los días.",
        cta: "Iniciar prueba gratis",
        featured: true,
        features: [
          "Acciones de IA ilimitadas",
          "Modelos y agentes avanzados",
          "Espacios de trabajo ilimitados",
          "Soporte prioritario",
          "Acceso anticipado a funciones",
        ],
      },
      {
        name: "Empresa",
        price: "Personalizado",
        period: "",
        description:
          "Para equipos que necesitan seguridad, control y escalabilidad.",
        cta: "Contactar ventas",
        featured: false,
        features: [
          "Todo lo incluido en Pro",
          "Gestión de equipos y SSO",
          "Facturación centralizada",
          "Modelos de IA personalizados",
          "Soporte dedicado",
        ],
      },
    ],
  },

  id: {
    badge: "Harga",
    title: "Harga sederhana.",
    titleHighlight: "Satu ekosistem.",
    description:
      "Mulai gratis. Tingkatkan saat Anda siap. Tanpa biaya tersembunyi.",
    popular: "Paling Populer",
    footer:
      "Semua paket mencakup akses ke seluruh ekosistem NEASX.",
    plans: [
      {
        name: "Gratis",
        price: "$0",
        period: "/bln",
        description:
          "Mulai menjelajahi dengan akses dasar ke semua produk.",
        cta: "Mulai",
        featured: false,
        features: [
          "Akses ke semua 7 produk",
          "30 tindakan AI / bulan",
          "1 ruang kerja",
          "Dukungan komunitas",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/bln",
        description:
          "Untuk individu yang membutuhkan kekuatan AI penuh setiap hari.",
        cta: "Mulai Uji Coba Gratis",
        featured: true,
        features: [
          "Tindakan AI tanpa batas",
          "Model dan agen tingkat lanjut",
          "Ruang kerja tanpa batas",
          "Dukungan prioritas",
          "Akses awal ke fitur",
        ],
      },
      {
        name: "Bisnis",
        price: "Kustom",
        period: "",
        description:
          "Untuk tim yang membutuhkan keamanan, kontrol, dan skala.",
        cta: "Hubungi Penjualan",
        featured: false,
        features: [
          "Semua fitur Pro",
          "Manajemen tim & SSO",
          "Penagihan terpusat",
          "Model AI kustom",
          "Dukungan khusus",
        ],
      },
    ],
  },

  ja: {
    badge: "料金",
    title: "シンプルな料金。",
    titleHighlight: "ひとつのエコシステム。",
    description:
      "無料で始めましょう。準備ができたらアップグレード。隠れた料金はありません。",
    popular: "一番人気",
    footer:
      "すべてのプランでNEASXの完全なエコシステムにアクセスできます。",
    plans: [
      {
        name: "無料",
        price: "$0",
        period: "/月",
        description:
          "すべての製品に基本アクセスしてエコシステムを体験できます。",
        cta: "始める",
        featured: false,
        features: [
          "7製品すべてへのアクセス",
          "月30回のAIアクション",
          "1ワークスペース",
          "コミュニティサポート",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/月",
        description:
          "毎日フルパワーのAIを必要とする個人向け。",
        cta: "無料トライアルを開始",
        featured: true,
        features: [
          "AIアクション無制限",
          "高度なモデルとエージェント",
          "ワークスペース無制限",
          "優先サポート",
          "新機能への早期アクセス",
        ],
      },
      {
        name: "Business",
        price: "カスタム",
        period: "",
        description:
          "セキュリティ、管理、拡張性を必要とするチーム向け。",
        cta: "営業に問い合わせる",
        featured: false,
        features: [
          "Proの全機能",
          "チーム管理とSSO",
          "一元化された請求",
          "カスタムAIモデル",
          "専任サポート",
        ],
      },
    ],
  },

  ko: {
    badge: "요금제",
    title: "간단한 가격.",
    titleHighlight: "하나의 생태계.",
    description:
      "무료로 시작하세요. 준비가 되면 업그레이드하세요. 숨겨진 요금은 없습니다.",
    popular: "가장 인기",
    footer:
      "모든 요금제에는 전체 NEASX 생태계에 대한 액세스가 포함됩니다.",
    plans: [
      {
        name: "무료",
        price: "$0",
        period: "/월",
        description:
          "모든 제품에 대한 기본 액세스로 생태계를 시작해 보세요.",
        cta: "시작하기",
        featured: false,
        features: [
          "7개 제품 모두 이용",
          "월 30회 AI 작업",
          "워크스페이스 1개",
          "커뮤니티 지원",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/월",
        description:
          "매일 강력한 AI 기능이 필요한 개인을 위한 요금제입니다.",
        cta: "무료 평가판 시작",
        featured: true,
        features: [
          "AI 작업 무제한",
          "고급 모델 및 에이전트",
          "워크스페이스 무제한",
          "우선 지원",
          "신규 기능 조기 액세스",
        ],
      },
      {
        name: "Business",
        price: "맞춤형",
        period: "",
        description:
          "보안, 제어 및 확장성이 필요한 팀을 위한 요금제입니다.",
        cta: "영업팀 문의",
        featured: false,
        features: [
          "Pro의 모든 기능",
          "팀 관리 및 SSO",
          "중앙 집중식 결제",
          "맞춤형 AI 모델",
          "전담 지원",
        ],
      },
    ],
  },

  pt: {
    badge: "Preços",
    title: "Preços simples.",
    titleHighlight: "Um ecossistema.",
    description:
      "Comece gratuitamente. Faça upgrade quando estiver pronto. Sem taxas ocultas.",
    popular: "Mais popular",
    footer:
      "Todos os planos incluem acesso ao ecossistema completo da NEASX.",
    plans: [
      {
        name: "Grátis",
        price: "$0",
        period: "/mês",
        description:
          "Comece a explorar com acesso básico a todos os produtos.",
        cta: "Começar",
        featured: false,
        features: [
          "Acesso aos 7 produtos",
          "30 ações de IA / mês",
          "1 espaço de trabalho",
          "Suporte da comunidade",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/mês",
        description:
          "Para quem precisa de todo o poder da IA todos os dias.",
        cta: "Iniciar teste grátis",
        featured: true,
        features: [
          "Ações de IA ilimitadas",
          "Modelos e agentes avançados",
          "Espaços de trabalho ilimitados",
          "Suporte prioritário",
          "Acesso antecipado a recursos",
        ],
      },
      {
        name: "Business",
        price: "Personalizado",
        period: "",
        description:
          "Para equipes que precisam de segurança, controle e escala.",
        cta: "Falar com vendas",
        featured: false,
        features: [
          "Tudo do Pro",
          "Gestão de equipe e SSO",
          "Faturamento centralizado",
          "Modelos de IA personalizados",
          "Suporte dedicado",
        ],
      },
    ],
  },

  ru: {
    badge: "Цены",
    title: "Простые цены.",
    titleHighlight: "Одна экосистема.",
    description:
      "Начните бесплатно. Обновитесь, когда будете готовы. Никаких скрытых платежей.",
    popular: "Популярный",
    footer:
      "Все планы включают доступ ко всей экосистеме NEASX.",
    plans: [
      {
        name: "Бесплатный",
        price: "$0",
        period: "/мес",
        description:
          "Начните знакомство со всеми продуктами с базовым доступом.",
        cta: "Начать",
        featured: false,
        features: [
          "Доступ ко всем 7 продуктам",
          "30 действий ИИ / месяц",
          "1 рабочее пространство",
          "Поддержка сообщества",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/мес",
        description:
          "Для пользователей, которым каждый день нужна полная мощь ИИ.",
        cta: "Начать бесплатный пробный период",
        featured: true,
        features: [
          "Неограниченные действия ИИ",
          "Расширенные модели и агенты",
          "Неограниченные рабочие пространства",
          "Приоритетная поддержка",
          "Ранний доступ к функциям",
        ],
      },
      {
        name: "Business",
        price: "Индивидуально",
        period: "",
        description:
          "Для команд, которым нужны безопасность, контроль и масштабирование.",
        cta: "Связаться с отделом продаж",
        featured: false,
        features: [
          "Все возможности Pro",
          "Управление командами и SSO",
          "Централизованная оплата",
          "Пользовательские модели ИИ",
          "Выделенная поддержка",
        ],
      },
    ],
  },

  zh: {
    badge: "价格",
    title: "简单定价。",
    titleHighlight: "一个生态系统。",
    description:
      "免费开始。准备好后再升级。没有隐藏费用。",
    popular: "最受欢迎",
    footer:
      "所有方案均包含完整 NEASX 生态系统的访问权限。",
    plans: [
      {
        name: "免费",
        price: "$0",
        period: "/月",
        description:
          "以基本访问权限开始探索所有产品。",
        cta: "开始使用",
        featured: false,
        features: [
          "访问全部 7 款产品",
          "每月 30 次 AI 操作",
          "1 个工作区",
          "社区支持",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/月",
        description:
          "适合每天需要完整 AI 能力的个人用户。",
        cta: "开始免费试用",
        featured: true,
        features: [
          "无限 AI 操作",
          "高级模型与智能代理",
          "无限工作区",
          "优先支持",
          "新功能抢先体验",
        ],
      },
      {
        name: "Business",
        price: "定制",
        period: "",
        description:
          "适合需要安全性、控制能力和规模化的团队。",
        cta: "联系销售",
        featured: false,
        features: [
          "包含 Pro 的全部功能",
          "团队管理与 SSO",
          "集中式账单",
          "自定义 AI 模型",
          "专属支持",
        ],
      },
    ],
  },

  ar: {
    badge: "الأسعار",
    title: "أسعار بسيطة.",
    titleHighlight: "منظومة واحدة.",
    description:
      "ابدأ مجانًا. قم بالترقية عندما تكون مستعدًا. بدون رسوم مخفية.",
    popular: "الأكثر شعبية",
    footer:
      "تتضمن جميع الخطط الوصول إلى منظومة NEASX الكاملة.",
    plans: [
      {
        name: "مجاني",
        price: "$0",
        period: "/شهر",
        description:
          "ابدأ باستكشاف جميع المنتجات من خلال الوصول الأساسي.",
        cta: "ابدأ الآن",
        featured: false,
        features: [
          "الوصول إلى المنتجات السبعة",
          "30 عملية ذكاء اصطناعي / شهر",
          "مساحة عمل واحدة",
          "دعم المجتمع",
        ],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/شهر",
        description:
          "للأفراد الذين يحتاجون إلى كامل قوة الذكاء الاصطناعي يوميًا.",
        cta: "ابدأ التجربة المجانية",
        featured: true,
        features: [
          "عمليات ذكاء اصطناعي غير محدودة",
          "نماذج ووكلاء متقدمون",
          "مساحات عمل غير محدودة",
          "دعم ذو أولوية",
          "وصول مبكر إلى الميزات",
        ],
      },
      {
        name: "Business",
        price: "مخصص",
        period: "",
        description:
          "للفرق التي تحتاج إلى الأمان والتحكم وقابلية التوسع.",
        cta: "تواصل مع المبيعات",
        featured: false,
        features: [
          "كل ما في Pro",
          "إدارة الفريق وSSO",
          "فواتير مركزية",
          "نماذج ذكاء اصطناعي مخصصة",
          "دعم مخصص",
        ],
      },
    ],
  },
};

export default function Pricing({
  lang,
  dict,
}: {
  lang: string;
  dict?: any;
}) {
  const content = translations[lang] ?? translations.en;

  return (
    <Section id="pricing" className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[140px]" />

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

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {content.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${
                plan.featured
                  ? "border-blue-400/30 bg-gradient-to-b from-blue-500/[0.09] to-white/[0.02] shadow-2xl shadow-blue-950/30 lg:scale-[1.03]"
                  : "border-white/10 bg-white/[0.025] hover:border-blue-400/20"
              }`}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full border border-blue-400/25 bg-blue-500/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-blue-300">
                  {content.popular}
                </span>
              )}

              <h3 className="text-lg font-bold text-white">
                {plan.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tight text-white">
                  {plan.price}
                </span>

                <span className="text-sm text-slate-500">
                  {plan.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                {plan.description}
              </p>

              <div className="my-7 h-px w-full bg-white/10" />

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                      <Check
                        size={11}
                        className="text-emerald-400"
                      />
                    </span>

                    <span className="text-sm text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href={
                    plan.name === "Business" ||
                    plan.name === "İşletme" ||
                    plan.name === "Entreprise" ||
                    plan.name === "Empresa" ||
                    plan.name === "Bisnis" ||
                    plan.name === "Business" ||
                    plan.name === "企業" ||
                    plan.name === "사업" ||
                    plan.name === "Empresa" ||
                    plan.name === "Бизнес" ||
                    plan.name === "定制"
                      ? `/${lang}/contact`
                      : `/${lang}/signup`
                  }
                  className="block"
                >
                  <Button
                    variant={plan.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          {content.footer}
        </p>
      </Container>
    </Section>
  );
}