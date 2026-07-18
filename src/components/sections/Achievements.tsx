import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/shared/Section";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Built end-to-end Data Analytics projects using Python, SQL, PostgreSQL, Excel, and Power BI.",
  "Designed interactive Power BI dashboards with KPIs, DAX measures, and business insights.",
  "Analyzed real-world datasets using SQL and PostgreSQL.",
  "Published complete project documentation on GitHub.",
  "Continuously improving analytical thinking, problem-solving, and data visualization skills.",
];

const stats = [
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "+", label: "Dashboards Delivered" },
  { value: 5, suffix: "+", label: "Certifications" },
  { value: 100, suffix: "%", label: "Learning Mindset" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(value * (0.2 + 0.8 * (1 - Math.pow(1 - p, 3)))));
      if (p < 1) raf = requestAnimationFrame(step);
      else setN(value);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref} className="heading-display text-4xl md:text-5xl text-accent">
      {n}
      {suffix}
    </span>
  );
}

const Achievements = () => (
  <Section
    id="achievements"
    eyebrow="Achievements"
    title="Building Skills Through Real-World Data Projects."
  >
    <div className="grid lg:grid-cols-2 gap-8">
      <ul className="space-y-3">
        {items.map((it, i) => (
          <motion.li
            key={it}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
          >
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-sm md:text-base text-foreground leading-relaxed">{it}</span>
          </motion.li>
        ))}
      </ul>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-surface p-6 text-center flex flex-col items-center justify-center">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Achievements;