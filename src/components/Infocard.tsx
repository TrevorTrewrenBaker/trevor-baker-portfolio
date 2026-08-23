import type { ReactNode } from "react";

interface InfoCardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function InfoCard({ title, icon, children, className = "" }: InfoCardProps) {
  return (
    <section
      className={`bg-(--color-surface) rounded-2xl shadow-(--elevation-2) 
        hover:shadow-(--elevation-3) hover:-translate-y-1 
        transition-all duration-300 ease-in-out 
        p-6 md:p-8 ${className}`}
    >
      {title && (
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <span className="text-(--color-primary)">{icon}</span>
          )}
          <h2 className="text-xl font-semibold text-(--color-primary)">
            {title}
          </h2>
        </div>
      )}

      <div className="text-(--color-on-surface,#1a1a1a) leading-relaxed">
        {children}
      </div>
    </section>
  );
}
