import { Download, Mail } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center animate-fade-up">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 order-2 md:order-1">
          <p className="text-primary font-medium mb-2 text-sm tracking-widest uppercase">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Ronnie <span className="gold-gradient">Atok</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-3">
            Photographer & Web Developer
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-sm">
            Based in Nairobi, Kenya — I capture moments through my lens and build
            beautiful digital experiences on the web. Passionate about blending creativity
            with code to tell compelling visual stories.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://docs.google.com/document/d/1klPXr0Ho9b05wbGOhC1if9hiz7gHBZRA4XxhmP6qEjk/edit?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Download CV
            </a>
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 md:order-2 shrink-0">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-primary/30">
            <img
              src={profileAvatar}
              alt="Ronnie Atok"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
