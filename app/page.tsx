import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { CertificationsEducation } from "@/components/sections/certifications-education"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <CertificationsEducation />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
