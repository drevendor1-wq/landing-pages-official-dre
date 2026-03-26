// "use client";
// import { useState, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";

// export default function BlueprintAmenities() {
//   const [index, setIndex] = useState(0);
//   const sliderRef = useRef(null);

//   const slides = [
//     {
//       title: "London Square Watford",
//       desc: "London Square Watford is in easy reach of the impressive Atria shopping centre located in the buzzy Watford town centre, as well as cafés, restaurants and bars.",
//       image: "/images/aldar-london/aldarGlimpse1.jpg"
//     },
//     {
//       title: "London Square Earsfield",
//       desc: "London Square Earlsfield is an emerging property hotspot in Southwest London, situated within the bustling Borough of Wandsworth.",
//       image: "/images/aldar-london/aldarGlimpse3.jpg"
//     },
//     {
//       title: "London Square Nine Elms",
//       desc: "London Square Nine Elms is perfectly positioned to experience the very best of London. Simply hop on the tube or riverboat for a direct route to one of the most dynamic cities in the world.",
//       image: "/images/aldar-london/aldarGlimpse2.jpg"
//     }
//   ];

//   const handleSlide = (dir:any) => {
//     let newIndex = index + dir;
//     if (newIndex < 0) newIndex = slides.length - 1;
//     if (newIndex >= slides.length) newIndex = 0;

//     setIndex(newIndex);

//     gsap.to(sliderRef.current, {
//       x: `-${newIndex * 100}%`,
//       duration: 1,
//       ease: "power3.inOut"
//     });
//   };

//   return (
//     <section className="lux_section">
//       <div className="lux_container">

//         {/* TITLE */}
//         <h2 className="lux_heading">
//           A Glimpse Into London’s Splendor
//         </h2>

//         {/* IMAGE SLIDER */}
//         <div className="slider_wrapper">
//           <div className="slider_track" ref={sliderRef}>
//             {slides.map((slide, i) => (
//               <div className="slide">
//   <Image
//     src={slide.image}
//     alt={slide.title}
//     width={1600}
//     height={900}
//     className="slide_img"
//     priority={index === 0}
//   />
// </div>
//             ))}
//           </div>
//         </div>

//         {/* CONTENT */}
//         <div className="content_row">
//           <div className="text_block">
//             <h3>{slides[index].title}</h3>
//             <p>{slides[index].desc}</p>
//           </div>

//           <div className="nav_controls">
//             <button onClick={() => handleSlide(-1)}>←</button>
//             <span>{index + 1}/{slides.length}</span>
//             <button onClick={() => handleSlide(1)}>→</button>
//           </div>
//         </div>

//       </div>

//       <style jsx>{`
//         .lux_section {
//           background: #f5f5f5;
//           padding: 80px 40px;
//         }

//         .lux_container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .lux_heading {
//           font-size: 42px;
//           font-weight: 400;
//           margin-bottom: 40px;
//           color: #333;
//         }

//         /* SLIDER */
//         .slider_wrapper {
//           overflow: hidden;
//           border-radius: 20px;
//         }

//         .slider_track {
//   display: flex;
//   width: 100%;
// }
// .slide {
//   width: 100%;
//   flex-shrink: 0;
//   border-radius: 20px;
//   overflow: hidden;
// }

// .slide_img {
//   width: 100%;
//   height: auto;
//   display: block;
//   object-fit: cover;
// }

//         /* CONTENT ROW */
//         .content_row {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-end;
//           margin-top: 25px;
//         }

//         .text_block {
//           max-width: 70%;
//         }

//         .text_block h3 {
//           font-size: 22px;
//           margin-bottom: 10px;
//           color: #222;
//         }

//         .text_block p {
//           font-size: 15px;
//           color: #666;
//           line-height: 1.6;
//         }

//         /* NAV */
//         .nav_controls {
//           display: flex;
//           align-items: center;
//           gap: 15px;
//           font-size: 14px;
//           color: #333;
//         }

