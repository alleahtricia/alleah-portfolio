import { Award, GraduationCap } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { certifications, education } from "@/lib/resume-data"

export function CertificationsEducation() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Certifications
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {certifications.map((cert) => (
              <Card key={cert.name} size="sm">
                <CardContent className="flex items-start gap-3">
                  <Award aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Education
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {education.map((edu) => (
              <Card key={edu.degree} size="sm">
                <CardContent className="flex items-start gap-3">
                  <GraduationCap aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">
                      {edu.school} &middot; {edu.location}
                    </p>
                    <p className="text-xs text-muted-foreground">{edu.period}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Separator className="mt-16" />
    </section>
  )
}
