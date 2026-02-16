"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LocationAmenities() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && imageRef.current) {
      const ctx = gsap.context(() => {
        // Animate image
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        ScrollTrigger.refresh();
      }, sectionRef.current);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="location" className="damac_location_advantages_section" ref={sectionRef}>
      <div className="container">
        {/* Location Advantages Section */}
        <div className="damac_location_advantages_wrapper">
          {/* Gallery Image - Left */}
          <div className="damac_location_image_wrapper" ref={imageRef}>
            <div className="damac_location_image_container">
              <Image
                src="/images/mercedes-benz/location-advantages.webp"
                alt="Mercedes-Benz Places | Binghatti City Location"
                fill
                className="damac_location_image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

            {/* Content - Right */}
            <div className="damac_location_content_wrapper">
              {/* Location Content */}
              <div className="damac_location_info">
                <div className="damac_location_info_header">
                  <p className="damac_location_info_subheading">LOCATION</p>
                  <h2 className="damac_location_info_heading">
                    LOCATION <span className="damac_location_info_heading_gold">ADVANTAGES</span>
                  </h2>
                  <p className="damac_location_info_tagline">
                 Located in Binghatti City, the project offers seamless connectivity to Dubai’s most important destinations</p>
                </div>

                
              <h4 className="damac_location_connectivity_heading">Nearby Landmarks</h4>
                <div className="damac_location_connectivity">
              
                  <div className="damac_location_connectivity_list">
                    <div className="damac_location_connectivity_item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="damac_location_connectivity_icon">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <div className="damac_location_connectivity_content">
                        <span className="damac_location_connectivity_name">Burj Khalifa & Downtown Dubai</span>
                        <span className="damac_location_connectivity_time">5 min</span>
                      </div>
                    </div>
                    <div className="damac_location_connectivity_item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="damac_location_connectivity_icon">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                      <div className="damac_location_connectivity_content">
                        <span className="damac_location_connectivity_name">Dubai Mall</span>
                        <span className="damac_location_connectivity_time">6 min</span>
                      </div>
                    </div>
                    <div className="damac_location_connectivity_item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="damac_location_connectivity_icon">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <div className="damac_location_connectivity_content">
                        <span className="damac_location_connectivity_name">Dubai International Airport</span>
                        <span className="damac_location_connectivity_time">20 min</span>
                      </div>
                    </div>
                    <div className="damac_location_connectivity_item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="damac_location_connectivity_icon">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <div className="damac_location_connectivity_content">
                        <span className="damac_location_connectivity_name">Dubai Marina & JBR</span>
                        <span className="damac_location_connectivity_time">15 min</span>
                      </div>
                    </div>
                  </div>
              </div>
              

               <h4 className="damac_location_connectivity_heading">Why This Location Works</h4>
              <ul className="damac_location_connectivity_list">
              <li> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Central & high-demand area</li>
                <li> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Excellent rental market</li>
               <li> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Easy access to business hubs</li>
                <li> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Strong future growth corrido</li>
              </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
