import React from 'react';
import { ArrowUp, Heart, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#332528] text-[#FFF9F5] pt-16 pb-12 border-t-4 border-[#7A3035] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7A3035] to-[#5F1D21] flex items-center justify-center text-white font-serif font-bold text-lg border border-white/20">
                AY
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  {personal.name}
                </h3>
                <p className="text-xs font-mono text-[#E8D4CE]/80">
                  {personal.headline}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#E8D4CE]/80 max-w-md font-sans leading-relaxed">
              Second-year Computer Science student passionate about turning ideas into impactful digital solutions, learning by building, and engineering software that makes a real-world difference.
            </p>

            <div className="text-xs font-mono text-[#B5827C]">
              Pillai College of Arts, Commerce and Science (Pillai University) • 2025–2028
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8D4CE]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#E8D4CE]/80">
              <li><a href="#about" className="hover:text-white transition-colors">About & Education</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Technical Toolkit</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#hackathons" className="hover:text-white transition-colors">Hackathon Journey</a></li>
              <li><a href="#achievements" className="hover:text-white transition-colors">Honors & Awards</a></li>
              <li><a href="#resume" className="hover:text-white transition-colors">Download Resume</a></li>
            </ul>
          </div>

          {/* Connect Column (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8D4CE]">
              Stay Connected
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#7A3035] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#7A3035] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.contact.email}`}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#7A3035] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-[#E8D4CE]/70">
              Open to internship roles and technical collaborations for 2026.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D4CE]/70">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Amruta Yadav. Built with passion & precision.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[#B5827C]">
              Light Editorial Burgundy Theme
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#7A3035] text-white transition-colors border border-white/10 text-xs font-medium"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
