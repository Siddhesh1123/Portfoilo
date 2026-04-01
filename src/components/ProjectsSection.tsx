import { useScrollAnimation } from "./useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Factory Device Monitoring System (Wmind)",
    description:
      "Scalable industrial IoT platform for real-time device monitoring, configuration, and asset-based signal management. Built Device Configuration APIs, integrated OPC UA + Modbus protocols, and developed a telemetry pipeline pushing live data to InfluxDB with threshold-based alerting.",
    stack: [".NET (C#)", "Web API", "React.js", "SQL Server", "InfluxDB", "Modbus", "OPC UA", "Docker"],
    features: ["Real-time Signal Monitoring", "OPC UA + Modbus", "InfluxDB Telemetry", "Docker"],
    tags: ["Full-Stack", ".NET", "IoT"],
    highlight: true,
    // github: "https://github.com/Siddhesh1123",
  },
  {
    title: "Asset Hierarchy Management System",
    description:
      "Enterprise-grade asset hierarchy platform with RESTful APIs supporting hierarchical CRUD operations, real-time updates via SignalR, and Docker containerization for seamless deployment across environments.",
    stack: ["ASP.NET Core", "EF Core", "SQL Server", "React", "Tailwind CSS", "Docker"],
    features: ["JWT & OAuth Auth", "SignalR Real-time", "Serilog Logging", "Docker"],
    tags: ["Full-Stack", ".NET", "Docker"],
    highlight: true,
    github: "https://github.com/Siddhesh1123/AssetHierarchyAPI",
  },
  {
    title: "Appointment Management System",
    description:
      "Production-ready appointment scheduling platform with granular role-based access control, JWT authentication, and automated email notification pipeline for seamless appointment lifecycle management.",
    stack: ["NestJS", "PostgreSQL", "Prisma", "React", "TypeScript", "Docker"],
    features: ["Role-based Access", "JWT Auth", "Email Notifications", "Prisma ORM"],
    tags: ["Full-Stack", "NestJS", "TypeScript"],
    highlight: true,
    github: "https://appointment-system-blond.vercel.app/",
  },
  {
    title: "Job Portal Dashboard",
    description:
      "Feature-rich job portal dashboard with multi-page routing, intelligent search & filtering, responsive Nebular-powered UI, and comprehensive application management with form validation.",
    stack: ["Angular 19", "TypeScript", "Nebular", "Angular Material", "Bootstrap"],
    features: ["Job Search & Filter", "Application Forms", "Responsive Dashboard", "Dynamic Data"],
    tags: ["Frontend", "Angular", "SPA"],
    github: "https://github.com/Siddhesh1123/job-portal-dashboard",
  },
  {
    title: "Admin Dashboard",
    description:
      "Modern enterprise admin dashboard SPA with dynamic light/dark theme switching, modular component architecture, API integration via services, and interactive stats panels with real-time data handling.",
    stack: ["Angular 19", "TypeScript", "Nebular", "Angular Material", "Bootstrap"],
    features: ["Theme Switching", "Scalable Architecture", "API Integration", "Form Validation"],
    tags: ["Frontend", "Angular", "Enterprise"],
    github: "https://github.com/Siddhesh1123/admindashboard",
  },
  {
    title: "MovieNest",
    description:
      "Sleek movie discovery platform with real-time API integration, dynamic search functionality, and responsive design — deployed on Vercel for lightning-fast global access.",
    stack: ["React", "Node.js", "Tailwind CSS", "REST API", "Vercel"],
    features: ["API Integration", "Responsive UI", "Vercel Deploy", "Dynamic Search"],
    tags: ["Frontend", "React"],
    github: "https://movie-nest.vercel.app/",
    link: "#",
  },
  {
    title: "Internship Accelerator",
    description:
      "End-to-end platform automating internship document verification workflows, replacing manual faculty processing with an intelligent approval system, analytics dashboard, and real-time email notifications.",
    stack: ["Node.js", "React", "MongoDB"],
    features: ["Doc Verification", "Approval System", "Analytics Dashboard", "Email Alerts"],
    tags: ["Full-Stack", "MERN"],
    github: "https://github.com/Kaustubh01/Internship",
  },
  {
    title: "Eduspark EdTech Platform",
    description:
      "Gamified EdTech platform with interactive learning modules, progress tracking, and seamless full-stack integration driving 3x higher user engagement compared to traditional interfaces.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: ["Gamified UI", "Full-stack Integration", "Progress Tracking"],
    tags: ["Full-Stack", "EdTech"],
    github: "https://github.com/OmkarLande/paradox_eduspark",
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "Classic strategy game with intelligent win detection across rows, columns, and diagonals, complete game history tracking, and turn-based state management for smooth competitive gameplay.",
    stack: ["JavaScript", "HTML", "CSS"],
    features: ["Win Detection", "Game History", "State Management", "Interactive UI"],
    tags: ["Frontend", "JavaScript"],
    github: "https://github.com/Siddhesh1123/tic-tac-toe-game",
  },
];

const FeaturedCard = ({ project, delay, isVisible }) => (
  <div
    className={`glass-card-hover p-6 md:p-8 flex flex-col group transition-all duration-700 relative overflow-hidden ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div
      className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 blur-2xl"
      style={{ background: "hsl(var(--primary))" }}
    />
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
        <h3 className="font-heading font-bold text-foreground text-lg leading-snug">
          {project.title}
        </h3>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={16} />
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
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
    <div className="flex flex-wrap gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
      {project.stack.map((tech) => (
        <span key={tech} className="tag-badge text-xs">{tech}</span>
      ))}
    </div>
  </div>
);

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const featured = projects.filter((p) => p.highlight);
  const others = projects.filter((p) => !p.highlight);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2
          className={`section-heading text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Featured <span className="glow-text">Projects</span>
        </h2>
        <p
          className={`text-center text-muted-foreground text-sm mb-2 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          A collection of projects that showcase my expertise across the full stack
        </p>
        <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-secondary" />

        {/* Featured — Row 1: full width */}
        <div className="mb-5">
          <FeaturedCard project={featured[0]} delay={200} isVisible={isVisible} />
        </div>

        {/* Featured — Row 2: 2 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {featured.slice(1).map((project, i) => (
            <FeaturedCard
              key={project.title}
              project={project}
              delay={300 + i * 100}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Other projects label */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">More Projects</span>
          <div className="flex-1 h-px bg-border/40" />
          {/* swipe hint — only visible on mobile */}
          <span className="text-xs text-muted-foreground/50 font-mono md:hidden">swipe →</span>
        </div>

        {/* Other projects — horizontal scroll on mobile, 3-col grid on desktop */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {/* Mobile: horizontal scroll strip */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:hidden" style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
            {others.map((project) => (
              <div
                key={project.title}
                className="glass-card-hover p-5 flex flex-col group shrink-0"
                style={{ width: "78vw", maxWidth: "320px", scrollSnapAlign: "start" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-semibold text-foreground text-sm leading-snug pr-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={14} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-semibold rounded bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag-badge text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 3-col grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((project, i) => (
              <div
                key={project.title}
                className={`glass-card-hover p-6 flex flex-col group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-semibold text-foreground text-base leading-snug pr-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
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
                <div className="flex flex-wrap gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag-badge text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;