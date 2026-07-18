import { useState } from "react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, Copy, Check } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/fardin-92" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/fardin-khirani" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/fardin_92_?igsh=MWhicWdnZnY5MTVnYQ==" },
  { icon: Mail, label: "Email", href: "mailto:khiranif47@gmail.com" },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("khiranif47@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
  <Section
    id="contact"
    eyebrow="Contact"
    title="Open to Data Analyst internships, entry-level roles and collaborative analytics projects."
    description="Have an internship, project, or opportunity in mind? Send a message and I'll get back within 24 hours."
    tone="surface"
  >
    <div className="grid lg:grid-cols-5 gap-8 items-start">
      <div className="lg:col-span-3 rounded-xl border border-border bg-background p-6 md:p-8 shadow-card">
        <ContactForm />
      </div>
      <div className="lg:col-span-2 space-y-6">
        <div className="rounded-xl border border-border bg-background p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Direct Email
          </p>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <a href="mailto:khiranif47@gmail.com" className="text-lg font-semibold text-foreground hover:text-accent transition-colors story-link break-all">
              khiranif47@gmail.com
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyEmail}
              className="h-8 px-2.5 text-xs inline-flex items-center gap-1.5 border-border hover:bg-secondary transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                  Copy
                </>
              )}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Rajkot, Gujarat, India</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Social
          </p>
          <div className="grid grid-cols-2 gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground hover:border-accent hover:text-accent transition-all"
              >
                <s.icon className="w-4 h-4" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
  );
};

export default Contact;