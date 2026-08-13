// Server-only AI generation engine.
//
// If `AI_API_URL` and `AI_API_KEY` are set in the environment, generation is
// forwarded to any OpenAI-compatible `/chat/completions` endpoint.
//
// Otherwise a built-in demo engine generates useful, language-aware responses
// (Turkish/English) so every NEASX tool works out of the box with zero
// external dependencies. Responses from the demo engine are marked with
// `demo: true` and surfaced in the UI as "Demo AI".

import { enTr, trEn } from "@/lib/dict";

export type AITool = "chat" | "writer" | "agent" | "api";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface GenerateInput {
  prompt: string;
  tool: AITool;
  mode?: string;
  targetLanguage?: string;
  /** Previous conversation turns used as context for multi-turn chats. */
  history?: ChatMessage[];
}

export interface GenerateResult {
  text: string;
  demo: boolean;
  model?: string;
}

const AI_API_URL = process.env.AI_API_URL;
const AI_API_KEY = process.env.AI_API_KEY;
const AI_MODEL = process.env.AI_MODEL || "gpt-4o-mini";

export async function generate(input: GenerateInput): Promise<GenerateResult> {
  if (AI_API_URL && AI_API_KEY) {
    try {
      const text = await callRemote(input);
      return { text, demo: false, model: AI_MODEL };
    } catch {
      // Remote failed — fall back to the built-in demo engine so the tool
      // never appears broken.
    }
  }
  return { text: generateLocal(input), demo: true, model: "demo-engine" };
}

async function callRemote(input: GenerateInput): Promise<string> {
  const system = buildSystemPrompt(input.tool, input.mode);
  const history = Array.isArray(input.history) ? input.history : [];

  // Thread previous turns (capped to the last 20, 4000 chars each) so remote
  // models get real multi-turn context.
  const messages: Array<{ role: "user" | "assistant" | "system"; content: string }> = [
    { role: "system", content: system },
    ...history
      .filter(
        (m): m is ChatMessage =>
          !!m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string"
      )
      .slice(-20)
      .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) })),
    { role: "user", content: input.prompt },
  ];

  const res = await fetch(
    `${AI_API_URL!.replace(/\/+$/, "")}/chat/completions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AI_API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages,
        temperature: 0.7,
      }),
      signal: AbortSignal.timeout(30_000),
    }
  );
  if (!res.ok) {
    throw new Error(`AI API responded with ${res.status}`);
  }
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content;
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("AI API returned an empty response");
  }
  return text;
}

function buildSystemPrompt(tool: AITool, mode?: string): string {
  const base =
    "You are NEASX, an AI assistant inside the NEASX ecosystem. " +
    "Answer directly in the language of the user's prompt. Be concise, useful and well-structured.";
  switch (tool) {
    case "writer":
      return `${base}\nYou are the NEASX Writer. Mode: ${mode ?? "write"}. ` +
        "Produce clean, ready-to-use written content with headings and markdown formatting.";
    case "agent":
      return `${base}\nYou are the NEASX Agent. Break the user's task into a clear step-by-step plan and give a recommended outcome.`;
    case "api":
      return `${base}\nYou are the NEASX API assistant. Explain how to build or call an API for the user's request, including a short code example.`;
    default:
      return `${base}\nYou are the NEASX Chat assistant.`;
  }
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function detectLanguage(text: string): "tr" | "en" {
  return /[çğıöşüÇĞİÖŞÜ]/.test(text) ? "tr" : "en";
}

const FILLER_WORDS = [
  "write", "yaz", "yazmamı", "yazarmısın", "yazar", "blog", "post", "makale", "article",
  "about", "hakkında", "on", "the", "topic", "of", "konulu", "konusunda", "give", "me",
  "bana", "bir", "tane", "a", "an", "list", "liste", "listeler", "steps", "adımlar",
  "adımlarını", "to", "for", "some", "bazı", "örnek", "örnekler", "ideas", "fikir",
  "fikirler", "please", "lütfen", "can", "you", "söyler", "misin", "söyle", "explain",
  "açıkla", "what", "ne", "is", "nedir", "nasıl", "how", "do", "yapılır", "şey",
];

