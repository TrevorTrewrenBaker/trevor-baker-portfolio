export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Languages",
    skills: ["C#", "JavaScript", "TypeScript", "C++"],
  },
  {
    title: ".NET & Mobile Frameworks",
    skills: [".NET / .NET MAUI", "Xamarin", "ASP.NET Core", "WPF", "WinUI"],
  },
  {
    title: "Frontend",
    skills: ["React", "Vue", "Tailwind CSS", "Design Token Systems"],
  },
  {
    title: "Databases & Data Access",
    skills: ["SQL Server", "T-SQL", "Entity Framework", "MongoDB"],
  },
  {
    title: "APIs & Data Formats",
    skills: ["REST APIs", "XML/JSON Parsing"],
  },
  {
    title: "Architecture & Design Patterns",
    skills: [
      "Clean Architecture",
      "SOLID Principles",
      "DRY Principle",
      "Dependency Injection",
      "MVVM",
      "BFF (Backend for Frontend) Design",
    ],
  },
  {
    title: "Cloud Platforms",
    skills: ["Microsoft Azure", "Kubernetes (learning)", "Docker"],
  },
  {
    title: "DevOps & Source Control",
    skills: ["Azure DevOps", "CI/CD", "Git", "PowerShell"],
  },
  {
    title: "Build & Monorepo Tooling",
    skills: ["Nx", "Vite"],
  },
  {
    title: "UI Component Libraries",
    skills: [".NET MAUI Community Toolkit", "Telerik UI"],
  },
  {
    title: "Wireless & Peripheral Integration",
    skills: ["Bluetooth / BLE", "Bluetooth SPP", "Barcode Scanning"],
  },
  {
    title: "Barcode & Labeling Standards",
    skills: ["GS1 Barcode Standards", "Label Printer Integration (ZPL/SBPL)"],
  },
  {
    title: "Printer Hardware",
    skills: ["SATO Printers", "Zebra Printers"],
  },
  {
    title: "Scanner Hardware",
    skills: ["Honeywell", "Datalogic", "Opticon", "Zebra"],
  },
  {
    title: "Offline & Resilience Architecture",
    skills: ["Offline-First Architecture", "Disaster Recovery / Backup Testing"],
  },
  {
    title: "Legacy & Migration",
    skills: ["Delphi (Integration)"],
  },
  {
    title: "Process & Methodology",
    skills: ["Agile / Scrum", "Code Review", "Root Cause Analysis"],
  },
  {
    title: "Testing & Quality",
    skills: ["Unit Testing", "Algorithms & Complexity"],
  },
  {
    title: "Support & Delivery Tools",
    skills: ["Jira (Incident Triage)", "Remote Support Tooling (Splashtop)"],
  },
  {
    title: "Game Development",
    skills: ["Unreal Engine", "Unity", "Blueprints", "Behaviour Trees"],
  },
];