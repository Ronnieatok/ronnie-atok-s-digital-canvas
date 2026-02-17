import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out, Ronnie will get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="animate-fade-up">
      <h2 className="section-title">Contact</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Have a project in mind or just want to say hello? Feel free to reach
            out — I'd love to hear from you!
          </p>

          <div className="info-item">
            <span className="info-item-icon"><Mail size={16} /></span>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <a href="mailto:ronnieatok@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors">
                ronnieatok@gmail.com
              </a>
            </div>
          </div>

          <div className="info-item">
            <span className="info-item-icon"><Phone size={16} /></span>
            <div>
              <p className="text-xs text-muted-foreground">WhatsApp / Phone</p>
              <a href="https://wa.me/254705902590" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors">
                +254 705 902 590
              </a>
            </div>
          </div>

          <div className="info-item">
            <span className="info-item-icon"><MapPin size={16} /></span>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm text-foreground">Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-secondary text-sm text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-secondary text-sm text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-secondary text-sm text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Send size={14} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
