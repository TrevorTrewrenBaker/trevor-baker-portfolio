import type { Project } from "./types";

export const professionalProjects: Project[] = [
  {
    slug: "dexta-maui-warehouse",
    title: "DEXTA — .NET MAUI Warehouse Management App",
    summary:
      "Contributed to the full lifecycle migration of a critical warehouse management application from Xamarin to .NET MAUI with zero downtime. Built for Independent Solutions, serving enterprise logistics clients.",
    category: "professional",
    date: "Jan 2022 - Feb 2026",
    tech: [
      "C#",
      ".NET MAUI",
      ".NET Core",
      "ASP.NET",
      "SQL Server",
      "T-SQL",
      "Azure DevOps",
      "Git",
      "PowerShell",
      "ZPL/SBPL",
      "Bluetooth SPP",
      "Telerik UI",
      "Entity Framework",
    ],
    heroImage: `${import.meta.env.BASE_URL}logos/dexta.png`,
    heroImageAlt: "dexta",
    subtitle:
      "A secure, offline-first warehouse management system for high-volume logistics",
    overview:
      "DEXTA is a flagship .NET MAUI warehouse management application built for Independent Solutions. It handles the full lifecycle of warehouse operations — from authentication and product lookup to inventory transfers, invoice picking, and label printing.",
    challenge:
      "The legacy Xamarin app suffered from severe performance issues, online-first architecture, unreliable connectivity handling, and critical gaps in the logistics workflow. A complete rewrite was required without disrupting live operations.",
    approach:
      "I contributed to a secure, offline-first solution using MAUI Secure Storage for credential encryption and a parallel-running deployment strategy for zero-downtime migration. Key architectural decisions included consolidating multi-page views into single ViewModels to eliminate data-passing errors, implementing robust exception handling with retry mechanisms, and building reusable components. Also integrated and tested Portable Data Entry (PDE) scanners from multiple vendors, modifying vendor SDKs and Android manifest configurations to ensure reliable operation across all device types.",
    features: [
      {
        label: "Secure Authentication",
        description: "MAUI Secure Storage with 100% credential encryption",
      },
      {
        label: "Frictionless Login",
        description: "QR code scanning eliminated login friction for 95% of users",
      },
      {
        label: "Offline-First Architecture",
        description: "100% uptime for product lookup in disconnected zones",
      },
      {
        label: "Real-Time Sync",
        description: "Live inventory synchronisation with SQL Server",
      },
      {
        label: "Printer Integration",
        description: "Bluetooth printer support with ZPL/SBPL command streaming",
      },
      {
        label: "Multi-Vendor Scanner Integration",
        description:
          "Multiple PDE scanner vendors integrated via custom SDK and Android manifest configuration",
      },
      {
        label: "Automated Deployments",
        description: "CI/CD pipelines with staged rollouts",
      },
      {
        label: "GS1 Compliance",
        description: "Data Matrix barcode generation with FNC1 encoding, 100% compliant",
      },
      {
        label: "Infrastructure as Code",
        description: "Environment provisioning automated via PowerShell",
      },
    ],
    techDetails: [
      {
        label: "UI Framework",
        items: ["XAML", "Telerik UI for MAUI"],
      },
      {
        label: "Core Platform",
        items: [".NET MAUI", "C#"],
      },
      {
        label: "Data & Persistence",
        items: ["Entity Framework", "SQL Server", "T-SQL"],
      },
      {
        label: "CI/CD & Infrastructure",
        items: ["Azure DevOps", "CI/CD Pipelines", "PowerShell", "Feature Flags"],
      },
      {
        label: "Printer Integration",
        items: ["Bluetooth SPP", "ZPL/SBPL", "Zebra Printers", "SATO Printers"],
      },
      {
        label: "Scanner Integration",
        items: ["GS1 Barcode Scanning", "Multiple Vendor SDKs"],
      },
    ],
    results: [
      "Zero downtime during the migration window",
      "Reduced page load times by 60% and eliminated UI freezing",
      "100% data accuracy for picking operations after fixing sync failures",
      "Reduced reliance on pre-printed inventory labels by 40% after printer integration",
      "Reduced barcode read errors by 90% after migrating to GS1 Data Matrix standards",
      "Achieved 0% crash rate on Android 13 devices after permission fix",
    ],
    screenshots: undefined,
    liveUrl: undefined,
    repoUrl: undefined,
    role: "Software Developer",
    duration: "4 years",
    teamSize: undefined,
    metrics: [
      { label: "Page Load Reduction", value: "60%" },
      { label: "Read Error Reduction", value: "90%" },
      { label: "Uptime", value: "100%" },
    ],
  },
  {
    slug: "homs-aspnet-core",
    title: "HOMS — ASP.NET Core Warehouse Operations App",
    summary:
      "Full-stack warehouse operations application with a .NET backend and React frontend, featuring RESTful APIs and secure cloud deployment. Built for Independent Solutions.",
    category: "professional",
    date: "2022-2024",
    tech: ["React", "ASP.NET Core", "C#", "Azure", "REST APIs"],
    heroImage: `${import.meta.env.BASE_URL}logos/independent-solutions.png`,
    heroImageAlt: "Independent Solutions logo",
    subtitle:
      "A modern warehouse operations system with RESTful APIs, .NET Core backend, and React frontend",
    overview:
      "HOMS is an ASP.NET Core application built for Independent Solutions with a .NET backend and React frontend, designed to support warehouse operations and data management. It integrates with Azure services, provides a modern responsive interface for field staff, and exposes RESTful APIs for secure data access.",
    challenge:
      "The application needed to support complex operational workflows while maintaining high performance and reliability. The backend required secure RESTful API deployment on Azure and integration with existing legacy infrastructure.",
    approach:
      "Deployed and managed secure RESTful ASP.NET APIs on Azure App Services, ensuring high availability and secure connectivity for frontend clients. Built robust XML/JSON parsing modules to interface with legacy applications, bridging the gap between modern .NET infrastructure and legacy data feeds. The REST APIs were designed with proper authentication, versioning, and error handling to support multiple client types.",
    features: [
      {
        label: "RESTful API Design",
        description: "ASP.NET Core backend exposing RESTful APIs",
      },
      {
        label: "Cloud Deployment",
        description: "Secure API deployment on Azure App Services",
      },
      {
        label: "Legacy Integration",
        description: "XML/JSON parsing modules bridging to legacy systems",
      },
      {
        label: "React-Consumed APIs",
        description: "APIs built to be consumed by a React frontend",
      },
      {
        label: "Warehouse Workflow Integration",
        description: "Integrated with existing warehouse operational workflows",
      },
      {
        label: "API Security",
        description: "Authentication and authorization on all REST endpoints",
      },
    ],
    techDetails: [
      {
        label: "Frontend",
        items: ["React"],
      },
      {
        label: "Backend",
        items: ["ASP.NET Core", "C#", "Azure App Services", "REST APIs"],
      },
      {
        label: "Integration",
        items: ["XML/JSON Parsing", "Legacy System Integration"],
      },
    ],
    results: [
      "Successfully deployed with 99.9% availability",
      "Bridged modern .NET infrastructure with legacy systems",
      "Enabled secure data flow for operations teams",
      "Provided RESTful API access for multiple client types",
    ],
    screenshots: undefined,
    liveUrl: undefined,
    repoUrl: undefined,
    role: "Backend Developer",
    duration: "1-2 years",
    teamSize: 8,
    metrics: [
      { label: "API Endpoints", value: "15+" },
      { label: "Team Size", value: "8" },
      { label: "Cloud Platform", value: "Azure" },
      { label: "Availability", value: "99.9%" },
    ],
  },
];