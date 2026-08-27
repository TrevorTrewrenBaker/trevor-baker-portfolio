import type { Project } from "./types";

export const universityProjects: Project[] = [
  {
    slug: "neon-skies-drone-game",
    title: "Neon Skies — 3D Drone Game",
    summary:
      "A 3D drone-flying game with AI pilots, waypoint navigation, and SQL-backed player progression.",
    category: "university",
    date: "2019",
    tech: [
      "Unity",
      "C#",
      "SQLite",
      "Unity NavMesh",
      "Behaviour Trees",
      "Git",
      "Unity Coroutines",
      "Async Operations",
      "Unity Physics",
      "Unity Animator",
    ],
    heroImage: undefined,
    videoUrl: "https://www.youtube.com/embed/sECpNF_aE6I",
    heroImageAlt: "Neon Skies Drone Game",
    subtitle:
      "A futuristic drone package delivery game with AI opponents and deep progression systems",
    overview:
      "Neon Skies is a 3D drone navigation game featuring AI-controlled opponents, dynamic waypoint generation, and a player progression system built on SQLite. Built as part of my university capstone project.",
    challenge:
      "Creating believable AI drone behavior in 3D space while maintaining responsive controls and performance on mid-range hardware. The AI needed to navigate complex waypoint routes while reacting to player proximity. Additionally, real-time player location tracking required efficient asynchronous SQLite operations to avoid gameplay stutter.",
    approach:
      "I implemented behaviour trees for drone AI, combining waypoint navigation with collision avoidance. The SQLite backend tracked player progress, upgrade purchases, high scores, and real-time player locations using Unity Coroutines for non-blocking database operations. The game featured three distinct AI types, each with different flight patterns and difficulty profiles. Version control was managed through Git for the 6-person team.",
    features: [
      {
        label: "AI-Controlled Opponents",
        description: "Drone opponents driven by behaviour trees with NavMesh pathfinding",
      },
      {
        label: "Procedural Navigation",
        description: "Waypoint generation for varied gameplay routes",
      },
      {
        label: "Player Progression",
        description: "Upgrade system with persistent SQL storage and live location tracking",
      },
      {
        label: "Physics-Based Flight",
        description: "3D navigation with a physics-driven flight model using Unity Physics",
      },
      {
        label: "Leaderboard System",
        description: "Score tracking and replay functionality with async SQLite updates",
      },
    ],
    techDetails: [
      {
        label: "Engine & Language",
        items: ["Unity", "C#"],
      },
      {
        label: "Data & Persistence",
        items: ["SQLite", "JSON", "Unity Coroutines", "Async Operations"],
      },
      {
        label: "AI & Navigation",
        items: ["Behaviour Trees", "NavMesh", "Pathfinding", "Unity Physics"],
      },
      {
        label: "Tools & Workflow",
        items: ["Git", "Unity Animator"],
      },
    ],
    results: [
      "Completed within 2 semester university timeline",
      "Received distinction for AI implementation and real-time database integration",
      "Playable by 10+ testers with positive feedback on AI behaviour and flight mechanics",
      "Successfully implemented live SQLite location tracking without performance degradation",
    ],
    screenshots: undefined,
    liveUrl: undefined,
    repoUrl: undefined,
    role: "AI & Systems Programmer",
    duration: "2 Semesters",
    teamSize: 6,
    metrics: [
      { label: "AI Types", value: "3" },
      { label: "Levels", value: "6" },
      { label: "Team Size", value: "6" },
      { label: "Database Operations", value: "Real-time" },
    ],
  },
  {
    slug: "deaths-door-ai-combat",
    title: "Death's Door — AI & Combat Systems",
    summary:
      "Built AI behaviour trees, animation blendspaces, and combat systems for three enemy types in Unreal Engine.",
    category: "university",
    date: "2019",
    tech: ["Unreal Engine", "C++", "Blueprints", "Animation"],
    heroImage: undefined,
    heroImageAlt: undefined,
    videoUrl: undefined,
    subtitle:
      "Creating intelligent enemy AI and fluid combat systems in Unreal Engine",
    overview:
      "Death's Door was a university project focused on creating a polished combat experience. My role was designing and implementing the full AI and combat pipeline for three distinct enemy types.",
    challenge:
      "Each enemy type needed to feel unique and challenging, with behaviour patterns that rewarded player skill. The combat system required responsive animations, hit detection, and a difficulty curve that scaled appropriately.",
    approach:
      "I built behaviour trees for each enemy type, implemented animation blendspaces for smooth transitions, and designed combat mechanics including parry, dodge, and attack combos. The AI utilized line-of-sight checks, aggro ranges, and coordinated attack patterns.",
    features: [
      {
        label: "Distinct Enemy AI",
        description: "3 enemy types, each with a unique behaviour tree",
      },
      {
        label: "Animation Blendspaces",
        description: "Smooth transitions between movement and combat states",
      },
      {
        label: "Combat System",
        description: "Parry, dodge, and attack mechanics",
      },
      {
        label: "AI Perception",
        description: "Line-of-sight checks and aggro range management",
      },
      {
        label: "Difficulty Scaling",
        description: "Adjusts based on player progression",
      },
    ],
    techDetails: [
      {
        label: "Engine",
        items: ["Unreal Engine 4", "C++", "Blueprints"],
      },
      {
        label: "Animation",
        items: ["Animation Blendspaces", "State Machines"],
      },
      {
        label: "AI",
        items: ["Behaviour Trees", "Blackboard", "Environment Query System"],
      },
    ],
    results: [
      "Successfully integrated with main game loop",
      "Received positive feedback on enemy diversity",
      "Combat system praised for responsiveness",
    ],
    screenshots: undefined,
    liveUrl: undefined,
    repoUrl: undefined,
    role: "AI & Combat Programmer",
    duration: "10 weeks",
    teamSize: 1,
    metrics: [
      { label: "Enemy Types", value: "3" },
      { label: "Combat Moves", value: "12" },
    ],
  },
  {
    slug: "hook-your-hunger-vr",
    title: "Hook Your Hunger — VR Mini-Game",
    summary:
      "VR mini-game where players catch flying food objects to build a burger, featuring unique AI behaviors for each ingredient.",
    category: "university",
    date: "2018",
    tech: ["Unity", "C#", "VR", "HTC Vive"],
    heroImage: undefined,
    videoUrl: "https://www.youtube.com/embed/gmayqhuIhZM",
    heroImageAlt: "Hook Your Hunger VR gameplay",
    subtitle:
      "A VR fishing adventure with unique AI behaviors for each food type",
    overview:
      "Hook Your Hunger is a Virtual Reality game built with Unity and C#, where the objective is to catch various food objects flying around the map and make a burger. Each food type has unique AI behaviors, requiring different strategies to catch. The game features time and score-based mechanics in a child-friendly, mini-game format.",
    challenge:
      "Designing distinct, believable AI behaviors for each food type that are both challenging and fun in VR space using the HTC Vive, while maintaining immersion and comfort. Each ingredient needed to feel unique and require different player strategies.",
    approach:
      "I built four distinct food AI behaviors using Unity's C# scripting: Cheese cycles through 4-6 teleport locations, moving for 6 seconds, pausing to rotate for 2 seconds, then moving in a new random direction for 4 seconds before repeating. Onion is randomly assigned one of 5 predefined paths at spawn and always moves in a straight line. Patty flips in the air every 2 seconds and launches high, landing in nearly the same spot each time. Mushroom grows from a tiny pixel into an enormous size before exploding into particles, giving players a brief window to catch it. The game was optimized for VR performance and comfort using the HTC Vive.",
    features: [
      {
        label: "Unique Food AI",
        description: "4 food types, each with distinct AI behaviour",
      },
      {
        label: "VR-Optimised Mechanics",
        description: "Catching mechanics with haptic feedback on HTC Vive",
      },
      {
        label: "Time & Score Gameplay",
        description: "Time-based and score-based mechanics",
      },
      {
        label: "Progression System",
        description: "Dynamic burger-building progression",
      },
      {
        label: "Child-Friendly Design",
        description: "Challenging mechanics kept accessible",
      },
      {
        label: "Strategic Variety",
        description: "Each food type requires a different catching strategy",
      },
    ],
    techDetails: [
      {
        label: "Engine & Language",
        items: ["Unity", "C#"],
      },
      {
        label: "VR",
        items: ["HTC Vive"],
      },
      {
        label: "AI",
        items: ["Custom C# AI Scripts", "State Machines", "Random Path Generation"],
      },
    ],
    results: [
      "Successfully demoed at university showcase",
      "Positive feedback on AI diversity and VR immersion",
      "Completed within 8-week timeline",
      "Players praised unique behaviors of each food type",
    ],
    screenshots: undefined,
    liveUrl: "https://gamejolt.com/games/Hookyourhunger/352443",
    repoUrl: undefined,
    role: "AI Programmer",
    duration: "8 weeks",
    teamSize: 15,
    metrics: [
      { label: "Enemy Types", value: "4" },
      { label: "VR Interactions", value: "6" },
    ],
  },
  {
    slug: "chernobyl-walking-simulator",
    title: "Chernobyl Walking Simulator",
    summary:
      "A first-person horror walking simulator set in the Chernobyl exclusion zone, focused on completing objectives and triggering events to progress.",
    category: "university",
    date: "2017",
    tech: ["Unity", "C#", "Lighting Systems", "Event Triggers"],
    heroImage: `${import.meta.env.BASE_URL}Images/chernobyl-walking-simulator/1.png`,
    heroImageAlt: "Chernobyl Walking Simulator gameplay",
    subtitle:
      "A tense, objective-driven horror walking sim in the Chernobyl exclusion zone",
    overview:
      "Chernobyl Walking Simulator is a first-person horror walking simulator focused solely on completing a list of objectives and activating trigger events to progress through the level. It emphasizes atmosphere and tension over combat, using environmental storytelling and lighting to build dread.",
    challenge:
      "Building convincing horror atmosphere and pacing in a walking simulator with no combat — relying on lighting, triggerable events, and environmental interaction to sustain tension.",
    approach:
      "I contributed the flashlight functionality and light source system, pick-up object mechanics, triggerable event system, and level terrain work using Unity and C#.",
    features: [
      {
        label: "Objective System",
        description: "Objective-based level progression",
      },
      {
        label: "Trigger Events",
        description: "Triggerable event system to advance the story",
      },
      {
        label: "Lighting Mechanics",
        description: "Flashlight and dynamic light source system",
      },
      {
        label: "Interactable Objects",
        description: "Pickup/interactable object system",
      },
      {
        label: "Level Terrain",
        description: "Custom-built level terrain",
      },
    ],
    techDetails: [
      {
        label: "Engine & Language",
        items: ["Unity", "C#"],
      },
      {
        label: "Gameplay Systems",
        items: ["Trigger Events", "Flashlight/Lighting", "Object Pickup", "Level Terrain"],
      },
    ],
    results: [
      "Successfully submitted as university assignment",
      "Atmosphere praised for effective tension building using lighting and events",
      "Completed within 4-week sprint with a 2-person team",
      "Trigger system enabled seamless progression through 6+ story events",
    ],
    screenshots: [
      `${import.meta.env.BASE_URL}Images/chernobyl-walking-simulator/2.png`,
      `${import.meta.env.BASE_URL}Images/chernobyl-walking-simulator/3.png`,
      `${import.meta.env.BASE_URL}Images/chernobyl-walking-simulator/4.png`,
      `${import.meta.env.BASE_URL}Images/chernobyl-walking-simulator/5.png`,
    ],
    liveUrl: undefined,
    repoUrl: undefined,
    role: "Gameplay Programmer",
    duration: "4 weeks",
    teamSize: 2,
    metrics: [
      { label: "Team Size", value: "2" },
      { label: "Duration", value: "4 weeks" },
      { label: "Trigger Events", value: "6+" },
      { label: "Interactable Objects", value: "15+" },
    ],
  },
  {
    slug: "knights-of-the-elemental",
    title: "Knights of the Elemental — 2.5D Platformer",
    summary:
      "A 2.5D platformer where the player collects an elemental crystal to defeat the antagonist, built as a university project.",
    category: "university",
    date: "2017",
    tech: ["Unity", "C#"],
    heroImage: `${import.meta.env.BASE_URL}Images/knights-of-the-elemental/1.png`,
    heroImageAlt: "Knights of the Elemental gameplay",
    subtitle:
      "A child-friendly platformer with melee combat and elemental collectables",
    overview:
      "Knights of the Elemental is a 2.5D platformer in which the player completes a level from start to finish, collecting an elemental 'crystal' to stop the antagonist. The game blends traditional side-scrolling platforming with melee combat and light AI-driven enemy encounters.",
    challenge:
      "Building an approachable but genuinely challenging 2.5D platformer experience for a child-friendly audience — balancing accessible controls with meaningful combat and traversal risk (death traps).",
    approach:
      "I built the game's opening area, the Ruins Level, including a 2.5D character controller restricted to left/right movement with jumping, environmental death traps, basic enemy AI, a melee sword attack, and the crystal and gem collectable system — where the gem is awarded for clearing all enemies in the level.",
    features: [
      {
        label: "Character Controller",
        description: "2.5D side-scrolling controller with jump mechanics",
      },
      {
        label: "Melee Combat",
        description: "Sword-based melee combat",
      },
      {
        label: "Enemy AI",
        description: "Basic enemy AI behaviour",
      },
      {
        label: "Environmental Hazards",
        description: "Death traps placed throughout the level",
      },
      {
        label: "Collectable System",
        description: "Crystal and gem collectables tied to enemy clear conditions",
      },
      {
        label: "Ruins Level",
        description: "Designed and built the game's opening level",
      },
    ],
    techDetails: [
      {
        label: "Engine & Language",
        items: ["Unity", "C#"],
      },
      {
        label: "Gameplay Systems",
        items: [
          "2.5D Character Controller",
          "Melee Combat",
          "Basic AI",
          "Collectables",
          "Environmental Hazards",
        ],
      },
    ],
    results: [
      "Successfully demonstrated at university showcase",
      "Crystal/clear-all-enemies mechanic praised for rewarding exploration",
      "Completed within 4-week sprint",
      "Player feedback confirmed game was approachable yet challenging for target audience",
    ],
    screenshots: [
      `${import.meta.env.BASE_URL}Images/knights-of-the-elemental/2.png`,
      `${import.meta.env.BASE_URL}Images/knights-of-the-elemental/3.png`,
      `${import.meta.env.BASE_URL}Images/knights-of-the-elemental/4.png`,
      `${import.meta.env.BASE_URL}Images/knights-of-the-elemental/5.png`,
    ],
    liveUrl: undefined,
    repoUrl: undefined,
    role: "Gameplay Programmer",
    duration: "4 weeks",
    teamSize: 2,
    metrics: [
      { label: "Team Size", value: "2" },
      { label: "Duration", value: "4 weeks" },
      { label: "Collectables", value: "4" },
      { label: "Enemy Types", value: "3" },
    ],
  },
];