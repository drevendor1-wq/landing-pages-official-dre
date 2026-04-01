"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const landmarks = [
  { name: "Dubai Islands Beach", time: "2 mins" },
  { name: "Dubai Islands Mall", time: "2 mins" },
  { name: "Dubai International Airport", time: "20 mins" },
  { name: "Downtown Dubai", time: "20 mins" }
];

export default function LocationAmenities() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Heading and Description
      gsap.from(".reveal_text", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".zenith_loc_header",
          start: "top 80%",
        }
      });

      // Stagger Landmark Tiles
      gsap.from(".zenith_tile", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".zenith_landmark_flex",
          start: "top 90%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="zenith_location_section">
      <div className="zenith_container">
        
        {/* HEADER SECTION */}
        <div className="zenith_loc_header">
          <span className="eyebrow reveal_text">THE DESTINATION</span>
          <h2 className="zenith_loc_title reveal_text">
            A Prime Location in <br />
            <span className="cursive_location">Dubai Islands</span>
          </h2>
          
          <div className="zenith_loc_description reveal_text">
            <p>
              Marea Residences is located in the Deira district of Dubai Islands, an emerging residential zone supported by new roads, beach facilities and retail developments. The area offers direct access to Dubai Islands Beach, the upcoming Dubai Islands Mall and several planned hospitality and leisure destinations.
            </p> <br /> 
            <button onClick={() => setShowMap(!showMap)} className="map_trigger">
              <span className="map_icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              {showMap ? "VIEW ON IMAGE" : "VIEW ON GOOGLE MAPS"}
            </button>
          </div>
        </div>

        {/* CINEMATIC STAGE */}
        <div className="zenith_visual_stage">
          <div className={`media_container ${showMap ? 'map_active' : ''}`}>
            
            {/* BACKGROUND IMAGE - Optimised for Mobile/Full Load */}
            <div className="main_image_wrapper">
              <Image
                src="/images/marea-residences/mareaLocation.avif"
                alt="Marea Location"
                fill
                priority
                sizes="100vw"
                quality={90}
                className="object-cover transition-opacity duration-700"
                style={{ opacity: showMap ? 0 : 1 }}
              />
              <div className="visual_overlay"></div>
            </div>

            {/* LIVE MAP IFRAME */}
            {showMap && (
              <div className="map_wrapper">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.906927279748!2d55.29803977568673!3d25.300774277644447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f450049819e01%3A0xc63021d702398909!2sMarea%20Residences!5e1!3m2!1sen!2sae!4v1775035177804!5m2!1sen!2sae"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>

          {/* LANDMARK DATA OVERLAY */}
          <div className="zenith_landmark_flex">
            {landmarks.map((item, idx) => (
              <div key={idx} className="zenith_tile">
                <span className="zenith_time">{item.time}</span>
                <span className="zenith_name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Birthstone&family=Inter:wght@400;700;800&display=swap');

        .zenith_location_section {
          background: #ffffff;
          padding: 120px 0 160px;
          overflow: hidden;
        }

        .zenith_container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 60px;
        }

        .zenith_loc_header {
          margin-bottom: 80px;
          text-align: left;
        }

        .eyebrow {
          display: block;
          font-size: 11px;
          letter-spacing: 6px;
          color: #89a8b2;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .zenith_loc_title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(40px, 6vw, 85px);
          font-weight: 800;
          line-height: 1;
          color: #1a2b3c;
          letter-spacing: -2px;
          margin-bottom: 40px;
        }

        .cursive_location {
          font-family: 'Birthstone', cursive;
          font-size: 1.3em;
          color: #4a7c92;
          font-weight: 400;
          letter-spacing: 0;
          margin-left: -5px;
        }

        .zenith_loc_description {
          max-width: 650px;
        }

        .zenith_loc_description p {
          font-size: 18px;
          line-height: 1.7;
          color: #444;
          margin-bottom: 30px;
        }

        .map_trigger {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 700;
          color: #1a2b3c;
          padding: 0;
          transition: 0.3s ease;
        }

        .map_trigger:hover { color: #4a7c92; }

        .map_icon {
          width: 44px;
          height: 44px;
          border: 1px solid #eee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map_icon svg { width: 18px; }

        /* VISUAL STAGE */
        .zenith_visual_stage {
          position: relative;
          width: 100%;
          margin-top: 60px;
        }

        .media_container {
          position: relative;
          height: 75vh;
          border-radius: 4px;
          overflow: hidden;
          background: #f8f8f8;
        }

        .main_image_wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .visual_overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(26,43,60,0.3));
          z-index: 2;
        }

        .map_wrapper {
          position: absolute;
          inset: 0;
          z-index: 5;
          animation: fadeIn 0.8s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* LANDMARK CARDS */
        .zenith_landmark_flex {
          position: absolute;
          bottom: -50px;
          right: 60px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          display: flex;
          gap: 60px;
          padding: 60px 80px;
          border: 1px solid #eee;
          box-shadow: 0 40px 80px rgba(0,0,0,0.06);
          z-index: 10;
        }

        .zenith_tile {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .zenith_time {
          font-family: 'Birthstone', cursive;
          font-size: 48px;
          color: #4a7c92;
          line-height: 1;
        }

        .zenith_name {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #1a2b3c;
          text-transform: uppercase;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 1200px) {
          .zenith_landmark_flex { gap: 40px; padding: 40px 50px; right: 30px; }
        }

        @media (max-width: 1024px) {
          .zenith_container { padding: 0 30px; }
          .zenith_loc_header { margin-bottom: 50px; }
          .zenith_visual_stage { margin-top: 30px; }
          .media_container { height: 50vh; }
          .zenith_landmark_flex {
            position: relative;
            bottom: 0;
            right: 0;
            margin-top: 20px;
            padding: 40px 30px;
            width: 100%;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 30px;
          }
          .zenith_tile { width: 45%; }
        }

        @media (max-width: 640px) {
          .zenith_loc_title { font-size: 42px; letter-spacing: -1px; }
          .zenith_landmark_flex { padding: 30px 20px; }
          .zenith_tile { width: 100%; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 20px; }
          .zenith_tile:last-child { border-bottom: none; }
          .zenith_time { font-size: 40px; }
        }
      `}</style>
    </section>
  );
}