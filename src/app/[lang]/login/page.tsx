import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import LoginForm from "@/components/auth/LoginForm";
import { getCurrentUser } from "@/lib/session";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Log in",
  description:
    "Log in to your NEASX account and continue working with your AI products.",
};

export default async function LoginPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const user = await getCurrentUser();
  if (user) redirect(`/${lang}/dashboard`);

  return (
    <>
      <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

          <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
        </div>

        <Container>
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="mx-auto max-w-xl">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
                <div className="text-center">
                  <Badge>Welcome back</Badge>

                  <h1 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                    Log in to{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                      NEASX
                    </span>
                  </h1>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Continue where you left off with your AI products.
                  </p>
                </div>

                <LoginForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
