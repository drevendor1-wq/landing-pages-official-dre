import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="disclaimer_section">
      <div className="container">
        <div className="footer_content_wrapper">
          <div className="rera_verification_box">
            <div className="rera_qr_code">
              <Image
                src="/images/qr_scanner.png"
                alt="RERA DLD QR Code"
                width={150}
                height={150}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
              <h3 className="rera_heading">
                RERA & DLDVerified Project
              </h3>
            </div>
            <div className="rera_content">
              <p className="rera_description">
                This project is developed and verified in partnership with the Dubai
                Land Department <span className="dld_link">(DLD)</span> and governed by
                the Real Estate Regulatory Agency (RERA), ensuring legal security and
                buyer confidence.
              </p>
            </div>
          </div>
          <div className="disclaimer_content">
            <p className="disclaimer_text">
              <strong>Disclaimer:</strong> The information provided on this
              website is intended exclusively for informational purposes and
              should not be construed as an offer of services. This site is
              managed by a RERA authorized real estate agency namely DRE Homes
              Real Estate Broker is a company registered in Dubai, United Arab
              Emirates (License No. 599208), We are regulated by the Real Estate
              Regulatory Agency under office number 652.The pricing information
              presented on this website is subject to alteration without advance
              notification, and the assurance of property availability cannot be
              guaranteed. The images showcased on this website are for
              representational purposes only and may not accurately reflect the
              actual properties. We may share your data with Real Estate
              Regulatory Agency (RERA) registered Developers for further
              processing as necessary. Additionally, we may send updates and
              information to the mobile number or email address registered with
              us. All rights reserved. The content, design, and information on
              this website are protected by copyright and other intellectual
              property rights. Any unauthorized use or reproduction of the content
              may violate applicable laws. For accurate and up-to-date information
              regarding services, pricing, availability, and any other details, it
              is recommended to contact us directly through the provided contact
              information on this website. Thank you for visiting our website.
            </p>
          </div>
        </div>
        <div className="footer_links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

