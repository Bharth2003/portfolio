import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Blog — Bharth K S",
  description: "Insights on AI safety, robotics, and embodied intelligence.",
};

export default function BlogIndex() {
  return (
    <div className="section-container py-32">
      <h1 className="text-[4.5rem] font-bold text-foreground">Blog & Insights</h1>
      <p className="mt-4 text-[1.8rem] text-muted-foreground max-w-3xl">
        Free posts live on your portfolio (SEO on your domain). Premium deep-dives unlock via Stripe Payment Links — $0/mo until you charge. Community is free on Discord.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {blogs.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="rounded-2xl bg-card border border-card-border p-8 hover:border-primary/40 transition-colors"
          >
            <p className="text-[1.3rem] text-primary uppercase tracking-wide">{post.date} • {post.readTime} {post.premium && "• Premium"}</p>
            <h2 className="mt-2 text-[2.4rem] font-bold text-foreground">{post.title}</h2>
            <p className="mt-3 text-[1.6rem] text-muted-foreground line-clamp-3">{post.excerpt}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {post.tags.map((t) => <Badge key={t}>{t}</Badge>)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
