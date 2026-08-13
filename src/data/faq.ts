export interface FAQ {
  question: string;
  answer: string;
}

const translations: Record<string, FAQ[]> = {
  tr: [
    {
      question: "Bir proje ne kadar sürer?",
      answer:
        "Projenin kapsamına bağlı olarak çoğu proje 2–8 hafta içinde tamamlanır.",
    },
    {
      question: "Hangi teknolojileri kullanıyorsunuz?",
      answer:
        "Next.js, React, FastAPI, Python, PostgreSQL, Docker, Redis ve modern bulut altyapıları kullanıyoruz.",
    },
    {
      question: "Lansmandan sonra destek sağlıyor musunuz?",
      answer:
        "Evet. Bakım, izleme ve sürekli geliştirme hizmetleri sağlıyoruz.",
    },
    {
      question: "Yapay zeka çözümleri geliştirebilir misiniz?",
      answer:
        "Kesinlikle. Yapay zeka otomasyonu, asistanlar ve özel entegrasyonlar uzmanlık alanlarımız arasında.",
    },
  ],

  en: [
    {
      question: "How long does a project take?",
      answer:
        "Most projects are completed within 2–8 weeks depending on the scope.",
    },
    {
      question: "Which technologies do you use?",
      answer:
        "Next.js, React, FastAPI, Python, PostgreSQL, Docker, Redis and modern cloud infrastructure.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We provide maintenance, monitoring and continuous improvements.",
    },
    {
      question: "Can you build AI solutions?",
      answer:
        "Absolutely. AI automation, assistants and custom integrations are one of our specialties.",
    },
  ],

  de: [
    {
      question: "Wie lange dauert ein Projekt?",
      answer:
        "Die meisten Projekte werden je nach Umfang innerhalb von 2–8 Wochen abgeschlossen.",
    },
    {
      question: "Welche Technologien verwenden Sie?",
      answer:
        "Wir verwenden Next.js, React, FastAPI, Python, PostgreSQL, Docker, Redis und moderne Cloud-Infrastruktur.",
    },
    {
      question: "Bieten Sie nach dem Launch Support an?",
      answer:
        "Ja. Wir bieten Wartung, Monitoring und kontinuierliche Weiterentwicklung.",
    },
    {
      question: "Können Sie KI-Lösungen entwickeln?",
      answer:
        "Auf jeden Fall. KI-Automatisierung, Assistenten und individuelle Integrationen gehören zu unseren Spezialgebieten.",
    },
  ],

  fr: [
    {
      question: "Combien de temps dure un projet ?",
      answer:
        "La plupart des projets sont terminés en 2 à 8 semaines selon leur périmètre.",
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer:
        "Nous utilisons Next.js, React, FastAPI, Python, PostgreSQL, Docker, Redis et des infrastructures cloud modernes.",
    },
    {
      question: "Fournissez-vous une assistance après le lancement ?",
      answer:
        "Oui. Nous proposons de la maintenance, du monitoring et des améliorations continues.",
    },
    {
      question: "Pouvez-vous créer des solutions d'IA ?",
      answer:
        "Absolument. L'automatisation IA, les assistants et les intégrations personnalisées font partie de nos spécialités.",
    },
  ],

  es: [
    {
      question: "¿Cuánto tarda un proyecto?",
      answer:
        "La mayoría de los proyectos se completan en 2–8 semanas según el alcance.",
    },
    {
      question: "¿Qué tecnologías utilizan?",
      answer:
        "Utilizamos Next.js, React, FastAPI, Python, PostgreSQL, Docker, Redis e infraestructura cloud moderna.",
    },
    {
      question: "¿Ofrecen soporte después del lanzamiento?",
      answer:
        "Sí. Ofrecemos mantenimiento, monitorización y mejoras continuas.",
    },
    {
      question: "¿Pueden crear soluciones de IA?",
      answer:
        "Por supuesto. La automatización con IA, los asistentes y las integraciones personalizadas son algunas de nuestras especialidades.",
    },
  ],

  id: [
    {
      question: "Berapa lama waktu yang dibutuhkan untuk sebuah proyek?",
      answer:
        "Sebagian besar proyek selesai dalam 2–8 minggu tergantung ruang lingkupnya.",
    },
    {
      question: "Teknologi apa yang Anda gunakan?",
      answer:
        "Kami menggunakan Next.js, React, FastAPI, Python, PostgreSQL, Docker, Redis, dan infrastruktur cloud modern.",
    },
    {
      question: "Apakah Anda menyediakan dukungan setelah peluncuran?",
      answer:
        "Ya. Kami menyediakan pemeliharaan, pemantauan, dan peningkatan berkelanjutan.",
    },
    {
      question: "Bisakah Anda membangun solusi AI?",
      answer:
        "Tentu. Otomatisasi AI, asisten, dan integrasi khusus adalah salah satu keahlian kami.",
    },
  ],

  ja: [
    {
      question: "プロジェクトにはどのくらい時間がかかりますか？",
      answer:
        "ほとんどのプロジェクトは、規模に応じて2～8週間で完了します。",
    },
    {
      question: "どのような技術を使用していますか？",
      answer:
        "Next.js、React、FastAPI、Python、PostgreSQL、Docker、Redis、最新のクラウドインフラを使用しています。",
    },
    {
      question: "ローンチ後もサポートしてもらえますか？",
      answer:
        "はい。保守、監視、継続的な改善を提供しています。",
    },
    {
      question: "AIソリューションを開発できますか？",
      answer:
        "もちろんです。AI自動化、アシスタント、カスタム統合は私たちの専門分野の一つです。",
    },
  ],

  ko: [
    {
      question: "프로젝트는 얼마나 오래 걸리나요?",
      answer:
        "대부분의 프로젝트는 범위에 따라 2~8주 내에 완료됩니다.",
    },
    {
      question: "어떤 기술을 사용하나요?",
      answer:
        "Next.js, React, FastAPI, Python, PostgreSQL, Docker, Redis 및 최신 클라우드 인프라를 사용합니다.",
    },
    {
      question: "출시 후에도 지원을 제공하나요?",
      answer:
        "네. 유지보수, 모니터링 및 지속적인 개선을 제공합니다.",
    },
    {
      question: "AI 솔루션을 구축할 수 있나요?",
      answer:
        "물론입니다. AI 자동화, 어시스턴트 및 맞춤형 통합은 저희의 주요 전문 분야입니다.",
    },
  ],

  pt: [
    {
      question: "Quanto tempo leva um projeto?",
      answer:
        "A maioria dos projetos é concluída em 2–8 semanas, dependendo do escopo.",
    },
    {
      question: "Quais tecnologias vocês usam?",
      answer:
        "Usamos Next.js, React, FastAPI, Python, PostgreSQL, Docker, Redis e infraestrutura moderna de nuvem.",
    },
    {
      question: "Vocês oferecem suporte após o lançamento?",
      answer:
        "Sim. Oferecemos manutenção, monitoramento e melhorias contínuas.",
    },
    {
      question: "Vocês conseguem criar soluções de IA?",
      answer:
        "Com certeza. Automação de IA, assistentes e integrações personalizadas são algumas de nossas especialidades.",
    },
  ],

  ru: [
    {
      question: "Сколько времени занимает проект?",
      answer:
        "Большинство проектов занимает от 2 до 8 недель в зависимости от объема.",
    },
    {
      question: "Какие технологии вы используете?",
      answer:
        "Мы используем Next.js, React, FastAPI, Python, PostgreSQL, Docker, Redis и современную облачную инфраструктуру.",
    },
    {
      question: "Предоставляете ли вы поддержку после запуска?",
      answer:
        "Да. Мы предоставляем обслуживание, мониторинг и постоянные улучшения.",
    },
    {
      question: "Можете ли вы создавать решения на основе ИИ?",
      answer:
        "Конечно. Автоматизация ИИ, ассистенты и индивидуальные интеграции — одни из наших основных специализаций.",
    },
  ],

  zh: [
    {
      question: "一个项目需要多长时间？",
      answer:
        "根据项目范围，大多数项目会在2–8周内完成。",
    },
    {
      question: "你们使用哪些技术？",
      answer:
        "我们使用 Next.js、React、FastAPI、Python、PostgreSQL、Docker、Redis 和现代云基础设施。",
    },
    {
      question: "上线后是否提供支持？",
      answer:
        "是的。我们提供维护、监控和持续改进服务。",
    },
    {
      question: "你们可以构建 AI 解决方案吗？",
      answer:
        "当然可以。AI 自动化、智能助手和定制集成是我们的核心专长之一。",
    },
  ],

  ar: [
    {
      question: "كم يستغرق تنفيذ المشروع؟",
      answer:
        "يكتمل معظم المشاريع خلال 2–8 أسابيع حسب نطاق المشروع.",
    },
    {
      question: "ما التقنيات التي تستخدمونها؟",
      answer:
        "نستخدم Next.js وReact وFastAPI وPython وPostgreSQL وDocker وRedis والبنية التحتية السحابية الحديثة.",
    },
    {
      question: "هل تقدمون الدعم بعد الإطلاق؟",
      answer:
        "نعم. نقدم الصيانة والمراقبة والتحسينات المستمرة.",
    },
    {
      question: "هل يمكنكم بناء حلول للذكاء الاصطناعي؟",
      answer:
        "بالتأكيد. أتمتة الذكاء الاصطناعي والمساعدون والتكاملات المخصصة من تخصصاتنا الرئيسية.",
    },
  ],
};

export function getFaqs(lang: string): FAQ[] {
  return translations[lang] ?? translations.en;
}

export const faqs = getFaqs("en");