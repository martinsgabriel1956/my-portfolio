"use client";

import { useEffect, useState } from "react";

export type Estacao = { id: string; label: string };

const DESKTOP = "(min-width: 901px)";
const REDUZ = "(prefers-reduced-motion: reduce)";

// O movimento do slider infinito do Infusion: alvo + lerp a cada quadro, e um parallax nos títulos.
const LERP = 0.05;
const VELOCIDADE = 1.75;
const PASSO_MAX = 150;
// Depois de um gesto, o panorama assenta no próximo painel na direção dele: nunca para entre duas seções.
const ASSENTA_MS = 160;
// Positivo: o título adianta em vez de atrasar; negativo cortaria o título do painel que espia à direita.
const PARALLAX = 0.1;
// No celular, quanto da altura da tela se rola entre um painel e outro. Uma tela inteira (o zip) deixava
// 84% da rolagem parada; um terço ainda empilha os painéis sem a sensação de travado.
const VAO = 0.35;
// No celular, cada painel (menos a capa) segura a rolagem por pelo menos meia tela: um flick a partir da
// capa para nos projetos em vez de passar direto por eles.
const PERMANENCIA = 0.5;
// O que o Tab alcança dentro de um painel (o roving tabindex fica de fora: só o item ativo tem tabindex 0).
const TABULAVEIS =
  "a[href], button:not([disabled]), input, select, textarea, [tabindex]";
