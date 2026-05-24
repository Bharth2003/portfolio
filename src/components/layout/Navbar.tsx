"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "@/data/siteConfig";
import { useTheme } from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ opacity: 1 }}
    >
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-card-border/50"
        style={{ opacity: bgOpacity }}
      />
      <div className="relative section-container py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          Bharth K S<span className="text-primary">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-base transition-colors duration-200",
                activeSection === link.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#contact"
            className="px-5 py-2 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-card-border p-6"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-card-border">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
