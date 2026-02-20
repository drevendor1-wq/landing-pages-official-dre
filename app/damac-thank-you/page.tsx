import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import "./page.css"

export const metadata: Metadata = {
    title: "Damac Islands 2 | Premium Waterfront Townhouses and Villas",
  description: "DAMAC ISLANDS 2",
};

export default function DamacThankYouPage() {
  return (
    <>
      <header className="site_header">
        <div className="container">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="DRE Logo"
              width={150}
              height={50}
              style={{ width: 'auto', height: '40px', objectFit: 'contain' }}
            />
          </Link>
        </div>
      </header>

     <main className="thank_you_wrapper">
  <section className="thank_you_card">
    <div className="thank_you_icon_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8B4513" /* Brown color from image */
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    </div>

    <h1>Thank You!</h1>
    
    <div className="thank_you_text">
      <p className="primary_msg">We have received your enquiry. Our team will contact you shortly.</p>
      <p className="secondary_msg">We appreciate your interest in this project. One of our representatives will reach out to you within 24 hours.</p>
    </div>

    <div className="button_group">
      <Link href="/" className="btn_primary">
        Back to Home
      </Link>
              <a
                href="https://wa.me/971505786682?text=Hello%2C%20I%20would%20like%20to%20receive%20complete%20details%20for%20this%20property%2C%20including%20availability%20and%20the%20best%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="thank_you_button secondary"
              >
                Contact via WhatsApp
              </a>
    </div>
  </section>
</main>

      <Footer />
    </>
  );
}