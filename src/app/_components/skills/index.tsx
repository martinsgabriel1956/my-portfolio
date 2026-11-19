import type { SkillCategory } from "@/db/schema";
import type { Faixa } from "../projects";
import { techsDe } from "../projects/dominio";

/** Nome de tecnologia comparável entre habilidades e projetos: sem versão, "ORM", pontuação nem caixa. */
const chave = (nome: string) => {
  const k = nome
    .toLowerCase()
    .replace(/\s+\d+(\.\d+)*$/, "")
    .replace(/\s+orm$/, "")
    .replace(/[^a-z0-9]/g, "");
  return k === "postgresql" ? "postgres" : k;
};
/** "Next.js (App Router, Server Actions)" vale pelo nome e pelo que vem entre parênteses. */
const chaves = (habilidade: string) => {
  const [fora, dentro = ""] = habilidade.split(/\s*\((.*)\)\s*/);
  return [fora, ...dentro.split(",")].filter((s) => s.trim()).map(chave);
};

/**
 * Os créditos do verso do disco: cada categoria com as habilidades em linha,
 * todas à vista. A habilidade usada num projeto acende em linho; sem contagem
 * ao lado, que poluía a leitura.
 * Texto, não link: 59 links pequenos e colados falhavam o alvo de toque e o Tab,
 * e a experiência já liga cada projeto.
 */
export function Skills({
  categories,
  faixas,
}: {
  categories: SkillCategory[];
  faixas: Faixa[];
}) {
  const faixasDe = (habilidade: string) => {
    const ks = chaves(habilidade);
    // Integrações (Asaas, Mercado Pago…) vivem na descrição, não nas techs: palavra inteira, para "Git" não achar "digital".
    const nome = habilidade.split("(")[0].trim();
    const citada = new RegExp(
      `\\b${nome.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "i",
    );
    return faixas.filter(
      (f) =>
        [...techsDe(f)].some((t) => ks.includes(chave(t))) ||
        citada.test(f.description),
    );
  };
  return (
    <section
      id="habilidades"
      tabIndex={-1}
      aria-labelledby="skills-heading"
      className="painel"
    >
      <h2 id="skills-heading" className="text-headline">
        habilidades
      </h2>
      <p className="mt-2 mb-7 text-sm text-linho-gasto">
        Em destaque, as usadas nos projetos.
      </p>
      <dl className="grid max-w-[1400px] gap-x-12 min-[640px]:grid-cols-2 min-[1200px]:grid-cols-3">
        {categories.map((c) => (
          <div key={c.id} className="border-t py-4">
            <dt className="text-title-sm lowercase">{c.title}</dt>
            <dd className="mt-1.5 leading-relaxed text-linho-gasto">
              {c.skills.map((habilidade, i) => {
                const usada = faixasDe(habilidade).length > 0;
                return (
                  <span key={habilidade}>
                    {i > 0 && " · "}
                    <span className={usada ? "text-linho" : undefined}>
                      {habilidade}
                    </span>
                  </span>
                );
              })}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
