import type { Experience, ExperienceProject } from "@/db/schema";

/** Um projeto como faixa do disco: o número é o mesmo na capa e no painel de projetos. */
export type Faixa = ExperienceProject & {
  company: string;
  numero: string;
  id: string;
};

/** Projetos de todas as experiências, numerados na ordem em que aparecem. */
export function faixasOf(experiences: Experience[]): Faixa[] {
  return experiences
    .flatMap((exp) =>
      (exp.projects ?? []).map((project) => ({
        ...project,
        company: exp.company,
      })),
    )
    .map((project, i) => {
      const numero = String(i + 1).padStart(2, "0");
      return { ...project, numero, id: `faixa-${numero}` };
    });
}

export function Projects({ faixas }: { faixas: Faixa[] }) {
  return (
    <section
      id="projetos"
      tabIndex={-1}
      aria-labelledby="projects-heading"
      className="painel"
    >
      <h2
        id="projects-heading"
        className="mb-6 text-[clamp(3.4rem,7vw,7rem)] leading-[0.95] font-extralight tracking-[-0.04em]"
      >
        projetos
      </h2>
      <ol className="formacao max-w-[1100px]">
        {faixas.map((faixa, i) => (
          <li
            key={faixa.id}
            id={faixa.id}
            tabIndex={-1}
            className="group grid gap-x-6 gap-y-2 border-t py-5 md:grid-cols-[2.5rem_minmax(0,0.9fr)_minmax(0,1.2fr)]"
            style={{ "--i": Math.min(i, 8) } as React.CSSProperties}
          >
            <span className="pt-1 text-sm text-linho-gasto tabular-nums transition-colors group-hover:text-ferrugem">
              {faixa.numero}
            </span>
            <div>
              <h3 className="text-[clamp(20px,1.7vw,26px)] leading-[1.15] font-light">
                {faixa.name}
              </h3>
              <p className="mt-1 text-sm text-linho-gasto">{faixa.company}</p>
            </div>
            <div>
              <p className="text-base leading-normal text-linho-gasto">
                {faixa.description}
              </p>
              {faixa.techs.length > 0 && (
                <p className="mt-2 text-sm text-linho-gasto">
                  <span className="sr-only">Tecnologias: </span>
                  {faixa.techs.join(" · ")}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
