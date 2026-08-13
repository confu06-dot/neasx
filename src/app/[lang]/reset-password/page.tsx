import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Set a new password",
  description: "Choose a new password for your NEASX account.",
};

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Log in
        </Link>

        <div className="mx-auto mt-12 max-w-xl">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
            <div className="text-center">
              <h1 className="text-3xl font-black tracking-[-0.03em] text-white">
                Set a new password
              </h1>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Choose a strong password you haven&apos;t used before to secure
                your account.
              </p>
            </div>

            <ResetPasswordForm token={token ?? ""} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