const tabulaveis = (painel: HTMLElement) =>
  [...painel.querySelectorAll<HTMLElement>(TABULAVEIS)].filter(
    (el) =>
      el.tabIndex >= 0 && el.getClientRects().length && !el.closest("[inert]"),
  );
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
 * O trilho fino embaixo da página. Mostra o avanço da leitura (estação
 * cheia = lida, ferrugem = atual, aro e tracejado = por ler) e, no desktop,
 * faz a roda do mouse e as setas andarem pelo panorama na horizontal.
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
    // Painel para onde o trilho está rolando suave; o foco nele não pode cortar o caminho.
    let destino = -1;
    // Shift+Tab chega ao painel anterior pelo fim dele, não pelo topo.
    let focarNoFim = false;
    const focar = (painel: HTMLElement) =>
      ((focarNoFim && tabulaveis(painel).at(-1)) || painel).focus({
        preventScroll: true,
      });
    // Leva ao painel e o foca. No celular o painel só fica focável (visível) ao chegar: empilhar foca nele.
    const irPara = (painel: HTMLElement, noFim = false) => {
      const i = paineis.indexOf(painel);
      if (i < 0) return;
      focarNoFim = noFim;
      if (matchMedia(DESKTOP).matches) deslizar(painel.offsetLeft);
      else if (i !== ativo) {
        destino = i;
        scrollTo({ top: inicios[i], behavior: comportamento() });
        return;
      }
      focar(painel);
    };

    let vao = 0;
    const medirPilha = () => {
      // O CSS só empilha com este sinal: sem JS, o celular fica numa coluna comum que rola.
      document.documentElement.dataset.empilha = "";
      vao = panorama.clientHeight * VAO;
      let fim = 0;
      inicios = paineis.map((painel, i) => {
        if (i) fim += vao;
        const inicio = fim;
        const rolagem = painel.scrollHeight - painel.clientHeight;
        fim += i
          ? Math.max(rolagem, panorama.clientHeight * PERMANENCIA)
          : rolagem;
        return inicio;
      });
      const altura = `${fim + innerHeight}px`;
      if (document.body.style.height !== altura)
        document.body.style.height = altura;
    };
    const empilhar = () => {
      // Mede ao empilhar; depois, só no resize e no ResizeObserver. Medir a cada scroll lia o layout
      // logo depois de escrever o scrollTop dos painéis, e o navegador recalculava tudo por evento.
      if (ativo < 0) medirPilha();
      // Cada painel rola por dentro conforme a página; os anteriores ficam no fim, os próximos no topo.
      paineis.forEach((painel, i) => {
        painel.scrollTop = scrollY - inicios[i];
      });
      let indice = 0;
      inicios.forEach((inicio, i) => {
        if (inicio - vao / 2 <= scrollY) indice = i;
      });
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
      if (indice === destino) {
        destino = -1;
        focar(paineis[indice]);
      }
      return indice;
    };
    const desempilhar = () => {
      delete document.documentElement.dataset.empilha;
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

    // Assenta no primeiro painel na direção do gesto, a partir de onde ele parou.
    // Um toque de poucos pixels (o trackpad treme) volta para o painel de onde saiu.
    let sentido = 0;
    let espera = 0;
    let partida = 0;
    const assentar = () => {
      espera = 0;
      const max = panorama.scrollWidth - panorama.clientWidth;
      const inicios = paineis.map((p) => Math.min(p.offsetLeft, max));
      const perto = inicios[indiceAtual(alvo)];
      const x =
        Math.abs(alvo - partida) < 40
          ? perto
          : sentido > 0
            ? (inicios.find((i) => i >= alvo - 1) ?? max)
            : ([...inicios].reverse().find((i) => i <= alvo + 1) ?? 0);
      deslizar(x);
    };
    const andar = (delta: number) => {
      const de = quadro ? alvo : panorama.scrollLeft;
      if (!espera) partida = de;
      deslizar(de + delta);
      sentido = Math.sign(delta);
      clearTimeout(espera);
      espera = window.setTimeout(assentar, ASSENTA_MS);
    };

    // No desktop, a roda vertical anda pelo panorama.
    const roda = (event: WheelEvent) => {
      if (!matchMedia(DESKTOP).matches) return;
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
      if (!direcao || !matchMedia(DESKTOP).matches) return;
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

    // No celular os painéis fora da tela ficam escondidos (e fora do Tab). No fim de um painel, o Tab
    // leva ao próximo; no começo, Shift+Tab leva ao fim do anterior.
    const tab = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || ativo < 0) return;
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const painel = paineis[ativo];
      const vizinho = paineis[ativo + (event.shiftKey ? -1 : 1)];
      const aqui = document.activeElement;
      if (!vizinho || !aqui || !painel.contains(aqui)) return;
      const dentro = tabulaveis(painel);
      const naBorda = event.shiftKey
        ? aqui === painel || aqui === dentro[0]
        : aqui === (dentro.at(-1) ?? painel);
      if (!naBorda) return;
      event.preventDefault();
      irPara(vizinho, event.shiftKey);
    };
    // Quem rola por conta própria no meio de um pulo assume o controle: o pulo não foca nada depois.
    const assumir = () => {
      destino = -1;
    };

    // Foco (Tab, link de pular) num painel: no desktop o panorama encosta o painel na borda, para o
    // trilho dizer a seção certa; no celular a página rola até ele.
    const foco = (event: FocusEvent) => {
      const i = paineis.findIndex((p) => p.contains(event.target as Node));
      if (matchMedia(DESKTOP).matches) {
        if (i >= 0) deslizar(paineis[i].offsetLeft);
        return;
      }
      if (i >= 0 && i !== ativo && i !== destino) scrollTo({ top: inicios[i] });
    };

    // Toda âncora para dentro de um painel (estações, CTA da capa, link de pular, #faixa-NN) passa por aqui:
    // no celular o painel de destino está escondido, e o pulo nativo não o alcança.
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
    const painelDoHash = () =>
      location.hash
        ? document.getElementById(location.hash.slice(1))?.closest(".painel")
        : paineis[0];
    const voltar = () => {
      const painel = painelDoHash();
      if (painel instanceof HTMLElement) irPara(painel);
    };

    // No celular, a altura de um painel muda sem rolagem (troca de projeto, fonte que chega): remede
    // a pilha e mantém o lugar dentro do painel ativo, senão o próximo gesto cai na seção vizinha.
    const observador = new ResizeObserver(() => {
      if (ativo < 0) return;
      // No meio de um pulo, só remede: segurar o lugar no painel de partida cortaria o caminho.
      if (destino >= 0) {
        medirPilha();
        return;
      }
      const dentro = paineis[ativo].scrollTop;
      medirPilha();
      scrollTo({ top: inicios[ativo] + dentro, behavior: "instant" });
      marcar();
    });
    for (const painel of paineis)
      for (const filho of painel.children) observador.observe(filho);
    const redimensionar = () => {
      medirBordas();
      if (ativo >= 0) medirPilha();
      marcar();
    };

    medirBordas();
    marcar();
    // Abrir já com #contato ou #faixa-NN: no celular o pulo nativo não achou o painel escondido.
    if (location.hash) voltar();
    document.addEventListener("click", ancora);
    window.addEventListener("popstate", voltar);
    panorama.addEventListener("focusin", foco);
    panorama.addEventListener("scroll", marcar, { passive: true });
    window.addEventListener("scroll", marcar, { passive: true });
    window.addEventListener("resize", redimensionar);
    panorama.addEventListener("wheel", roda, { passive: false });
    window.addEventListener("keydown", tecla);
    window.addEventListener("keydown", tab);
    window.addEventListener("touchstart", assumir, { passive: true });
    window.addEventListener("wheel", assumir, { passive: true });
    return () => {
      window.removeEventListener("keydown", tecla);
      window.removeEventListener("keydown", tab);
      window.removeEventListener("touchstart", assumir);
      window.removeEventListener("wheel", assumir);
      document.removeEventListener("click", ancora);
      window.removeEventListener("popstate", voltar);
      observador.disconnect();
      panorama.removeEventListener("focusin", foco);
      desempilhar();
      panorama.removeEventListener("scroll", marcar);
      window.removeEventListener("scroll", marcar);
      window.removeEventListener("resize", redimensionar);
      panorama.removeEventListener("wheel", roda);
      cancelAnimationFrame(quadro);
      clearTimeout(espera);
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
                // Alvo em px: com o texto ampliado, seis estações ainda cabem na barra do celular.
                className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2.5 text-sm whitespace-nowrap text-linho-gasto transition-[color,background-color,border-color] hover:text-linho [[data-estado]_&]:text-linho"
              >
                <span className="estacao" aria-hidden="true" />
                {/* No celular só a estação atual diz o nome: uma navegação só, e legível. */}
                <span
                  className={
                    i === atual
                      ? "max-[900px]:min-w-0 max-[900px]:truncate"
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
