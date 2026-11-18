import type { ProjectDomain } from "@/db/schema";

/** Os três domínios que a arte curva para lados diferentes, ditos em palavras. */
export const DOMINIO: Record<ProjectDomain, string> = {
  ecommerce: "e-commerce",
  admin: "painéis",
  health: "saúde",
};

/** A legenda impressa da arte: "e-commerce 2 · painéis 5 · saúde 1", só com os domínios que existem. */
export function legendaDominios(faixas: { domain?: ProjectDomain }[]) {
  return (Object.keys(DOMINIO) as ProjectDomain[])
    .map(
      (d) => [DOMINIO[d], faixas.filter((f) => f.domain === d).length] as const,
    )
    .filter(([, n]) => n > 0)
    .map(([nome, n]) => `${nome} ${n}`)
    .join(" · ");
}
