import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Maximize2, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  { id: 1, category: 'EXTERIOR', url: '/images/sobha-sanctuary/SobhaSanctuaryExterior1.jpg', size: 'md:col-span-2 md:row-span-2' },
  { id: 2, category: 'INTERIOR', url: '/images/sobha-sanctuary/SobhaSanctuaryInterior1.jpg', size: 'md:col-span-2 md:row-span-2' },
  { id: 3, category: 'INTERIOR', url: '/images/sobha-sanctuary/SobhaSanctuaryInterior2.jpg', size: 'col-span-1 row-span-1' },
  { id: 4, category: 'INTERIOR', url: '/images/sobha-sanctuary/SobhaSanctuaryInterior3.jpg', size: 'col-span-1 row-span-1' },
  { id: 5, category: 'EXTERIOR', url: '/images/sobha-sanctuary/SobhaSanctuaryExterior2.jpg', size: 'col-span-1 row-span-1' },
  { id: 6, category: 'EXTERIOR', url: '/images/sobha-sanctuary/SobhaSanctuaryExterior3.jpg', size: 'col-span-1 row-span-1' },
];

type GalleryImage = typeof GALLERY_IMAGES[0];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('EXTERIOR');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const touchStartX = useRef<number | null>(null);

  const categories = ['EXTERIOR', 'INTERIOR'];
  const filteredImages = filter === 'ALL' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter);

  const handleNext = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  }, [selectedImage, filteredImages]);

  const handlePrev = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  }, [selectedImage, filteredImages]);

  // Handle Swipe for Mobile
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
        diff > 0 ? handleNext() : handlePrev();
    }
    touchStartX.current = null;
  };

  // Lock scroll when modal open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-5 h-5 text-amber-700" />
              <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-700">GALLERY</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-title font-bold leading-tight uppercase">THE ART OF LIVING</h3>
          </div>

          <div className="flex flex-nowrap gap-8 border-b border-gray-100 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-bold tracking-[0.3em] uppercase pb-4 transition-all relative
                  ${filter === cat ? 'text-black' : 'text-gray-400'}`}
              >
                {cat}
                {filter === cat && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-700"></span>}
              </button>
            ))}
          </div>
        </div>

        {/* Improved Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[250px]">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`relative overflow-hidden group cursor-pointer rounded-sm ${image.size} min-h-[250px] animate-in fade-in zoom-in-95`}
            >
              <img 
                src={image.url} 
      
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Mobile overlay indicator (subtle) */}
              <div className="absolute top-4 right-4 md:hidden bg-black/20 backdrop-blur-md p-2 rounded-full">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
              <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-col justify-end p-8">
                 <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                    <Maximize2 className="w-4 h-4" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center animate-in fade-in duration-300"
          role="dialog"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={() => setSelectedImage(null)}></div>

          {/* Close Button - Larger touch target for mobile */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-[210] text-white/70 p-3"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Desktop Navigation Arrows (hidden on small mobile) */}
          <button onClick={handlePrev} className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white p-4 bg-white/5 rounded-full"><ChevronLeft className="w-10 h-10" /></button>
          <button onClick={handleNext} className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white p-4 bg-white/5 rounded-full"><ChevronRight className="w-10 h-10" /></button>

          {/* Image Container */}
          <div className="relative z-[205] w-full h-full flex flex-col items-center justify-center p-4">
            <img 
              src={selectedImage.url} 
              
              className="max-w-full max-h-[60vh] md:max-h-[80vh] object-contain shadow-2xl"
            />
            
            <div className="mt-8 text-center">
               <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
              </p>
            </div>

            {/* Mobile-only bottom navigation controls */}
            <div className="flex md:hidden items-center gap-12 mt-8">
                <button onClick={handlePrev} className="p-4 text-white/50 active:text-white"><ChevronLeft className="w-8 h-8" /></button>
                <button onClick={handleNext} className="p-4 text-white/50 active:text-white"><ChevronRight className="w-8 h-8" /></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;