"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FloorPlan {
  src: string;
  alt: string;
  title: string;
  sqft: string;
}

const floorPlans: FloorPlan[] = [
  { src: "/images/damac-islands/DamacIslandFloor4.jpg", alt: "1 Bedroom Type A", title: "THE EXCLUSIVE SUITE", sqft: "850 Sq. Ft." },
  { src: "/images/damac-islands/DamacIslandFloor5.jpg", alt: "2 Bedroom Type B", title: "THE PREMIER RESIDENCE", sqft: "1,240 Sq. Ft." },
  { src: "/images/damac-islands/DamacIslandFloor6.jpg", alt: "3 Bedroom Type C", title: "THE GRAND FAMILY HOME", sqft: "2,100 Sq. Ft." },
];

export default function MasterPlan() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-header", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const goToPrevious = () => setCurrentIndex((prev) => (prev === 0 ? floorPlans.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev === floorPlans.length - 1 ? 0 : prev + 1));

  return (
    <>
      <section id="master-plan" className="premium_floorplan_section" ref={sectionRef}>
        <div className="container">
          
          <div className="floorplan_header">
            <span className="gold_eyebrow animate-header">CONFIDENTIAL COLLECTION</span>
            <h2 className="section_title animate-header">Curated Floor Plans</h2>
            <p className="floor_tagline animate-header">Bespoke layouts balancing space, elegance, and functionality.</p>
            <div className="header_line animate-header"></div>
          </div>

          <div className="slider_main_wrapper" ref={sliderRef}>
            <div className="slider_outer">
              <button className="nav_btn prev" onClick={goToPrevious}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div className="slider_viewport">
                <div 
                  className="slider_track" 
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {floorPlans.map((plan, index) => (
                    <div key={index} className="plan_slide">
                      <div className={`plan_card ${currentIndex === index ? 'active_card' : ''}`}>
                        
                        {/* <div className="plan_meta reveal-item">
                          <h3>{plan.title}</h3>
                          <p>{plan.sqft}</p>
                        </div> */}
                        
                        {/* THE BLUR REDEEMER */}
                        <div className="image_reveal_box" 
                             onMouseEnter={() => setHoveredIdx(index)}
                             onMouseLeave={() => setHoveredIdx(null)}>
                          
                          {/* CRISP IMAGE */}
                          <Image
                            src={plan.src}
                            alt={plan.alt}
                            width={1000}
                            height={700}
                            style={{ objectFit: 'contain' }}
                            className="plan_img"
                          />

                          {/* BLUR LAYER */}
                          <div className={`blur_barrier ${hoveredIdx === index ? '' : ''}`}>
                            <div className="blur_content">
                                <div className="lock_icon">
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#c5a368" strokeWidth="1.5">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                </div>
                                <p className="unlock_text">CONFIDENTIAL LAYOUT<br/>HOVER TO UNLOCK VIEW</p>
                            </div>
                          </div>
                        </div>

                        <div className="cta_wrap reveal-item">
                          <button className="unlock_btn" onClick={() => setEnquiryModalOpen(true)}>
                             Request Complete Brochure
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="nav_btn next" onClick={goToNext}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            {/* Premium Dots */}
            <div className="pagination_dots">
              {floorPlans.map((_, i) => (
                <div 
                  key={i} 
                  className={`dot_wrap ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                >
                    <div className="inner_dot"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .premium_floorplan_section {
            background: #000; /* Dark for maximum image pop */
            padding: 120px 0;
            overflow: hidden;
            color: #fff;
          }

          .container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }

          .floorplan_header { text-align: center; margin-bottom: 80px; }
          .gold_eyebrow { color: #c5a368; letter-spacing: 6px; font-weight: 700; font-size: 11px; display: block; margin-bottom: 15px; }
          .section_title { font-family: 'Playfair Display', serif; font-size: clamp(34px, 5vw, 56px); color: #fff; margin-bottom: 15px; font-weight: 400; }
          .floor_tagline { color: #888; max-width: 500px; margin: 0 auto 30px; font-size: 15px; }
          .header_line { width: 50px; height: 1px; background: #c5a368; margin: 0 auto; }

          .slider_outer { display: flex; align-items: center; gap: 40px; }
          
          .slider_viewport { flex: 1; overflow: hidden; }
          .slider_track { display: flex; transition: transform 0.8s cubic-bezier(0.7, 0, 0.3, 1); }
          
          .plan_slide { min-width: 100%; padding: 0 40px; }
          
          .plan_card {
            background: #0a0a0a;
            padding: 50px;
            border-radius: 4px;
            box-shadow: 0 30px 60px rgba(0,0,0,0.5);
            text-align: center;
            transition: transform 0.6s;
            transform: scale(0.9);
            opacity: 0.3;
            border: 1px solid rgba(197, 163, 104, 0.05);
          }

          .plan_card.active_card { transform: scale(1); opacity: 1; }

          .plan_meta h3 { font-family: 'Playfair Display', serif; font-size: 30px; color: #fff; margin-bottom: 10px; font-weight: 400; }
          .plan_meta p { color: #c5a368; letter-spacing: 2px; font-weight: 600; font-size: 13px; margin-bottom: 40px; text-transform: uppercase; }

          /* Image Reveal Mechanism */
          .image_reveal_box { position: relative; width: 100%; height: 550px; margin-bottom: 40px; overflow: hidden; cursor: pointer; }
          .plan_img { transition: 1s ease-out; }

          .blur_barrier {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(15px);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
            z-index: 10;
          }

          .blur_barrier.revealed {
            backdrop-filter: blur(0);
            background: rgba(0,0,0,0.1);
          }

          .blur_content { text-align: center; transition: 0.4s; }
          .blur_barrier.revealed .blur_content { opacity: 0; transform: scale(0.8); }

          .lock_icon {
            width: 70px;
            height: 70px;
            border: 1px solid rgba(197, 163, 104, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
          }

          .unlock_text { color: #888; font-size: 11px; letter-spacing: 3px; line-height: 1.6; text-transform: uppercase; }

          .image_reveal_box:hover .plan_img { transform: scale(1.05); }

          .cta_wrap { margin-top: 10px; }
          .unlock_btn {
            background: #c5a368;
            color: #000;
            border: none;
            padding: 18px 40px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-size: 12px;
            cursor: pointer;
            transition: 0.3s;
          }

          .unlock_btn:hover { background: #fff; transform: translateY(-3px); }

          .nav_btn {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            width: 60px;
            height: 60px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
            color: rgba(255,255,255,0.5);
          }

          .nav_btn:hover { background: #c5a368; color: #000; border-color: #c5a368; }

          .pagination_dots { display: flex; justify-content: center; gap: 20px; margin-top: 60px; }
          .dot_wrap { width: 14px; height: 14px; display: flex; align-items: center; justify-content: center; cursor: pointer; border-radius: 50%; border: 1px solid transparent; }
          .dot_wrap.active { border-color: rgba(197, 163, 104, 0.5); }
          
          .inner_dot { width: 4px; height: 4px; border-radius: 50%; background: #444; transition: 0.3s; }
          .dot_wrap.active .inner_dot { width: 6px; height: 6px; background: #c5a368; }

          @media (max-width: 900px) {
            .slider_outer { gap: 10px; }
            .plan_slide { padding: 0 5px; }
            .plan_card { padding: 30px; }
            .image_reveal_box { height: 350px; }
            .nav_btn { display: none; }
          }
        `}</style>
      </section>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle="Enquiry: DAMAC TOWER NINE ELMS LONDON"
        buttonText="Request Floor Plan"
      />
    </>
  );
}