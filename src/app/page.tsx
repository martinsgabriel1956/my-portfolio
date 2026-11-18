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

  // Só entram no panorama (e no trilho) os painéis que têm conteúdo.
  const paineis = [
    {
      id: "inicio",
      label: "início",
      node: <Hero key="inicio" faixas={faixas} />,
    },
    faixas.length > 0 && {
      id: "projetos",
      label: "projetos",
      node: <Projects key="projetos" faixas={faixas} />,
    },
    experiences.length > 0 && {
      id: "experiencia",
      label: "experiência",
      node: <Experience key="experiencia" experiences={experiences} />,
    },
    categories.length > 0 && {
      id: "habilidades",
      label: "habilidades",
      node: <Skills key="habilidades" categories={categories} />,
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
      <a
        href={`#${pulo.id}`}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-linho focus:px-4 focus:py-3 focus:font-semibold focus:text-tabua"
      >
        Pular para {pulo.label}
      </a>
      {/* O trilho vem antes no DOM (é fixo no rodapé): quem navega por teclado chega às seções logo. */}
      <Trilho estacoes={estacoes} />
      <main id="panorama" className="panorama" aria-label="Portfólio">
        {paineis.map((p) => p.node)}
      </main>
    </>
  );
}
