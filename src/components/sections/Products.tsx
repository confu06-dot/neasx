import { products } from "@/data/products";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Products() {
  return (
    <Section id="products" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[140px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Our Products</Badge>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
            One ecosystem.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              Every AI tool.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            A complete suite of AI products designed to work together. One
            account unlocks everything.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.05]",
                  product.status === "COMING SOON" && "opacity-70 hover:opacity-100"
                )}
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-[50px] transition-all duration-500 group-hover:bg-blue-500/[0.14]" />

                <div className="flex items-start justify-between">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
                      product.gradient
                    )}
                  >
                    <Icon size={22} />
                  </div>

                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em]",
                      product.status === "AVAILABLE"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-amber-500/10 text-amber-400"
                    )}
                  >
                    {product.status}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                  {product.name}
                </h3>

                <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/60">
                  {product.tagline}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {product.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-500"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}