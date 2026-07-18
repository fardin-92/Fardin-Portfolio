import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { Github, ExternalLink, BarChart3, Database, Music, Rocket } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: "Analysis" | "Dashboard";
  repo: string;
  icon: "analysis" | "sql" | "spotify";
};

const projects: Project[] = [
  {
    title: "Customer Behavior Analysis",
    category: "Analysis",
    description:
      "Performed end-to-end customer behavior analysis using Python, Pandas, SQL, PostgreSQL, Excel, and Power BI. Cleaned and transformed raw data, conducted exploratory data analysis (EDA), wrote SQL queries for business insights, and built an interactive Power BI dashboard to visualize customer trends and support data-driven decision making.",
    tech: ["Python", "Pandas", "SQL", "PostgreSQL", "Power BI", "Excel"],
    repo: "https://github.com/fardin-92/customer-behavior-analysis",
    icon: "analysis",
  },
  {
    title: "Zepto SQL Data Analysis",
    category: "Analysis",
    description:
      "Built an end-to-end SQL data analysis project using PostgreSQL with a real-world Zepto dataset. Imported and cleaned the dataset, wrote SQL queries to analyze product categories, pricing, discounts, inventory, and stock availability. Generated business insights through aggregations, filtering, joins, and analytical SQL techniques.",
    tech: ["SQL", "PostgreSQL", "Data Analysis"],
    repo: "https://github.com/fardin-92/Zepto-SQL-Data-Analysis",
    icon: "sql",
  },
  {
    title: "Spotify Music Analysis Dashboard",
    category: "Dashboard",
    description:
      "Designed an interactive Power BI dashboard using Spotify music data. Created DAX measures, KPI cards, slicers, and visualizations to analyze songs, artists, albums, popularity, danceability, streams, and listening trends. Focused on delivering meaningful business insights through interactive dashboards.",
    tech: ["Power BI", "DAX", "SQL", "Data Visualization"],
    repo: "https://github.com/fardin-92/Spotify-Music-Analysis-Powerbi",
    icon: "spotify",
  },
];

const filters = ["All", "Analysis", "Dashboard"] as const;

const Projects = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Real work — from raw data to interactive dashboards."
      description="A mix of shipped analytics work and upcoming projects I'm actively building. Filter by type below."
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 ${
              filter === f
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground/40"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            onClick={() => {
              if (p.repo) {
                window.open(p.repo, "_blank", "noopener,noreferrer");
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View ${p.title} repository`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (p.repo) {
                  window.open(p.repo, "_blank", "noopener,noreferrer");
                }
              }
            }}
            className="group flex flex-col h-full rounded-xl border border-border bg-background overflow-hidden hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_20px_hsl(var(--accent)/0.15)] hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all duration-300 ease-out cursor-pointer"
          >
            <div
              className="relative h-40 flex items-center justify-center overflow-hidden"
              style={{ background: "var(--gradient-primary)" }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute inset-0 bg-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none" />
              
              {p.icon === "analysis" && (
                <BarChart3 className="w-14 h-14 text-primary-foreground relative" strokeWidth={1.5} />
              )}
              {p.icon === "sql" && (
                <Database className="w-14 h-14 text-primary-foreground relative" strokeWidth={1.5} />
              )}
              {p.icon === "spotify" && (
                <Music className="w-14 h-14 text-primary-foreground relative" strokeWidth={1.5} />
              )}

              <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold bg-background/90 text-foreground px-2 py-0.5 rounded-full border border-border">
                {p.category}
              </span>
            </div>

            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                {p.repo ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border transition-all duration-200 hover:scale-105 hover:border-accent/30 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-auto relative z-10">
                {p.repo && p.repo !== "#" && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-accent transition-colors ml-auto group/github-btn"
                  >
                    <Github className="w-3.5 h-3.5 transition-transform duration-300 group-hover/github-btn:rotate-12" /> View Repository →
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8 w-full"
      >
        <div className="rounded-xl border border-dashed border-border bg-secondary/30 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-accent/40 transition-colors duration-300">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent shrink-0"
            >
              <Rocket className="w-6 h-6" strokeWidth={1.5} />
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
                🚀 Currently Building My Next Data Analytics Project
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                I'm currently working on a new end-to-end Data Analytics project using Python, SQL, PostgreSQL, Excel, and Power BI. The project will include data cleaning, exploratory data analysis (EDA), SQL business insights, KPI reporting, and an interactive dashboard with complete documentation. Stay tuned for future updates!
              </p>
            </div>
          </div>
          <button
            disabled
            className="px-4 py-2 rounded-lg border border-border bg-background text-muted-foreground font-semibold text-xs cursor-not-allowed shrink-0 whitespace-nowrap"
          >
            Coming Soon...
          </button>
        </div>
      </motion.div>
    </Section>
  );
};

export default Projects;