import PrimaryButton from "@/components/ui/PrimaryButton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const DataProcessingAgreement = () => {
  return (
    <div className="pt-[20rem] pb-[10rem]">
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
        <div className="mt-[3rem]">
          <h4 className="text-[3.6rem] leading-[4rem] font-bold tracking-[-0.9px] text-[#312749]">
            Data Processing Agreement
          </h4>

          <span className="mt-[1rem] block text-[1.8rem] font-semibold text-[#312749]">
            (UK GDPR)
          </span>

          <p className="mt-[1rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
            This Data Processing Agreement (&quot;Agreement&quot;) forms part of
            the Terms of Service between:
          </p>

          <div className="mt-[1.5rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
            <p>
              <span className="font-semibold">CP Agency Ltd</span>, a company
              incorporated in England and Wales, trading as Hassan Iqbal,
              CreativePixels, Creative Hosting, Monthly Design, and other
              associated trading names (&quot;CP&quot;, &quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;),
            </p>
            <p className="mt-[1rem]">and</p>
            <p className="mt-[1rem]">
              The Client (&quot;Client&quot;, &quot;you&quot;,
              &quot;your&quot;).
            </p>
          </div>

          <p className="mt-[1.5rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
            This Agreement applies where CP processes personal data on behalf of
            the Client in connection with the services provided.
          </p>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* 1 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">1. Definitions</h5>
            <p className="mt-[1.5rem]">
              Terms used in this Agreement have the meanings given to them in the
              UK GDPR and the Data Protection Act 2018, including &quot;personal
              data&quot;, &quot;processing&quot;, &quot;controller&quot;, and
              &quot;processor&quot;.
            </p>
            <p className="mt-[1rem]">
              For the purposes of this Agreement:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>The Client is the Data Controller</li>
              <li>CP is the Data Processor</li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              2. Scope and Purpose of Processing
            </h5>
            <p className="mt-[1.5rem]">CP will process personal data only:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                To provide the services agreed in the applicable Proposal
              </li>
              <li>
                In accordance with the Client&apos;s documented instructions
              </li>
              <li>As required to comply with applicable law</li>
            </ul>
            <p className="mt-[1.5rem]">
              Processing activities may include collecting, storing, hosting,
              accessing, modifying, transmitting, or deleting personal data as
              necessary to deliver the services.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              3. Categories of Data and Data Subjects
            </h5>
            <p className="mt-[1.5rem]">
              The personal data processed may include, depending on the
              services:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Names</li>
              <li>Contact details</li>
              <li>User account information</li>
              <li>Website or platform usage data</li>
              <li>Form submissions or customer enquiries</li>
              <li>IP addresses and technical identifiers</li>
            </ul>

            <p className="mt-[1.5rem]">Data subjects may include:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Website visitors</li>
              <li>Customers</li>
              <li>Users</li>
              <li>Employees or representatives of the Client</li>
            </ul>

            <p className="mt-[1.5rem]">
              The exact nature of data processed depends on how the Client uses
              the services.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              4. CP&apos;s Obligations as Processor
            </h5>
            <p className="mt-[1.5rem]">CP agrees to:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                Process personal data only on documented instructions from the
                Client
              </li>
              <li>
                Ensure that persons authorised to process personal data are
                subject to confidentiality obligations
              </li>
              <li>
                Take appropriate technical and organisational measures to protect
                personal data
              </li>
              <li>
                Not engage another processor without complying with Section 6
                below
              </li>
              <li>
                Assist the Client in meeting its obligations under UK GDPR where
                reasonably required
              </li>
              <li>
                Delete or return personal data at the end of the services,
                unless retention is required by law
              </li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">5. Security Measures</h5>
            <p className="mt-[1.5rem]">
              CP implements reasonable technical and organisational measures
              designed to protect personal data against unauthorised or unlawful
              processing and against accidental loss, destruction, or damage.
            </p>
            <p className="mt-[1rem]">
              These measures may include, where appropriate:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Access controls and authentication</li>
              <li>
                Encryption in transit and at rest (where supported)
              </li>
              <li>Secure hosting environments</li>
              <li>Regular updates and security patching</li>
              <li>Limiting access to authorised personnel only</li>
            </ul>
            <p className="mt-[1.5rem]">
              No system can be guaranteed to be completely secure, and CP does
              not warrant that security incidents will never occur.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">6. Sub-Processors</h5>
            <p className="mt-[1.5rem]">
              The Client authorises CP to engage sub-processors to assist in
              providing the services.
            </p>
            <p className="mt-[1rem]">Sub-processors may include:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Hosting and cloud infrastructure providers</li>
              <li>Email and communications platforms</li>
              <li>Analytics, monitoring, or support tools</li>
              <li>
                Group companies or subsidiaries wholly owned and operated by CP
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              CP will ensure that any sub-processor is subject to data
              protection obligations that are no less protective than those set
              out in this Agreement.
            </p>
            <p className="mt-[1rem]">
              A list of categories of sub-processors may be provided on request.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              7. International Data Transfers
            </h5>
            <p className="mt-[1.5rem]">
              Where personal data is processed outside the UK or EEA, CP will
              ensure that appropriate safeguards are in place in accordance with
              UK GDPR, including the use of approved transfer mechanisms where
              required.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              8. Data Subject Rights
            </h5>
            <p className="mt-[1.5rem]">
              CP will, where reasonably possible:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                Notify the Client if it receives a request from a data subject
              </li>
              <li>
                Assist the Client in responding to data subject requests, taking
                into account the nature of the processing
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              CP is not responsible for responding directly to data subject
              requests unless expressly instructed by the Client.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              9. Personal Data Breaches
            </h5>
            <p className="mt-[1.5rem]">
              CP will notify the Client without undue delay after becoming aware
              of a personal data breach affecting personal data processed under
              this Agreement.
            </p>
            <p className="mt-[1rem]">
              CP will provide reasonable information to assist the Client in
              meeting its notification obligations under UK GDPR.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              10. Audits and Information
            </h5>
            <p className="mt-[1.5rem]">
              Upon reasonable written request, CP will make available information
              necessary to demonstrate compliance with this Agreement.
            </p>
            <p className="mt-[1rem]">Audits or inspections:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Must be reasonable and proportionate</li>
              <li>
                Must not unreasonably disrupt CP&apos;s business
              </li>
              <li>
                May be satisfied through documentation, certifications, or
                third-party reports where appropriate
              </li>
            </ul>
          </div>

          {/* 11 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              11. Client Responsibilities
            </h5>
            <p className="mt-[1.5rem]">The Client is responsible for:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                Determining the lawful basis for processing personal data
              </li>
              <li>Providing lawful instructions to CP</li>
              <li>
                Ensuring that personal data provided to CP is accurate and
                lawfully obtained
              </li>
              <li>
                Complying with its own obligations as Data Controller under UK
                GDPR
              </li>
            </ul>
          </div>

          {/* 12 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              12. Limitation of Liability
            </h5>
            <p className="mt-[1.5rem]">
              Liability arising from this Agreement is subject to the
              limitations set out in the Terms of Service.
            </p>
            <p className="mt-[1rem]">
              Nothing in this Agreement limits liability where such limitation is
              not permitted under applicable law.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              13. Term and Termination
            </h5>
            <p className="mt-[1.5rem]">
              This Agreement remains in effect for as long as CP processes
              personal data on behalf of the Client.
            </p>
            <p className="mt-[1rem]">
              On termination of the services, CP will, at the Client&apos;s
              option and subject to applicable law:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Delete personal data, or</li>
              <li>Return personal data and delete remaining copies</li>
            </ul>
          </div>

          {/* 14 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">14. Governing Law</h5>
            <p className="mt-[1.5rem]">
              This Agreement is governed by the laws of England and Wales, and
              the courts of England and Wales have exclusive jurisdiction.
            </p>
          </div>

          {/* 15 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              15. Order of Precedence
            </h5>
            <p className="mt-[1.5rem]">In the event of any conflict:</p>
            <ol className="mt-[1rem] list-decimal pl-[2rem]">
              <li>This Data Processing Agreement</li>
              <li>The Terms of Service</li>
              <li>Any applicable Proposal</li>
            </ol>
          </div>

          {/* Signatures */}
          <div>
            <h5 className="text-[2.2rem] font-bold">Signatures</h5>

            <div className="mt-[2rem] flex flex-col gap-[3rem] sm:flex-row sm:gap-[6rem]">
              <div>
                <p className="font-semibold">CP Agency Ltd</p>
                <p className="mt-[1rem]">Name: _______________________</p>
                <p>Title: _______________________</p>
                <p>Date: _______________________</p>
                <p>Signature: _______________________</p>
              </div>

              <div>
                <p className="font-semibold">Client</p>
                <p className="mt-[1rem]">Name: _______________________</p>
                <p>Title: _______________________</p>
                <p>Date: _______________________</p>
                <p>Signature: _______________________</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              Need to Discuss Data Processing?
            </h5>
            <p className="my-[1.5rem]">
              Get in touch to discuss your data processing requirements or
              request a copy of this agreement.
            </p>

            <PrimaryButton
              href="/contact"
              text="Contact us"
              bGcolor="#FF37B3"
              textColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProcessingAgreement;
