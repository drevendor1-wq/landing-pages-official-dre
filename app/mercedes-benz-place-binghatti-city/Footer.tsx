"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current && contentRef.current && imageColRef.current) {
      const ctx = gsap.context(() => {
        // Animate content
        gsap.from(contentRef.current!.children, {
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        });

        // Animate image
        gsap.from(imageColRef.current, {
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        ScrollTrigger.refresh();
      }, footerRef.current);

      return () => ctx.revert();
    }
  }, []);

  return (
    <footer className="damac_footer_section" ref={footerRef}>
      <div className="damac_footer_container">
        <div className="damac_footer_row">
          <div className="damac_footer_content_col">
            <div className="damac_footer_content_wrapper" ref={contentRef}>
              <div className="damac_footer_content_area">
                {/* QR Code */}
                <div className="damac_footer_qr_code">
                  <Image
                    src="/images/mercedes-benz/qr_scanner.webp"
                    alt="QR Code"
                    width={200}
                    height={200}
                    className="damac_footer_qr_image"
                    priority
                  />
                </div>

                {/* RERA & DLD Verified */}
                <p className="damac_footer_verified_text">RERA & DLD Verified Project</p>

                {/* Disclaimer */}
                <p className="damac_footer_disclaimer">
                  This project is developed and verified in partnership with the Dubai Land Department (DLD) and governed by the Real Estate Regulatory Agency (RERA), ensuring legal security and buyer confidence.
                </p>
                <p className="damac_footer_disclaimer">
                  <strong>Disclaimer:</strong> The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA authorized real estate agency namely DRE Homes Real Estate Broker is a company registered in Dubai, United Arab Emirates (License No. 599208), We are regulated by the Real Estate Regulatory Agency under office number 652.The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Agency (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
                </p>

                {/* Footer Links */}
                <nav className="damac_footer_links">
                  <ul className="damac_footer_links_list">
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="damac_footer_image_col" ref={imageColRef}>
            <div className="damac_footer_image_wrapper">
              <Image
                src="/images/mercedes-benz/gallery-1.webp"
                alt="Modern Interior"
                width={1200}
                height={700}
                className="damac_footer_image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
