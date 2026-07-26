"use client";

import { motion } from "framer-motion";

import { stats, summary } from "@/lib/resume-data";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          About
        </motion.h2>
        <motion.div
          className="mt-2 h-1 w-16 origin-left rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground"
        >
          {summary}
        </motion.p>

        <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-border rounded-2xl border border-border sm:grid-cols-4 sm:divide-y-0">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              className="group relative flex flex-col items-center justify-center gap-1.5 px-4 py-8"
            >
              <span className="bg-gradient-to-br from-purple-600 to-fuchsia-500 bg-clip-text text-3xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110 dark:from-purple-400 dark:to-fuchsia-300 sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </span>
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400 transition-all duration-300 ease-out group-hover:w-10" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
