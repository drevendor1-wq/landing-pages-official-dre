"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function BlueprintAmenities() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".facility_row", {
        scrollTrigger: { 
            trigger: ".facility_list", 
            start: "top 90%" 
        },
        y: 20, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power2.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="amenities" ref={sectionRef} className="blueprint_section">
      <div className="blueprint_container">
        {/* Left: Masterplan Image */}
        <div className="blueprint_visual">
          <div className="sticky_wrapper">
            <Image 
                src="/images/tbilisi-water-front/4.png" 
                alt="Masterplan" 
                fill 
                style={{ objectFit: 'cover' }} 
                priority
            />
            {/* The overlay is adjusted in mobile to fade upward into the content */}
            <div className="blueprint_overlay"></div>
          </div>
        </div>

        {/* Right: Data & Amenities */}
        <div className="blueprint_content">
          <div className="content_inner">
            <span className="eyebrow">THE MASTERPLAN</span>
            <h2 className="h2">10 km <span className="blue_italic">of New Waterfront Living in Tbilisi</span></h2>
            
            <p className="description">
                Tbilisi Waterfront is built as a full integrated community — the classic “city within a city” model known from Emaar’s UAE projects. 
                <br /><br />
                The masterplan spans ~590 hectares (almost 6 million sqm), with 170 hectares dedicated to parks, open areas, and a natural forest reserve with 200-year-old trees.
            </p>

            <div className="facility_list">
              <h3 className="facility_title">THE COMMUNITY WILL INCLUDE:</h3>
              {[
                "2,800 villas and townhouses",
                "3,500 apartments",
                "450 hotel keys and branded residences",
                "200 retail and dining units",
                "Schools, clinics, and sports facilities"
              ].map((item, i) => (
                <div key={i} className="facility_row">
                  <span className="plus">+</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* DESKTOP STYLES (UNCHANGED) */
        .blueprint_section { background: #fff; min-height: 100vh; overflow: hidden; }
        .blueprint_container { display: flex; }
        .blueprint_visual { width: 50%; height: 100vh; position: sticky; top: 0; overflow: hidden; }
        .sticky_wrapper { width: 100%; height: 100%; position: relative; }
        .blueprint_overlay { position: absolute; inset: 0; background: linear-gradient(to right, transparent, #fff); }
        
        .blueprint_content { width: 50%; padding: 120px 80px; }
        .eyebrow { font-size: 11px; letter-spacing: 5px; color: #c5a35d; font-weight: 800; display: block; }
        .h2 { font-size: 50px; margin: 20px 0; font-weight: 900; line-height: 1.1; }
        .blue_italic { color: #003366; font-family: serif; font-style: italic; font-weight: 400; }
        .description { font-size: 18px; color: #666; margin-bottom: 60px; line-height: 1.6; }

        .facility_list { margin-top: 40px; }
        .facility_title { font-size: 12px; letter-spacing: 3px; margin-bottom: 25px; color: #111; font-weight: 800; }
        .facility_row { display: flex; align-items: center; padding: 22px 0; border-top: 1px solid #eee; }
        .facility_row:last-child { border-bottom: 1px solid #eee; }
        .plus { color: #c5a35d; margin-right: 20px; font-size: 18px; font-weight: 300; }
        .facility_row p { font-size: 16px; color: #333; font-weight: 500; }

        /* MOBILE IMPROVEMENTS */
        @media (max-width: 1024px) {
          .blueprint_container { flex-direction: column; }
          
          .blueprint_visual { 
            width: 100%; 
            height: 50vh; /* Reduced height so user sees content peek from bottom */
            position: relative; 
            z-index: 1;
          }
          
          .blueprint_overlay { 
            background: linear-gradient(to bottom, transparent 60%, #fff 100%); 
          }

          .blueprint_content { 
            width: 100%; 
            padding: 40px 24px; /* Balanced padding for mobile screens */
            background: #fff;
            position: relative;
            z-index: 2;
            margin-top: -30px; /* Pull content up slightly over the image for a premium look */
            border-radius: 24px 24px 0 0; /* Soft curve to transition from image to content */
          }

          .h2 { 
            font-size: 32px; /* Scaled down for mobile readability */
            margin: 15px 0; 
          }

          .description { 
            font-size: 16px; 
            margin-bottom: 40px; 
          }

          .facility_row {
            padding: 18px 0;
          }
          
          .facility_row p {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}