"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  svgHeader: React.ReactNode;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "ezbuy",
    title: "EzBuy - E-commerce Platform Backend",
    description: "A highly scalable and secure e-commerce platform backend constructed following Layered Architecture principles. It supports user accounts, catalog search, shopping cart management, and order checkout pipelines.",
    category: "backend",
    tags: ["Java 21", "Spring Boot 3", "MySQL", "Spring Security", "JWT", "Spring Data JPA", "Hibernate", "Docker"],
    features: [
      "Engineered an e-commerce backend platform following Layered Architecture principles",
      "Implemented secure authentication and authorization using Spring Security, JWT Access/Refresh Tokens, and Role-Based Access Control (RBAC)",
      "Developed dynamic product filtering and search using JPA Specifications (supporting keyword, category, and manufacturer queries)",
      "Integrated external Cloudinary cloud API for media storage and image assets handling",
      "Utilized MapStruct for DTO mapping and containerized the application stack using Docker and Docker Compose"
    ],
    demoUrl: "",
    githubUrl: "https://github.com/BMQuaan/ezbuy-backend",
    svgHeader: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#0f172a" />
        <rect x="25" y="25" width="350" height="150" rx="6" fill="#020617" stroke="#1e293b" />
        <circle cx="45" cy="40" r="4" fill="#ef4444" opacity="0.5" />
        <circle cx="57" cy="40" r="4" fill="#eab308" opacity="0.5" />
        <circle cx="69" cy="40" r="4" fill="#22c55e" opacity="0.5" />
        
        <text x="45" y="70" fill="#475569" fontFamily="monospace" fontSize="10">POST /api/v1/auth/login - 200 OK - 84ms</text>
        <text x="45" y="90" fill="#3b82f6" fontFamily="monospace" fontSize="10">[Spring Security] JWT Access/Refresh Token generated</text>
        <text x="45" y="110" fill="#475569" fontFamily="monospace" fontSize="10">GET /api/v1/products?category=electronics - 200 OK - 15ms</text>
        <text x="45" y="130" fill="#8b5cf6" fontFamily="monospace" fontSize="10">[JPA Specification] Dynamic query compiled successfully</text>
        <text x="45" y="150" fill="#3b82f6" fontFamily="monospace" fontSize="10">[Docker] Container ezbuy-backend-db status: RUNNING</text>
      </svg>
    )
  },
  {
    id: "greenmart",
    title: "GreenMart - E-commerce Frontend",
    description: "A highly responsive e-commerce web interface. Features secure authentication flows, product catalog browsing, wishlist toggles, checkout forms, and user orders tracker.",
    category: "frontend",
    tags: ["React", "Redux", "React Router", "Axios", "Bootstrap 5", "Google OAuth", "SweetAlert2"],
    features: [
      "Developed a fully responsive e-commerce UI supporting product lists, cart additions, and checkout workflows",
      "Implemented secure auth flows using JWT, Google OAuth 2.0, and advanced Axios Interceptors with automated token refreshes and request queues",
      "Applied Optimistic UI updates for shopping cart and wishlist actions, optimizing user experience",
      "Managed global state using Redux to support scalable state management and session persistence across reloads",
      "Designed reusable components and responsive grid structures using Bootstrap 5 and custom media queries"
    ],
    demoUrl: "",
    githubUrl: "https://github.com/BMQuaan/greenMart",
    svgHeader: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#090d16" />
        <rect x="20" y="20" width="110" height="160" rx="8" fill="rgba(255, 255, 255, 0.01)" stroke="#1e293b" />
        <rect x="145" y="20" width="110" height="160" rx="8" fill="rgba(255, 255, 255, 0.01)" stroke="#1e293b" />
        <rect x="270" y="20" width="110" height="160" rx="8" fill="rgba(255, 255, 255, 0.01)" stroke="#1e293b" />
        
        <rect x="35" y="30" width="40" height="8" rx="2" fill="#3b82f6" />
        <rect x="160" y="30" width="40" height="8" rx="2" fill="#8b5cf6" />
        <rect x="285" y="30" width="40" height="8" rx="2" fill="#3b82f6" />
        
        <rect x="30" y="50" width="90" height="35" rx="6" fill="#111827" stroke="#1f2937" />
        <rect x="40" y="58" width="50" height="5" rx="2" fill="#475569" />
        <circle cx="105" cy="62" r="4" fill="#3b82f6" />
        
        <rect x="155" y="50" width="90" height="45" rx="6" fill="#111827" stroke="#1f2937" />
        <rect x="165" y="58" width="60" height="5" rx="2" fill="#475569" />
        <rect x="165" y="70" width="30" height="5" rx="2" fill="#8b5cf6" />
        <circle cx="230" cy="62" r="4" fill="#8b5cf6" />
        
        <rect x="155" y="105" width="90" height="35" rx="6" fill="#111827" stroke="#1f2937" />
        <rect x="165" y="113" width="40" height="5" rx="2" fill="#475569" />
      </svg>
    )
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-32 px-6 max-w-[1200px] mx-auto relative">
      {/* Header */}
      <div className="mb-14 text-center">
        <span className="text-xs font-semibold uppercase text-primary tracking-widest block">My Work</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-text-primary tracking-tight">Projects Showcase</h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {["all", "frontend", "backend"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full font-inter font-semibold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              filter === category 
                ? "bg-primary text-white border border-primary shadow-sm" 
                : "bg-surface border border-surface-border text-text-secondary hover:text-text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-surface border border-surface-border flex flex-col h-full overflow-hidden cursor-pointer rounded-2xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg group"
          >
            <div className="h-[200px] w-full overflow-hidden relative bg-slate-900 border-b border-surface-border">
              <div className="w-full h-full transition-transform duration-350 group-hover:scale-102">
                {project.svgHeader}
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2.5 text-text-primary tracking-tight">{project.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="primary-badge px-2.5 py-1 rounded-md text-[11px] font-semibold">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="bg-surface border border-surface-border px-2.5 py-1 rounded-md text-[11px] font-semibold text-text-secondary">+{project.tags.length - 3} more</span>
                )}
              </div>
              <div className="flex justify-between items-center border-t border-surface-border pt-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 transition-all group-hover:text-text-primary">
                  Project Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors duration-200" aria-label="Github code">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
