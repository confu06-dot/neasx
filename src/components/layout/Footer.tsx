import Link from "next/link";
import Container from "@/components/ui/Container";
import Newsletter from "@/components/ui/Newsletter";

const translations: Record<
  string,
  {
    description: string;
    status: string;
    products: string;
    resources: string;
    company: string;
    legal: string;
    privacy: string;
    terms: string;
    cookies: string;
    blog: string;
    docs: string;
    help: string;
    about: string;
    careers: string;
    contact: string;
    copyright: string;
    login: string;
    signup: string;
    built: string;
    homeLabel: string;
  }
> = {
  tr: {
    description:
      "Gerçek iş için yapay zeka ürünleri. Yazma, sohbet, ajanlar, yaratıcı araçlar, ses ve görü için tek ekosistem.",
    status: "Tüm sistemler çalışıyor",
    products: "Ürünler",
    resources: "Kaynaklar",
    company: "Şirket",
    legal: "Yasal",
    privacy: "Gizlilik",
    terms: "Koşullar",
    cookies: "Çerezler",
    blog: "Blog",
    docs: "Belgeler",
    help: "Yardım Merkezi",
    about: "Hakkımızda",
    careers: "Kariyer",
    contact: "İletişim",
    copyright: "Tüm hakları saklıdır.",
    login: "Giriş Yap",
    signup: "Kayıt Ol",
    built: "NEASX Labs'de geliştirildi",
    homeLabel: "NEASX Ana Sayfa",
  },

  en: {
    description:
      "AI products for real work. One ecosystem for writing, chat, agents, creative, voice and vision.",
    status: "All systems operational",
    products: "Products",
    resources: "Resources",
    company: "Company",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    blog: "Blog",
    docs: "Docs",
    help: "Help Center",
    about: "About",
    careers: "Careers",
    contact: "Contact",
    copyright: "All rights reserved.",
    login: "Log in",
    signup: "Sign up",
    built: "Built at NEASX Labs",
    homeLabel: "NEASX Home",
  },

  de: {
    description:
      "KI-Produkte für echte Arbeit. Ein Ökosystem für Schreiben, Chat, Agenten, Kreativität, Sprache und Vision.",
    status: "Alle Systeme betriebsbereit",
    products: "Produkte",
    resources: "Ressourcen",
    company: "Unternehmen",
    legal: "Rechtliches",
    privacy: "Datenschutz",
    terms: "Bedingungen",
    cookies: "Cookies",
    blog: "Blog",
    docs: "Dokumentation",
    help: "Hilfezentrum",
    about: "Über uns",
    careers: "Karriere",
    contact: "Kontakt",
    copyright: "Alle Rechte vorbehalten.",
    login: "Anmelden",
    signup: "Registrieren",
    built: "Bei NEASX Labs entwickelt",
    homeLabel: "NEASX Startseite",
  },

  fr: {
    description:
      "Des produits IA pour le vrai travail. Un écosystème pour l'écriture, le chat, les agents, la création, la voix et la vision.",
    status: "Tous les systèmes fonctionnent",
    products: "Produits",
    resources: "Ressources",
    company: "Entreprise",
    legal: "Juridique",
    privacy: "Confidentialité",
    terms: "Conditions",
    cookies: "Cookies",
    blog: "Blog",
    docs: "Documentation",
    help: "Centre d'aide",
    about: "À propos",
    careers: "Carrières",
    contact: "Contact",
    copyright: "Tous droits réservés.",
    login: "Connexion",
    signup: "Créer un compte",
    built: "Développé chez NEASX Labs",
    homeLabel: "Accueil NEASX",
  },

  es: {
    description:
      "Productos de IA para el trabajo real. Un ecosistema para escritura, chat, agentes, creatividad, voz y visión.",
    status: "Todos los sistemas operativos",
    products: "Productos",
    resources: "Recursos",
    company: "Empresa",
    legal: "Legal",
    privacy: "Privacidad",
    terms: "Términos",
    cookies: "Cookies",
    blog: "Blog",
    docs: "Documentación",
    help: "Centro de ayuda",
    about: "Acerca de",
    careers: "Empleo",
    contact: "Contacto",
    copyright: "Todos los derechos reservados.",
    login: "Iniciar sesión",
    signup: "Registrarse",
    built: "Desarrollado en NEASX Labs",
    homeLabel: "Inicio de NEASX",
  },

  id: {
    description:
      "Produk AI untuk pekerjaan nyata. Satu ekosistem untuk menulis, chat, agen, kreatif, suara, dan visi.",
    status: "Semua sistem beroperasi",
    products: "Produk",
    resources: "Sumber Daya",
    company: "Perusahaan",
    legal: "Legal",
    privacy: "Privasi",
    terms: "Ketentuan",
    cookies: "Cookie",
    blog: "Blog",
    docs: "Dokumentasi",
    help: "Pusat Bantuan",
    about: "Tentang",
    careers: "Karier",
    contact: "Kontak",
    copyright: "Hak cipta dilindungi.",
    login: "Masuk",
    signup: "Daftar",
    built: "Dibangun di NEASX Labs",
    homeLabel: "Beranda NEASX",
  },

  ja: {
    description:
      "実際の仕事のためのAI製品。文章、チャット、エージェント、クリエイティブ、音声、ビジョンをひとつのエコシステムで。",
    status: "すべてのシステムが稼働中",
    products: "製品",
    resources: "リソース",
    company: "会社",
    legal: "法務",
    privacy: "プライバシー",
    terms: "利用規約",
    cookies: "Cookie",
    blog: "ブログ",
    docs: "ドキュメント",
    help: "ヘルプセンター",
    about: "会社概要",
    careers: "採用情報",
    contact: "お問い合わせ",
    copyright: "All rights reserved.",
    login: "ログイン",
    signup: "新規登録",
    built: "NEASX Labsで開発",
    homeLabel: "NEASX ホーム",
  },

  ko: {
    description:
      "실제 업무를 위한 AI 제품. 글쓰기, 채팅, 에이전트, 크리에이티브, 음성 및 비전을 위한 하나의 생태계.",
    status: "모든 시스템 정상 운영 중",
    products: "제품",
    resources: "리소스",
    company: "회사",
    legal: "법률",
    privacy: "개인정보 보호",
    terms: "약관",
    cookies: "쿠키",
    blog: "블로그",
    docs: "문서",
    help: "도움말 센터",
    about: "회사 소개",
    careers: "채용",
    contact: "문의",
    copyright: "모든 권리 보유.",
    login: "로그인",
    signup: "회원가입",
    built: "NEASX Labs에서 개발",
    homeLabel: "NEASX 홈",
  },

  pt: {
    description:
      "Produtos de IA para trabalho real. Um ecossistema para escrita, chat, agentes, criação, voz e visão.",
    status: "Todos os sistemas operacionais",
    products: "Produtos",
    resources: "Recursos",
    company: "Empresa",
    legal: "Legal",
    privacy: "Privacidade",
    terms: "Termos",
    cookies: "Cookies",
    blog: "Blog",
    docs: "Documentação",
    help: "Central de Ajuda",
    about: "Sobre",
    careers: "Carreiras",
    contact: "Contato",
    copyright: "Todos os direitos reservados.",
    login: "Entrar",
    signup: "Cadastrar",
    built: "Desenvolvido na NEASX Labs",
    homeLabel: "Início da NEASX",
  },

  ru: {
    description:
      "ИИ-продукты для реальной работы. Одна экосистема для письма, чата, агентов, творчества, голоса и компьютерного зрения.",
    status: "Все системы работают",
    products: "Продукты",
    resources: "Ресурсы",
    company: "Компания",
    legal: "Правовая информация",
    privacy: "Конфиденциальность",
    terms: "Условия",
    cookies: "Файлы cookie",
    blog: "Блог",
    docs: "Документация",
    help: "Центр помощи",
    about: "О компании",
    careers: "Карьера",
    contact: "Контакты",
    copyright: "Все права защищены.",
    login: "Войти",
    signup: "Регистрация",
    built: "Разработано в NEASX Labs",
    homeLabel: "Главная NEASX",
  },

  zh: {
    description:
      "为真实工作打造的 AI 产品。一个生态系统，涵盖写作、聊天、智能代理、创意、语音和视觉。",
    status: "所有系统运行正常",
    products: "产品",
    resources: "资源",
    company: "公司",
    legal: "法律",
    privacy: "隐私",
    terms: "条款",
    cookies: "Cookie",
    blog: "博客",
    docs: "文档",
    help: "帮助中心",
    about: "关于我们",
    careers: "招聘",
    contact: "联系我们",
    copyright: "版权所有。",
    login: "登录",
    signup: "注册",
    built: "由 NEASX Labs 开发",
    homeLabel: "NEASX 首页",
  },

  ar: {
    description:
      "منتجات ذكاء اصطناعي للعمل الحقيقي. منظومة واحدة للكتابة والدردشة والوكلاء والإبداع والصوت والرؤية.",
    status: "جميع الأنظمة تعمل",
    products: "المنتجات",
    resources: "الموارد",
    company: "الشركة",
    legal: "قانوني",
    privacy: "الخصوصية",
    terms: "الشروط",
    cookies: "ملفات تعريف الارتباط",
    blog: "المدونة",
    docs: "الوثائق",
    help: "مركز المساعدة",
    about: "من نحن",
    careers: "الوظائف",
    contact: "اتصل بنا",
    copyright: "جميع الحقوق محفوظة.",
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    built: "تم التطوير في NEASX Labs",
    homeLabel: "الصفحة الرئيسية لـ NEASX",
  },
};

