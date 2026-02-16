import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
  return (
    <>
      <header className='site_header'>
        <div className='container'>
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

      <main className='policy_page'>
        <div className='container'>
          <div className='policy_content'>
            <h1>Terms and Conditions</h1>
            
            <p>
              By accessing or using this landing page, you acknowledge and agree to comply with the following Terms and Conditions.
            </p>

            <h2>1. Intellectual Property</h2>

            <p>
              All content, including text, images, graphics, logos, layouts, and other materials displayed on this landing page are owned by the respective project developers or their licensors and are protected under applicable intellectual property laws.
            </p>

            <p>
              No content may be copied, reproduced, modified, distributed, or used for commercial purposes without prior written consent from the rightful owner.
            </p>

            <h2>2. Property Information Disclaimer</h2>

            <p>
              All property details, prices, layouts, specifications, and availability provided on this landing page are for informational purposes only and are subject to change without prior notice.
            </p>

            <p>
              While reasonable efforts are made to ensure accuracy, DRE Homes Real Estate Broker does not guarantee the completeness or correctness of the information displayed and shall not be held liable for any discrepancies or omissions.
            </p>

            <h2>3. User Responsibilities</h2>

            <p>
              Users agree to:
            </p>

            <ul>
              <li>Provide accurate and up-to-date information when submitting inquiries</li>
              <li>Use this landing page only for lawful purposes</li>
              <li>Refrain from activities such as hacking, spamming, data scraping, or transmitting malicious software</li>
            </ul>

            <p>
              Any misuse of the platform may result in restricted access.
            </p>

            <h2>4. Privacy & Data Collection</h2>

            <p>
              Personal information submitted through this landing page will be collected and processed in accordance with our <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>

            <p>
              We may use cookies, analytics tools, or third-party services to improve user experience and monitor website performance.
            </p>

            <h2>5. Limitation of Liability</h2>

            <p>
              DRE Homes Real Estate Broker shall not be liable for any direct, indirect, incidental, or consequential damages arising from:
            </p>

            <ul>
              <li>Use of this landing page</li>
              <li>Reliance on property information provided</li>
              <li>Temporary unavailability or technical issues</li>
            </ul>

            <p>
              All users access this website at their own discretion and risk.
            </p>

            <h2>6. Third-Party Links</h2>

            <p>
              This landing page may contain links to third-party websites for reference or convenience. We do not control, endorse, or assume responsibility for the content, availability, or privacy practices of such external websites.
            </p>

            <h2>7. Changes to Terms</h2>

            <p>
              We reserve the right to amend or update these Terms and Conditions at any time without prior notice. Continued use of this landing page constitutes acceptance of any revised terms.
            </p>

            <h2>8. Governing Law & Jurisdiction</h2>

            <p>
              These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the United Arab Emirates.
            </p>

            <p>
              Any disputes arising in connection with the use of this landing page shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
            </p>

            <h2>9. Company Information</h2>

            <p>
              This landing page is operated by:
            </p>

            <p>
              <strong>DRE Homes Real Estate Broker</strong><br />
              A company registered in Dubai, United Arab Emirates<br />
              RERA Licensed & Regulated
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

