import { useScrollAnimation } from "./useScrollAnimation";

const experiences = [
  {
    company: "WonderBiz Technologies",
    role: "Software Engineer 1",
    period: "July 2025 – Present",
    description:
      "Designed and developed distributed, scalable backend services using C#, ASP.NET Core Web API, EF Core, React/Angular. Built and optimized RESTful APIs for high-throughput production environments.",
    tags: ["C#", "ASP.NET Core", "React", "Angular", "SQL"],
  },
  {
    company: "Rajiv Gandhi Institute of Technology",
    role: "Frontend Developer Intern",
    period: "Sep 2023 – Mar 2024",
    description:
      "Engineered an end-to-end web-based internship management platform using Node.js and React.js. Automated workflows, reducing manual effort for faculty by 60%.",
    tags: ["Node.js", "React", "JavaScript"],
  },
  {
    company: "The Big Brand Network",
    role: "Full-Stack Developer Intern",
    period: "Jul 2023 – Sep 2023",
    description:
      "Delivered multiple production-ready websites, improving performance metrics. Implemented structured version control workflows using Git, reducing deployment errors by 40%.",
    tags: ["WordPress", "Git", "Frontend"],
  },
  {
    company: "Teachook",
    role: "Web Developer Intern",
    period: "Dec 2022 – Feb 2023",
    description:
      "Built a weather forecast app using React, OpenWeather API, Node.js, Express, and Tailwind CSS, integrating multiple REST APIs for dynamic data display.",
    tags: ["React", "Node.js", "Tailwind CSS"],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2
          className={`section-heading text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Work <span className="glow-text">Experience</span>
        </h2>
        <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-secondary" />

        <div className="relative pl-12">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-10 last:mb-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className="timeline-dot" style={{ top: "1.5rem" }} />

              <div className="glass-card-hover p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-heading font-semibold text-lg text-foreground">{exp.company}</h3>
                  <span className="text-xs font-mono text-secondary">{exp.period}</span>
                </div>
                <p className="text-primary text-sm font-medium mb-3">{exp.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag-badge text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