function topicOf(prompt: string): string {
  let t = prompt;
  for (const f of FILLER_WORDS) {
    t = t.replace(new RegExp(`\\b${f}\\b`, "gi"), " ");
  }
  t = t.replace(/[?!.]+$/g, "").replace(/\s+/g, " ").trim();
  if (t.length > 90) t = t.slice(0, 90).trimEnd();
  return t || prompt.trim();
}

function cleanTopic(prompt: string, lang: "tr" | "en"): string {
  const t = topicOf(prompt);
  return t.length > 0 ? t : lang === "tr" ? "bu konu" : "this topic";
}

/* ------------------------------------------------------------------ */
/* Demo engine entry                                                   */
/* ------------------------------------------------------------------ */

function generateLocal(input: GenerateInput): string {
  switch (input.tool) {
    case "writer":
      return writerResponse(input);
    case "agent":
      return agentResponse(input);
    case "api":
      return apiResponse(input);
    default:
      return chatResponse(input.prompt, input.history);
  }
}

/* ------------------------------------------------------------------ */
/* Demo engine — Chat                                                  */
/* ------------------------------------------------------------------ */

function chatResponse(prompt: string, history?: ChatMessage[]): string {
  const priorUser = history
    ? [...history].reverse().find((m) => m.role === "user")
    : undefined;
  const lang = detectLanguage(priorUser?.content ?? prompt);
  const p = prompt.toLowerCase().trim();

  // A short acknowledgment after a real exchange continues the conversation
  // instead of starting a brand-new topic.
  if (priorUser && isFollowUp(prompt, priorUser.content)) {
    const topic = cleanTopic(priorUser.content, lang);
    return followUpResponse(topic, lang);
  }

  const isGreeting =
    /^(merhaba|selam|hey|hi|hello|good (morning|afternoon|evening)|iyi (günler|akşamlar))/.test(p);
  if (isGreeting) {
    return lang === "tr"
      ? `Merhaba! 👋 Ben NEASX Chat. Sana yardımcı olmak için buradayım.\n\nSoru sorabilir, bir konuda bilgi isteyebilir, metin özeti çıkarabilir ya da yazı hazırlayabilirsin. Nasıl yardımcı olabilirim?`
      : `Hello! 👋 I'm NEASX Chat. I'm here to help.\n\nAsk a question, get a summary, or draft content. What can I do for you?`;
  }

  const wantsHelp = /\b(yardım|help)\b/.test(p) && p.split(/\s+/).length <= 4;
  if (wantsHelp) {
    return lang === "tr"
      ? `Tabii! Şunları yapabilirim:\n\n• **Soruları yanıtlamak** — istediğin konuda açıklama sunmak\n• **Özet çıkarmak** — uzun metinleri özet haline getirmek\n• **Yazı yazmak** — makale, e-posta veya sosyal medya içeriği hazırlamak\n• **Araştırma** — bir konu hakkında önemli noktaları derlemek\n\nBir konu yazarak deneyebilirsin. 🚀`
      : `Sure! Here's what I can do:\n\n• **Answer questions** — clear explanations on any topic\n• **Summarize** — long text condensed into key points\n• **Write** — articles, emails or social posts\n• **Research** — key points compiled about a topic\n\nTry it by typing a topic. 🚀`;
  }

  const isEmail = /\b(email|e-mail|e-posta)\b/.test(p);
  if (isEmail) return emailResponse(prompt, lang);

  const isBlog =
    /\b(blog|makale|article|yazı|yazi)\b/.test(p) && /\b(yaz|write|oluştur|create)\b/.test(p);
  if (isBlog) return writerWrite(prompt, lang);

  const hasList =
    /\b(list|steps|adımlar|liste|örnek|örnekler|ideas|fikir|fikirler)\b/.test(p);
  if (hasList) return listResponse(prompt, lang);

  const hasQuestion =
    /(\?|soru|question|nasıl|how|ne|what|neden|why|nerede|where)/i.test(p);
  if (hasQuestion) return answerResponse(prompt, lang);

  return defaultResponse(prompt, lang);
}

