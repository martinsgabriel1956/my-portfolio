import {
  Contact,
  Costura,
  Education,
  type Estacao,
  Experience,
  Hero,
  Projects,
  projectGroupsOf,
  Skills,
} from "./_components";
import { getCertifications } from "./_components/education/action/get-certification";
import { getEducation } from "./_components/education/action/get-education";
import { getExperiences } from "./_components/experience/action";
import { getSkillCategories } from "./_components/skills/action";

export default async function Home() {
  const [experiences, categories, education, certifications] =
    await Promise.all([
      getExperiences(),
      getSkillCategories(),
      getEducation(),
      getCertifications(),
    ]);
  const projectGroups = projectGroupsOf(experiences);

  // Só entram no panorama (e na lombada) os painéis que têm conteúdo.
  const paineis = [
    { id: "inicio", label: "início", node: <Hero key="inicio" /> },
    projectGroups.length > 0 && {
      id: "projetos",
      label: "projetos",
      node: <Projects key="projetos" groups={projectGroups} />,
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
    { id: "contato", label: "contato", node: <Contact key="contato" /> },
  ].filter((p) => p !== false);

  const estacoes: Estacao[] = paineis.map(({ id, label }) => ({ id, label }));

  return (
    <>
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-linho focus:px-4 focus:py-3 focus:font-semibold focus:text-tabua"
      >
        Pular para os projetos
      </a>
      <main
        id="panorama"
        className="panorama"
        aria-label="Seções do portfólio; no computador, role para o lado"
      >
        {paineis.map((p) => p.node)}
      </main>
      <Costura estacoes={estacoes} />
    </>
  );
}
