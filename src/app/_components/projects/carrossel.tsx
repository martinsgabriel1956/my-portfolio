"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArteColisao, grausDe } from "../colisao";
import type { Faixa } from ".";
import { DOMINIO } from "./dominio";

const REDUZ = "(prefers-reduced-motion: reduce)";
// Os eases do zip (GSAP power4 = quint).
const QUINT_IN_OUT = "cubic-bezier(0.86, 0, 0.07, 1)";
const QUINT_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";
// Escala de todos os tempos: 1 = o ritmo do zip (troca em ~2,3s); menor = mais rápido.
const RITMO = 0.6;
const CHEIO = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

type Slide = { i: number; chave: number; dir?: 1 | -1 };

/** O carrossel do zip: a faixa atual gira e encolhe para fora, a próxima sobe recortada e o texto nasce de trás de máscaras. */
export function Carrossel({ faixas }: { faixas: Faixa[] }) {
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
      { duration: 2000 * RITMO, easing: QUINT_IN_OUT, fill: "forwards" },
    ).onfinish = () => setSlides((s) => s.filter((x) => x.chave !== saindo));
    setTimeout(() => setSlides((s) => [...s, nova]), 750 * RITMO);
  };
  // Conta a partir do último pedido, não do projeto na tela: três cliques rápidos avançam três.
  const passo = (dir: 1 | -1) => {
    const base = pendente.current?.[0] ?? atual;
    ir((base + dir + total) % total, dir);
  };

  // Os links da capa (#faixa-NN) escolhem o projeto; o navegador rola até o painel.
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
      if (!link || !escolher(link.getAttribute("href") ?? "")) return;
      // O pulo nativo alinha pelo mais perto e deixa o painel anterior espiando; aqui o painel encosta na borda.
      event.preventDefault();
      const painel = document.getElementById("projetos");
      painel?.scrollIntoView({
        inline: "start",
        block: "nearest",
        behavior: matchMedia(REDUZ).matches ? "auto" : "smooth",
      });
      painel?.focus({ preventScroll: true });
    };
    escolher(location.hash);
    document.addEventListener("click", clique);
    return () => document.removeEventListener("click", clique);
  }, [faixas]);

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4">
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
      <div
        ref={palco}
        // Deslizar para o lado troca o projeto; o gesto vertical continua rolando a página (no celular, ela troca o painel).
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
        className="relative min-h-0 flex-1 touch-pan-y overflow-hidden"
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
      <nav
        aria-label="Projetos"
        className="flex flex-wrap items-center gap-x-6 gap-y-2 max-[900px]:hidden"
      >
        <button
          type="button"
          onClick={() => passo(-1)}
          className="inline-flex min-h-11 items-center gap-1.5 text-sm text-linho-gasto transition-[color,background-color,border-color] hover:text-linho"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          anterior
        </button>
        <ol className="flex flex-1 flex-wrap justify-center gap-1">
          {faixas.map((f, i) => (
            <li key={f.id}>
              <button
                type="button"
                // O nome começa pelo número visível, para quem navega por voz dizer "01".
                aria-label={`${f.numero} ${f.name}`}
                aria-current={i === atual || undefined}
                onClick={() => ir(i, i > atual ? 1 : -1)}
                className="min-h-11 min-w-11 text-sm text-linho-gasto tabular-nums transition-[color,background-color,border-color] hover:text-linho aria-current:text-ferrugem"
              >
                {f.numero}
              </button>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() => passo(1)}
          className="inline-flex min-h-11 items-center gap-1.5 text-sm text-linho-gasto transition-[color,background-color,border-color] hover:text-linho"
        >
          próximo
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
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
      { duration: 1500 * RITMO, easing: QUINT_OUT },
    ).onfinish = aoChegar;
    // Palavras do título a partir de 0,75s, uma a cada 0,1s; o resto entra junto, 0,25s antes delas terminarem (tempos do zip, × RITMO).
    const palavras = el.querySelectorAll(".titulo .subir");
    const resto = el.querySelectorAll(".resto .subir");
    const sobe = (alvo: Element, atraso: number) =>
      alvo.animate([{ transform: "translateY(100%)" }, { transform: "none" }], {
        duration: 1000 * RITMO,
        delay: atraso * RITMO,
        easing: QUINT_OUT,
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
      // Rola por dentro quando o conteúdo passa da altura (laptop baixo, zoom): cortar escondia a stack.
      data-rola=""
      aria-labelledby={`${faixa.id}-titulo`}
      className="absolute inset-0 flex flex-col overflow-x-hidden overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--color-ferro)_transparent] border bg-grafite p-8 max-[900px]:p-5 [@media(max-height:800px)]:p-6"
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
      <div className="relative mt-auto flex flex-col items-center gap-4 px-[10%] pb-16 text-center max-[900px]:px-0 max-[900px]:pb-6 [@media(max-height:800px)]:pb-6">
        <h3 id={`${faixa.id}-titulo`} className="titulo text-item">
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
          <p className="text-base leading-normal text-pretty max-[900px]:text-sm">
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
        <p className="ml-auto flex shrink-0 gap-2 tabular-nums max-[900px]:hidden">
          <Mascara>{faixa.numero}</Mascara>
          <Mascara>/</Mascara>
          <Mascara>{String(total).padStart(2, "0")}</Mascara>
        </p>
      </div>
    </article>
  );
}
