import Section from "@/components/shared/Section";
import { GraduationCap } from "lucide-react";

const Education = () => (
  <Section
    id="education"
    eyebrow="Education"
    title="Academic foundation in Information Technology."
    tone="surface"
  >
    <div className="rounded-xl border border-border bg-background p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 shadow-card">
      <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
        <GraduationCap className="w-7 h-7" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-foreground">
          Bachelor of Science in Information Technology (B.Sc. IT)
        </h3>
        <p className="text-muted-foreground mt-1">Atmiya University, Rajkot</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-secondary border border-border text-secondary-foreground">
            Expected Graduation: 2027
          </span>
          <span className="px-2.5 py-1 rounded-full bg-secondary border border-border text-secondary-foreground">
            Focus: Data Analytics · BI
          </span>
        </div>
      </div>
    </div>
  </Section>
);

export default Education;