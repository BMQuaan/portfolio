"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-[1000px] mx-auto relative text-center">
      {/* Header */}
      <div className="mb-14">
        <span className="text-xs font-semibold uppercase text-primary tracking-widest block">Get In Touch</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-text-primary tracking-tight">Let&apos;s Connect</h2>
      </div>

      <p className="text-base leading-relaxed text-text-secondary max-w-[600px] mx-auto mb-12">
        I am currently open to new opportunities, internship positions, or collaborations. 
        If you have a question or just want to say hi, feel free to reach out through any of these channels!
      </p>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Email Card */}
        <div className="bg-surface border border-surface-border flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:border-primary/20">
          <div className="w-12 h-12 rounded-2xl primary-badge flex items-center justify-center mb-4 flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5">Email Me</span>
          <a href="mailto:mquan347bbb@gmail.com" className="text-sm font-semibold text-text-primary hover:text-primary transition-colors duration-205 break-all">
            mquan347bbb@gmail.com
          </a>
        </div>

        {/* Phone Card */}
        <div className="bg-surface border border-surface-border flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:border-primary/20">
          <div className="w-12 h-12 rounded-2xl primary-badge flex items-center justify-center mb-4 flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5">Call Me</span>
          <a href="tel:0354325496" className="text-sm font-semibold text-text-primary hover:text-primary transition-colors duration-205">
            0354325496
          </a>
        </div>

        {/* Location Card */}
        <div className="bg-surface border border-surface-border flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:border-primary/20">
          <div className="w-12 h-12 rounded-2xl primary-badge flex items-center justify-center mb-4 flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5">Location</span>
          <span className="text-sm font-semibold text-text-primary">
            Ho Chi Minh City, Vietnam
          </span>
        </div>
      </div>

      {/* Socials */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Connect on Socials</span>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/BMQuaan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-text-primary transition-all duration-200" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