function isFollowUp(prompt: string, previousUser: string): boolean {
  const p = prompt.toLowerCase().trim();
  if (!previousUser.trim()) return false;

  const explicit =
    /^(devam|devam et|peki|tamam|ok|okay|more|continue|and then|sonra|biraz daha|detay|details|başka|else|anything else|ve sonra)\b/.test(
      p
    );
  if (explicit) return true;

  // Very short non-question prompts right after an exchange are treated as
  // continuations ("please continue", "e.g. more", "devam").
  return (
    p.length <= 10 &&
    !/\b(what|why|how|who|when|where|which|ne|neden|nasıl|kim|nerede|hangi)\b/i.test(
      p
    )
  );
}

function followUpResponse(topic: string, lang: "tr" | "en"): string {
  return lang === "tr"
    ? `Elbette, **${capitalize(topic)}** konusunun devamı olarak şunları ekleyebilirim: 👇\n\n• Önceki noktaları **derinleştir**\n• Pratikten **örneklerle** açıkla\n• Sonraki **adımları** sırayla ver\n\nHangi yönüyle devam etmemi istersin? Bir bölümü örneklerle açabilirim.`
    : `Sure — continuing with **${capitalize(topic)}**: 👇\n\n• Go **deeper** into what we covered\n• Illustrate with **concrete examples**\n• Lay out **next steps** in order\n\nWhich direction should I take? I can expand any section with examples.`;
}

function listResponse(prompt: string, lang: "tr" | "en"): string {
  const topic = cleanTopic(prompt, lang);
  const list = buildListItems(topic);
  return lang === "tr"
    ? `**${capitalize(topic)}** hakkında öne çıkan ${list.length} nokta:\n\n${list
        .map((item, i) => `${i + 1}. ${item}`)
        .join("\n")}\n\nDilersen bu noktalardan herhangi birini daha detaylı açabilirim.`
    : `**${capitalize(topic)}** — ${list.length} key points:\n\n${list
        .map((item, i) => `${i + 1}. ${item}`)
        .join("\n")}\n\nWant me to go deeper on any of these?`;
}

function buildListItems(topic: string): string[] {
  const t = topic.toLowerCase();
  if (/email|e-posta|pazarlama|marketing/.test(t)) {
    return [
      "Net ve tek bir ana mesaj belirle",
      "Konu satırını kısa ve merak uyandırıcı yaz",
      "İlk cümlede değeri hemen göster",
      "Tek çağrı eylemi (CTA) kullan",
      "Mobil görünümü mutlaka test et",
      "A/B testi ile konu ve içerik varyasyonlarını dene",
    ];
  }
  if (/seo|arama|rank/.test(t)) {
    return [
      "Anahtar kelime araştırması ile niyeti anla",
      "Başlık ve meta açıklamayı optimize et",
      "Hızlı ve mobil uyumlu sayfa deneyimi sağla",
      "Kaliteli ve özgün içerik üret",
      "İç ve dış bağlantıları dengeli kur",
      "Sonuçları analiz edip iteratif iyileştir",
    ];
  }
  if (/kod|code|api|program|lama/.test(t)) {
    return [
      "Gereksinimleri ve kapsamı netleştir",
      "Küçük, test edilebilir parçalara böl",
      "Okunabilir isimlendirme ve dokümantasyon kullan",
      "Hata durumlarını önceden ele al",
      "Otomatik testlerle doğrula",
      "Versiyon kontrolü ile değişiklikleri izle",
    ];
  }
  if (/startup|girişim|iş|business/.test(t)) {
    return [
      "Sorunu ve hedef kitleyi net tanımla",
      "Minimum uygulanabilir ürün (MVP) ile başla",
      "Müşteri geri bildirimini hızlı topla",
      "Sürdürülebilir gelir modeli kur",
      "Doğru ekip ve mentorluk ağı oluştur",
      "Ölçümlerle ilerlemeyi düzenli takip et",
    ];
  }
  return [
    `${capitalize(topic)} hakkında temel kavramları ve bağlamı özetle`,
    "Ana faydaları ve kullanım alanlarını sırala",
    "Yaygın zorluklar ve bunların çözüm yolları",
    "Güncel gelişmeler ve trendler",
    "Uygulamaya geçmeden önce dikkat edilecekler",
    "Daha derin bilgi için izlenebilecek kaynaklar",
  ];
}

