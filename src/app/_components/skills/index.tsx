import type { SkillCategory } from "@/db/schema";
import type { Faixa } from "../projects";

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
 * todas à vista. A habilidade usada num projeto acende em linho e leva os
 * números das faixas, os mesmos da capa e do carrossel: a prova ao lado do nome.
 * Cada número abre aquele projeto, como os links da experiência.
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
        f.techs.some((t) => ks.includes(chave(t))) ||
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
        Os números são os projetos em que cada uma foi usada: cada um abre o
        projeto.
      </p>
      <dl className="grid max-w-[1400px] gap-x-12 min-[640px]:grid-cols-2 min-[1200px]:grid-cols-3">
        {categories.map((c) => (
          <div key={c.id} className="border-t py-4">
            <dt className="text-title-sm lowercase">{c.title}</dt>
            <dd className="mt-1.5 leading-relaxed text-linho-gasto">
              {c.skills.map((habilidade, i) => {
                const provas = faixasDe(habilidade);
                return (
                  <span key={habilidade}>
                    {i > 0 && " · "}
                    <span className={provas.length ? "text-linho" : undefined}>
                      {habilidade}
                    </span>
                    {provas.length > 0 && (
                      <span className="text-sm tabular-nums">
                        <span className="sr-only">, nos projetos</span>
                        {provas.map((f) => (
                          <span key={f.id}>
                            {" "}
                            {/* py: o alvo cresce na vertical sem mexer na altura da linha. */}
                            <a
                              href={`#${f.id}`}
                              aria-label={`${f.numero} ${f.name}`}
                              className="py-2.5 underline decoration-ferrugem decoration-1 underline-offset-4 hover:text-linho hover:decoration-2"
                            >
                              {f.numero}
                            </a>
                          </span>
                        ))}
                      </span>
                    )}
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
