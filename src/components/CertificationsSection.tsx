import { useScrollAnimation } from "./useScrollAnimation";
import { Award, Trophy, Medal, BookOpen } from "lucide-react";

const certifications = [
  { icon: <BookOpen size={20} />, title: "Google Cloud Career Launchpad", subtitle: "Cloud Engineer Track" },
  { icon: <BookOpen size={20} />, title: "Full-Stack Web Development", subtitle: "Udemy" },
  { icon: <BookOpen size={20} />, title: "Webflow 101", subtitle: "Webflow" },
  { icon: <BookOpen size={20} />, title: "Python Beginners", subtitle: "Certification" },
];

const achievements = [
  { icon: <Trophy size={20} />, title: "SIH Runner-Up", subtitle: "Smart India Hackathon" },
  { icon: <Medal size={20} />, title: "Agnethon Finalist", subtitle: "Hackathon" },
  { icon: <Award size={20} />, title: "Technical Secretary", subtitle: "ABIT Student Committee" },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2
          className={`section-heading text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Certifications & <span className="glow-text">Achievements</span>
        </h2>
        <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-secondary" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`glass-card-hover p-5 flex items-center gap-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="text-primary shrink-0">{cert.icon}</div>
              <div>
                <h3 className="font-medium text-foreground text-sm">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievements.map((ach, i) => (
            <div
              key={ach.title}
              className={`glass-card-hover p-5 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${600 + i * 100}ms` }}
            >
              <div className="text-secondary flex justify-center mb-3">{ach.icon}</div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{ach.title}</h3>
              <p className="text-xs text-muted-foreground">{ach.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
