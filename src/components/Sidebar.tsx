import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ activeSection, onNavigate, isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-72 card-surface p-6 flex flex-col items-center gap-6 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Avatar */}
        <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-primary mt-4">
          <img
            src={profileAvatar}
            alt="Ronnie Atok"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Title */}
        <div className="text-center">
          <h2 className="text-lg font-bold text-foreground">Ronnie Atok</h2>
          <p className="text-xs text-primary font-medium mt-1">Photographer & Web Developer</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border" />

        {/* Info */}
        <div className="w-full space-y-3">
          <div className="info-item text-xs">
            <span className="info-item-icon"><MapPin size={14} /></span>
            <span>Nairobi, Kenya</span>
          </div>
          <div className="info-item text-xs">
            <span className="info-item-icon"><Mail size={14} /></span>
            <span className="truncate">ronnieatok@gmail.com</span>
          </div>
          <div className="info-item text-xs">
            <span className="info-item-icon"><Phone size={14} /></span>
            <span>+254 705 902 590</span>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Navigation */}
        <nav className="w-full flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
              className={`nav-link text-left ${
                activeSection === item.id ? "nav-link-active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="w-full h-px bg-border" />

        {/* Social Links */}
        <div className="flex gap-3">
          <a
            href="https://instagram.com/Notjustatok"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://facebook.com/ronnie.atok.1998"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook size={16} />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
