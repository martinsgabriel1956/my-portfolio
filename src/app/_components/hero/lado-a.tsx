"use client";

import { useState } from "react";
import { ArteColisao } from "../colisao";
import type { Faixa } from "../projects";

const DESKTOP = "(min-width: 901px)";

/**
 * A arte e a lista de faixas da capa, ligadas: passar, focar ou (no celular)
 * tocar uma faixa dobra a linha da trajetória dela.
 */
export function LadoA({ faixas }: { faixas: Faixa[] }) {
  const [foco, setFoco] = useState(0);
  const [escolhendo, setEscolhendo] = useState(false);
  const escolher = (i: number) => {
    setFoco(i);
    setEscolhendo(true);
  };

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ArteColisao
          rastros={faixas}
          foco={foco}
          data-escolhendo={escolhendo || undefined}
          className="colisao absolute top-[52%] left-[66%] w-[min(124vh,86vw)] -translate-x-1/2 -translate-y-1/2 max-[900px]:top-[45%] max-[900px]:left-[70%] max-[900px]:w-[160vw]"
        />
      </div>
      {faixas.length > 0 && (
        <nav
          aria-labelledby="lado-a"
          // O fundo chapado faz as linhas impressas pararem na lista, como no verso de um disco.
          className="absolute top-6 right-8 z-[2] w-[min(330px,26vw)] bg-ferrugem px-4 py-3 max-[900px]:top-auto max-[900px]:right-5 max-[900px]:bottom-[116px] max-[900px]:left-5 max-[900px]:w-auto max-[900px]:p-0"
        >
          <p
            id="lado-a"
            className="mb-2 text-sm font-medium max-[900px]:sr-only"
          >
            lado a · {faixas.length} faixas
          </p>
          <ol
            className="text-[15px] leading-snug max-[900px]:grid max-[900px]:grid-cols-4 max-[900px]:gap-1"
            onMouseLeave={() => setEscolhendo(false)}
          >
            {faixas.map((faixa, i) => (
              <li key={faixa.id}>
                <a
                  href={`#${faixa.id}`}
                  onMouseEnter={() => escolher(i)}
                  onFocus={() => escolher(i)}
                  onBlur={() => setEscolhendo(false)}
                  onClick={(event) => {
                    // No celular o toque escolhe a faixa; a lista completa está no painel de projetos.
                    if (matchMedia(DESKTOP).matches) return;
                    event.preventDefault();
                    escolher(i);
                  }}
                  data-foco={i === foco || undefined}
                  className="grid grid-cols-[1.75rem_1fr] py-0.5 underline-offset-4 data-foco:font-medium data-foco:underline max-[900px]:flex max-[900px]:min-h-11 max-[900px]:min-w-11 max-[900px]:items-center max-[900px]:justify-center max-[900px]:border max-[900px]:border-tabua/40 max-[900px]:data-foco:border-tabua max-[900px]:data-foco:bg-tabua max-[900px]:data-foco:text-ferrugem max-[900px]:data-foco:no-underline"
                >
                  <span className="tabular-nums">{faixa.numero}</span>
                  <span className="max-[900px]:sr-only">{faixa.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </>
  );
}
