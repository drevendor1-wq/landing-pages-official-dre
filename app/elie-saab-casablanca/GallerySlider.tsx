"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const images = [
  "/images/moroccoProject/moroccoGallery1.webp",
  "/images/moroccoProject/moroccoGallery2.webp",
  "/images/moroccoProject/moroccoGallery3.webp",
  "/images/moroccoProject/moroccoGallery4.webp",
  "/images/moroccoProject/moroccoGallery5.webp",
  "/images/moroccoProject/moroccoGallery6.webp",
  "/images/moroccoProject/moroccoGallery7.webp",
  "/images/moroccoProject/moroccoGallery8.webp",
  "/images/moroccoProject/moroccoGallery9.webp",
  "/images/moroccoProject/moroccoGallery10.webp",
  "/images/moroccoProject/moroccoGallery11.webp",
  "/images/moroccoProject/moroccoGallery12.webp",
  "/images/moroccoProject/moroccoGallery13.webp",
  "/images/moroccoProject/moroccoGallery14.webp",
  "/images/moroccoProject/moroccoGallery15.webp"
];

export default function NextLevelGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = gsap.utils.toArray(".cinema-slide") as HTMLElement[];
    const lastSlide = slides[slides.length - 1];

    // ✅ Calculate exact end position
    const getTotalScroll = () => {
      const trackRect = track.getBoundingClientRect();
      const lastRect = lastSlide.getBoundingClientRect();

      const scrollDistance =
        lastSlide.offsetLeft + lastSlide.offsetWidth - window.innerWidth;

      return scrollDistance;
    };

    let totalScroll = getTotalScroll();

    // ✅ Main animation
    const scrollTween = gsap.to(track, {
      x: () => -getTotalScroll(), // dynamic
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${getTotalScroll()}`, // 🔥 exact end
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // ✅ Scale animation
    slides.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.85, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right center",
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <>
      <section className="cinema-section" ref={sectionRef}>
        {/* Header */}
        {/* <div className="cinema-header">
          <h2>EXPLORE OUR COLLECTION</h2>
        </div> */}

        {/* Horizontal Gallery */}
        <div className="cinema-wrapper">
          <div className="cinema-track" ref={trackRef}>
            {images.map((src, i) => (
              <div
                key={i}
                className="cinema-slide"
                onClick={() => setSelected(i)}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selected !== null && (
        <div className="cinema-lightbox" onClick={() => setSelected(null)}>
          <Image
            src={images[selected]}
            alt=""
            width={1200}
            height={800}
          />
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        .cinema-section {
          height: 100vh;
          background: #ffffff;
          color: #fff;
          overflow: hidden;
          position: relative;
        }

       /* Update these styles */
.cinema-header {
  position: absolute;
  top: 10%;
  left: 5%;
  z-index: 10;
  pointer-events: none; /* Let clicks pass through to images */
}

.cinema-header h2 {
  font-size: clamp(2rem, 8vw, 5rem); /* Responsive font size */
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}

        .cinema-header p {
          color: #f8f2f2;
          max-width: 400px;
        }

        .cinema-wrapper {
          height: 100%;
          display: flex;
          align-items: center;
        }

        .cinema-track {
          display: flex;
          width: max-content; /* ✅ critical fix */
          gap: 40px;
          padding-left: 80px;
        }

        .cinema-slide {
          position: relative;
          min-width: 70vw;
          height: 70vh;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.7);
        }

        .cinema-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: 0.4s;
          font-size: 18px;
          letter-spacing: 2px;
        }

        .cinema-slide:hover .cinema-overlay {
          opacity: 1;
        }

        .cinema-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .cinema-lightbox img {
          max-width: 90%;
          max-height: 80%;
          object-fit: contain;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .cinema-header {
            left: 20px;
            top: 40px;
          }

          .cinema-header h2 {
            font-size: 28px;
          }

          .cinema-slide {
            min-width: 90vw;
            height: 50vh;
          }

          .cinema-track {
            padding-left: 20px;
          }
        }
      `}</style>
    </>
  );
}