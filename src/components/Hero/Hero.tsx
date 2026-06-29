"use client";

import Image from "next/image";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-16 pt-[140px] pb-[80px] px-6 max-w-[1200px] mx-auto relative">
      {/* Subtle background glow */}
      <div 
        className="absolute top-[10%] -left-[10%] w-[380px] h-[380px] rounded-full filter blur-[70px] pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }}
      ></div>
      <div 
        className="absolute bottom-[20%] -right-[10%] w-[450px] h-[450px] rounded-full filter blur-[80px] pointer-events-none opacity-15"
        style={{ backgroundImage: "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)" }}
      ></div>

      {/* Hero Text content */}
      <div className="flex flex-col items-start text-left z-10 max-w-[600px] mx-auto lg:mx-0 opacity-0 animate-fade-in">
        <div className="text-xs uppercase tracking-widest font-semibold text-primary mb-4 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_6px_var(--color-primary)]"></span>
          Aspiring Intern
        </div>
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tighter text-text-primary">
          Hi, I am <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">Bui Minh Quan</span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">Backend Developer</span>
        </h1>
        <p className="text-base sm:text-lg text-text-secondary mb-8 leading-relaxed max-w-[500px]">
          Information Technology student at PTIT HCMC specializing in Software Engineering. 
          Experienced in building RESTful APIs and modern web applications with Spring Boot, React, and Next.js.
        </p>
        <div className="flex flex-wrap gap-4 w-full">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className="bg-primary hover:bg-blue-600 text-white px-7 py-3 rounded-full font-semibold text-[15px] shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            My Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="bg-surface hover:bg-slate-500/10 text-text-primary border border-surface-border px-7 py-3 rounded-full font-semibold text-[15px] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Contact Info
          </a>
        </div>
      </div>

      {/* Hero Visual Column */}
      <div className="relative flex justify-center items-center z-5">
        <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex justify-center items-center">
          {/* Subtle morphing background gradient blob */}
          <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] bg-gradient-to-br from-primary/15 to-secondary/5 rounded-full filter blur-[2px] opacity-80 animate-morph"></div>

          {/* Floating Avatar Container */}
          <div className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full overflow-hidden border-4 border-surface-border bg-surface p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float left-0 top-6 z-10 group">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-30 rounded-full blur-[2px] transition-transform duration-300 group-hover:scale-105"></div>
              <Image 
                src="/avatar/avatar.jpg" 
                alt="Bui Minh Quan Avatar" 
                fill 
                className="object-cover rounded-full transition-transform duration-300 group-hover:scale-105" 
                priority
              />
            </div>
          </div>

          {/* Floating Skill Badge */}
          <div className="absolute bg-surface border border-surface-border px-4 py-2 rounded-full text-xs font-semibold text-text-primary flex items-center gap-2 bottom-8 right-0 sm:right-4 animate-float" style={{ animationDelay: "1s" }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span>Software Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
