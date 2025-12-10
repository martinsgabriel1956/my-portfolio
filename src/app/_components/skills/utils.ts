import { Code2, Database, Server, Wrench } from "lucide-react";

export const SKILLS_CATEGORIES = [
  {
    title: "Frontend",
    icon: Code2,
    color: "primary",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Zustand", "Redux", "TanStack Query", "React Hook Form", "Styled-Components"]
  },
  {
    title: "Backend",
    icon: Server,
    color: "secondary",
    skills: ["Node.js", "Fastify", "Nest.js", "Adonis.js", "Prisma ORM", "Zod", "Clean Architecture", "DDD", "TDD", "RBAC"]
  },
  {
    title: "Banco de Dados",
    icon: Database,
    color: "primary",
    skills: ["PostgreSQL", "MySQL", "Redis"]
  },
  {
    title: "DevOps & Ferramentas",
    icon: Wrench,
    color: "secondary",
    skills: ["Docker", "Git", "Linux", "Vitest", "Jest"]
  }
];
