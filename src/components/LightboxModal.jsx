import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, image, title, caption }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#332528]/80 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-[#FFF9F5] rounded-2xl overflow-hidden border border-[#B5827C]/30 shadow-2xl transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8D4CE] bg-[#F6EEE9]/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7A3035]"></span>
            <h3 className="font-serif text-lg font-bold text-[#332528] tracking-tight">
              {title || 'Image Preview'}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={image} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-[#7A3035] hover:text-[#5F1D21] hover:bg-[#E8D4CE]/50 rounded-lg transition-colors text-xs font-medium flex items-center gap-1"
              title="Open full resolution in new tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Original</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-[#6B575B] hover:text-[#5F1D21] hover:bg-[#E8D4CE]/60 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Image Body */}
        <div className="p-4 sm:p-6 bg-[#FAF3F0] flex items-center justify-center max-h-[75vh] overflow-auto">
          <img 
            src={image} 
            alt={title || 'Enlarged visual'} 
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-md border border-[#E8D4CE]"
          />
        </div>

        {/* Modal Caption */}
        {caption && (
          <div className="px-6 py-4 bg-[#FFF9F5] border-t border-[#E8D4CE]">
            <p className="text-sm text-[#6B575B] font-sans leading-relaxed">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

