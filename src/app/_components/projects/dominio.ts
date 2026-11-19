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
  return (
    contagem(faixas)
      // Espaço inseparável dentro de cada par: a linha só quebra entre domínios, nunca em "1" / "saúde".
      .map(([nome, n]) => `${n} ${nome}`.replaceAll(" ", "\u00a0"))
      .join(" · ")
  );
}

/** "Next.js 15" e "Prisma ORM" contam como "Next.js" e "Prisma": a versão não é outra tecnologia. */
const semVersao = (tech: string) =>
  tech.replace(/\s+\d+(\.\d+)*$/, "").replace(/\s+ORM$/, "");
/** Quem usa Next.js usa React: o projeto conta para os dois. */
const IMPLICA: Record<string, string[]> = { "Next.js": ["React"] };

/** As tecnologias de um projeto sem versão e com as implicadas: a mesma regra na capa e nas habilidades. */
export function techsDe(faixa: { techs: string[] }) {
  // Um conjunto por projeto: "Prisma ORM" e "Prisma" no mesmo projeto contam uma vez.
  const techs = new Set(faixa.techs.map(semVersao));
  for (const tech of [...techs])
    for (const implicada of IMPLICA[tech] ?? []) techs.add(implicada);
  return techs;
}

/** As tecnologias que mais se repetem nas faixas: a stack, sem dado novo. */
export function stackDe(faixas: { techs: string[] }[], limite = 6) {
  const vezes = new Map<string, number>();
  for (const faixa of faixas) {
    for (const tech of techsDe(faixa))
      vezes.set(tech, (vezes.get(tech) ?? 0) + 1);
  }
  // Map guarda a ordem de chegada, e o sort é estável: no empate vence quem apareceu antes.
  return [...vezes]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limite)
    .map(([tech]) => tech);
}
