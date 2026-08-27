// src/components/ProjectHero.tsx
import { ExternalLink, Calendar, User, Users } from "lucide-react";
import { SocialIcon } from 'react-social-icons';
import TechTag from "./TechTag";

interface ProjectHeroProps {
  title: string;
  subtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  videoUrl?: string;
  category: "university" | "personal" | "professional";
  tech: string[];
  metrics?: { label: string; value: string }[];
  role?: string;
  duration?: string;
  teamSize?: number;
  liveUrl?: string;
  repoUrl?: string;
  date: string;
}

const categoryConfig = {
  university: {
    label: "University",
    className: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  personal: {
    label: "Personal",
    className: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  professional: {
    label: "Professional",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
};

const getYouTubeEmbedUrl = (url: string): string => {
  if (!url) return url;
  if (url.includes('/embed/')) return url;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

export default function ProjectHero({
  title,
  subtitle,
  heroImage,
  heroImageAlt = title,
  videoUrl,
  category,
  tech,
  metrics = [],
  role,
  duration,
  teamSize,
  liveUrl,
  repoUrl,
  date,
}: ProjectHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-(--color-surface) shadow-(--elevation-2)">
      {/* Hero Media: Video or Image */}
      <div className="w-full max-h-[500px] overflow-hidden bg-(--color-primary)/5 flex items-center justify-center">
        {videoUrl ? (
          <iframe
            src={getYouTubeEmbedUrl(videoUrl)}
            title={`${title} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full aspect-video"
          />
        ) : heroImage ? (
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="w-full h-auto max-h-[500px] object-contain mx-auto bg-(--color-primary)/5"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-(--color-primary)/10 to-(--color-primary)/5">
            <span className="text-6xl opacity-10">🎮</span>
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span
            className={`px-3 py-1 rounded-full font-medium border ${categoryConfig[category].className}`}
          >
            {categoryConfig[category].label}
          </span>
          <span className="flex items-center gap-1 opacity-60">
            <Calendar size={14} /> {date}
          </span>
          {role && (
            <span className="flex items-center gap-1 opacity-60">
              <User size={14} /> {role}
            </span>
          )}
          {teamSize && teamSize > 1 && (
            <span className="flex items-center gap-1 opacity-60">
              <Users size={14} /> Team of {teamSize}
            </span>
          )}
          {duration && (
            <span className="flex items-center gap-1 opacity-60">
              <Calendar size={14} /> {duration}
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--color-primary) leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg opacity-70 max-w-2xl">{subtitle}</p>
        )}

        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-6 pt-2 pb-1">
            {metrics.map((m) => (
              <div key={m.label}>
                <span className="text-2xl font-bold text-(--color-primary) block">
                  {m.value}
                </span>
                <span className="text-sm opacity-60">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-1">
          {tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-(--color-primary) text-(--color-surface) font-medium hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-(--color-primary)/30 hover:bg-(--color-primary)/10 transition-colors"
            >
              <SocialIcon 
                url="https://github.com/" 
                target="_blank" 
                style={{ height: 28, width: 28 }} 
                bgColor="transparent"
                fgColor="currentColor"
              />
              <span className="font-medium text-(--color-primary)">Source Code</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}