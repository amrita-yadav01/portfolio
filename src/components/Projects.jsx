import React, { useState } from 'react';
import { 
  ExternalLink, 
  Info, 
  ChevronRight, 
  Layers, 
  Eye, 
  AlertCircle,
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onSelectProject, onOpenLightbox }) {
  const { projects } = portfolioData;

  // Track active screenshot index for each project card
  const [activeScreenshots, setActiveScreenshots] = useState({
    urbanflow: 0,
    travora: 0,
    raseed: 0
  });

  const handleThumbnailClick = (projectId, index, e) => {
    e.stopPropagation();
    setActiveScreenshots(prev => ({
      ...prev,
      [projectId]: index
    }));
  };

  return (
    <section id="projects" className="py-24 bg-[#F6EEE9]/70 relative border-t border-[#E8D4CE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D4CE]/70 text-[#5F1D21] text-xs font-semibold uppercase tracking-wider font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A3035]" />
              Featured Engineering Work
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F1D21] tracking-tight">
              Flagship Software Systems
            </h2>
            <p className="text-sm text-[#6B575B] mt-3 font-sans">
              Three production and hackathon systems engineered with end-to-end architectures, data pipelines, predictive models, and intuitive user experiences.
            </p>
            <div className="w-20 h-1 bg-[#7A3035] rounded-full mt-4" />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#6B575B]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>2 Live Cloud Deployments • 1 Verified Prototype</span>
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16">
          {projects.map((project, projectIndex) => {
            const currentImgIndex = activeScreenshots[project.id] || 0;
            const currentScreenshot = project.screenshots[currentImgIndex];

            // Primary title click target: if liveUrl exists, open liveUrl; otherwise open githubUrl
            const titleHref = project.liveUrl || project.githubUrl;

            return (
              <div 
                key={project.id}
                className="rounded-3xl bg-[#FFF9F5] border-2 border-[#E8D4CE] overflow-hidden shadow-sm hover:border-[#7A3035]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column (Lg: 7 cols): Interactive Visual Showcase */}
                  <div className="lg:col-span-7 p-6 sm:p-8 bg-[#FAF3F0] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8D4CE]">
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E8D4CE] text-[#5F1D21] border border-[#B5827C]/30">
                          {project.category}
                        </span>

                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                          project.isLive 
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${project.isLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                          {project.status}
                        </span>
                      </div>

                      {/* Main Screenshot Preview */}
                      <div 
                        className="relative rounded-2xl overflow-hidden border border-[#E8D4CE] bg-white group cursor-pointer aspect-video shadow-xs flex items-center justify-center"
                        onClick={() => onOpenLightbox(currentScreenshot.src, project.name, currentScreenshot.caption)}
                      >
                        <img 
                          src={currentScreenshot.src} 
                          alt={currentScreenshot.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-[#5F1D21]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs sm:text-sm">
                          <Eye className="w-4 h-4" /> Click to view full resolution screenshot
                        </div>

                        {/* Slide counter indicator */}
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[#332528]/80 text-white font-mono text-[10px]">
                          {currentImgIndex + 1} / {project.screenshots.length}
                        </div>
                      </div>

                      {/* Screenshot caption */}
                      <p className="text-[11px] text-[#6B575B] italic text-center mt-2 font-sans">
                        {currentScreenshot.caption}
                      </p>
                    </div>

                    {/* Screenshot Thumbnails Strip */}
                    <div className="pt-4 mt-2">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#7A3035] mb-2 flex items-center justify-between">
                        <span>Project Screenshots ({project.screenshots.length})</span>
                        <span className="text-[#6B575B]">Click thumbnail to inspect</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {project.screenshots.map((shot, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={(e) => handleThumbnailClick(project.id, sIdx, e)}
                            className={`relative rounded-xl overflow-hidden border-2 transition-all aspect-video ${
                              currentImgIndex === sIdx 
                                ? 'border-[#7A3035] shadow-xs scale-102 ring-2 ring-[#7A3035]/20' 
                                : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                            aria-label={`View screenshot ${sIdx + 1}`}
                          >
                            <img src={shot.src} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Lg: 5 cols): Editorial Information, Features & Actions */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      
                      {/* Title: Clickable! Opens live site when available, else github */}
                      <div>
                        <a 
                          href={titleHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl font-bold text-[#5F1D21] hover:text-[#7A3035] transition-colors leading-tight"
                          title={`Open ${project.name} ${project.liveUrl ? 'Live Website' : 'GitHub Repository'}`}
                        >
                          <span>{project.name}</span>
                          <ArrowUpRight className="w-5 h-5 text-[#7A3035] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                        <p className="font-serif italic text-sm text-[#7A3035] mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Overview */}
                      <p className="text-xs sm:text-sm text-[#332528] leading-relaxed font-sans">
                        {project.overview}
                      </p>

                      {/* Problem & Solution Mini Blocks */}
                      <div className="p-3.5 rounded-xl bg-[#F6EEE9] border border-[#E8D4CE] space-y-2 text-xs">
                        <div>
                          <strong className="text-[#5F1D21] font-serif block">The Problem:</strong>
                          <span className="text-[#6B575B]">{project.problem}</span>
                        </div>
                      </div>

                      {/* Key Features (Summary) */}
                      <div>
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A3035] mb-2 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Core Capabilities</span>
                        </div>
                        <ul className="space-y-1.5">
                          {project.keyFeatures.slice(0, 4).map((f, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-[#332528]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#7A3035] shrink-0 mt-0.5" />
                              <span className="line-clamp-2">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#6B575B] mb-2">
                          Technologies Used
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((t, tIdx) => (
                            <span 
                              key={tIdx}
                              className="px-2.5 py-1 rounded-md bg-[#F6EEE9] text-[#5F1D21] font-mono text-[11px] font-medium border border-[#E8D4CE]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Action Buttons Section */}
                    <div className="pt-4 border-t border-[#E8D4CE] flex flex-wrap items-center gap-2.5">
                      
                      {/* Live Demo Button (Only when liveUrl is available!) */}
                      {project.isLive && project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#5F1D21] text-white hover:bg-[#7A3035] transition-all text-xs font-semibold shadow-xs hover:shadow-md"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        /* Graceful representation for RASEED where live site is not hosted */
                        <div 
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#E8D4CE]/50 text-[#7A3035] text-[11px] font-medium border border-[#B5827C]/30 text-center cursor-default"
                          title="Live deployment not currently hosted for this hackathon prototype"
                        >
                          <AlertCircle className="w-3.5 h-3.5 text-[#7A3035]" />
                          <span>Prototype (Local / Git)</span>
                        </div>
                      )}

                      {/* GitHub Repository Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#7A3035] text-[#5F1D21] hover:bg-[#E8D4CE]/60 transition-colors text-xs font-semibold"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>

                      {/* View Details Button */}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-[#F6EEE9] text-[#7A3035] hover:text-[#5F1D21] hover:bg-[#E8D4CE] transition-colors text-xs font-medium border border-[#E8D4CE]"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>

                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
