import React from 'react';
import { HeartHandshake, Users, Shield, Megaphone, CheckCircle2, Sparkles, Building2, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Community() {
  const { community } = portfolioData;

  const pillarIcons = [
    Megaphone,
    Users,
    Shield,
    HeartHandshake
  ];

  return (
    <section id="community" className="py-24 bg-[#FFF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6EEE9] text-[#5F1D21] text-xs font-semibold uppercase tracking-wider font-mono mb-3 border border-[#E8D4CE]">
            <HeartHandshake className="w-3.5 h-3.5 text-[#7A3035]" />
            Social Responsibility & Service
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F1D21] tracking-tight">
            Community Involvement & Citizenship
          </h2>
          <p className="text-sm text-[#6B575B] mt-3 font-sans">
            Giving back through grassroots civic engagement, public welfare awareness, and collaborative volunteer initiatives.
          </p>
          <div className="w-20 h-1 bg-[#7A3035] rounded-full mt-4" />
        </div>

        {/* Feature Hero Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FFF9F5] via-[#FAF3F0] to-[#F6EEE9] border-2 border-[#E8D4CE] p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D4CE] text-[#5F1D21] text-xs font-mono font-bold">
                <span>{community.period}</span>
                <span>•</span>
                <span>Active Volunteer</span>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold text-[#5F1D21]">
                  {community.role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A3035] mt-1 font-medium">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    {community.organization}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {community.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#332528] leading-relaxed font-sans">
                {community.description}
              </p>

              {/* Core NSS Values */}
              <div className="p-4 rounded-2xl bg-white/80 border border-[#E8D4CE] text-xs text-[#7A3035] italic font-serif">
                "Not Me, But You — Dedicated to cultivating empathy, social awareness, and collective responsibility beyond the classroom."
              </div>
            </div>

            {/* Right Pillars (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {community.pillars.map((pillar, idx) => {
                const Icon = pillarIcons[idx] || CheckCircle2;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-white/90 border border-[#E8D4CE] hover:border-[#7A3035]/50 transition-all flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#F6EEE9] text-[#7A3035] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xs text-[#5F1D21]">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] text-[#6B575B] mt-0.5 font-sans leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

