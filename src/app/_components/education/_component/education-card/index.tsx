import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Education } from "@/db/schema";

export function EducationCard(education: Education) {
  return (
    <Card className="card-gradient border-border hover:border-primary/30 transition-all duration-300">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-lg text-foreground">
              {education.title}
            </CardTitle>
            <CardDescription className="text-secondary font-semibold text-base">
              {education.institution}
            </CardDescription>
          </div>
          <time className="font-mono text-sm text-muted-foreground px-3 py-1 bg-muted/50 rounded-md">
            {education.startDate.getFullYear()} - {education.endDate?.getFullYear()}
          </time>
        </div>
      </CardHeader>
    </Card>
  );
}
