"use client"
import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  delay: number
}

const SkillBadge = ({ name, delay }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.04, duration: 0.3 }}
      viewport={{ once: true }}
      className="px-4 py-1 rounded-full text-sm font-medium 
                bg-slate-800 text-blue-400 shadow-sm border border-blue-900"
    >
      {name}
    </motion.div>
  )
}

export default SkillBadge
