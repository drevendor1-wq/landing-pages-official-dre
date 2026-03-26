"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerHeader from "./BannerHeader";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AtelierBlue() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("REQUEST BROCHURE");

  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.6 } });

      tl.from(".hero_eyebrow", { y: 20, opacity: 0, delay: 0.3 })
        .from(".hero_title", { y: 40, opacity: 0 }, "-=1.2")
        .from(".hero_desc", { y: 30, opacity: 0 }, "-=1.2")
        .from(".hero_cta", { y: 20, opacity: 0 }, "-=1.2");

      // subtle luxury parallax
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.08,
        y: -40,
        ease: "none"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <BannerHeader />

      {/* BACKGROUND IMAGE */}
      <div className="hero_image" ref={imageRef}>
        <Image
          src="/images/nakheel-palm-central/aldarLondonCover.webp"
          alt="London"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* DARK GRADIENT OVERLAY */}
      <div className="hero_overlay" />

      {/* CONTENT */}
      <div className="hero_content">

        <h1 className="hero_title">
          London
        </h1>

        <p className="hero_desc">
          Homes you'll want to live in
        </p>

        <div className="hero_cta">
          <button
            className="atelier_solid"
            onClick={() => {
              setButtonText("DOWNLOAD BROCHURE");
              setEnquiryModalOpen(true);
            }}
          >
            DOWNLOAD BROCHURE
          </button>

          <button
            className="atelier_outline"
            onClick={() => {
              setButtonText("GET FREE CONSULTATION");
              setEnquiryModalOpen(true);
            }}
          >
            GET FREE CONSULTATION
          </button>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .hero_image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero_overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.65) 0%,
            rgba(0, 0, 0, 0.35) 40%,
            rgba(0, 0, 0, 0.05) 100%
          );
          z-index: 1;
        }

        .hero_content {
          position: absolute;
          bottom: 80px;
          left: 80px;
          z-index: 2;
          max-width: 700px;
          color: #fff;
        }

        .hero_eyebrow {
          letter-spacing: 6px;
          font-size: 12px;
          font-weight: 600;
          opacity: 0.8;
          display: block;
          margin-bottom: 15px;
        }

        .hero_title {
          font-size: clamp(48px, 8vw, 110px);
          font-weight: 800;
          line-height: 0.95;
          margin: 0 0 20px 0;
        }

        .hero_desc {
          font-size: 22px;
          opacity: 0.9;
          margin-bottom: 40px;
        }

        .hero_cta {
          display: flex;
          gap: 20px;
        }

        /* KEEPING YOUR BUTTON STYLE */
        .atelier_solid {
          background: #ffffff;
          color: #000;
          border: none;
          padding: 18px 40px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: 0.4s;
        }

        .atelier_outline {
          background: transparent;
          border: 1px solid #fff;
          color: #fff;
          padding: 18px 40px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: 0.4s;
        }

        .atelier_solid:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .atelier_outline:hover {
          background: #fff;
          color: #000;
        }

        @media (max-width: 768px) {
          .hero_content {
            left: 25px;
            bottom: 40px;
          }

          .hero_cta {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => {
          setEnquiryModalOpen(false);
          document.body.style.overflow = "unset";
        }}
        floorPlanTitle="London Properties"
        buttonText={buttonText}
      />
    </section>
  );
}