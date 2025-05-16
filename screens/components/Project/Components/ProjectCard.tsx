"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    features: string[]
    github: string
    demo: string
}

interface ProjectCardProps {
    project: Project
    index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card className="overflow-hidden h-[77vh] flex flex-col bg-slate-950 text-white border border-slate-800 shadow-none rounded-xl p-0">
                <div className="relative w-full h-[250px] overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-4">
                            <Button size="icon" variant="secondary" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                            </Button>
                            <Button size="icon" variant="secondary" asChild>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-5 w-5" />
                                    <span className="sr-only">Live Demo</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>

                    <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2 text-slate-200">Key Features:</h4>
                        <ul className="list-disc pl-5 text-sm text-slate-400">
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 bg-slate-800 text-blue-400 shadow-sm border border-blue-900 rounded text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default ProjectCard
