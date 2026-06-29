"use client";

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tag: string;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "edu1",
    role: "Major in Software Engineering",
    company: "Posts and Telecommunications Institute of Technology, Ho Chi Minh City (PTIT HCMC)",
    period: "2022 - 2027",
    description: "Currently pursuing a Bachelor's degree in Software Engineering. Maintaining a cumulative GPA of 3.42/4.0. Core courses include Object-Oriented Programming (OOP), Data Structures & Algorithms, Software Architecture, and Database Management Systems.",
    tag: "Education",
  },
  {
    id: "proj1",
    role: "EzBuy Platform Development",
    company: "Java Spring Boot E-Commerce Project",
    period: "09/2025 - 03/2026",
    description: "Engineered a layered architecture backend with Java 21, Spring Boot 3, and MySQL. Secured user sessions using Spring Security and JWT, customized query logic using JPA Specifications, and containerized with Docker.",
    tag: "Project",
  },
  {
    id: "proj2",
    role: "GreenMart Platform Development",
    company: "React & Redux E-Commerce Frontend Project",
    period: "02/2025 - 07/2025",
    description: "Built a responsive client application using React, Redux, Bootstrap 5, and Axios. Designed an advanced interceptor system for JWT/Google OAuth token refreshes and optimized responsiveness with Optimistic UI.",
    tag: "Project",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-[1200px] mx-auto relative">
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-xs font-semibold uppercase text-primary tracking-widest block">Timeline</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-text-primary tracking-tight">Education &amp; Projects</h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-[840px] mx-auto py-4">
        {/* Central Vertical Line (Git style) */}
        <div className="absolute top-0 bottom-0 left-5 md:left-1/2 w-[1px] bg-surface-border -translate-x-1/2"></div>

        {TIMELINE_DATA.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={item.id}
              className={`relative w-full md:w-1/2 py-6 md:px-10 px-8 box-border group ${
                isLeft 
                  ? "md:left-0 md:text-right md:pr-10 md:pl-4 left-0 text-left pl-10 pr-4" 
                  : "md:left-1/2 md:text-left md:pl-10 md:pr-4 left-0 text-left pl-10 pr-4"
              }`}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute top-9 w-3 h-3 rounded-full bg-dark-bg border-2 border-primary z-10 transition-all duration-350 group-hover:scale-110 group-hover:bg-primary ${
                  isLeft 
                    ? "md:-right-1.5 md:left-auto left-[14px]" 
                    : "md:-left-1.5 left-[14px]"
                }`}
              ></div>

              {/* Minimal Card Container */}
              <div className="bg-surface border border-surface-border p-7 rounded-2xl shadow-sm hover:border-surface-hover-border transition-colors text-left">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-3 inline-block bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                  {item.period}
                </span>
                <h3 className="text-lg font-bold text-text-primary mb-1 tracking-tight">{item.role}</h3>
                <span className="text-xs font-semibold text-text-secondary mb-4 block">{item.company}</span>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
