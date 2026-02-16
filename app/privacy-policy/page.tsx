import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
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
            <h1>Privacy Policy</h1>
            
            <p>
              DRE Homes Real Estate Broker values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any landing pages, sub-domains, or microsites operated by us.
            </p>

            <p>
              We recommend reviewing this policy carefully before submitting any personal information.
            </p>

            <h2>1. Information We Collect</h2>

            <p>
              When you use our website or submit an inquiry, we may collect personal information including, but not limited to:
            </p>

            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Country of residence</li>
            </ul>

            <p>
              This information is collected only when voluntarily provided by you.
            </p>

            <h2>2. How We Use Your Information</h2>

            <p>
              We may use your personal information for the following purposes:
            </p>

            <ul>
              <li>To respond to inquiries and provide property-related information</li>
              <li>To contact you via phone, email, WhatsApp, or SMS regarding real estate services</li>
              <li>To share relevant project details, availability, and offers</li>
              <li>To improve our services and customer experience</li>
            </ul>

            <h2>3. Sharing of Information</h2>

            <p>
              Your information may be shared only in the following cases:
            </p>

            <ul>
              <li>With RERA-registered developers for processing your inquiry</li>
              <li>With internal teams or affiliated entities assisting in service delivery</li>
              <li>When required by law or regulatory authorities</li>
            </ul>

            <p>
              We do not sell or rent your personal data to third parties.
            </p>

            <h2>4. Project & Content Disclaimer</h2>

            <p>
              All property details, images, prices, layouts, and availability shown on this website are provided for informational purposes only and are subject to change without prior notice. Images are for illustrative purposes and may not represent the actual unit.
            </p>

            <p>
              This website is operated by DRE Homes Real Estate Broker and is not the official website of the project developer unless explicitly stated.
            </p>

            <h2>5. Data Retention & Security</h2>

            <p>
              We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations. Reasonable security measures are in place to protect your data; however, no online transmission is 100% secure.
            </p>

            <h2>6. Children's Privacy</h2>

            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect data from minors.
            </p>

            <h2>7. Your Consent</h2>

            <p>
              By submitting your information on this website, you consent to the collection and use of your data in accordance with this Privacy Policy.
            </p>

            <h2>8. Updates to This Policy</h2>

            <p>
              We may update this Privacy Policy periodically. Any changes will be posted on this page and will take effect immediately upon publication.
            </p>

            <h2>9. Contact Information</h2>

            <p>
              For any questions or concerns regarding this Privacy Policy, please contact us at:
            </p>

            <p>
              📧 <a href="mailto:sales@drehomes.com">sales@drehomes.com</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

