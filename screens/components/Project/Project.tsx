"use client"
import React from "react"
import { motion } from "framer-motion"
import ProjectCard from "./Components/ProjectCard"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BookKart",
      description: "Responsive book marketplace with comprehensive features",
      image: "/book_kart.png",
      technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      features: ["Search & filters", "Wishlist", "Email verification", "JWT auth", "Secure APIs"],
      github: "https://github.com/rohit9098singh",
      demo: "https://github.com/rohit9098singh/Book_Store",
    },
    {
      id: 2,
      title: "LetsMeet",
      description: "Full-stack social platform with real-time features",
      image: "/lets_meet.png",
      technologies: ["Next.js", "Socket.IO", "Node.js", "MongoDB", "Tailwind CSS"],
      features: ["Real-time 1-1 chat", "Group chat", "Media posts", "Auth system"],
      github: "https://github.com/rohit9098singh",
      demo: "https://github.com/rohit9098singh/Lets_Meet",
    },
    {
      id: 3,
      title: "CareerView",
      description: "Job portal for job seekers and admin management",
      image: "/job_portal.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
      features: ["Apply & track jobs", "Admin: post jobs", "Review applicants"],
      github: "https://github.com/rohit9098singh",
      demo: "https://github.com/rohit9098singh/CareerView",
    },
  ]

  return (
    <section className="section-padding py-24 bg-slate-900 border border-white/10" id="projects">
        <div className="mx-auto max-w-7xl">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Projects</h2>
        <div className="w-20 h-1  mx-auto bg-blue-500"></div>
        <p className="mt-6 max-w-2xl mx-auto text-white">
          Here are some of the projects I've worked on. Each project showcases different skills and
          technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 lg:mx-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
        </div>
    </section>
  )
}

export default Projects
