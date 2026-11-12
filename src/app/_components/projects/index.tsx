import type { Experience, ExperienceProject } from "@/db/schema";
import { DOMAIN_ORDER, DOMAINS } from "@/lib/domains";

type Project = ExperienceProject & { company: string };

/** Projetos de todas as experiências, agrupados na ordem dos domínios; sem domínio vão para "outros projetos". */
export function projectGroupsOf(experiences: Experience[]) {
  const all: Project[] = experiences.flatMap((exp) =>
    (exp.projects ?? []).map((project) => ({
      ...project,
      company: exp.company,
    })),
  );
  const groups = DOMAIN_ORDER.map((domain) => ({
    title: DOMAINS[domain],
    items: all.filter((project) => project.domain === domain),
  }));
  groups.push({
    title: "outros projetos",
    items: all.filter(
      (project) => !project.domain || !(project.domain in DOMAINS),
    ),
  });
  return groups.filter((group) => group.items.length > 0);
}

export function Projects({
  groups,
}: {
  groups: ReturnType<typeof projectGroupsOf>;
}) {
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
      <div className="grid gap-6 lg:gap-4">
        {groups.map((group) => (
          <section
            key={group.title}
            aria-label={group.title}
            className="lg:grid lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-6"
          >
            <h3 className="mb-3 text-[clamp(26px,2.4vw,34px)] leading-[1.05] font-light tracking-[-0.02em] lg:mb-0 lg:pt-3 lg:text-[clamp(22px,1.9vw,30px)]">
              {group.title}
            </h3>
            <ul className="grid gap-2 lg:grid-cols-2">
              {group.items.map((project) => (
                <li
                  key={`${project.company}-${project.name}`}
                  className="aberto group"
                >
                  <div className="pagina">
                    <h4 className="text-[clamp(20px,1.7vw,26px)] leading-[1.15] font-light">
                      {project.name}
                    </h4>
                    <p className="mt-1 text-sm text-linho-gasto group-hover:text-tabua">
                      {project.company}
                    </p>
                  </div>
                  <span className="vinco" aria-hidden="true" />
                  <div className="pagina">
                    <p className="text-base leading-normal text-linho-gasto group-hover:text-tabua">
                      {project.description}
                    </p>
                    {project.techs.length > 0 && (
                      <p className="mt-2 text-sm text-linho-gasto group-hover:text-tabua">
                        <span className="sr-only">Tecnologias: </span>
                        {project.techs.join(" · ")}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
