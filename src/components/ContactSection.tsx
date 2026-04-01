import { useState } from "react";
import { Github, Linkedin, Mail, Phone, ExternalLink, Copy, Check } from "lucide-react";
import { useScrollAnimation } from "./useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sidwayal521@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <h2
          className={`section-heading mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Let's Build <span className="glow-text">Something</span>
        </h2>
        <div className="w-16 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-secondary" />

        <p
          className={`text-muted-foreground text-lg mb-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Open to full-time roles, freelance projects, and collaborations.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:scale-105 glow-violet"
          >
            <Mail size={16} />
            sidwayal521@gmail.com
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>

          <a
            href="tel:+919004767323"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-glass-border text-muted-foreground hover:text-foreground font-medium text-sm transition-all duration-300 hover:border-primary"
          >
            <Phone size={16} />
            +91 9004767323
          </a>
        </div>

        <div
          className={`flex items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { icon: <Github size={20} />, href: "https://github.com/Siddhesh1123", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/wayalsiddhesh", label: "LinkedIn" },
            { icon: <ExternalLink size={20} />, href: "https://leetcode.com/u/siddheshwayal114/", label: "LeetCode" },
            { icon: <Mail size={20} />, href: "mailto:sidwayal521@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-glass-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-glass-border">
          <p className="text-xs text-muted-foreground">
            © 2025 Siddhesh Wayal. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
