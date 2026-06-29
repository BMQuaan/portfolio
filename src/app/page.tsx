import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-nav-border bg-nav-bg/90 py-8 px-6 text-center text-sm text-text-secondary">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-6">
          <div>
            &copy; {new Date().getFullYear()} Bui Minh Quan. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-text-secondary hover:text-text-primary transition-colors duration-300">Back to top</a>
          </div>
        </div>
      </footer>
    </>
  );
}
