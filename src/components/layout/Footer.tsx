import Link from "next/link";
import Container from "@/components/ui/Container";
import Newsletter from "@/components/ui/Newsletter";

export default function Footer({ lang, dict }: { lang: string; dict: any }) {
  const footerLinks = {
    Products: [
      { label: "Writer", href: `/${lang}/products/writer` },
      { label: "Chat", href: `/${lang}/products/chat` },
      { label: "Agent", href: `/${lang}/products/agent` },
      { label: "Studio", href: `/${lang}/products/studio` },
      { label: "Voice", href: `/${lang}/products/voice` },
      { label: "Vision", href: `/${lang}/products/vision` },
      { label: "API", href: `/${lang}/products/api` },
    ],
    Resources: [
      { label: "Blog", href: `/${lang}/blog` },
      { label: "Docs", href: `/${lang}/docs` },
      { label: "Help Center", href: `/${lang}/help` },
      { label: "Status", href: `/${lang}/status` },
    ],
    Company: [
      { label: "About", href: `/${lang}/about` },
      { label: "Careers", href: `/${lang}/careers` },
      { label: "Contact", href: `/${lang}/contact` },
    ],
    Legal: [
      { label: "Privacy", href: `/${lang}/legal/privacy` },
      { label: "Terms", href: `/${lang}/legal/terms` },
      { label: "Cookies", href: `/${lang}/legal/cookies` },
    ],
  };
  
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050b14] w-full">
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/[0.04] blur-[120px]" />

      <Container className="w-full max-w-full">
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:py-16 w-full">
          {/* Brand */}
          <div className="w-full">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-3"
              aria-label="NEASX Home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-black text-white shadow-lg shadow-blue-500/20">
                N
              </span>

              <span className="text-xl font-black tracking-tight text-white">
                NEASX
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              AI products for real work. One ecosystem for writing, chat,
              agents, creative, voice and vision.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

              <Link
                href="/status"
                className="text-xs text-slate-500 transition hover:text-white"
              >
                All systems operational
              </Link>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <Newsletter />
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="w-full">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {heading}
              </h3>

              <nav className="mt-5 flex flex-col gap-3 w-full">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-sm text-slate-500 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between w-full">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} NEASX. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-xs text-slate-600 transition hover:text-white"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="text-xs text-slate-600 transition hover:text-white"
            >
              Sign up
            </Link>

            <p className="text-xs text-slate-600">
              Built at NEASX Labs
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}