import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    year: "2020 — 2023",
    title: "Bachelor of Science in Computer Science",
    place: "University of Nairobi",
    desc: "Focused on web technologies, software engineering, and UI/UX design principles.",
  },
  {
    year: "2018 — 2020",
    title: "Diploma in Photography",
    place: "Kenya Institute of Media & Technology",
    desc: "Studied composition, lighting, post-processing, and visual storytelling techniques.",
  },
  {
    year: "2014 — 2017",
    title: "Kenya Certificate of Secondary Education",
    place: "Nairobi High School",
    desc: "Graduated with strong grades in sciences and creative arts.",
  },
];

const experience = [
  {
    year: "2023 — Present",
    title: "Freelance Photographer & Web Developer",
    place: "Self-Employed",
    desc: "Building responsive websites and capturing events, portraits, and brand visuals for clients across East Africa.",
  },
  {
    year: "2021 — 2023",
    title: "Junior Web Developer",
    place: "Creative Agency, Nairobi",
    desc: "Developed modern web applications using React and collaborated with design teams on UI implementation.",
  },
  {
    year: "2019 — 2021",
    title: "Photography Assistant",
    place: "Studio 254, Nairobi",
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
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
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
