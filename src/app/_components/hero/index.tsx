import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Faixa } from "../projects";
import { LadoA } from "./lado-a";

/** A capa do disco: nome e ofício em tábua sobre ferrugem, com a colisão dos projetos impressa como arte. */
export function Hero({ faixas }: { faixas: Faixa[] }) {
  return (
    <section
      id="inicio"
      tabIndex={-1}
      aria-labelledby="hero-heading"
      className="painel capa flex flex-col"
    >
      <LadoA faixas={faixas} />
      <a
        href="#inicio"
        className="relative z-[1] self-start rounded-full bg-tabua px-3 pt-0.5 pb-1 text-[26px] leading-none font-semibold tracking-[-0.03em] text-ferrugem"
        aria-label="Gabriel Martins, início"
      >
        gm.
      </a>
      <h1
        id="hero-heading"
        className="relative z-[1] mt-[clamp(20px,6vh,72px)] max-w-[9.5em] self-start text-[clamp(3.4rem,7vw,7rem)] leading-[0.92] font-extralight tracking-[-0.04em] lowercase max-[900px]:mt-6 max-[900px]:text-[clamp(2.6rem,12vw,3.4rem)]"
      >
        <span className="font-normal">gabriel martins.</span>
        <br />
        desenvolvedor fullstack.
      </h1>
      <div className="pe-da-capa relative z-[1] mt-auto flex flex-wrap items-center gap-x-6 gap-y-4">
        <Button variant="tabua" asChild>
          <a href="#contato">
            <ArrowRight aria-hidden="true" />
            Entre em contato
          </a>
        </Button>
        <p
          aria-hidden="true"
          className="flex items-center gap-1.5 text-sm max-[900px]:hidden"
        >
          ou role para o lado
          <ArrowRight className="size-4" />
        </p>
      </div>
    </section>
  );
}
