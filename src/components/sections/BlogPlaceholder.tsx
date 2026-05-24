"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function BlogPlaceholder() {
  return (
    <section id="blog" className="py-16">
      <div className="section-container text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <div className="inline-flex p-3 rounded-2xl bg-primary/10 mb-4">
            <Newspaper size={20} className="text-primary" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">Blog & Insights</h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-3xl mx-auto">
            Sharing thoughts on AI safety,Robotics Bulding Prototype, Certification, embodied intelligence, and building
            responsible AI systems. Coming soon.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            In Progress
          </div>
        </motion.div>
      </div>
    </section>
  );
}
