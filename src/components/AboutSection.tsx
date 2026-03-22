import { GraduationCap, Briefcase, GitBranch, Award, Calendar } from "lucide-react";
import { useScrollAnimation } from "./useScrollAnimation";

const stats = [
  { icon: <GraduationCap size={24} />, value: "9.1", label: "GPA" },
  { icon: <Briefcase size={24} />, value: "4+", label: "Internships" },
  { icon: <Award size={24} />, value: "1+", label: "Years Exp" },
  { icon: <GitBranch size={24} />, value: "33", label: "GitHub Repos" },
];



const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2
          className={`section-heading text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About <span className="glow-text">Me</span>
        </h2>
        <div className="w-16 h-1 mx-auto mb-16 rounded-full bg-gradient-to-r from-primary to-secondary" />

        {/* Bio */}
        <div
          className={`glass-card-hover p-6 md:p-8 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
            Hi, I'm <span className="glow-text">Siddhesh</span> 
          </h3>
          <p className="text-primary font-medium text-sm mb-6 font-mono">
            Software Engineer 1 · Full-Stack Developer · ASP.NET Core Developer
          </p>

          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              I'm a <span className="text-foreground font-medium">Software Engineer 1</span> and <span className="text-foreground font-medium">Full-Stack Developer</span> with deep expertise across two distinct stacks — <span className="text-foreground font-medium">ASP.NET Core on the .NET side</span> and the <span className="text-foreground font-medium">MERN stack</span> on the JavaScript side. I specialize in high-performance, production-grade applications that scale elegantly under real-world demands.
            </p>
            <p>
              On the <span className="text-secondary font-medium">.NET stack</span>, I architect distributed backend services using <span className="text-secondary font-medium">C#, ASP.NET Core Web API, and EF Core</span> — designing RESTful APIs, microservice architectures, event-driven pipelines with <span className="text-secondary font-medium">RabbitMQ</span>, and real-time telemetry systems backed by <span className="text-secondary font-medium">InfluxDB</span>. I handle end-to-end auth with <span className="text-secondary font-medium">JWT & OAuth</span> and containerize deployments using <span className="text-secondary font-medium">Docker</span>.
            </p>
            <p>
              On the <span className="text-primary font-medium">MERN stack</span>, I build full-stack JavaScript applications with <span className="text-primary font-medium">MongoDB, Express.js, React, and Node.js</span> — delivering everything from dynamic SPAs and admin dashboards to automated workflow systems and RESTful backend services.
            </p>
            <p>
              On the frontend, I craft modern, responsive UIs with <span className="text-foreground font-medium">React, Angular, TypeScript, Tailwind CSS, and SCSS</span> — building clean component architectures and pixel-perfect experiences that complement the backend systems I engineer.
            </p>
            <p>
              Currently at <span className="text-primary font-medium">WonderBiz Technologies</span>, delivering full-stack solutions across industrial IoT, asset management, and enterprise domains — optimizing every layer for performance, reliability, and long-term maintainability.
            </p>
          </div>
        </div>



        {/* Education Card */}
        <div
          className={`glass-card-hover p-6 md:p-8 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <GraduationCap size={22} className="text-primary" />
            <h3 className="font-heading font-semibold text-lg text-foreground">Education</h3>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h4 className="font-heading font-semibold text-foreground text-base mb-1">
                B.E. Information Technology
              </h4>
              <p className="text-muted-foreground text-sm mb-1">
                <span className="text-foreground font-medium">MCT's Rajiv Gandhi Institute of Technology</span> — University of Mumbai
              </p>
              <p className="text-secondary text-sm font-semibold mb-3">
                GPA: 9.1/10 • Honors in AI & ML
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Data Structures & Algorithms", "System Design", "OOPs", "DBMS", "Software Engineering", "Computer Architecture", "Project Management"].map((course) => (
                  <span key={course} className="tag-badge text-xs">{course}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono shrink-0">
              <Calendar size={14} />
              <span>Dec 2021 – May 2025</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`glass-card-hover p-6 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${500 + i * 100}ms` }}
            >
              <div className="text-primary mb-3 flex justify-center">{s.icon}</div>
              <div className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;