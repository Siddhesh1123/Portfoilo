import { useScrollAnimation } from "./useScrollAnimation";
import { Code2, Layout, Server, Database, Cloud, Wrench } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: <Code2 size={20} />,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C#", "SQL"],
  },
  {
    title: "Frontend",
    icon: <Layout size={20} />,
    skills: ["React", "Angular", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    skills: ["ASP.NET Core", "Node.js", "Express.js", "NestJS", "FastAPI"],
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    skills: ["AWS (EC2, S3)", "GCP", "Docker", "CI/CD"],
  },
  {
    title: "Tools",
    icon: <Wrench size={20} />,
    skills: ["Git", "Jira", "Postman", "SSMS", "Agile/Scrum"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2
          className={`section-heading text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tech <span className="glow-text">Stack</span>
        </h2>
        <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-secondary" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`glass-card-hover p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary">{cat.icon}</span>
                <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag-badge hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
