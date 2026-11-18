import {
  Contact,
  Education,
  type Estacao,
  Experience,
  faixasOf,
  Hero,
  Projects,
  Skills,
  Trilho,
} from "./_components";
import { getCertifications } from "./_components/education/action/get-certification";
import { getEducation } from "./_components/education/action/get-education";
import { getExperiences } from "./_components/experience/action";
import { getSkillCategories } from "./_components/skills/action";

// Gerada no build mesmo lendo o banco sem cache (src/db/index.ts): edições no banco saem no próximo deploy.
export const dynamic = "force-static";

export default async function Home() {
  const [experiences, categories, education, certifications] =
    await Promise.all([
      getExperiences(),
      getSkillCategories(),
      getEducation(),
      getCertifications(),
    ]);
  const faixas = faixasOf(experiences);
  const atual = experiences.find((exp) => exp.isCurrent || !exp.endDate);

  // Só entram no panorama (e no trilho) os painéis que têm conteúdo.
  const paineis = [
    {
      id: "inicio",
      label: "início",
      node: <Hero key="inicio" faixas={faixas} atual={atual} />,
    },
    faixas.length > 0 && {
      id: "projetos",
      label: "projetos",
      node: <Projects key="projetos" faixas={faixas} />,
    },
    experiences.length > 0 && {
      id: "experiencia",
      label: "experiência",
      node: (
        <Experience
          key="experiencia"
          experiences={experiences}
          faixas={faixas}
        />
      ),
    },
    categories.length > 0 && {
      id: "habilidades",
      label: "habilidades",
      node: (
        <Skills key="habilidades" categories={categories} faixas={faixas} />
      ),
    },
    (education.length > 0 || certifications.length > 0) && {
      id: "formacao",
      label: "formação",
      node: (
        <Education
          key="formacao"
          education={education}
          certifications={certifications}
        />
      ),
    },
    {
      id: "contato",
      label: "contato",
      node: <Contact key="contato" faixas={faixas} />,
    },
  ].filter((p) => p !== false);

  const estacoes: Estacao[] = paineis.map(({ id, label }) => ({ id, label }));
  // O primeiro painel depois da capa; sem projetos, é a experiência (ou o contato).
  const pulo = estacoes[1];

  return (
    <>
      <div className="abertura" aria-hidden="true">
        <div className="abertura-capa">gm.</div>
      </div>
      {/* Dois pulos: para a prova e para a ação. Contato é sempre o último painel. */}
      {[pulo, estacoes[estacoes.length - 1]]
        .filter((p, i, todos) => p && todos.indexOf(p) === i)
        .map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-linho focus:px-4 focus:py-3 focus:font-semibold focus:text-tabua"
          >
            Pular para {p.label}
          </a>
        ))}
      <main id="panorama" className="panorama" aria-label="Portfólio">
        {paineis.map((p) => p.node)}
      </main>
      {/* O trilho vem depois no DOM (é fixo no rodapé): no Tab, o contato da capa chega antes das seis estações. */}
      <Trilho estacoes={estacoes} />
    </>
  );
}
