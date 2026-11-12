import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatMonthYear(date: Date) {
  const month = date
    .toLocaleDateString("pt-BR", { month: "short", timeZone: "UTC" })
    .replace(".", "");
  return `${month} ${date.getUTCFullYear()}`;
}

export function formatYearRange(
  start: Date | null,
  end: Date | null,
  ongoing = "atual",
) {
  const from = start?.getUTCFullYear();
  const to = end?.getUTCFullYear();
  if (!from) return to ? String(to) : "";
  if (from === to) return String(from);
  return `${from} – ${to ?? ongoing}`;
}
