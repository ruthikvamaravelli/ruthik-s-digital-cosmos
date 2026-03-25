import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const titles = ["Full Stack Developer", "AI Enthusiast", "UI/UX Craftsman"];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
        >
          Welcome to my world
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text text-glow">Ruthik</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-10 md:h-12 mb-8"
        >
          <span className="text-xl md:text-3xl font-light text-muted-foreground font-mono">
            {text}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
        >
          Building modern web applications that are fast, responsive, and user-friendly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="btn-primary-glow rounded-full">
            View Projects
          </a>
          <a href="/ruthik_resume.pdf" download className="btn-outline-glow rounded-full">
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass neon-border text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-float"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
