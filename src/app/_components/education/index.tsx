import { Award, GraduationCap } from "lucide-react";
import type { Education as EducationSchema } from "@/db/schema";
import { Certification } from "./_component/certification";
import { EducationCard } from "./_component/education-card";
import { getEducation } from "./action";
import { certifications } from "./utils";

export async function Education() {
  const education = await getEducation();

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <GraduationCap
              className="h-4 w-4 text-primary"
              aria-hidden="true"
            />
            <span className="font-mono text-sm text-muted-foreground">
              Formação & Cursos
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Formação & <span className="gradient-text">Cursos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Sempre buscando evoluir e me manter atualizado com as melhores
            práticas do mercado.
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          <section className="mb-12">
            <header className="mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <GraduationCap
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                Formação Acadêmica
              </h3>
            </header>
            <article>
              {education.map((education: EducationSchema) => (
                <EducationCard key={education.id} {...education} />
              ))}
            </article>
          </section>

          <section>
            <header className="mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" aria-hidden="true" />
                Cursos e Certificações
              </h3>
            </header>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((certification) => (
                <Certification key={certification.title} {...certification} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
