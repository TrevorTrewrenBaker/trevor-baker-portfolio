import { useState } from "react";
import { FolderKanban } from "lucide-react";
import { projects, type Project } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const filters: { label: string; value: Project["category"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "University", value: "university" },
  { label: "Personal", value: "personal" },
  { label: "Professional", value: "professional" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Project["category"] | "all">("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <FolderKanban size={24} className="text-(--color-primary)" />
        <h1 className="text-2xl font-semibold text-(--color-primary)">
          Projects
        </h1>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                activeFilter === filter.value
                  ? "bg-(--color-primary) text-(--color-surface)"
                  : "bg-(--color-surface) text-(--color-primary) hover:bg-(--color-primary)/10 shadow-(--elevation-1)"
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
