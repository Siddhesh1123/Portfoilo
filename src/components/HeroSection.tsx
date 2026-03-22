import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const roles = ["Software Engineer", "Full-Stack Developer", "Backend Engineer", "API Architect"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "hsl(244, 95%, 69%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl" style={{ background: "hsl(189, 100%, 50%)" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <MapPin size={16} />
            <span className="text-sm font-mono">Mumbai, India</span>
          </div>
        </div>

        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">SIDDHESH</span>{" "}
          <span className="glow-text">WAYAL</span>
        </h1>

        <div
          className="h-10 md:h-12 flex items-center justify-center mb-6 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="font-mono text-lg md:text-xl text-secondary">
            {text}
            <span className="animate-blink text-primary">|</span>
          </span>
        </div>

        <p
          className="text-muted-foreground text-base md:text-lg mb-10 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Building scalable systems, one API at a time
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:scale-105 glow-violet"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Download Resume
          </a>
        </div>

        <div
          className="flex items-center justify-center gap-5 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            { icon: <Github size={20} />, href: "https://github.com/Siddhesh1123", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/siddhesh-wayal-495103228/", label: "LinkedIn" },
            { icon: <ExternalLink size={20} />, href: "https://leetcode.com/u/siddheshwayal114/", label: "LeetCode" },
            { icon: <Mail size={20} />, href: "mailto:sidwayal521@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-glass-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow-violet hover:scale-110"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
