"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { skills, skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { SkillCategory, ProficiencyLevel } from "@/types";

const proficiencyColors: Record<ProficiencyLevel, string> = {
  Advanced: "text-primary border-primary/30 bg-primary/5",
  Proficient: "text-secondary border-secondary/30 bg-secondary/5",
  Familiar: "text-muted-foreground border-card-border bg-muted",
};

function getIcon(iconName: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons = LucideIcons as any;
  return icons[iconName] || LucideIcons.Circle;
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("GenAI & LLMs");
  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Specialised across the AI and robotics stack from LLM safety to embedded integrate intellegence systems, 
          with a focus on building responsible and powerful solutions"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-[2.5rem] py-[1.5rem] rounded-lg text-[2rem] font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-card-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredSkills.map((skill, index) => {
              const Icon = getIcon(skill.icon);
              const isLarge = index === 0;
              return (
                <motion.div
                  key={skill.name}
                  variants={scaleIn}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className={cn(
                    "group relative p-8 rounded-xl bg-card border border-card-border",
                    "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
                    "transition-shadow duration-300",
                    isLarge && "sm:col-span-2 lg:col-span-1"
                  )}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 rounded-lg bg-muted border border-card-border group-hover:border-primary/20 transition-colors">
                        <Icon size={32} className="text-primary" />
                      </div>
                        <span
                          className={cn(
                            "px-[1.5rem] py-[0.8rem] text-[1.6rem] font-medium rounded-full border",
                          proficiencyColors[skill.proficiency]
                        )}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground text-[2rem] leading-snug">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
