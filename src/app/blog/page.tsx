import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { posts } from "@/data/posts";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Product updates, AI insights and stories from the NEASX team.",
};

export default function BlogPage() {
  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Blog</Badge>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Notes from{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              NEASX Labs.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
            Product updates, AI insights and stories from the team.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.05] sm:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400">
                  {post.tag}
                </span>

                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar size={12} />
                  {post.date}
                </span>

                <span className="text-xs text-slate-600">
                  {post.readTime}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-bold tracking-tight text-white transition group-hover:text-blue-300 sm:text-2xl">
                {post.title}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-400 transition group-hover:gap-3">
                Read article
                <ArrowRight size={16} />
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}