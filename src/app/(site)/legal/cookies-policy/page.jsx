import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GraphicDesignIcon from "@/assets/icons/ui/graphic-design-icon.svg";

const CookiesPolicyPage = () => {
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
          <div className="relative size-[6.3rem] min-w-[6.3rem]">
            <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
              <Image
                src={GraphicDesignIcon}
                alt="Icon"
                width={30}
                height={30}
                unoptimized
              />
            </div>

            <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#FFD900]" />
          </div>

          <div>
            <h4 className="text-[3.6rem] leading-[4rem] font-bold tracking-[-0.9px] text-[#312749]">
              Cookie Policy
            </h4>

            <span className="text-[1.6rem] leading-[2.4rem] text-[#312749]">
              Last updated: 09/02/2026
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* Intro */}
          <div>
            <p className="font-semibold">CreativePixels (CP Agency Ltd)</p>
            <p className="mt-[1rem]">
              This Cookie Policy explains how CP Agency Ltd (&ldquo;CP&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses
              cookies and similar technologies on{" "}
              <a
                href="https://creativepixels.agency"
                className="underline hover:text-[#0073F8]"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://creativepixels.agency
              </a>
              .
            </p>
            <p className="mt-[1rem]">
              This policy should be read alongside our{" "}
              <Link
                href="/legal/privacy-policy"
                className="underline hover:text-[#0073F8]"
              >
                Privacy Policy
              </Link>
              , which explains how we use personal data more generally.
            </p>
          </div>

          {/* 1. What Are Cookies? */}
          <div>
            <h5 className="text-[2.2rem] font-bold">1. What Are Cookies?</h5>
            <p className="mt-[1.5rem]">
              Cookies are small text files placed on your device when you visit
              a website. They are widely used to make websites work efficiently
              and to provide information to website owners.
            </p>
            <p className="mt-[1.5rem]">Cookies may be:</p>
            <ul className="mt-[0.8rem] list-disc pl-[2rem]">
              <li>
                <span className="font-semibold">Session cookies</span>, which
                expire when you close your browser
              </li>
              <li>
                <span className="font-semibold">Persistent cookies</span>, which
                remain on your device until deleted or expire
              </li>
            </ul>
          </div>

          {/* 2. Why We Use Cookies */}
          <div>
            <h5 className="text-[2.2rem] font-bold">2. Why We Use Cookies</h5>
            <p className="mt-[1.5rem]">We use cookies to:</p>
            <ul className="mt-[0.8rem] list-disc pl-[2rem]">
              <li>Ensure our website functions correctly</li>
              <li>Understand how visitors use our website</li>
              <li>Improve performance and user experience</li>
              <li>
                Support marketing and advertising activity (where consent is
                provided)
              </li>
            </ul>
          </div>

          {/* 3. Types of Cookies We Use */}
          <div className="space-y-[3rem]">
            <h5 className="text-[2.2rem] font-bold">
              3. Types of Cookies We Use
            </h5>

            {/* Strictly Necessary */}
            <div>
              <p className="text-[1.8rem] font-semibold">
                Strictly Necessary Cookies
              </p>
              <p className="mt-[0.8rem]">
                These cookies are essential for the operation of our website and
                cannot be switched off.
              </p>
              <p className="mt-[1rem]">They are used for:</p>
              <ul className="mt-[0.8rem] list-disc pl-[2rem]">
                <li>Security</li>
                <li>Network management</li>
                <li>Form submission</li>
                <li>Basic functionality</li>
              </ul>
              <p className="mt-[1rem]">These cookies do not require consent.</p>
            </div>

            {/* Analytics & Performance */}
            <div>
              <p className="text-[1.8rem] font-semibold">
                Analytics &amp; Performance Cookies
              </p>
              <p className="mt-[0.8rem]">
                These cookies help us understand how visitors interact with our
                website by collecting information such as page visits, traffic
                sources, and usage patterns.
              </p>
              <p className="mt-[1rem]">Tools may include:</p>
              <ul className="mt-[0.8rem] list-disc pl-[2rem]">
                <li>Google Analytics</li>
                <li>Microsoft Clarity</li>
              </ul>
              <p className="mt-[1rem]">
                Data collected is aggregated and anonymised where possible.
              </p>
              <p className="mt-[0.5rem]">
                These cookies are only set where you provide consent.
              </p>
            </div>

            {/* Functional */}
            <div>
              <p className="text-[1.8rem] font-semibold">Functional Cookies</p>
              <p className="mt-[0.8rem]">
                These cookies enable enhanced functionality and services.
              </p>
              <p className="mt-[1rem]">Tools may include:</p>
              <ul className="mt-[0.8rem] list-disc pl-[2rem]">
                <li>Crisp live chat</li>
              </ul>
              <p className="mt-[1rem]">
                These cookies may be set where required for functionality and,
                where applicable, subject to consent.
              </p>
            </div>

            {/* Marketing & Advertising */}
            <div>
              <p className="text-[1.8rem] font-semibold">
                Marketing &amp; Advertising Cookies
              </p>
              <p className="mt-[0.8rem]">These cookies are used to:</p>
              <ul className="mt-[0.8rem] list-disc pl-[2rem]">
                <li>Deliver relevant advertising</li>
                <li>Measure the effectiveness of marketing campaigns</li>
                <li>Understand how users interact with ads</li>
              </ul>
              <p className="mt-[1rem]">Tools may include:</p>
              <ul className="mt-[0.8rem] list-disc pl-[2rem]">
                <li>Google Ads</li>
                <li>Meta Ads (Facebook and Instagram)</li>
              </ul>
              <p className="mt-[1rem]">
                These cookies are only set where you provide consent.
              </p>
            </div>
          </div>

          {/* 4. Google Tag Manager */}
          <div>
            <h5 className="text-[2.2rem] font-bold">4. Google Tag Manager</h5>
            <p className="mt-[1.5rem]">
              We use Google Tag Manager to manage website tags and scripts.
            </p>
            <p className="mt-[1rem]">
              Google Tag Manager itself does not store personal data but may
              load other tools that do. Any cookies set by tools managed through
              Google Tag Manager are subject to the categories described in this
              policy.
            </p>
          </div>

          {/* 5. Third-Party Cookies */}
          <div>
            <h5 className="text-[2.2rem] font-bold">5. Third-Party Cookies</h5>
            <p className="mt-[1.5rem]">
              Some cookies may be placed by third-party services integrated into
              our website.
            </p>
            <p className="mt-[1rem]">
              These third parties may process data independently under their own
              privacy and cookie policies. We recommend reviewing their policies
              for further information.
            </p>
          </div>

          {/* 6. Managing Cookies */}
          <div>
            <h5 className="text-[2.2rem] font-bold">6. Managing Cookies</h5>
            <p className="mt-[1.5rem]">
              You can manage or withdraw your cookie preferences at any time by:
            </p>
            <ul className="mt-[0.8rem] list-disc pl-[2rem]">
              <li>Using our cookie consent banner (when enabled)</li>
              <li>Adjusting your browser settings</li>
            </ul>
            <p className="mt-[1rem]">
              Please note that disabling certain cookies may affect the
              functionality of the website.
            </p>
          </div>

          {/* 7. Changes to This Policy */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              7. Changes to This Policy
            </h5>
            <p className="mt-[1.5rem]">
              We may update this Cookie Policy from time to time.
            </p>
            <p className="mt-[1rem]">
              The latest version will always be published on{" "}
              <a
                href="https://creativepixels.agency"
                className="underline hover:text-[#0073F8]"
                target="_blank"
                rel="noopener noreferrer"
              >
                creativepixels.agency
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;
