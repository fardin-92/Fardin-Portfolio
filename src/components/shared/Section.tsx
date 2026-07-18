import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface";
}

const Section = ({ id, eyebrow, title, description, children, className, tone = "default" }: SectionProps) => (
  <section
    id={id}
    className={cn(
      "px-4 md:px-6 py-20 md:py-28 border-t border-border scroll-mt-20",
      tone === "surface" && "bg-surface",
      className
    )}
  >
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl mb-12 md:mb-16"
      >
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent block mb-3">
            {eyebrow}
          </span>
        )}
        <h2 className="heading-display text-3xl md:text-5xl mb-4">{title}</h2>
        {description && (
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);

export default Section;