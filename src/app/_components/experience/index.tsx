import type { Experience as ExperienceRow } from "@/db/schema";
import { formatMonthYear } from "@/lib/utils";

export function Experience({ experiences }: { experiences: ExperienceRow[] }) {
  return (
    <section
      id="experiencia"
      tabIndex={-1}
      aria-labelledby="experience-heading"
      className="painel"
    >
      <h2
        id="experience-heading"
        className="mb-7 text-[clamp(3.4rem,7vw,7rem)] leading-[0.95] font-extralight tracking-[-0.04em]"
      >
        experiência
      </h2>
      <ol className="max-w-[900px]">
        {experiences.map((exp) => {
          const atual = exp.isCurrent || !exp.endDate;
          return (
            <li
              key={exp.id}
              className="grid gap-x-4 gap-y-1 border-t py-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline"
            >
              <div>
                <h3 className="text-[clamp(34px,4vw,56px)] leading-[1.05] font-light tracking-[-0.02em] lowercase">
                  {exp.company}
                </h3>
                <p className="mt-1 text-linho-gasto">{exp.title}</p>
              </div>
              <p className="text-base text-linho-gasto tabular-nums md:order-none">
                <time dateTime={exp.startDate.toISOString()}>
                  {formatMonthYear(exp.startDate)}
                </time>
                {" – "}
                {atual || !exp.endDate ? (
                  <span className="text-ferrugem">atual</span>
                ) : (
                  <time dateTime={exp.endDate.toISOString()}>
                    {formatMonthYear(exp.endDate)}
                  </time>
                )}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
