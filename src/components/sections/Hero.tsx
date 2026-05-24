"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import { heroStagger, slideInFromBottom } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { TypingEffect } from "@/components/ui/TypingEffect";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative section-container py-12 flex flex-col lg:flex-row items-center gap-8"
      >
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            variants={slideInFromBottom}
            className="text-[1.2rem] md:text-[1.4rem] font-medium text-primary mb-4 tracking-wide uppercase"
          >
            AI Enthusiastic & Robotics Engineer
          </motion.p>

          <motion.h1
            variants={slideInFromBottom}
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight text-foreground leading-[1.1]"
          >
            Building Intelligent
            <br />
            Systems That{" "}
            <TypingEffect
              words={["Think Safely", "Act Responsibly", "Learn Continuously", "Push Boundaries"]}
            />
          </motion.h1>

          <motion.p
            variants={slideInFromBottom}
            className="mt-6 text-[1rem] md:text-[1.15rem] text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            MSc Robotics student specialising in Intelligence systems, HRI, IoT, ROS, Generative AI, LLM safety, and
            embodied intelligence. Bridging the gap between powerful AI models and
            safe real-world deployment.
          </motion.p>

          <motion.div
            variants={slideInFromBottom}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Button href="#projects" variant="primary" size="md">
              View Projects <ArrowRight size={18} />
            </Button>
            <Button href="/cv/my-cv.pdf" variant="outline" size="md">
              Download CV <Download size={18} />
            </Button>
            <Button href="#contact" variant="ghost" size="md">
              Get in Touch <Mail size={18} />
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromBottom}
          className="flex-shrink-0 mx-auto"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-card-border flex items-center justify-center overflow-hidden">
              <Image
                src="/images/profile.png"
                alt="Bharth K S"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 300px, 400px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
