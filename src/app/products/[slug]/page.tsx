import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const Icon = product.icon;

  return (
    <>
      <Section className="relative overflow-hidden !pt-32 !pb-16 lg:!pt-36">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div
            className={cn(
              "absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[160px]"
            )}
          />
          <div
            className={cn(
              "absolute right-[-200px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[160px]"
            )}
          />
        </div>

        <Container>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>

          <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Left */}
            <div className="relative">
              <div
                className={cn(
                  "relative inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br text-white shadow-xl",
                  product.gradient
                )}
              >
                <Icon size={36} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em]",
                    product.status === "AVAILABLE"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-amber-500/10 text-amber-400"
                  )}
                >
                  {product.status}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  NEASX Ecosystem
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300/70">
                {product.tagline}
              </p>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
                {product.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {product.status === "AVAILABLE" ? (
                  <>
                    <Link href="/signup">
                      <Button icon>Get Started</Button>
                    </Link>

                    <Link href="/#pricing">
                      <Button variant="secondary">View Pricing</Button>
                    </Link>
                  </>
                ) : (
                  <Link href="/signup">
                    <Button icon>
                      <Sparkles size={18} className="mr-2" />
                      Join the Waitlist
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Right — features */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                What's included
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Everything you need, built into one intelligent workspace.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <Check size={14} />
                    </span>

                    <span className="text-sm font-medium text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-5">
                <p className="text-sm leading-7 text-slate-300">
                  <span className="font-semibold text-white">
                    One account for everything.
                  </span>{" "}
                  Your credits, workspace and AI products stay in sync across
                  the entire NEASX ecosystem.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="!pt-12 !pb-20">
        <Container>
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/[0.07] to-violet-500/[0.07] px-8 py-12 text-center sm:px-12">
            <Badge>Get started today</Badge>

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
              Start with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                {product.name}
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-400">
              Free to start. No credit card required. Upgrade when you're
              ready.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/signup">
                <Button icon>Create Free Account</Button>
              </Link>

              <Link href="/#products">
                <Button variant="secondary">Explore Other Products</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}