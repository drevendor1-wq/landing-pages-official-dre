import React from 'react';

const Amenities: React.FC = () => {
  const items = [
    { title: "Tranquil Lake & Ecopark", img: "/images/damac-islands/DamacIslandAmenity1.jpg" },
    { title: "Whispering Waterfall", img: "/images/damac-islands/DamacIslandAmenity4.jpg" },
    { title: "Botanic Garden", img: "/images/damac-islands/DamacIslandAmenity2.jpg" },
    { title: "Sky Woods Adventure", img: "/images/damac-islands/DamacIslandAmenity3.webp" },
    { title: "Eco Lodge Hospitality", img: "/images/damac-islands/DamacIslandAmenity5.jpg" },
    { title: "Garden of Insight", img: "/images/damac-islands/DamacIslandAmenity6.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-zinc-500 uppercase tracking-widest text-sm font-medium mb-4 block">Lifestyle</span>
        <h2 className="text-3xl md:text-5xl font-heading font-light text-zinc-900">
          World-Class Amenities
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="group relative h-80 overflow-hidden rounded-[2rem] cursor-pointer">
            <img 
              src={item.img} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt={item.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <h4 className="text-white text-xl font-heading font-light">{item.title}</h4>
            </div>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-3 rounded-full">
               <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;