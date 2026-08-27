export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: "university" | "personal" | "professional";
  date: string;
  tech: string[];
  heroImage?: string;
  heroImageAlt?: string;
  videoUrl?: string;
  subtitle?: string;
  overview: string;
  challenge?: string;
  approach?: string;
  features: { label: string; description: string }[];
  techDetails?: { label: string; items: string[] }[];
  results: string[];
  screenshots?: string[];
  liveUrl?: string;
  repoUrl?: string;
  role?: string;
  duration?: string;
  teamSize?: number;
  metrics?: { label: string; value: string }[];
}