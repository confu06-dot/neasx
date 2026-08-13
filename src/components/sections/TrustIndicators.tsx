import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import StatsCounter from "@/components/ui/StatsCounter";
import { Shield, Users, Zap, Globe } from "lucide-react";

const translations: Record<
  string,
  {
    stats: {
      activeUsers: string;
      aiRequests: string;
      countries: string;
      uptime: string;
    };
    badges: {
      securityCertified: string;
      privacyCompliant: string;
      informationSecurity: string;
      healthcareData: string;
    };
    description: string;
  }
> = {
  tr: {
    stats: {
      activeUsers: "Dünya genelinde aktif kullanıcı",
      aiRequests: "İşlenen yapay zeka isteği",
      countries: "Ülke ve bölge",
      uptime: "Çalışma süresi garantisi",
    },
    badges: {
      securityCertified: "Güvenlik sertifikalı",
      privacyCompliant: "Gizlilik uyumlu",
      informationSecurity: "Bilgi güvenliği",
      healthcareData: "Sağlık verileri",
    },
    description:
      "Kurumsal düzeyde güvenlik ve uyumluluk her ürüne entegre edilmiştir.",
  },

  en: {
    stats: {
      activeUsers: "Active users worldwide",
      aiRequests: "AI requests processed",
      countries: "Countries & regions",
      uptime: "Uptime guarantee",
    },
    badges: {
      securityCertified: "Security certified",
      privacyCompliant: "Privacy compliant",
      informationSecurity: "Information security",
      healthcareData: "Healthcare data",
    },
    description:
      "Enterprise-grade security and compliance built into every product.",
  },

  de: {
    stats: {
      activeUsers: "Aktive Nutzer weltweit",
      aiRequests: "Verarbeitete KI-Anfragen",
      countries: "Länder und Regionen",
      uptime: "Verfügbarkeitsgarantie",
    },
    badges: {
      securityCertified: "Sicherheitszertifiziert",
      privacyCompliant: "Datenschutzkonform",
      informationSecurity: "Informationssicherheit",
      healthcareData: "Gesundheitsdaten",
    },
    description:
      "Sicherheit und Compliance auf Unternehmensniveau sind in jedes Produkt integriert.",
  },

  fr: {
    stats: {
      activeUsers: "Utilisateurs actifs dans le monde",
      aiRequests: "Requêtes IA traitées",
      countries: "Pays et régions",
      uptime: "Garantie de disponibilité",
    },
    badges: {
      securityCertified: "Certifié en matière de sécurité",
      privacyCompliant: "Conforme à la confidentialité",
      informationSecurity: "Sécurité de l'information",
      healthcareData: "Données de santé",
    },
    description:
      "Une sécurité et une conformité de niveau entreprise intégrées à chaque produit.",
  },

  es: {
    stats: {
      activeUsers: "Usuarios activos en todo el mundo",
      aiRequests: "Solicitudes de IA procesadas",
      countries: "Países y regiones",
      uptime: "Garantía de disponibilidad",
    },
    badges: {
      securityCertified: "Certificado de seguridad",
      privacyCompliant: "Cumple con la privacidad",
      informationSecurity: "Seguridad de la información",
      healthcareData: "Datos sanitarios",
    },
    description:
      "Seguridad y cumplimiento de nivel empresarial integrados en cada producto.",
  },

  id: {
    stats: {
      activeUsers: "Pengguna aktif di seluruh dunia",
      aiRequests: "Permintaan AI yang diproses",
      countries: "Negara dan wilayah",
      uptime: "Jaminan waktu aktif",
    },
    badges: {
      securityCertified: "Tersertifikasi keamanan",
      privacyCompliant: "Mematuhi privasi",
      informationSecurity: "Keamanan informasi",
      healthcareData: "Data kesehatan",
    },
    description:
      "Keamanan dan kepatuhan tingkat perusahaan terintegrasi di setiap produk.",
  },

  ja: {
    stats: {
      activeUsers: "世界中のアクティブユーザー",
      aiRequests: "処理されたAIリクエスト",
      countries: "国と地域",
      uptime: "稼働率保証",
    },
    badges: {
      securityCertified: "セキュリティ認証済み",
      privacyCompliant: "プライバシー準拠",
      informationSecurity: "情報セキュリティ",
      healthcareData: "医療データ",
    },
    description:
      "企業レベルのセキュリティとコンプライアンスをすべての製品に組み込んでいます。",
  },

  ko: {
    stats: {
      activeUsers: "전 세계 활성 사용자",
      aiRequests: "처리된 AI 요청",
      countries: "국가 및 지역",
      uptime: "가동 시간 보장",
    },
    badges: {
      securityCertified: "보안 인증",
      privacyCompliant: "개인정보 보호 준수",
      informationSecurity: "정보 보안",
      healthcareData: "의료 데이터",
    },
    description:
      "모든 제품에 엔터프라이즈급 보안 및 규정 준수를 제공합니다.",
  },

  pt: {
    stats: {
      activeUsers: "Usuários ativos em todo o mundo",
      aiRequests: "Solicitações de IA processadas",
      countries: "Países e regiões",
      uptime: "Garantia de disponibilidade",
    },
    badges: {
      securityCertified: "Certificado de segurança",
      privacyCompliant: "Em conformidade com a privacidade",
      informationSecurity: "Segurança da informação",
      healthcareData: "Dados de saúde",
    },
    description:
      "Segurança e conformidade de nível empresarial integradas a cada produto.",
  },

  ru: {
    stats: {
      activeUsers: "Активные пользователи по всему миру",
      aiRequests: "Обработанные запросы ИИ",
      countries: "Страны и регионы",
      uptime: "Гарантия доступности",
    },
    badges: {
      securityCertified: "Сертифицировано по безопасности",
      privacyCompliant: "Соответствует требованиям конфиденциальности",
      informationSecurity: "Информационная безопасность",
      healthcareData: "Медицинские данные",
    },
    description:
      "Безопасность и соответствие корпоративного уровня встроены в каждый продукт.",
  },

  zh: {
    stats: {
      activeUsers: "全球活跃用户",
      aiRequests: "已处理的 AI 请求",
      countries: "国家和地区",
      uptime: "正常运行时间保障",
    },
    badges: {
      securityCertified: "安全认证",
      privacyCompliant: "符合隐私要求",
      informationSecurity: "信息安全",
      healthcareData: "医疗数据",
    },
    description:
      "每款产品都内置企业级安全性和合规性。",
  },

  ar: {
    stats: {
      activeUsers: "المستخدمون النشطون حول العالم",
      aiRequests: "طلبات الذكاء الاصطناعي المعالجة",
      countries: "الدول والمناطق",
      uptime: "ضمان وقت التشغيل",
    },
    badges: {
      securityCertified: "معتمد أمنيًا",
      privacyCompliant: "متوافق مع الخصوصية",
      informationSecurity: "أمن المعلومات",
      healthcareData: "البيانات الصحية",
    },
    description:
      "أمان وامتثال بمستوى المؤسسات مدمجان في كل منتج.",
  },
};

