"use client";

import { useState } from "react";
import { ArteColisao } from "../colisao";
import type { Faixa } from "../projects";
import { DOMINIO } from "../projects/dominio";

/**
 * A arte e a lista de faixas da capa, ligadas: passar ou focar uma faixa
 * dobra a linha da trajetória dela e troca o rótulo do canto, que diz o
 * domínio. No celular a lista e o rótulo somem; os dois estão no painel de
 * projetos.
 */
export function LadoA({ faixas }: { faixas: Faixa[] }) {
  const [foco, setFoco] = useState(0);
  const [escolhendo, setEscolhendo] = useState(false);
  const escolher = (i: number) => {
    setFoco(i);
    setEscolhendo(true);
  };
  const emFoco = faixas[foco];

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ArteColisao
          rastros={faixas}
          foco={foco}
          data-escolhendo={escolhendo || undefined}
          className="colisao absolute top-[52%] left-[66%] w-[min(124vh,86vw)] -translate-x-1/2 -translate-y-1/2 max-[900px]:top-[43%] max-[900px]:left-[70%] max-[900px]:w-[140vw]"
        />
      </div>
      {faixas.length > 0 && (
        <nav
          aria-labelledby="lado-a"
          // O fundo chapado faz as linhas impressas pararem na lista, como no verso de um disco.
          className="absolute top-6 right-8 z-[2] w-[min(330px,26vw)] bg-ferrugem px-4 py-3 max-[900px]:hidden"
        >
          <p id="lado-a" className="mb-2 text-sm font-medium">
            lado a · {faixas.length} projetos
          </p>
          <ol
            className="text-base leading-snug"
            onMouseLeave={() => setEscolhendo(false)}
          >
            {faixas.map((faixa, i) => (
              <li key={faixa.id}>
                <a
                  href={`#${faixa.id}`}
                  onMouseEnter={() => escolher(i)}
                  onFocus={() => escolher(i)}
                  onBlur={() => setEscolhendo(false)}
                  data-foco={i === foco || undefined}
                  className="grid min-h-6 grid-cols-[1.75rem_1fr] py-0.5 underline-offset-4 data-foco:font-medium data-foco:underline"
                >
                  <span className="tabular-nums">{faixa.numero}</span>
                  <span>
                    {faixa.name}
                    {faixa.domain && (
                      <span className="sr-only">, {DOMINIO[faixa.domain]}</span>
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
      {emFoco && (
        // O rótulo da trajetória em foco: o que a curva diz, em palavras. Os links já dizem o mesmo ao leitor de tela.
        <p
          aria-hidden="true"
          className="absolute right-8 bottom-8 z-[2] max-w-[min(330px,26vw)] bg-ferrugem px-4 py-3 max-[900px]:hidden"
        >
          <span className="block text-sm tabular-nums">
            trajetória {emFoco.numero}
            {emFoco.domain && ` · ${DOMINIO[emFoco.domain]}`}
          </span>
          <span className="block text-2xl leading-tight font-medium tracking-[-0.02em]">
            {emFoco.name}
          </span>
        </p>
      )}
    </>
  );
}
