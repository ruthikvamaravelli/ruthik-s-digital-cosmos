import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 88 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 82 },
      { name: "REST APIs", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "Express.js", level: 80 },
      { name: "Firebase", level: 78 },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: [
      { name: "Python", level: 85 },
      { name: "OpenCV", level: 72 },
      { name: "TensorFlow", level: 65 },
      { name: "Data Analysis", level: 70 },
      { name: "NLP", level: 60 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">What I do</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.2 }}
              className="glass neon-border rounded-2xl p-8 card-hover-glow"
            >
              <cat.icon className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold font-display mb-6">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: catIdx * 0.2 + 0.5, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        style={{
                          boxShadow: "0 0 10px hsl(var(--neon-purple) / 0.5)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
