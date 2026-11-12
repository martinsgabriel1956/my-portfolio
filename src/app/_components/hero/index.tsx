import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShuffleText } from "./shuffle-text";

/** Cartão de visita: nome e ofício em duas batidas; o sol pequeno nasce à direita, para onde se lê. */
export function Hero() {
  return (
    <section
      id="inicio"
      tabIndex={-1}
      aria-labelledby="hero-heading"
      className="painel flex flex-col"
    >
      <a
        href="#inicio"
        className="self-start py-2 text-lg font-semibold"
        aria-label="Gabriel Martins, início"
      >
        GM
      </a>
      <h1
        id="hero-heading"
        className="mt-[clamp(20px,6vh,72px)] text-[clamp(3.4rem,8vw,8rem)] leading-[0.9] font-extralight tracking-[-0.04em] text-linho-gasto lowercase max-[900px]:mt-6 max-[900px]:text-[clamp(2.6rem,12vw,3.4rem)]"
      >
        <span className="font-normal text-linho">
          <ShuffleText text="Gabriel Martins." delay={1200} />
        </span>
        <br />
        <ShuffleText text="Desenvolvedor fullstack." delay={1500} />
      </h1>
      <div className="chao">
        <div className="sol" aria-hidden="true" />
        <div className="horizonte" aria-hidden="true" />
        <div className="flex h-full flex-wrap items-center justify-between gap-x-8 gap-y-5 min-[901px]:pr-[120px]">
          <p className="max-w-[46ch] text-[clamp(16px,1.3vw,18px)] text-linho-gasto">
            <span className="text-linho">Nível pleno</span> · Rio de Janeiro, RJ
            · Remoto · aberto a novas oportunidades e projetos
          </p>
          <Button asChild>
            <a href="#contato">
              <ArrowRight aria-hidden="true" />
              Entre em contato
            </a>
          </Button>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="absolute right-12 bottom-4 flex items-center gap-1.5 text-sm text-linho-gasto max-[900px]:hidden"
      >
        role para o lado
        <ArrowRight className="size-4" aria-hidden="true" />
      </p>
    </section>
  );
}
