"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { certifications, education } from "@/lib/resume-data"

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function CertificationsEducation() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6">
      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Certifications
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400" />

          <motion.div
            className="mt-6 flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Card
                  size="sm"
                  className="group relative overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-purple-500 to-fuchsia-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardContent className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-fuchsia-50 text-purple-700 ring-1 ring-purple-200/70 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 dark:from-purple-950 dark:to-purple-900 dark:text-purple-300 dark:ring-purple-800/60">
                      <Award aria-hidden="true" className="size-4.5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Education
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400" />

          <motion.div
            className="mt-6 flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Card
                  size="sm"
                  className="group relative overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-purple-500 to-fuchsia-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardContent className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-fuchsia-50 text-purple-700 ring-1 ring-purple-200/70 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 dark:from-purple-950 dark:to-purple-900 dark:text-purple-300 dark:ring-purple-800/60">
                      <GraduationCap aria-hidden="true" className="size-4.5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{edu.degree}</p>
                      <p className="text-xs text-muted-foreground">
                        {edu.school} &middot; {edu.location}
                      </p>
                      <p className="text-xs text-muted-foreground">{edu.period}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Separator className="mt-16" />
    </section>
  )
}
