"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about making AI systems and building intelligent solutions in robotics that are both powerful and safe"
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                I'm an MSc Robotics student and a AI Enthusiasist with a deep passion for
                building intelligent systems that operate safely in the real world. My
                work sits at the intersection of Generative AI, Responsible AI, and
                Robotics — developing systems that are not just capable, but trustworthy.
              </p>
              <p>
                Currently pursuing my MSc in Robotics at the Heriot-Watt University, I
                specialise in adversarial safety for embodied AI systems, multi-LLM
                architectures,Intelligence systems, ROS and human-robot interaction. My research directly addresses
                the critical challenge of deploying AI agents safely in physical environments like Multi modal model agents using with 
                Robots to find the State-of-the-Art and Mixture of Expertise(MoE).
              </p>
              <p>
                With a B.E in Mechatronics Engineering and hands-on experience across
                the full AI stack building ROS 2 navigation systems to Mechatronics 
                related work like CNC, Simulations of FANUC, ABB, where I bring both
                theoretical depth and practical engineering skills to every project.
              </p>
            </div>
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
                  className="p-6 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
