"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { extracurricular } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, scaleIn } from "@/lib/animations";

function getIcon(iconName: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons = LucideIcons as any;
  return icons[iconName] || LucideIcons.Star;
}

export function Extracurricular() {
  return (
    <section id="extracurricular" className="py-24">
      <div className="section-container">
        <SectionHeading
          title="Leadership & Activities"
          subtitle="Beyond the lab — leading teams, competing nationally, and giving back"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {extracurricular.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.id}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="p-8 rounded-xl bg-card border border-card-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-[2rem]">{item.title}</h3>
                <p className="text-[1.5rem] text-primary mt-1">{item.organization}</p>
                <p className="mt-3 text-[1.5rem] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
