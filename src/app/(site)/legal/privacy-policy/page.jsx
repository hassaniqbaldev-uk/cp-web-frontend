import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GraphicDesignIcon from "@/assets/icons/ui/graphic-design-icon.svg";

const PrivacyPolicyPage = () => {
  return (
    <div className="px-[2rem] pt-[20rem] pb-[10rem] xl:px-[0rem]">
      <div className="container">
        {/* Back link */}
        <Link
          href="/legal"
          className="inline-flex items-center gap-[1rem] text-[1.6rem] font-medium tracking-normal text-[#312749]"
        >
          <ArrowLeft className="size-[2rem] text-[#312749]" />
          <span>Back to Legal Hub</span>
        </Link>

        {/* Header */}
        <div className="mt-[3rem] flex items-center gap-[3rem]">
          <div className="relative size-[6.3rem]">
            <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
              <Image
                src={GraphicDesignIcon}
                alt="Icon"
                width={30}
                height={30}
                unoptimized
              />
            </div>

            <div
              className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
              style={{ backgroundColor: "#0073F8" }}
            />
          </div>

          <div>
            <h4 className="text-[3.6rem] leading-[4rem] font-bold tracking-[-0.9px] text-[#312749]">
              Privacy Policy
            </h4>

            <span className="text-[1.6rem] leading-[2.4rem] text-[#312749]">
              CreativePixels (CP Agency Ltd) — Last updated: 09/02/2026
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* Intro */}
          <div>
            <p>
              This Privacy Policy explains how CP Agency Ltd (&quot;CP&quot;,
              &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses,
              and protects personal data when you visit
              https://creativepixels.agency or otherwise interact with us.
            </p>

            <p className="mt-[1.5rem]">
              CP Agency Ltd is incorporated in England and Wales and trades as
              CreativePixels, Hassan Iqbal, Creative Hosting, Monthly Design,
              and other associated trading names.
            </p>

            <p className="mt-[1.5rem]">
              We are committed to handling personal data responsibly,
              transparently, and in accordance with UK data protection law.
            </p>
          </div>

          {/* 1 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">1. Who We Are</h5>

            <p className="mt-[1.5rem] font-semibold">Data Controller</p>
            <p>CP Agency Ltd</p>
            <p>Bartle House, Oxford Court</p>
            <p>Manchester, M2 3WQ</p>
            <p>United Kingdom</p>
            <p>
              Email:{" "}
              <a
                href="mailto:legal@cp.agency"
                className="underline hover:text-[#0073F8]"
              >
                legal@cp.agency
              </a>
            </p>

            <p className="mt-[1.5rem]">
              For the purposes of the UK General Data Protection Regulation (UK
              GDPR) and the Data Protection Act 2018, CP Agency Ltd is the Data
              Controller of personal data collected through this website.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              2. Scope of This Policy
            </h5>
            <p className="mt-[1.5rem]">This Privacy Policy applies to:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Visitors to creativepixels.agency</li>
              <li>
                Individuals who contact us via the website, email, or chat
              </li>
              <li>Prospective clients, partners, and agencies</li>
              <li>
                Marketing and advertising interactions relating to our website
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              Personal data processed on behalf of clients as part of service
              delivery is governed by our Data Processing Agreement (DPA), not
              this Privacy Policy.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              3. Personal Data We Collect
            </h5>
            <p className="mt-[1.5rem]">
              We may collect and process the following categories of personal
              data:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Company name and job title</li>
              <li>Enquiry details and messages</li>
              <li>Communications with us (email, chat, calls)</li>
              <li>
                Website usage data (IP address, browser type, pages visited)
              </li>
              <li>Marketing and advertising interaction data</li>
              <li>
                Client or partner information where a business relationship
                exists
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              We do not intentionally collect special category data.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              4. How We Collect Personal Data
            </h5>
            <p className="mt-[1.5rem]">
              We collect personal data when you:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Submit an enquiry form on our website</li>
              <li>Use live chat or messaging tools</li>
              <li>Contact us by email or phone</li>
              <li>Book a call or meeting</li>
              <li>Interact with our advertising or marketing</li>
              <li>Visit and browse our website</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              5. How We Use Personal Data
            </h5>
            <p className="mt-[1.5rem]">We use personal data to:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Respond to enquiries and communications</li>
              <li>Provide information about our services</li>
              <li>Manage and develop business relationships</li>
              <li>Operate and improve our website</li>
              <li>Analyse website usage and performance</li>
              <li>Measure and optimise marketing activity</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p className="mt-[1.5rem]">We do not sell personal data.</p>
          </div>

          {/* 6 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              6. Lawful Bases for Processing
            </h5>
            <p className="mt-[1.5rem]">
              We process personal data under one or more of the following lawful
              bases:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                <strong>Contract</strong> – where processing is necessary to
                respond to enquiries or deliver services
              </li>
              <li>
                <strong>Legitimate interests</strong> – to operate, improve, and
                promote our business
              </li>
              <li>
                <strong>Consent</strong> – where explicitly provided (for
                example, marketing cookies)
              </li>
              <li>
                <strong>Legal obligation</strong> – where required by law
              </li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              7. Marketing Communications
            </h5>
            <p className="mt-[1.5rem]">
              We may send marketing communications where:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>You have opted in, or</li>
              <li>
                We have a legitimate business relationship and a lawful basis to
                do so
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              You can opt out of marketing communications at any time by
              contacting us at{" "}
              <a
                href="mailto:legal@cp.agency"
                className="underline hover:text-[#0073F8]"
              >
                legal@cp.agency
              </a>{" "}
              or using any unsubscribe mechanism provided.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              8. Cookies and Tracking Technologies
            </h5>
            <p className="mt-[1.5rem]">
              Our website uses cookies and similar technologies to operate
              effectively and understand how visitors use the site.
            </p>
            <p className="mt-[1.5rem]">
              These may include tools such as:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
              <li>Microsoft Clarity</li>
              <li>Google Ads</li>
              <li>Meta Ads (Facebook and Instagram)</li>
              <li>Crisp live chat</li>
            </ul>
            <p className="mt-[1.5rem]">
              Full details are provided in our{" "}
              <Link
                href="/legal/cookies-policy"
                className="font-semibold underline hover:text-[#0073F8]"
              >
                Cookie Policy
              </Link>
              , which should be read alongside this Privacy Policy.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              9. Data Sharing and Third Parties
            </h5>
            <p className="mt-[1.5rem]">
              We may share personal data with trusted third parties where
              necessary, including:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Website hosting and cloud infrastructure providers</li>
              <li>Analytics, advertising, and tracking platforms</li>
              <li>Communication and live chat providers</li>
              <li>Internal group companies and delivery teams</li>
              <li>Professional advisers and service providers</li>
            </ul>
            <p className="mt-[1.5rem]">
              All third parties are required to process personal data securely
              and in accordance with applicable law.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              10. International Data Transfers
            </h5>
            <p className="mt-[1.5rem]">
              Some personal data may be processed outside the UK or European
              Economic Area.
            </p>
            <p className="mt-[1.5rem]">
              Where this occurs, we ensure appropriate safeguards are in place
              in line with UK GDPR requirements, including contractual
              protections and security measures.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">11. Data Security</h5>
            <p className="mt-[1.5rem]">
              We take reasonable technical and organisational measures to protect
              personal data, including:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Secure hosting environments</li>
              <li>Access controls and authentication</li>
              <li>Encryption where appropriate</li>
              <li>Restricted internal access</li>
              <li>Confidentiality obligations for staff and contractors</li>
            </ul>
            <p className="mt-[1.5rem]">
              No method of transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">12. Data Retention</h5>
            <p className="mt-[1.5rem]">
              We retain personal data only for as long as necessary for the
              purposes for which it was collected, including to meet legal,
              accounting, or reporting obligations.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">13. Your Rights</h5>
            <p className="mt-[1.5rem]">
              Under UK data protection law, you have the right to:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Object to processing</li>
              <li>Request restriction of processing</li>
              <li>Withdraw consent at any time</li>
              <li>
                Lodge a complaint with the UK Information Commissioner&apos;s
                Office (ICO)
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              To exercise your rights, please contact{" "}
              <a
                href="mailto:legal@cp.agency"
                className="underline hover:text-[#0073F8]"
              >
                legal@cp.agency
              </a>
              .
            </p>
          </div>

          {/* 14 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              14. Changes to This Policy
            </h5>
            <p className="mt-[1.5rem]">
              We may update this Privacy Policy from time to time.
            </p>
            <p className="mt-[1.5rem]">
              The latest version will always be published on
              creativepixels.agency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
