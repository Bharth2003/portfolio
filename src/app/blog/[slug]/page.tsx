import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  return blogs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — Bharth K S`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) notFound();
  const linkedProject = post.projectId ? projects.find((pr) => pr.id === post.projectId) : null;

  return (
    <article className="section-container py-24 max-w-6xl">
      <Link href="/blog" className="text-[1.4rem] text-primary hover:underline">← All posts</Link>
      <p className="mt-4 text-[1.4rem] text-primary uppercase tracking-wide">{post.date} • {post.readTime}</p>
      <h1 className="mt-2 text-[4.2rem] font-bold text-foreground leading-tight max-w-3xl">{post.title}</h1>
      <div className="flex flex-wrap gap-2 mt-4 max-w-3xl">
        {post.tags.map((t) => (
          <Badge key={t} variant="primary">{t}</Badge>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3">
          {post.coverImage && (
            <div className="rounded-2xl overflow-hidden border border-card-border bg-muted/20">
              <img src={post.coverImage} alt={post.title} className="w-full h-auto max-h-[420px] object-contain bg-[#0a0e1a]" />
            </div>
          )}
          <div className="mt-6 text-[1.8rem] leading-relaxed text-muted-foreground whitespace-pre-wrap">{post.content}</div>
        </div>
        <div className="lg:col-span-2 lg:sticky lg:top-24">
          {post.videoUrl && (
            <div>
              <h2 className="text-[1.6rem] font-semibold text-foreground uppercase tracking-wide">Demo Video</h2>
              <video controls preload="metadata" className="mt-3 w-full rounded-xl border border-card-border bg-black aspect-video object-contain">
                <source src={post.videoUrl} type="video/mp4" />
                Your browser does not support the video tag. <a href={post.videoUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">Download video</a>
              </video>
            </div>
          )}
          {linkedProject && (
            <div className="mt-6 rounded-2xl border border-card-border bg-card p-6">
              <p className="text-[1.2rem] text-primary uppercase tracking-wide">Featured Project</p>
              <h3 className="mt-2 text-[2rem] font-bold text-foreground leading-tight">{linkedProject.title}</h3>
              <p className="mt-2 text-[1.4rem] text-muted-foreground line-clamp-3">{linkedProject.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={linkedProject.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-muted text-foreground text-[1.3rem] hover:bg-primary hover:text-primary-foreground transition-colors">GitHub</a>
                {linkedProject.demo && <a href={linkedProject.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-[1.3rem]">Live Demo</a>}
              </div>
            </div>
          )}
        </div>
      </div>

      {post.gallery && post.gallery.length > 0 && (
        <div className="mt-12">
          <h2 className="text-[1.6rem] font-semibold text-foreground uppercase tracking-wide">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {post.gallery.map((src) => (
              <div key={src} className="rounded-xl overflow-hidden border border-card-border bg-black/40 hover:border-primary/30 transition-colors">
                <img src={src} alt={src.split("/").pop() || "RescueAgent"} className="w-full h-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}

      {linkedProject && (
        <div className="mt-10 rounded-2xl border border-card-border bg-card p-8">
          <p className="text-[1.3rem] text-primary uppercase tracking-wide">Featured Project</p>
          <h3 className="mt-2 text-[2.4rem] font-bold text-foreground">{linkedProject.title}</h3>
          <p className="mt-2 text-[1.6rem] text-muted-foreground">{linkedProject.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={linkedProject.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-muted text-foreground text-[1.4rem] hover:bg-primary hover:text-primary-foreground transition-colors">GitHub</a>
            {linkedProject.demo && <a href={linkedProject.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-[1.4rem]">Live Demo</a>}
            <a href="/#projects" className="px-4 py-2 rounded-lg border border-card-border text-[1.4rem] text-muted-foreground hover:text-foreground">View in Projects</a>
          </div>
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="/#blog" className="px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg border border-card-border text-muted-foreground hover:text-foreground">← Back to Blog</a>
        <a href="/#projects" className="px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">Featured Projects</a>
      </div>
    </article>
  );
}
