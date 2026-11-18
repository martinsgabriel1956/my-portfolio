import type { ProjectDomain } from "@/db/schema";

/** Os três domínios que a arte curva para lados diferentes, ditos em palavras. */
export const DOMINIO: Record<ProjectDomain, string> = {
  ecommerce: "e-commerce",
  // "painéis" sozinho se confundia com os painéis do próprio panorama.
  admin: "painéis admin",
  health: "saúde",
};

/** Os domínios que existem nas faixas, com quantos projetos cada um tem, na ordem de DOMINIO. */
function contagem(faixas: { domain?: ProjectDomain }[]) {
  return (Object.keys(DOMINIO) as ProjectDomain[])
    .map(
      (d) => [DOMINIO[d], faixas.filter((f) => f.domain === d).length] as const,
    )
    .filter(([, n]) => n > 0);
}

/** A legenda impressa da arte: "2 e-commerce · 5 painéis admin · 1 saúde". */
export function legendaDominios(faixas: { domain?: ProjectDomain }[]) {
  return contagem(faixas)
    .map(([nome, n]) => `${n} ${nome}`)
    .join(" · ");
}

/** Os domínios como frase: "e-commerce, painéis admin e saúde". */
export function dominiosEmPalavras(faixas: { domain?: ProjectDomain }[]) {
  return new Intl.ListFormat("pt-BR").format(
    contagem(faixas).map(([nome]) => nome),
  );
}

/** As tecnologias que mais se repetem nas faixas: a stack, sem dado novo. */
export function stackDe(faixas: { techs: string[] }[], limite = 6) {
  const vezes = new Map<string, number>();
  for (const faixa of faixas)
    for (const tech of faixa.techs) vezes.set(tech, (vezes.get(tech) ?? 0) + 1);
  // Map guarda a ordem de chegada, e o sort é estável: no empate vence quem apareceu antes.
  return [...vezes]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limite)
    .map(([tech]) => tech);
}
