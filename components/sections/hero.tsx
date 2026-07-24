import { Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { personalInfo, summary } from "@/lib/resume-data";
import { Badge } from "../ui/badge";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-20 sm:px-6 sm:py-28"
    >
      <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 text-md p-3 uppercase">
        Data Analytics Associate
      </Badge>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Hi, I&apos;m {personalInfo.name.split(" ")[0]}. I turn messy data into
        decisions people actually use.
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {summary}
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button
          size="lg"
          nativeButton={false}
          render={
            <a href={personalInfo.resumeFile} download>
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
      </div>
    </section>
  );
}