function answerResponse(prompt: string, lang: "tr" | "en"): string {
  const topic = cleanTopic(prompt, lang);
  const isHowTo = /\b(nasıl|how (do|can|to|i|we)|yapılır|yapabilirim)\b/i.test(prompt);
  if (isHowTo) {
    const steps = buildHowToSteps(topic);
    return lang === "tr"
      ? `**${capitalize(topic)}** için adım adım yol haritası:\n\n${steps
          .map((s, i) => `**${i + 1}.** ${s}`)
          .join("\n")}\n\nBu adımların her birini senin bağlamına göre detaylandırabilirim.`
      : `Step-by-step guide to **${topic}**:\n\n${steps
          .map((s, i) => `**${i + 1}.** ${s}`)
          .join("\n")}\n\nHappy to expand any of these for your specific context.`;
  }
  return lang === "tr"
    ? `**${capitalize(topic)}** hakkında kısa bir genel bakış:\n\n${topic} konusu, doğru anlaşıldığında hem verimlilik hem de kalite açısından önemli kazanımlar sağlar. İşte öne çıkan noktalar:\n\n• Konunun temel kavramlarını ve hedefini netleştirmek\n• Doğru araç ve yöntemlerle uygulamaya geçmek\n• Karşılaşılan sorunlara önceden hazırlıklı olmak\n• Sonuçları ölçüp süreci sürekli iyileştirmek\n\nDaha derin bir analiz istersen bana senin durumunu anlat.`
    : `Here's a quick overview of **${topic}**:\n\nWhen understood well, ${topic} delivers meaningful gains in both efficiency and quality. Key points to keep in mind:\n\n• Clarify the core concepts and goals first\n• Apply the right tools and methods\n• Anticipate common pitfalls early\n• Measure results and keep improving\n\nTell me about your situation if you'd like a deeper analysis.`;
}

function buildHowToSteps(topic: string): string[] {
  const t = topic.toLowerCase();
  if (/email|e-posta/.test(t)) {
    return [
      "Alıcıyı ve amacı netleştir",
      "Konu satırını yaz ve dikkat çek",
      "Kısa girişle değeri hemen sun",
      "Ana gövdeyi paragraflara böl",
      "Net bir çağrı eylemi ile bitir",
      "Göndermeden önce yazım ve mobil kontrolü yap",
    ];
  }
  if (/başla|start|kur|setup|launch/.test(t)) {
    return [
      "Hedefini ve başarı kriterini tanımla",
      "Kaynakları ve bütçeyi belirle",
      "İlk adımı küçük ve uygulanabilir seç",
      "Zaman çizelgesi oluştur ve ilerlemeyi takip et",
      "Geribildirim topla ve iterasyon yap",
    ];
  }
  return [
    `Durumu ve hedefi net bir şekilde tanımla: "${topic}"`,
    "Gerekli bilgiyi ve kaynakları topla",
    "Alternatif yaklaşımları karşılaştır",
    "Uygulanabilir bir plan oluştur",
    "İlk adımı at ve sonucu ölç",
    "Geribildirime göre iyileştir",
  ];
}

