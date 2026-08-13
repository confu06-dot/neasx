"use client";

import { useCallback, useRef, useState } from "react";

export interface StreamDoneMeta {
  demo: boolean;
  model?: string;
  creditsLeft: number;
}

export interface StreamHandlers {
  /** Called with the full accumulated text on every chunk. */
  onChunk: (text: string) => void;
  /** Called once when the server signals the stream is complete. */
  onDone?: (meta: StreamDoneMeta) => void;
}

export interface StreamOptions {
  /** Defaults to "chat". */
  tool?: "chat" | "writer" | "agent" | "api";
  mode?: string;
  targetLanguage?: string;
  /** Previous conversation turns (excluding the current prompt). */
  history?: Array<{ role: "user" | "assistant"; content: string }>;
}

/**
 * Sends a chat prompt to `/api/ai/stream` and parses the SSE response as it
 * arrives, forwarding progressive text through `handlers.onChunk`. Returns the
 * full generated text on success, or `null` on error/abort.
 */
export function useAiStream() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  const start = useCallback(
    async (
      prompt: string,
      handlers: StreamHandlers,
      options: StreamOptions = {}
    ): Promise<string | null> => {
      setLoading(true);
      setError("");

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/ai/stream", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt,
            tool: options.tool ?? "chat",
            mode: options.mode,
            targetLanguage: options.targetLanguage,
            history: options.history,
          }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          const data = (await res.json().catch(() => null)) as {
            error?: string;
          } | null;
          setError(
            data?.error || "Something went wrong. Please try again."
          );
          return null;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let full = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const events = buffer.split("\n\n");
          buffer = events.pop() ?? "";

          for (const rawEvent of events) {
            const line = rawEvent.trim();
            if (!line.startsWith("data:")) continue;

            const payload = line.slice(5).trim();
            if (payload === "[DONE]") continue;

            try {
              const parsed = JSON.parse(payload) as {
                delta?: string;
                done?: boolean;
                demo?: boolean;
                model?: string;
                creditsLeft?: number;
              };
              if (typeof parsed.delta === "string") {
                full += parsed.delta;
                handlers.onChunk(full);
              }
              if (parsed.done && handlers.onDone) {
                handlers.onDone({
                  demo: parsed.demo ?? true,
                  model: parsed.model,
                  creditsLeft: parsed.creditsLeft ?? 0,
                });
              }
            } catch {
              // Ignore malformed events; the next chunk may complete them.
            }
          }
        }

        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("neasx:credits"));
        }
        return full;
      } catch (err) {
        if (controller.signal.aborted) return null;
        setError("Network error. Check your connection and try again.");
        return null;
      } finally {
        setLoading(false);
        abortRef.current = null;
      }
    },
    []
  );

  const stop = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  return { start, stop, loading, error };
}
