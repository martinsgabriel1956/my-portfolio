export type Experience = {
  title: string;
  company: string;
  period: string;
  projects: Project[];
};

export type ExperienceProps = {
  experience: Experience;
  index: number;
};

export type Project = {
  name: string;
  description: string;
  techs: string[];
};
