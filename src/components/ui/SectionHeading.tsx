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
      className="text-center mb-16"
    >
      <h2 className="text-[6rem] md:text-[7rem] lg:text-[9rem] font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-muted-foreground text-[2.5rem] md:text-[3rem] max-w-4xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </motion.div>
  );
}
