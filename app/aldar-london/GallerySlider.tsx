"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: "/images/aldar-london/aldarLondonGallery1.webp", alt: "Modern Waterfront Exterior" },
  { src: "/images/aldar-london/aldarLondonGallery2.webp", alt: "Masterplan Overview" },
  { src: "/images/aldar-london/aldarLondonGallery3.webp", alt: "Luxury Interior Concept" },
  { src: "/images/aldar-london/aldarLondonGallery4.webp", alt: "Luxury Interior Concept" },
  { src: "/images/aldar-london/aldarLondonGallery5.png", alt: "Luxury Interior Concept" },
  { src: "/images/aldar-london/aldarLondonGallery6.webp", alt: "Masterplan Overview" },
  { src: "/images/aldar-london/aldarLondonGallery7.jpg", alt: "Masterplan Overview" },
];

export default function LuxuryGallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // TEXT REVEAL
      gsap.from(".gallery_headline span", {
        y: 80,
        opacity: 0,
        stagger: 0.08,
        duration: 1.2,
        ease: "power4.out",
      });

      // IMAGE REVEAL
      gsap.utils.toArray(".gallery_card").forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 80,
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power3.out",
        });
      });

      // PARALLAX EFFECT
      gsap.utils.toArray(".image_inner").forEach((img: any) => {
        gsap.to(img, {
          scrollTrigger: {
            trigger: img,
            scrub: true,
          },
          y: -50,
          ease: "none",
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="gallery_section">

      {/* HEADER */}
      <div className="gallery_header">
        <span className="eyebrow">Visual Journey</span>

        <h2 className="gallery_headline">
          {"GALLERY".split("").map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </h2>

        <p>
          Explore the essence of London Project's by Aldar inspired living through stunning visuals.
        </p>
      </div>

      {/* GRID */}
      <div className="gallery_grid">
        {galleryImages.map((img, i) => (
          <div key={i} className={`gallery_card card_${i}`}>
            
            <div className="image_wrapper">
              <div className="image_inner">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  priority={i === 0}
                  className="image"
                />
              </div>
            </div>

          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery_section {
          background: #f4f9fd;
          padding: 120px 60px;
          overflow: hidden;
        }

        /* HEADER */
        .gallery_header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 100px;
        }

        .eyebrow {
          font-size: 12px;
          letter-spacing: 5px;
          color: #6aaed6;
          font-weight: 700;
        }

        .gallery_headline {
          font-size: clamp(40px, 7vw, 100px);
          font-weight: 900;
          letter-spacing: -3px;
          margin: 20px 0;
          color: #1e3a5f;
          display: flex;
          justify-content: center;
          gap: 5px;
          flex-wrap: wrap;
        }

        .gallery_headline span {
          display: inline-block;
        }

        .gallery_header p {
          font-size: 18px;
          color: #6b7c93;
          line-height: 1.6;
        }

        /* GRID */
        .gallery_grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 30px;
        }

        .gallery_card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.08);
        }

        /* DIFFERENT LUXURY LAYOUT */
        .card_0 { grid-column: span 7; height: 500px; }
        .card_1 { grid-column: span 5; height: 500px; }
        .card_2 { grid-column: span 4; height: 400px; }
        .card_3 { grid-column: span 4; height: 400px; }
        .card_4 { grid-column: span 4; height: 400px; }
        .card_5 { grid-column: span 6; height: 450px; }
        .card_6 { grid-column: span 6; height: 450px; }

        .image_wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .image_inner {
          position: absolute;
          inset: 0;
          transform: scale(1.1);
          transition: transform 1.2s ease;
        }

        .gallery_card:hover .image_inner {
          transform: scale(1.2);
        }

        .image {
          object-fit: cover;
        }

        /* MOBILE */
        @media (max-width: 1024px) {
          .gallery_grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery_card {
            grid-column: span 2 !important;
            height: 300px !important;
          }
        }

        @media (max-width: 768px) {
          .gallery_section {
            padding: 80px 20px;
          }

          .gallery_header {
            margin-bottom: 60px;
          }

          .gallery_header p {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}