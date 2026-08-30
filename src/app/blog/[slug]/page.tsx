import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  return blogs.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogs.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: `${post.title} — Bharth K S`, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogs.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const preview = post.content.slice(0, 500);

  return (
    <article className="section-container py-32 max-w-3xl">
      <Link href="/blog" className="text-[1.4rem] text-primary hover:underline">← All posts</Link>
      <p className="mt-6 text-[1.4rem] text-primary uppercase tracking-wide">{post.date} • {post.readTime} {post.premium && "• Premium"}</p>
      <h1 className="mt-2 text-[4rem] font-bold text-foreground leading-tight">{post.title}</h1>
      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((t) => <Badge key={t} variant="primary">{t}</Badge>)}
      </div>

      <div className="mt-8 text-[1.9rem] leading-relaxed text-muted-foreground whitespace-pre-wrap">
        {post.premium ? preview + "…" : post.content}
      </div>

      {post.premium && (
        <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
          <p className="text-[1.6rem] font-semibold text-amber-600 dark:text-amber-400">Premium — Unlock full post via Stripe</p>
          <p className="mt-2 text-[1.5rem] text-muted-foreground">
            Replace <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">stripeUrl</code> in <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">src/data/blogs.ts</code> with your real Stripe Payment Link when ready. $0/mo until first sale (Stripe 2.9% + 30¢ per transaction only).
          </p>
          {post.stripeUrl && (
            <a href={post.stripeUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg bg-primary text-primary-foreground">Unlock via Stripe</a>
          )}
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-4">
        <a href={siteConfig.community.discord} target="_blank" rel="noopener noreferrer" className="px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">Join Discord (Free)</a>
        <Link href="/#blog" className="px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg border border-card-border text-muted-foreground hover:text-foreground">Back to Blog</Link>
      </div>
    </article>
  );
}
