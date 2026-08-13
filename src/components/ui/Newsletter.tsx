"use client";

import { useState, FormEvent } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

interface NewsletterProps {
  variant?: "default" | "inline";
}

export default function Newsletter({ variant = "default" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // TODO: Integrate with Resend or your email service
    // For now, simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Thanks for subscribing! Check your inbox.");
      setEmail("");
    }, 1500);
  };

  if (variant === "inline") {
    return (
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === "loading" || status === "success"}
            className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-blue-400/30 focus:bg-white/10 disabled:opacity-50"
          />
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={status === "loading" || status === "success"}
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 disabled:opacity-50 disabled:hover:scale-100"
        >
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
          {status === "success" ? (
            <>
              <CheckCircle2 size={16} />
              Subscribed!
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500">
          <Mail size={20} className="text-white" />
        </div>

        <div>
          <h3 className="font-semibold text-white">Stay updated</h3>
          <p className="text-xs text-slate-500">Get product news and updates</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === "loading" || status === "success"}
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-blue-400/30 focus:bg-white/10 disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-50 disabled:hover:scale-100"
        >
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
          {status === "success" ? (
            <>
              <CheckCircle2 size={16} />
              Subscribed!
            </>
          ) : (
            "Subscribe to Newsletter"
          )}
        </button>

        {message && (
          <p className={`mt-2 text-xs ${status === "error" ? "text-red-400" : "text-emerald-400"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
