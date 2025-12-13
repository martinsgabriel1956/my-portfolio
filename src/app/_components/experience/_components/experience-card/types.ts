import type { Experience } from "@/db/schema";

export type ExperienceProps = {
  experience: Experience;
  index: number;
};

export type UseExperienceCardProps = {
  endDate: Date | null;
  isCurrent: boolean | null;
};
