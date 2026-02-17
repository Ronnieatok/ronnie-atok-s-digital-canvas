import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "5 Tips for Better Golden Hour Photography",
    date: "January 15, 2026",
    excerpt:
      "Learn how to harness the magic of golden hour with these practical tips for capturing stunning natural light portraits and landscapes.",
  },
  {
    title: "Building Responsive Websites with React & Tailwind",
    date: "December 8, 2025",
    excerpt:
      "A walkthrough of my workflow for creating modern, mobile-first web applications using React, Tailwind CSS, and component-driven development.",
  },
  {
    title: "Behind the Lens: My Nairobi Street Photography",
    date: "November 20, 2025",
    excerpt:
      "A personal reflection on what drives my street photography practice in one of Africa's most vibrant cities.",
  },
  {
    title: "From Photographer to Developer: My Journey",
    date: "October 5, 2025",
    excerpt:
      "How my background in visual storytelling shaped my approach to web design and front-end development.",
  },
];

const BlogSection = () => {
  return (
    <section className="animate-fade-up">
      <h2 className="section-title">Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <article key={post.title} className="project-card p-5 flex flex-col">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <Calendar size={12} />
              <span>{post.date}</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
              {post.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">
              {post.excerpt}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-4 hover:gap-2 transition-all"
            >
              Read More <ArrowRight size={12} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
