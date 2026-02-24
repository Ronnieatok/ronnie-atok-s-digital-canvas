import { MapPin, Mail, Phone, Calendar } from "lucide-react";

const skills = [
  { name: "Photography", level: 98 },
  { name: "AI Prompting", level: 80 },
  { name: "Photo Editing", level: 88 },
  { name: "Photoshop", level: 75 },
  { name: "Canva", level: 80 },
  { name: "Video Editing", level: 65 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 78 },
  { name: "React", level: 72 },
];

const AboutSection = () => {
  return (
    <section className="animate-fade-up">
      <h2 className="section-title">About Me</h2>

      <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
        I'm Ronnie Atok, a front-end developer, photographer, and problem solver from Nairobi, Kenya. I combine technical expertise with creative vision to craft clean, responsive interfaces and visual stories that are both functional and meaningful. My work focuses on building digital products that improve access to services, streamline everyday processes, and create real impact for communities. When I'm not coding, I'm behind the camera, capturing moments and exploring new ways to blend technology with everyday life.
      </p>

      {/* Personal Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="info-item text-sm">
          <span className="info-item-icon"><MapPin size={16} /></span>
          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="text-foreground">Nairobi, Kenya</p>
          </div>
        </div>
        <div className="info-item text-sm">
          <span className="info-item-icon"><Mail size={16} /></span>
          <div>
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="text-foreground">ronnieatok@gmail.com</p>
          </div>
        </div>
        <div className="info-item text-sm">
          <span className="info-item-icon"><Phone size={16} /></span>
          <div>
            <p className="text-xs text-muted-foreground">Phone / WhatsApp</p>
            <p className="text-foreground">+254 705 902 590</p>
          </div>
        </div>
        <div className="info-item text-sm">
          <span className="info-item-icon"><Calendar size={16} /></span>
          <div>
            <p className="text-xs text-muted-foreground">Freelance</p>
            <p className="text-primary">Available</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <h3 className="text-lg font-semibold text-foreground mb-6">My Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm text-foreground">{skill.name}</span>
              <span className="text-xs text-primary font-medium">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
