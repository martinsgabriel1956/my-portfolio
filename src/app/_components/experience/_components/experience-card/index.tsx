import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ExperienceProps } from "./types";
import { useExperienceCard } from "./useExperienceCard";

export function ExperienceCard({ experience, index }: ExperienceProps) {
  const { title, company, startDate, endDate, projects, isCurrent } =
    experience;
  const { formatEndDate } = useExperienceCard({
    endDate,
    isCurrent,
  });

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
      <CardHeader className={cn({
        "md:text-right": index % 2 === 0,
      })}>
        <div
          className={cn("flex items-start gap-3 mb-4", {
            "md:flex-row-reverse": index % 2 === 0,
          })}
        >
          <div
            className="p-2 rounded-lg bg-primary/10 border border-primary/20"
            aria-hidden="true"
          >
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <div className={cn({
            "md:text-right": index % 2 === 0,
          })}>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-secondary font-semibold">{company}</p>
          </div>
        </div>
        <time
          className={cn("flex items-center gap-2 mb-6 text-muted-foreground", {
            "md:justify-end": index % 2 === 0,
          })}
        >
          <Calendar className="h-4 w-4" aria-hidden="true" />
          <span className="font-mono text-sm">
            {startDate.toLocaleDateString()} - {formatEndDate()}
          </span>
        </time>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <article
                key={project.name}
                className={cn("p-4 rounded-lg bg-background/95 border border-border/60 hover:border-primary/20 transition-colors", {
                  "md:text-left": index % 2 === 0,
                })}
              >
                <header className="flex items-center gap-2 mb-2">
                  <ArrowUpRight
                    className="h-4 w-4 text-secondary"
                    aria-hidden="true"
                  />
                  <h4 className="font-semibold text-foreground">
                    {project.name}
                  </h4>
                </header>
                <p className="text-muted-foreground text-sm mb-3">
                  {project.description}
                </p>
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label="Tecnologias utilizadas"
                >
                  {project.techs.map((tech) => (
                    <li key={tech}>
                      <Badge
                        variant="outline"
                        className="font-mono text-xs bg-card/50 hover:bg-card"
                      >
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </article>
            ))
          ) : (
            <p className="text-muted-foreground text-sm italic">
              Nenhum projeto registrado
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
