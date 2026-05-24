"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-5 font-bold rounded-2xl transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90 hover:scale-[1.02] shadow-xl shadow-primary/25",
    secondary:
      "bg-secondary text-white hover:opacity-90 hover:scale-[1.02]",
    outline:
      "border-2 border-card-border text-foreground hover:bg-card hover:border-primary/50",
    ghost:
      "text-muted-foreground hover:text-foreground hover:bg-muted",
  };

  const sizes = {
    sm: "px-[3rem] py-[1.8rem] text-[2.2rem]",
    md: "px-[3.5rem] py-[2.2rem] text-[2.8rem]",
    lg: "px-[5rem] py-[3rem] text-[3.5rem]",
  };

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
