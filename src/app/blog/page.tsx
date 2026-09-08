import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Blog — Bharth K S",
  description: "Build logs, hackathon breakdowns, and robotics notes.",
};

export default function BlogIndex() {
  return (
    <div className="section-container py-32">
      <h1 className="text-[4.5rem] font-bold text-foreground">Blog & Insights</h1>
      <p className="mt-4 text-[1.8rem] text-muted-foreground max-w-3xl">
        Free, on your portfolio — inside-window reading, no paywall. Each post links to its Featured Project.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {blogs.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="rounded-2xl bg-card border border-card-border overflow-hidden hover:border-primary/40 transition-colors"
          >
            {post.coverImage && (
              <div className="h-48 overflow-hidden bg-muted/20 border-b border-card-border">
                <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8">
              <p className="text-[1.3rem] text-primary uppercase tracking-wide">{post.date} • {post.readTime}</p>
              <h2 className="mt-2 text-[2.4rem] font-bold text-foreground">{post.title}</h2>
              <p className="mt-3 text-[1.6rem] text-muted-foreground line-clamp-3">{post.excerpt}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
