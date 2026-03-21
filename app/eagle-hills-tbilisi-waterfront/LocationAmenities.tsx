"use client";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function HorizonLocation() {
  useEffect(() => {
    gsap.from(".reveal_img", { clipPath: "inset(0 100% 0 0)", duration: 1.5, ease: "expo.inOut", scrollTrigger: ".reveal_img" });
    gsap.from(".fade_item", { y: 30, opacity: 0, stagger: 0.2, duration: 1, scrollTrigger: ".loc_info" });
  }, []);

  return (
    <section id="location" className="horizon_section">
      <div className="horizon_grid">
        <div className="loc_img_box reveal_img">
          <Image src="/images/tbilisi-water-front/TbilisiWaterfrontLocation.png" alt="Location" fill style={{ objectFit: 'cover' }} />
          <div className="img_tag">41.7151° N, 44.8271° E</div>
        </div>
        
        <div className="loc_info">
          <div className="info_inner">
            <p className="fade_item eyebrow">THE LOCATION</p>
            <h2 className="fade_item h2">Tbilisi Waterfront <span className="blue">Location</span></h2>
            <p className="fade_item p">
              Positioned on the banks of the Mtkvari River, the development forms a new eastern extension of the city.
              <br /><br />
              The area offers quick access to key routes, with the airport and historic center both within a 30–35 minute drive. <br /> <br />
              New bridges and road links will connect the district with the rest of Tbilisi.
            </p>
            
            <h4 className="fade_item why_title">Why This Location Works</h4>
            <div className="fade_item line"></div>
            <ul className="advantages_list">
              {[
                "Central & High-Demand Area",
                "Excellent Rental Market",
                "Easy access to Business Hubs",
                "Strong Future Growth"
              ].map((text, i) => (
                <li key={i} className="fade_item">
                  <span className="dot"></span> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .horizon_section { background: #fff; }
        .horizon_grid { display: grid; grid-template-columns: 1.2fr 1fr; min-height: 90vh; }
        .loc_img_box { position: relative; min-height: 500px; }
        .img_tag { position: absolute; bottom: 40px; left: 40px; background: #fff; padding: 10px 20px; font-size: 10px; font-weight: 800; letter-spacing: 2px; }
        .loc_info { display: flex; align-items: center; padding: 100px; background: #fcfcfc; }
        .info_inner { max-width: 500px; }
        .eyebrow { font-size: 11px; letter-spacing: 5px; color: #888; font-weight: 800; margin-bottom: 20px; }
        .h2 { font-size: 48px; font-weight: 900; margin-bottom: 30px; letter-spacing: -2px; }
        .blue { color: #003366; }
        .p { font-size: 17px; line-height: 1.9; color: #555; margin-bottom: 40px; }
        .why_title { font-size: 14px; text-transform: uppercase; letter-spacing: 3px; font-weight: 700; margin-bottom: 15px; }
        .line { width: 40px; height: 1px; background: #003366; margin-bottom: 30px; }
        .advantages_list { list-style: none; padding: 0; }
        .advantages_list li { padding: 15px 0; border-bottom: 1px solid #eee; font-size: 15px; display: flex; align-items: center; gap: 15px; }
        .dot { width: 6px; height: 6px; background: #c5a35d; border-radius: 50%; }
        @media (max-width: 1024px) { .horizon_grid { grid-template-columns: 1fr; } .loc_info { padding: 60px 30px; } }
      `}</style>
    </section>
  );
}