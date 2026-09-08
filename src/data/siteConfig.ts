import type { SiteConfig, NavLink } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Bharth K S",
  title: "Bharth K S | AI Engineer & Robotics Researcher",
  description:
    "AI Engineer and MSc Robotics student specializing in Generative AI, LLM applications, Responsible AI, and intelligent robotic systems.",
  url: "https://bharthks.vercel.app",
  socials: {
    github: "https://github.com/Bharth2003",
    linkedin: "https://www.linkedin.com/in/bharthks29/",
    email: "bharth.ks2003@gmail.com",
  },
  community: {
    discord: "https://discord.gg/REPLACE_ME",
  },
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
