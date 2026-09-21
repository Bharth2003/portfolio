"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="section-container">
        <SectionHeading title="Previous Experiences" />

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

                <motion.div
                  whileHover={{ y: -6 }}
                  className={cn(
                    "flex-1 p-8 rounded-xl bg-card border border-card-border",
                    "hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-[2.5rem] font-bold text-foreground">
                        {item.organization} — {item.title}
                      </h3>
                    </div>
                    {(item.startDate || item.location) && (
                      <div className="text-right">
                        {item.startDate && (
                          <p className="text-[1.6rem] text-muted-foreground">
                            {item.startDate} — {item.endDate}
                          </p>
                        )}
                        {item.location && (
                          <p className="text-[1.6rem] text-muted-foreground">{item.location}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {item.description && item.description.length > 0 && (
                    <ul className="space-y-2.5">
                      {item.description.map((point, i) => (
                        <li
                          key={i}
                          className="text-[1.8rem] text-muted-foreground flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.responsibilities && item.responsibilities.length > 0 && (
                    <div className="mt-2">
                      <p className="text-[1.8rem] font-semibold text-foreground">
                        Primary Responsibilities:
                      </p>
                      <ul className="mt-2 space-y-2.5">
                        {item.responsibilities.map((point, i) => (
                          <li
                            key={i}
                            className="text-[1.8rem] text-muted-foreground flex items-start gap-2"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.contributions && item.contributions.length > 0 && (
                    <div className="mt-6">
                      <p className="text-[1.8rem] font-semibold text-foreground">
                        Specific Projects and Contributions:
                      </p>
                      <ul className="mt-2 space-y-2.5">
                        {item.contributions.map((point, i) => (
                          <li
                            key={i}
                            className="text-[1.8rem] text-muted-foreground flex items-start gap-2"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.mission && (
                    <div className="mt-6">
                      <p className="text-[1.8rem] font-semibold text-foreground">
                        Contribution to Mission:
                      </p>
                      <p className="mt-2 text-[1.8rem] text-muted-foreground leading-relaxed">
                        {item.mission}
                      </p>
                    </div>
                  )}

                  {item.skillsDeveloped && (
                    <p className="mt-6 text-[1.8rem] text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Skills Developed: </span>
                      {item.skillsDeveloped}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
