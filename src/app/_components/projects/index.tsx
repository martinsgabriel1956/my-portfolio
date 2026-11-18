import type { Experience, ExperienceProject } from "@/db/schema";
import { Carrossel } from "./carrossel";

/** Um projeto como faixa do disco: o número é o mesmo na capa e no painel de projetos. */
export type Faixa = ExperienceProject & {
  company: string;
  experienceId: Experience["id"];
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
        experienceId: exp.id,
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
      className="painel flex flex-col"
    >
      <h2
        id="projects-heading"
        className="mb-6 text-[clamp(3.4rem,7vw,7rem)] leading-[0.95] font-extralight tracking-[-0.04em]"
      >
        projetos
      </h2>
      <Carrossel faixas={faixas} />
    </section>
  );
}
