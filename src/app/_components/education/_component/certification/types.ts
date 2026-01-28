export type CertificationProps = {
  title: string;
  institution: string;
  description: string | null;
  credentialUrl: string | null;
  order: number | null;
  expirationDate: string | null | Date;
  startDate: string | null | Date;
  endDate: string | null | Date;
};
