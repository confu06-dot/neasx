import Container from "@/components/ui/Container";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050b14]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/[0.04] blur-[120px]" />

      <Container>
        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:py-16">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-3"
              aria-label="NEASX Home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-black text-white shadow-lg shadow-blue-500/20">
                N
              </span>

              <span className="text-xl font-black tracking-tight text-white">
                NEASX
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Building premium software, AI products and scalable digital
              experiences for modern businesses.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

              <span className="text-xs text-slate-500">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Navigation
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-slate-500 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Let's Talk
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Have an idea or a project in mind? Let's turn it into something
              real.
            </p>

            <a
              href="mailto:hello@neasx.dev"
              className="mt-4 inline-flex text-sm font-medium text-blue-400 transition-colors duration-300 hover:text-cyan-300"
            >
              hello@neasx.dev
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} NEASX. All rights reserved.
          </p>

          <p className="text-xs text-slate-600">
            Designed & built by NEASX
          </p>
        </div>
      </Container>
    </footer>
  );
}