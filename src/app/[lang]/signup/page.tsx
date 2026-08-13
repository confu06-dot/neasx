import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import SignupForm from "@/components/auth/SignupForm";
import { getCurrentUser } from "@/lib/session";
import { ArrowLeft, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Create your account",
  description:
    "Sign up for NEASX and unlock the full ecosystem of AI products. Free to start, no credit card required.",
};

const perks = [
  "All free products included",
  "30,000 free credits per month",
  "No credit card required",
  "Cancel anytime",
];

export default async function SignupPage({
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

          <div className="mx-auto mt-10 grid max-w-5xl items-stretch gap-10 lg:grid-cols-2">
            {/* LEFT — Marketing */}
            <div className="hidden flex-col justify-between rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/[0.07] via-[#0b1220]/60 to-violet-500/[0.07] p-10 lg:flex">
              <div>
                <Badge>Join NEASX</Badge>

                <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white">
                  One account.{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                    Every AI product.
                  </span>
                </h1>

                <p className="mt-5 max-w-md text-base leading-8 text-slate-400">
                  Unlock the full NEASX ecosystem — Writer, Chat, Agent,
                  Studio, Voice, Vision and API — all with a single account.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <Check size={14} />
                    </span>

                    <span className="text-sm font-medium text-slate-300">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
              <SignupForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
