"use client"
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const images = [
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Marassi-Lea-Amenities.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Marassi-Skaia-Hero.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Communities-Marassi-North-Coast-13.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Marassi-Skaia-1.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Marassi-Riva-Golf-Hero.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Marassi-Marassi-Bay-Hero.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Marassi-Marassi-Bay-1.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Marassi-Altea-Hero.jpg",
    "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Marassi-Marina-Front-Residences-3.jpg"
  
  ];

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // --- Navigation Logic ---
  const showNext = useCallback(() => {
    setSelectedIdx((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  const showPrev = useCallback(() => {
    setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  // Keyboard support (Esc to close, Arrows to traverse)
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

  // --- Animation Variants ---
  // --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

  return (
    <section id="gallery" className="py-32 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-green-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Visual Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#062C2D] tracking-tighter">
          <span className="italic">GALLERY</span>
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Storyboard Grid: Staggered Column Offsets */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {images.map((img, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              onClick={() => setSelectedIdx(i)}
              // Column-based staggering logic:
              // Left Column (0, 3): Offset Down
              // Middle Column (1, 4): Neutral
              // Right Column (2, 5): Offset Up
              className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/5 bg-white p-2 border border-white transition-all duration-500 hover:shadow-green-900/10 ${
                i % 3 === 0 ? "lg:translate-y-16" : 
                i % 3 === 2 ? "lg:-translate-y-16" : 
                "HI"
              }`}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                <img 
                  src={img} 
                  alt={` ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- Lightbox / Modal --- */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#062C2D]/98 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            {/* UI Controls */}
            <button className="absolute top-10 right-10 text-white/50 hover:text-green-500 transition-colors z-[110]">
              <X size={32} strokeWidth={1.5} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-green-500 transition-all p-4 bg-white/5 rounded-full hover:bg-white/10 hidden md:block"
            >
              <ChevronLeft size={48} />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-green-500 transition-all p-4 bg-white/5 rounded-full hover:bg-white/10 hidden md:block"
            >
              <ChevronRight size={48} />
            </button>

            {/* Main Content Area */}
            <motion.div 
              key={selectedIdx}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-w-6xl w-full max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedIdx]} 
                className="w-full h-full object-contain shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-lg"
                alt="Enlarged gallery view"
              />
              
              {/* Progress/Navigation Dots */}
              <div className="mt-12 flex items-center gap-4">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedIdx(idx)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      idx === selectedIdx ? 'w-12 bg-green-500' : 'w-4 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              
              <div className="mt-6 text-white/40 text-[10px] tracking-[0.4em] uppercase font-bold">
                 {selectedIdx + 1} of {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;