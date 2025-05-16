
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"

interface Refprops{
    onProjectsClick: () => void;
     onContactClick: () => void;
}

const Hero = ({ onProjectsClick, onContactClick }:Refprops) => {
  return (

    <div className="min-h-screen flex items-center justify-center  px-4 md:px-6 relative ">
      <BackgroundBeams className="absolute -z-10 inset-0 bg-slate-950" />

      <div className="flex flex-col  items-center text-center space-y-8 "> // hello to commit 
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-medium text-white">Hello, I&apos;m</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  text-blue-500">Rohit Singh</h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-400">Full Stack Developer</h3>
        </div>

        <p className="max-w-2xl text-lg md:text-xl text-white">
          Crafting web experiences with performance and design in mind.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 ">
          <Button onClick={onProjectsClick} size="lg" className="group bg-blue-500 hover:bg-blue-600 cursor-pointer">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button onClick={onContactClick} size="lg" variant="outline" className="cursor-pointer">
            Contact Me
          </Button>
        </div>

        <div className="flex flex-col mt-8">
          <div className="flex space-x-4 mt-8">
           <Button variant="outline" size="icon" className="rounded-full bg-gray-200" >
                <a href="https://github.com/rohit9098singh" target="_blank">
                  <Github className="h-5 w-5 text-black" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-gray-200" asChild>
                <a href="https://www.linkedin.com/feed/?trk=onboarding-landing" target="_blank">
                  <Linkedin className="h-5 w-5 text-black" />
                </a>
              </Button>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Hero;