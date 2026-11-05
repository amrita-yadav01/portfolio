import React from 'react';
import { Award, Trophy, Medal, Flag, GraduationCap, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements({ onOpenLightbox }) {
  const { achievements } = portfolioData;

  const iconMap = {
    Award: Award,
    Trophy: Trophy,
    Medal: Medal,
    Flag: Flag,
    GraduationCap: GraduationCap
  };

  return (
    <section id="achievements" className="py-24 bg-[#F6EEE9]/50 relative border-t border-[#E8D4CE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D4CE]/70 text-[#5F1D21] text-xs font-semibold uppercase tracking-wider font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A3035]" />
            Verified Honors
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F1D21] tracking-tight">
            Achievements & Recognition
          </h2>
          <p className="text-sm text-[#6B575B] mt-3 font-sans">
            A concise record of verified podium finishes, institutional accolades, and academic milestones achieved through competition and dedicated study.
          </p>
          <div className="w-20 h-1 bg-[#7A3035] rounded-full mt-4" />
        </div>

        {/* Recognition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <div 
                key={item.id}
                className="p-7 rounded-3xl bg-[#FFF9F5] border-2 border-[#E8D4CE] shadow-xs hover:border-[#7A3035]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F6EEE9] text-[#7A3035] flex items-center justify-center border border-[#E8D4CE]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#E8D4CE]/60 text-[#5F1D21]">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#5F1D21] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-[#7A3035] mb-3">
                    {item.organization}
                  </p>

                  <p className="text-xs text-[#332528] leading-relaxed font-sans">
                    {item.summary}
                  </p>
                </div>

                {/* Footer Certificate Trigger */}
                <div className="pt-5 mt-5 border-t border-[#E8D4CE]/70 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Result</span>
                  </div>

                  {item.certificateImg && (
                    <button
                      onClick={() => onOpenLightbox(item.certificateImg, item.title, item.organization)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#5F1D21] hover:text-[#7A3035] hover:underline"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#7A3035]" />
                      <span>View Proof</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

