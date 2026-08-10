"use client";

import { useState } from "react";
import { Code2, Play, Terminal, FileCode2, Braces } from "lucide-react";
import { useAiGenerate, type GenerateResponse } from "./useAiGenerate";
import { ErrorNote } from "./shared";
import { cn } from "@/lib/utils";

const TABS = [
  { key: "playground", label: "Playground", icon: Play },
  { key: "curl", label: "cURL", icon: Terminal },
  { key: "node", label: "Node.js", icon: FileCode2 },
  { key: "python", label: "Python", icon: Braces },
];

const CURL = `curl -X POST http://localhost:3000/api/ai/generate \\
  -H "Content-Type: application/json" \\
  -H "Cookie: neasx_session=<your-session-cookie>" \\
  -d '{ "prompt": "Yapay zeka nedir?", "tool": "chat" }'`;

const NODE = `const res = await fetch("http://localhost:3000/api/ai/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
  body: JSON.stringify({
    prompt: "Yapay zeka nedir?",
    tool: "chat",
  }),
});
const data = await res.json();
console.log(data.text);`;

const PYTHON = `import requests

resp = requests.post(
    "http://localhost:3000/api/ai/generate",
    headers={"Content-Type": "application/json"},
    cookies={"neasx_session": "<your-session-cookie>"},
    json={"prompt": "Yapay zeka nedir?", "tool": "chat"},
)
print(resp.json()["text"])`;

export default function ApiTool({
  product,
}: {
  product: { name: string; tagline: string; gradient: string };
}) {
  const [tab, setTab] = useState("playground");
  const [body, setBody] = useState(
    '{\n  "prompt": "Yapay zeka nedir?",\n  "tool": "chat"\n}'
  );
  const [response, setResponse] = useState<GenerateResponse | null>(null);
  const { run, loading, error } = useAiGenerate();

  async function handleSend() {
    let parsed: { prompt?: string; tool?: string };
    try {
      parsed = JSON.parse(body);
    } catch {
      setResponse(null);
      return;
    }
    const prompt = typeof parsed.prompt === "string" ? parsed.prompt : "";
    if (!prompt) return;
    const tool =
      parsed.tool === "writer" || parsed.tool === "agent" || parsed.tool === "api"
        ? parsed.tool
        : "chat";
    const res = await run(prompt, tool);
    if (res) setResponse(res);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                  tab === t.key
                    ? "border-blue-400/30 bg-blue-500/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.06] hover:text-white"
                )}
              >
                <Icon size={13} />
                {t.label}
              </button>
              );
            })}
          </div>



        {tab === "playground" ? (
          <>
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="flex items-center justify-between font-mono text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-bold text-emerald-400">
                    POST
                  </span>
                  /api/ai/generate
                </span>
                <Code2 size={14} />
              </p>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={7}
                spellCheck={false}
                className="mt-3 w-full resize-none rounded-xl bg-transparent font-mono text-[13px] leading-6 text-cyan-200 focus:outline-none"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={handleSend}
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-30"
              >
                <Play size={15} />
                {loading ? "Sending…" : "Send request"}
              </button>
              <p className="text-[11px] text-slate-600">
                Authenticated via your session · 1 credit per request
              </p>
            </div>

            <ErrorNote message={error} />
          </>
        ) : (
          <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4">
            <pre className="font-mono text-[13px] leading-6 text-cyan-200">
              {tab === "curl" ? CURL : tab === "node" ? NODE : PYTHON}
            </pre>
          </div>
        )}
      </div>

      <div className="flex min-h-[480px] flex-col rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
        <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-400">
          Response
        </h2>
        <div className="mt-6 flex-1 overflow-y-auto">
          {loading ? (
            <div className="space-y-3">
              <div className="h-4 w-24 animate-pulse rounded bg-white/[0.06]" />
              <div className="h-4 w-full animate-pulse rounded bg-white/[0.06]" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-white/[0.06]" />
              <div className="h-4 w-full animate-pulse rounded bg-white/[0.06]" />
            </div>
          ) : response ? (
            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-[13px] leading-6 text-emerald-200">
{JSON.stringify(
  {
    status: 200,
    text: response.text,
    demo: response.demo,
    model: response.model,
    creditsUsed: response.creditsUsed,
    creditsLeft: response.creditsLeft,
  },
  null,
  2
)}
            </pre>
          ) : (
            <div className="flex h-full min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-white/10 text-center">
              <div>
                <Code2 size={26} className="mx-auto text-slate-600" />
                <p className="mt-3 text-sm text-slate-500">
                  Send a request to see the JSON response.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

