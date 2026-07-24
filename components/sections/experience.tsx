import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { experience } from "@/lib/resume-data"

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Experience
      </h2>

      <div className="mt-8 flex flex-col gap-6">
        {experience.map((role) => (
          <Card key={role.company}>
            <CardHeader>
              <CardTitle className="text-lg">{role.title}</CardTitle>
              <CardDescription>
                {role.company} &middot; {role.location}
              </CardDescription>
              <span className="text-xs font-medium text-muted-foreground">
                {role.period}
              </span>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
