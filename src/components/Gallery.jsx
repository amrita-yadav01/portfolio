import React, { useState } from 'react';
import { Camera, Eye, Sparkles, Compass, MapPin, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Gallery({ onOpenLightbox }) {
  const { gallery } = portfolioData;
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Digital Identity', 'Achievement', 'Project Interface'];

  const filteredItems = filter === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#FFF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6EEE9] text-[#5F1D21] text-xs font-semibold uppercase tracking-wider font-mono mb-3 border border-[#E8D4CE]">
              <Camera className="w-3.5 h-3.5 text-[#7A3035]" />
              Creative Eye & Visual Stories
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F1D21] tracking-tight">
              Visual Gallery & Moments
            </h2>
            <p className="text-sm text-[#6B575B] mt-3 font-sans">
              Capturing perspectives through photography, celebrating milestone achievements, and observing the interplay between technology and everyday aesthetics.
            </p>
            <div className="w-20 h-1 bg-[#7A3035] rounded-full mt-4" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  filter === cat
                    ? 'bg-[#5F1D21] text-white shadow-xs'
                    : 'bg-[#F6EEE9] text-[#6B575B] hover:text-[#5F1D21] hover:bg-[#E8D4CE]'
                }`}
              >
                {cat === 'all' ? 'All Visuals' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Editorial Asymmetrical Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isSpanTall = item.aspect === 'tall';
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item.src, item.title, item.description)}
                className={`group relative rounded-3xl overflow-hidden bg-white border-2 border-[#E8D4CE] shadow-xs hover:border-[#7A3035]/60 hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  isSpanTall ? 'sm:row-span-2' : ''
                }`}
              >
                <div className="w-full h-full min-h-[260px] overflow-hidden bg-[#FAF3F0] flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#332528]/85 via-[#5F1D21]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E8D4CE] mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E8D4CE]/90 mt-1 line-clamp-2 font-sans">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-white/90">
                    <Maximize2 className="w-3.5 h-3.5 text-[#B5827C]" />
                    <span>Click to enlarge preview</span>
                  </div>
                </div>

                {/* Permanent Category Tag Top Left */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#FFF9F5]/85 backdrop-blur-xs text-[10px] font-mono font-bold text-[#5F1D21] border border-[#E8D4CE]">
                  {item.category}
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Reflection Note */}
        <div className="mt-12 text-center text-xs text-[#6B575B] italic font-serif">
          "Photography teaches patience, composition, and keen observation—disciplines that carry directly into building refined user interfaces."
        </div>

      </div>
    </section>
  );
}

