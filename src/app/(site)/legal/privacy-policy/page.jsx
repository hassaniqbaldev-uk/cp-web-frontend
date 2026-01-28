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
              Last updated: January 2026
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          <p>
            CreativePixels Ltd. (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or use our services.
          </p>

          <p>
            We are registered in England and Wales and comply with the UK
            General Data Protection Regulation (UK GDPR) and the Data Protection
            Act 2018.
          </p>

          {/* 2. Information We Collect */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              2. Information We Collect
            </h5>

            <p className="mt-[1.5rem] font-semibold">Personal Information</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Name and contact details (email address, phone number)</li>
              <li>Business information (company name, job title)</li>
              <li>Communication preferences</li>
              <li>
                Payment information (processed securely via third-party
                providers)
              </li>
              <li>Any other information you choose to provide</li>
            </ul>

            <p className="mt-[2rem] font-semibold">
              Automatically Collected Information
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
            </ul>
          </div>

          {/* 3. How We Use Your Information */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              3. How We Use Your Information
            </h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Communicate with you about projects, updates, and marketing
              </li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </div>

          {/* 4. Legal Basis */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              4. Legal Basis for Processing
            </h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>
                <strong>Contract:</strong> Processing necessary to fulfil our
                contractual obligations
              </li>
              <li>
                <strong>Consent:</strong> Where you have given clear consent
              </li>
              <li>
                <strong>Legitimate Interests:</strong> Necessary for business
                operations
              </li>
              <li>
                <strong>Legal Obligation:</strong> Compliance with the law
              </li>
            </ul>
          </div>

          {/* 5. Data Sharing */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              5. Data Sharing and Disclosure
            </h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Service providers (hosting, analytics, payments)</li>
              <li>Professional advisers (lawyers, accountants)</li>
              <li>Regulatory authorities when required by law</li>
            </ul>
            <p className="mt-[1.5rem]">
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>
          </div>

          {/* 6. Data Retention */}
          <div>
            <h5 className="text-[2.2rem] font-bold">6. Data Retention</h5>
            <p className="mt-[1.5rem]">
              Client project data is typically retained for 6 years after
              project completion to comply with legal and tax obligations.
            </p>
          </div>

          {/* 7. Rights */}
          <div>
            <h5 className="text-[2.2rem] font-bold">7. Your Rights</h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Access</li>
              <li>Rectification</li>
              <li>Erasure (“right to be forgotten”)</li>
              <li>Restrict Processing</li>
              <li>Data Portability</li>
              <li>Object</li>
              <li>Withdraw Consent</li>
            </ul>
            <p className="mt-[1.5rem]">
              Contact us at{" "}
              <a
                href="mailto:privacy@creativepixels.co.uk"
                className="font-semibold underline hover:text-[#0073F8]"
              >
                privacy@creativepixels.co.uk
              </a>
            </p>
          </div>

          {/* 8–12 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">8. Cookies</h5>
            <p className="mt-[1.5rem]">
              Our website uses cookies to enhance your experience. Please see
              our Cookie Policy for details.
            </p>
          </div>

          <div>
            <h5 className="text-[2.2rem] font-bold">
              9. International Transfers
            </h5>
            <p className="mt-[1.5rem]">
              Data is primarily processed within the UK and EEA with appropriate
              safeguards in place.
            </p>
          </div>

          <div>
            <h5 className="text-[2.2rem] font-bold">10. Security</h5>
            <p className="mt-[1.5rem]">
              We implement appropriate technical and organisational measures to
              protect your personal data.
            </p>
          </div>

          <div>
            <h5 className="text-[2.2rem] font-bold">11. Children’s Privacy</h5>
            <p className="mt-[1.5rem]">
              Our services are not directed to individuals under 18.
            </p>
          </div>

          <div>
            <h5 className="text-[2.2rem] font-bold">
              12. Changes to This Policy
            </h5>
            <p className="mt-[1.5rem]">
              We may update this Privacy Policy from time to time.
            </p>
          </div>

          {/* 13. Contact */}
          <div>
            <h5 className="text-[2.2rem] font-bold">13. Contact Us</h5>
            <p className="mt-[1.5rem] font-semibold">Data Protection Officer</p>
            <p>CreativePixels Ltd.</p>
            <p>
              Email:{" "}
              <a
                href="mailto:privacy@creativepixels.co.uk"
                className="underline hover:text-[#0073F8]"
              >
                privacy@creativepixels.co.uk
              </a>
            </p>
            <p>Address: Manchester, United Kingdom</p>
            <p className="mt-[1.5rem]">
              You may lodge a complaint with the Information Commissioner&apos;s
              Office (ICO).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
