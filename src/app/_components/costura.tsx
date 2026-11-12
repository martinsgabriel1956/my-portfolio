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
// No celular, quanto da altura da tela se rola entre um painel e outro (o zip usa uma tela inteira).
const VAO = 0.5;
const POWER3_OUT = "cubic-bezier(0.215, 0.61, 0.355, 1)";
const SETAS: Record<string, number> = {
  ArrowRight: 1,
  ArrowDown: 1,
  ArrowLeft: -1,
  ArrowUp: -1,
};

function comportamento(): ScrollBehavior {
  return matchMedia(REDUZ).matches ? "auto" : "smooth";
}

/**
 * A lombada deitada embaixo da página. Mostra o avanço da leitura
 * (furo cheio = lido, ferrugem = atual) e, no desktop, faz a roda do
 * mouse e as setas andarem pelo panorama na horizontal.
 */
export function Costura({ estacoes }: { estacoes: Estacao[] }) {
  const [atual, setAtual] = useState(0);
  const irPara = useRef<(painel: HTMLElement) => void>(() => {});

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
    // Celular: onde cada painel começa no scrollY da página (o slider fixo do zip).
    let inicios: number[] = [];
    let ativo = -1;
    // Painel para onde a lombada está rolando suave; o foco nele não pode cortar o caminho.
    let destino = -1;
    irPara.current = (painel) => {
      const i = paineis.indexOf(painel);
      if (matchMedia(DESKTOP).matches) deslizar(painel.offsetLeft);
      else if (i >= 0) {
        destino = i;
        scrollTo({ top: inicios[i], behavior: comportamento() });
      }
    };

    const empilhar = () => {
      const vao = panorama.clientHeight * VAO;
      let fim = 0;
      inicios = paineis.map((painel, i) => {
        if (i) fim += vao;
        const inicio = fim;
        fim += painel.scrollHeight - painel.clientHeight;
        return inicio;
      });
      const altura = `${fim + innerHeight}px`;
      if (document.body.style.height !== altura)
        document.body.style.height = altura;
      // Cada painel rola por dentro conforme a página; os anteriores ficam no fim, os próximos no topo.
      paineis.forEach((painel, i) => {
        painel.scrollTop = scrollY - inicios[i];
      });
      let indice = 0;
      inicios.forEach((inicio, i) => {
        if (inicio - vao / 2 <= scrollY) indice = i;
      });
      if (indice === destino) destino = -1;
      if (indice === ativo) return indice;
      if (ativo < 0)
        for (const titulo of titulos) titulo?.style.removeProperty("translate");
      paineis[ativo]?.removeAttribute("data-ativo");
      paineis[indice].setAttribute("data-ativo", "");
      // O título sobe de trás de uma máscara, como o SplitText do zip (inteiro, sem escalonar linhas).
      const titulo = titulos[indice];
      if (ativo >= 0 && titulo && !matchMedia(REDUZ).matches) {
        titulo.animate(
          [
            {
              translate: "0 100%",
              clipPath: "inset(-100% 0 100% 0)",
              opacity: 0,
            },
            { translate: "0 0", clipPath: "inset(0)", opacity: 1 },
          ],
          { duration: 750, easing: POWER3_OUT },
        );
      }
      ativo = indice;
      return indice;
    };
    const desempilhar = () => {
      document.body.style.height = "";
      paineis[ativo]?.removeAttribute("data-ativo");
      ativo = -1;
    };

    const marcar = () => {
      if (!matchMedia(DESKTOP).matches) {
        setAtual(empilhar());
        return;
      }
      if (ativo >= 0) desempilhar();
      // Parallax: o título se desloca proporcional à distância do painel até a borda esquerda.
      const parallax = !matchMedia(REDUZ).matches;
      paineis.forEach((painel, i) => {
        const titulo = titulos[i];
        if (!titulo) return;
        titulo.style.translate = parallax
          ? `${painel.getBoundingClientRect().left * PARALLAX}px 0`
          : "";
      });
      setAtual(indiceAtual());
    };
    const indiceAtual = () => {
      const ponto = panorama.scrollLeft + innerWidth * 0.3;
      let indice = 0;
      paineis.forEach((painel, i) => {
        if (painel.offsetLeft <= ponto) indice = i;
      });
      return indice;
    };

    // Um painel que rola por dentro rola primeiro, antes do panorama andar.
    const painelRola = (painel: HTMLElement | null, paraBaixo: boolean) => {
      if (!painel || painel.scrollHeight <= painel.clientHeight + 2)
        return false;
      return paraBaixo
        ? painel.scrollTop + painel.clientHeight < painel.scrollHeight - 2
        : painel.scrollTop > 0;
    };
    const andar = (delta: number) =>
      deslizar((quadro ? alvo : panorama.scrollLeft) + delta);

    // No desktop, a roda vertical anda pelo panorama.
    const roda = (event: WheelEvent) => {
      if (!matchMedia(DESKTOP).matches) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const painel = (event.target as Element).closest<HTMLElement>(".painel");
      if (painelRola(painel, event.deltaY > 0)) return;
      event.preventDefault();
      andar(
        Math.max(Math.min(event.deltaY * VELOCIDADE, PASSO_MAX), -PASSO_MAX),
      );
    };

    // As setas andam como um dente da roda; ↑/↓ deixam o painel rolar por dentro primeiro.
    const tecla = (event: KeyboardEvent) => {
      const direcao = SETAS[event.key];
      if (!direcao || !matchMedia(DESKTOP).matches) return;
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)
        return;
      const origem = event.target as Element;
      if (origem.closest("input, textarea, select, [contenteditable]")) return;
      const vertical = event.key === "ArrowUp" || event.key === "ArrowDown";
      const painel =
        origem.closest<HTMLElement>(".painel") ??
        paineis[indiceAtual()] ??
        null;
      if (vertical && painelRola(painel, direcao > 0)) return;
      event.preventDefault();
      andar(direcao * PASSO_MAX);
    };

    // Celular: foco (Tab, link de pular) num painel escondido rola a página até ele.
    const foco = (event: FocusEvent) => {
      if (matchMedia(DESKTOP).matches) return;
      const i = paineis.findIndex((p) => p.contains(event.target as Node));
      if (i >= 0 && i !== ativo && i !== destino) scrollTo({ top: inicios[i] });
    };

    marcar();
    panorama.addEventListener("focusin", foco);
    panorama.addEventListener("scroll", marcar, { passive: true });
    window.addEventListener("scroll", marcar, { passive: true });
    window.addEventListener("resize", marcar);
    panorama.addEventListener("wheel", roda, { passive: false });
    window.addEventListener("keydown", tecla);
    return () => {
      window.removeEventListener("keydown", tecla);
      panorama.removeEventListener("focusin", foco);
      desempilhar();
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
                  irPara.current(alvo);
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
