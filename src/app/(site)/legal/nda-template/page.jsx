import PrimaryButton from "@/components/ui/PrimaryButton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NdaTemplatePage = () => {
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
            Non-Disclosure Agreement
          </h4>

          <span className="mt-[0.5rem] block text-[1.6rem] leading-[2.4rem] text-[#312749]">
            Last updated: January 2026
          </span>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* About */}
          <div>
            <h5 className="text-[2.2rem] font-bold">About This NDA</h5>
            <p className="mt-[1.5rem]">
              This is a mutual (two-way) non-disclosure agreement, meaning both
              parties are equally bound to protect each other&apos;s
              confidential information. It&apos;s suitable for discovery calls,
              project discussions, and ongoing engagements.
            </p>
          </div>

          {/* Intro */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              MUTUAL NON-DISCLOSURE AGREEMENT
            </h5>

            <p className="mt-[1.5rem]">
              This Agreement is entered into as of <strong>[DATE]</strong>{" "}
              between:
            </p>

            <p className="mt-[1.5rem]">
              <strong>Party 1:</strong> CreativePixels Ltd, a company registered
              in England and Wales (Company No. 12345678), with registered
              office at [ADDRESS] (&quot;CreativePixels&quot;)
            </p>

            <p className="mt-[1.5rem]">
              <strong>Party 2:</strong> [COMPANY NAME], a company registered in
              [JURISDICTION] (Company No. [NUMBER]), with registered office at
              [ADDRESS] (&quot;the Client&quot;)
            </p>

            <p className="mt-[1.5rem]">
              Together referred to as &quot;the Parties&quot; and individually
              as &quot;a Party&quot;.
            </p>
          </div>

          {/* 1 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">1. Purpose</h5>
            <p className="mt-[1.5rem]">
              The Parties wish to explore a potential business relationship
              concerning [DESCRIPTION OF PROJECT/PURPOSE] (the
              &quot;Purpose&quot;). In connection with the Purpose, each Party
              may disclose certain confidential and proprietary information to
              the other Party.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              2. Definition of Confidential Information
            </h5>
            <p className="mt-[1.5rem]">
              &quot;Confidential Information&quot; means any and all information
              disclosed by either Party, including but not limited to:
            </p>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Business plans, strategies, and forecasts</li>
              <li>Customer lists, data, and relationships</li>
              <li>Financial information and pricing</li>
              <li>Technical data, designs, and specifications</li>
              <li>Software, source code, and algorithms</li>
              <li>Marketing plans and research</li>
              <li>Trade secrets and know-how</li>
              <li>
                Any information marked as confidential or reasonably understood
                to be confidential
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">3. Exclusions</h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Publicly available information</li>
              <li>Information previously known to the Receiving Party</li>
              <li>Independently developed information</li>
              <li>Information lawfully obtained from a third party</li>
              <li>Information required to be disclosed by law</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">4. Obligations</h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Hold Confidential Information in strict confidence</li>
              <li>Use it only for the stated Purpose</li>
              <li>Limit access to authorised individuals</li>
              <li>Apply reasonable security measures</li>
              <li>Notify of any unauthorised disclosure</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">5. Return of Materials</h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Return or destroy all Confidential Information</li>
              <li>Certify destruction in writing</li>
              <li>Delete electronic copies where feasible</li>
            </ul>
          </div>

          {/* 6–10 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              6. No License or Warranty
            </h5>
            <p className="mt-[1.5rem]">
              No intellectual property rights are granted. Information is
              provided &quot;as is&quot;.
            </p>
          </div>

          <div>
            <h5 className="text-[2.2rem] font-bold">7. No Obligation</h5>
            <p className="mt-[1.5rem]">
              This Agreement does not obligate either Party to proceed with any
              transaction.
            </p>
          </div>

          <div>
            <h5 className="text-[2.2rem] font-bold">8. Term</h5>
            <p className="mt-[1.5rem]">
              This Agreement remains effective for [2 YEARS], with
              confidentiality obligations surviving for [3 YEARS].
            </p>
          </div>

          <div>
            <h5 className="text-[2.2rem] font-bold">9. Remedies</h5>
            <p className="mt-[1.5rem]">
              Breach may result in irreparable harm and entitles the Disclosing
              Party to equitable relief.
            </p>
          </div>

          <div>
            <h5 className="text-[2.2rem] font-bold">10. General Provisions</h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Governing Law: England and Wales</li>
              <li>Exclusive Jurisdiction: English courts</li>
              <li>Entire Agreement</li>
              <li>Written amendments only</li>
              <li>Severability applies</li>
              <li>No assignment without consent</li>
            </ul>
          </div>

          {/* Signatures */}
          <div>
            <h5 className="text-[2.2rem] font-bold">11. Signatures</h5>

            <p className="mt-[1.5rem] font-semibold">For CreativePixels Ltd:</p>
            <p>Signature: _______________________</p>
            <p>Name: _______________________</p>
            <p>Title: _______________________</p>
            <p>Date: _______________________</p>

            <p className="mt-[2rem] font-semibold">For [Client Company]:</p>
            <p>Signature: _______________________</p>
            <p>Name: _______________________</p>
            <p>Title: _______________________</p>
            <p>Date: _______________________</p>
          </div>

          {/* CTA */}
          <div>
            <h5 className="text-[2.2rem] font-bold">Need a Custom NDA?</h5>
            <p className="my-[1.5rem]">
              We can work with your legal team to accommodate specific
              requirements or use your company&apos;s standard NDA.
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

export default NdaTemplatePage;
