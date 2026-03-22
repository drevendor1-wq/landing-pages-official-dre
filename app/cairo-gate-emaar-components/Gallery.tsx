"use client"
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Search } from 'lucide-react';

const Gallery = () => {
  const images = [
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Hero.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Haven-Villas-3.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Haven-Villas-Hero.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Elie-Saab-Signature-Villas-1.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Elie-Saab-Signature-Villas-4.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Grand-Residences-Hero.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Elie-Saab-Signature-Villas-2.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Grand-Residences-2-Amenities.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Elan-Hero.jpg"
  ];

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const showNext = useCallback(() => setSelectedIdx((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0)), [images.length]);
  const showPrev = useCallback(() => setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1)), [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, showNext, showPrev]);

  return (
    <section id="gallery" className="py-32 px-6 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-green-600 font-bold tracking-[0.6em] uppercase text-[10px] mb-4 block">Visual Legacy</span>
            <h2 className="text-5xl md:text-8xl font-serif text-[#062C2D] tracking-tighter leading-none">
              The <span className="italic font-light text-green-500">Gallery</span>
            </h2>
          </motion.div>
          <p className="text-slate-400 max-w-xs text-sm font-light leading-relaxed">A curated collection of architectural marvels and interior masterpieces at Cairo Gate.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onClick={() => setSelectedIdx(i)}
              className="relative group cursor-pointer overflow-hidden bg-white shadow-sm"
            >
              <div className="relative overflow-hidden">
                <img src={img} alt={`Gallery ${i}`} className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#062C2D]/0 group-hover:bg-[#062C2D]/40 transition-all duration-500 flex items-center justify-center">
                  <Search className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500" size={32} strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center" onClick={() => setSelectedIdx(null)}>
            <button className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"><X size={32} strokeWidth={1} /></button>
            <motion.img 
              key={selectedIdx} 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              src={images[selectedIdx]} 
              className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;