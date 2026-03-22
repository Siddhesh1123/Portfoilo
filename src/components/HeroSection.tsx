import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin, ExternalLink, ChevronDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import avatarImg from "@/assets/siddhesh-avatar.png";

const roles = [
  "Software Engineer 1",
  "Full-Stack Developer",
  "ASP.NET Core Developer",
  "MERN Stack Developer",
  "API Architect",
  "System Designer",
];

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

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left w-full">
            <div className="animate-fade-up flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-4" style={{ animationDelay: "0.1s" }}>
              <MapPin size={14} />
              <span className="text-xs sm:text-sm font-mono">Mumbai, India</span>
            </div>

            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-foreground">SIDDHESH</span>{" "}
              <br />
              <span className="glow-text">WAYAL</span>
            </h1>

            <div
              className="h-8 sm:h-10 md:h-12 flex items-center justify-center lg:justify-start mb-4 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <span className="font-mono text-base sm:text-lg md:text-xl text-secondary">
                {text}
                <span className="animate-blink text-primary">|</span>
              </span>
            </div>

            <p
              className="text-muted-foreground text-sm sm:text-base md:text-lg mb-2 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              Building scalable systems, one API at a time
            </p>

            <p
              className="text-muted-foreground/70 text-xs sm:text-sm max-w-sm sm:max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              Full-Stack Software Engineer with expertise in{" "}
              <span className="text-foreground/80">ASP.NET Core & C#</span> on the backend,{" "}
              <span className="text-foreground/80">React, Angular & MERN</span> on the frontend — building distributed systems and production-grade web applications end-to-end.
            </p>

            <div
              className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start mb-8 animate-fade-up"
              style={{ animationDelay: "0.65s" }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:scale-105 glow-violet text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-center"
              >
                Download Resume
              </a>
            </div>

            <div
              className="flex items-center justify-center lg:justify-start gap-4 animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              {[
                { icon: <Github size={18} />, href: "https://github.com/Siddhesh1123", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/siddhesh-wayal-495103228/", label: "LinkedIn" },
                { icon: <ExternalLink size={18} />, href: "https://leetcode.com/u/siddheshwayal114/", label: "LeetCode" },
                { icon: <Mail size={18} />, href: "mailto:sidwayal521@gmail.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-glass-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow-violet hover:scale-110"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Avatar — shown above text on mobile */}
          <div
            className="shrink-0 animate-fade-up mt-4 lg:mt-0"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative w-44 h-52 sm:w-56 sm:h-64 md:w-64 md:h-72 lg:w-72 lg:h-80 rounded-2xl overflow-hidden border-2 border-glass-border">
                <img
                  src={avatarImg}
                  alt="Siddhesh Wayal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card px-3 py-1.5 rounded-xl border border-primary/30">
                <span className="text-xs font-mono text-secondary">💻 Open to Work</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="text-muted-foreground/50 hover:text-primary transition-colors">
          <ChevronDown size={22} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;