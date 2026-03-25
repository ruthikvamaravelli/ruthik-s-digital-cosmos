import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Sparkles } from "lucide-react";

const stats = [
  { label: "Projects", value: "15+", icon: Rocket },
  { label: "Technologies", value: "20+", icon: Code2 },
  { label: "Years Coding", value: "3+", icon: Sparkles },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm <span className="text-foreground font-semibold">Vamaravelli Ruthik</span>, a passionate{" "}
              <span className="text-primary">Full Stack Developer</span> and{" "}
              <span className="text-secondary">AI Enthusiast</span>. I love building modern web
              applications that are fast, responsive, and user-friendly.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From <span className="text-foreground">React-based platforms</span> to{" "}
              <span className="text-foreground">AI-driven projects</span>, I enjoy turning ideas into
              functional digital products. I love experimenting with new technologies, improving
              performance, and creating clean, intuitive interfaces.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, I'm exploring the latest in AI/ML, contributing to open-source, or
              designing pixel-perfect UIs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {stats.map(({ label, value, icon: Icon }, i) => (
              <div
                key={label}
                className="glass neon-border rounded-2xl p-6 text-center card-hover-glow"
              >
                <Icon className="mx-auto mb-3 text-primary" size={28} />
                <div className="text-3xl font-bold font-display gradient-text mb-1">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
