"use client"
import { motion } from "framer-motion"
import ContactLeft from "./components/ContactLeft"
import ContactRight from "./components/ContactRight"

export default function Contact() {
  return (
    <section className="section-padding py-24 bg-slate-950" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let&apos;s Connect</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto "></div>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto  px-4 md:p-0">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto  px-4 md:p-0">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <ContactLeft/>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <ContactRight />
        </motion.div>
      </div>
    </section>
  )
}
