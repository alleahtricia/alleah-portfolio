"use client";

import { motion } from "framer-motion";
import {
  AppWindow,
  BarChart3,
  CheckSquare,
  ClipboardList,
  Database,
  FileSpreadsheet,
  FileText,
  LayoutDashboard,
  LayoutGrid,
  LineChart,
  Network,
  PieChart,
  Server,
  ShieldCheck,
  Share2,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { skillGroups } from "@/lib/resume-data";

const categoryIcons: Record<string, LucideIcon> = {
  "Data Analysis & Reporting": BarChart3,
  "ERP & Business Systems": Database,
  "Productivity & Collaboration": Users,
  "Business Processes": Workflow,
};

const skillIcons: Record<string, LucideIcon> = {
  "Microsoft Excel": FileSpreadsheet,
  "Power BI": PieChart,
  "SAP Analysis for Microsoft Office": Server,
  "IQVIA Market Data": LineChart,
  "Dashboard & Scorecard Reporting": LayoutDashboard,
  "SAP GUI": AppWindow,
  "SRCS/SRIC Systems": Network,
  "Microsoft 365 (Word, PowerPoint, OneDrive, Forms, Engage)": LayoutGrid,
  Asana: CheckSquare,
  "SOP Development": FileText,
  "Data Governance": ShieldCheck,
  "Cross-functional Reporting": Share2,
  "Project Management": ClipboardList,
};

const groupContainerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const groupItemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const chipContainerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Skills</h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400" />

      <motion.div
        className="mt-8 grid gap-6 sm:grid-cols-2"
        variants={groupContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skillGroups.map((group) => {
          const Icon = categoryIcons[group.category] ?? Workflow;

          return (
            <motion.div key={group.category} variants={groupItemVariants}>
              <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-fuchsia-50 text-purple-700 ring-1 ring-purple-200/70 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 dark:from-purple-950 dark:to-purple-900 dark:text-purple-300 dark:ring-purple-800/60">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">
                      {group.category}
                    </h3>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={chipContainerVariants}
                  >
                    {group.skills.map((skill) => {
                      const SkillIcon = skillIcons[skill];

                      return (
                        <motion.div
                          key={skill}
                          variants={chipVariants}
                          whileHover={{ y: -2 }}
                          className="group/chip relative flex items-center gap-2 overflow-hidden rounded-xl border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-foreground shadow-xs transition-colors duration-300 hover:border-purple-300 hover:shadow-sm dark:hover:border-purple-800"
                        >
                          <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 to-transparent opacity-0 transition-opacity duration-300 group-hover/chip:opacity-100 dark:from-purple-950/50" />
                          {SkillIcon && (
                            <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-700 transition-colors duration-300 group-hover/chip:bg-purple-100 dark:bg-purple-950 dark:text-purple-300 dark:group-hover/chip:bg-purple-900">
                              <SkillIcon
                                aria-hidden="true"
                                className="size-3.5"
                              />
                            </span>
                          )}
                          <span>{skill}</span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
