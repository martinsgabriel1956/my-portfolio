import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { ExperienceProps, Project } from "./types";

export function ExperienceCard({ experience, index }: ExperienceProps) {
  const { title, company, period, projects } = experience;

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
      <CardHeader className={index % 2 === 0 ? "md:text-right" : ""}>
        <div
          className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
        >
          <div
            className="p-2 rounded-lg bg-primary/10 border border-primary/20"
            aria-hidden="true"
          >
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <div className={index % 2 === 0 ? "md:text-right" : ""}>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-secondary font-semibold">{company}</p>
          </div>
        </div>
        <time
          className={`flex items-center gap-2 mb-6 text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""
            }`}
        >
          <Calendar className="h-4 w-4" aria-hidden="true" />
          <span className="font-mono text-sm">{period}</span>
        </time>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {projects.map((project: Project) => (
            <article
              key={project.name}
              className={`p-4 rounded-lg bg-background/95 border border-border/60 hover:border-primary/20 transition-colors ${index % 2 === 0 ? "md:text-left" : ""
                }`}
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
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
