"use client";

import { useState } from "react";
import type { SkillCategory } from "@/db/schema";

// As quatro direções do zip: de onde o recorte abre.
const DIRS = ["right", "bottom", "left", "top"] as const;

/** O hover grid do zip: cada categoria acende um palco onde as habilidades abrem recortadas, com um clarão. */
export function Vitrine({ categories }: { categories: SkillCategory[] }) {
  const [atual, setAtual] = useState(0);

  return (
    <div className="grid gap-8 min-[901px]:grid-cols-[minmax(220px,300px)_1fr]">
      <ul className="flex flex-col max-[900px]:flex-row max-[900px]:flex-wrap max-[900px]:gap-x-4">
        {categories.map((c, i) => (
          <li key={c.id}>
            <button
              type="button"
              aria-controls={`habilidade-${c.id}`}
              aria-pressed={i === atual}
              onMouseEnter={() => setAtual(i)}
              onFocus={() => setAtual(i)}
              onClick={() => setAtual(i)}
              className="min-h-11 py-1 text-left text-[clamp(18px,1.6vw,24px)] leading-tight font-light tracking-[-0.02em] lowercase transition-colors hover:text-linho-gasto aria-pressed:text-ferrugem"
            >
              {c.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="grid content-start">
        {categories.map((c, ci) => (
          <section
            key={c.id}
            id={`habilidade-${c.id}`}
            aria-label={c.title}
            data-atual={ci === atual || undefined}
            className="palco-item flex flex-col gap-6"
          >
            <h3 className="palco-titulo text-[clamp(2rem,4.6vw,4.6rem)] leading-[1.02] font-light tracking-[-0.03em] lowercase">
              {c.title}
            </h3>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2">
              {c.skills.map((skill, i) => (
                <li
                  key={skill}
                  data-dir={DIRS[(i + ci) % 4]}
                  // ponytail: deslocamento pseudoaleatório fixo (o zip sorteia ±10% a cada hover)
                  style={
                    {
                      "--dx": `${((i * 7 + ci * 3) % 21) - 10}%`,
                      "--dy": `${((i * 11 + ci * 5) % 21) - 10}%`,
                    } as React.CSSProperties
                  }
                  className="ladrilho flex min-h-24 items-end overflow-hidden bg-grafite px-[18px] py-4"
                >
                  <span className="text-lg leading-snug">{skill}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
