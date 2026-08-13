export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  product?: string;
}

type LocalizedTestimonial = {
  role: string;
  content: string;
  product?: string;
};

const baseTestimonials = [
  {
    id: "1",
    name: "Sarah Chen",
    company: "Stripe",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    company: "TechFlow",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    id: "3",
    name: "Emma Thompson",
    company: "HubSpot",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    id: "4",
    name: "David Kim",
    company: "Notion",
    avatar: "https://i.pravatar.cc/150?img=14",
    rating: 5,
  },
  {
    id: "5",
    name: "Lisa Zhang",
    company: "Shopify",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
  },
  {
    id: "6",
    name: "Ahmed Hassan",
    company: "Self-Employed",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 5,
  },
  {
    id: "7",
    name: "Rachel Moore",
    company: "Netflix",
    avatar: "https://i.pravatar.cc/150?img=20",
    rating: 5,
  },
  {
    id: "8",
    name: "James Wilson",
    company: "Vercel",
    avatar: "https://i.pravatar.cc/150?img=52",
    rating: 5,
  },
];

const translations: Record<string, LocalizedTestimonial[]> = {
  en: [
    {
      role: "Product Designer",
      content:
        "NEASX Writer has completely transformed my workflow. I can now draft design docs, user stories and research summaries in minutes instead of hours.",
      product: "Writer",
    },
    {
      role: "Founder & CEO",
      content:
        "As a startup founder, I wear many hats. NEASX Agent helps me automate market research, competitor analysis and data processing. It's like having an extra team member.",
      product: "Agent",
    },
    {
      role: "Content Manager",
      content:
        "The ecosystem approach is genius. I use Writer for blog posts, Chat for research, and Agent for social media scheduling. One account, infinite possibilities.",
    },
    {
      role: "Engineering Lead",
      content:
        "NEASX API makes it incredibly easy to add AI capabilities to our product. The documentation is excellent and the SDKs are well-designed.",
      product: "API",
    },
    {
      role: "Marketing Director",
      content:
        "We've integrated NEASX into our marketing workflow. The speed and quality of output is remarkable. Our team productivity has increased by 40%.",
    },
    {
      role: "Freelance Writer",
      content:
        "As a freelancer, NEASX has been a game-changer. I can take on more clients and deliver better work faster. The free plan is generous enough to get started.",
      product: "Writer",
    },
    {
      role: "Data Analyst",
      content:
        "NEASX Chat with file upload capability is perfect for analyzing datasets. I can ask questions about our data and get insights in seconds.",
      product: "Chat",
    },
    {
      role: "CTO",
      content:
        "The enterprise plan gives us everything we need: SSO, custom models, and dedicated support. NEASX understands what businesses actually need.",
    },
  ],

  tr: [
    {
      role: "Ürün Tasarımcısı",
      content:
        "NEASX Writer çalışma akışımı tamamen değiştirdi. Artık tasarım dokümanlarını, kullanıcı hikayelerini ve araştırma özetlerini saatler yerine dakikalar içinde hazırlayabiliyorum.",
      product: "Writer",
    },
    {
      role: "Kurucu ve CEO",
      content:
        "Bir startup kurucusu olarak birçok farklı işi aynı anda yürütüyorum. NEASX Agent pazar araştırmasını, rakip analizini ve veri işlemeyi otomatikleştirmeme yardımcı oluyor. Ekstra bir ekip üyesine sahip olmak gibi.",
      product: "Agent",
    },
    {
      role: "İçerik Yöneticisi",
      content:
        "Ekosistem yaklaşımı harika. Blog yazıları için Writer, araştırma için Chat ve sosyal medya planlaması için Agent kullanıyorum. Tek hesap, sonsuz olasılık.",
    },
    {
      role: "Mühendislik Lideri",
      content:
        "NEASX API, ürünümüze yapay zeka özellikleri eklemeyi inanılmaz derecede kolaylaştırıyor. Dokümantasyon çok iyi ve SDK'lar oldukça başarılı tasarlanmış.",
      product: "API",
    },
    {
      role: "Pazarlama Direktörü",
      content:
        "NEASX'i pazarlama iş akışımıza entegre ettik. Çıktıların hızı ve kalitesi gerçekten etkileyici. Ekip verimliliğimiz %40 arttı.",
    },
    {
      role: "Serbest Yazar",
      content:
        "Bir freelancer olarak NEASX benim için oyunun kurallarını değiştirdi. Artık daha fazla müşteri alabiliyor ve daha iyi işleri daha hızlı teslim edebiliyorum. Ücretsiz plan başlamak için fazlasıyla yeterli.",
      product: "Writer",
    },
    {
      role: "Veri Analisti",
      content:
        "Dosya yükleme özelliğine sahip NEASX Chat veri setlerini analiz etmek için mükemmel. Verilerimiz hakkında sorular sorup saniyeler içinde içgörüler alabiliyorum.",
      product: "Chat",
    },
    {
      role: "CTO",
      content:
        "Kurumsal plan ihtiyacımız olan her şeyi sunuyor: SSO, özel modeller ve özel destek. NEASX işletmelerin gerçekte neye ihtiyaç duyduğunu anlıyor.",
    },
  ],

  de: [
    {
      role: "Produktdesigner",
      content:
        "NEASX Writer hat meinen Arbeitsablauf vollständig verändert. Design-Dokumente, User Stories und Recherche-Zusammenfassungen kann ich jetzt in Minuten statt Stunden erstellen.",
      product: "Writer",
    },
    {
      role: "Gründer & CEO",
      content:
        "Als Startup-Gründer muss ich viele Aufgaben gleichzeitig übernehmen. NEASX Agent automatisiert Marktanalysen, Wettbewerbsanalysen und Datenverarbeitung. Es ist wie ein zusätzliches Teammitglied.",
      product: "Agent",
    },
    {
      role: "Content Manager",
      content:
        "Der Ökosystem-Ansatz ist genial. Ich nutze Writer für Blogbeiträge, Chat für Recherche und Agent für die Social-Media-Planung. Ein Konto, unendliche Möglichkeiten.",
    },
    {
      role: "Engineering Lead",
      content:
        "Mit der NEASX API lassen sich KI-Funktionen unglaublich einfach in unser Produkt integrieren. Die Dokumentation ist hervorragend und die SDKs sind sehr gut entwickelt.",
      product: "API",
    },
    {
      role: "Marketingdirektor",
      content:
        "Wir haben NEASX in unseren Marketing-Workflow integriert. Geschwindigkeit und Qualität der Ergebnisse sind beeindruckend. Unsere Teamproduktivität ist um 40 % gestiegen.",
    },
    {
      role: "Freiberuflicher Autor",
      content:
        "Als Freelancer hat NEASX alles verändert. Ich kann mehr Kunden annehmen und bessere Arbeit schneller liefern. Der kostenlose Plan ist ideal für den Einstieg.",
      product: "Writer",
    },
    {
      role: "Datenanalyst",
      content:
        "NEASX Chat mit Datei-Upload eignet sich perfekt für die Analyse von Datensätzen. Ich kann Fragen zu unseren Daten stellen und innerhalb von Sekunden Erkenntnisse erhalten.",
      product: "Chat",
    },
    {
      role: "CTO",
      content:
        "Der Enterprise-Plan bietet alles, was wir brauchen: SSO, eigene Modelle und dedizierten Support. NEASX versteht, was Unternehmen wirklich benötigen.",
    },
  ],

  fr: [
    {
      role: "Designer produit",
      content:
        "NEASX Writer a complètement transformé mon flux de travail. Je peux maintenant rédiger des documents de conception, des user stories et des synthèses de recherche en quelques minutes au lieu de plusieurs heures.",
      product: "Writer",
    },
    {
      role: "Fondateur et CEO",
      content:
        "En tant que fondateur de startup, je porte plusieurs casquettes. NEASX Agent m'aide à automatiser les études de marché, l'analyse des concurrents et le traitement des données. C'est comme avoir un membre d'équipe supplémentaire.",
      product: "Agent",
    },
    {
      role: "Responsable de contenu",
      content:
        "L'approche écosystème est géniale. J'utilise Writer pour les articles de blog, Chat pour la recherche et Agent pour la planification des réseaux sociaux. Un seul compte, des possibilités infinies.",
    },
    {
      role: "Responsable ingénierie",
      content:
        "L'API NEASX permet d'ajouter très facilement des capacités d'IA à notre produit. La documentation est excellente et les SDK sont très bien conçus.",
      product: "API",
    },
    {
      role: "Directeur marketing",
      content:
        "Nous avons intégré NEASX à notre flux marketing. La vitesse et la qualité des résultats sont remarquables. La productivité de notre équipe a augmenté de 40 %.",
    },
    {
      role: "Rédacteur freelance",
      content:
        "En tant que freelance, NEASX a changé la donne. Je peux accepter plus de clients et fournir un meilleur travail plus rapidement. Le forfait gratuit est parfait pour commencer.",
      product: "Writer",
    },
    {
      role: "Analyste de données",
      content:
        "NEASX Chat avec l'importation de fichiers est parfait pour analyser les jeux de données. Je peux poser des questions sur nos données et obtenir des insights en quelques secondes.",
      product: "Chat",
    },
    {
      role: "CTO",
      content:
        "Le forfait entreprise nous offre tout ce dont nous avons besoin : SSO, modèles personnalisés et assistance dédiée. NEASX comprend réellement les besoins des entreprises.",
    },
  ],

  es: [
    {
      role: "Diseñadora de producto",
      content:
        "NEASX Writer ha transformado por completo mi flujo de trabajo. Ahora puedo crear documentos de diseño, historias de usuario y resúmenes de investigación en minutos en lugar de horas.",
      product: "Writer",
    },
    {
      role: "Fundador y CEO",
      content:
        "Como fundador de una startup, tengo que hacer de todo. NEASX Agent me ayuda a automatizar estudios de mercado, análisis de competidores y procesamiento de datos. Es como tener un miembro adicional en el equipo.",
      product: "Agent",
    },
    {
      role: "Responsable de Contenido",
      content:
        "El enfoque de ecosistema es genial. Uso Writer para publicaciones del blog, Chat para investigación y Agent para programar redes sociales. Una cuenta, infinitas posibilidades.",
    },
    {
      role: "Líder de Ingeniería",
      content:
        "La API de NEASX hace que añadir capacidades de IA a nuestro producto sea increíblemente fácil. La documentación es excelente y los SDK están muy bien diseñados.",
      product: "API",
    },
    {
      role: "Directora de Marketing",
      content:
        "Hemos integrado NEASX en nuestro flujo de marketing. La velocidad y la calidad de los resultados son increíbles. La productividad de nuestro equipo aumentó un 40 %.",
    },
    {
      role: "Redactor freelance",
      content:
        "Como freelancer, NEASX ha cambiado las reglas del juego. Puedo aceptar más clientes y entregar un trabajo mejor y más rápido. El plan gratuito es perfecto para empezar.",
      product: "Writer",
    },
    {
      role: "Analista de datos",
      content:
        "NEASX Chat con carga de archivos es perfecto para analizar conjuntos de datos. Puedo hacer preguntas sobre nuestros datos y obtener información en segundos.",
      product: "Chat",
    },
    {
      role: "CTO",
      content:
        "El plan empresarial nos da todo lo que necesitamos: SSO, modelos personalizados y soporte dedicado. NEASX entiende lo que realmente necesitan las empresas.",
    },
  ],

  id: [
    {
      role: "Desainer Produk",
      content:
        "NEASX Writer benar-benar mengubah alur kerja saya. Sekarang saya dapat membuat dokumen desain, user story, dan ringkasan riset dalam hitungan menit, bukan jam.",
      product: "Writer",
    },
    {
      role: "Pendiri & CEO",
      content:
        "Sebagai pendiri startup, saya menangani banyak hal. NEASX Agent membantu mengotomatiskan riset pasar, analisis kompetitor, dan pemrosesan data. Rasanya seperti memiliki anggota tim tambahan.",
      product: "Agent",
    },
    {
      role: "Manajer Konten",
      content:
        "Pendekatan ekosistemnya sangat keren. Saya menggunakan Writer untuk posting blog, Chat untuk riset, dan Agent untuk penjadwalan media sosial. Satu akun, kemungkinan tanpa batas.",
    },
    {
      role: "Pemimpin Engineering",
      content:
        "NEASX API membuat penambahan kemampuan AI ke produk kami menjadi sangat mudah. Dokumentasinya sangat baik dan SDK-nya dirancang dengan baik.",
      product: "API",
    },
    {
      role: "Direktur Pemasaran",
      content:
        "Kami mengintegrasikan NEASX ke dalam alur kerja pemasaran kami. Kecepatan dan kualitas hasilnya luar biasa. Produktivitas tim kami meningkat 40%.",
    },
    {
      role: "Penulis Freelance",
      content:
        "Sebagai freelancer, NEASX benar-benar mengubah permainan. Saya dapat mengambil lebih banyak klien dan mengirimkan pekerjaan yang lebih baik dengan lebih cepat. Paket gratisnya sangat cocok untuk memulai.",
      product: "Writer",
    },
    {
      role: "Analis Data",
      content:
        "NEASX Chat dengan fitur unggah file sangat cocok untuk menganalisis dataset. Saya dapat bertanya tentang data kami dan mendapatkan insight dalam hitungan detik.",
      product: "Chat",
    },
    {
      role: "CTO",
      content:
        "Paket enterprise memberi kami semua yang kami butuhkan: SSO, model khusus, dan dukungan khusus. NEASX memahami kebutuhan bisnis yang sebenarnya.",
    },
  ],

  ja: [
    {
      role: "プロダクトデザイナー",
      content:
        "NEASX Writerは私のワークフローを完全に変えました。デザインドキュメント、ユーザーストーリー、調査の要約を数時間ではなく数分で作成できるようになりました。",
      product: "Writer",
    },
    {
      role: "創業者兼CEO",
      content:
        "スタートアップの創業者として多くの役割を担っています。NEASX Agentは市場調査、競合分析、データ処理を自動化してくれます。追加のチームメンバーがいるような感覚です。",
      product: "Agent",
    },
    {
      role: "コンテンツマネージャー",
      content:
        "エコシステムという考え方は素晴らしいです。ブログ記事にはWriter、調査にはChat、SNSのスケジュールにはAgentを使っています。1つのアカウントで無限の可能性があります。",
    },
    {
      role: "エンジニアリングリード",
      content:
        "NEASX APIのおかげで製品にAI機能を非常に簡単に追加できます。ドキュメントも素晴らしく、SDKもよく設計されています。",
      product: "API",
    },
    {
      role: "マーケティングディレクター",
      content:
        "NEASXをマーケティングワークフローに統合しました。出力の速度と品質は素晴らしく、チームの生産性は40%向上しました。",
    },
    {
      role: "フリーランスライター",
      content:
        "フリーランサーとしてNEASXはゲームチェンジャーでした。より多くのクライアントを受けながら、より良い仕事をより速く提供できます。無料プランは始めるのに十分です。",
      product: "Writer",
    },
    {
      role: "データアナリスト",
      content:
        "ファイルアップロード機能付きのNEASX Chatはデータセットの分析に最適です。データについて質問すると、数秒でインサイトを得られます。",
      product: "Chat",
    },
    {
      role: "CTO",
      content:
        "EnterpriseプランにはSSO、カスタムモデル、専任サポートなど必要なものがすべて揃っています。NEASXは企業が本当に必要としているものを理解しています。",
    },
  ],

  ko: [
    {
      role: "제품 디자이너",
      content:
        "NEASX Writer는 제 업무 방식을 완전히 바꿨습니다. 이제 디자인 문서, 사용자 스토리, 리서치 요약을 몇 시간이 아니라 몇 분 만에 작성할 수 있습니다.",
      product: "Writer",
    },
    {
      role: "창업자 & CEO",
      content:
        "스타트업 창업자로서 여러 역할을 맡고 있습니다. NEASX Agent는 시장 조사, 경쟁사 분석, 데이터 처리를 자동화하는 데 도움을 줍니다. 추가 팀원이 생긴 것 같습니다.",
      product: "Agent",
    },
    {
      role: "콘텐츠 매니저",
      content:
        "생태계 접근 방식이 정말 좋습니다. 블로그 글에는 Writer, 리서치에는 Chat, 소셜 미디어 일정 관리에는 Agent를 사용합니다. 하나의 계정으로 무한한 가능성을 얻을 수 있습니다.",
    },
    {
      role: "엔지니어링 리드",
      content:
        "NEASX API를 사용하면 제품에 AI 기능을 정말 쉽게 추가할 수 있습니다. 문서도 훌륭하고 SDK 설계도 뛰어납니다.",
      product: "API",
    },
    {
      role: "마케팅 디렉터",
      content:
        "NEASX를 마케팅 업무에 통합했습니다. 결과물의 속도와 품질이 매우 인상적입니다. 팀 생산성이 40% 향상되었습니다.",
    },
    {
      role: "프리랜서 작가",
      content:
        "프리랜서인 저에게 NEASX는 판도를 바꾼 도구였습니다. 더 많은 고객을 맡으면서 더 빠르게 더 좋은 결과물을 제공할 수 있습니다. 무료 플랜도 시작하기에 충분합니다.",
      product: "Writer",
    },
    {
      role: "데이터 분석가",
      content:
        "파일 업로드 기능이 있는 NEASX Chat은 데이터셋 분석에 완벽합니다. 데이터에 대해 질문하면 몇 초 만에 인사이트를 얻을 수 있습니다.",
      product: "Chat",
    },
    {
      role: "CTO",
      content:
        "Enterprise 플랜은 SSO, 사용자 지정 모델, 전담 지원 등 필요한 모든 것을 제공합니다. NEASX는 기업이 실제로 필요한 것을 이해합니다.",
    },
  ],

  pt: [
    {
      role: "Designer de Produto",
      content:
        "O NEASX Writer transformou completamente meu fluxo de trabalho. Agora consigo criar documentos de design, histórias de usuário e resumos de pesquisa em minutos em vez de horas.",
      product: "Writer",
    },
    {
      role: "Fundador e CEO",
      content:
        "Como fundador de uma startup, faço várias funções. O NEASX Agent me ajuda a automatizar pesquisas de mercado, análise de concorrentes e processamento de dados. É como ter mais um membro na equipe.",
      product: "Agent",
    },
    {
      role: "Gerente de Conteúdo",
      content:
        "A abordagem de ecossistema é genial. Uso Writer para posts de blog, Chat para pesquisa e Agent para agendamento de redes sociais. Uma conta, possibilidades infinitas.",
    },
    {
      role: "Líder de Engenharia",
      content:
        "A API da NEASX torna incrivelmente fácil adicionar recursos de IA ao nosso produto. A documentação é excelente e os SDKs são muito bem projetados.",
      product: "API",
    },
    {
      role: "Diretora de Marketing",
      content:
        "Integramos a NEASX ao nosso fluxo de marketing. A velocidade e a qualidade dos resultados são impressionantes. A produtividade da equipe aumentou 40%.",
    },
    {
      role: "Redator Freelancer",
      content:
        "Como freelancer, a NEASX mudou completamente meu trabalho. Consigo atender mais clientes e entregar um trabalho melhor com mais rapidez. O plano gratuito é ótimo para começar.",
      product: "Writer",
    },
    {
      role: "Analista de Dados",
      content:
        "O NEASX Chat com upload de arquivos é perfeito para analisar conjuntos de dados. Posso fazer perguntas sobre nossos dados e obter insights em segundos.",
      product: "Chat",
    },
    {
      role: "CTO",
      content:
        "O plano enterprise nos oferece tudo de que precisamos: SSO, modelos personalizados e suporte dedicado. A NEASX entende o que as empresas realmente precisam.",
    },
  ],

  ru: [
    {
      role: "Продуктовый дизайнер",
      content:
        "NEASX Writer полностью изменил мой рабочий процесс. Теперь я могу создавать дизайн-документы, пользовательские истории и исследовательские сводки за минуты, а не за часы.",
      product: "Writer",
    },
    {
      role: "Основатель и CEO",
      content:
        "Как основатель стартапа, я выполняю множество ролей. NEASX Agent помогает автоматизировать исследование рынка, анализ конкурентов и обработку данных. Это как дополнительный член команды.",
      product: "Agent",
    },
    {
      role: "Контент-менеджер",
      content:
        "Подход единой экосистемы просто великолепен. Я использую Writer для статей, Chat для исследований и Agent для планирования социальных сетей. Один аккаунт — безграничные возможности.",
    },
    {
      role: "Руководитель инженерной команды",
      content:
        "NEASX API позволяет невероятно легко добавлять возможности ИИ в наш продукт. Документация отличная, а SDK хорошо спроектированы.",
      product: "API",
    },
    {
      role: "Директор по маркетингу",
      content:
        "Мы интегрировали NEASX в наш маркетинговый процесс. Скорость и качество результатов впечатляют. Производительность нашей команды выросла на 40%.",
    },
    {
      role: "Фриланс-писатель",
      content:
        "Как фрилансер, я считаю NEASX настоящим прорывом. Теперь я могу работать с большим числом клиентов и быстрее выдавать более качественный результат. Бесплатного плана достаточно для старта.",
      product: "Writer",
    },
    {
      role: "Аналитик данных",
      content:
        "NEASX Chat с загрузкой файлов идеально подходит для анализа наборов данных. Я могу задавать вопросы о данных и получать инсайты за считанные секунды.",
      product: "Chat",
    },
    {
      role: "CTO",
      content:
        "Enterprise-план дает нам все необходимое: SSO, пользовательские модели и выделенную поддержку. NEASX действительно понимает потребности бизнеса.",
    },
  ],

  zh: [
    {
      role: "产品设计师",
      content:
        "NEASX Writer彻底改变了我的工作流程。现在我可以在几分钟内完成设计文档、用户故事和研究摘要，而不是花几个小时。",
      product: "Writer",
    },
    {
      role: "创始人兼 CEO",
      content:
        "作为创业公司创始人，我需要承担很多不同的工作。NEASX Agent帮助我自动完成市场调研、竞品分析和数据处理，就像多了一名团队成员。",
      product: "Agent",
    },
    {
      role: "内容经理",
      content:
        "生态系统的理念非常出色。我用Writer写博客，用Chat做研究，用Agent安排社交媒体内容。一个账户，无限可能。",
    },
    {
      role: "工程负责人",
      content:
        "NEASX API让我们可以非常轻松地为产品添加AI能力。文档非常优秀，SDK也设计得很好。",
      product: "API",
    },
    {
      role: "市场总监",
      content:
        "我们已经将NEASX整合到营销流程中。输出的速度和质量都非常出色。团队生产力提升了40%。",
    },
    {
      role: "自由撰稿人",
      content:
        "作为自由职业者，NEASX改变了我的工作方式。我可以接更多客户，同时更快地交付更好的作品。免费计划非常适合入门。",
      product: "Writer",
    },
    {
      role: "数据分析师",
      content:
        "支持文件上传的NEASX Chat非常适合分析数据集。我可以直接询问数据，并在几秒钟内获得洞察。",
      product: "Chat",
    },
    {
      role: "CTO",
      content:
        "企业版提供了我们需要的一切：SSO、自定义模型和专属支持。NEASX真正理解企业的实际需求。",
    },
  ],

  ar: [
    {
      role: "مصمم منتجات",
      content:
        "غيّر NEASX Writer طريقة عملي بالكامل. أصبح بإمكاني الآن إعداد مستندات التصميم وقصص المستخدم وملخصات الأبحاث خلال دقائق بدلًا من ساعات.",
      product: "Writer",
    },
    {
      role: "المؤسس والرئيس التنفيذي",
      content:
        "بصفتي مؤسس شركة ناشئة، أؤدي العديد من الأدوار. يساعدني NEASX Agent في أتمتة أبحاث السوق وتحليل المنافسين ومعالجة البيانات. الأمر يشبه وجود عضو إضافي في الفريق.",
      product: "Agent",
    },
    {
      role: "مدير المحتوى",
      content:
        "فكرة النظام البيئي المتكامل رائعة. أستخدم Writer لكتابة المقالات، وChat للبحث، وAgent لجدولة وسائل التواصل الاجتماعي. حساب واحد وإمكانات لا محدودة.",
    },
    {
      role: "قائد الهندسة",
      content:
        "تجعل NEASX API إضافة قدرات الذكاء الاصطناعي إلى منتجنا أمرًا سهلًا للغاية. الوثائق ممتازة وحزم SDK مصممة بشكل رائع.",
      product: "API",
    },
    {
      role: "مدير التسويق",
      content:
        "قمنا بدمج NEASX في سير عمل التسويق لدينا. سرعة وجودة المخرجات مذهلة، وقد ارتفعت إنتاجية فريقنا بنسبة 40%.",
    },
    {
      role: "كاتب مستقل",
      content:
        "بصفتي مستقلاً، كان NEASX نقطة تحول حقيقية. أصبح بإمكاني التعامل مع عدد أكبر من العملاء وتسليم أعمال أفضل بسرعة أكبر. الخطة المجانية ممتازة للبدء.",
      product: "Writer",
    },
    {
      role: "محلل بيانات",
      content:
        "NEASX Chat مع إمكانية رفع الملفات مثالي لتحليل مجموعات البيانات. يمكنني طرح أسئلة حول بياناتنا والحصول على رؤى خلال ثوانٍ.",
      product: "Chat",
    },
    {
      role: "المدير التقني",
      content:
        "توفر لنا خطة المؤسسات كل ما نحتاجه: الدخول الموحد، والنماذج المخصصة، والدعم المخصص. NEASX تفهم ما تحتاجه الشركات فعلاً.",
    },
  ],
};

export function getTestimonials(lang: string): Testimonial[] {
  const localized = translations[lang] ?? translations.en;

  return baseTestimonials.map((testimonial, index) => ({
    ...testimonial,
    role: localized[index].role,
    content: localized[index].content,
    product: localized[index].product,
  }));
}

// İngilizce varsayılan liste
export const testimonials: Testimonial[] = getTestimonials("en");