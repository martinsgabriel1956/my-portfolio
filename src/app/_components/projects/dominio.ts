import type { ProjectDomain } from "@/db/schema";

/** Os três domínios que a arte curva para lados diferentes, ditos em palavras. */
export const DOMINIO: Record<ProjectDomain, string> = {
  ecommerce: "e-commerce",
  admin: "painéis",
  health: "saúde",
};
