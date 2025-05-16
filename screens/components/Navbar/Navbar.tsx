"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  onHeroClick: () => void
  onSkillsClick: () => void
  onExperienceClick: () => void
  onProjectsClick: () => void
  onContactClick: () => void
}

const Navbar = ({
  onHeroClick,
  onSkillsClick,
  onExperienceClick,
  onProjectsClick,
  onContactClick,
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMenuClick = (callback: () => void) => {
    callback()
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "bg-slate-900" : "bg-slate-800"
        } backdrop-blur-md shadow-sm transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 cursor-pointer">
              <span className="text-xl font-bold text-white">Rohit Singh</span>
            </div>

            <div className="hidden md:flex items-center space-x-8 ">
              <button className="text-white cursor-pointer" onClick={onHeroClick}>Home</button>
              <button className="text-white cursor-pointer" onClick={onSkillsClick}>Skills</button>
              <button className="text-white cursor-pointer" onClick={onExperienceClick}>Experience</button>
              <button className="text-white cursor-pointer" onClick={onProjectsClick}>Projects</button>
              <button className="text-white cursor-pointer" onClick={onContactClick}>Contact</button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
                {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-800 pt-16">
          <div className="flex flex-col items-center space-y-8 p-8">
            <button className="text-xl font-medium text-white cursor-pointer" onClick={() => handleMenuClick(onHeroClick)}>Home</button>
            <button className="text-xl font-medium text-white cursor-pointer" onClick={() => handleMenuClick(onSkillsClick)}>Skills</button>
            <button className="text-xl font-medium text-white cursor-pointer" onClick={() => handleMenuClick(onExperienceClick)}>Experience</button>
            <button className="text-xl font-medium text-white cursor-pointer" onClick={() => handleMenuClick(onProjectsClick)}>Projects</button>
            <button className="text-xl font-medium text-white cursor-pointer" onClick={() => handleMenuClick(onContactClick)}>Contact</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
