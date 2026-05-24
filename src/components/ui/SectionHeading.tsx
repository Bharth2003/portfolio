"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
      className="text-center mb-12"
    >
      <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-[1rem] md:text-[1.15rem] max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </motion.div>
  );
}
