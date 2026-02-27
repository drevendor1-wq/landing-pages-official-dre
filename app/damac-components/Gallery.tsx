"use client"
import React, { useState } from 'react';

const images = [
  { url: '/images/damac-islands/DamacIslandsGallery1.jpeg'},
  { url: '/images/damac-islands/DamacIslandsGallery3.jpg'},
  { url: '/images/damac-islands/DamacIslandsGallery2.jpg'},
  { url: '/images/damac-islands/DamacIslandsGallery4.webp'},
  { url: '/images/damac-islands/DamacIslandsGallery6.jpg'},
  { url: '/images/damac-islands/DamacIslandsGallery7.webp'},
  { url: '/images/damac-islands/DamacIslandsGallery5.webp'},
];

const Gallery: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-zinc-500 uppercase tracking-widest text-2xl font-medium mb-4 block">GALLERY</span>
        <h2 className="text-lg font-heading font-light text-zinc-900">Inspired by a legacy of innovation. Discover an architectural collection that breathes the sophistication and timelessness of Damac Islands.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div 
            key={idx}
            className={`relative overflow-hidden rounded-[1.5rem] transition-all duration-700 cursor-pointer ${
              idx === 0 || idx === 5 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'
            }`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <img 
              src={img.url} 
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                hovered === idx ? 'scale-110' : 'scale-100'
              }`}
            />
            {/* <div className={`absolute inset-0 bg-black/40 flex items-end p-8 transition-opacity duration-500 ${
              hovered === idx ? 'opacity-100' : 'opacity-0'
            }`}>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;