// "use client"
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { useState, useEffect, useCallback } from 'react';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// const Gallery = () => {
//   const images = [
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SQO4pptcYPM9w_6GY1aM8_y_qFiQm1ivwtMP8hY1nuUNenrgFZyG17O2m7ttboAZU4hS-U-bc_XU5xXduHbU0lIhGEVd2A2GUwZDsrsncwDgp-jhM-SEAGC5gYhu947UZUTsG2fLs-uStAyL1WAczKAmNEDCBQ1bBkJGl7QWux_1ALBd0MzedEKEsc=w16383",
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SQZocEBcIY6sk9cX2z4JmDGmlS00V67D48sSlFiXHaMyDH1bGD-dU-ZQU27BRC3lxqFRxTazkk1tNbULE97PbCzJOFzFs_bevayciCRE_-D1jeLigz1A_sl8REw6U3l3ZAKzMv_P-vLMdSXaDqsUPHBiXuecUU0XCzFOabxlHhZoih2kQ3lqOXaph0=w16383",
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SSV7gFWUv67zDGN9_Ps6Oz3zjV9-efXFuUondWV7d2-BWymJbYJnafFmr-zl-y_QAhfZ0jUVzS_VSnZRQ7ym-HPMAvBHozhlmrrAnpjMVhvDeN8F760mQAIroqdDzfhvSOTwHk7LCF_n7qKA_8iR71JfR1tjqNdqa8oOC793mN-IVNPneJ8KSiuTzE=w16383",
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SSZ24sWazgmwAZI_7fOdhn_uoJCZu5PNxvSJfnq4tE791ikMM_lh0aH6l4TdVYmid0oOfS1-BhoWx8LtJ9CYnod8HGqU5NIj9IES-tZ7H5uiwc9H6vx-WEm0re2JH2YzD0-d-fgPfVeUULaBAiwjdKLlarBR30E3oBcs2-doyd1nqY5hsADgxvY=w16383",
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SRLuq4Wh7_hbm2xIFiqGSnCig8hNEJzQ5TmfX0e96mKnh2rD5szbHrZ7D4zqlGx1Bc_3C6fQr8jG6Z7U40UUnjOoQ0442tCqLaYUojZWv6X2Zpnppf2p4zx5Um6lp7MaVkN2nL3Z1JJzd3C25AmJuUzQifEoPTkLR_piUJE5PJTt420YO8GtCYuqh4=w16383",
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SRlMGosPkNYatZFTbXstO8UJ8Rk4l6JFwOacnU5LKlpFxqVwhY5mzz-KTuxP_S4YGH1k1L0ZeDczyfwimm4DYMMwPsMSTzG4v-H7JiE1dY_HcBwXeDKiU4rbH8WhHnROwgz9p7WeKnkvcBOKhhZK_QDTqrUs3qU_KtQDtefW-D-vvqNpVUtCPk-WH8=w16383",
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SRM609CyYg-2828agwA0mlbZddZ6Yq1hlN77V9IFndUvMgJ-cfRnFeqUsUzxH77yAlOuzIygL-Srza6JjLc3zTJp_N8nN-PxY06CQjM3QHFNhSRzCXHhtcX_89fFXOgfogVlOyYczOMqARw5tkbzYuaTtBnUCOgLlBgCtB7w_tcdxf9Ef9NuCiJ=w16383",
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SQixLIkeKxoUbpjMRhTOdVB82QAozLyvUlsIyy05gstpcyrWVfcIDBga47PUCl7mq82fWjLwcCnsOhaV1KX8AkBozOgLydyzZkvN5dr7y5NQHCWlsdr2wbPvRqFVtpXxhj969VPRdlTI_Dfo3cLIYgAMoIW7yP5L95pbv_Hd7oD9q7qfApihhJzNO4=w16383",
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SS2q52zEABsngdndR8jmtdTB0AMyYizOL8humY-_8AziNWuWxGRa9rZx5swyT7EWvXadh0VIpcPKoDFwlBF12DkWgiDPdRucN90QaSUb4jemymEZ-0hYD5QMlsOIeuE7DF0yNVotl5drzjyTiRv1GSfGDyiQ0lmuuSkT-iUJ3arDMRYRfRHa3Ou=w16383",
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SRTPFTpo3qJQKjUOVxe62Fd_--B9El8QlUHXTH5wcSJjvJTgokl2UBpMCSG1JoM7CRmP6ZNO8kJsrnUYsPi8Ry27ag3lgxRJX54W_PHkQp9cewnoopzI0LVdbBfrwkg7HoylAWTbIJTJ4Ydp2FWCKtjg7PXcnz5VlAQWgf53Z47aE3caYP_rt8CaW0=w16383",
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SQb9t_Xz1f1QdazYWLYaUCDhlKlnfrqMAwGa8hU6yw00PfpjpQW2zivWUNc28KaOcaRY_m6qcQ3ju5hPuNexM1592MemAcX17iJNhEjIddKY3SSU7T5cjft0wSaoXC9N_W_N0JB95Thx8u5okm7rUpcpeCEEDjbSPL4msOtwAJnITKI1PF34gTF=w16383",
//     "https://lh3.googleusercontent.com/sitesv/APaQ0SRVXO0RgU9vb_xz4Si92A8WAfpBqwIjOGuR9uw37nPql2dk1-Qe_4fIlotFEkTnKlQxg2PQZdyM5qmPviwsnYIG7bTNmJ2ey8wLfkGZm6kKSUoP9CLQFfu3GCxFnPFo_MdqiRjpYhW3osfQsZcxd6Pl4vAH1HlfV1baeCeQQzcdi4csA0oDi94X=w16383"
//   ];

//   const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

//   const showNext = useCallback(() => {
//     setSelectedIdx((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
//   }, [images.length]);

