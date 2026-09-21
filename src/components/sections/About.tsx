"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionHeading
          title="Quick Summary"
          subtitle="Focused on advancing Applied AI Engineering by developing intelligent, robust, and ethical AI systems. Combining expertise in LLM integration, robotic systems, and machine learning with a strong foundation in AI safety principles to build context-aware and reliable solutions. Driven to solve complex challenges across areas such as autonomous navigation, human-robot interaction, and safe AI deployment."
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
          className="mt-12 rounded-2xl bg-card border border-card-border p-10 lg:p-14 shadow-xl"
        >
          <h3 className="text-[3.2rem] font-bold text-foreground">USP</h3>
          <ul className="mt-6 space-y-6 text-[2.4rem] leading-relaxed text-muted-foreground list-disc pl-8">
            <li>
              Expertise in developing adversarial attack and defence frameworks for LLM-powered embodied agents, increasing AI safety and responsible deployment.
            </li>
            <li>
              Practical experience integrating large language models with robotic platforms to enable natural language understanding and intelligent decision-making.
            </li>
            <li>
              Professional background in automating quality validation for robotic production systems at Hyundai, driving operational excellence through data analysis.
            </li>
            <li>
              Skilled in building cloud-connected IoT architectures and data pipelines for real-time monitoring, relevant to scalable AI and machine learning integrations.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
