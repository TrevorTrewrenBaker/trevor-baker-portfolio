export type { Project } from "./types";
export { universityProjects } from "./university";
export { professionalProjects } from "./professional";
export { personalProjects } from "./personal";

import { universityProjects } from "./university";
import { professionalProjects } from "./professional";
import { personalProjects } from "./personal";

// Combined projects array for the main export
export const projects = [
  ...professionalProjects,
  ...universityProjects,
  ...personalProjects,
];

// Helper to get a project by slug
export const getProjectBySlug = (slug: string) => {
  return projects.find((p) => p.slug === slug);
};

// Helper to get projects by category
export const getProjectsByCategory = (category: "university" | "personal" | "professional") => {
  return projects.filter((p) => p.category === category);
};