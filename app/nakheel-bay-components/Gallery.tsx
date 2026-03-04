"use client"
import { motion } from 'motion/react';

const Gallery = () => {
  const images = [
    "https://bay-villas.sale-office.ae/wp-content/uploads/2026/01/bay_villas_banner.webp",
    "https://bay-villas.sale-office.ae/wp-content/uploads/2026/01/bay_villas_banner-8.jpg",
    "https://bay-villas.sale-office.ae/wp-content/uploads/2026/01/bay_villas_banner-7.jpg",
    "https://bay-villas.sale-office.ae/wp-content/uploads/2026/01/bay_villas_banner-1.jpg",
    "https://bay-villas.sale-office.ae/wp-content/uploads/2026/01/bay_villas_banner-3.jpg",
    "https://bay-villas.sale-office.ae/wp-content/uploads/2026/01/bay_villas_banner-9.jpg",
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-bay-blue/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">GALLERY</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={img} alt={`Bay Villas Gallery ${i}`} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;