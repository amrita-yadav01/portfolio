import React from 'react';
import { ArrowDown, Download, Mail, ArrowUpRight, Sparkles, Award, Code2, GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenLightbox }) {
  const { personal } = portfolioData;

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
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
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden">
      {/* Decorative Warm Ambient Background Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#E8D4CE]/40 via-[#F6EEE9]/60 to-[#FFF9F5] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#B5827C]/15 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#7A3035]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Introductory Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F6EEE9] border border-[#E8D4CE] text-[#5F1D21] text-xs font-semibold tracking-wider uppercase font-mono shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#7A3035] animate-ping" />
              <span>HELLO, I'M</span>
              <span className="text-[#B5827C]">•</span>
              <span className="text-[#7A3035]">Aspiring Software Engineer</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#5F1D21] tracking-tight leading-[1.08]">
                {personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#7A3035] font-medium leading-snug">
                {personal.headline}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-[#332528]/90 font-sans leading-relaxed max-w-2xl font-normal">
              {personal.shortBio}
            </p>

            {/* Key Academic & Metric Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg py-2">
              <div className="p-3.5 rounded-2xl bg-[#F6EEE9] border border-[#E8D4CE] text-left">
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#7A3035] uppercase mb-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>SGPA</span>
                </div>
                <div className="font-serif text-2xl font-bold text-[#5F1D21]">9.77</div>
                <div className="text-[11px] text-[#6B575B]">B.Sc. Comp Sci</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F6EEE9] border border-[#E8D4CE] text-left">
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#7A3035] uppercase mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Hackathons</span>
                </div>
                <div className="font-serif text-2xl font-bold text-[#5F1D21]">4</div>
                <div className="text-[11px] text-[#6B575B]">2× 2nd Place Finishes</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F6EEE9] border border-[#E8D4CE] text-left">
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#7A3035] uppercase mb-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Projects</span>
                </div>
                <div className="font-serif text-2xl font-bold text-[#5F1D21]">3</div>
                <div className="text-[11px] text-[#6B575B]">Full-Stack Systems</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#5F1D21] text-white hover:bg-[#7A3035] text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.assets.resumePdf}
                download={personal.assets.resumeFilename}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFF9F5] border-2 border-[#7A3035] text-[#5F1D21] hover:bg-[#F6EEE9] text-sm font-semibold tracking-wide transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#7A3035]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#E8D4CE]/60 hover:bg-[#E8D4CE] text-[#5F1D21] text-sm font-semibold tracking-wide transition-all duration-300 border border-[#B5827C]/30"
              >
                <Mail className="w-4 h-4 text-[#7A3035]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Location & Status note */}
            <div className="flex items-center gap-4 text-xs text-[#6B575B] pt-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#7A3035]" />
                <span>Navi Mumbai, India</span>
              </div>
              <span className="text-[#B5827C]">•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Open for 2026 Internships & Software Roles</span>
              </div>
            </div>

          </div>

          {/* Right Column — Editorial Framed Portrait (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Editorial Frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-[#E8D4CE] via-[#FAF3F0] to-[#B5827C]/30 -rotate-2 -z-10 shadow-sm" />
              <div className="absolute -inset-1 rounded-3xl border border-[#7A3035]/20 rotate-1 -z-10" />

              {/* Main Photo Card */}
              <div 
                className="relative rounded-2xl overflow-hidden bg-white border-2 border-[#E8D4CE] shadow-2xl group cursor-pointer"
                onClick={() => onOpenLightbox(personal.assets.avatar, personal.name, "Official professional portrait of Amruta Yadav.")}
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#FAF3F0]">
                  <img
                    src={personal.assets.avatar}
                    alt={personal.avatarAlt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Subtle Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5F1D21]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-[#5F1D21] text-xs font-semibold shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-[#7A3035]" />
                    Click to enlarge portrait
                  </span>
                </div>

                {/* Bottom Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#FFF9F5]/95 backdrop-blur-md border border-[#E8D4CE] shadow-md flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-sm text-[#5F1D21]">Amruta Yadav</span>
                    <span className="text-[11px] text-[#6B575B]">B.Sc. Computer Science • 2028</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-[#F6EEE9] text-[#7A3035] font-mono text-xs font-bold border border-[#E8D4CE]">
                    SGPA 9.77
                  </div>
                </div>
              </div>

              {/* Floating Academic Mini Card Top Right */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 p-2.5 px-3.5 rounded-xl bg-white border border-[#E8D4CE] shadow-lg animate-bounce-subtle">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                <div className="text-[11px] font-sans font-semibold text-[#5F1D21]">
                  Pillai University
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

