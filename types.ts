export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  modifiedISO: string;
  imageUrl: string;
  url: string;
  category: string;
  content: string;
}

export interface Sponsor {
  id: number;
  name: string;
  logoUrl: string; // Using placeholders for logos
  websiteUrl?: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export enum SponsorCategory {
  SOY_CORN = "Etapa Soja e Milho",
  COTTON = "Etapa Algodão"
}
