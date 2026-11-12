import type { SkillCategory } from "@/db/schema";

export function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <section
      id="habilidades"
      tabIndex={-1}
      aria-labelledby="skills-heading"
      className="painel"
    >
      <h2
        id="skills-heading"
        className="mb-7 text-[clamp(3.4rem,7vw,7rem)] leading-[0.95] font-extralight tracking-[-0.04em]"
      >
        habilidades
      </h2>
      <dl className="grid max-w-[1000px] gap-2 md:grid-cols-2">
        {categories.map((category) => (
          <div key={category.id} className="bg-grafite px-[22px] py-5">
            <dt className="text-[clamp(22px,2vw,28px)] leading-tight font-light tracking-[-0.02em] lowercase">
              {category.title}
            </dt>
            <dd className="mt-2 text-lg leading-snug text-linho-gasto">
              {category.skills.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
