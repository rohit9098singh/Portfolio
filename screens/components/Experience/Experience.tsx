"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section className="section-padding py-24 bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto border border-white/10"></div>
      </motion.div>

      <div className="max-w-3xl mx-auto  px-4 md:p-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden bg-slate-900 border border-white/10 ">
            <CardContent className="p-0">
              <div className="p-6 border-b border-white/10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                    Frontend Developer Intern at :
                    </h3>
                    <h4 className="text-lg font-medium text-blue-500">
                      StamperHR Pvt. Ltd.
                    </h4>
                  </div>
                  <div className="flex items-center text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Jan 2025 – Oct 2025</span>
                  </div>
                </div>
                <div className="flex items-center mt-2 text-gray-300">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Bengaluru, India</span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3 list-disc pl-5">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-white"
                  >
                    Developed the landing page and multiple reusable components with 25% performance boost
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-white"
                  >
                    20+ PRs on GitHub, 4th top contributor
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-white"
                  >
                    Used: React.js, Tailwind CSS, Next.js, Git
                  </motion.li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-slate-800 text-blue-400 shadow-sm border border-blue-900 rounded text-xs">
                    React.js
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-blue-400 shadow-sm border border-blue-900 rounded text-xs">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-blue-400 shadow-sm border border-blue-900 rounded text-xs">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-blue-400 shadow-sm border border-blue-900 rounded text-xs">
                    Git
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
