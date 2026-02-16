import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "HADO by Beyond - Waterfront Apartments in Dubai Islands",
  description: "Discover HADO by Beyond - Ultra-Japanese design waterfront apartments in Dubai Islands. 1-4BR units starting from 2.4M AED. 30% capital appreciation potential. Q2 2029 handover.",
};

export default function ThankYouPage() {
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

      <section className="thank_you_section">
        <div className="container">
          <div className="thank_you_content">
            <div className="thank_you_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h1 className="thank_you_title">Thank You!</h1>
            <p className="thank_you_message">
              We have received your enquiry. Our team will contact you shortly.
            </p>
            <p className="thank_you_submessage">
              We appreciate your interest in this project. One of our
              representatives will reach out to you within 24 hours.
            </p>
            <div className="thank_you_actions">
              <Link href="/" className="thank_you_button primary">
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
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

