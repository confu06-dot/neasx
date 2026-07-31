"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Container from "@/components/ui/Container";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-5">
      <Container>
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-6 backdrop-blur-xl">

          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-white"
          >
            NEASX
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-400 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105 lg:flex"
          >
            Let's Build →
          </Link>

          <button className="lg:hidden">
            <Menu className="text-white" size={24} />
          </button>

        </nav>
      </Container>
    </header>
  );
}