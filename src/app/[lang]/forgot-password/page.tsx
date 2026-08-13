import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Reset your password",
  description:
    "Enter your email to receive a link to reset your NEASX account password.",
};

export default function ForgotPasswordPage() {
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
                Reset your password
              </h1>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Enter the email address associated with your account and
                we'll send you a link to reset your password.
              </p>
            </div>

            <ForgotPasswordForm />

            <p className="mt-8 text-center text-sm text-slate-500">
              Remembered your password?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}