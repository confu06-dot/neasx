"use client";

import { useState } from "react";
import { PenLine, Wand2, ListTree, Search, Languages, Sparkles } from "lucide-react";
import { useAiGenerate, type GenerateResponse } from "./useAiGenerate";
import Markdown from "./Markdown";
import { CopyButton, DemoBadge, ErrorNote, LoadingIndicator } from "./shared";
import { cn } from "@/lib/utils";

const MODES = [
  { key: "write", label: "Write", icon: PenLine, placeholder: "e.g. Yapay zeka hakkında bir blog yazısı yaz" },
  { key: "rewrite", label: "Rewrite", icon: Wand2, placeholder: "Paste the text you want to rewrite…" },
  { key: "summarize", label: "Summarize", icon: ListTree, placeholder: "Paste the text you want to summarize…" },
  { key: "research", label: "Research", icon: Search, placeholder: "e.g. Elektrikli araç pazarı hakkında araştırma yap" },
  { key: "translate", label: "Translate", icon: Languages, placeholder: "Paste the text you want to translate…" },
];

const LANGUAGES = [
  { key: "en", label: "English" },
  { key: "tr", label: "Türkçe" },
  { key: "fr", label: "Français" },
  { key: "de", label: "Deutsch" },
  { key: "es", label: "Español" },
];

export default function WriterTool({
  product,
}: {
  product: { name: string; tagline: string; gradient: string };
}) {
  const [mode, setMode] = useState("write");
  const [input, setInput] = useState("");
  const [target, setTarget] = useState("en");
  const [result, setResult] = useState<GenerateResponse | null>(null);
  const { run, loading, error } = useAiGenerate();

  const current = MODES.find((m) => m.key === mode) ?? MODES[0];

  async function handleGenerate() {
    const text = input.trim();
    if (!text || loading) return;
    const res = await run(text, "writer", {
      mode,
      targetLanguage: mode === "translate" ? target : undefined,
    });
    if (res) setResult(res);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Input side */}
      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
        <div className="flex flex-wrap gap-2">
          {MODES.map((m) => {
            const Icon = m.icon;
            return (
              <button
                key={m.key}
                onClick={() => {
                  setMode(m.key);
                  setResult(null);
                }}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                  mode === m.key
                    ? "border-blue-400/30 bg-blue-500/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.06] hover:text-white"
                )}
              >
                <Icon size={13} />
                {m.label}
              </button>
            );
          })}
        </div>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={9}
          placeholder={current.placeholder}
          className="mt-6 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white placeholder:text-slate-500 focus:border-blue-400/30 focus:outline-none"
        />

        {mode === "translate" && (
          <div className="mt-4">
            <label className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
              Target language
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setTarget(l.key)}
                  className={cn(
                    "rounded-lg border px-3 py-1.5 text-xs font-semibold transition",
                    target === l.key
                      ? "border-violet-400/30 bg-violet-500/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        )}



        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={handleGenerate}
            disabled={loading || !input.trim()}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-30"
          >
            <Sparkles size={15} />
            {loading ? "Generating…" : "Generate"}
          </button>
          <p className="text-[11px] text-slate-600">1 credit per generation</p>
        </div>

        <ErrorNote message={error} />
      </div>

      {/* Output side */}
      <div className="flex min-h-[480px] flex-col rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-400">
            Output
          </h2>
          {result && (
            <div className="flex items-center gap-2">
              <DemoBadge demo={result.demo} />
              <CopyButton text={result.text} />
            </div>
          )}
        </div>

        <div className="mt-6 flex-1 overflow-y-auto">
          {loading ? (
            <LoadingIndicator label="Writing…" />
          ) : result ? (
            <Markdown text={result.text} />
          ) : (
            <div className="flex h-full min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-white/10 text-center">
              <div>
                <PenLine size={26} className="mx-auto text-slate-600" />
                <p className="mt-3 text-sm text-slate-500">
                  Choose a mode, enter your text and hit{" "}
                  <span className="font-semibold text-white">Generate</span>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

