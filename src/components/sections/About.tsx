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
            <div className="space-y-8 text-muted-foreground text-[2rem] md:text-[2.5rem] leading-relaxed">
              <p>
                My MSc in Robotics and Mechatronics Engineering background, reinforced by an internship at Hyundai Motors, has given me a deep understanding of developing and optimising AI-driven robotic systems. From automating quality checks on assembly lines to managing operational workflows, I continually look for ways to boost efficiency and reliability through intelligent automation.
              </p>
              <p>
                What truly sets me apart is my practical design and security experience in AI. My projects, like developing an adversarial attack and defence system for embodied AI and integrating large language models with robotic platforms, highlight my ability to build robust, safe, and intelligent AI solutions.
              </p>
              <p>
                Now, I&apos;m aiming for an opportunity to apply these skills in an Applied AI Engineer capacity. I&apos;m keen to contribute to real-world AI applications, making a tangible impact on product development and operational effectiveness. Take a look at my portfolio for a deeper dive into how I turn complex challenges into well-designed AI solutions.
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInLeft}
          className="mt-12"
        >
          <div className="rounded-2xl bg-card border border-card-border p-10 lg:p-12 shadow-xl">
            <h3 className="text-[3.2rem] font-bold text-foreground">Profile Fit</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mt-8">
            {[
              {
                title: "LLM Attack & Defence Systems",
                description:
                  "Developing structured attack and defence frameworks across language model environments improved overall system robustness.",
              },
              {
                title: "Applied Prompt Engineering",
                description:
                  "Applying targeted prompt engineering approaches improved both task execution performance and natural language understanding in AI systems.",
              },
              {
                title: "Machine Learning for Autonomous Systems",
                description:
                  "Implementing algorithms like Kalman Filters and SLAM improved the accuracy and performance of autonomous navigation systems.",
              },
              {
                title: "IoT System Architecture & Integration",
                description:
                  "Building end-to-end cloud-connected IoT architectures enabled real-time data monitoring and insightful analytics for environmental systems.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl overflow-hidden bg-card border border-card-border shadow-xl hover:border-primary/30 transition-colors"
              >
                <div className="h-[110px] bg-[#2f2bb5]" />
                <div className="p-8 lg:p-10">
                  <h4 className="text-[2.6rem] font-bold text-foreground leading-tight">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-[2rem] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
