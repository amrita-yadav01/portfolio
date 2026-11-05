import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  BarChart3, 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  Sparkles,
  Layers,
  Binary
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { categories } = portfolioData.skills;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryIcons = {
    languages: Terminal,
    web: Globe,
    databases: Database,
    datascience: BarChart3,
    fundamentals: Cpu,
  };

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#FFF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6EEE9] text-[#5F1D21] text-xs font-semibold uppercase tracking-wider font-mono mb-3 border border-[#E8D4CE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A3035]" />
            Technical Toolkit
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F1D21] tracking-tight">
            Core Competencies & Engineering Stack
          </h2>
          <p className="text-sm text-[#6B575B] mt-3 font-sans">
            A comprehensive overview of programming languages, web stacks, data pipelines, and computer science foundations built through coursework and project development.
          </p>
          <div className="w-20 h-1 bg-[#7A3035] rounded-full mt-4" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#E8D4CE] pb-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#5F1D21] text-white shadow-sm'
                : 'bg-[#F6EEE9] text-[#6B575B] hover:text-[#5F1D21] hover:bg-[#E8D4CE]'
            }`}
          >
            All Competencies ({categories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code2;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  isSelected
                    ? 'bg-[#5F1D21] text-white shadow-sm'
                    : 'bg-[#F6EEE9] text-[#6B575B] hover:text-[#5F1D21] hover:bg-[#E8D4CE]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20' : 'bg-[#E8D4CE]'}`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code2;
            return (
              <div 
                key={category.id}
                className="rounded-3xl bg-[#FFF9F5] border-2 border-[#E8D4CE] p-6 sm:p-7 shadow-xs hover:border-[#7A3035]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8D4CE]/80 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#F6EEE9] text-[#5F1D21] flex items-center justify-center border border-[#E8D4CE]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg text-[#5F1D21]">
                          {category.name}
                        </h3>
                        <span className="text-[11px] font-mono text-[#8B343A]">
                          {category.skills.length} core technologies
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#6B575B] mb-5 leading-relaxed font-sans">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill, idx) => (
                      <div 
                        key={idx}
                        className="p-3 rounded-2xl bg-[#F6EEE9]/70 border border-[#E8D4CE]/80 hover:bg-[#F6EEE9] transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-serif font-bold text-sm text-[#332528]">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7A3035]" />
                        </div>
                        <div className="text-[11px] text-[#6B575B] mt-1 font-sans">
                          {skill.focus}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Indicator */}
                <div className="pt-5 mt-5 border-t border-[#E8D4CE]/60 flex items-center justify-between text-[11px] text-[#8B343A] font-mono">
                  <span>Verified in Projects</span>
                  <span className="font-semibold">Hands-on application</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Skill Progression */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F6EEE9]/90 border border-[#E8D4CE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#7A3035] shrink-0" />
            <p className="text-xs text-[#332528] font-sans">
              <strong>Ethical Skill Presentation:</strong> In alignment with professional standards, skills are represented by applied concepts and project execution rather than arbitrary proficiency percentages.
            </p>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-[#5F1D21] hover:text-[#7A3035] whitespace-nowrap underline underline-offset-4"
          >
            See skills applied in projects &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}

