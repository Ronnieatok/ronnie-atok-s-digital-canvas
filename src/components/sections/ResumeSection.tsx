import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    year: "2022 — 2026",
    title: "Freelance Photographer & Web Developer",
    place: "Nairobi, Kenya",
    desc: "Focused on web technologies, software engineering, and UI/UX design principles.",
  },
  {
    year: "2018 — 2022",
    title: "Diploma in Purchasing and supplies Chain Management",
    place: "The Cooperative University of Kenya",
    desc: "Studied principles of procurement and supply: Purchasing processes, supplier selection, tendering, contract management, and ethics in procurement.",
  },
  {
    year: "2013 — 2016",
    title: "Kenya Certificate of Secondary Education",
    place: "JG Kiereini Boys High School",
  },
];

const experience = [
  {
    year: "2025 — Present",
    title: "Freelance Photographer & Web Developer",
    place: "Self-Employed",
    desc: "Building responsive websites and capturing events, portraits, and brand visuals for clients across East Africa.",
  },
  {
    year: "2021 — 2025",
    title: "Junior Web Developer",
    place: "Finn Church Aid, Nairobi Kenya",
    desc: "Developed modern web applications using React and collaborated with design teams on UI implementation.",
  },
  {
    year: "2019 — 2021",
    title: "Photography Assistant",
    place: "Clicpics, Nairobi",
    desc: "Assisted in photo shoots, handled post-production editing, and managed client deliverables.",
  },
];

const ResumeSection = () => {
  return (
    <section className="animate-fade-up">
      <h2 className="section-title">Resume</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary">
              <GraduationCap size={16} />
            </span>
            <h3 className="text-lg font-semibold text-foreground">Education</h3>
          </div>
          <div>
            {education.map((item, i) => (
              <div key={i} className="timeline-item">
                <span className="text-xs text-primary font-medium">{item.year}</span>
                <h4 className="text-sm font-semibold text-foreground mt-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{item.place}</p>
                {item.desc && <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary">
              <Briefcase size={16} />
            </span>
            <h3 className="text-lg font-semibold text-foreground">Experience</h3>
          </div>
          <div>
            {experience.map((item, i) => (
              <div key={i} className="timeline-item">
                <span className="text-xs text-primary font-medium">{item.year}</span>
                <h4 className="text-sm font-semibold text-foreground mt-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{item.place}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