function defaultResponse(prompt: string, lang: "tr" | "en"): string {
  const topic = cleanTopic(prompt, lang);
  return lang === "tr"
    ? `**${capitalize(topic)}** — tamamdır, bunun üzerinden gidelim. 👇\n\nBu konuda sana şöyle bir çerçeve önerebilirim:\n\n• Önce **mevcut durumu** netleştir: neyi başarmak istiyorsun?\n• Sonra **küçük ve ölçülebilir** bir hedef belirle\n• Uygulama sırasında **doğru araçları** seç\n• Son olarak sonuçları **gözden geçir ve iyileştir**\n\nBiraz daha bilgi verirsen sana özel bir plan çıkarabilirim.`
    : `**${capitalize(topic)}** — got it, let's work through it. 👇\n\nHere's a useful framework:\n\n• First, **clarify the current situation**: what are you trying to achieve?\n• Set a **small, measurable goal**\n• Pick the **right tools** for execution\n• Finally, **review and improve** the results\n\nGive me a bit more detail and I'll tailor a plan for you.`;
}

/* ------------------------------------------------------------------ */
/* Demo engine — Email                                                 */
/* ------------------------------------------------------------------ */

function emailResponse(prompt: string, lang: "tr" | "en"): string {
  const topic = cleanTopic(prompt, lang);
  return lang === "tr"
    ? `İşte hazır bir e-posta taslağı ✉️\n\n**Konu:** ${capitalize(topic)} hakkında bilgilendirme\n\nMerhaba,\n\nSize **${topic}** konusunu kısaca aktarmak istiyorum.\n\nBu konuya dair temel noktalar şunlardır:\n\n• Mevcut durum ve önemi\n• Beklenen faydalar\n• İzlenecek yol haritası\n\nGörüşlerinizi ve sorularınızı beklerim. Uygun bir zamanda kısa bir görüşme ayarlayabiliriz.\n\nSaygılarımla,\nNEASX AI`
    : `Here's a ready-to-send email draft ✉️\n\n**Subject:** Update regarding ${topic}\n\nHello,\n\nI'd like to give you a quick update about **${topic}**.\n\nKey points to share:\n\n• Current status and importance\n• Expected benefits\n• Proposed next steps\n\nLet me know your thoughts — happy to schedule a short call.\n\nBest regards,\nNEASX AI`;
}


/* ------------------------------------------------------------------ */
/* Demo engine — Writer                                                */
/* ------------------------------------------------------------------ */

function writerResponse(input: GenerateInput): string {
  const lang = detectLanguage(input.prompt);
  const mode = (input.mode ?? "write").toLowerCase();
  switch (mode) {
    case "rewrite":
      return writerRewrite(input.prompt, lang);
    case "summarize":
      return writerSummarize(input.prompt, lang);
    case "translate":
      return writerTranslate(input.prompt, input.targetLanguage);
    case "research":
      return writerResearch(input.prompt, lang);
    default:
      return writerWrite(input.prompt, lang);
  }
}

function writerWrite(prompt: string, lang: "tr" | "en"): string {
  const topic = cleanTopic(prompt, lang);
  if (lang === "tr") {
    return `# ${capitalize(topic)}\n\n## Giriş\n\n${capitalize(topic)}, günümüzde giderek daha fazla önem kazanan bir konu olarak karşımıza çıkıyor. Doğru yaklaşım ve araçlarla ele alındığında bireyler ve işletmeler için somut kazanımlar sağlıyor. Bu yazıda konuyu üç ana başlık altında inceliyoruz.\n\n## Neden Önemli?\n\n${capitalize(topic)} konusunun temelinde, kaynakların verimli kullanılması ve sonuç odaklı bir yaklaşım yatıyor. Bu alanda atılan doğru adımlar, hem zaman tasarrufu sağlıyor hem de kaliteyi artırıyor.\n\n## Nasıl Uygulanır?\n\nUygulama aşamasında önce mevcut durumu analiz etmek, ardından küçük ve ölçülebilir hedefler belirlemek gerekir. Doğru araçları seçmek ve süreci düzenli olarak gözden geçirmek, başarı oranını ciddi şekilde yükseltir.\n\n## Sık Yapılan Hatalar\n\n• Hedef belirlemeden başlamak\n• Sonuçları ölçmemek\n• Geri bildirimi dikkate almamak\n\n## Sonuç\n\n${capitalize(topic)} alanında başarılı olmanın anahtarı; net hedefler, doğru araçlar ve sürekli iyileştirmedir. Bu çerçeveyi uygulayanlar, kısa sürede gözle görülür fark yaratabilir.`;
  }
  return `# ${capitalize(topic)}\n\n## Introduction\n\n${capitalize(topic)} has become increasingly important in today's world. With the right approach and tools, it delivers tangible benefits for both individuals and businesses. This article explores the topic across three main sections.\n\n## Why It Matters\n\nAt the core of ${topic} lies efficient resource use and a results-driven mindset. Taking the right steps saves time and improves quality.\n\n## How to Get Started\n\nStart by analyzing the current situation, then set small, measurable goals. Choosing the right tools and reviewing progress regularly dramatically increases your success rate.\n\n## Common Pitfalls\n\n• Starting without clear goals\n• Not measuring outcomes\n• Ignoring feedback\n\n## Conclusion\n\nSuccess with ${topic} comes down to clear goals, the right tools and continuous improvement. Apply this framework and you'll see a meaningful difference quickly.`;
}


