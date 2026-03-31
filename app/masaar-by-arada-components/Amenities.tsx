"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Amenities = () => {
  const amenityCards = [
    {
      title: "Fully Equipped Fitness Club",
      description: "An international-standard course overlooking Tbilisi Hills, offering leisure and prestige to the community.",
      image: "https://digital.ihg.com/is/image/ihg/intercontinental-al-khobar-5999824659-2x1",
    },
    {
      title: "Cafés and Restaurants",
      description: "From casual coffee spots to fine dining, residents can enjoy a diverse culinary scene without leaving home.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Skate Park",
      description: "A destination for fitness, spa, and preventive care programs designed to enhance daily health and well-being.",
      image: "https://www.blacksburg.gov/home/showpublishedimage/5439/638387493718070000",
    },
    {
      title: "Tennis Courts",
      description: "Curated shopping that brings global brands and boutique experiences directly into the neighborhood.",
      image: "https://nearfarmag.com/wp-content/uploads/2023/07/SDP-Tennis-Courts_0003-copy-1024x621.jpg",
    },
    {
      title: "Basketball Courts",
      description: "An international curriculum that reduces relocation barriers and ensures quality education for resident families.",
      image: "https://nshama.ae/wp-content/uploads/2023/01/eeceb1a7fe497e71d363598d20a99839_f1668.jpg",
    },
    {
      title: "Cycling and Running Tracks",
      description: "A hub for computational design, architecture, urbanism, and sustainable technologies— fostering talent and research within the district.",
      image: "https://aradawebcontent.blob.core.windows.net/arada-com/2023/10/Premfors_DSCF1844-Edit.jpg",
    },
    {
      title: "Yoga and Meditation spaces",
      description: "Safe, modern early-learning spaces designed to give families peace of mind and children a strong start.",
      image: "https://www.travelandleisure.com/thmb/lW1vNS1Brw5T1kSNlWm_ny0_OFM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/civana-YOGARETREAT0421-9ad19832cf484cc0b06a9701c39317b4.jpg",
    },
    {
      title: "Children’s Adventure Park",
      description: "Modern workspaces within the community reduce commutes and support a vibrant 15-minute city lifestyle.",
      image: "https://cunninghamrec.com/hubfs/Imported_Blog_Media/Smithville-6_183d17ce614a305ef7e14498bef98c4b.jpg",
    },
  ];

  return (
    <section id="amenities" className="py-24 bg-[#F9F8F6] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#062C2D]">
            Premium <span className="text-[#047857]">Amenities</span>
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.next-btn',
              prevEl: '.prev-btn',
            }}
            pagination={{
              type: 'progressbar',
              el: '.progress-bar',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-20"
          >
            {amenityCards.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/5] overflow-hidden rounded-sm cursor-grab active:cursor-grabbing"
                >
                  {/* Image */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-white text-xl md:text-2xl font-serif mb-3">{item.title}</h3>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Footer Controls (Progress Bar & Arrows) */}
          <div className="mt-10 flex items-center justify-between">
            {/* Custom Progress Bar */}
            <div className="progress-bar !relative !h-[2px] !bg-slate-200 w-full max-w-xl">
              {/* Swiper injects the inner progress span automatically */}
              <style jsx global>{`
                .progress-bar .swiper-pagination-progressbar-fill {
                  background: #062C2D !important;
                }
              `}</style>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 ml-8">
              <button className="prev-btn w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#2D5A27] hover:text-white transition-all disabled:opacity-30">
                <ChevronLeft size={20} />
              </button>
              <button className="next-btn w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#2D5A27] hover:text-white transition-all disabled:opacity-30">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;