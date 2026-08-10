"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";

interface NavUser {
  name: string;
}

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<NavUser | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => setUser(data.user ?? null))
      .catch(() => setUser(null));
  }, []);

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // Ignore network errors — still navigate away.
    }
    setUser(null);
    setMobileOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-black tracking-tight text-white"
          >
            NEASX
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-slate-400 transition hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-slate-400 transition hover:text-white"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-slate-400 transition hover:text-white"
                >
                  Log in
                </Link>

                <Link
                  href="/signup"
                  className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105"
                >
                  Get started →
                </Link>
              </>
            )}
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden">
          <Container>
            <div className="flex flex-col gap-4 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-slate-400 transition hover:text-white"
                >
                  {item.title}
                </Link>
              ))}

              <div className="flex flex-col gap-3 pt-2">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-slate-300 transition hover:text-white"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="text-left text-sm font-medium text-slate-400 transition hover:text-white"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-sm font-medium text-slate-400 transition hover:text-white"
                    >
                      Log in
                    </Link>

                    <Link
                      href="/signup"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-2 text-center text-sm font-semibold text-white transition hover:scale-105"
                    >
                      Get started →
                    </Link>
                  </>
                )}
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}