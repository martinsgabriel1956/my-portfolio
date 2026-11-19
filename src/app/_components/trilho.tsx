"use client";

import { useEffect, useState } from "react";

export type Estacao = { id: string; label: string };

const DESKTOP = "(min-width: 901px)";
const REDUZ = "(prefers-reduced-motion: reduce)";

// O movimento do slider infinito do Infusion: alvo + lerp a cada quadro, e um parallax nos títulos.
// 0,12 responde ao gesto em poucos quadros: a 0,05 a roda parecia arrastar o panorama atrás dela.
const LERP = 0.12;
const VELOCIDADE = 1.75;
const PASSO_MAX = 150;
// Positivo: o título adianta em vez de atrasar; negativo cortaria o título do painel que espia à direita.
const PARALLAX = 0.1;
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
 * O trilho fino embaixo da página. Mostra o avanço da leitura (estação
 * cheia = lida, ferrugem = atual, aro e tracejado = por ler) e, no desktop,
 * faz a roda do mouse e as setas andarem pelo panorama na horizontal.
 * No celular a página é uma coluna comum: o trilho só acompanha a rolagem.
 */
export function Trilho({ estacoes }: { estacoes: Estacao[] }) {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const panorama = document.getElementById("panorama");
    if (!panorama) return;
    const paineis = estacoes
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const titulos = paineis.map((painel) =>
      painel.querySelector<HTMLElement>("h1, h2"),
    );
    const desktop = () => matchMedia(DESKTOP).matches;

    // O panorama persegue o alvo: cada quadro anda uma fração do que falta, como o slider do zip.
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
    // Leva ao painel e o foca: no desktop o panorama anda, no celular a página rola até ele.
    const irPara = (painel: HTMLElement) => {
      if (desktop()) deslizar(painel.offsetLeft);
      else painel.scrollIntoView({ behavior: comportamento() });
      painel.focus({ preventScroll: true });
    };

    // Onde cada painel começa no panorama: medido no resize, não a cada quadro de rolagem.
    let bordas: number[] = [];
    const medirBordas = () => {
      bordas = paineis.map((painel) => painel.offsetLeft);
    };
    // A seção atual é a que ocupa o meio da tela: o trilho nunca nomeia um painel quase todo fora.
    const indiceAtual = (x = panorama.scrollLeft) => {
      const ponto = x + innerWidth * 0.5;
      let indice = 0;
      bordas.forEach((borda, i) => {
        if (borda <= ponto) indice = i;
      });
      return indice;
    };

    const marcar = () => {
      if (!desktop()) {
        // Coluna: atual é o painel que cruza o meio da tela. Só leituras, nenhuma escrita no meio.
        const meio = innerHeight * 0.5;
        let indice = 0;
        paineis.forEach((painel, i) => {
          if (painel.getBoundingClientRect().top <= meio) indice = i;
        });
        for (const titulo of titulos) titulo?.style.removeProperty("translate");
        setAtual(indice);
        return;
      }
      // Parallax: o título se desloca proporcional à distância do painel até a borda esquerda.
      // A posição na tela é a borda guardada menos a rolagem: nenhuma leitura de layout entre as escritas.
      const parallax = !matchMedia(REDUZ).matches;
      const rolagem = panorama.scrollLeft;
      titulos.forEach((titulo, i) => {
        if (!titulo) return;
        titulo.style.translate = parallax
          ? `${(bordas[i] - rolagem) * PARALLAX}px 0`
          : "";
      });
      setAtual(indiceAtual());
    };

    // Um painel (ou o cartão de projeto) que rola por dentro rola primeiro, antes do panorama andar.
    // Folga de 8px: um transbordo de poucos pixels não pode roubar o primeiro dente da roda.
    const rola = (el: HTMLElement, paraBaixo: boolean) =>
      el.scrollHeight > el.clientHeight + 8 &&
      (paraBaixo
        ? el.scrollTop + el.clientHeight < el.scrollHeight - 2
        : el.scrollTop > 0);
    const painelRola = (origem: Element | null, paraBaixo: boolean) => {
      for (
        let el = origem?.closest<HTMLElement>("[data-rola], .painel");
        el;
        el = el.parentElement?.closest<HTMLElement>("[data-rola], .painel")
      )
        if (rola(el, paraBaixo)) return true;
      return false;
    };
    const andar = (delta: number) =>
      deslizar((quadro ? alvo : panorama.scrollLeft) + delta);

    // No desktop, a roda vertical anda pelo panorama, e ele para onde o gesto parou.
    const roda = (event: WheelEvent) => {
      if (!desktop()) return;
      // Ctrl/⌘ + roda e a pinça do trackpad são zoom do navegador: ficam com ele.
      if (event.ctrlKey || event.metaKey) return;
      // Gesto lateral (trackpad): o navegador o entregaria ao painel que rola na vertical
      // (o de projetos), que só desceria. Então o panorama anda aqui também.
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
        andar(Math.max(Math.min(event.deltaX, PASSO_MAX), -PASSO_MAX));
        return;
      }
      if (painelRola(event.target as Element, event.deltaY > 0)) return;
      event.preventDefault();
      andar(
        Math.max(Math.min(event.deltaY * VELOCIDADE, PASSO_MAX), -PASSO_MAX),
      );
    };

    // As setas pulam de painel em painel; ↑/↓ deixam o painel rolar por dentro primeiro.
    const tecla = (event: KeyboardEvent) => {
      const direcao = SETAS[event.key];
      if (!direcao || !desktop()) return;
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)
        return;
      const origem = event.target as Element;
      // Campos e grupos com setas próprias (a lista da capa, a numeração do carrossel) ficam com elas.
      if (
        origem.closest(
          "input, textarea, select, [contenteditable], [data-setas]",
        )
      )
        return;
      const vertical = event.key === "ArrowUp" || event.key === "ArrowDown";
      // ↑/↓ num botão ficam com o botão (e com o leitor de tela).
      if (vertical && origem.closest("button")) return;
      const dentro = origem.closest(".painel")
        ? origem
        : (paineis[indiceAtual()] ?? null);
      if (vertical && painelRola(dentro, direcao > 0)) return;
      event.preventDefault();
      const proximo = paineis[indiceAtual(quadro ? alvo : undefined) + direcao];
      // O foco vai junto: senão o próximo Tab, dentro do painel de antes, puxaria a vista de volta.
      if (proximo) irPara(proximo);
    };

    // Foco (Tab, link de pular) num painel: no desktop o panorama encosta o painel na borda, para o
    // trilho dizer a seção certa. No celular a rolagem nativa já leva o foco à vista.
    const foco = (event: FocusEvent) => {
      if (!desktop()) return;
      const i = paineis.findIndex((p) => p.contains(event.target as Node));
      if (i >= 0) deslizar(paineis[i].offsetLeft);
    };

    // Toda âncora para dentro de um painel (estações, CTA da capa, link de pular, #faixa-NN) passa por aqui:
    // no desktop o pulo nativo não anda o panorama suave, e em nenhum dos dois foca o painel.
    const ancora = (event: MouseEvent) => {
      if (event.button || event.metaKey || event.ctrlKey || event.shiftKey)
        return;
      const link = (event.target as Element).closest?.<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const painel = link
        ? document.getElementById(link.hash.slice(1))?.closest(".painel")
        : null;
      if (!link || !(painel instanceof HTMLElement)) return;
      event.preventDefault();
      // Como a âncora nativa: uma entrada no histórico, para o Voltar voltar à seção de antes.
      if (location.hash !== link.hash) history.pushState(null, "", link.hash);
      irPara(painel);
    };
    // Voltar/avançar: leva ao painel do hash (sem hash, a capa).
    const voltar = () => {
      const painel = location.hash
        ? document.getElementById(location.hash.slice(1))?.closest(".painel")
        : paineis[0];
      if (painel instanceof HTMLElement) irPara(painel);
    };
    const redimensionar = () => {
      medirBordas();
      marcar();
    };

    medirBordas();
    marcar();
    // Abrir já com #contato ou #faixa-NN: no desktop o pulo nativo não anda o panorama.
    if (location.hash && desktop()) voltar();
    document.addEventListener("click", ancora);
    window.addEventListener("popstate", voltar);
    panorama.addEventListener("focusin", foco);
    panorama.addEventListener("scroll", marcar, { passive: true });
    window.addEventListener("scroll", marcar, { passive: true });
    window.addEventListener("resize", redimensionar);
    panorama.addEventListener("wheel", roda, { passive: false });
    window.addEventListener("keydown", tecla);
    return () => {
      window.removeEventListener("keydown", tecla);
      document.removeEventListener("click", ancora);
      window.removeEventListener("popstate", voltar);
      panorama.removeEventListener("focusin", foco);
      panorama.removeEventListener("scroll", marcar);
      window.removeEventListener("scroll", marcar);
      window.removeEventListener("resize", redimensionar);
      panorama.removeEventListener("wheel", roda);
      cancelAnimationFrame(quadro);
    };
  }, [estacoes]);

  return (
    <nav
      aria-label="Seções"
      className="fixed inset-x-0 bottom-0 z-10 flex h-[var(--barra)] items-center border-t bg-tabua px-6 max-[900px]:px-3 max-[359px]:px-1"
    >
      <ol className="flex min-w-0 flex-1 items-center">
        {estacoes.map(({ id, label }, i) => {
          const estado = i < atual ? "lido" : i === atual ? "atual" : undefined;
          const ultima = i === estacoes.length - 1;
          return (
            <li
              key={id}
              data-estado={estado}
              className={
                ultima
                  ? "flex min-w-0 items-center"
                  : "flex min-w-0 flex-1 items-center"
              }
            >
              <a
                href={`#${id}`}
                aria-current={i === atual ? "location" : undefined}
                // Alvo em px: com o texto ampliado, seis estações ainda cabem na barra do celular. min-w-0 no
                // item: sem ele o rótulo da atual não encolhe e empurra "contato" para fora em 320px.
                className="flex min-h-[44px] min-w-[44px] shrink-0 [[data-estado=atual]_&]:shrink items-center justify-center gap-2.5 text-sm whitespace-nowrap text-linho-gasto transition-[color,background-color,border-color] hover:text-linho [[data-estado]_&]:text-linho"
              >
                <span className="estacao" aria-hidden="true" />
                {/* No celular só a estação atual diz o nome; abaixo de 360px nem ela: seis alvos de 44px ocupam a barra. */}
                <span
                  className={
                    i === atual
                      ? "max-[900px]:min-w-0 max-[900px]:truncate max-[359px]:sr-only"
                      : "max-[900px]:sr-only"
                  }
                >
                  {label}
                </span>
              </a>
              {!ultima && <span className="trecho" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
