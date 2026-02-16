import PrimaryButton from "@/components/ui/PrimaryButton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const IntellectualPropertyPage = () => {
  return (
    <div className="pt-[20rem] pb-[10rem]">
      <div className="container">
        {/* Back link */}
        <Link
          href="/legal"
          className="inline-flex items-center gap-[1rem] text-[1.6rem] font-medium text-[#312749]"
        >
          <ArrowLeft className="size-[2rem]" />
          <span>Back to Legal Hub</span>
        </Link>

        {/* Header */}
        <div className="mt-[3rem]">
          <h1 className="text-[3.6rem] leading-[4rem] font-bold tracking-[-0.9px] text-[#312749]">
            Intellectual Property
          </h1>
          <span className="mt-[0.5rem] block text-[1.6rem] text-[#312749]">
            Last updated: January 2026
          </span>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* 1 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">1. Overview</h2>
            <p className="mt-[1.5rem]">
              This document clarifies intellectual property (IP) rights for work
              created by CreativePixels Ltd (&quot;we&quot;, &quot;us&quot;) for
              our clients (&quot;you&quot;). Clear IP ownership is essential for
              both parties.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              2. What You Own (Upon Final Payment)
            </h2>

            <p className="mt-[1.5rem] font-semibold">Client Ownership</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                Custom Design Files: Figma/Sketch files, UI mockups, and design
                assets created specifically for your project
              </li>
              <li>
                Custom Code: HTML, CSS, JavaScript, PHP, or other code written
                specifically for your website
              </li>
              <li>
                Custom Graphics: Icons, illustrations, and imagery created for
                your project
              </li>
              <li>
                Content: Any copywriting, blog posts, or content we create for
                you
              </li>
              <li>
                Database Structures: Custom database schemas and configurations
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">3. What We Retain</h2>

            <p className="mt-[1.5rem] font-semibold">Agency Retained Rights</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                Frameworks & Libraries: Pre-existing code libraries, frameworks,
                or tools (e.g. React, Laravel, internal components)
              </li>
              <li>
                Development Tools: Build scripts, deployment pipelines, and
                configurations
              </li>
              <li>
                Methodologies: Our workflows, processes, and strategic methods
              </li>
              <li>
                Generic Components: Non-client-specific code reusable across
                projects
              </li>
            </ul>

            <p className="mt-[1.5rem]">
              You receive a perpetual, royalty-free license to use these
              elements as part of your delivered website.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">4. Third-Party Assets</h2>

            <p className="mt-[1.5rem]">
              Your website may include third-party assets with their own
              licensing terms:
            </p>

            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                Stock Photography: Licensed via providers such as Shutterstock
                or iStock
              </li>
              <li>
                Fonts: Subject to individual font licenses (Google Fonts, Adobe
                Fonts, etc.)
              </li>
              <li>
                Plugins & Extensions: WordPress plugins, Shopify apps, and other
                tools
              </li>
              <li>Icons: Icon sets with specific usage rights</li>
            </ul>

            <p className="mt-[1.5rem]">
              All third-party licenses will be documented during project
              handover.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">5. Portfolio Rights</h2>

            <p className="mt-[1.5rem]">
              Unless otherwise agreed in writing, we reserve the right to:
            </p>

            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Display your project in our portfolio and case studies</li>
              <li>Include screenshots in marketing materials</li>
              <li>Describe the work in award submissions</li>
              <li>Share the project on social media</li>
            </ul>

            <p className="mt-[1.5rem]">
              Confidential or sensitive information is never shared. Silent
              client arrangements must be agreed before project commencement.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              6. Client-Provided Materials
            </h2>

            <p className="mt-[1.5rem]">
              You retain full ownership of any materials you provide, including:
            </p>

            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Your logo and brand assets</li>
              <li>Photography and video content</li>
              <li>Company copy and materials</li>
              <li>Customer data and information</li>
            </ul>

            <p className="mt-[1.5rem]">
              You warrant that all provided materials are legally owned or
              licensed.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              7. Work-in-Progress Ownership
            </h2>

            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Before deposit paid: CreativePixels</li>
              <li>During project: CreativePixels (licensed to client)</li>
              <li>After final payment: Full transfer to Client</li>
              <li>
                If cancelled with balance owing: CreativePixels until settled
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              8. Source Files & Handover
            </h2>

            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Live website access and hosting credentials</li>
              <li>CMS admin access</li>
              <li>Design source files</li>
              <li>Development documentation</li>
              <li>Third-party license list</li>
              <li>Code repositories (where applicable)</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              9. Modifications & Derivative Works
            </h2>

            <p className="mt-[1.5rem]">
              You may modify, extend, or hire third parties to work on your
              website after handover. We are not responsible for issues caused
              by third-party changes.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">10. Infringement</h2>

            <p className="mt-[1.5rem]">
              If you become aware of any IP infringement related to your
              project, notify us promptly. While enforcement is your
              responsibility, we can provide supporting documentation.
            </p>
          </section>

          {/* CTA */}
          <section>
            <h2 className="text-[2.2rem] font-bold">Questions About IP?</h2>
            <p className="my-[1.5rem]">
              Intellectual property can be complex. If you have specific
              requirements, let’s discuss them before project commencement.
            </p>

            <PrimaryButton
              href="/contact"
              text="Contact us"
              bGcolor="#FF37B3"
              textColor="#ffffff"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default IntellectualPropertyPage;
