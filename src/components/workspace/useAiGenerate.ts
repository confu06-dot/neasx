"use client";

import { useState } from "react";

export interface GenerateResponse {
  text: string;
  demo: boolean;
  model?: string;
  creditsUsed: number;
  creditsLeft: number;
}

export function useAiGenerate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function run(
    prompt: string,
    tool: "chat" | "writer" | "agent" | "api",
    extra: { mode?: string; targetLanguage?: string } = {}
  ): Promise<GenerateResponse | null> {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, tool, ...extra }),
      });
      // The server may return an HTML error page instead of JSON (e.g. a 500
      // from the platform); fall back to a generic message in that case.
      const data = (await res.json().catch(() => null)) as
        | (Partial<GenerateResponse> & { error?: string })
        | null;
      if (!res.ok) {
        setError(data?.error || "Something went wrong. Please try again.");
        return null;
      }
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("neasx:credits"));
      }
      return data as GenerateResponse;
    } catch {
      setError("Network error. Check your connection and try again.");
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { run, loading, error };
}
