"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const landmarks = [
  { name: "Morocco Mall", time: "4 mins" },
  { name: "Anfa Park", time: "15 mins" },
  { name: "Casa Voyageurs Train Station", time: "25 mins" },
  { name: "Mohammed V. Airport", time: "40 mins" }
];

export default function LocationAmenities() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Elegant fade and lift for text content
      gsap.from(".reveal_up", {
        y: 60,
        opacity: 0,
        duration: 1.4,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Subtle parallax for the background image
      gsap.to(".parallax_bg", {
        scale: 1.1,
        yPercent: 10,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="location" className="cinematic_loc_section" ref={sectionRef}>
      <div className="cinematic_grid">
        
        {/* Visual Background Layer */}
        <div className="cinematic_visual">
          <div className="parallax_bg">
            <Image
              src="/images/moroccoProject/moroccoGallery.webp"
              alt="ELIE SAAB Casablanca Location"
              fill
              className="object-cover"
              priority
            />
          </div>
         
        </div>

        {/* Content Floating Layer */}
        <div className="cinematic_content_container">
          <div className="cinematic_content_inner" ref={textRef}>
            <div className="reveal_up">
              <span className="cinematic_eyebrow">THE DESTINATION</span>
              <h2 className="cinematic_heading">
                A PRIME LOCATION <br />
                IN <span className="gold_serif">CASABLANCA</span>
              </h2>
            </div>

            <div className="cinematic_body reveal_up">
              <p>
                ELIE SAAB Casablanca Art of Living is located in one of the city’s most prestigious addresses, 
                offering residents a serene haven amidst the vibrant energy of Casablanca.
              </p>
              <p className="dim_text">
                Often referred to as the "White City," Casablanca seamlessly blends contemporary flair with 
                authentic charm. Its selection as a co-host city for the 2030 World Cup will further 
                elevate its global status.
              </p>
              <p className="dim_text">
                The residences are set within lush green spaces and offer stunning views of the Atlantic Ocean, 
                providing both privacy and seamless connectivity to:
              </p>
            </div>

            <div className="cinematic_landmarks reveal_up">
              <div className="landmark_header">
                <span>NEARBY LANDMARKS</span>
                <div className="accent_line"></div>
              </div>
              
              <div className="landmark_grid">
                {landmarks.map((item, idx) => (
                  <div key={idx} className="landmark_tile">
                    <span className="tile_name">{item.name}</span>
                    <span className="tile_time">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
       

        .cinematic_grid {
          display: flex;
          min-height: 100vh;
          width: 100%;
        }

        /* Visual Pane */
        .cinematic_visual {
          position: relative;
          width: 55%;
          height: 100vh;
          overflow: hidden;
        }

        .parallax_bg {
          position: relative;
          width: 100%;
          height: 120%; /* Extra height for parallax */
          top: -10%;
        }

        .cinematic_overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(253,252,249,1) 95%);
          z-index: 2;
        }

        /* Content Pane */
        .cinematic_content_container {
          width: 45%;
          background: #fdfcf9;
          display: flex;
          align-items: center;
          padding: 80px 100px;
          z-index: 3;
        }

        .cinematic_eyebrow {
          display: block;
          font-size: 10px;
          letter-spacing: 6px;
          color: #b89562;
          font-weight: 700;
          margin-bottom: 25px;
        }

        .cinematic_heading {
          font-size: clamp(34px, 4.5vw, 54px);
          line-height: 1.1;
          color: #1a1a1a;
          margin-bottom: 40px;
          font-weight: 300;
        }

        .gold_serif {
          font-family: serif;
          font-style: italic;
          color: #b89562;
        }

        .cinematic_body .dim_text {
          font-size: 15px;
          color: #666;
          max-width: 90%;
        }

        /* Landmark Styling */
        .cinematic_landmarks {
          margin-top: 60px;
        }

        .landmark_header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .landmark_header span {
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 800;
          color: #999;
        }

        .accent_line {
          height: 1px;
          flex-grow: 1;
          background: #eeebe6;
        }

        .landmark_grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .landmark_tile {
          display: flex;
          flex-direction: column;
          border-left: 2px solid #f0efeb;
          padding-left: 15px;
          transition: border-color 0.3s ease;
        }

        .landmark_tile:hover {
          border-left-color: #b89562;
        }

        .tile_name {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
          color: #1a1a1a;
        }

        .tile_time {
          font-family: serif;
          font-style: italic;
          color: #b89562;
          font-size: 16px;
        }

        /* --- MOBILE ADAPTATIONS --- */
        @media (max-width: 1024px) {
          .cinematic_grid {
            flex-direction: column;
            height: auto;
          }

          .cinematic_visual {
            width: 100%;
            height: 50vh;
          }

          .cinematic_overlay {
            background: linear-gradient(0deg, rgba(253,252,249,1) 15%, rgba(0,0,0,0) 100%);
          }

          .cinematic_content_container {
            width: 100%;
            padding: 40px 25px 80px;
          }

          .landmark_grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .cinematic_heading {
            margin-bottom: 25px;
          }
        }
      `}</style>
    </section>
  );
}