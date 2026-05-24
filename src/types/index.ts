export type SkillCategory =
  | "GenAI & LLMs"
  | "AI Safety"
  | "Robotics"
  | "CV & ML"
  | "Cloud & IoT"
  | "Tools";

export type ProficiencyLevel = "Advanced" | "Proficient" | "Familiar";

export interface Skill {
  name: string;
  icon: string;
  proficiency: ProficiencyLevel;
  category: SkillCategory;
}

export interface Project {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  metrics?: string;
  github?: string;
  demo?: string;
  institution?: string;
  year?: string;
  featured: boolean;
  challenges?: string[];
  outcomes?: string[];
}

export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo?: string;
}

export interface ExtracurricularItem {
  id: string;
  title: string;
  organization: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}
