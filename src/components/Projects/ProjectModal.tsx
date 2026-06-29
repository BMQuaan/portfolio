"use client";

import { useEffect, ReactNode } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  svgHeader: ReactNode;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-slate-900/80 backdrop-blur-sm z-[999] flex justify-center items-center p-5 animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="bg-surface border border-surface-border w-full max-w-[760px] max-h-[85vh] overflow-y-auto relative rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 bg-surface border border-surface-border rounded-full w-9 h-9 flex items-center justify-center text-text-secondary hover:text-text-primary transition-all z-10 cursor-pointer hover:scale-105"
          onClick={onClose} 
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Visual Mock Header */}
        <div className="h-[180px] sm:h-[260px] w-full relative bg-slate-900 border-b border-surface-border overflow-hidden">
          {project.svgHeader}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          <h3 className="text-2xl font-extrabold mb-4 text-text-primary tracking-tight">{project.title}</h3>
          <p className="text-sm sm:text-[15px] leading-relaxed text-text-secondary mb-8">{project.description}</p>

          {/* Key Features */}
          <h4 className="text-base font-bold mb-4 text-text-primary flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Key Features
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 list-none pl-0">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                <svg className="text-primary flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="mb-9">
            <h4 className="text-base font-bold mb-4 text-text-primary">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-surface border border-surface-border text-text-secondary px-3 py-1.5 rounded-lg text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row justify-end gap-3.5 border-t border-surface-border pt-6">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded-full font-semibold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all w-full sm:w-auto bg-surface border border-surface-border text-text-primary hover:bg-slate-500/10 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub Code
            </a>
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2.5 rounded-full font-semibold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all w-full sm:w-auto bg-primary text-white hover:bg-blue-600 hover:-translate-y-0.5 shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
