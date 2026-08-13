"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

interface NavUser {
  name: string;
}

interface NavbarProps {
  lang: string;
  dict: any;
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<NavUser | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => setUser(data.user ?? null))
      .catch(() => setUser(null));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // Ignore network errors — still navigate away.
    }
    setUser(null);
    setMobileOpen(false);
    router.push(`/${lang}`);
    router.refresh();
  }

  const navLinks = [
    { href: `/${lang}#products`, label: dict.nav?.products || "Products" },
    { href: `/${lang}/solutions`, label: dict.nav?.solutions || "Solutions" },
    { href: `/${lang}/pricing`, label: dict.nav?.pricing || "Pricing" },
    { href: `/${lang}/resources`, label: dict.nav?.resources || "Resources" },
    { href: `/${lang}/company`, label: dict.nav?.company || "Company" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-purple-500/10 bg-black/90 shadow-lg shadow-purple-500/5 backdrop-blur-xl"
          : "border-b border-white/5 bg-black/60 backdrop-blur-md"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="flex items-center gap-2 text-xl font-black tracking-tight text-white transition-opacity hover:opacity-80"
          >
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 bg-clip-text text-transparent">
              NEASX
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher currentLocale={lang} />

            {user ? (
              <>
                <Link
                  href={`/${lang}/dashboard`}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:bg-white/5 hover:text-white"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:bg-white/5 hover:text-white"
                >
                  {dict.nav?.logout || "Log out"}
                </button>
              </>
            ) : (
              <>
                <Link
                  href={`/${lang}/login`}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:bg-white/5 hover:text-white"
                >
                  {dict.nav?.login || "Log in"}
                </Link>
                <Link
                  href={`/${lang}/signup`}
                  className="group relative rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  {dict.nav?.getStarted || "Get started"} →
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-black/95 backdrop-blur-xl lg:hidden">
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-2 h-px bg-white/5" />

              {user ? (
                <>
                  <Link
                    href={`/${lang}/dashboard`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
                  >
                    {dict.nav?.logout || "Log out"}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href={`/${lang}/login`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
                  >
                    {dict.nav?.login || "Log in"}
                  </Link>
                  <Link
                    href={`/${lang}/signup`}
                    onClick={() => setMobileOpen(false)}
                    className="mt-1 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:from-purple-500 hover:to-violet-500"
                  >
                    {dict.nav?.getStarted || "Get started"} →
                  </Link>
                </>
              )}

              <div className="mt-2">
                <LanguageSwitcher currentLocale={lang} />
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}