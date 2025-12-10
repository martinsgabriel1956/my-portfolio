import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExperienceCard } from "./_components/experience-card";
import { EXPERIENCES } from "./utils";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 relative"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto px-6">
        {/* Section header */}
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

          {EXPERIENCES.map((exp, index) => (
            <article
              key={exp.company}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-linear-to-r from-primary to-secondary glow-primary ${index % 2 === 0
                    ? "left-0 md:left-1/2 md:-translate-x-1/2"
                    : "left-0 md:left-1/2 md:-translate-x-1/2"
                  } -translate-x-1/2 md:translate-x-0`}
                aria-hidden="true"
              />

              <div
                className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
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
