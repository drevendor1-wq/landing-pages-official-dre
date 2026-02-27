import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import "./page.css"

export const metadata: Metadata = {
  title: "Sobha Sanctuary Dubai | Villas and Townhouses in Dubailand",
  description: "Sobha Sanctuary Dubai",
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

      <main>
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h1>Thank You!</h1>
              <p>Your inquiry has been received. Our team will contact you shortly.</p>
              <Link href="/" className="btn_primary">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}