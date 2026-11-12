"use client";

import { useEffect, useState } from "react";

export type Estacao = { id: string; label: string };

const DESKTOP = "(min-width: 901px)";
const REDUZ = "(prefers-reduced-motion: reduce)";

function comportamento(): ScrollBehavior {
  return matchMedia(REDUZ).matches ? "auto" : "smooth";
}

/**
 * A lombada deitada embaixo da página. Mostra o avanço da leitura
 * (furo cheio = lido, ferrugem = atual) e, no desktop, faz a roda do
 * mouse andar pelo panorama na horizontal.
 */
export function Costura({ estacoes }: { estacoes: Estacao[] }) {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const panorama = document.getElementById("panorama");
    if (!panorama) return;
    const paineis = estacoes
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const marcar = () => {
      const horizontal = matchMedia(DESKTOP).matches;
      const ponto = horizontal
        ? panorama.scrollLeft + innerWidth * 0.3
        : scrollY + innerHeight * 0.35;
      let indice = 0;
      paineis.forEach((painel, i) => {
        const inicio = horizontal ? painel.offsetLeft : painel.offsetTop;
        if (inicio <= ponto) indice = i;
      });
      setAtual(indice);
    };

    // No desktop, a roda vertical anda pelo panorama; um painel que rola por dentro rola primeiro.
    const roda = (event: WheelEvent) => {
      if (!matchMedia(DESKTOP).matches) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const painel = (event.target as Element).closest<HTMLElement>(".painel");
      if (painel && painel.scrollHeight > painel.clientHeight + 2) {
        const noFim =
          painel.scrollTop + painel.clientHeight >= painel.scrollHeight - 2;
        const noTopo = painel.scrollTop <= 0;
        if ((event.deltaY > 0 && !noFim) || (event.deltaY < 0 && !noTopo))
          return;
      }
      event.preventDefault();
      panorama.scrollBy({
        left: event.deltaY * 1.2,
        behavior: comportamento(),
      });
    };

    marcar();
    panorama.addEventListener("scroll", marcar, { passive: true });
    window.addEventListener("scroll", marcar, { passive: true });
    window.addEventListener("resize", marcar);
    panorama.addEventListener("wheel", roda, { passive: false });
    return () => {
      panorama.removeEventListener("scroll", marcar);
      window.removeEventListener("scroll", marcar);
      window.removeEventListener("resize", marcar);
      panorama.removeEventListener("wheel", roda);
    };
  }, [estacoes]);

  return (
    <nav
      aria-label="Seções"
      className="fixed inset-x-0 bottom-0 z-10 flex h-[var(--barra)] items-center border-t bg-tabua px-6 max-[900px]:px-3"
    >
      <ol className="flex flex-1 items-center">
        {estacoes.map(({ id, label }, i) => {
          const estado = i < atual ? "lido" : i === atual ? "atual" : undefined;
          const ultima = i === estacoes.length - 1;
          return (
            <li
              key={id}
              data-estado={estado}
              className={
                ultima ? "flex items-center" : "flex flex-1 items-center"
              }
            >
              <a
                href={`#${id}`}
                aria-current={i === atual ? "location" : undefined}
                onClick={(event) => {
                  const alvo = document.getElementById(id);
                  const panorama = document.getElementById("panorama");
                  if (!alvo || !panorama) return;
                  event.preventDefault();
                  if (matchMedia(DESKTOP).matches) {
                    panorama.scrollTo({
                      left: alvo.offsetLeft,
                      behavior: comportamento(),
                    });
                  } else {
                    alvo.scrollIntoView({ behavior: comportamento() });
                  }
                  alvo.focus({ preventScroll: true });
                }}
                className="flex min-h-11 min-w-11 items-center justify-center gap-2.5 text-sm whitespace-nowrap text-linho-gasto transition-colors hover:text-linho [[data-estado]_&]:text-linho"
              >
                <span className="furo" aria-hidden="true" />
                <span className="max-[900px]:sr-only">{label}</span>
              </a>
              {!ultima && <span className="corrente" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
