import { Card, CardContent } from "@/components/ui/card"
import { stats, summary } from "@/lib/resume-data"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
        {summary}
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} size="sm" className="text-center">
            <CardContent className="flex flex-col items-center gap-1">
              <span className="font-heading text-2xl font-semibold text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
