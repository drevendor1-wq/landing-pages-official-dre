"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HorizonLocation() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fadeUp", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    window.open(
      "https://world.aldar.com/uk/london?floorPlanAvailable=false&viewType=embeddedView",
      "_blank"
    );
  };

  return (
    <section ref={sectionRef} className="location_section">

      {/* BACKGROUND HTML (IFRAME) */}
      <iframe
        className="bg_iframe"
        src="https://world.aldar.com/uk/london?floorPlanAvailable=false&viewType=embeddedView"
        loading="lazy"
      />

      {/* OVERLAY */}
      <div className="overlay" onClick={handleClick}></div>

      {/* CONTENT */}
      <div className="content" onClick={handleClick}>

        <h1 className="fadeUp">
          Explore the Timeless Charm of London, the Heart of Culture and History.
        </h1>

        <p className="fadeUp">
          Stroll along the River Thames, discover iconic landmarks like the Tower of London and Big Ben,
          shop at world-famous Oxford Street, and unwind in the vibrant Covent Garden.
        </p>
      </div>

      <style jsx>{`
        .location_section {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        /* IFRAME AS BACKGROUND */
        .bg_iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;

          transform: scale(1.2);
          filter: brightness(0.7) contrast(1.1);
          pointer-events: none; /* 👈 makes it behave like background */
          transition: transform 1.2s ease;
        }

        /* HOVER ZOOM */
        .location_section:hover .bg_iframe {
          transform: scale(1);
        }

        /* OVERLAY */
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.4),
            rgba(0,0,0,0.2)
          );
          z-index: 1;
          cursor: pointer;
        }

        /* CONTENT */
        .content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          padding-left: 80px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          cursor: pointer;
        }

        .tag {
          background: rgba(0,0,0,0.6);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 12px;
          letter-spacing: 2px;
          margin-bottom: 25px;
        }

        h1 {
          font-size: clamp(42px, 5vw, 72px);
          font-family: serif;
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 25px;
        }

        p {
          font-size: 16px;
          line-height: 1.8;
          color: rgba(255,255,255,0.85);
          margin-bottom: 40px;
        }

        .cta {
          font-size: 12px;
          letter-spacing: 3px;
          border-bottom: 1px solid rgba(255,255,255,0.5);
          display: inline-block;
          padding-bottom: 6px;
          transition: 0.3s;
        }

        .location_section:hover .cta {
          letter-spacing: 5px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .content {
            padding: 0 20px;
          }

          h1 {
            font-size: 32px;
          }

          p {
            font-size: 14px;
          }

          .bg_iframe {
            transform: scale(1); /* disable zoom */
          }
        }
      `}</style>
    </section>
  );
}