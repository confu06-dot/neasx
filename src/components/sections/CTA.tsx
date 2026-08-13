import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";

const translations: Record<
  string,
  {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    start: string;
    products: string;
    note: string;
  }
> = {
  tr: {
    badge: "Bugün başla",
    title: "İşleri bitirmeye",
    titleHighlight: "hazır mısınız?",
    description:
      "NEASX'e katılın ve tüm yapay zeka ürünleri ekosisteminin kilidini açın. Başlamak ücretsiz. Kredi kartı gerekmez.",
    start: "Ücretsiz Başla",
    products: "Ürünleri Gör",
    note: "Kredi kartı gerekmez · İstediğiniz zaman iptal edin",
  },

  en: {
    badge: "Start today",
    title: "Ready to get",
    titleHighlight: "work done?",
    description:
      "Join NEASX and unlock the full ecosystem of AI products. Free to start. No credit card required.",
    start: "Start for Free",
    products: "View Products",
    note: "No credit card required · Cancel anytime",
  },

  de: {
    badge: "Heute starten",
    title: "Bereit, Arbeit",
    titleHighlight: "zu erledigen?",
    description:
      "Treten Sie NEASX bei und schalten Sie das gesamte KI-Ökosystem frei. Kostenlos starten. Keine Kreditkarte erforderlich.",
    start: "Kostenlos starten",
    products: "Produkte ansehen",
    note: "Keine Kreditkarte erforderlich · Jederzeit kündbar",
  },

  fr: {
    badge: "Commencez aujourd'hui",
    title: "Prêt à",
    titleHighlight: "travailler ?",
    description:
      "Rejoignez NEASX et débloquez tout l'écosystème de produits IA. Commencez gratuitement. Aucune carte bancaire requise.",
    start: "Commencer gratuitement",
    products: "Voir les produits",
    note: "Aucune carte bancaire requise · Annulation à tout moment",
  },

  es: {
    badge: "Empieza hoy",
    title: "¿Listo para",
    titleHighlight: "hacer más?",
    description:
      "Únete a NEASX y desbloquea todo el ecosistema de productos de IA. Empieza gratis. No se requiere tarjeta.",
    start: "Empezar gratis",
    products: "Ver productos",
    note: "No se requiere tarjeta · Cancela cuando quieras",
  },

  id: {
    badge: "Mulai hari ini",
    title: "Siap untuk",
    titleHighlight: "menyelesaikan pekerjaan?",
    description:
      "Bergabunglah dengan NEASX dan buka seluruh ekosistem produk AI. Mulai gratis. Tidak perlu kartu kredit.",
    start: "Mulai Gratis",
    products: "Lihat Produk",
    note: "Tidak perlu kartu kredit · Batalkan kapan saja",
  },

  ja: {
    badge: "今すぐ始める",
    title: "仕事を",
    titleHighlight: "始める準備はできましたか？",
    description:
      "NEASXに参加して、AI製品の完全なエコシステムを利用しましょう。無料で開始できます。クレジットカードは不要です。",
    start: "無料で始める",
    products: "製品を見る",
    note: "クレジットカード不要 · いつでもキャンセル可能",
  },

  ko: {
    badge: "오늘 시작하세요",
    title: "업무를",
    titleHighlight: "끝낼 준비가 되셨나요?",
    description:
      "NEASX에 가입하고 전체 AI 제품 생태계를 이용하세요. 무료로 시작할 수 있으며 신용카드가 필요하지 않습니다.",
    start: "무료로 시작하기",
    products: "제품 보기",
    note: "신용카드 불필요 · 언제든지 취소 가능",
  },

  pt: {
    badge: "Comece hoje",
    title: "Pronto para",
    titleHighlight: "fazer o trabalho?",
    description:
      "Junte-se à NEASX e desbloqueie todo o ecossistema de produtos de IA. Comece gratuitamente. Não é necessário cartão.",
    start: "Começar grátis",
    products: "Ver produtos",
    note: "Sem cartão de crédito · Cancele quando quiser",
  },

  ru: {
    badge: "Начните сегодня",
    title: "Готовы",
    titleHighlight: "сделать больше?",
    description:
      "Присоединяйтесь к NEASX и получите доступ ко всей экосистеме ИИ-продуктов. Начните бесплатно. Банковская карта не требуется.",
    start: "Начать бесплатно",
    products: "Посмотреть продукты",
    note: "Банковская карта не требуется · Отмена в любое время",
  },

  zh: {
    badge: "立即开始",
    title: "准备好",
    titleHighlight: "完成工作了吗？",
    description:
      "加入 NEASX，解锁完整的 AI 产品生态系统。免费开始，无需信用卡。",
    start: "免费开始",
    products: "查看产品",
    note: "无需信用卡 · 随时取消",
  },

  ar: {
    badge: "ابدأ اليوم",
    title: "هل أنت مستعد",
    titleHighlight: "لإنجاز العمل؟",
    description:
      "انضم إلى NEASX وافتح منظومة منتجات الذكاء الاصطناعي الكاملة. ابدأ مجانًا. لا تحتاج إلى بطاقة ائتمان.",
    start: "ابدأ مجانًا",
    products: "عرض المنتجات",
    note: "لا تحتاج إلى بطاقة ائتمان · يمكنك الإلغاء في أي وقت",
  },
};

export default function CTA({
  lang,
}: {
  lang: string;
  dict?: any;
}) {
  const content = translations[lang] ?? translations.en;

  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.09] via-[#0b1220]/90 to-violet-500/[0.09] px-6 py-16 text-center sm:px-12 lg:py-24">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/[0.12] blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/[0.12] blur-[100px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[90px]" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300/70">
              {content.badge}
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {content.title}{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                {content.titleHighlight}
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href={`/${lang}/signup`}>
                <Button icon>{content.start}</Button>
              </Link>

              <Link href={`/${lang}#products`}>
                <Button variant="secondary">{content.products}</Button>
              </Link>
            </div>

            <p className="mt-8 text-xs text-slate-600">
              {content.note}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}