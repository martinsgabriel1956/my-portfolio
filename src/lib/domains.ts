import type { ProjectDomain } from "@/db/schema";

export const DOMAINS: Record<ProjectDomain, string> = {
  ecommerce: "e-commerce",
  admin: "painéis e dashboards",
  health: "saúde",
};

export const DOMAIN_ORDER: ProjectDomain[] = ["ecommerce", "admin", "health"];
