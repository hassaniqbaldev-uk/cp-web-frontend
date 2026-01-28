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
              style={{ backgroundColor: "#FFD900" }}
            />
          </div>

          <div>
            <h4 className="text-[3.6rem] leading-[4rem] font-bold tracking-[-0.9px] text-[#312749]">
              Cookie Policy
            </h4>

            <span className="text-[1.6rem] leading-[2.4rem] text-[#312749]">
              Last updated: January 2026
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          <p>
            Cookies are small text files that are placed on your computer or
            mobile device when you visit a website. They are widely used to make
            websites work more efficiently and to provide information to website
            owners.
          </p>

          {/* 2. How We Use Cookies */}
          <div>
            <h5 className="text-[2.2rem] font-bold">2. How We Use Cookies</h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Ensure the website functions correctly</li>
              <li>Remember your preferences and settings</li>
              <li>Analyse how visitors use our website</li>
              <li>Improve website performance and user experience</li>
            </ul>
          </div>

          {/* 3. Types of Cookies */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              3. Types of Cookies We Use
            </h5>

            <p className="mt-[1.5rem] font-semibold">Essential Cookies</p>
            <p className="mt-[0.8rem]">
              These cookies are necessary for the website to function properly,
              enabling core functionality such as page navigation and access to
              secure areas.
            </p>

            <p className="mt-[2rem] font-semibold">Analytics Cookies</p>
            <p className="mt-[0.8rem]">
              These cookies help us understand how visitors interact with our
              website by collecting anonymous information.
            </p>

            <p className="mt-[2rem] font-semibold">Functional Cookies</p>
            <p className="mt-[0.8rem]">
              These cookies enable enhanced functionality and personalisation,
              such as remembering your preferences.
            </p>

            <p className="mt-[2rem] font-semibold">Marketing Cookies</p>
            <p className="mt-[0.8rem]">
              These cookies may be set through our site by advertising partners
              to show relevant adverts on other websites.
            </p>
          </div>

          {/* 4. Specific Cookies */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              4. Specific Cookies We Use
            </h5>

            <div className="mt-[2rem] overflow-x-auto">
              <table className="w-full border-collapse border border-[#E5E5EA] text-left text-[1.4rem]">
                <thead className="bg-[#F7F7FA]">
                  <tr>
                    <th className="border border-[#E5E5EA] px-[1.2rem] py-[1rem] font-semibold">
                      Cookie Name
                    </th>
                    <th className="border border-[#E5E5EA] px-[1.2rem] py-[1rem] font-semibold">
                      Purpose
                    </th>
                    <th className="border border-[#E5E5EA] px-[1.2rem] py-[1rem] font-semibold">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-[1.2rem] py-[1rem]">_ga</td>
                    <td className="border px-[1.2rem] py-[1rem]">
                      Google Analytics – distinguishes users
                    </td>
                    <td className="border px-[1.2rem] py-[1rem]">2 years</td>
                  </tr>
                  <tr>
                    <td className="border px-[1.2rem] py-[1rem]">_gid</td>
                    <td className="border px-[1.2rem] py-[1rem]">
                      Google Analytics – distinguishes users
                    </td>
                    <td className="border px-[1.2rem] py-[1rem]">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border px-[1.2rem] py-[1rem]">_gat</td>
                    <td className="border px-[1.2rem] py-[1rem]">
                      Google Analytics – throttles request rate
                    </td>
                    <td className="border px-[1.2rem] py-[1rem]">1 minute</td>
                  </tr>
                  <tr>
                    <td className="border px-[1.2rem] py-[1rem]">
                      cookieconsent
                    </td>
                    <td className="border px-[1.2rem] py-[1rem]">
                      Stores cookie consent preferences
                    </td>
                    <td className="border px-[1.2rem] py-[1rem]">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. Third-Party Cookies */}
          <div>
            <h5 className="text-[2.2rem] font-bold">5. Third-Party Cookies</h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
              <li>LinkedIn</li>
              <li>HubSpot</li>
            </ul>
          </div>

          {/* 6. Managing Cookies */}
          <div>
            <h5 className="text-[2.2rem] font-bold">6. Managing Cookies</h5>
            <p className="mt-[1.5rem]">
              You can control and manage cookies via your browser settings.
              Please note that blocking cookies may impact your experience.
            </p>

            <p className="mt-[1.5rem] font-semibold">Browser Controls</p>
            <ul className="mt-[0.8rem] list-disc pl-[2rem]">
              <li>Chrome</li>
              <li>Firefox</li>
              <li>Safari</li>
              <li>Microsoft Edge</li>
            </ul>
          </div>

          {/* 7. Changes */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              7. Changes to This Policy
            </h5>
            <p className="mt-[1.5rem]">
              We may update this Cookie Policy from time to time.
            </p>
          </div>

          {/* 8. Contact */}
          <div>
            <h5 className="text-[2.2rem] font-bold">8. Contact Us</h5>
            <p className="mt-[1.5rem]">CreativePixels Ltd.</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;
