import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CertificationProps } from "./types";

export function Certification(certification: CertificationProps) {
  return (
    <article>
      <Card className="card-gradient border-border hover:border-secondary/30 transition-all duration-300 group h-full">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <CardTitle className="font-bold text-foreground group-hover:text-secondary transition-colors text-base">
                {certification.title}
              </CardTitle>
              <CardDescription className="text-primary font-semibold mt-1">
                {certification.institution}
              </CardDescription>
            </div>
            <time className="font-mono text-xs text-muted-foreground whitespace-nowrap">
              {certification.period}
            </time>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            {certification.description}
          </p>
        </CardContent>
      </Card>
    </article>
  );
}
