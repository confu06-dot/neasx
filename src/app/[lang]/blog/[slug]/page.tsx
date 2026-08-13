import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { posts } from "@/data/posts";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const nextPost = posts[currentIndex + 1];

  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <article className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400">
              {post.tag}
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar size={12} />
              {post.date}
            </span>

            <span className="text-xs text-slate-600">{post.readTime}</span>
          </div>

          <h1 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.1]">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-9 text-slate-400">{post.excerpt}</p>

          <div className="mt-12 space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-9 text-slate-400 first:text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {nextPost && (
          <div className="mx-auto mt-20 max-w-3xl">
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/25 hover:bg-white/[0.05]"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                  Next article
                </p>
                <h2 className="mt-2 text-lg font-bold tracking-tight text-white transition group-hover:text-blue-300">
                  {nextPost.title}
                </h2>
              </div>

              <ArrowRight
                size={20}
                className="shrink-0 text-blue-400 transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
}