"use client";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Skills",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Databases",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    skills: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "Node.js (Express)", "MySQL", "MongoDB", "Mongoose ORM"],
  },
  {
    title: "Tools, DevOps & Concepts",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
    skills: ["Git", "Docker", "Postman", "Swagger", "RESTful APIs", "OOP", "JWT Authentication", "Layered Architecture", "Google OAuth", "Zod", "bcrypt", "multer", "nodemailer", "cloudinary"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-[1200px] mx-auto relative">
      {/* Header */}
      <div className="mb-14">
        <span className="text-xs font-semibold uppercase text-primary tracking-widest block">My Profile</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-text-primary tracking-tight">About Me</h2>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
        {/* Left Column: Biography & Stats */}
        <div className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-text-secondary">
            I am a final-year Information Technology student at Posts and Telecommunications Institute of Technology (PTIT HCMC), majoring in Software Engineering. My passion lies in Backend Development, where I enjoy building secure, scalable backend services and designing robust APIs.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            Through my academic curriculum and dedicated personal projects, I have gained hands-on experience building RESTful APIs using Java and Spring Boot, securing endpoints with Spring Security and JWT, and constructing interactive user interfaces with React and Next.js. I am looking for a Backend Developer Internship to apply my skills, learn from experienced mentors, and contribute to real-world software products.
          </p>

          {/* Academic Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="bg-surface border border-surface-border p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-extrabold text-text-primary font-outfit">3.42</div>
              <div className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider mt-2">Cumulative GPA</div>
            </div>
            <div className="bg-surface border border-surface-border p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-extrabold text-text-primary font-outfit">2027</div>
              <div className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider mt-2">Graduation Year</div>
            </div>
            <div className="bg-surface border border-surface-border p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-extrabold text-text-primary font-outfit">800</div>
              <div className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider mt-2">TOEIC English</div>
            </div>
          </div>
        </div>

        {/* Right Column: Skills */}
        <div className="flex flex-col gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index} className="bg-surface border border-surface-border p-6 rounded-2xl shadow-sm">
              <h3 className="text-base font-bold mb-5 flex items-center gap-2.5 text-text-primary">
                <span className="flex items-center text-primary">{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="bg-white/3 border border-surface-border px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-text-secondary transition-all hover:bg-primary/5 hover:border-primary hover:text-text-primary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
