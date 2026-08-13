"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { SendHorizontal, User, Bot, Trash2, Square } from "lucide-react";
import { useAiStream } from "./useAiStream";
import Markdown from "./Markdown";
import { ErrorNote, LoadingIndicator } from "./shared";

interface Message {
  role: "user" | "assistant";
  content: string;
  demo?: boolean;
  streaming?: boolean;
}

const SUGGESTIONS = [
  "Yapay zeka nedir?",
  "Bir iş fikrine nasıl başlanır?",
  "E-posta pazarlama ipuçları listele",
  "Merhaba",
];

const STORAGE_KEY = "neasx-chat-messages";

function loadStoredMessages(): Message[] {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Message[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function ChatTool({
  product,
}: {
  product: { name: string; tagline: string; gradient: string };
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [input, setInput] = useState("");
  const { start, stop, loading, error } = useAiStream();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Restore the previous conversation once the browser is available, after the
  // initial render so there is no server/client hydration mismatch.
  useEffect(() => {
    setMessages(loadStoredMessages());
    setHydrated(true);
  }, []);

  // Keep the conversation alive across navigations within the session.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Storage unavailable — keep the in-memory state only.
    }
  }, [messages, hydrated]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  function resizeInput() {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }

  async function handleSend(e: FormEvent, preset?: string) {
    e.preventDefault();
    const text = (preset ?? input).trim();
    if (!text || loading) return;

    const history = messages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    const userMessage: Message = { role: "user", content: text };
    setMessages((m) => [...m, userMessage]);
    setInput("");
    resizeInput();

    // Add a placeholder assistant bubble that fills in as chunks stream in.
    setMessages((m) => [
      ...m,
      { role: "assistant", content: "", streaming: true, demo: true },
    ]);

    const result = await start(
      text,
      {
        onChunk: (partial) => {
          setMessages((m) => {
            const next = [...m];
            const last = next[next.length - 1];
            if (last && last.role === "assistant" && last.streaming) {
              next[next.length - 1] = { ...last, content: partial };
            }
            return next;
          });
        },
        onDone: ({ demo }) => {
          setMessages((m) => {
            const next = [...m];
            const last = next[next.length - 1];
            if (last && last.role === "assistant" && last.streaming) {
              next[next.length - 1] = { ...last, streaming: false, demo };
            }
            return next;
          });
        },
      },
      { history }
    );

    // Finalize the stream. If it failed before producing any text, drop the
    // empty placeholder bubble so only the error note is shown.
    setMessages((m) => {
      const next = [...m];
      const last = next[next.length - 1];
      if (last && last.role === "assistant" && last.streaming) {
        if (result === null && last.content === "") {
          return next.slice(0, -1);
        }
        next[next.length - 1] = { ...last, streaming: false };
      }
      return next;
    });
  }

  const isStreaming = messages.some((m) => m.streaming);

  return (
    <div className="flex h-full min-h-[560px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <p className="text-sm font-semibold text-white">NEASX Chat</p>
        </div>

        <div className="flex items-center gap-2">
          {loading && (
            <button
              onClick={stop}
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-400/25 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-300 transition hover:bg-red-500/20 hover:text-red-200"
            >
              <Square size={11} />
              Stop
            </button>
          )}

          {messages.length > 0 && (
            <button
              onClick={() => setMessages([])}
              disabled={loading}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-400 transition hover:bg-white/[0.08] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Trash2 size={13} />
              Clear
            </button>
          )}
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-5 overflow-y-auto px-5 py-6">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-4">
              <Bot size={28} className="mx-auto text-blue-400" />
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                {product.name} — ask me anything. Responses stream in live.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={(e) => handleSend(e, s)}
                  disabled={loading}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}



        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white ${
                msg.role === "user"
                  ? "bg-gradient-to-br from-blue-500 to-violet-500"
                  : "border border-white/10 bg-white/[0.06]"
              }`}
            >
              {msg.role === "user" ? (
                <User size={15} />
              ) : (
                <Bot size={15} className="text-blue-300" />
              )}
            </span>

            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                msg.role === "user"
                  ? "rounded-tr-sm border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-violet-500/15"
                  : "rounded-tl-sm border border-white/10 bg-white/[0.03]"
              }`}
            >
              {msg.role === "assistant" ? (
                <>
                  <Markdown text={msg.content} />
                  {msg.streaming && (
                    <span className="mt-1 inline-block h-4 w-[7px] animate-pulse rounded-sm bg-blue-400 align-middle" />
                  )}
                  {msg.demo && !msg.streaming && (
                    <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-amber-400/80">
                      Demo AI
                    </p>
                  )}
                </>
              ) : (
                <p className="whitespace-pre-wrap text-sm leading-7 text-slate-200">
                  {msg.content}
                </p>
              )}
            </div>
          </div>
        ))}

        {loading && !isStreaming && <LoadingIndicator label="Thinking…" />}
        <ErrorNote message={error} />
      </div>

      <form onSubmit={handleSend} className="border-t border-white/10 p-4">
        <div className="flex items-end gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-2 focus-within:border-blue-400/30">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              resizeInput();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend(e);
              }
            }}
            rows={1}
            disabled={loading}
            placeholder="Ask NEASX anything…"
            className="max-h-40 min-h-[40px] flex-1 resize-none bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white transition hover:opacity-90 disabled:opacity-30"
          >
            <SendHorizontal size={17} />
          </button>
        </div>
        <p className="mt-2 text-[11px] text-slate-600">
          1 credit per message on the Free plan · Unlimited on Pro
        </p>
      </form>
    </div>
  );
}

