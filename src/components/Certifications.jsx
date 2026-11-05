import React from 'react';
import { ShieldCheck, Award, Eye, ExternalLink, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications({ onOpenLightbox }) {
  const verifiedCerts = [
    {
      id: "cert-cognithon",
      title: "Second Place Award — Cognithon 2026",
      organization: "IEEE School of Engineering & Tata Consultancy Services (TCS)",
      date: "2026",
      image: "/assets/Achievements/certificate2.jpeg",
      caption: "Awarded second place in Cognithon as part of IEEE Event 2026 in collaboration with TCS."
    },
    {
      id: "cert-sih",
      title: "Smart India Hackathon 2026 — Internal Hackathon",
      organization: "Ministry of Education Innovation Cell & Pillai College of Arts, Commerce & Science",
      date: "August 30, 2026",
      image: "/assets/Achievements/certificate3.jpeg",
      caption: "Certificate of Participation & 2nd Place Selection for Smart India Hackathon 2026 Internal Hackathon."
    },
    {
      id: "cert-bitfest",
      title: "Fourth Prize — Mini Hackathon (BITFEST 2026)",
      organization: "Computer Association of Pillai University School of Computing",
      date: "2026",
      image: "/assets/Achievements/certificate1.jpeg",
      caption: "Secured Fourth Prize in Mini Hackathon for developing RASEED duplicate receipt auditing platform."
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-[#F6EEE9]/60 relative border-t border-[#E8D4CE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D4CE]/70 text-[#5F1D21] text-xs font-semibold uppercase tracking-wider font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7A3035]" />
            Verified Credentials
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F1D21] tracking-tight">
            Certifications & Continuous Learning
          </h2>
          <p className="text-sm text-[#6B575B] mt-3 font-sans">
            Authentic, verified competition credentials and continuous learning tracks. Click any certificate to inspect full resolution.
          </p>
          <div className="w-20 h-1 bg-[#7A3035] rounded-full mt-4" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verifiedCerts.map((cert) => (
            <div 
              key={cert.id}
              className="rounded-3xl bg-[#FFF9F5] border-2 border-[#E8D4CE] overflow-hidden shadow-xs hover:border-[#7A3035]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Certificate Preview Frame */}
                <div 
                  className="relative aspect-[4/3] bg-[#FAF3F0] overflow-hidden border-b border-[#E8D4CE] cursor-pointer"
                  onClick={() => onOpenLightbox(cert.image, cert.title, cert.caption)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#5F1D21]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs">
                    <Eye className="w-4 h-4" /> Enlarge Certificate
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#FFF9F5]/90 backdrop-blur-xs text-[10px] font-mono font-bold text-[#5F1D21] border border-[#E8D4CE]">
                    {cert.date}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-[#5F1D21] mb-1.5 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-[#7A3035] mb-2">
                    {cert.organization}
                  </p>
                  <p className="text-xs text-[#6B575B] font-sans leading-relaxed">
                    {cert.caption}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-[#E8D4CE]/80 bg-[#F6EEE9]/50 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Document
                </span>
                <button
                  onClick={() => onOpenLightbox(cert.image, cert.title, cert.caption)}
                  className="text-xs font-semibold text-[#5F1D21] hover:text-[#7A3035] inline-flex items-center gap-1"
                >
                  <span>Inspect</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning Track Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-white border-2 border-[#E8D4CE] shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#7A3035] mb-2">
                <BookOpen className="w-4 h-4 text-[#7A3035]" />
                <span>Active Learning Roadmap</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#5F1D21]">
                Continuous Technical Advancement
              </h3>
              <p className="text-xs sm:text-sm text-[#6B575B] mt-1 max-w-2xl font-sans">
                Currently advancing knowledge in Machine Learning Model Deployment, Advanced Algorithmic Patterns in Java, and Distributed Database Schemas.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#F6EEE9] text-[#5F1D21] font-mono text-xs font-semibold border border-[#E8D4CE]">
                Java DSA Specialization
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#F6EEE9] text-[#5F1D21] font-mono text-xs font-semibold border border-[#E8D4CE]">
                FastAPI & Microservices
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#F6EEE9] text-[#5F1D21] font-mono text-xs font-semibold border border-[#E8D4CE]">
                Data Pipelines in Python
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

