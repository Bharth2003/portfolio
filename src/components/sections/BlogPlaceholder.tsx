"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, X, ArrowRight, ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { blogs } from "@/data/blogs";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/types";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function BlogModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  const linkedProject = post.projectId ? projects.find((p) => p.id === post.projectId) : null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-card-border p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X size={28} />
        </button>

        <p className="text-[1.4rem] text-primary font-medium uppercase tracking-wide pr-10">
          {post.date} • {post.readTime}
        </p>
        <h3 className="mt-2 text-[3.2rem] font-bold text-foreground leading-tight pr-8">{post.title}</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((t) => (
            <Badge key={t} variant="primary">{t}</Badge>
          ))}
        </div>

        {post.coverImage && (
          <div className="mt-6 rounded-xl overflow-hidden border border-card-border bg-muted/30">
            <img src={post.coverImage} alt={post.title} className="w-full h-auto" />
          </div>
        )}

        <div className="mt-8 text-[1.8rem] leading-relaxed text-muted-foreground whitespace-pre-wrap">{post.content}</div>

        {post.videoUrl && (
          <div className="mt-8">
            <h4 className="text-[1.6rem] font-semibold text-foreground mb-3">Demo Video</h4>
            <video controls preload="metadata" className="w-full rounded-xl border border-card-border bg-black" poster={post.gallery?.[0]}>
              <source src={post.videoUrl} type="video/mp4" />
              Your browser does not support the video tag. <a href={post.videoUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">Download video</a>
            </video>
            <p className="mt-2 text-[1.3rem] text-muted-foreground">
              If video doesn&apos;t load (GitHub raw mp4), <a href={post.videoUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">open in new tab</a> or upload to YouTube and replace <code className="px-1 py-0.5 rounded bg-muted">videoUrl</code> in <code className="px-1 py-0.5 rounded bg-muted">src/data/blogs.ts</code>.
            </p>
          </div>
        )}

        {post.gallery && post.gallery.length > 0 && (
          <div className="mt-8">
            <h4 className="text-[1.6rem] font-semibold text-foreground mb-3">Gallery — Architecture & Live Screens</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.gallery.map((src) => (
                <div key={src} className="rounded-xl overflow-hidden border border-card-border bg-black/40">
                  <img src={src} alt={src.split("/").pop() || "RescueAgent screen"} className="w-full h-auto" loading="lazy" />
                </div>
              ))}
            </div>
            <p className="mt-3 text-[1.3rem] text-muted-foreground">
              Place your 7 screenshots + <code className="px-1 py-0.5 rounded bg-muted">architecture.svg</code> into <code className="px-1 py-0.5 rounded bg-muted">public/images/blog/rescueagent/</code> (already scaffolded). Replace the 1×1 placeholder PNGs with the actual uploads — no code change needed.
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {linkedProject?.github && (
            <a href={linkedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <GithubIcon size={18} /> View Code
            </a>
          )}
          {linkedProject?.demo && (
            <a href={linkedProject.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-colors">
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
          <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg border border-card-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
            Open full blog page <ArrowRight size={18} />
          </a>
        </div>

        {linkedProject && (
          <p className="mt-6 text-[1.4rem] text-muted-foreground">
            Also featured in <a href="#projects" onClick={onClose} className="text-primary hover:underline">Featured Projects → {linkedProject.title}</a>
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export function BlogPlaceholder() {
  const [selected, setSelected] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
            <Newspaper size={32} className="text-primary" />
          </div>
          <h2 className="text-[4.5rem] md:text-[5.5rem] font-bold text-foreground">Blog & Insights</h2>
          <p className="mt-6 text-[2.2rem] text-muted-foreground max-w-3xl mx-auto">
            Build logs, hackathon breakdowns, and robotics notes — free, on your portfolio. Click any post to read inside.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {blogs.map((post) => (
            <motion.div
              key={post.id}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(post)}
              className="group relative rounded-2xl bg-card border border-card-border overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer text-left"
            >
              {post.coverImage ? (
                <div className="h-44 overflow-hidden bg-muted/20 border-b border-card-border">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                </div>
              ) : (
                <div className="h-44 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border-b border-card-border">
                  <span className="text-4xl font-bold text-foreground/10">{post.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}</span>
                </div>
              )}
              <div className="p-8">
                <p className="text-[1.3rem] text-primary font-medium uppercase tracking-wide">
                  {post.date} • {post.readTime}
                </p>
                <h3 className="mt-2 text-[2.2rem] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="mt-3 text-[1.6rem] text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {post.tags.slice(0, 3).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <p className="mt-5 inline-flex items-center gap-1.5 text-[1.4rem] font-medium text-primary">
                  Read inside <ArrowRight size={14} />
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10 text-center">
          <a href="/blog" className="inline-flex items-center gap-2 px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            View all posts <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>{selected && <BlogModal post={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}
