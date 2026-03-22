import { GraduationCap, Briefcase, GitBranch, Award } from "lucide-react";
import { useScrollAnimation } from "./useScrollAnimation";

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
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2
          className={`section-heading text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About <span className="glow-text">Me</span>
        </h2>
        <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-secondary" />

        <div
          className={`glass-card p-8 md:p-10 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            B.E. in Information Technology (Honors in AI & ML) from{" "}
            <span className="text-foreground font-medium">Rajiv Gandhi Institute of Technology</span>, Mumbai. 
            CGPA <span className="text-secondary font-semibold">9.1</span>. 
            Passionate about clean architecture, distributed systems, and building APIs that scale. 
            Currently working as{" "}
            <span className="text-primary font-medium">Software Engineer 1</span> at WonderBiz Technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`glass-card-hover p-6 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
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
