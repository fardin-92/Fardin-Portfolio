import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col items-center md:items-start gap-1">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; 2026 Fardin Khirani
        </p>
        <p className="text-xs text-muted-foreground/75 text-center md:text-left">
          Built with React, TypeScript &amp; Tailwind CSS
        </p>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/fardin-92"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all duration-300 group/git"
        >
          <Github className="w-4 h-4 transition-transform duration-300 group-hover/git:rotate-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/fardin-khirani"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all duration-300"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
