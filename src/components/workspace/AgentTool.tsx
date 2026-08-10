"use client";

import { useEffect, useState } from "react";
import { Bot, Play, CheckCircle2, Loader2, Search, ListChecks, Rocket } from "lucide-react";
import { useAiGenerate, type GenerateResponse } from "./useAiGenerate";
import Markdown from "./Markdown";
import { CopyButton, DemoBadge, ErrorNote } from "./shared";

const EXAMPLES = [
  "Bir e-posta pazarlama kampanyası planla",
  "Sosyal medya içerik takvimi oluştur",
  "Satış verilerini analiz et ve rapor çıkar",
  "Yeni bir ürün lansmanı için adımları listele",
];

const PHASES = [
  { key: 1, label: "Analyzing task", icon: Search },
  { key: 2, label: "Building execution plan", icon: ListChecks },
  { key: 3, label: "Executing & verifying", icon: Rocket },
];

export default function AgentTool({
  product,
}: {
  product: { name: string; tagline: string; gradient: string };
}) {
  const [task, setTask] = useState("");
  const [result, setResult] = useState<GenerateResponse | null>(null);
  const [phase, setPhase] = useState(0);
  const { run, loading, error } = useAiGenerate();

  useEffect(() => {
    if (!loading) {
      setPhase(0);
      return;
    }
    setPhase(1);
    const id = setInterval(() => {
      setPhase((p) => (p >= 3 ? 3 : p + 1));
    }, 700);
    return () => clearInterval(id);
  }, [loading]);

  async function handleRun() {
    const text = task.trim();
    if (!text || loading) return;
    const res = await run(text, "agent");
    if (res) setResult(res);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
            <Bot size={19} />
          </span>
          <div>
            <h2 className="font-bold text-white">Task runner</h2>
            <p className="text-xs text-slate-500">
              Describe a task — the agent plans and executes it
            </p>
          </div>
        </div>

        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          rows={6}
          placeholder="e.g. Ürün lansmanı için 30 günlük bir plan hazırla…"
          className="mt-6 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white placeholder:text-slate-500 focus:border-violet-400/30 focus:outline-none"
        />

        <div className="mt-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
            Try an example
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                onClick={() => setTask(ex)}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-slate-300 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>



        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={handleRun}
            disabled={loading || !task.trim()}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-30"
          >
            <Play size={15} />
            {loading ? "Running…" : "Run agent"}
          </button>
          <p className="text-[11px] text-slate-600">1 credit per run</p>
        </div>

        <ErrorNote message={error} />
      </div>

      <div className="flex min-h-[480px] flex-col rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-400">
            Agent output
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
            <div className="space-y-4">
              {PHASES.map((p) => {
                const active = p.key === phase;
                const done = p.key < phase;
                return (
                  <div
                    key={p.key}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    {done ? (
                      <CheckCircle2 size={18} className="text-emerald-400" />
                    ) : active ? (
                      <Loader2 size={18} className="animate-spin text-violet-400" />
                    ) : (
                      <p.icon size={18} className="text-slate-600" />
                    )}
                    <span
                      className={
                        done
                          ? "text-sm text-slate-400"
                          : active
                            ? "text-sm font-semibold text-white"
                            : "text-sm text-slate-600"
                      }
                    >
                      {p.label}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : result ? (
            <Markdown text={result.text} />
          ) : (
            <div className="flex h-full min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-white/10 text-center">
              <div>
                <Bot size={26} className="mx-auto text-slate-600" />
                <p className="mt-3 text-sm text-slate-500">
                  Enter a task and press{" "}
                  <span className="font-semibold text-white">Run agent</span>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

