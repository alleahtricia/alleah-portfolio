"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experience } from "@/lib/resume-data";

const companyLogos: Record<string, string> = {
  "Pascual Consumer Healthcare Corporation": "/images/pchc.webp",
  "Pepsi-Cola Products Philippines, Inc.": "/images/pepsi.webp",
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl ">
        Experience
      </h2>

      <motion.div
        className="mt-8 flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experience.map((role) => {
          const logo = companyLogos[role.company];

          return (
            <motion.div
              key={role.company}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <Card className="transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{role.title}</CardTitle>
                  <CardDescription>
                    {role.company} &middot; {role.location}
                  </CardDescription>
                  <span className="text-xs font-medium text-muted-foreground">
                    {role.period.includes("Present") ? (
                      <>
                        {role.period.replace("Present", "")}
                        <span className="inline-flex items-center gap-1 font-semibold text-purple-600 dark:text-purple-400">
                          <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-purple-500 opacity-75" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                          </span>
                          Present
                        </span>
                      </>
                    ) : (
                      role.period
                    )}
                  </span>
                  {logo && (
                    <CardAction>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        whileHover={{ scale: 1.08, rotate: 3 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex size-12 items-center justify-center overflow-hidden rounded-xl bg-card ring-1 ring-purple-100 sm:size-14 dark:ring-purple-950"
                      >
                        <Image
                          src={logo}
                          alt={`${role.company} logo`}
                          width={56}
                          height={56}
                          loading="lazy"
                          className="size-full object-contain p-2"
                        />
                      </motion.div>
                    </CardAction>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
