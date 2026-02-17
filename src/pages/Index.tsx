import { useState, useCallback } from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ResumeSection from "@/components/sections/ResumeSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

const sections: Record<string, React.FC<any>> = {
  home: HomeSection,
  about: AboutSection,
  resume: ResumeSection,
  portfolio: PortfolioSection,
  blog: BlogSection,
  contact: ContactSection,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [displayedSection, setDisplayedSection] = useState("home");
  const [transitioning, setTransitioning] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = useCallback(
    (section: string) => {
      if (section === activeSection) return;
      setTransitioning(true);
      setTimeout(() => {
        setActiveSection(section);
        setDisplayedSection(section);
        setTransitioning(false);
      }, 250);
    },
    [activeSection]
  );

  const ActiveComponent = sections[displayedSection];

  return (
    <div className="min-h-screen bg-background flex items-start justify-center p-4 md:p-8">
      <div className="flex w-full max-w-6xl gap-6 relative">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-30 lg:hidden w-10 h-10 rounded-xl bg-card flex items-center justify-center text-foreground border border-border"
        >
          <Menu size={18} />
        </button>

        {/* Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 card-surface p-6 md:p-10 min-h-[90vh] overflow-hidden">
          <div
            className={`transition-all duration-300 ease-in-out ${
              transitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <ActiveComponent
              key={displayedSection}
              onNavigate={handleNavigate}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
