"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const developerPoints = [
  "Timely project delivery",
  "Iconic designs",
  "Strategic locations",
  "Strong brand collaborations"
];

export default function AboutDeveloperSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about-developer" className="damac_about_developer_section" ref={sectionRef}>
      <div className="container">
        <div className="damac_about_developer_main_wrapper">
          <div className="damac_about_developer_background" ref={backgroundRef}>
            <Image src="/images/mercedes-benz/banner.webp" alt="About Developer Background" width={1000} height={1000} />
          </div>
          <div className="damac_about_developer_content">
            <div className="damac_about_developer_text_wrapper" ref={contentRef}>
              <p className="damac_about_developer_subheading">ABOUT THE DEVELOPER</p>
              <h2 className="damac_about_developer_heading">BINGHATTI DEVELOPERS</h2>
              <p className="damac_about_developer_description">
                Binghatti Developers is one of the UAE's most recognized real estate brands, known for delivering architecturally distinctive projects with strong investment value. With a growing portfolio across Dubai, Binghatti is renowned for:
              </p>
              <div className="damac_about_developer_list">
                {developerPoints.map((point, index) => (
                  <div key={index} className="damac_about_developer_item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <p className="damac_about_developer_footer">
                Mercedes-Benz Places represents a bold step in redefining branded luxury real estate in the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