//   const showPrev = useCallback(() => {
//     setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
//   }, [images.length]);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (selectedIdx === null) return;
//       if (e.key === 'Escape') setSelectedIdx(null);
//       if (e.key === 'ArrowRight') showNext();
//       if (e.key === 'ArrowLeft') showPrev();
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [selectedIdx, showNext, showPrev]);

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 80, scale: 0.96 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
//     }
//   };

//   return (
//     <section id="gallery" className="py-40 px-6 bg-gradient-to-b from-[#F9F7F3] to-[#EFEDE8]">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-28"
//         >
//           <span className="text-green-700 font-light tracking-[0.6em] uppercase text-[10px] mb-5 block">
//             Visual Journey
//           </span>

//           <h2 className="text-5xl md:text-7xl font-serif text-[#0A1F1F] tracking-tight">
//             <span className="italic">GALLERY</span>
//           </h2>

//           <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-green-700 to-transparent mx-auto mt-8"></div>
//         </motion.div>

//         {/* Ultra Premium Grid */}
//         <motion.div 
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={containerVariants}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
//         >
//           {images.map((img, i) => (
//             <motion.div 
//               key={i}
//               variants={itemVariants}
//               onClick={() => setSelectedIdx(i)}
//               className={`group cursor-pointer relative ${
//                 i % 3 === 0 ? "lg:translate-y-24" : 
//                 i % 3 === 2 ? "lg:-translate-y-24" : ""
//               }`}
//             >
//               <div className="relative overflow-hidden rounded-[28px] bg-white/70 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.08)] border border-white/60 transition-all duration-700 group-hover:shadow-[0_40px_120px_rgba(0,0,0,0.18)] group-hover:-translate-y-2">

//                 {/* Image */}
//                 <div className="overflow-hidden rounded-[28px] aspect-[4/5]">
//                   <img 
//                     src={img} 
//                     alt={` ${i}`} 
//                     className="w-full h-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-115" 
//                   />
//                 </div>

//                 {/* Luxury Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-[28px]" />

//                 {/* Subtle border glow */}
//                 <div className="absolute inset-0 rounded-[28px] border border-white/20 opacity-0 group-hover:opacity-100 transition duration-700" />

//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {selectedIdx !== null && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6"
//             onClick={() => setSelectedIdx(null)}
//           >

//             <button className="absolute top-10 right-10 text-white/30 hover:text-green-500 transition">
//               <X size={34} strokeWidth={1.2} />
//             </button>

//             <button 
//               onClick={(e) => { e.stopPropagation(); showPrev(); }}
//               className="absolute left-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition p-4"
//             >
//               <ChevronLeft size={44} />
//             </button>
            
//             <button 
//               onClick={(e) => { e.stopPropagation(); showNext(); }}
//               className="absolute right-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition p-4"
//             >
//               <ChevronRight size={44} />
//             </button>

//             <motion.div 
//               key={selectedIdx}
//               initial={{ scale: 0.9, opacity: 0, y: 40 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 40 }}
//               transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
//               className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img 
//                 src={images[selectedIdx]} 
//                 className="w-full h-full object-contain rounded-xl shadow-[0_0_140px_rgba(0,0,0,0.7)]"
//                 alt=""
//               />

//               <div className="mt-12 flex items-center gap-4">
//                 {images.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setSelectedIdx(idx)}
//                     className={`h-[2px] rounded-full transition-all duration-500 ${
//                       idx === selectedIdx ? 'w-16 bg-green-500' : 'w-6 bg-white/20'
//                     }`}
//                   />
//                 ))}
//               </div>

//               <div className="mt-6 text-white/30 text-[10px] tracking-[0.5em] uppercase">
//                 {selectedIdx + 1} of {images.length}
//               </div>

//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Gallery;
"use client"
import { useState } from "react";

const Gallery = () => {
 const images = [
    "https://gondalgroupofmarketing.com/wp-content/uploads/2025/10/Gondal-Group-of-Marketing-Project-Eighteen-Islamabad-03.webp",
    "https://gondalgroupofmarketing.com/wp-content/uploads/2025/10/Gondal-Group-of-Marketing-Project-Eighteen-Islamabad-04.webp",
    "https://gondalgroupofmarketing.com/wp-content/uploads/2025/10/Gondal-Group-of-Marketing-Project-Eighteen-Islamabad-05.webp",
    "https://gondalgroupofmarketing.com/wp-content/uploads/2025/10/Gondal-Group-of-Marketing-Project-Eighteen-Islamabad-06.webp",
    "https://gondalgroupofmarketing.com/wp-content/uploads/2025/10/Gondal-Group-of-Marketing-Project-Eighteen-Islamabad-07.webp",
    "https://gondalgroupofmarketing.com/wp-content/uploads/2025/10/Gondal-Group-of-Marketing-Project-Eighteen-Islamabad-08.webp",
    "https://gondalgroupofmarketing.com/wp-content/uploads/2025/10/Gondal-Group-of-Marketing-Project-Eighteen-Islamabad-10.webp",
    "https://gondalgroupofmarketing.com/wp-content/uploads/2025/10/Gondal-Group-of-Marketing-Project-Eighteen-Islamabad-11.webp",
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#EFEDE8] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT BIG HERO */}
        <div className="relative h-[600px] rounded-[40px] overflow-hidden">
          <img
            src={images[active]}
            className="w-full h-full object-cover transition duration-700"
          />

          <div className="absolute bottom-10 left-10 text-white">
            <p className="text-sm tracking-widest mt-2 opacity-80">
              {active + 1} / {images.length}
            </p>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-2xl overflow-hidden ${
                active === i ? "ring-2 ring-green-600" : ""
              }`}
            >
              <img
                src={img}
                className="w-full h-40 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;