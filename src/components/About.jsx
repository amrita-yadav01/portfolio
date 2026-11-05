import React from 'react';
import { GraduationCap, Award, Compass, Music, Camera, Sparkles, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const outsideIcons = {
    Music: Music,
    Compass: Compass,
    Camera: Camera,
    Sparkles: Sparkles
  };

  return (
    <section id="about" className="py-24 bg-[#F6EEE9]/60 relative border-t border-[#E8D4CE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D4CE]/70 text-[#5F1D21] text-xs font-semibold uppercase tracking-wider font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A3035]" />
            About Me
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F1D21] tracking-tight">
            Curious Mind. Creative Problem Solver. Always Building.
          </h2>
          <div className="w-20 h-1 bg-[#7A3035] rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#FFF9F5] border border-[#E8D4CE] shadow-xs space-y-5">
              <h3 className="font-serif text-2xl font-bold text-[#5F1D21]">
                Bridging Theoretical Foundations with Practical Engineering
              </h3>
              
              {personal.longBio.map((paragraph, idx) => (
                <p key={idx} className="text-[#332528] text-base leading-relaxed font-sans font-normal">
                  {paragraph}
                </p>
              ))}

              {/* Core Pillars */}
              <div className="pt-4 border-t border-[#E8D4CE] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#7A3035] shrink-0 mt-1" />
                  <span className="text-xs text-[#332528] font-medium">Full-Stack Architecture & API Design</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#7A3035] shrink-0 mt-1" />
                  <span className="text-xs text-[#332528] font-medium">Data Modeling & Predictive Analytics</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#7A3035] shrink-0 mt-1" />
                  <span className="text-xs text-[#332528] font-medium">Algorithmic Problem Solving in Java</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#7A3035] shrink-0 mt-1" />
                  <span className="text-xs text-[#332528] font-medium">Sprint Hackathons & Team Collaboration</span>
                </div>
              </div>
            </div>

            {/* Outside Technology Showcase */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFF9F5] to-[#F6EEE9] border border-[#E8D4CE] shadow-xs">
              <h4 className="font-serif text-lg font-bold text-[#5F1D21] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7A3035]" />
                Beyond Technology & Creative Pursuits
              </h4>
              <p className="text-xs text-[#6B575B] mb-5">
                Creative disciplines nurture fresh thinking, empathy, and visual rhythm in my software design.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {personal.outsideTechnology.map((item, idx) => {
                  const Icon = outsideIcons[item.icon] || Sparkles;
                  return (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-white/80 border border-[#E8D4CE] text-center hover:border-[#7A3035] hover:shadow-xs transition-all"
                    >
                      <div className="w-9 h-9 mx-auto mb-2 rounded-xl bg-[#F6EEE9] text-[#7A3035] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="font-serif font-bold text-sm text-[#5F1D21]">{item.name}</div>
                      <div className="text-[11px] text-[#6B575B] mt-1 leading-tight">{item.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column — Academic Information & Distinction (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FFF9F5] via-[#FAF3F0] to-[#F6EEE9] border-2 border-[#E8D4CE] shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5F1D21]/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#7A3035] px-3 py-1 rounded-full bg-[#E8D4CE]/60">
                  ACADEMIC FOUNDATION
                </span>
                <span className="text-xs font-mono text-[#6B575B]">
                  {personal.education.years}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-[#5F1D21]">
                    {personal.education.degree}
                  </h4>
                  <p className="text-sm font-medium text-[#7A3035] mt-1">
                    {personal.education.institution}
                  </p>
                  <p className="text-xs text-[#6B575B] mt-0.5">
                    {personal.education.location}
                  </p>
                </div>

                {/* Prominent SGPA Callout Box */}
                <div className="p-5 rounded-2xl bg-white/90 border border-[#B5827C]/30 shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#6B575B]">
                      Cumulative Performance
                    </div>
                    <div className="text-sm font-semibold text-[#332528]">
                      Current SGPA
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-4xl font-extrabold text-[#5F1D21]">
                      {personal.education.sgpa}
                    </span>
                    <span className="text-xs font-mono text-[#6B575B] ml-1">
                      / {personal.education.sgpaScale}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#332528] pt-2">
                  <div className="flex items-center justify-between py-1.5 border-b border-[#E8D4CE]/60">
                    <span className="text-[#6B575B]">Specialization Track</span>
                    <span className="font-semibold text-[#5F1D21]">Data Science & Software Eng.</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#E8D4CE]/60">
                    <span className="text-[#6B575B]">Expected Graduation</span>
                    <span className="font-semibold text-[#5F1D21]">2028</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#E8D4CE]/60">
                    <span className="text-[#6B575B]">Current Standing</span>
                    <span className="font-semibold text-[#5F1D21]">{personal.education.currentYear}</span>
                  </div>
                </div>
              </div>

              {/* Quote / Mentality */}
              <div className="mt-6 pt-5 border-t border-[#E8D4CE] italic text-xs text-[#7A3035] font-serif leading-relaxed">
                "Consistent academic performance reflects disciplined thinking, time management, and a deep respect for core computer science fundamentals."
              </div>
            </div>

            {/* Quick Fact / Philosophy Banner */}
            <div className="p-6 rounded-3xl bg-[#5F1D21] text-white shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#E8D4CE]">
                <BookOpen className="w-4 h-4 text-[#B5827C]" />
                <span>Development Philosophy</span>
              </div>
              <p className="font-serif text-lg font-medium leading-snug">
                "I believe in learning by building, experimenting with new technologies, and continually improving technical skills through real-world software."
              </p>
              <div className="text-xs text-[#E8D4CE]/80 font-sans">
                — Amruta Yadav
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