export default function Footer({
  lang,
}: {
  lang: string;
  dict?: any;
}) {
  const content = translations[lang] ?? translations.en;

  const footerLinks = {
    [content.products]: [
      { label: "Writer", href: `/${lang}/products/writer` },
      { label: "Chat", href: `/${lang}/products/chat` },
      { label: "Agent", href: `/${lang}/products/agent` },
      { label: "Studio", href: `/${lang}/products/studio` },
      { label: "Voice", href: `/${lang}/products/voice` },
      { label: "Vision", href: `/${lang}/products/vision` },
      { label: "API", href: `/${lang}/products/api` },
    ],
    [content.resources]: [
      { label: content.blog, href: `/${lang}/blog` },
      { label: content.docs, href: `/${lang}/docs` },
      { label: content.help, href: `/${lang}/help` },
      { label: content.status, href: `/${lang}/status` },
    ],
    [content.company]: [
      { label: content.about, href: `/${lang}/about` },
      { label: content.careers, href: `/${lang}/careers` },
      { label: content.contact, href: `/${lang}/contact` },
    ],
    [content.legal]: [
      { label: content.privacy, href: `/${lang}/legal/privacy` },
      { label: content.terms, href: `/${lang}/legal/terms` },
      { label: content.cookies, href: `/${lang}/legal/cookies` },
    ],
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#050b14]">
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/[0.04] blur-[120px]" />

      <Container className="w-full max-w-full">
        <div className="grid w-full gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:py-16">
          {/* Brand */}
          <div className="w-full">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-3"
              aria-label={content.homeLabel}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-black text-white shadow-lg shadow-blue-500/20">
                N
              </span>

              <span className="text-xl font-black tracking-tight text-white">
                NEASX
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              {content.description}
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

              <Link
                href={`/${lang}/status`}
                className="text-xs text-slate-500 transition hover:text-white"
              >
                {content.status}
              </Link>
            </div>

            <div className="mt-6">
              <Newsletter />
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="w-full">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {heading}
              </h3>

              <nav className="mt-5 flex w-full flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-sm text-slate-500 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex w-full flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} NEASX. {content.copyright}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={`/${lang}/login`}
              className="text-xs text-slate-600 transition hover:text-white"
            >
              {content.login}
            </Link>

            <Link
              href={`/${lang}/signup`}
              className="text-xs text-slate-600 transition hover:text-white"
            >
              {content.signup}
            </Link>

            <p className="text-xs text-slate-600">
              {content.built}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}