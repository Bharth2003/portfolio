import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground border-card-border",
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-[2rem] py-[1rem] text-[1.8rem] font-bold rounded-full border-2",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
