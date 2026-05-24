"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="section-container">
        <SectionHeading
          title="Experience & Education"
          subtitle="My journey building AI systems and studying intelligent robotics"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-card-border hidden md:block" />

          <div className="space-y-8">
            {experience.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-11 h-11 items-center justify-center rounded-full bg-card border border-card-border z-10">
                  {item.type === "education" ? (
                    <GraduationCap size={18} className="text-primary" />
                  ) : (
                    <Briefcase size={18} className="text-secondary" />
                  )}
                </div>

                <div
                  className={cn(
                    "flex-1 p-6 rounded-xl bg-card border border-card-border",
                    "hover:border-primary/30 transition-colors"
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-primary font-medium">
                        {item.organization}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        {item.startDate} — {item.endDate}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {item.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
