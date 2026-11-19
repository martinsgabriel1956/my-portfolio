import { ArrowUpRight } from "lucide-react";
import type { Certification, Education as EducationRow } from "@/db/schema";
import { formatYearRange } from "@/lib/utils";

export function Education({
  education,
  certifications,
}: {
  education: EducationRow[];
  certifications: Certification[];
}) {
  return (
    <section
      id="formacao"
      tabIndex={-1}
      aria-labelledby="education-heading"
      className="painel"
    >
      <h2 id="education-heading" className="mb-7 text-headline">
        formação
      </h2>
      <div className="grid max-w-[1100px] grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-10 lg:grid-cols-2">
        {education.length > 0 && (
          <div>
            <h3 className="text-title lowercase">Acadêmica</h3>
            <ul className="mt-3">
              {education.map((item) => (
                <li key={item.id} className="border-t py-4">
                  <p className="text-xl leading-snug font-light">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-linho-gasto">
                    {item.institution} ·{" "}
                    <span className="tabular-nums">
                      {formatYearRange(
                        item.startDate,
                        item.isCurrent ? null : item.endDate,
                      )}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {certifications.length > 0 && (
          <div>
            <h3 className="text-title lowercase">Cursos</h3>
            <ul className="mt-3">
              {certifications.map((certification) => (
                <li key={certification.id} className="border-t py-4">
                  {certification.credentialUrl ? (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-baseline gap-1 text-xl leading-snug font-light underline decoration-ferrugem decoration-1 underline-offset-4 hover:decoration-2"
                    >
                      {certification.title}
                      <ArrowUpRight
                        className="size-4 shrink-0 self-center"
                        aria-hidden="true"
                      />
                      <span className="sr-only">
                        (ver credencial, abre em nova aba)
                      </span>
                    </a>
                  ) : (
                    <p className="text-xl leading-snug font-light">
                      {certification.title}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-linho-gasto">
                    {/* "FrontPush · FrontPush": a escola que é o próprio título não se repete. */}
                    {certification.institution.trim().toLowerCase() !==
                      certification.title.trim().toLowerCase() &&
                      `${certification.institution} · `}
                    <span className="tabular-nums">
                      {formatYearRange(
                        certification.startDate,
                        certification.endDate,
                        "em andamento",
                      )}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
