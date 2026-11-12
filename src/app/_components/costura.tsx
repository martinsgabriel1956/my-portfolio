"use client";

import { useEffect, useRef, useState } from "react";

export type Estacao = { id: string; label: string };

const DESKTOP = "(min-width: 901px)";
const REDUZ = "(prefers-reduced-motion: reduce)";

// O movimento do slider infinito do Infusion: alvo + lerp a cada quadro, e um parallax nos títulos.
const LERP = 0.05;
const VELOCIDADE = 1.75;
const PASSO_MAX = 150;
// Positivo: o título adianta em vez de atrasar; negativo cortaria o título do painel que espia à direita.
const PARALLAX = 0.1;

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
  const deslizarPara = useRef<(x: number) => void>(() => {});

  useEffect(() => {
    const panorama = document.getElementById("panorama");
    if (!panorama) return;
    const paineis = estacoes
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const titulos = paineis.map((painel) =>
      painel.querySelector<HTMLElement>("h1, h2"),
    );

    // O panorama persegue o alvo: cada quadro anda 5% do que falta, como o slider do zip.
    let alvo = panorama.scrollLeft;
    let posicao = alvo;
    let quadro = 0;
    const passo = () => {
      posicao += (alvo - posicao) * LERP;
      if (Math.abs(alvo - posicao) < 0.5) posicao = alvo;
      panorama.scrollLeft = posicao;
      quadro = posicao === alvo ? 0 : requestAnimationFrame(passo);
    };
    const deslizar = (x: number) => {
      if (!quadro) posicao = panorama.scrollLeft;
      alvo = Math.min(
        Math.max(x, 0),
        panorama.scrollWidth - panorama.clientWidth,
      );
      if (matchMedia(REDUZ).matches) {
        cancelAnimationFrame(quadro);
        quadro = 0;
        panorama.scrollLeft = alvo;
      } else if (!quadro) {
        quadro = requestAnimationFrame(passo);
      }
    };
    deslizarPara.current = deslizar;

    const marcar = () => {
      const horizontal = matchMedia(DESKTOP).matches;
      // Parallax: o título se desloca proporcional à distância do painel até a borda esquerda.
      const parallax = horizontal && !matchMedia(REDUZ).matches;
      paineis.forEach((painel, i) => {
        const titulo = titulos[i];
        if (!titulo) return;
        titulo.style.translate = parallax
          ? `${painel.getBoundingClientRect().left * PARALLAX}px 0`
          : "";
      });
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
      const delta = Math.max(
        Math.min(event.deltaY * VELOCIDADE, PASSO_MAX),
        -PASSO_MAX,
      );
      deslizar((quadro ? alvo : panorama.scrollLeft) + delta);
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
      cancelAnimationFrame(quadro);
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
                  if (!alvo) return;
                  event.preventDefault();
                  if (matchMedia(DESKTOP).matches) {
                    deslizarPara.current(alvo.offsetLeft);
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
