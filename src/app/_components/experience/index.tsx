import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { ExperienceCard } from "./_components/experience-card";
import { getExperiences } from "./action";

export async function Experience() {
  const experiencesData = await getExperiences();

  return (
    <section
      id="experience"
      className="py-24 relative"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="font-mono text-sm text-muted-foreground">
              Experiência Profissional
            </span>
          </div>
          <h2
            id="experience-heading"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Onde <span className="gradient-text">trabalhei</span>
          </h2>
        </header>

        <div className="max-w-4xl mx-auto relative">
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary via-secondary to-transparent md:-translate-x-1/2"
            aria-hidden="true"
          />

          {experiencesData.map((exp, index) => (
            <article
              key={exp.company}
              className={cn("relative mb-12 md:mb-16", {
                "md:pr-[50%] md:text-right": index % 2 === 0,
                "md:pl-[50%]": index % 2 !== 0,
              })}
            >
              <div
                className={
                  cn("absolute top-0 w-4 h-4 rounded-full bg-linear-to-r from-primary to-secondary glow-primary -translate-x-1/2 md:translate-x-0", {
                    "left-0 md:left-1/2 md:-translate-x-1/2": index % 2 === 0,
                    "right-0 md:right-1/2 md:translate-x-1/2": index % 2 !== 0,
                  })}
                aria-hidden="true"
              />

              <div
                className={cn("ml-8 md:ml-0", {
                  "md:mr-8": index % 2 === 0,
                  "md:ml-8": index % 2 !== 0,
                })}
              >
                <ExperienceCard experience={exp} index={index} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
