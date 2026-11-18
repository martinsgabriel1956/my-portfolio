import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_URL, CV_URL } from "@/lib/links";
import type { Faixa } from "../projects";
import { dominiosEmPalavras, stackDe } from "../projects/dominio";
import { LadoA } from "./lado-a";

/** A capa do disco: nome e ofício em tábua sobre ferrugem, com a colisão dos projetos impressa como arte. */
export function Hero({ faixas }: { faixas: Faixa[] }) {
  const stack = stackDe(faixas, 4);
  return (
    <section
      id="inicio"
      tabIndex={-1}
      aria-labelledby="hero-heading"
      className="painel capa flex flex-col"
    >
      {/* A marca não é link: na capa ele só levaria à própria capa. O nome já está no título. */}
      <p
        aria-hidden="true"
        className="relative z-[1] self-start rounded-full bg-tabua px-3 pt-0.5 pb-1 text-[26px] leading-none font-semibold tracking-[-0.03em] text-ferrugem"
      >
        gm.
      </p>
      <h1
        id="hero-heading"
        // wrap-anywhere: com o texto ampliado a 200%, "desenvolvedor" quebra em vez de sair da tela.
        // tinta: o texto é impresso por cima da arte; as trajetórias param nele, nunca o cruzam. No bloco,
        // não nas linhas: o fundo de uma linha cobriria a perna do "g" da linha de cima.
        className="tinta relative z-[1] mt-[clamp(20px,6vh,72px)] max-w-[9.5em] self-start text-headline leading-[0.92] lowercase wrap-anywhere max-[900px]:mt-6 max-[900px]:text-[clamp(2.6rem,12vw,3.4rem)]"
      >
        <span className="font-normal">gabriel martins.</span>
        <br />
        desenvolvedor fullstack.
      </h1>
      {/* O primeiro filtro de quem contrata: a stack, tirada dos projetos, e onde ela foi usada. */}
      {stack.length > 0 && (
        <p className="tinta relative z-[1] mt-5 max-w-[34ch] self-start text-lg leading-snug font-medium max-[900px]:mt-4 max-[900px]:text-base">
          {stack.join(" · ")}
          <span className="block font-normal">
            em {dominiosEmPalavras(faixas)}.
          </span>
        </p>
      )}
      <div className="pe-da-capa relative z-[1] mt-auto flex flex-wrap items-center gap-x-6 gap-y-4">
        <Button variant="tabua" asChild>
          <a href="#contato">
            <ArrowRight aria-hidden="true" />
            Entre em contato
          </a>
        </Button>
        {/* A ação secundária: quieta, em tábua, para não disputar com o contato. */}
        <div className="flex flex-wrap gap-x-6 max-[900px]:basis-full">
          <a
            href={CV_URL}
            download
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            <FileText className="size-4" aria-hidden="true" />
            <span className="tinta">Currículo (PDF)</span>
          </a>
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            <BookOpen className="size-4" aria-hidden="true" />
            <span className="tinta">Blog</span>
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>
        {/* No celular sobe para uma linha própria: ao lado do botão ela cairia sob o índice do canto. */}
        <p className="text-sm font-medium max-[900px]:order-first max-[900px]:basis-full">
          <span className="tinta">remoto · brasil</span>
        </p>
      </div>
      {/* Depois do nome no DOM: a lista é posicionada, então a ordem de leitura muda sem mexer no desenho. */}
      <LadoA faixas={faixas} />
    </section>
  );
}
