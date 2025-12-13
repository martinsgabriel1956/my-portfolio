import { Code2, Database, type LucideIcon, Server, Wrench } from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Database,
  Server,
  Wrench,
};

export function getIconComponent(iconName: string): LucideIcon {
  return ICON_MAP[iconName] || Code2; // Fallback para Code2
}

