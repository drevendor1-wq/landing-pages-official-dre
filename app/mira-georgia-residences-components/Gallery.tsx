"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, ArrowLeft, Maximize } from 'lucide-react';

const GalleryLuxuryOne = () => {
  const images = [
    "https://mira.static.bigapp.ae/38_8414c2ed5a_903b45588e.webp",
    "https://mira.static.bigapp.ae/35_c86dfa0678_239bbaeb8b.webp",
    "https://mira.static.bigapp.ae/46_3b825b0a56_1b20515af1.webp",
    "https://mira.static.bigapp.ae/25_ddb1e1964a_30155d295f.webp",
    "https://mira.static.bigapp.ae/32_04d73b5cc5_7af19da69f.webp",
    "https://mira.static.bigapp.ae/66_889908666a_202d1b3393.webp",
    "https://mira.static.bigapp.ae/43_1d298f7bfb_a53f1a0b75.webp",
    "https://mira.static.bigapp.ae/44_83e95c9b39_823753f0d1.webp",
    "https://mira.static.bigapp.ae/49_39355b57aa_f624cb4426.webp",
    "https://mira.static.bigapp.ae/41_036238cb04_9c486389c5.webp",
    "https://mira.static.bigapp.ae/56_bf30baa50b_d93312967f.webp",
    "https://mira.static.bigapp.ae/64_a1f2c50d53_48f43943f7.webp",
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
              initial={{ y: 100 }} whileInView={{ y: 0 }} viewport={{ once: true }}
              className="text-7xl md:text-9xl font-serif text-slate-900 tracking-tighter"
            >
              Gallery<span className="text-[#047857]">.</span>
            </motion.h2>
          </div>
          <div className="text-right">
            <p className="text-[#047857] font-bold tracking-[0.3em] uppercase text-[14px] mb-2">Mira Verde</p>
            <p className="text-slate-400 font-light">Tbilisi Hills Residential Excellence</p>
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