import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { projects } from "@/data/projects";
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
  const linkedProject = post.projectId ? projects.find((pr) => pr.id === post.projectId) : null;

  return (
    <article className="section-container py-32 max-w-4xl">
      <Link href="/blog" className="text-[1.4rem] text-primary hover:underline">← All posts</Link>
      <p className="mt-6 text-[1.4rem] text-primary uppercase tracking-wide">{post.date} • {post.readTime}</p>
      <h1 className="mt-2 text-[4rem] font-bold text-foreground leading-tight">{post.title}</h1>
      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((t) => (
          <Badge key={t} variant="primary">{t}</Badge>
        ))}
      </div>

      {post.coverImage && (
        <div className="mt-8 rounded-2xl overflow-hidden border border-card-border bg-muted/20">
          <img src={post.coverImage} alt={post.title} className="w-full h-auto" />
        </div>
      )}

      <div className="mt-8 text-[1.9rem] leading-relaxed text-muted-foreground whitespace-pre-wrap">{post.content}</div>

      {post.videoUrl && (
        <div className="mt-10">
          <h2 className="text-[2.2rem] font-bold text-foreground">Demo Video</h2>
          <video controls preload="metadata" className="mt-4 w-full rounded-xl border border-card-border bg-black">
            <source src={post.videoUrl} type="video/mp4" />
            Your browser does not support the video tag. <a href={post.videoUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">Download video</a>
          </video>
          <p className="mt-2 text-[1.3rem] text-muted-foreground">
            Hosted via GitHub raw mp4. For faster streaming, upload to YouTube/Loom and replace <code className="px-1 py-0.5 rounded bg-muted text-foreground">videoUrl</code> in <code className="px-1 py-0.5 rounded bg-muted text-foreground">src/data/blogs.ts</code>.
          </p>
        </div>
      )}

      {post.gallery && post.gallery.length > 0 && (
        <div className="mt-10">
          <h2 className="text-[2.2rem] font-bold text-foreground">Gallery — Architecture & Live Screens</h2>
          <p className="mt-2 text-[1.5rem] text-muted-foreground">
            Architecture diagram + 7 live UI states. Images live in <code className="px-1 py-0.5 rounded bg-muted text-foreground">public/images/blog/rescueagent/</code> — replace the 1×1 placeholders with your uploaded screenshots.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {post.gallery.map((src) => (
              <div key={src} className="rounded-xl overflow-hidden border border-card-border bg-black/40">
                <img src={src} alt={src.split("/").pop() || "RescueAgent"} className="w-full h-auto" loading="lazy" />
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
