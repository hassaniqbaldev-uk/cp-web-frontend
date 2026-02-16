import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GraphicDesignIcon from "@/assets/icons/ui/graphic-design-icon.svg";

const AcceptableUsePolicyPage = () => {
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
              style={{ backgroundColor: "#FF37B3" }}
            />
          </div>

          <div>
            <h4 className="text-[3.6rem] leading-[4rem] font-bold tracking-[-0.9px] text-[#312749]">
              Acceptable Use Policy
            </h4>

            <span className="text-[1.6rem] leading-[2.4rem] text-[#312749]">
              Last updated: January 2026
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          <p>
            This Acceptable Use Policy (&quot;AUP&quot;) sets out the rules and
            guidelines for using CreativePixels services, including websites,
            applications, and platforms we develop or manage on behalf of our
            clients.
          </p>

          {/* 2. Prohibited Activities */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              2. Prohibited Activities
            </h5>
            <p className="mt-[1.5rem]">You agree not to use our services to:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Engage in any unlawful, fraudulent, or harmful activities</li>
              <li>Transmit malware, viruses, or other harmful code</li>
              <li>Attempt to gain unauthorised access to systems or data</li>
              <li>
                Send spam, unsolicited communications, or phishing attempts
              </li>
              <li>Infringe upon intellectual property rights of others</li>
              <li>Distribute defamatory, obscene, or offensive content</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with the operation of our services</li>
              <li>Collect personal information without consent</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </div>

          {/* 3. Content Standards */}
          <div>
            <h5 className="text-[2.2rem] font-bold">3. Content Standards</h5>
            <p className="mt-[1.5rem]">
              All content published through our services must:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Be accurate and truthful</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect the rights and dignity of others</li>
              <li>Not contain harmful, threatening, or abusive material</li>
              <li>
                Not infringe on any third-party intellectual property rights
              </li>
            </ul>
          </div>

          {/* 4. Security Requirements */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              4. Security Requirements
            </h5>
            <p className="mt-[1.5rem]">Users must:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Keep login credentials secure and confidential</li>
              <li>Report suspected security breaches immediately</li>
              <li>Use strong, unique passwords</li>
              <li>Keep software and systems up to date</li>
              <li>
                Not share access credentials with unauthorised individuals
              </li>
            </ul>
          </div>

          {/* 5. Resource Usage */}
          <div>
            <h5 className="text-[2.2rem] font-bold">5. Resource Usage</h5>
            <p className="mt-[1.5rem]">
              Users must not abuse system resources or engage in activities that
              could negatively impact performance or availability, including:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Excessive bandwidth consumption</li>
              <li>Running resource-intensive scripts without authorisation</li>
              <li>Attempting denial-of-service attacks</li>
              <li>Mining cryptocurrency</li>
            </ul>
          </div>

          {/* 6. Enforcement */}
          <div>
            <h5 className="text-[2.2rem] font-bold">6. Enforcement</h5>
            <p className="mt-[1.5rem]">CreativePixels reserves the right to:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Investigate suspected violations of this policy</li>
              <li>Remove or disable access to violating content</li>
              <li>Suspend or terminate accounts that breach this policy</li>
              <li>Report illegal activities to authorities</li>
              <li>Take legal action against violators</li>
            </ul>
          </div>

          {/* 7. Reporting Violations */}
          <div>
            <h5 className="text-[2.2rem] font-bold">7. Reporting Violations</h5>
            <p className="mt-[1.5rem]">
              If you become aware of any violation of this policy, please report
              it immediately at{" "}
              <a
                href="mailto:abuse@creativepixels.co.uk"
                className="font-semibold underline hover:text-[#FF37B3]"
              >
                abuse@creativepixels.co.uk
              </a>
              .
            </p>
          </div>

          {/* 8. Changes */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              8. Changes to This Policy
            </h5>
            <p className="mt-[1.5rem]">
              We may update this Acceptable Use Policy from time to time by
              posting the updated policy on our website.
            </p>
          </div>

          {/* 9. Contact */}
          <div>
            <h5 className="text-[2.2rem] font-bold">9. Contact Us</h5>
            <p className="mt-[1.5rem] font-semibold">CreativePixels Ltd.</p>
            <p>
              Email:{" "}
              <a
                href="mailto:abuse@creativepixels.co.uk"
                className="underline hover:text-[#FF37B3]"
              >
                abuse@creativepixels.co.uk
              </a>
            </p>
            <p>Address: Manchester, United Kingdom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptableUsePolicyPage;
