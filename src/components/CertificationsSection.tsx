import { useScrollAnimation } from "./useScrollAnimation";
import { Award, Trophy, Medal, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Foundational C# with Microsoft",
    issuer: "Microsoft",
    issued: "Feb 2026",
    credentialId: "siddhesh_wayal-fcswm",
    skills: ["C#", "ASP.NET Core"],
    link: "https://www.freecodecamp.org/certification/siddhesh_wayal/foundational-c-sharp-with-microsoft",
  },
  {
    title: "Google Cloud Career Launchpad",
    issuer: "Google Cloud Skills Boost",
    issued: "Jul 2024",
    credentialId: "m8poiseC",
    skills: ["GCP", "Kubernetes", "GKE", "IAM & Security", "Cloud Automation", "Monitoring"],
    link: "https://www.linkedin.com/posts/wayalsiddhesh_google-cloud-career-launchpad-cloud-engineer-activity-7224077296943415297-XdLa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj34vEBiEfW0PYh-X-vqgkw89DUWUHB3cs",
  },
  {
    title: "The Complete Web Developer: Zero to Mastery",
    issuer: "Udemy",
    issued: "Mar 2023",
    credentialId: "UC-394724ef-8168-47d5-b050-af9074b27df7",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "MERN Stack", "JavaScript"],
    link: "https://www.udemy.com/certificate/UC-394724ef-8168-47d5-b050-af9074b27df7/",
  },
  {
    title: "Python for Beginners",
    issuer: "Udemy",
    issued: "Jan 2025",
    credentialId: "UC-623ba6d9-fa10-420e-aa42-ba3e617a95e3",
    skills: ["Python"],
    link: "https://www.udemy.com/certificate/UC-623ba6d9-fa10-420e-aa42-ba3e617a95e3/",
  },
  {
    title: "Webflow 101 Certification",
    issuer: "Webflow",
    issued: "Aug 2023",
    credentialId: null,
    skills: ["Webflow", "Responsive Web Design", "Web Hosting"],
    link: "https://www.linkedin.com/posts/wayalsiddhesh_webflow-101-activity-7092210977722503168-OnUp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj34vEBiEfW0PYh-X-vqgkw89DUWUHB3cs",
  },
  {
    title: "Web Development Training Certificate",
    issuer: "The Big Brand Network",
    issued: "Sep 2023",
    credentialId: null,
    skills: ["WordPress", "Webflow", "SEO", "PHP", "Wix"],
    link: "https://www.linkedin.com/posts/wayalsiddhesh_tbnn-training-activity-7105536337436454912-gBa0?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj34vEBiEfW0PYh-X-vqgkw89DUWUHB3cs",
  },
  {
    title: "Web Development",
    issuer: "Teachnook",
    issued: "Feb 2023",
    credentialId: "TNINTC22-1330",
    skills: ["HTML5", "CSS", "MERN Stack", "Project Management", "Leadership"],
    link: "https://www.linkedin.com/posts/wayalsiddhesh_internship-and-course-completion-activity-7035565141949657089-80ZY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj34vEBiEfW0PYh-X-vqgkw89DUWUHB3cs",
  },
  {
    title: "Letter of Recommendation",
    issuer: "MCT's Rajiv Gandhi Institute Of Technology",
    issued: "Mar 2024",
    credentialId: null,
    skills: [],
    link: null,
  },
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
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2
          className={`section-heading text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Certifications & <span className="glow-text">Achievements</span>
        </h2>
        <p
          className={`text-center text-muted-foreground text-sm mb-2 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Licenses, credentials, and recognitions earned along the way
        </p>
        <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-secondary" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Certifications scrollable list — takes 2 cols */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="font-heading font-semibold text-foreground text-xs uppercase tracking-widest mb-4 px-1 text-muted-foreground">
              Licenses & Certifications
            </h3>

            <div
              className="glass-card overflow-y-auto"
              style={{ maxHeight: "440px" }}
            >
              <div className="divide-y divide-border/40">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-start gap-4 px-5 py-4 hover:bg-primary/5 transition-colors duration-200 group"
                  >
                    {/* Accent dot */}
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />

                    <div className="flex-1 min-w-0">
                      {/* Title + link */}
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-medium text-foreground text-sm leading-snug">
                          {cert.title}
                        </span>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-0.5"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>

                      {/* Meta row */}
                      <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 mt-1">
                        <span className="text-xs text-primary font-medium">{cert.issuer}</span>
                        <span className="text-muted-foreground/30 text-xs">·</span>
                        <span className="text-xs text-muted-foreground">Issued {cert.issued}</span>
                        {cert.credentialId && (
                          <>
                            <span className="text-muted-foreground/30 text-xs">·</span>
                            <span className="text-xs text-muted-foreground/50 font-mono truncate max-w-[180px]">
                              {cert.credentialId}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Skills */}
                      {cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          {cert.skills.map((skill) => (
                            <span key={skill} className="tag-badge text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Achievements vertical list */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="font-heading font-semibold text-foreground text-xs uppercase tracking-widest mb-4 px-1 text-muted-foreground">
              Achievements
            </h3>

            <div className="glass-card divide-y divide-border/40">
              {achievements.map((ach) => (
                <div
                  key={ach.title}
                  className="flex items-center gap-4 px-5 py-5 hover:bg-primary/5 transition-colors duration-200 group"
                >
                  <div className="text-secondary shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                    {ach.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{ach.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{ach.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;