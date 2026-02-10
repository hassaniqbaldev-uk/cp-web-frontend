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
            Mutual Non-Disclosure Agreement
          </h4>

          <span className="mt-[1rem] block text-[1.8rem] font-semibold text-[#312749]">
            CP Agency Ltd
          </span>

          <span className="mt-[0.5rem] block text-[1.6rem] leading-[2.4rem] text-[#312749]">
            Date: [Insert date]
          </span>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* Intro */}
          <div>
            <p>This Agreement is made between:</p>

            <div className="mt-[1.5rem]">
              <p className="font-semibold">CP Agency Ltd</p>
              <p>Bartle House, Oxford Court</p>
              <p>Manchester, M2 3WQ</p>
              <p>United Kingdom</p>
              <p>(&quot;CP&quot;)</p>
            </div>

            <p className="mt-[1.5rem]">and</p>

            <div className="mt-[1.5rem]">
              <p>[Client / Agency Legal Name]</p>
              <p>[Registered address]</p>
              <p>(&quot;the Other Party&quot;)</p>
            </div>

            <p className="mt-[1.5rem]">
              Together, the &quot;Parties&quot;.
            </p>
          </div>

          {/* 1 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">1. Purpose</h5>
            <p className="mt-[1.5rem]">
              The Parties wish to exchange confidential information for the
              purpose of discussing, evaluating, or delivering services,
              projects, or business opportunities (the &quot;Purpose&quot;).
            </p>
          </div>

          {/* 2 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              2. Confidential Information
            </h5>

            <h6 className="mt-[1.5rem] text-[1.8rem] font-bold">
              2.1 Definition
            </h6>
            <p className="mt-[1rem]">
              &quot;Confidential Information&quot; means any information
              disclosed by either Party to the other, whether orally, visually,
              or in writing, that is confidential by nature or marked as
              confidential, including but not limited to:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Business plans, ideas, strategies, or concepts</li>
              <li>
                Technical information, code, designs, systems, or processes
              </li>
              <li>Client, customer, or supplier information</li>
              <li>Commercial terms, pricing, or internal practices</li>
            </ul>

            <h6 className="mt-[2rem] text-[1.8rem] font-bold">
              2.2 Exclusions
            </h6>
            <p className="mt-[1rem]">
              Confidential Information does not include information that:
            </p>
            <ul className="mt-[1rem] list-[lower-alpha] pl-[2rem]">
              <li>
                is or becomes publicly available other than through a breach of
                this Agreement;
              </li>
              <li>
                was lawfully known to the receiving Party before disclosure;
              </li>
              <li>
                is independently developed without use of the Confidential
                Information; or
              </li>
              <li>
                is required to be disclosed by law or a competent authority.
              </li>
            </ul>

            <h6 className="mt-[2rem] text-[1.8rem] font-bold">
              2.3 Skills, Knowledge and Know-How
            </h6>
            <p className="mt-[1rem]">
              Nothing in this Agreement shall restrict either Party from using
              general skills, experience, knowledge, or know-how gained during
              discussions or performance of the Purpose, provided that such use
              does not involve the disclosure or misuse of the other
              Party&apos;s Confidential Information.
            </p>
            <p className="mt-[1rem]">
              For the avoidance of doubt, general skills, experience, and
              know-how are not considered Confidential Information and cannot be
              protected under this Agreement.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              3. Confidentiality Obligations
            </h5>
            <p className="mt-[1.5rem]">Each Party agrees to:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Keep Confidential Information confidential</li>
              <li>Use it solely for the Purpose</li>
              <li>
                Not disclose it to any third party except as permitted under
                this Agreement
              </li>
              <li>
                Take reasonable steps to protect it from unauthorised access or
                disclosure
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              4. Permitted Internal Disclosure
            </h5>
            <p className="mt-[1.5rem]">
              CP may disclose Confidential Information on a need-to-know basis
              to:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Its employees</li>
              <li>Group companies</li>
              <li>Trusted delivery partners or subcontractors</li>
            </ul>
            <p className="mt-[1rem]">
              …provided such parties are subject to appropriate confidentiality
              obligations.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              5. Portfolio and Reference Use
            </h5>

            <h6 className="mt-[1.5rem] text-[1.8rem] font-bold">
              5.1 Agency and White-Label Work
            </h6>
            <p className="mt-[1rem]">
              Where the Other Party is an agency, reseller, white-label partner,
              or is reasonably understood to be offering similar services to CP,
              CP will not publicly publish or attribute the work on its website,
              marketing materials, or public portfolios, unless expressly agreed
              otherwise in writing.
            </p>
            <p className="mt-[1rem]">
              In such cases, CP may reference the work privately and without
              public attribution, including in pitches, proposals, or capability
              discussions, and may describe the work in general or anonymised
              terms, including where delivered via or on behalf of another
              agency.
            </p>

            <h6 className="mt-[2rem] text-[1.8rem] font-bold">
              5.2 Non-Agency Client Work
            </h6>
            <p className="mt-[1rem]">
              For clients who are not agencies or acting in a white-label
              capacity, CP may publicly reference completed work, including
              naming the client and displaying non-confidential deliverables, in
              line with its Terms of Service, unless the client expressly
              requests otherwise in writing.
            </p>

            <h6 className="mt-[2rem] text-[1.8rem] font-bold">
              5.3 Client-Requested Restrictions
            </h6>
            <p className="mt-[1rem]">
              Where the Other Party expressly requests that their work not be
              referenced publicly, CP will comply with such request and, where
              reasonably practicable, remove existing public references.
            </p>
            <p className="mt-[1rem]">
              Unless expressly prohibited in writing, such restriction does not
              prevent CP from referencing the work privately, without public
              attribution, for legitimate business purposes.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              6. Intellectual Property
            </h5>
            <p className="mt-[1.5rem]">
              Nothing in this Agreement grants either Party any licence,
              interest, or rights in respect of the other Party&apos;s
              intellectual property, except as strictly necessary for the
              Purpose.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              7. Return or Destruction of Information
            </h5>
            <p className="mt-[1.5rem]">
              Upon written request, each Party shall take reasonable steps to
              return or destroy Confidential Information, subject to lawful
              retention requirements, backups, and record-keeping obligations.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">8. Duration</h5>
            <p className="mt-[1.5rem]">
              This Agreement applies from the date of signature.
            </p>
            <p className="mt-[1rem]">
              Confidentiality obligations shall continue for three (3) years
              from the date of disclosure of the relevant Confidential
              Information.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              9. Relationship to Other Agreements
            </h5>
            <p className="mt-[1.5rem]">
              This Agreement does not override or replace:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>CP&apos;s Terms of Service</li>
              <li>
                Any Proposal, Statement of Work, or written agreement between
                the Parties
              </li>
            </ul>
            <p className="mt-[1rem]">
              In the event of conflict, the Terms of Service shall prevail
              unless expressly stated otherwise.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              10. Governing Law and Jurisdiction
            </h5>
            <p className="mt-[1.5rem]">
              This Agreement is governed by the laws of England and Wales, and
              the courts of England and Wales shall have exclusive jurisdiction.
            </p>
          </div>

          {/* Signatures */}
          <div>
            <h5 className="text-[2.2rem] font-bold">Signatures</h5>

            <p className="mt-[1.5rem] font-semibold">For CP Agency Ltd</p>
            <p>Name: _______________________</p>
            <p>Title: _______________________</p>
            <p>Date: _______________________</p>
            <p>Signature: _______________________</p>

            <p className="mt-[2rem] font-semibold">
              For [Client / Agency Legal Name]
            </p>
            <p>Name: _______________________</p>
            <p>Title: _______________________</p>
            <p>Date: _______________________</p>
            <p>Signature: _______________________</p>
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
