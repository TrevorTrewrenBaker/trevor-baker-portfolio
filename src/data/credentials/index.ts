export interface Credential {
  id: string;
  logo: string;
  logoAlt: string;
  title: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
  description: string;
  highlights?: string[];
  defaultOpen?: boolean;
}

export const credentials: Credential[] = [
  {
    id: "qut-degree",
    logo: `${import.meta.env.BASE_URL}logos/qut.jpg`,
    logoAlt: "Queensland University of Technology logo",
    title: "Bachelor of Games and Interactive Environments",
    company: "Queensland University of Technology (QUT)",
    location: "Brisbane, QLD",
    period: "Graduated December 2019",
    defaultOpen: true,
    tags: [
      "C#",
      "Java",
      "Algorithms & Complexity",
      "Software Development",
      "Databases",
      "Cloud Computing",
      "Game Engine Technology",
      "AI for Games",
      "Parallel Computing",
    ],
    description: "Software Technologies major, Game Design minor. Course GPA: 5.04 (Credit average).",
    highlights: [
      "High Distinction — Impact of IT",
      "High Distinction — Social Technologies",
      "Distinction — Capstone Project (Game Development)",
      "Distinction — AI for Games",
      "Distinction — Immersive Game Level Design",
      "Distinction — Game Studio 1: Mini-Game Development",
      "Distinction — High Performance and Parallel Computing",
    ],
  },
  {
    id: "azure-cert",
    logo: `${import.meta.env.BASE_URL}logos/azure-certified.png`,
    logoAlt: "Microsoft logo",
    title: "Microsoft Azure AI Engineer Associate (AI-200)",
    company: "Microsoft",
    location: "Online",
    period: "In Progress",
    defaultOpen: true,
    tags: [
      "Azure Kubernetes Service",
      "Azure AI Foundry",
      "Containerisation",
      "AI Inference Deployment",
      "Cloud Infrastructure",
    ],
    description:
      "Hands-on study covering AI inference deployment on Azure Kubernetes Service, Azure AI Foundry, and containerised infrastructure.",
  },
];