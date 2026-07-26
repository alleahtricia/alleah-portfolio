"use client";

import { Download, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, stats, summary } from "@/lib/resume-data";
import { Badge } from "../ui/badge";

const chartAccents = [
  "bg-chart-1",
  "bg-chart-2",
  "bg-chart-3",
  "bg-chart-4",
] as const;

const sparklineBars = [40, 65, 45, 80, 60, 95, 70];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative isolate scroll-mt-16 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/40 via-transparent to-transparent dark:from-purple-950/30" />
        <div
          className="absolute -top-32 left-[15%] size-72 rounded-full blur-3xl dark:opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, var(--color-purple-400) 0%, var(--color-fuchsia-400) 45%, transparent 70%)",
            opacity: 0.35,
          }}
        />
        <div
          className="absolute top-1/4 -right-24 size-80 rounded-full blur-3xl dark:opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 40%, var(--color-violet-400) 0%, var(--color-purple-500) 50%, transparent 70%)",
            opacity: 0.3,
          }}
        />
        <div
          className="absolute inset-0 text-foreground/[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 20%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 20%, black, transparent)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <motion.div
          className="flex flex-col items-start gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants}>
            <Badge className="border border-purple-300 bg-purple-50 text-purple-700 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300 text-md p-3 uppercase font-medium">
              Data Analytics Associate
            </Badge>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Hi, I&apos;m {personalInfo.name.split(" ")[0]}{" "}
            <motion.span
              className="inline-block origin-[70%_70%]"
              animate={{ rotate: [0, 20, -10, 20, -5, 15, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            >
              👋
            </motion.span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            {summary}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 pt-2"
          >
            <Button
              size="lg"
              nativeButton={false}
              render={
                <a
                  href={personalInfo.resumeFile}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download aria-hidden="true" data-icon="inline-start" />
                  Download Resume
                </a>
              }
            />
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail aria-hidden="true" data-icon="inline-start" />
                  Get in Touch
                </a>
              }
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Card className="relative overflow-visible border border-purple-100 bg-card/80 backdrop-blur-sm dark:border-purple-950">
              <CardContent className="flex flex-col items-center gap-5 px-6">
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-muted/30 sm:h-56">
                  <div className="absolute inset-0 flex items-end gap-1.5 px-3 pb-3">
                    {sparklineBars.map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          delay: 0.3 + index * 0.06,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        className={`min-w-0 flex-1 rounded-t-sm ${
                          chartAccents[index % chartAccents.length]
                        } opacity-90`}
                        style={{
                          boxShadow: `0 0 12px var(--color-chart-${
                            (index % chartAccents.length) + 1
                          })`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-card via-transparent to-card" />

                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="relative">
                      <div className="size-32 overflow-hidden rounded-full ring-4 ring-purple-100 dark:ring-purple-950 sm:size-36">
                        <Image
                          src="/images/alleah-img.png"
                          alt={personalInfo.name}
                          width={288}
                          height={288}
                          priority
                          className="size-full object-cover"
                        />
                      </div>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="absolute -right-2 -bottom-1 flex items-center gap-1.5 rounded-full border border-purple-100 bg-background px-2.5 py-1 text-xs font-medium shadow-xs dark:border-purple-950"
                      >
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex size-full animate-ping rounded-full bg-purple-500 opacity-75" />
                          <span className="relative inline-flex size-2 rounded-full bg-purple-600" />
                        </span>
                        Available
                      </motion.span>
                    </div>
                  </div>
                </div>

                <div className="grid w-full grid-cols-2 gap-3">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                      className="rounded-lg bg-muted/50 p-3"
                    >
                      <div
                        className={`mb-1.5 h-1 w-6 rounded-full bg-chart-3`}
                      />
                      <p className="font-mono text-xl font-bold tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
