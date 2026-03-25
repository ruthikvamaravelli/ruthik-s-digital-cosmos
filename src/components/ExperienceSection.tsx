import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    org: "Freelance / Personal Projects",
    period: "2022 – Present",
    description: "Building production-ready web apps using React, Node.js, and cloud services.",
  },
  {
    title: "AI/ML Enthusiast",
    org: "Self-directed Learning",
    period: "2023 – Present",
    description: "Exploring computer vision, NLP, and deep learning with Python and TensorFlow.",
  },
  {
    title: "Open Source Contributor",
    org: "GitHub Community",
    period: "2022 – Present",
    description: "Contributing to open-source projects and building reusable developer tools.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">My journey</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-16"
              >
                <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-primary neon-glow" />
                <div className="glass neon-border rounded-2xl p-6 card-hover-glow">
                  <div className="flex items-center gap-2 text-primary text-sm font-mono mb-2">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <h3 className="text-lg font-bold font-display mb-1">{exp.title}</h3>
                  <p className="text-sm text-secondary mb-3">{exp.org}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
