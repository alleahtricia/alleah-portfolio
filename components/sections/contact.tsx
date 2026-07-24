import { Link2, Mail, MapPin, Phone } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { personalInfo } from "@/lib/resume-data"

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
] as const

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Get in Touch
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Open to Data Analyst and Data Analytics opportunities. Reach out through
        any of the channels below.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {contactMethods.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <CardContent className="flex items-center gap-3">
              <Icon aria-hidden="true" className="size-4 shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-medium">{value}</p>
              </div>
            </CardContent>
          )

          return href ? (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              <Card size="sm" className="transition-colors hover:bg-muted/50">
                {content}
              </Card>
            </a>
          ) : (
            <Card key={label} size="sm">
              {content}
            </Card>
          )
        })}
      </div>
    </section>
  )
}
