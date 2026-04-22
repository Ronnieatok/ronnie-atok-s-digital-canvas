import { useState } from "react";
import { ExternalLink, Camera, Code } from "lucide-react";

const categories = ["All", "Photography", "Web Development"];

const projects = [
  {
    title: "Professional Photography Website",
    category: "Photography",
    desc: "Clix Visual is a professional photography studio based in Kenya, with a mission to capture authentic stories through imagery both locally and worldwide.",
    link: "https://clixvisuals.netlify.app/",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    desc: "A full-stack online store built with Wordpress and modern backend APIs.",
    link: "https://nsluxeshop.com/",
  },
  {
    title: "Restaurant Website",
    category: "Web Development",
    desc: "Responsive website for a local restaurant with online menu and reservations.",
    link: "https://eliyeresort.netlify.app/menu",
  },
  {
    title: "Portfolio Dashboard",
    category: "Web Development",
    desc: "Interactive analytics dashboard for tracking creative project metrics.",
    link: "https://ronnieatokwebportfolio.netlify.app/",
  },
  {
    title: "E-commerce Webiste",
    category: "Web Development",
    desc: "Premium Street Beanies from Nairobi.",
    link: "https://beaniebyatok.netlify.app/",
  },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="animate-fade-up">
      <h2 className="section-title">Portfolio</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeFilter === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((project, i) => (
          <div key={project.title} className="project-card p-5">
            <div className="flex items-start justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-primary">
                {project.category === "Photography" ? (
                  <Camera size={14} />
                ) : (
                  <Code size={14} />
                )}
              </span>
              <a
                href={project.link}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{project.title}</h3>
            <p className="text-xs text-primary mb-2">{project.category}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
