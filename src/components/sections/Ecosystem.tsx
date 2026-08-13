import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import {
  PenLine,
  MessageSquare,
  Bot,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ecosystemProducts = [
  {
    name: "Writer",
    icon: PenLine,
    color: "from-blue-500 to-violet-500",
  },
  {
    name: "Chat",
    icon: MessageSquare,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Agent",
    icon: Bot,
    color: "from-violet-500 to-fuchsia-500",
  },
];

const translations: Record<
  string,
  {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    connected: string;
    platform: string;
    platformDescription: string;
    features: string[];
    more: string;
    explore: string;
  }
> = {
  tr: {
    badge: "Ekosistem",
    title: "Tek ekosistem.",
    titleHighlight: "Sonsuz olasılıklar.",
    description:
      "Her NEASX ürünü aynı platform üzerine inşa edilmiştir. Tek hesap, tek ekosistem ve sorunsuz çalışan araçlar.",
    connected: "Bağlı",
    platform: "NEASX Platformu",
    platformDescription:
      "Kimlik doğrulama, yapay zeka modelleri, faturalandırma, depolama ve daha fazlası her ürün arasında paylaşılır.",
    features: [
      "Tek oturum açma",
      "Paylaşılan yapay zeka kredileri",
      "Birleşik faturalandırma",
      "Merkezi çalışma alanı",
    ],
    more: "+3 daha",
    explore: "Ekosistemi keşfet",
  },

  en: {
    badge: "Ecosystem",
    title: "One ecosystem.",
    titleHighlight: "Infinite possibilities.",
    description:
      "Every NEASX product is built on the same platform. One account, one ecosystem, and tools that work together seamlessly.",
    connected: "Connected",
    platform: "NEASX Platform",
    platformDescription:
      "Authentication, AI models, billing, storage and more — shared across every product.",
    features: [
      "Single sign-on",
      "Shared AI credits",
      "Unified billing",
      "Central workspace",
    ],
    more: "+3 more",
    explore: "Explore the ecosystem",
  },

  de: {
    badge: "Ökosystem",
    title: "Ein Ökosystem.",
    titleHighlight: "Unendliche Möglichkeiten.",
    description:
      "Jedes NEASX-Produkt basiert auf derselben Plattform. Ein Konto, ein Ökosystem und nahtlos zusammenarbeitende Tools.",
    connected: "Verbunden",
    platform: "NEASX-Plattform",
    platformDescription:
      "Authentifizierung, KI-Modelle, Abrechnung, Speicher und mehr — gemeinsam für alle Produkte.",
    features: [
      "Einmalige Anmeldung",
      "Geteilte KI-Credits",
      "Zentrale Abrechnung",
      "Zentraler Arbeitsbereich",
    ],
    more: "+3 weitere",
    explore: "Ökosystem entdecken",
  },

  fr: {
    badge: "Écosystème",
    title: "Un seul écosystème.",
    titleHighlight: "Des possibilités infinies.",
    description:
      "Chaque produit NEASX repose sur la même plateforme. Un compte, un écosystème et des outils qui fonctionnent ensemble.",
    connected: "Connecté",
    platform: "Plateforme NEASX",
    platformDescription:
      "Authentification, modèles IA, facturation, stockage et plus encore — partagés entre tous les produits.",
    features: [
      "Connexion unique",
      "Crédits IA partagés",
      "Facturation unifiée",
      "Espace de travail central",
    ],
    more: "+3 autres",
    explore: "Découvrir l'écosystème",
  },

  es: {
    badge: "Ecosistema",
    title: "Un solo ecosistema.",
    titleHighlight: "Posibilidades infinitas.",
    description:
      "Todos los productos de NEASX se basan en la misma plataforma. Una cuenta, un ecosistema y herramientas que funcionan juntas.",
    connected: "Conectado",
    platform: "Plataforma NEASX",
    platformDescription:
      "Autenticación, modelos de IA, facturación, almacenamiento y mucho más, compartidos entre todos los productos.",
    features: [
      "Inicio de sesión único",
      "Créditos de IA compartidos",
      "Facturación unificada",
      "Espacio de trabajo central",
    ],
    more: "+3 más",
    explore: "Explorar el ecosistema",
  },

  id: {
    badge: "Ekosistem",
    title: "Satu ekosistem.",
    titleHighlight: "Kemungkinan tanpa batas.",
    description:
      "Setiap produk NEASX dibangun di atas platform yang sama. Satu akun, satu ekosistem, dan alat yang bekerja bersama dengan mulus.",
    connected: "Terhubung",
    platform: "Platform NEASX",
    platformDescription:
      "Autentikasi, model AI, penagihan, penyimpanan, dan lainnya — digunakan bersama oleh semua produk.",
    features: [
      "Masuk sekali",
      "Kredit AI bersama",
      "Penagihan terpadu",
      "Ruang kerja terpusat",
    ],
    more: "+3 lainnya",
    explore: "Jelajahi ekosistem",
  },

  ja: {
    badge: "エコシステム",
    title: "ひとつのエコシステム。",
    titleHighlight: "無限の可能性。",
    description:
      "すべてのNEASX製品は同じプラットフォーム上に構築されています。1つのアカウント、1つのエコシステム、シームレスに連携するツール。",
    connected: "接続済み",
    platform: "NEASXプラットフォーム",
    platformDescription:
      "認証、AIモデル、請求、ストレージなどをすべての製品で共有します。",
    features: [
      "シングルサインオン",
      "共有AIクレジット",
      "統合請求",
      "中央ワークスペース",
    ],
    more: "その他3つ",
    explore: "エコシステムを見る",
  },

  ko: {
    badge: "생태계",
    title: "하나의 생태계.",
    titleHighlight: "무한한 가능성.",
    description:
      "모든 NEASX 제품은 동일한 플랫폼 위에 구축됩니다. 하나의 계정, 하나의 생태계, 원활하게 연결되는 도구.",
    connected: "연결됨",
    platform: "NEASX 플랫폼",
    platformDescription:
      "인증, AI 모델, 결제, 스토리지 등을 모든 제품에서 공유합니다.",
    features: [
      "통합 로그인",
      "공유 AI 크레딧",
      "통합 결제",
      "중앙 워크스페이스",
    ],
    more: "+3개 더",
    explore: "생태계 둘러보기",
  },

  pt: {
    badge: "Ecossistema",
    title: "Um ecossistema.",
    titleHighlight: "Possibilidades infinitas.",
    description:
      "Todos os produtos NEASX são construídos na mesma plataforma. Uma conta, um ecossistema e ferramentas que trabalham perfeitamente juntas.",
    connected: "Conectado",
    platform: "Plataforma NEASX",
    platformDescription:
      "Autenticação, modelos de IA, faturamento, armazenamento e muito mais — compartilhados entre todos os produtos.",
    features: [
      "Login único",
      "Créditos de IA compartilhados",
      "Faturamento unificado",
      "Espaço de trabalho central",
    ],
    more: "+3 mais",
    explore: "Explorar o ecossistema",
  },

  ru: {
    badge: "Экосистема",
    title: "Одна экосистема.",
    titleHighlight: "Бесконечные возможности.",
    description:
      "Все продукты NEASX построены на одной платформе. Один аккаунт, одна экосистема и инструменты, которые работают вместе.",
    connected: "Подключено",
    platform: "Платформа NEASX",
    platformDescription:
      "Аутентификация, модели ИИ, биллинг, хранилище и другие функции доступны во всех продуктах.",
    features: [
      "Единый вход",
      "Общие кредиты ИИ",
      "Единый биллинг",
      "Центральное рабочее пространство",
    ],
    more: "+3 ещё",
    explore: "Исследовать экосистему",
  },

  zh: {
    badge: "生态系统",
    title: "一个生态系统。",
    titleHighlight: "无限可能。",
    description:
      "所有 NEASX 产品都建立在同一平台之上。一个账户、一个生态系统，以及无缝协作的工具。",
    connected: "已连接",
    platform: "NEASX 平台",
    platformDescription:
      "身份验证、AI 模型、账单、存储等功能由所有产品共享。",
    features: [
      "单点登录",
      "共享 AI 积分",
      "统一账单",
      "中央工作区",
    ],
    more: "+3 更多",
    explore: "探索生态系统",
  },

  ar: {
    badge: "المنظومة",
    title: "منظومة واحدة.",
    titleHighlight: "إمكانات لا حصر لها.",
    description:
      "تم بناء جميع منتجات NEASX على المنصة نفسها. حساب واحد، منظومة واحدة، وأدوات تعمل معًا بسلاسة.",
    connected: "متصل",
    platform: "منصة NEASX",
    platformDescription:
      "المصادقة ونماذج الذكاء الاصطناعي والفوترة والتخزين والمزيد — مشتركة بين جميع المنتجات.",
    features: [
      "تسجيل دخول موحد",
      "أرصدة ذكاء اصطناعي مشتركة",
      "فوترة موحدة",
      "مساحة عمل مركزية",
    ],
    more: "+3 أخرى",
    explore: "استكشف المنظومة",
  },
};

export default function Ecosystem({
  lang,
  dict,
}: {
  lang: string;
  dict?: any;
}) {
  const content = translations[lang] ?? translations.en;

  return (
    <Section
      id="ecosystem"
      className="relative overflow-hidden py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute right-[-200px] top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-violet-500/[0.045] blur-[130px]" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <Badge>{content.badge}</Badge>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
              {content.title}{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                {content.titleHighlight}
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {ecosystemProducts.map((product) => {
                const Icon = product.icon;

                return (
                  <div
                    key={product.name}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/25 hover:bg-white/[0.05]"
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br text-white ${product.color}`}
                    >
                      <Icon size={16} />
                    </div>

                    <span className="text-sm font-semibold text-white">
                      {product.name}
                    </span>
                  </div>
                );
              })}

              <div className="flex items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-transparent px-5 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <Layers size={16} className="text-slate-400" />
                </div>

                <span className="text-sm font-semibold text-slate-400">
                  {content.more}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/[0.06] via-white/[0.02] to-violet-500/[0.06] p-8 backdrop-blur-sm sm:p-10">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[100px]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {content.platform}
                </h3>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                  {content.connected}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {content.platformDescription}
              </p>

              <div className="mt-8 space-y-3">
                {content.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="text-sm text-slate-300">
                      {feature}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                  </div>
                ))}
              </div>

              <Link
                href="#products"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-cyan-300"
              >
                {content.explore}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}