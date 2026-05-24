"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight } from "lucide-react";

function GithubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, scaleIn, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/siteConfig";
import type { Project } from "@/types";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-[95vw] lg:max-w-7xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-card-border p-12 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X size={32} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left Column — Title, Tags, Description */}
          <div>
            {project.institution && (
              <p className="text-[1.6rem] text-primary font-medium uppercase tracking-wide mb-3">
                {project.institution} &bull; {project.year}
              </p>
            )}

            <h3 className="text-[4.5rem] font-bold text-foreground pr-8 leading-[1.1]">{project.title}</h3>
            {project.tagline && (
              <p className="mt-2 text-muted-foreground text-[2rem]">{project.tagline}</p>
            )}

            <div className="flex flex-wrap gap-3 mt-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="primary">{tag}</Badge>
              ))}
            </div>

            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-[2rem]">
              <p>{project.longDescription || project.description}</p>
            </div>
          </div>

          {/* Right Column — Challenges, Outcomes, Buttons */}
          <div>
            {project.challenges && (
              <div className="mb-8">
                <h4 className="text-[2rem] font-semibold text-foreground uppercase tracking-wide mb-4">
                  Key Challenges
                </h4>
                <ul className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-[1.8rem] text-muted-foreground">
                      <ChevronRight size={26} className="mt-1 text-primary flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.outcomes && (
              <div className="mb-8">
                <h4 className="text-[2rem] font-semibold text-foreground uppercase tracking-wide mb-4">
                  Outcomes & Impact
                </h4>
                <ul className="space-y-4">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-3 text-[1.8rem] text-muted-foreground">
                      <ChevronRight size={26} className="mt-1 text-secondary flex-shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(project.github || project.demo) && (
              <div className="flex flex-wrap gap-4 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-[3rem] py-[1.8rem] text-[1.8rem] rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <GithubIcon size={28} /> View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-[3rem] py-[1.8rem] text-[1.8rem] rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-colors"
                  >
                    <ExternalLink size={28} /> Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Building real-world AI systems — from adversarial safety to embodied intelligence"
        />

        {/* Featured Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl bg-card border border-card-border overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image placeholder */}
              <div className="h-52 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <span className="text-5xl font-bold text-foreground/10">
                  {project.title.split(" ").map(w => w[0]).join("").slice(0, 3)}
                </span>
              </div>

              <div className="p-8">
                {project.institution && (
                  <p className="text-[1.6rem] text-primary font-medium uppercase tracking-wide mb-1">
                    {project.institution} &bull; {project.year}
                  </p>
                )}
                <h3 className="text-[2.8rem] font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.tagline && (
                  <p className="mt-1 text-[1.8rem] text-muted-foreground">{project.tagline}</p>
                )}

                <p className="mt-3 text-[1.8rem] text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge>+{project.tags.length - 4}</Badge>
                  )}
                </div>

                {project.metrics && (
                  <p className="mt-4 text-[1.5rem] font-medium text-secondary">
                    {project.metrics}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        {others.length > 0 && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-[2rem] font-semibold text-foreground mb-6">Other Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {others.map((project) => (
                <div
                  key={project.id}
                  className="p-8 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <h4 className="font-semibold text-foreground text-[2rem]">{project.title}</h4>
                  <p className="mt-1 text-[1.5rem] text-muted-foreground">{project.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* View All on GitHub */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[1.5rem] font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <GithubIcon size={28} /> View All Projects on GitHub
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
