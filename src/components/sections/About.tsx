"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about making AI systems and building intelligent solutions in robotics that are both powerful and safe"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="rounded-2xl overflow-hidden border border-card-border bg-black shadow-xl">
              <video
                controls
                preload="metadata"
                playsInline
                poster="/images/about-thumbnail.png"
                className="w-full h-auto max-h-[520px] object-contain bg-black"
              >
                <source src="/videos/about-me.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-4 text-[1.5rem] text-muted-foreground text-center">
              About me — in my own words
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Focus Area", value: "Responsible AI, Technical code, Vibe Code, Generative AI" },
                { label: "Research", value: "Embodied AI Safety, Multimodal model agents" },
                { label: "Engineering", value: "Multi-LLM Systems, Robotics" },
                { label: "Building", value: "AI + Robotics" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-8 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors"
                >
                  <p className="text-[1.5rem] text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="mt-3 text-[2.5rem] font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
