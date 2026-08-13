import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Play, ListTodo, PackageCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

const translations: Record<
  string,
  {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    seeHow: string;
    steps: {
      title: string;
      description: string;
    }[];
  }
> = {
  tr: {
    badge: "Nasıl Çalışır",
    title: "Çalıştır. Görev.",
    titleHighlight: "Al.",
    description: "Basit bir talimatı üç adımda gerçek sonuçlara dönüştürün.",
    seeHow: "Nasıl çalıştığını gör →",
    steps: [
      {
        title: "Çalıştır",
        description:
          "Bir ürün veya ajan seçin, görevinizi tanımlayın ve çalıştırın. Karmaşık kurulum yok.",
      },
      {
        title: "Görev",
        description:
          "NEASX işi yönetilebilir adımlara böler ve bunları yapay zeka ile yürütür.",
      },
      {
        title: "Al",
        description:
          "Sonuçlarınızı alın — belgeler, veriler, görseller ve içgörüler kullanıma hazır.",
      },
    ],
  },

  en: {
    badge: "How it Works",
    title: "Run. Task.",
    titleHighlight: "Receive.",
    description:
      "Turn a simple instruction into real results in three steps.",
    seeHow: "See how it works →",
    steps: [
      {
        title: "Run",
        description:
          "Pick a product or agent, describe your task, and run it. No complex setup.",
      },
      {
        title: "Task",
        description:
          "NEASX breaks the work into manageable steps and executes them with AI.",
      },
      {
        title: "Receive",
        description:
          "Get your results — documents, data, images, insights — ready to use.",
      },
    ],
  },

  de: {
    badge: "So funktioniert es",
    title: "Starten. Aufgabe.",
    titleHighlight: "Erhalten.",
    description:
      "Verwandeln Sie eine einfache Anweisung in drei Schritten in echte Ergebnisse.",
    seeHow: "So funktioniert es →",
    steps: [
      {
        title: "Starten",
        description:
          "Wählen Sie ein Produkt oder einen Agenten, beschreiben Sie Ihre Aufgabe und starten Sie. Keine komplizierte Einrichtung.",
      },
      {
        title: "Aufgabe",
        description:
          "NEASX teilt die Arbeit in überschaubare Schritte auf und führt sie mit KI aus.",
      },
      {
        title: "Erhalten",
        description:
          "Erhalten Sie Ihre Ergebnisse — Dokumente, Daten, Bilder und Erkenntnisse — sofort einsatzbereit.",
      },
    ],
  },

  fr: {
    badge: "Comment ça marche",
    title: "Lancez. Tâche.",
    titleHighlight: "Recevez.",
    description:
      "Transformez une simple instruction en résultats concrets en trois étapes.",
    seeHow: "Voir comment ça marche →",
    steps: [
      {
        title: "Lancer",
        description:
          "Choisissez un produit ou un agent, décrivez votre tâche et lancez-la. Aucune configuration complexe.",
      },
      {
        title: "Tâche",
        description:
          "NEASX divise le travail en étapes simples et les exécute avec l'IA.",
      },
      {
        title: "Recevoir",
        description:
          "Recevez vos résultats — documents, données, images et informations — prêts à l'emploi.",
      },
    ],
  },

  es: {
    badge: "Cómo funciona",
    title: "Ejecuta. Tarea.",
    titleHighlight: "Recibe.",
    description:
      "Convierte una instrucción sencilla en resultados reales en tres pasos.",
    seeHow: "Ver cómo funciona →",
    steps: [
      {
        title: "Ejecutar",
        description:
          "Elige un producto o agente, describe tu tarea y ejecútala. Sin configuraciones complejas.",
      },
      {
        title: "Tarea",
        description:
          "NEASX divide el trabajo en pasos manejables y los ejecuta con IA.",
      },
      {
        title: "Recibir",
        description:
          "Recibe tus resultados — documentos, datos, imágenes e información — listos para usar.",
      },
    ],
  },

  id: {
    badge: "Cara Kerja",
    title: "Jalankan. Tugas.",
    titleHighlight: "Terima.",
    description:
      "Ubah instruksi sederhana menjadi hasil nyata dalam tiga langkah.",
    seeHow: "Lihat cara kerjanya →",
    steps: [
      {
        title: "Jalankan",
        description:
          "Pilih produk atau agen, jelaskan tugas Anda, lalu jalankan. Tanpa pengaturan rumit.",
      },
      {
        title: "Tugas",
        description:
          "NEASX membagi pekerjaan menjadi langkah-langkah yang mudah dikelola dan menjalankannya dengan AI.",
      },
      {
        title: "Terima",
        description:
          "Terima hasil Anda — dokumen, data, gambar, dan wawasan — siap digunakan.",
      },
    ],
  },

  ja: {
    badge: "仕組み",
    title: "実行。タスク。",
    titleHighlight: "受け取る。",
    description:
      "シンプルな指示を3つのステップで実際の成果に変えます。",
    seeHow: "仕組みを見る →",
    steps: [
      {
        title: "実行",
        description:
          "製品またはエージェントを選択し、タスクを説明して実行します。複雑な設定は不要です。",
      },
      {
        title: "タスク",
        description:
          "NEASXが作業を管理しやすいステップに分割し、AIで実行します。",
      },
      {
        title: "受け取る",
        description:
          "ドキュメント、データ、画像、インサイトなど、すぐに使える結果を受け取ります。",
      },
    ],
  },

  ko: {
    badge: "작동 방식",
    title: "실행. 작업.",
    titleHighlight: "받기.",
    description:
      "간단한 지시를 세 단계로 실제 결과로 바꿉니다.",
    seeHow: "작동 방식 보기 →",
    steps: [
      {
        title: "실행",
        description:
          "제품 또는 에이전트를 선택하고 작업을 설명한 후 실행하세요. 복잡한 설정이 필요하지 않습니다.",
      },
      {
        title: "작업",
        description:
          "NEASX가 작업을 관리 가능한 단계로 나누고 AI로 실행합니다.",
      },
      {
        title: "받기",
        description:
          "문서, 데이터, 이미지, 인사이트 등 바로 사용할 수 있는 결과를 받아보세요.",
      },
    ],
  },

  pt: {
    badge: "Como funciona",
    title: "Execute. Tarefa.",
    titleHighlight: "Receba.",
    description:
      "Transforme uma instrução simples em resultados reais em três etapas.",
    seeHow: "Veja como funciona →",
    steps: [
      {
        title: "Executar",
        description:
          "Escolha um produto ou agente, descreva sua tarefa e execute. Sem configurações complexas.",
      },
      {
        title: "Tarefa",
        description:
          "A NEASX divide o trabalho em etapas gerenciáveis e as executa com IA.",
      },
      {
        title: "Receber",
        description:
          "Receba seus resultados — documentos, dados, imagens e insights — prontos para usar.",
      },
    ],
  },

  ru: {
    badge: "Как это работает",
    title: "Запустить. Задача.",
    titleHighlight: "Получить.",
    description:
      "Превратите простую инструкцию в реальные результаты за три шага.",
    seeHow: "Посмотреть, как это работает →",
    steps: [
      {
        title: "Запустить",
        description:
          "Выберите продукт или агента, опишите задачу и запустите её. Никаких сложных настроек.",
      },
      {
        title: "Задача",
        description:
          "NEASX разбивает работу на управляемые шаги и выполняет их с помощью ИИ.",
      },
      {
        title: "Получить",
        description:
          "Получите готовые результаты — документы, данные, изображения и инсайты.",
      },
    ],
  },

  zh: {
    badge: "工作原理",
    title: "运行。任务。",
    titleHighlight: "接收。",
    description:
      "通过三个步骤将简单的指令转化为实际成果。",
    seeHow: "查看工作原理 →",
    steps: [
      {
        title: "运行",
        description:
          "选择产品或代理，描述任务并运行。无需复杂设置。",
      },
      {
        title: "任务",
        description:
          "NEASX 将工作拆分为可管理的步骤，并使用 AI 执行。",
      },
      {
        title: "接收",
        description:
          "获取您的结果——文档、数据、图像和洞察，均可直接使用。",
      },
    ],
  },

  ar: {
    badge: "كيف يعمل",
    title: "شغّل. مهمة.",
    titleHighlight: "استلم.",
    description:
      "حوّل تعليمات بسيطة إلى نتائج حقيقية في ثلاث خطوات.",
    seeHow: "شاهد كيف يعمل →",
    steps: [
      {
        title: "شغّل",
        description:
          "اختر منتجًا أو وكيلًا، ووصف مهمتك ثم شغّلها. بدون إعدادات معقدة.",
      },
      {
        title: "مهمة",
        description:
          "يقسم NEASX العمل إلى خطوات قابلة للإدارة وينفذها باستخدام الذكاء الاصطناعي.",
      },
      {
        title: "استلم",
        description:
          "احصل على نتائجك — المستندات والبيانات والصور والرؤى — جاهزة للاستخدام.",
      },
    ],
  },
};

const stepIcons = [Play, ListTodo, PackageCheck];
const stepColors = [
  "text-cyan-400",
  "text-blue-400",
  "text-violet-400",
];
const stepBackgrounds = [
  "bg-cyan-500/10 border-cyan-400/20",
  "bg-blue-500/10 border-blue-400/20",
  "bg-violet-500/10 border-violet-400/20",
];

export default function HowItWorks({
  lang,
  dict,
}: {
  lang: string;
  dict?: any;
}) {
  const content = translations[lang] ?? translations.en;

  return (
    <Section className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.03] blur-[150px]" />

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

        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent lg:block" />

          {content.steps.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.045]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-blue-500/[0.13]" />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${stepBackgrounds[index]}`}
                  >
                    <Icon
                      size={26}
                      className={stepColors[index]}
                    />
                  </div>

                  <span className="text-4xl font-black text-white/[0.06] transition-colors duration-500 group-hover:text-white/[0.12]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>

                {index < 2 && (
                  <ChevronRight
                    className="absolute right-6 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-slate-600 lg:block"
                    size={24}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#products"
            className="text-sm font-semibold text-blue-400 transition hover:text-cyan-300"
          >
            {content.seeHow}
          </Link>
        </div>
      </Container>
    </Section>
  );
}