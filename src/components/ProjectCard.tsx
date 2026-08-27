import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import TechTag from "./TechTag";

const categoryLabel: Record<Project["category"], string> = {
  university: "University",
  personal: "Personal",
  professional: "Professional",
};

const categoryColors: Record<Project["category"], string> = {
  university: "bg-blue-500/10 text-blue-400",
  personal: "bg-purple-500/10 text-purple-400",
  professional: "bg-emerald-500/10 text-emerald-400",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="relative block bg-(--color-surface) rounded-2xl shadow-(--elevation-2)
        hover:shadow-(--elevation-4) transition-all duration-300 p-6 pt-10 h-full
        hover:-translate-y-1 group"
    >
      <span className="absolute top-0 left-6 -translate-y-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-(--color-primary) text-(--color-surface) shadow-(--elevation-2)">
        {project.date}
      </span>

      <div className="flex items-start justify-between mb-3 gap-2">
        <h3 className="text-lg font-semibold text-(--color-primary) group-hover:underline">
          {project.title}
        </h3>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${categoryColors[project.category]}`}
        >
          {categoryLabel[project.category]}
        </span>
      </div>

      <p className="text-(--color-on-surface) opacity-80 mb-4 text-sm">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {/* Show first 3 tags, plus count if more */}
        {project.tech.slice(0, 3).map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
        {project.tech.length > 3 && (
          <span className="text-xs font-medium px-2 py-1 rounded-md border border-(--color-secondary)/30 text-(--color-primary)">
            +{project.tech.length - 3} more
          </span>
        )}
      </div>

      {/* Subtle indicator that it's clickable */}
      <span className="absolute bottom-3 right-4 text-xs opacity-30 group-hover:opacity-60 transition-opacity">
        View →
      </span>
    </Link>
  );
}