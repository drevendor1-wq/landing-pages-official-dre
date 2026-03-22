"use client"
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    "https://cdn.darglobal.co.uk/DG_AL_Zafiro_Villa_Ext_1_2_bd6c43ca4f.jpg",
    "https://cdn.darglobal.co.uk/DG_AL_Zafiro_Villa_Ext_3_2_e17dec1c88.jpg",
    "https://cdn.darglobal.co.uk/Painite_Villa_int_2_copy_562551c670.jpg",
    "https://cdn.darglobal.co.uk/DG_AL_Zafiro_Villa_Int_Living_2_0faff39b0c.jpg",
    "https://cdn.darglobal.co.uk/Painite_Villa_ext_copy_7bafee0639.jpg",
    "https://cdn.darglobal.co.uk/Painite_Villa_int_1_copy_8d76783c31.jpg",
    "https://cdn.darglobal.co.uk/Painite_Villa_int_1_copy_8d76783c31.jpg",
    "https://cdn.darglobal.co.uk/DG_AL_Tierra_Viva_Aerial_3_10_06_38_AM_a7969fd872.jpg",
    "https://cdn.darglobal.co.uk/DG_AL_Esmeralda_Villa_Int_Living_Terrace_2_e8cf4aab14.jpg",
    "https://cdn.darglobal.co.uk/DG_AL_Tierra_Viva_Aerial_2_10_06_38_AM_54b1673004.jpg",
    "https://cdn.darglobal.co.uk/DG_AL_Esmeralda_Villa_Int_Master_Bedroom_2_2d3ff4edf2.jpg",
    "https://cdn.darglobal.co.uk/DG_AL_Zafiro_Villa_Int_Dining_2_59588f9ca6.jpg"
  ];

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const showNext = useCallback(() => {
    setSelectedIdx((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  const showPrev = useCallback(() => {
    setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="gallery" className="py-40 px-6 bg-gradient-to-b from-[#F9F7F3] to-[#EFEDE8]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <span className="text-green-700 font-light tracking-[0.6em] uppercase text-[10px] mb-5 block">
            Visual Journey
          </span>

          <h2 className="text-5xl md:text-7xl font-serif text-[#0A1F1F] tracking-tight">
            <span className="italic">GALLERY</span>
          </h2>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-green-700 to-transparent mx-auto mt-8"></div>
        </motion.div>

        {/* Ultra Premium Grid */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
        >
          {images.map((img, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              onClick={() => setSelectedIdx(i)}
              className={`group cursor-pointer relative ${
                i % 3 === 0 ? "lg:translate-y-24" : 
                i % 3 === 2 ? "lg:-translate-y-24" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-[28px] bg-white/70 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.08)] border border-white/60 transition-all duration-700 group-hover:shadow-[0_40px_120px_rgba(0,0,0,0.18)] group-hover:-translate-y-2">

                {/* Image */}
                <div className="overflow-hidden rounded-[28px] aspect-[4/5]">
                  <img 
                    src={img} 
                    alt={` ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-115" 
                  />
                </div>

                {/* Luxury Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-[28px]" />

                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-[28px] border border-white/20 opacity-0 group-hover:opacity-100 transition duration-700" />

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6"
            onClick={() => setSelectedIdx(null)}
          >

            <button className="absolute top-10 right-10 text-white/30 hover:text-green-500 transition">
              <X size={34} strokeWidth={1.2} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition p-4"
            >
              <ChevronLeft size={44} />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition p-4"
            >
              <ChevronRight size={44} />
            </button>

            <motion.div 
              key={selectedIdx}
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
              className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedIdx]} 
                className="w-full h-full object-contain rounded-xl shadow-[0_0_140px_rgba(0,0,0,0.7)]"
                alt=""
              />

              <div className="mt-12 flex items-center gap-4">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedIdx(idx)}
                    className={`h-[2px] rounded-full transition-all duration-500 ${
                      idx === selectedIdx ? 'w-16 bg-green-500' : 'w-6 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <div className="mt-6 text-white/30 text-[10px] tracking-[0.5em] uppercase">
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