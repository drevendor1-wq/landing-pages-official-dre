"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryImage {
  src: string;
  alt: string;
  thumbnail?: string;
}

const galleryImages: GalleryImage[] = [
  { src: "/images/mercedes-benz/gallery-1.webp", alt: "Gallery Image 1" },
  { src: "/images/mercedes-benz/gallery-2.webp", alt: "Gallery Image 2" },
  { src: "/images/mercedes-benz/gallery-3.webp", alt: "Gallery Image 3" },
  { src: "/images/mercedes-benz/gallery-4.webp", alt: "Gallery Image 4" },
  { src: "/images/mercedes-benz/gallery-5.webp", alt: "Gallery Image 5" },
  { src: "/images/mercedes-benz/gallery-6.webp", alt: "Gallery Image 6" },
];

export default function GallerySlider() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current && headerRef.current && sliderRef.current) {
      const ctx = gsap.context(() => {
        // Animate header
        gsap.from(headerRef.current!.children, {
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        // Animate gallery items
        gsap.from(".gallery-item", {
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });

        ScrollTrigger.refresh();
      }, galleryRef.current);

      return () => ctx.revert();
    }
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    } else {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") navigateImage("prev");
        if (e.key === "ArrowRight") navigateImage("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section id="gallery" className="damac_gallery_section" ref={galleryRef}>
        <div className="container">
          <div className="damac_gallery_header" ref={headerRef}>
            <h2 className="damac_gallery_heading">EXPLORE OUR COLLECTION</h2>
            <p className="damac_gallery_tagline">Explore the essence of Mercedes-Benz inspired livingthrough stunning visuals</p>
          </div>

          <div className="damac_gallery_slider_wrapper" ref={sliderRef}>
            <button
              className="damac_gallery_nav_btn damac_gallery_nav_prev"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="damac_gallery_slider">
              <div
                className="damac_gallery_track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="damac_gallery_slide gallery-item"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="damac_gallery_image"
                    />
                    <div className="damac_gallery_overlay">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="damac_gallery_nav_btn damac_gallery_nav_next"
              onClick={handleNext}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className="damac_gallery_thumbnails">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  className={`damac_gallery_thumbnail ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={120}
                    height={90}
                    className="damac_gallery_thumbnail_image"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="damac_lightbox" onClick={closeLightbox}>
          <button
            className="damac_lightbox_close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <button
            className="damac_lightbox_nav damac_lightbox_prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            aria-label="Previous image"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="damac_lightbox_content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={900}
              className="damac_lightbox_image"
              priority
            />
            <div className="damac_lightbox_counter">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>

          <button
            className="damac_lightbox_nav damac_lightbox_next"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            aria-label="Next image"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
