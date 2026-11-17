import type { SkillCategory } from "@/db/schema";
import { Vitrine } from "./vitrine";

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
      <Vitrine categories={categories} />
    </section>
  );
}
