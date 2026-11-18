"use client";

import { type KeyboardEvent, useState } from "react";
import { ArteColisao } from "../colisao";
import type { Faixa } from "../projects";
import { DOMINIO, legendaDominios } from "../projects/dominio";

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
  // Em repouso nada está escolhido: nenhuma linha dupla, nenhum rótulo, como a lista sem sublinhado.
  const emFoco = escolhendo ? faixas[foco] : undefined;
  // Uma parada só no Tab: ↑/↓ (e Home/End) andam pela lista, e cada faixa acende como no hover.
  const setas = (event: KeyboardEvent<HTMLOListElement>) => {
    const delta = { ArrowDown: 1, ArrowUp: -1 }[event.key];
    const fim = { Home: 0, End: faixas.length - 1 }[event.key];
    if (delta === undefined && fim === undefined) return;
    event.preventDefault();
    const destino =
      fim ?? (foco + (delta ?? 0) + faixas.length) % faixas.length;
    event.currentTarget.querySelectorAll("a")[destino]?.focus();
  };

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/*
          Composta, não mascarada: centro, tamanho e giro medidos de 1024 a 1920 para nenhuma trajetória
          passar mais de ~16% sob a lista, o rótulo ou o texto (antes, até 100%). O giro leva o setor
          aberto junto, ainda voltado para o título.
        */}
        <ArteColisao
          rastros={faixas}
          foco={emFoco ? foco : undefined}
          data-escolhendo={escolhendo || undefined}
          className="colisao absolute top-[58%] left-[52%] w-[min(112vh,77vw)] -translate-x-1/2 -translate-y-1/2 rotate-[35deg] max-[900px]:top-[43%] max-[900px]:left-[70%] max-[900px]:w-[140vw] max-[900px]:rotate-0"
        />
      </div>
      {faixas.length > 0 && (
        <nav
          aria-labelledby="lado-a"
          data-setas=""
          // O fundo chapado faz as linhas impressas pararem na lista, como no verso de um disco.
          className="absolute top-6 right-8 z-[2] w-[min(330px,26vw)] bg-ferrugem px-4 py-3 max-[900px]:hidden"
        >
          <p id="lado-a" className="text-sm font-medium">
            lado a · {faixas.length} projetos
            {/* Só para quem chega pelo teclado: a lista é uma parada, as setas andam por ela. */}
            <span className="hidden [nav:has(:focus-visible)_&]:inline">
              {" "}
              · use as setas
            </span>
          </p>
          {/* A legenda da arte: o que as curvas dizem, impresso. */}
          <p className="mb-2 text-sm text-balance tabular-nums">
            {legendaDominios(faixas)}
          </p>
          <ol
            className="text-base leading-snug"
            onMouseLeave={() => setEscolhendo(false)}
            onKeyDown={setas}
          >
            {faixas.map((faixa, i) => (
              <li key={faixa.id}>
                <a
                  href={`#${faixa.id}`}
                  tabIndex={i === foco ? 0 : -1}
                  onMouseEnter={() => escolher(i)}
                  onFocus={() => escolher(i)}
                  onBlur={() => setEscolhendo(false)}
                  // Só marca quando alguém escolhe: sublinhada de saída, a 01 parecia já visitada.
                  data-foco={(escolhendo && i === foco) || undefined}
                  className="grid min-h-11 grid-cols-[1.75rem_1fr] items-center underline-offset-4 data-foco:font-medium data-foco:underline [@media(max-height:620px)]:min-h-8"
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
            projeto {emFoco.numero}
            {emFoco.domain && ` · ${DOMINIO[emFoco.domain]}`}
          </span>
          <span className="block text-2xl leading-tight font-medium tracking-[-0.02em]">
            {emFoco.name}
          </span>
          {/* O que o nome não diz: com o que foi feito. */}
          {emFoco.techs.length > 0 && (
            <span className="mt-1 block text-sm">
              {emFoco.techs.slice(0, 3).join(" · ")}
            </span>
          )}
        </p>
      )}
    </>
  );
}
