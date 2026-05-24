"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function AnimatedContainer({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
