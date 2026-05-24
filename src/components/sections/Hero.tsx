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
        className="relative section-container py-20 flex flex-col lg:flex-row items-center gap-12"
      >
        <div className="flex-1 text-center">
          <motion.p
            variants={slideInFromBottom}
            className="text-[4rem] md:text-[5rem] font-medium text-primary mb-8 tracking-wide uppercase"
          >
            AI Enthusiastic & Robotics Engineer
          </motion.p>

          <motion.h1
            variants={slideInFromBottom}
            className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-bold tracking-tight text-foreground leading-[1.05]"
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
            className="mt-10 text-[2.5rem] md:text-[3rem] text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            MSc Robotics student specialising in Intelligence systems, HRI, IoT, ROS, Generative AI, LLM safety, and
            embodied intelligence. Bridging the gap between powerful AI models and
            safe real-world deployment.
          </motion.p>

          <motion.div
            variants={slideInFromBottom}
            className="mt-12 flex flex-wrap gap-8 justify-center"
          >
            <Button href="#projects" variant="primary" size="lg">
              View Projects <ArrowRight size={28} />
            </Button>
            <Button href="/cv/my-cv.pdf" variant="outline" size="lg">
              Download CV <Download size={28} />
            </Button>
            <Button href="#contact" variant="ghost" size="lg">
              Get in Touch <Mail size={28} />
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromBottom}
          className="flex-shrink-0 mx-auto"
        >
          <div className="relative w-[700px] h-[700px] lg:w-[850px] lg:h-[850px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-card-border flex items-center justify-center overflow-hidden">
              <Image
                src="/images/profile.png"
                alt="Bharth K S"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 700px, 850px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
