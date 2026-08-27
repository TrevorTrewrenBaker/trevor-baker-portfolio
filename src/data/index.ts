// src/data/index.ts

// Projects
export { projects, getProjectBySlug, getProjectsByCategory } from "./projects";
export type { Project } from "./projects";

// About
export { aboutSections } from "./about";
export type { AboutSection } from "./about";

// Skills
export { skillGroups } from "./skills";
export type { SkillGroup } from "./skills";

// Experience
export { experiences } from "./experience";
export type { Experience } from "./experience";

// Credentials
export { credentials } from "./credentials";
export type { Credential } from "./credentials";

// Navigation
export { navLinks, socialLinks } from "./navigation";
export type { NavLink, SocialLink } from "./navigation";