export default function TrustIndicators({
  lang,
  dict,
}: {
  lang: string;
  dict?: any;
}) {
  const t = translations[lang] ?? translations.en;

  const stats = [
    {
      icon: Users,
      value: 50000,
      suffix: "+",
      label: t.stats.activeUsers,
    },
    {
      icon: Zap,
      value: 2.5,
      suffix: "M+",
      label: t.stats.aiRequests,
    },
    {
      icon: Globe,
      value: 150,
      suffix: "+",
      label: t.stats.countries,
    },
    {
      icon: Shield,
      value: 99.9,
      suffix: "%",
      label: t.stats.uptime,
      decimals: 1,
    },
  ];

  const badges = [
    {
      name: "SOC 2 Type II",
      description: t.badges.securityCertified,
    },
    {
      name: "GDPR",
      description: t.badges.privacyCompliant,
    },
    {
      name: "ISO 27001",
      description: t.badges.informationSecurity,
    },
    {
      name: "HIPAA Ready",
      description: t.badges.healthcareData,
    },
  ];

  return (
    <Section className="relative overflow-hidden py-16 lg:py-20">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-violet-500/15">
                  <Icon size={24} className="text-blue-400" />
                </div>

                <div className="mt-4 text-3xl font-black tracking-tight text-white">
                  <StatsCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <Shield size={16} className="text-emerald-400" />

                <div>
                  <p className="text-sm font-semibold text-white">
                    {badge.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    {badge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          {t.description}
        </p>
      </Container>
    </Section>
  );
}