import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Chat Application",
    description: "A real-time AI-powered chatbot with natural language processing and sleek UI.",
    tags: ["React", "Node.js", "OpenAI", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with cart, payments, and admin dashboard.",
    tags: ["React", "Express", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS for managing portfolio content with markdown support.",
    tags: ["Next.js", "TypeScript", "Tailwind", "MDX"],
    github: "#",
    live: "#",
  },
  {
    title: "Computer Vision App",
    description: "Real-time object detection and image classification using OpenCV and Python.",
    tags: ["Python", "OpenCV", "TensorFlow", "Flask"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">My work</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass neon-border rounded-2xl p-8 card-hover-glow group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
