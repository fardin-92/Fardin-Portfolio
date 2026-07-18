import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { Code2, BarChart3, LineChart, Database, Wrench } from "lucide-react";

const groups = [
  { icon: Code2, label: "Programming", items: ["Python", "SQL"] },
  {
    icon: BarChart3,
    label: "Data Analysis",
    items: ["Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis", "Data Visualization"],
  },
  { icon: LineChart, label: "Visualization", items: ["Power BI", "Excel", "Matplotlib"] },
  { icon: Database, label: "Databases", items: ["PostgreSQL", "MySQL"] },
  { icon: Wrench, label: "Tools", items: ["Jupyter Notebook", "VS Code", "Git", "GitHub"] },
];

const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title="The stack I use to move from question to insight."
    description="A practical toolkit spanning programming, analysis, visualization, databases, and everyday developer tools."
    tone="surface"
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {groups.map((g, i) => (
        <motion.div
          key={g.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border bg-background p-6 hover:shadow-card hover:border-accent/60 transition-all group"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <g.icon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{g.label}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {g.items.map((s) => (
              <span
                key={s}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 hover:border-accent/40 transition-all duration-200 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Skills;