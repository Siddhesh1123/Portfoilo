import { useScrollAnimation } from "./useScrollAnimation";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Asset Hierarchy Management System",
    description:
      "Full-stack asset hierarchy system with RESTful APIs for hierarchical CRUD operations with optimized parent–child data handling.",
    stack: ["ASP.NET Core", "EF Core", "SQL Server", "React", "Tailwind CSS", "Docker"],
    features: ["JWT & OAuth Auth", "SignalR Real-time", "Serilog Logging", "Docker"],
    tags: ["Full-Stack", ".NET", "Docker"],
  },
  {
    title: "Appointment Management System",
    description:
      "Full-stack appointment scheduling system with role-based access, JWT authentication, and secure appointment lifecycle management.",
    stack: ["NestJS", "PostgreSQL", "Prisma", "React", "TypeScript", "Docker"],
    features: ["Role-based Access", "JWT Auth", "Email Notifications"],
    tags: ["Full-Stack", "NestJS", "TypeScript"],
  },
  {
    title: "MovieNest",
    description:
      "Web-based movie database where users can explore a wide selection of films with detailed information on each title.",
    stack: ["React", "Node.js", "Tailwind CSS", "REST API", "Vercel"],
    features: ["API Integration", "Responsive UI", "Vercel Deploy"],
    tags: ["Frontend", "React"],
    link: "#",
  },
  {
    title: "Internship Accelerator",
    description:
      "Web platform to automate internship document verification, replacing manual processing for students and faculty.",
    stack: ["Node.js", "React", "MongoDB"],
    features: ["Doc Verification", "Approval System", "Analytics Dashboard"],
    tags: ["Full-Stack", "MERN"],
  },
  {
    title: "Eduspark EdTech Platform",
    description:
      "Full-stack EdTech platform with a gamified UI enhancing user engagement and seamless data handling.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: ["Gamified UI", "Full-stack Integration"],
    tags: ["Full-Stack", "EdTech"],
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2
          className={`section-heading text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Featured <span className="glow-text">Projects</span>
        </h2>
        <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-secondary" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card-hover p-6 flex flex-col group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-semibold text-foreground text-base leading-snug pr-2">
                  {project.title}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors shrink-0">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="mb-3">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-semibold rounded bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stack revealed on hover */}
              <div className="flex flex-wrap gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag-badge text-xs">
                    {tech}
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

export default ProjectsSection;
