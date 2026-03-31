"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, ArrowLeft, Maximize } from 'lucide-react';

const GalleryLuxuryOne = () => {
  const images = [
    "https://aradawebcontent.blob.core.windows.net/arada-com/2025/08/MAsaar3-banner.jpg",
    "https://aradawebcontent.blob.core.windows.net/arada-com/2023/07/Lp-image-1.jpg",
    "https://arada-masaar3.com/wp-content/uploads/2025/08/Masaar-3-by-Arada-in-Sharjah.jpg",
    "https://www.arada.com/wp-content/uploads/2022/11/Four-Bedroom-Azalea-Villa-rear.jpg",
    "https://aradawebcontent.blob.core.windows.net/arada-com/2022/06/masaar-banner.jpeg",
    "https://aradawebcontent.blob.core.windows.net/arada-com/2022/09/masaar5.png",
    "https://aradawebcontent.blob.core.windows.net/arada-com/2022/09/masaar4.png",
    "https://aradawebcontent.blob.core.windows.net/arada-com/2022/06/masaar-gallery5.png",
    "https://aradawebcontent.blob.core.windows.net/arada-com/2022/06/masaar-gallery3.png",
    "https://aradawebcontent.blob.core.windows.net/arada-com/2022/06/masaar-3.jpg",
    "https://aradawebcontent.blob.core.windows.net/arada-com/2022/06/masaar-1-1.jpg",
    "https://aradawebcontent.blob.core.windows.net/arada-com/2022/07/masaar-4.jpg",
  ];

  const [selectedIdx, setSelectedIdx] = useState(null);

  const showNext = useCallback(() => {
  setSelectedIdx((p:any):any => {
    const current = p ?? 0; // If p is null, treat as 0
    return current < images.length - 1 ? current + 1 : 0;
  });
}, [images.length]);

const showPrev = useCallback(() => {
  setSelectedIdx((p:any):any => {
    const current = p ?? 0; // If p is null, treat as 0
    return current > 0 ? current - 1 : images.length - 1;
  });
}, [images.length]);

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <div className="overflow-hidden">
            <motion.h2 
  initial={{ y: 70 }} // Reduced from 100
  whileInView={{ y: 0 }} 
  viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the element is visible
// Change text-7xl to text-5xl
className="text-5xl sm:text-7xl md:text-9xl font-serif text-slate-900 tracking-tighter"
>
  Gallery<span className="text-[#047857]">.</span>
</motion.h2>
          </div>
        </div>

        {/* The Luxe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i:any) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              onClick={() => setSelectedIdx(i)}
              className={`relative aspect-[3/4] overflow-hidden group cursor-pointer bg-slate-100 ${
                i % 3 === 0 ? "lg:col-span-2 lg:aspect-video" : ""
              }`}
            >
              <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#047857]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Maximize className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col p-6 md:p-12"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-[#047857] font-serif italic text-2xl">0{selectedIdx + 1} / 0{images.length}</span>
              <button onClick={() => setSelectedIdx(null)} className="p-4 hover:rotate-90 transition-transform"><X size={32} strokeWidth={1} /></button>
            </div>
            
            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
              <button onClick={showPrev} className="absolute left-0 z-10 p-4 text-slate-300 hover:text-[#047857] transition-colors"><ArrowLeft size={40} /></button>
              <motion.img 
                key={selectedIdx}
                initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                src={images[selectedIdx]} className="max-w-full max-h-full object-contain shadow-2xl shadow-[#047857]/10" 
              />
              <button onClick={showNext} className="absolute right-0 z-10 p-4 text-slate-300 hover:text-[#047857] transition-colors"><ArrowRight size={40} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryLuxuryOne;