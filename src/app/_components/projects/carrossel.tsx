"use client";

import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArteColisao, grausDe } from "../colisao";
import type { Faixa } from ".";
import { DOMINIO } from "./dominio";

const REDUZ = "(prefers-reduced-motion: reduce)";
// Os eases do zip (GSAP power4 = quint), lidos dos tokens do globals.css: a WAAPI não aceita var().
const ease = (nome: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(nome);
// Escala de todos os tempos: 1 = o ritmo do zip (troca em ~2,3s); menor = mais rápido.
// 0,3: a troca acaba em ~0,7s, para quem passa pelos oito projetos não esperar a cada um.
const RITMO = 0.3;
const CHEIO = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

type Slide = { i: number; chave: number; dir?: 1 | -1 };

/** O carrossel do zip: a faixa atual gira e encolhe para fora, a próxima sobe recortada e o texto nasce de trás de máscaras. */
export function Carrossel({ faixas }: { faixas: Faixa[] }) {
  // Abre no 01: começar no meio fazia parecer que 01 e 02 tinham ficado para trás.
  const [slides, setSlides] = useState<Slide[]>([{ i: 0, chave: 0 }]);
  const [atual, setAtual] = useState(0);
  const animando = useRef(false);
  // Clique durante a troca não se perde: o último pedido espera a troca acabar.
  const pendente = useRef<[number, 1 | -1] | null>(null);
  const chave = useRef(0);
  const palco = useRef<HTMLDivElement>(null);
  const toque = useRef<{ x: number; y: number } | null>(null);
  const total = faixas.length;

  const ir = (destino: number, dir: 1 | -1) => {
    if (animando.current) {
      pendente.current = [destino, dir];
      return;
    }
    if (destino === atual) return;
    setAtual(destino);
    const nova = { i: destino, chave: ++chave.current, dir };
    const velho = palco.current?.lastElementChild as HTMLElement | null;
    if (!velho || matchMedia(REDUZ).matches) {
      setSlides([{ ...nova, dir: undefined }]);
      return;
    }
    animando.current = true;
    const saindo = Number(velho.dataset.chave);
    velho.inert = true;
    velho.animate(
      [
        {},
        {
          transform: `translateY(${dir > 0 ? -200 : 200}%) rotate(30deg) scale(0.25)`,
          opacity: 0,
        },
      ],
      {
        duration: 2000 * RITMO,
        easing: ease("--ease-quint-in-out"),
        fill: "forwards",
      },
    ).onfinish = () => setSlides((s) => s.filter((x) => x.chave !== saindo));
    setTimeout(() => setSlides((s) => [...s, nova]), 750 * RITMO);
  };
  // Conta a partir do último pedido, não do projeto na tela: três cliques rápidos avançam três.
  const passo = (dir: 1 | -1) => {
    const base = pendente.current?.[0] ?? atual;
    ir((base + dir + total) % total, dir);
  };

  // Os links da capa e da experiência (#faixa-NN) escolhem o projeto; quem leva ao painel é o Trilho.
  const irRef = useRef(ir);
  useEffect(() => {
    irRef.current = ir;
  });
  useEffect(() => {
    const escolher = (hash: string) => {
      const i = faixas.findIndex((f) => `#${f.id}` === hash);
      if (i >= 0) irRef.current(i, 1);
      return i >= 0;
    };
    const clique = (event: MouseEvent) => {
      const link = (event.target as Element).closest?.('a[href^="#faixa-"]');
      if (link) escolher(link.getAttribute("href") ?? "");
    };
    // Voltar/avançar para um #faixa-NN reabre aquele projeto.
    const voltar = () => escolher(location.hash);
    escolher(location.hash);
    document.addEventListener("click", clique);
    window.addEventListener("popstate", voltar);
    return () => {
      document.removeEventListener("click", clique);
      window.removeEventListener("popstate", voltar);
    };
  }, [faixas]);

  return (
    <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_minmax(16rem,24rem)] grid-rows-[minmax(0,1fr)] gap-8 max-[900px]:flex max-[900px]:flex-[1_0_auto] max-[900px]:flex-col max-[900px]:gap-4">
      {faixas.map((f) => (
        <span
          key={f.id}
          id={f.id}
          className="pointer-events-none absolute inset-0"
        />
      ))}
      <p className="sr-only" aria-live="polite">
        Projeto {atual + 1} de {total}: {faixas[atual].name}
      </p>
      <div className="flex min-h-0 flex-col gap-4 max-[900px]:flex-[1_0_auto]">
        <div
          ref={palco}
          // Deslizar para o lado troca o projeto; o gesto vertical continua rolando a página.
          onTouchStart={(e) => {
            const t = e.touches[0];
            toque.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchEnd={(e) => {
            const ini = toque.current;
            toque.current = null;
            if (!ini) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - ini.x;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(t.clientY - ini.y))
              passo(dx < 0 ? 1 : -1);
          }}
          // No celular os cartões dividem a mesma célula da grade: a troca sobrepõe, e a altura é a do maior.
          className="relative min-h-0 flex-1 touch-pan-y overflow-hidden max-[900px]:grid max-[900px]:flex-[1_0_auto] max-[900px]:grid-cols-[minmax(0,1fr)]"
        >
          {slides.map((s) => (
            <Cartao
              key={s.chave}
              slide={s}
              faixas={faixas}
              total={total}
              aoChegar={() => {
                setTimeout(() => {
                  animando.current = false;
                  const pedido = pendente.current;
                  pendente.current = null;
                  if (pedido) irRef.current(...pedido);
                }, 100);
              }}
            />
          ))}
        </div>
        {/* No celular, as setas que acenam são os próprios botões; deslizar o cartão também troca. */}
        <div className="deslize flex items-center justify-center gap-1 text-sm text-linho-gasto tabular-nums min-[901px]:hidden">
          <button
            type="button"
            aria-label="Projeto anterior"
            onClick={() => passo(-1)}
            className="flex size-11 items-center justify-center text-ferrugem"
          >
            <ArrowLeft className="size-4 [--d:-1]" aria-hidden="true" />
          </button>
          <p aria-hidden="true">
            deslize · {faixas[atual].numero} / {String(total).padStart(2, "0")}
          </p>
          <button
            type="button"
            aria-label="Próximo projeto"
            onClick={() => passo(1)}
            className="flex size-11 items-center justify-center text-ferrugem"
          >
            <ArrowRight className="size-4 [--d:1]" aria-hidden="true" />
          </button>
        </div>
        {/* No celular o índice com os nomes vem aberto sob as setas: a prova não fica atrás de um clique. */}
        <details open className="group text-sm min-[901px]:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center gap-1.5 text-linho-gasto [&::-webkit-details-marker]:hidden">
            todos os projetos
            <ChevronDown
              className="size-4 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <ol className="border-t">
            {faixas.map((f, i) => (
              <li key={f.id}>
                <button
                  type="button"
                  aria-current={i === atual || undefined}
                  onClick={() => {
                    ir(i, i > atual ? 1 : -1);
                    // O cartão troca acima do índice: leva a vista até ele.
                    palco.current?.scrollIntoView({ block: "nearest" });
                  }}
                  className="grid min-h-11 w-full grid-cols-[1.75rem_1fr] items-center text-left text-linho-gasto aria-current:text-ferrugem"
                >
                  <span className="tabular-nums">{f.numero}</span>
                  <span>
                    {f.name}
                    {f.domain && (
                      <span className="text-linho-gasto">
                        {" "}
                        · {DOMINIO[f.domain]}
                      </span>
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </details>
      </div>
      {/*
        Desktop: as oito faixas à vista, como a contracapa de um disco: número, nome, domínio e uma linha
        da descrição. Quem tem menos de um minuto escaneia a lista; o cartão ao lado é o detalhe da escolhida.
      */}
      <nav aria-label="Projetos" className="max-[900px]:hidden">
        {/* Uma parada só no Tab: as setas andam pela lista (e trocam o projeto), como abas. */}
        <ol
          data-setas=""
          data-rola=""
          className="max-h-full overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--color-ferro)_transparent]"
          onKeyDown={(event) => {
            const delta = {
              ArrowDown: 1,
              ArrowRight: 1,
              ArrowUp: -1,
              ArrowLeft: -1,
            }[event.key];
            const fim = { Home: 0, End: total - 1 }[event.key];
            if (delta === undefined && fim === undefined) return;
            event.preventDefault();
            const base = pendente.current?.[0] ?? atual;
            const destino = fim ?? (base + (delta ?? 0) + total) % total;
            ir(destino, destino > base ? 1 : -1);
            event.currentTarget.querySelectorAll("button")[destino]?.focus();
          }}
        >
          {faixas.map((f, i) => (
            <li key={f.id} className="border-t last:border-b">
              <button
                type="button"
                aria-current={i === atual || undefined}
                tabIndex={i === atual ? 0 : -1}
                onClick={() => ir(i, i > atual ? 1 : -1)}
                className="group grid w-full grid-cols-[1.75rem_minmax(0,1fr)] gap-y-0.5 py-2.5 text-left text-sm text-linho-gasto transition-[color] hover:text-linho"
              >
                <span className="tabular-nums group-aria-current:text-ferrugem">
                  {f.numero}
                </span>
                <span className="text-base text-linho underline-offset-4 group-aria-current:font-medium group-aria-current:underline">
                  {f.name}
                  {f.domain && (
                    <span className="text-sm font-normal text-linho-gasto">
                      {" "}
                      · {DOMINIO[f.domain]}
                    </span>
                  )}
                </span>
                <span className="col-start-2 truncate">{f.description}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

/** Um bloco que sobe de trás de uma máscara, como o SplitText do zip. */
function Mascara({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <span className="subir inline-block">{children}</span>
    </span>
  );
}

function Cartao({
  slide,
  faixas,
  total,
  aoChegar,
}: {
  slide: Slide;
  faixas: Faixa[];
  total: number;
  aoChegar: () => void;
}) {
  const faixa = faixas[slide.i];
  const ref = useRef<HTMLElement>(null);
  // Layout effect: a entrada começa antes da primeira pintura. Com useEffect o cartão novo aparecia
  // inteiro por um quadro (até ~90ms na primeira troca, com o JS ainda frio) e só depois sumia para entrar.
  // biome-ignore lint/correctness/useExhaustiveDependencies: entra uma vez, ao montar
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !slide.dir) return;
    el.animate(
      [
        {
          transform: `translateY(${slide.dir > 0 ? 100 : -100}%)`,
          clipPath:
            slide.dir > 0
              ? "polygon(20% 20%, 80% 20%, 80% 100%, 20% 100%)"
              : "polygon(20% 0%, 80% 0%, 80% 80%, 20% 80%)",
        },
        { transform: "none", clipPath: CHEIO },
      ],
      { duration: 1500 * RITMO, easing: ease("--ease-quint-out") },
    ).onfinish = aoChegar;
    // Palavras do título a partir de 0,75s, uma a cada 0,1s; o resto entra junto, 0,25s antes delas terminarem (tempos do zip, × RITMO).
    const palavras = el.querySelectorAll(".titulo .subir");
    const resto = el.querySelectorAll(".resto .subir");
    const sobe = (alvo: Element, atraso: number) =>
      alvo.animate([{ transform: "translateY(100%)" }, { transform: "none" }], {
        duration: 1000 * RITMO,
        delay: atraso * RITMO,
        easing: ease("--ease-quint-out"),
        fill: "backwards",
      });
    palavras.forEach((p, i) => {
      sobe(p, 750 + i * 100);
    });
    const depois = 750 + (palavras.length - 1) * 100 + 250;
    resto.forEach((r, i) => {
      sobe(r, depois + i * 60);
    });
  }, []);

  return (
    <article
      ref={ref}
      data-chave={slide.chave}
      // Desktop: rola por dentro quando o conteúdo passa da altura (laptop baixo, zoom): cortar escondia a stack.
      // Celular: no fluxo, com a altura do conteúdo; quem rola é a página (o painel), nunca uma fresta.
      data-rola=""
      aria-labelledby={`${faixa.id}-titulo`}
      className="absolute inset-0 flex flex-col overflow-x-hidden overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--color-ferro)_transparent] border bg-grafite p-8 max-[900px]:relative max-[900px]:inset-auto max-[900px]:[grid-area:1/1] max-[900px]:overflow-clip max-[900px]:p-5 [@media(max-height:800px)]:p-6"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[0.12em] -right-[0.04em] text-[clamp(10rem,42vh,26rem)] leading-none font-extralight tracking-[-0.06em] text-ferro tabular-nums select-none"
      >
        {faixa.numero}
      </span>
      {/*
        A contracapa repete a frente: a mesma colisão, com o centro no canto do
        cartão e girada para a trajetória deste projeto (a de linha dupla) entrar
        na diagonal.
      */}
      {/* A moldura recorta a arte: solta, ela faria o cartão rolar por dentro sem ter conteúdo a mais. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ArteColisao
          rastros={faixas}
          foco={slide.i}
          className="absolute top-0 left-0 w-[max(600px,100%)] max-w-[1200px] text-linho-gasto opacity-45"
          style={{
            translate: "-50% -50%",
            rotate: `${45 - grausDe(slide.i, total)}deg`,
          }}
        />
      </div>
      {/* À esquerda: a descrição é texto corrido de até três linhas, e centrada ela perdia a margem de leitura. */}
      <div className="relative mt-auto flex flex-col gap-4 pr-[10%] pb-16 max-[900px]:pr-0 max-[900px]:pb-6 [@media(max-height:800px)]:pb-6">
        <h3
          id={`${faixa.id}-titulo`}
          // wrap-anywhere: com o texto a 200% em 320px, o nome longo esticava o cartão para fora do palco.
          className="titulo text-item wrap-anywhere"
        >
          {faixa.name.split(" ").map((palavra, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: a posição é a identidade da palavra no título
            <span key={i}>
              <Mascara>{palavra}</Mascara>{" "}
            </span>
          ))}
        </h3>
        <div className="resto flex max-w-[52ch] flex-col gap-2">
          <p className="text-sm text-linho-gasto">
            <Mascara>
              {faixa.company}
              {faixa.domain && ` · ${DOMINIO[faixa.domain]}`}
            </Mascara>
          </p>
          {/* A descrição é a prova (não há imagem nem link): em linho, não no tom de metadado. */}
          <p className="text-lg leading-snug text-pretty max-[900px]:text-base max-[900px]:leading-normal">
            <Mascara>{faixa.description}</Mascara>
          </p>
        </div>
      </div>
      <div className="resto relative flex items-end justify-between gap-6 text-sm text-linho-gasto">
        {faixa.techs.length > 0 && (
          <div>
            <p className="mb-2 text-linho">
              <Mascara>tecnologias</Mascara>
            </p>
            {/* Em linha, separadas como na experiência: uma por linha não cabia em laptop baixo. */}
            <ul className="flex flex-wrap gap-x-2 [&>li:not(:last-child)]:after:content-['·'] [&>li:not(:last-child)]:after:ml-2">
              {faixa.techs.map((tech) => (
                <li key={tech}>
                  <Mascara>{tech}</Mascara>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