function writerRewrite(text: string, lang: "tr" | "en"): string {
  const sentences = text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const polished = sentences
    .map((s) => {
      let out = s;
      out = out.replace(/\s+/g, " ").trim();
      out = out.replace(/^([a-zçğıöşü])/, (m) => m.toUpperCase());
      if (!/[.!?…:]$/.test(out)) out += ".";
      return out;
    })
    .join(" ");
  return lang === "tr"
    ? `Yeniden yazılmış sürüm ✍️\n\n${polished}\n\n**Yapılan iyileştirmeler:**\n\n• Cümle akışı ve tutarlılık düzeltildi\n• Fazladan boşluklar ve tutarsız büyük harf kullanımı temizlendi\n• Ton daha net ve profesyonel hale getirildi\n\nİstersen metni daha kısa, daha resmî ya da daha samimi bir üslupla tekrar yazabilirim.`
    : `Rewritten version ✍️\n\n${polished}\n\n**Improvements made:**\n\n• Sentence flow and consistency fixed\n• Extra whitespace and inconsistent capitalization cleaned up\n• Tone made clearer and more professional\n\nI can rewrite it again in a shorter, more formal or more casual style if you'd like.`;
}

function writerSummarize(text: string, lang: "tr" | "en"): string {
  const sentences = text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter((s) => s.length > 20);
  const key = sentences.slice(0, 3);
  const words = text.split(/\s+/).filter(Boolean).length;
  if (lang === "tr") {
    return `Özet 📋\n\n${key.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\n${words} kelimelik metin, ${key.length} ana noktaya indirildi. Daha kısa veya daha detaylı bir özet isteyebilirsin.`;
  }
  return `Summary 📋\n\n${key.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\nCondensed ${words} words down to ${key.length} key points. Ask for a shorter or more detailed version anytime.`;
}


function writerTranslate(text: string, target?: string): string {
  const source = detectLanguage(text);
  const to = (target ?? "en").toLowerCase();
  const fromName = source === "tr" ? "Türkçe" : "English";
  const toName =
    to === "tr"
      ? "Türkçe"
      : to === "fr"
        ? "Fransızca"
        : to === "de"
          ? "Almanca"
          : to === "es"
            ? "İspanyolca"
            : "İngilizce";
  if (to === source) {
    return source === "tr"
      ? "Metin zaten Türkçe. Hedef dil olarak farklı bir dil seçmelisin."
      : "The text is already in English. Pick a different target language.";
  }
  const translated = translateWords(text, source, to);
  return `${fromName} → ${toName} 🌐\n\n${translated}`;
}

