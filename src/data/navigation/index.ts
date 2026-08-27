import { User, Wrench, Briefcase, FolderKanban, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Define base path for GitHub Pages
const BASE_PATH = "/trevor-baker-portfolio";

export interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navLinks: NavLink[] = [
  { label: "About Me", href: `${BASE_PATH}/about`, icon: User },
  { label: "Skills", href: `${BASE_PATH}/skills`, icon: Wrench },
  { label: "Experience", href: `${BASE_PATH}/experience`, icon: Briefcase },
  { label: "Projects", href: `${BASE_PATH}/projects`, icon: FolderKanban },
  { label: "Credentials", href: `${BASE_PATH}/credentials`, icon: GraduationCap },
];

export interface SocialLink {
  label: string;
  href: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/TrevorTrewrenBaker",
    url: "https://github.com/TrevorTrewrenBaker",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/trevor-baker-3a52a1394/",
    url: "https://www.linkedin.com/in/trevor-baker-3a52a1394/",
  },
  {
    label: "Email",
    href: "mailto:trevor-baker@live.com.au",
    url: "mailto:trevor-baker@live.com.au",
  },
];