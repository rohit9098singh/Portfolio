"use client"

import { BackgroundBeams } from "@/components/ui/background-beams"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  onProjectsClick: () => void
  onContactClick: () => void
}

const Hero = ({ onProjectsClick, onContactClick }: HeroProps) => {
  return (
    <div className="min-h-screen flex flex-col mt-[64px] md:mt-0 md:flex-row items-center justify-center gap-12 px-4 md:px-6 relative">
      <BackgroundBeams className="absolute -z-10 inset-0 bg-slate-950" />

      {/* Left Section: Text and Buttons */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-8 max-w-xl">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-medium text-white">Hello, I&apos;m</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-500">Rohit Singh</h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-400">Full Stack Developer</h3>
        </div>

        <p className="max-w-2xl text-lg md:text-xl text-white">
          Crafting web experiences with performance and design in mind.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button onClick={onProjectsClick} size="lg" className="group bg-blue-500 hover:bg-blue-600 cursor-pointer">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button onClick={onContactClick} size="lg" variant="outline" className="cursor-pointer">
            Contact Me
          </Button>
        </div>

        <div className="flex space-x-4 mt-4">
          <Button variant="outline" size="icon" className="rounded-full bg-gray-200 hover:bg-gray-300">
            <a
              href="https://github.com/rohit9098singh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Github className="h-5 w-5 text-black" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full bg-gray-200 hover:bg-gray-300" asChild>
            <a
              href="https://www.linkedin.com/feed/?trk=onboarding-landing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Linkedin className="h-5 w-5 text-black" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Right Section: Profile Image and Resume Button */}
      <div className="flex flex-col items-center space-y-6">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-blue-500 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border-4 border-blue-500 overflow-hidden shadow-xl bg-slate-900">
            <Image
              src="/myimgae.jpg"
              alt="Rohit Singh"
              width={320}
              height={320}
              className="w-full h-full object-cover object-center  "
              priority
            />
          </div>
        </div>

        <Button
          asChild
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
        >
          <a href="https://drive.google.com/file/d/1ZBAXl_353c6CCZ9to4jAyVLyQYc-v-eQ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <FileText className="h-5 w-5" />
            View My Resume
          </a>
        </Button>
      </div>
    </div>
  )
}

export default Hero