function translateWords(text: string, source: "tr" | "en", to: string): string {
  if (to !== "tr" && to !== "en") {
    return text;
  }
  const dict = source === "tr" ? trEn : enTr;
  const tokens = text.split(/(\s+|[,.;:!?()"']+)/);
  const out = tokens.map((tok) => {
    const cleaned = tok.toLowerCase();
    const hit = dict[cleaned];
    if (hit) {
      return /^[A-Z]/.test(tok) ? capitalize(hit) : hit;
    }
    return tok;
  });
  return out.join("");
}

function writerResearch(prompt: string, lang: "tr" | "en"): string {
  const topic = cleanTopic(prompt, lang);
  if (lang === "tr") {
    return `# Araştırma Özeti — ${capitalize(topic)}\n\n## Genel Bakış\n\n${capitalize(topic)} konusu, son yıllarda hem akademik hem de pratik alanda artan bir ilgi görüyor. Araştırmalar, konunun işletme ve birey düzeyinde ölçülebilir etkiler yarattığını gösteriyor.\n\n## Öne Çıkan Bulgular\n\n• **Temel etken:** Doğru uygulama ile verimlilikte belirgin artış gözlemleniyor.\n• **Pazar görünümü:** Talebin önümüzdeki dönemde güçlü şekilde büyümesi bekleniyor.\n• **En iyi uygulamalar:** Küçük adımlarla başlamak ve ölçüm yapmak en yüksek başarı oranını sağlıyor.\n\n## Veriler ve Trendler\n\nAraştırma raporlarına göre bu alana yönelen ekiplerin büyük çoğunluğu, ilk çeyrekte somut ilerleme kaydediyor. Trend, otomasyon ve kişiselleştirme yönünde hızlanıyor.\n\n## Kaynaklar\n\nBu konuda derinlemesine bilgi için sektör raporları, akademik makaleler ve güvenilir blog yazıları incelenebilir. Belirli bir kaynak seti istersen bana söyleyebilirsin.`;
  }
  return `# Research Brief — ${capitalize(topic)}\n\n## Overview\n\n${capitalize(topic)} has drawn growing attention in both academic and practical circles in recent years. Research shows measurable impact at both business and individual levels.\n\n## Key Findings\n\n• **Core driver:** Proper implementation yields a clear boost in efficiency.\n• **Market outlook:** Demand is expected to grow strongly in the coming period.\n• **Best practices:** Starting small and measuring results delivers the highest success rate.\n\n## Data & Trends\n\nReports show that most teams adopting this area see tangible progress within the first quarter. The trend is accelerating toward automation and personalization.\n\n## Sources\n\nIndustry reports, academic papers and trusted blogs are good places to dig deeper. Tell me if you'd like a specific source list.`;
}


/* ------------------------------------------------------------------ */
/* Demo engine — Agent                                                 */
/* ------------------------------------------------------------------ */

function agentResponse(input: GenerateInput): string {
  const lang = detectLanguage(input.prompt);
  const task = cleanTopic(input.prompt, lang);
  const plan = buildAgentSteps(task);
  const summary = lang === "tr" ? "tamamlanması" : "completion";
  if (lang === "tr") {
    return `# Ajan Görevi: ${capitalize(task)}\n\nGörevini analiz ettim ve aşağıdaki yürütme planını hazırladım. 🤖\n\n## Plan\n\n${plan
      .map((s, i) => `**Adım ${i + 1}:** ${s}`)
      .join("\n")}\n\n## Beklenen Sonuç\n\nBu plan uygulandığında görevin ${summary} için net bir yol haritası ve ölçülebilir çıktılar elde edilir. Her adımı senin için otomatikleştirmemi istersen görevi biraz daha detaylandırabilirsin.`;
  }
  return `# Agent Task: ${capitalize(task)}\n\nI analyzed your task and prepared the execution plan below. 🤖\n\n## Plan\n\n${plan
    .map((s, i) => `**Step ${i + 1}:** ${s}`)
    .join("\n")}\n\n## Expected Outcome\n\nFollowing this plan gives you a clear roadmap and measurable outputs. Give me more detail and I can automate any step for you.`;
}

function buildAgentSteps(task: string): string[] {
  const t = task.toLowerCase();
  if (/email|e-posta/.test(t)) {
    return [
      "Hedef alıcı listesini ve amacı tanımla",
      "Mesaj taslağını hazırla (konu + gövde)",
      "Kişiselleştirme alanlarını ekle",
      "Gönderim zamanlamasını belirle",
      "Yanıt ve dönüşüm oranlarını takip et",
      "Sonuçlara göre içeriği iyileştir",
    ];
  }
  if (/sosyal|social|instagram|twitter|linkedin/.test(t)) {
    return [
      "Hedef kitle ve platformu netleştir",
      "İçerik takvimi oluştur",
      "Görsel ve metin içeriği üret",
      "Gönderileri zamanlayıp yayınla",
      "Etkileşimleri analiz et",
      "En iyi performans gösteren formatları çoğalt",
    ];
  }
  if (/analiz|analysis|rapor|report|data|veri/.test(t)) {
    return [
      "Veri kaynaklarını ve dönemi tanımla",
      "Veriyi topla ve temizle",
      "Temel metrikleri hesapla",
      "Eğilim ve aykırı değerleri belirle",
      "Raporu görselleştirerek hazırla",
      "Önerilerle birlikte sun",
    ];
  }
  return [
    `Görev kapsamını ve hedefi netleştir: "${task}"`,
    "Gerekli bilgi ve kaynakları topla",
    "Alt görevlere böl ve önceliklendir",
    "İlk alt görevi çalıştır ve çıktıyı doğrula",
    "Kalan adımları sırayla tamamla",
    "Sonucu gözden geçir ve teslim et",
  ];
}

/* ------------------------------------------------------------------ */
/* Demo engine — API                                                   */
/* ------------------------------------------------------------------ */

function apiResponse(input: GenerateInput): string {
  const lang = detectLanguage(input.prompt);
  const topic = cleanTopic(input.prompt, lang);
  if (lang === "tr") {
    return `# API Asistanı — ${capitalize(topic)}\n\nBu görevi bir API ile çözmek için izleyebileceğin yapı aşağıda. 🔌\n\n## Önerilen Uç Noktalar\n\n• \`POST /api/v1/${slugify(topic)}\` — yeni bir kaynak oluştur\n• \`GET /api/v1/${slugify(topic)}\` — kaynakları listele\n• \`PATCH /api/v1/${slugify(topic)}/{id}\` — mevcut kaynağı güncelle\n\n## Örnek İstek\n\n\`\`\`\nPOST /api/v1/${slugify(topic)}\nContent-Type: application/json\nAuthorization: Bearer <token>\n\n{\n  "name": "${capitalize(topic)}",\n  "status": "active"\n}\n\`\`\`\n\n## Örnek Yanıt\n\n\`\`\`json\n{ "id": "res_123", "name": "${capitalize(topic)}", "status": "active", "createdAt": "2026-01-01T00:00:00Z" }\n\`\`\`\n\n> NEASX API ile bu uç noktaları test etmek için soldaki **Playground** sekmesini kullanabilirsin. Gerçek üretim anahtarı için \`/contact\` üzerinden bize ulaş.`;
  }
  return `# API Assistant — ${capitalize(topic)}\n\nHere's a structure you can follow to solve this with an API. 🔌\n\n## Suggested Endpoints\n\n• \`POST /api/v1/${slugify(topic)}\` — create a new resource\n• \`GET /api/v1/${slugify(topic)}\` — list resources\n• \`PATCH /api/v1/${slugify(topic)}/{id}\` — update an existing resource\n\n## Example Request\n\n\`\`\`\nPOST /api/v1/${slugify(topic)}\nContent-Type: application/json\nAuthorization: Bearer <token>\n\n{\n  "name": "${capitalize(topic)}",\n  "status": "active"\n}\n\`\`\`\n\n## Example Response\n\n\`\`\`json\n{ "id": "res_123", "name": "${capitalize(topic)}", "status": "active", "createdAt": "2026-01-01T00:00:00Z" }\n\`\`\`\n\n> Use the **Playground** tab on the left to test these endpoints with the NEASX API. Contact us at \`/contact\` for a production key.`;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[ç]/g, "c")
    .replace(/[ğ]/g, "g")
    .replace(/[ı]/g, "i")
    .replace(/[ö]/g, "o")
    .replace(/[ş]/g, "s")
    .replace(/[ü]/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

