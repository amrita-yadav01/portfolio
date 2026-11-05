import React from 'react';
import { Download, ExternalLink, FileText, CheckCircle2, GraduationCap, Award, Briefcase, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeSection() {
  const { personal, hackathons, projects } = portfolioData;

  return (
    <section id="resume" className="py-24 bg-[#F6EEE9]/50 relative border-t border-[#E8D4CE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D4CE]/70 text-[#5F1D21] text-xs font-semibold uppercase tracking-wider font-mono mb-3">
            <FileText className="w-3.5 h-3.5 text-[#7A3035]" />
            Curriculum Vitae
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F1D21] tracking-tight">
            Official Resume & Credentials
          </h2>
          <p className="text-sm text-[#6B575B] mt-3 font-sans">
            Review a comprehensive overview of academic records, software engineering experience, and technical achievements.
          </p>
          <div className="w-20 h-1 bg-[#7A3035] rounded-full mt-4" />
        </div>

        {/* Resume Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Action Card & Overview (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#5F1D21] text-white shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A3035] text-[#E8D4CE] text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Updated Version • 2026</span>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold text-white leading-tight">
                  {personal.name}
                </h3>
                <p className="text-sm text-[#E8D4CE] font-serif italic mt-1">
                  {personal.headline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#FFF9F5]/90 font-sans leading-relaxed">
                Download my verified resume for detailed course listings, hackathon problem statements, technical toolchains, and community initiatives.
              </p>

              {/* Quick Resume Highlights */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <GraduationCap className="w-5 h-5 text-[#E8D4CE] shrink-0" />
                  <div className="text-xs">
                    <div className="font-bold text-white">B.Sc. Computer Science • 9.77 SGPA</div>
                    <div className="text-[#E8D4CE]/80">Pillai University (2025–2028)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <Award className="w-5 h-5 text-[#E8D4CE] shrink-0" />
                  <div className="text-xs">
                    <div className="font-bold text-white">4 Competitive Hackathons</div>
                    <div className="text-[#E8D4CE]/80">2× 2nd Place, 1× 4th Place, 1 National Selection</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <Briefcase className="w-5 h-5 text-[#E8D4CE] shrink-0" />
                  <div className="text-xs">
                    <div className="font-bold text-white">National Service Scheme (NSS)</div>
                    <div className="text-[#E8D4CE]/80">Community Volunteer & Outreach</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Download & View Actions */}
            <div className="pt-8 space-y-3">
              <a
                href={personal.assets.resumePdf}
                download={personal.assets.resumeFilename}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFF9F5] text-[#5F1D21] hover:bg-white text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg"
              >
                <Download className="w-4 h-4 text-[#7A3035]" />
                <span>Download Official Resume (PDF)</span>
              </a>

              <a
                href={personal.assets.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#7A3035]/80 hover:bg-[#7A3035] text-white text-xs font-semibold tracking-wide transition-all border border-white/15"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in New Browser Tab</span>
              </a>
            </div>

          </div>

          {/* Right: Elegant Editorial Document Preview (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#FFF9F5] border-2 border-[#E8D4CE] shadow-sm flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Document Header Preview */}
              <div className="border-b-2 border-[#5F1D21] pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-[#5F1D21]">
                      AMRUTA YADAV
                    </h4>
                    <p className="text-xs text-[#6B575B] font-mono mt-0.5">
                      {personal.contact.email} • {personal.contact.phone}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#7A3035] font-semibold">
                    Navi Mumbai, India
                  </div>
                </div>
              </div>

              {/* Summary Block */}
              <div>
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A3035] mb-1.5">
                  PROFILE
                </h5>
                <p className="text-xs text-[#332528] leading-relaxed font-sans">
                  Second-year B.Sc. Computer Science student at Pillai College of Arts, Commerce and Science, with a strong interest in software engineering, web development, and data-driven problem solving. Builds practical projects using Java, Python, and web technologies.
                </p>
              </div>

              {/* Education Block */}
              <div>
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A3035] mb-1.5">
                  EDUCATION
                </h5>
                <div className="p-3 rounded-xl bg-[#F6EEE9]/70 border border-[#E8D4CE] text-xs">
                  <div className="flex items-center justify-between font-bold text-[#5F1D21]">
                    <span>Pillai College of Arts, Commerce and Science (Pillai University)</span>
                    <span className="font-mono">2025 – 2028</span>
                  </div>
                  <div className="text-[#332528] mt-0.5">
                    Bachelor of Science (B.Sc.) in Computer Science • Relevant Track: Data Science
                  </div>
                  <div className="text-[#7A3035] font-mono font-bold mt-1">
                    Current SGPA: 9.77 / 10.0
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-[#F6EEE9]/70 border border-[#E8D4CE]">
                  <h6 className="text-[11px] font-mono font-bold text-[#7A3035] uppercase mb-1">
                    Featured Systems
                  </h6>
                  <ul className="text-xs text-[#332528] space-y-1">
                    <li>• UrbanFlow (Traffic & Accident AI)</li>
                    <li>• TRAVORA (Dynamic Tour Engine)</li>
                    <li>• RASEED (Duplicate Receipt Detector)</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F6EEE9]/70 border border-[#E8D4CE]">
                  <h6 className="text-[11px] font-mono font-bold text-[#7A3035] uppercase mb-1">
                    Hackathon Track Record
                  </h6>
                  <ul className="text-xs text-[#332528] space-y-1">
                    <li>• 2× Second Place (College & SIH)</li>
                    <li>• 1× Fourth Place (BITFEST 2026)</li>
                    <li>• 1× National Hackathon Selection</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Note on Updating */}
            <div className="pt-4 border-t border-[#E8D4CE] flex items-center justify-between text-[11px] text-[#6B575B]">
              <span>Direct PDF file: <code className="font-mono text-[#5F1D21] font-semibold">Amruta_Yadav_Updated_Resume.pdf</code></span>
              <span className="font-mono text-[#7A3035]">Ready for Review</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

