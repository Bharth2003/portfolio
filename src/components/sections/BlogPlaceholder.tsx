"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, X, Lock, ArrowRight, MessageCircle } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { blogs } from "@/data/blogs";
import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/types";

function BlogModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  const preview = post.content.slice(0, 420);
  const isPremium = post.premium;
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
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-card-border p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={28} />
        </button>

        <p className="text-[1.4rem] text-primary font-medium uppercase tracking-wide">
          {post.date} • {post.readTime} {isPremium && "• Premium"}
        </p>
        <h3 className="mt-2 text-[3.2rem] font-bold text-foreground leading-tight pr-8">{post.title}</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((t) => (
            <Badge key={t} variant="primary">{t}</Badge>
          ))}
        </div>

        <div className="mt-8 text-[1.9rem] leading-relaxed text-muted-foreground whitespace-pre-wrap">
          {isPremium ? preview + "…" : post.content}
        </div>

        {isPremium && (
          <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
            <p className="flex items-center gap-2 text-[1.6rem] font-semibold text-amber-600 dark:text-amber-400">
              <Lock size={18} /> Premium — Full post unlocks via Stripe
            </p>
            <p className="mt-2 text-[1.5rem] text-muted-foreground">
              This is a premium deep-dive. The preview above is free. Replace the placeholder Stripe Payment Link in <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">src/data/blogs.ts</code> with your real <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">buy.stripe.com/...</code> link when ready — $0/mo until you charge. Stripe takes 2.9% + 30¢ only per sale.
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-8">
          {isPremium && post.stripeUrl ? (
            <a
              href={post.stripeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-[3rem] py-[1.6rem] text-[1.6rem] font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-colors"
            >
              <Lock size={18} /> Unlock via Stripe
            </a>
          ) : (
            <a
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 px-[3rem] py-[1.6rem] text-[1.6rem] font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-colors"
            >
              Read full post <ArrowRight size={18} />
            </a>
          )}
          <a
            href={siteConfig.community.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <MessageCircle size={18} /> Join Discord (Free)
          </a>
        </div>
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
            Sharing thoughts on AI safety, robotics building, certification, embodied intelligence, and responsible AI systems.
          </p>
          <p className="mt-3 text-[1.4rem] text-muted-foreground">
            Free on-site • Community on Discord (free) • Premium unlocks via Stripe when you’re ready — $0/mo until then
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
              className="group relative rounded-2xl bg-card border border-card-border overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer text-left p-8"
            >
              <div className="flex items-center justify-between">
                <p className="text-[1.3rem] text-primary font-medium uppercase tracking-wide">
                  {post.date} • {post.readTime}
                </p>
                {post.premium && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 text-[1.2rem] font-medium">
                    <Lock size={12} /> Premium
                  </span>
                )}
              </div>
              <h3 className="mt-3 text-[2.2rem] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="mt-3 text-[1.6rem] text-muted-foreground line-clamp-3">{post.excerpt}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.slice(0, 3).map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <p className="mt-5 inline-flex items-center gap-1.5 text-[1.4rem] font-medium text-primary">
                {post.premium ? "Preview inside" : "Read inside"} <ArrowRight size={14} />
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href={siteConfig.community.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg border border-card-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <MessageCircle size={18} /> Join Discord Community (Free)
          </a>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-[3rem] py-[1.6rem] text-[1.6rem] rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View all posts <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>{selected && <BlogModal post={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}
