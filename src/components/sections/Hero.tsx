import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Github, Linkedin, Mail, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isDownloading) return;

    setIsDownloading(true);

    // Show download started toast (auto dismiss after 3.5 seconds)
    toast({
      title: "📄 Resume Download Started",
      description: "Thank you for your interest! My resume is downloading. Feel free to explore my projects or contact me if you'd like to connect.",
      duration: 3500,
    });

    try {
      const link = document.createElement("a");
      link.href = "/resume/Fardin_Khirani_Resume.pdf";
      link.download = "Fardin_Khirani_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Fallback: open in new tab
      window.open("/resume/Fardin_Khirani_Resume.pdf", "_blank", "noopener,noreferrer");
      toast({
        title: "Download Blocked",
        description: "Your browser prevented the download. A new tab has been opened where you can view or download the resume manually.",
        variant: "destructive",
        duration: 4000,
      });
    }

    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 md:px-6 pt-24 pb-16 overflow-hidden">
      {/* subtle grid backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open to Data Analyst Internships &amp; Entry-Level Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="heading-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.02] mb-6"
            >
              Hi, I'm <span className="text-accent">Fardin Khirani</span>.
              <br />
              Turning Raw Data Into Actionable Insights.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              Aspiring Data Analyst skilled in Python, SQL, PostgreSQL, Excel, and Power BI. I enjoy transforming raw data into meaningful insights through data cleaning, exploratory data analysis, SQL business analysis, and interactive dashboards that help support data-driven decision making.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_0_15px_hsl(var(--accent)/0.35)] transition-all duration-300 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                aria-label={isDownloading ? "Downloading resume..." : "Download Fardin Khirani Resume"}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-[0_0_15px_hsl(var(--accent)/0.2)] transition-all duration-300 group/btn disabled:opacity-85 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-accent" />
                ) : (
                  <Download className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                )}
                {isDownloading ? "Downloading..." : "Download Resume"}
              </button>

              <div className="flex items-center gap-3 ml-2 sm:ml-4 border-l border-border pl-4 sm:pl-6 h-8">
                <a
                  href="https://github.com/fardin-92"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-full border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all duration-300 group/git"
                >
                  <Github className="w-4 h-4 transition-transform duration-300 group-hover/git:rotate-12" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fardin-khirani"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:khiranif47@gmail.com"
                  aria-label="Email"
                  className="p-2 rounded-full border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Rajkot, Gujarat, India
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                Data Analyst · Aspiring BI Analyst
              </span>
            </motion.div>
          </div>

          {/* stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Toolkit at a glance
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "Python", v: "Pandas · NumPy" },
                  { k: "SQL", v: "PostgreSQL · MySQL" },
                  { k: "Power BI", v: "Dashboards" },
                  { k: "Excel", v: "Analysis" },
                ].map((t) => (
                  <div key={t.k} className="rounded-lg bg-background border border-border p-3">
                    <p className="text-sm font-semibold text-foreground">{t.k}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.v}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <Stat label="Projects" value="5+" />
                <Stat label="Dashboards" value="3+" />
                <Stat label="Business Analysis" value="SQL" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg bg-background border border-border p-3 flex flex-col justify-center items-center">
    <p className="heading-display text-xl text-accent text-center leading-tight">{value}</p>
    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 text-center leading-tight">{label}</p>
  </div>
);

export default Hero;