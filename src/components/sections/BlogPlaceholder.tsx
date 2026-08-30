"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function BlogPlaceholder() {
  return (
    <section id="blog" className="py-24">
      <div className="section-container text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
            <Newspaper size={32} className="text-primary" />
          </div>
          <h2 className="text-[4.5rem] md:text-[5.5rem] font-bold text-foreground">Blog & Insights</h2>
          <p className="mt-6 text-[2.2rem] text-muted-foreground max-w-3xl mx-auto">
            Sharing thoughts on AI safety,Robotics Bulding Prototype, Certification, embodied intelligence, and building
            responsible AI systems. Coming soon.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-[2rem] py-[1.2rem] rounded-full border border-card-border text-[1.3rem] text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            In Progress
          </div>
        </motion.div>
      </div>
    </section>
  );
}
