"use client"

import { motion } from "framer-motion"
import SkillBadge from "./components/SkillBadge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

const Skills=()=> {
  const skillCategories = [
    {
      title: "Technical Skills",
      items: [
        "HTML5", "CSS", "JavaScript", "TypeScript",
        "React.js", "Bootstrap", "TailwindCSS", "Next.js 13",
        "Node.js", "Express", "Redis"
      ]
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Vercel", "Postman", "MongoDB Atlas"]
    },
    {
      title: "Soft Skills",
      items: ["Teamwork", "Problem-solving", "Communication"]
    }
  ]

  return (
    <section className=" bg-slate-900 text-white py-12 px-6 " id="skills">
        <div className="max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="h-1 w-16 bg-blue-500 mx-auto" />
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map(({ title, items }) => (
          <Card
            key={title}
            className=" bg-slate-950 border border-white/10 rounded-2xl p-6 shadow-lg"
          >
            <CardHeader className="text-center pb-0">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center mt-4">
                {items.map((item, i) => (
                  <SkillBadge key={item} name={item} delay={i} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
        </div>
    </section>
  )
}

export default Skills;
