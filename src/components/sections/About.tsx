import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { GraduationCap, Target, Sparkles, Briefcase } from "lucide-react";
import profileImg from "@/assets/images/profile.jpg";

const points = [
  { icon: GraduationCap, title: "B.Sc. IT Student", text: "Currently pursuing my Bachelor's at Atmiya University (2027)." },
  { icon: Target, title: "Analytics-Focused", text: "Passionate about data-driven decision making and BI." },
  { icon: Sparkles, title: "Always Learning", text: "Continuously exploring new tools and analytical techniques." },
  { icon: Briefcase, title: "Open to Opportunities", text: "Seeking internships and entry-level Data Analyst roles." },
];

const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title="A student analyst obsessed with clean data and clear stories."
    description="I'm a B.Sc. IT student passionate about Data Analytics and Business Intelligence. I build end-to-end analytics workflows — from raw data to interactive dashboards — and I'm actively looking for opportunities to apply these skills in a real business setting."
  >
    <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="lg:col-span-2 flex justify-center"
      >
        <div className="relative group w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden border border-border bg-surface shadow-card p-2 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          <img
            src={profileImg}
            alt="Fardin Khirani"
            width={264}
            height={264}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </motion.div>

      <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 md:gap-5">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-background p-5 md:p-6 hover:border-accent hover:shadow-card transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-accent mb-4">
              <p.icon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default About;