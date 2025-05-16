// components/ContactLeft.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactLeft() {
  return (
    <Card className=" bg-slate-900 border border-white/20  px-4 md:p-0">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-6 text-blue-500">Contact Information</h3>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-200">Email</h4>
              <a href="mailto:rohitsingh95724@gmail.com" className=" hover:text-primary text-gray-200">
                rohitsingh95724@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded -full mr-4">
              <MapPin className="h-5 w-5  text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-200">Location</h4>
              <p className="text-gray-200">Bengaluru, India</p>
            </div>
          </div>

          <div className="pt-6 border-t">
            <h4 className="font-medium mb-4 text-gray-200">Connect with me</h4>
            <div className="flex space-x-4">
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
      </CardContent>
    </Card>
  )
}
