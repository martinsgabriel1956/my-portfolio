import type { Experience as ExperienceRow } from "@/db/schema";
import { formatMonthYear } from "@/lib/utils";
import type { Faixa } from "../projects";

/** As tecnologias que mais se repetem nos projetos de um cargo: a stack dele, sem dado novo. */
function stackDe(faixas: Faixa[], limite = 6) {
  const contagem = new Map<string, number>();
  for (const faixa of faixas)
    for (const tech of faixa.techs)
      contagem.set(tech, (contagem.get(tech) ?? 0) + 1);
  // Map guarda a ordem de chegada, e o sort é estável: no empate vence quem apareceu antes.
  return [...contagem]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limite)
    .map(([tech]) => tech);
}

/** Cada cargo com a prova embaixo: a stack e as faixas que ele rendeu, ligadas ao painel de projetos. */
export function Experience({
  experiences,
  faixas,
}: {
  experiences: ExperienceRow[];
  faixas: Faixa[];
}) {
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
          const doCargo = faixas.filter((f) => f.experienceId === exp.id);
          const stack = stackDe(doCargo);
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
              {/* A prova vem depois da data: no celular a data fica junto do cargo, não no pé da lista. */}
              <div className="md:col-start-1">
                {stack.length > 0 && (
                  <p className="mt-3 text-sm text-linho-gasto">
                    <span className="sr-only">Stack: </span>
                    {stack.join(" · ")}
                  </p>
                )}
                {doCargo.length > 0 && (
                  <ul
                    aria-label={`Projetos na ${exp.company}`}
                    className="mt-2 flex flex-wrap gap-x-6"
                  >
                    {doCargo.map((faixa) => (
                      <li key={faixa.id}>
                        <a
                          href={`#${faixa.id}`}
                          className="inline-flex min-h-11 items-center gap-2 underline decoration-ferrugem decoration-1 underline-offset-4 hover:decoration-2"
                        >
                          <span className="text-sm text-linho-gasto tabular-nums">
                            {faixa.numero}
                          </span>
                          {faixa.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
