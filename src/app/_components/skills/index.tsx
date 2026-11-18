import type { SkillCategory } from "@/db/schema";

/**
 * Os créditos do verso do disco: cada categoria com as habilidades em linha,
 * todas à vista. Quem passa o olho lê a stack inteira sem escolher nada.
 */
export function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <section
      id="habilidades"
      tabIndex={-1}
      aria-labelledby="skills-heading"
      className="painel"
    >
      <h2 id="skills-heading" className="mb-7 text-headline">
        habilidades
      </h2>
      <dl className="grid max-w-[1400px] gap-x-12 min-[640px]:grid-cols-2 min-[1200px]:grid-cols-3">
        {categories.map((c) => (
          <div key={c.id} className="border-t py-4">
            <dt className="text-title-sm lowercase">{c.title}</dt>
            <dd className="mt-1.5 leading-relaxed text-linho-gasto">
              {c.skills.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
