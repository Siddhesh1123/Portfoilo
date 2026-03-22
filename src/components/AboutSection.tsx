import { GraduationCap, Briefcase, GitBranch, Award, BookOpen, MapPin, Calendar } from "lucide-react";
import { useScrollAnimation } from "./useScrollAnimation";
import avatarImg from "@/assets/siddhesh-avatar.png";

const stats = [
  { icon: <GraduationCap size={24} />, value: "9.1", label: "GPA" },
  { icon: <Briefcase size={24} />, value: "4+", label: "Internships" },
  { icon: <Award size={24} />, value: "2+", label: "Years Exp" },
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

        {/* Photo + Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
          {/* Photo */}
          <div
            className={`lg:col-span-2 flex justify-center lg:justify-start transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border-2 border-glass-border">
                <img
                  src={avatarImg}
                  alt="Siddhesh Wayal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-xl border border-primary/30">
                <span className="text-xs font-mono text-secondary">💻 Open to Work</span>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Hi, I'm <span className="glow-text">Siddhesh</span> 👋
            </h3>
            <p className="text-primary font-medium text-sm mb-6 font-mono">
              Software Engineer · Full-Stack Developer · System Designer
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                I'm a Software Engineer who thrives at the intersection of <span className="text-foreground font-medium">backend engineering</span>, <span className="text-foreground font-medium">distributed systems</span>, and <span className="text-foreground font-medium">modern web development</span>. With a strong foundation in system design and API architecture, I specialize in building high-performance, production-grade applications that scale elegantly under real-world demands.
              </p>
              <p>
                My journey spans from crafting <span className="text-secondary font-medium">RESTful APIs handling thousands of concurrent requests</span> to designing <span className="text-secondary font-medium">microservice architectures</span> with robust authentication, real-time communication, and containerized deployments. I've delivered end-to-end solutions across healthcare, education, and enterprise asset management domains.
              </p>
              <p>
                Currently at <span className="text-primary font-medium">WonderBiz Technologies</span>, I architect and develop distributed backend services using C#, ASP.NET Core, and EF Core — optimizing for performance, reliability, and maintainability across high-throughput production environments.
              </p>
              <p>
                I enjoy solving complex engineering challenges — whether that's optimizing database queries, designing event-driven architectures, building CI/CD pipelines, or creating pixel-perfect frontend experiences. I believe great software is built at the intersection of <span className="text-foreground font-medium">clean code</span>, <span className="text-foreground font-medium">thoughtful design</span>, and <span className="text-foreground font-medium">relentless iteration</span>.
              </p>
            </div>
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
                  <span key={course} className="tag-badge text-xs">
                    {course}
                  </span>
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
