"use client";

import { motion } from "framer-motion";
import { Link2, Mail, MapPin, Phone } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/lib/resume-data";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: personalInfo.linkedinLabel,
    href: personalInfo.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: undefined,
  },
] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Contact() {
  return (
    <section id="contact" className="relative isolate scroll-mt-16 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-purple-100 via-purple-50 to-fuchsia-100 dark:from-purple-950 dark:via-purple-950/80 dark:to-fuchsia-950/60"
      >
        <div
          className="absolute bottom-0 left-1/2 size-96 -translate-x-1/2 rounded-full blur-3xl dark:opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, var(--color-purple-400) 0%, var(--color-fuchsia-400) 50%, transparent 70%)",
            opacity: 0.3,
          }}
        />
      </div>

      <motion.div
        className="mx-auto max-w-5xl px-4 py-16 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400"
        />
        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-2xl text-sm text-muted-foreground"
        >
          Open to Data Analyst and Data Analytics opportunities. Reach out through
          any of the channels below.
        </motion.p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {contactMethods.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <CardContent className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-fuchsia-50 text-purple-700 ring-1 ring-purple-200/70 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 dark:from-purple-950 dark:to-purple-900 dark:text-purple-300 dark:ring-purple-800/60">
                  <Icon aria-hidden="true" className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              </CardContent>
            );

            return (
              <motion.div key={label} variants={itemVariants} whileHover={{ y: -3 }}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card
                      size="sm"
                      className="group relative overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                    >
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {content}
                    </Card>
                  </a>
                ) : (
                  <Card size="sm" className="group relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {content}
                  </Card>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
