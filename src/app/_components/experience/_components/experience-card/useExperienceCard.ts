import type { UseExperienceCardProps } from "./types";

export function useExperienceCard({
  endDate,
  isCurrent,
}: UseExperienceCardProps) {
  const formatEndDate = () => {
    if (isCurrent) {
      return "Atual";
    }
    return endDate?.toLocaleDateString() || "Atual";
  };

  return {
    formatEndDate,
  };
}
