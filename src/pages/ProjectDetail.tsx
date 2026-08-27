// src/pages/ProjectDetail.tsx
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Info, Target, Layers, CheckSquare, Code2, TrendingUp, Image } from "lucide-react";
import { getProjectBySlug } from "../data/projects";
import ProjectHero from "../components/ProjectHero";
import InfoCard from "../components/InfoCard";
import TechTag from "../components/TechTag";
import ImageSlideshow from "../components/ImageSlideshow";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold text-(--color-primary)">Project not found</h1>
        <Link to="/projects" className="text-(--color-primary) hover:underline mt-4 inline-block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-(--color-primary) hover:underline font-medium"
      >
        <ArrowLeft size={18} /> Back to Projects
      </Link>

      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        heroImage={project.heroImage}
        heroImageAlt={project.heroImageAlt}
        videoUrl={project.videoUrl}
        category={project.category}
        tech={project.tech}
        metrics={project.metrics}
        role={project.role}
        duration={project.duration}
        teamSize={project.teamSize}
        liveUrl={project.liveUrl}
        repoUrl={project.repoUrl}
        date={project.date}
      />

      <div className="space-y-6">
        <InfoCard title="Overview" icon={<Info size={22} />}>
          <p className="text-(--color-on-surface)">{project.overview}</p>
        </InfoCard>

        {project.challenge && (
          <InfoCard title="The Challenge" icon={<Target size={22} />} collapsible>
            <p className="text-(--color-on-surface)">{project.challenge}</p>
          </InfoCard>
        )}

        {project.approach && (
          <InfoCard title="Approach & Architecture" icon={<Layers size={22} />} collapsible>
            <p className="text-(--color-on-surface)">{project.approach}</p>
          </InfoCard>
        )}

        {project.features && project.features.length > 0 && (
          <InfoCard title="Key Features" icon={<CheckSquare size={22} />} collapsible>
            <ul className="space-y-2 list-disc pl-5 text-(--color-on-surface)">
              {project.features.map((feature) => (
                <li key={feature.label}>
                  <strong className="text-(--color-primary)">{feature.label}:</strong>{" "}
                  {feature.description}
                </li>
              ))}
            </ul>
          </InfoCard>
        )}

        {project.techDetails && project.techDetails.length > 0 && (
          <InfoCard title="Tech Stack" icon={<Code2 size={22} />} collapsible>
            <div className="space-y-4">
              {project.techDetails.map((group) => (
                <div key={group.label}>
                  <p className="text-sm font-medium text-(--color-primary) mb-2">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechTag key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>
        )}

        {project.results && project.results.length > 0 && (
          <InfoCard title="Results & Impact" icon={<TrendingUp size={22} />} collapsible>
            <ul className="space-y-2 list-disc pl-5 text-(--color-on-surface)">
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </InfoCard>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <InfoCard title="Screenshots" icon={<Image size={22} />} collapsible>
            <ImageSlideshow images={project.screenshots} altPrefix={project.title} />
          </InfoCard>
        )}
      </div>

      <div className="pt-6 border-t border-(--color-surface)/20">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-(--color-primary) hover:underline font-medium"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    </div>
  );
}