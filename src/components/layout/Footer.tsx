import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <Container>

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

          <div>

            <h2 className="text-2xl font-black text-white">
              NEASX
            </h2>

            <p className="mt-3 max-w-md text-slate-400">
              Building modern software for startups and businesses.
            </p>

          </div>

          <div className="flex gap-8 text-slate-400">

            <Link href="#">
              Services
            </Link>

            <Link href="#">
              Projects
            </Link>

            <Link href="#">
              About
            </Link>

            <Link href="#">
              Contact
            </Link>

          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © 2026 NEASX Labs. All rights reserved.
        </div>

      </Container>
    </footer>
  );
}