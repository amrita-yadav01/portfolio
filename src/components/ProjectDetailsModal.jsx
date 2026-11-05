import React, { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Database, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectDetailsModal({ isOpen, onClose, project, onOpenLightbox }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#332528]/80 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] bg-[#FFF9F5] rounded-3xl overflow-hidden border border-[#B5827C]/30 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E8D4CE] bg-[#F6EEE9]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-mono font-semibold px-3 py-1 rounded-full bg-[#E8D4CE] text-[#5F1D21] border border-[#B5827C]/30">
              {project.category}
            </span>
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full ${
              project.isLive 
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                : 'bg-amber-50 text-amber-800 border border-amber-200'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${project.isLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6B575B] hover:text-[#5F1D21] hover:bg-[#E8D4CE]/60 rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Title & Tagline */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5F1D21] mb-2">
              {project.name}
            </h2>
            <p className="text-lg text-[#7A3035] font-serif italic">
              {project.tagline}
            </p>
          </div>

          {/* Screenshots Gallery Section */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-3">
              <div 
                className="relative rounded-2xl overflow-hidden border border-[#E8D4CE] bg-[#FAF3F0] group cursor-pointer aspect-video flex items-center justify-center"
                onClick={() => onOpenLightbox(project.screenshots[activeImageIndex].src, project.name, project.screenshots[activeImageIndex].caption)}
              >
                <img 
                  src={project.screenshots[activeImageIndex].src} 
                  alt={project.screenshots[activeImageIndex].caption || project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-[#5F1D21]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm">
                  <Eye className="w-5 h-5" /> Click to enlarge full resolution
                </div>
              </div>

              {/* Thumbnails */}
              {project.screenshots.length > 1 && (
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {project.screenshots.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative rounded-xl overflow-hidden border-2 transition-all aspect-video ${
                        activeImageIndex === idx 
                          ? 'border-[#7A3035] shadow-md scale-102' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={s.src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
              
              <p className="text-xs text-[#6B575B] italic text-center font-sans">
                {project.screenshots[activeImageIndex].caption}
              </p>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#F6EEE9] border border-[#E8D4CE]/80">
              <h4 className="font-serif font-bold text-base text-[#5F1D21] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7A3035]" />
                The Problem
              </h4>
              <p className="text-sm text-[#332528] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF3F0] border border-[#E8D4CE]/80">
              <h4 className="font-serif font-bold text-base text-[#7A3035] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5F1D21]" />
                Engineered Solution
              </h4>
              <p className="text-sm text-[#332528] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#5F1D21] mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#7A3035]" />
              Architectural Highlights & Capabilities
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#E8D4CE]/60">
                  <CheckCircle2 className="w-4 h-4 text-[#7A3035] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#332528] leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#5F1D21] mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#7A3035]" />
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3.5 py-1.5 rounded-lg bg-[#F6EEE9] text-[#5F1D21] font-mono text-xs font-semibold border border-[#E8D4CE]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.hackathonContext && (
            <div className="p-4 rounded-xl bg-[#FFF9F5] border-l-4 border-[#7A3035] text-xs text-[#6B575B] leading-relaxed">
              <strong className="text-[#5F1D21]">Hackathon Context: </strong>
              {project.hackathonContext}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#E8D4CE] bg-[#F6EEE9] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#6B575B]">
            {project.isLive ? 'Deployed on Render Cloud' : 'Source Code Verified on GitHub'}
          </div>

          <div className="flex items-center gap-3">
            {project.isLive && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5F1D21] text-white hover:bg-[#7A3035] transition-all text-sm font-semibold shadow-md hover:shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                Open Live Platform
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#7A3035] text-[#5F1D21] hover:bg-[#E8D4CE]/60 transition-colors text-sm font-semibold"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
