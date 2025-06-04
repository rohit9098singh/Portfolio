"use client"
import Contact from "@/screens/components/Contact/Contact";
import Experience from "@/screens/components/Experience/Experience";
import Hero from "@/screens/components/Hero/Hero";
import Navbar from "@/screens/components/Navbar/Navbar";
import Projects from "@/screens/components/Project/Project";
import Skills from "@/screens/components/Skills/Skills";
import { useRef } from "react";
import { motion } from "framer-motion"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="w-full h-auto overflow-hidden">
      <Navbar
        onHeroClick={() => scrollToSection(heroRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onExperienceClick={() => scrollToSection(experienceRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <div ref={heroRef}>
        <Hero
          onProjectsClick={() => scrollToSection(projectsRef)}
          onContactClick={() => scrollToSection(contactRef)}
        />
      </div>
      <motion.div
        ref={skillsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Skills />
      </motion.div>
      <motion.div
        ref={experienceRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Experience />
      </motion.div>
      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Projects />
      </motion.div>
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}
