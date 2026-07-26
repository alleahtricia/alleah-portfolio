import { personalInfo } from "@/lib/resume-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-gradient-to-b from-fuchsia-100/60 to-transparent dark:from-fuchsia-950/30">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-8 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-foreground">
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
