import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GraphicDesignIcon from "@/assets/icons/ui/graphic-design-icon.svg";

const TermsPage = () => {
  return (
    <div className="px-[2rem] pt-[20rem] pb-[10rem] xl:px-[0rem]">
      <div className="container">
        <div>
          <Link
            href="/legal"
            className="inline-flex items-center gap-[1rem] text-[1.6rem] font-medium tracking-normal text-[#312749]"
          >
            <ArrowLeft className="size-[2rem] text-[#312749]" />
            <span>Back to Legal Hub</span>
          </Link>

          <div className="mt-[2rem] flex items-center gap-[3rem]">
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
                Terms of Service
              </h4>

              <span className="text-[1.6rem] leading-[2.4rem] tracking-normal text-[#312749]">
                Last updated: January 2026
              </span>
            </div>
          </div>

          <div className="mt-[4rem] max-w-[90rem] space-y-[3rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
            {/* Intro */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">1. Agreement</h5>

              <p>
                By accessing or using the CreativePixels website and services,
                you agree to be bound by these Terms of Service and all
                applicable laws and regulations. If you do not agree with any of
                these terms, you are prohibited from using or accessing our
                services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">2. Use of Services</h5>

              <p>
                CreativePixels provides web design, development, and digital
                marketing services. Our services are intended for business use
                and you agree to use them only for lawful purposes and in
                accordance with these Terms.
              </p>

              <p className="font-semibold">You agree not to:</p>

              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>
                  Use our services for any unlawful purpose or to solicit others
                  to perform unlawful acts
                </li>
                <li>
                  Violate any international, national, or local regulations,
                  rules, laws, or ordinances
                </li>
                <li>
                  Infringe upon or violate our intellectual property rights or
                  the rights of others
                </li>
                <li>Submit false or misleading information</li>
                <li>Upload or transmit viruses or any other malicious code</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                3. Intellectual Property
              </h5>

              <p>
                Unless otherwise stated, CreativePixels and/or its licensors own
                the intellectual property rights for all material on our
                website. All intellectual property rights are reserved.
              </p>

              <p>
                Upon full payment for completed projects, clients receive
                ownership of the final deliverables as specified in the project
                agreement. CreativePixels retains the right to showcase
                completed work in our portfolio unless otherwise agreed in
                writing.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">4. Project Terms</h5>

              <p>
                All projects are governed by individual project agreements that
                outline scope, timeline, payment terms, and deliverables. Key
                terms include:
              </p>

              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>A deposit is required before project commencement</li>
                <li>
                  Changes to project scope may result in additional charges
                </li>
                <li>
                  Final payment is due upon project completion and before launch
                </li>
                <li>
                  Timelines are estimates and may vary based on client
                  responsiveness
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">5. Payment Terms</h5>

              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>50% deposit required to commence work</li>
                <li>Remaining balance due upon project completion</li>
                <li>Late payments may incur additional fees</li>
                <li>We accept bank transfer and major credit cards</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                6. Limitation of Liability
              </h5>

              <p>
                In no event shall CreativePixels, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation loss of profits, data,
                use, goodwill, or other intangible losses.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">7. Indemnification</h5>

              <p>
                You agree to defend, indemnify, and hold harmless CreativePixels
                and its licensees, licensors, employees, contractors, agents,
                officers, and directors from and against any and all claims,
                damages, obligations, losses, liabilities, costs or debt, and
                expenses arising from your use of and access to the services.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">8. Termination</h5>

              <p>
                We may terminate or suspend your access to our services
                immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach these
                Terms. Upon termination, your right to use the services will
                immediately cease.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">9. Governing Law</h5>

              <p>
                These Terms shall be governed and construed in accordance with
                the laws of England and Wales, without regard to its conflict of
                law provisions. Any disputes arising from these terms will be
                subject to the exclusive jurisdiction of the courts of England
                and Wales.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">10. Changes to Terms</h5>

              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. We will provide notice of any
                significant changes by updating the “Last updated” date at the
                top of this page.
              </p>
            </div>

            {/* Section 11 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                11. Contact Information
              </h5>

              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>

              <div className="space-y-[0.6rem]">
                <p className="font-semibold">CreativePixels Ltd.</p>

                <p>
                  Email:{" "}
                  <a
                    href="mailto:legal@creativepixels.co.uk"
                    className="font-medium underline hover:text-[#FF37B3]"
                  >
                    legal@creativepixels.co.uk
                  </a>
                </p>

                <p>Address: Manchester, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