//         .nav_controls button {
//           border: none;
//           background: transparent;
//           font-size: 20px;
//           cursor: pointer;
//         }

//         /* MOBILE */
//         @media (max-width: 768px) {
//           .lux_section {
//             padding: 50px 20px;
//           }

//           .lux_heading {
//             font-size: 21px;
//           }

//           .slide {
//             height: 250px;
//           }

//           .content_row {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 20px;
//           }

//           .text_block {
//             max-width: 100%;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function BlueprintAmenities() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

   const slides = [
    {
      title: "London Square Watford",
      desc: "London Square Watford is in easy reach of the impressive Atria shopping centre located in the buzzy Watford town centre, as well as cafés, restaurants and bars.",
      image: "/images/aldar-london/aldarGlimpse1.jpg"
    },
    {
      title: "London Square Earsfield",
      desc: "London Square Earlsfield is an emerging property hotspot in Southwest London, situated within the bustling Borough of Wandsworth.",
      image: "/images/aldar-london/aldarGlimpse3.jpg"
    },
    {
      title: "London Square Nine Elms",
      desc: "London Square Nine Elms is perfectly positioned to experience the very best of London. Simply hop on the tube or riverboat for a direct route to one of the most dynamic cities in the world.",
      image: "/images/aldar-london/aldarGlimpse2.jpg"
    }
  ];

  const scrollToSlide = (i:any) => {
    const container = sliderRef.current;
    if (!container) return;

    const width = container.clientWidth;
    container.scrollTo({
      left: width * i,
      behavior: "smooth"
    });

    setIndex(i);
  };

  const next = () => {
    const newIndex = (index + 1) % slides.length;
    scrollToSlide(newIndex);
  };

  const prev = () => {
    const newIndex = (index - 1 + slides.length) % slides.length;
    scrollToSlide(newIndex);
  };

  return (
    <section className="lux_section">
      <div className="lux_container">

        {/* TITLE */}
        <h2 className="lux_heading">
          A Glimpse Into London’s Splendor
        </h2>

        {/* SLIDER */}
        <div className="slider_wrapper" ref={sliderRef}>
          {slides.map((slide, i) => (
            <div className="slide" key={i}>
              <Image
                src={slide.image}
                alt={slide.title}
                width={1600}
                height={900}
                className="slide_img"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="content_row">
          <div className="text_block">
            <h3>{slides[index].title}</h3>
            <p>{slides[index].desc}</p>
          </div>

          <div className="nav_controls">
            <button onClick={prev}>←</button>
            <span>{index + 1}/{slides.length}</span>
            <button onClick={next}>→</button>
          </div>
        </div>

      </div>

      <style jsx>{`
        .lux_section {
          background: #f4f6f8;
          padding: 80px 20px;
        }

        .lux_container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .lux_heading {
          font-size: 42px;
          font-weight: 400;
          margin-bottom: 40px;
          color: #2d2d2d;
          letter-spacing: 1px;
        }

        /* SLIDER */
        .slider_wrapper {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          gap: 20px;
          scroll-behavior: smooth;
        }

        /* Hide scrollbar */
        .slider_wrapper::-webkit-scrollbar {
          display: none;
        }

        .slide {
          min-width: 100%;
          scroll-snap-align: start;
          border-radius: 20px;
          overflow: hidden;
        }

        .slide_img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        /* CONTENT */
        .content_row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 25px;
        }

        .text_block {
          max-width: 70%;
        }

        .text_block h3 {
          font-size: 22px;
          margin-bottom: 10px;
          color: #222;
          font-weight: 500;
        }

        .text_block p {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
        }

        /* NAV */
        .nav_controls {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 14px;
          color: #333;
        }

        .nav_controls button {
          border: none;
          background: transparent;
          font-size: 20px;
          cursor: pointer;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .lux_heading {
            font-size: 28px;
          }

          .content_row {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .text_block {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}