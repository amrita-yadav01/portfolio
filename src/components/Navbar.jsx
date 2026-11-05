import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hackathons', href: '#hackathons' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Community', href: '#community' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FFF9F5]/90 backdrop-blur-md shadow-sm border-b border-[#E8D4CE]/80 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 text-decoration-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5F1D21] to-[#7A3035] flex items-center justify-center text-[#FFF9F5] font-serif font-bold text-lg shadow-sm border border-[#5F1D21]/20 transition-transform duration-300 group-hover:scale-105">
              AY
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-[#5F1D21] leading-tight tracking-tight group-hover:text-[#7A3035] transition-colors">
                Amruta Yadav
              </span>
              <span className="text-[10px] tracking-wider uppercase font-mono text-[#8B343A]/80 font-medium">
                Portfolio • 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#F6EEE9]/90 border border-[#E8D4CE] px-3 py-1.5 rounded-full shadow-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#FFF9F5] bg-[#5F1D21] shadow-xs font-semibold'
                      : 'text-[#6B575B] hover:text-[#5F1D21] hover:bg-[#E8D4CE]/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5F1D21] text-[#FFF9F5] hover:bg-[#7A3035] text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden xs:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#5F1D21] text-[#FFF9F5] text-xs font-medium"
            >
              <span>Connect</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#F6EEE9] border border-[#E8D4CE] text-[#5F1D21] hover:bg-[#E8D4CE] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFF9F5]/98 border-b border-[#E8D4CE] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#5F1D21] text-white font-semibold'
                      : 'bg-[#F6EEE9] text-[#332528] hover:bg-[#E8D4CE]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </a>
              );
            })}
          </nav>

          <div className="flex flex-col gap-2 pt-2 border-t border-[#E8D4CE]">
            <a
              href={portfolioData.personal.assets.resumePdf}
              download={portfolioData.personal.assets.resumeFilename}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#7A3035] text-[#5F1D21] bg-white text-xs font-semibold"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#5F1D21] text-white text-xs font-semibold shadow-sm"
            >
              <span>Contact Amruta</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

