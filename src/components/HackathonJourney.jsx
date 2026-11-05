import React from 'react';
import { 
  Trophy, 
  Award, 
  Medal, 
  Flag, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  Eye, 
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function HackathonJourney({ onOpenLightbox }) {
  const { hackathons } = portfolioData;

  const getBadgeStyle = (badgeColor) => {
    switch(badgeColor) {
      case 'silver':
        return 'bg-slate-100 text-slate-800 border-slate-300';
      case 'bronze':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'burgundy':
      default:
        return 'bg-[#F6EEE9] text-[#5F1D21] border-[#E8D4CE]';
    }
  };

  const getTrophyIcon = (achievement) => {
    if (achievement.toLowerCase().includes('second')) {
      return <Trophy className="w-5 h-5 text-amber-700" />;
    }
    if (achievement.toLowerCase().includes('fourth')) {
      return <Medal className="w-5 h-5 text-amber-800" />;
    }
    return <Flag className="w-5 h-5 text-[#7A3035]" />;
  };

  return (
    <section id="hackathons" className="py-24 bg-[#FFF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6EEE9] text-[#5F1D21] text-xs font-semibold uppercase tracking-wider font-mono mb-4 border border-[#E8D4CE]">
            <Sparkles className="w-3.5 h-3.5 text-[#7A3035]" />
            High-Intensity Competitive Sprints
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F1D21] tracking-tight">
            BEYOND THE CODE — MY HACKATHON JOURNEY
          </h2>
          <p className="text-base text-[#6B575B] mt-4 font-sans max-w-2xl mx-auto leading-relaxed">
            Collaborating under sprint pressure, architecting full-stack solutions, and solving real-world challenges through relentless iteration and teamwork.
          </p>
          <div className="w-24 h-1 bg-[#7A3035] rounded-full mx-auto mt-5" />
        </div>

        {/* Hackathon Statistics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {hackathons.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-[#F6EEE9]/80 border-2 border-[#E8D4CE] text-center shadow-xs hover:border-[#7A3035]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#5F1D21] mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#332528] font-sans">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-[#8B343A] mt-1">
                {stat.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Editorial Timeline */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#E8D4CE] via-[#7A3035]/40 to-[#E8D4CE] -translate-x-1/2" />

          <div className="space-y-12">
            {hackathons.timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  
                  {/* Timeline Center Node (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFF9F5] border-4 border-[#7A3035] items-center justify-center z-10 shadow-sm">
                    <span className="w-3 h-3 rounded-full bg-[#5F1D21]" />
                  </div>

                  {/* Card Container (alternating left/right on lg) */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:pr-12' : 'lg:col-start-7 lg:pl-12'}`}>
                    
                    <div className="p-7 sm:p-8 rounded-3xl bg-[#FFF9F5] border-2 border-[#E8D4CE] shadow-sm hover:border-[#7A3035]/40 hover:shadow-lg transition-all duration-300 space-y-5">
                      
                      {/* Card Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8D4CE]/80 pb-4">
                        <div className="flex items-center gap-2">
                          <span className="p-2 rounded-xl bg-[#F6EEE9] border border-[#E8D4CE]">
                            {getTrophyIcon(item.achievement)}
                          </span>
                          <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${getBadgeStyle(item.badgeColor)}`}>
                            {item.badge}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-xs font-mono text-[#6B575B]">
                          <Calendar className="w-3.5 h-3.5 text-[#7A3035]" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Event & Organizer Info */}
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#5F1D21] leading-snug">
                          {item.eventName}
                        </h3>
                        <p className="text-xs font-medium text-[#7A3035] mt-1">
                          {item.organizer}
                        </p>
                        {item.project && (
                          <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-[#332528] bg-[#F6EEE9] px-2.5 py-1 rounded-md border border-[#E8D4CE]">
                            <span className="text-[#8B343A] font-semibold">Project:</span> {item.project}
                          </div>
                        )}
                      </div>

                      {/* Problem & Overview */}
                      <p className="text-xs sm:text-sm text-[#332528] leading-relaxed font-sans">
                        {item.overview}
                      </p>

                      {/* Verified Highlights */}
                      <div className="space-y-1.5 text-xs text-[#332528]">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#7A3035] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Links & Verified Certificate Inspection */}
                      <div className="pt-4 border-t border-[#E8D4CE] flex flex-wrap items-center justify-between gap-3">
                        {item.certificateImage ? (
                          <button
                            onClick={() => onOpenLightbox(item.certificateImage, item.certificateTitle, `${item.eventName} — ${item.achievement}`)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F6EEE9] hover:bg-[#E8D4CE] text-[#5F1D21] text-xs font-semibold border border-[#E8D4CE] transition-colors"
                          >
                            <ShieldCheck className="w-4 h-4 text-[#7A3035]" />
                            <span>Inspect Certificate</span>
                          </button>
                        ) : (
                          <span className="text-[11px] font-mono text-[#6B575B]">
                            Verified Hackathon Selection
                          </span>
                        )}

                        <div className="flex items-center gap-2">
                          {item.projectLink && (
                            <a
                              href={item.projectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-[#5F1D21] hover:text-[#7A3035]"
                            >
                              <span>Live App</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}

                          {item.githubLink && (
                            <a
                              href={item.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-[#7A3035] hover:text-[#5F1D21]"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                              <span>Code</span>
                            </a>
                          )}
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
