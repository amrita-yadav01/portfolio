import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import HackathonJourney from './components/HackathonJourney';
import Achievements from './components/Achievements';
import Community from './components/Community';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import ProjectDetailsModal from './components/ProjectDetailsModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Lightbox State
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    image: null,
    title: '',
    caption: ''
  });

  // Project Details Modal State
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false);

  // Active Section Observer
  useEffect(() => {
    const sectionIds = [
      'home', 
      'about', 
      'skills', 
      'projects', 
      'hackathons', 
      'achievements', 
      'community', 
      'certifications', 
      'resume', 
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (image, title, caption) => {
    setLightbox({
      isOpen: true,
      image,
      title: title || 'Visual Preview',
      caption: caption || ''
    });
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setIsProjectDetailsOpen(true);
  };

  const handleCloseProjectDetails = () => {
    setIsProjectDetailsOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#332528] selection:bg-[#E8D4CE] selection:text-[#5F1D21] font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenLightbox={openLightbox} />
        <About />
        <Skills />
        <Projects 
          onSelectProject={handleSelectProject} 
          onOpenLightbox={openLightbox} 
        />
        <HackathonJourney onOpenLightbox={openLightbox} />
        <Achievements onOpenLightbox={openLightbox} />
        <Community />
        <Certifications onOpenLightbox={openLightbox} />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Screen Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        image={lightbox.image}
        title={lightbox.title}
        caption={lightbox.caption}
      />

      {/* Project Details Modal */}
      <ProjectDetailsModal
        isOpen={isProjectDetailsOpen}
        onClose={handleCloseProjectDetails}
        project={selectedProject}
        onOpenLightbox={openLightbox}
      />
    </div>
  );
}
