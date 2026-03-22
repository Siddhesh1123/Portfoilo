import { useRef, useEffect, useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";

const experiences = [
  {
    company: "WonderBiz Technologies",
    role: "Software Engineer 1",
    period: "July 2025 – Present",
    description:
      "Architecting and developing full-stack, production-grade features across distributed systems at WonderBiz. On the backend, designed scalable RESTful APIs using C#, ASP.NET Core Web API, and EF Core — handling device configuration, signal mapping, and asset hierarchy management for industrial IoT workloads. Integrated OPC UA and Modbus protocols, built real-time telemetry pipelines pushing data to InfluxDB, and implemented threshold-based alerting with dynamic NodeId polling. Worked on Dockerizing edge gateway services for consistent cross-environment deployments. On the frontend, developed and maintained feature-rich dashboards using React and Angular with TypeScript, Tailwind CSS, and SCSS — translating complex backend data into intuitive, responsive UIs. Collaborated closely with the team using GitHub, Jira, and Postman across multiple production sprints.",
    tags: ["C#", "ASP.NET Core", "EF Core", "React", "Angular", "TypeScript", "InfluxDB", "OPC UA", "Modbus", "Docker", "SQL Server", "JWT"],
  },
  {
    company: "Rajiv Gandhi Institute of Technology",
    role: "Frontend Developer Intern",
    period: "Sep 2023 – Mar 2024",
    description:
      "Engineered an end-to-end web-based internship management platform that replaced an entirely manual faculty approval process. Built the full frontend in React.js with dynamic routing, form validation, and role-based views for students, faculty, and admins. Developed backend APIs in Node.js to handle document submission, multi-stage approval workflows, and automated email notifications at each lifecycle stage. Integrated an analytics dashboard giving coordinators real-time visibility into internship statuses across batches. Reduced manual faculty effort by 60% and cut document processing turnaround time significantly. Received a Letter of Recommendation for the impact delivered.",
    tags: ["Node.js", "React", "JavaScript", "MongoDB", "REST API", "Email Automation"],
  },
  {
    company: "The Big Brand Network",
    role: "Full-Stack Developer Intern",
    period: "Jul 2023 – Sep 2023",
    description:
      "Delivered multiple production-ready client websites end-to-end — from design implementation to deployment — using WordPress, Webflow, and custom HTML/CSS/JS builds. Worked across responsive web design, SEO optimization, plugin configuration, and web hosting setup. Introduced structured Git-based version control workflows across the team, standardizing branching and review practices that reduced deployment errors by 40%. Also gained hands-on exposure to PHP basics and Wix for smaller client projects, building versatility across the modern web tooling ecosystem.",
    tags: ["WordPress", "Webflow", "Git", "HTML", "CSS", "JavaScript", "SEO", "PHP"],
  },
  {
    company: "Teachnook",
    role: "Web Developer Intern",
    period: "Dec 2022 – Feb 2023",
    description:
      "Built a fully functional weather forecast web application as the primary internship deliverable, integrating the OpenWeather REST API for real-time location-based weather data. Developed the frontend in React with Tailwind CSS — featuring dynamic city search, current conditions, and a multi-day forecast view. Backed by a lightweight Node.js and Express server handling API proxying and environment variable management. This project served as a strong foundation in full-stack JavaScript development, REST API consumption, and component-driven UI design — forming the basis for the MERN stack skillset developed throughout the internship.",
    tags: ["React", "Node.js", "Express", "Tailwind CSS", "REST API", "OpenWeather API"],
  },
];

const useCardAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const { ref, visible } = useCardAnimation();

  return (
    <div
      ref={ref}
      className={`relative mb-10 last:mb-0 transition-all duration-700`}
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0) translateY(0)" : "translateX(-24px) translateY(12px)",
      }}
    >
      {/* Timeline dot */}
      <div
        className={`absolute -left-[2.85rem] top-6 w-3 h-3 rounded-full border-2 border-primary bg-background transition-all duration-500`}
        style={{
          transitionDelay: `${index * 80 + 200}ms`,
          transform: visible ? "scale(1)" : "scale(0)",
          boxShadow: visible ? "0 0 8px hsl(var(--primary) / 0.6)" : "none",
        }}
      />

      <div className="glass-card-hover p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
          <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground">{exp.company}</h3>
          <span className="text-xs font-mono text-secondary shrink-0">{exp.period}</span>
        </div>
        <p className="text-primary text-sm font-medium mb-3">{exp.role}</p>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">{exp.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <span key={tag} className="tag-badge text-xs">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2
          className={`section-heading text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Work <span className="glow-text">Experience</span>
        </h2>
        <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-secondary" />

        <div className="relative pl-10 sm:pl-12">
          {/* Timeline vertical line */}
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;