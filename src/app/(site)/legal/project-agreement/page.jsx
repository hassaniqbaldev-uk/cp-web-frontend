import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ProjectAgreementPage = () => {
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
            Project Agreement
          </h4>

          <span className="mt-[0.5rem] block text-[1.6rem] leading-[2.4rem] text-[#312749]">
            Last updated: January 2026
          </span>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* 1. Scope */}
          <div>
            <h5 className="text-[2.2rem] font-bold">1. Scope of Work</h5>
            <p className="mt-[1.5rem]">
              This Project Agreement (&quot;Agreement&quot;) outlines the terms
              under which CreativePixels Ltd (&quot;we&quot;, &quot;us&quot;,
              &quot;the Agency&quot;) will provide website design and
              development services to you (&quot;the Client&quot;).
            </p>
            <p className="mt-[1.5rem]">
              The specific deliverables, timeline, and pricing will be detailed
              in a separate Project Proposal or Statement of Work (SOW), which
              forms part of this Agreement when signed.
            </p>
          </div>

          {/* 2. Phases */}
          <div>
            <h5 className="text-[2.2rem] font-bold">2. Project Phases</h5>
            <p className="mt-[1.5rem]">
              Our standard project workflow consists of:
            </p>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Discovery & Strategy</li>
              <li>Wireframing</li>
              <li>Design (Figma or similar tools)</li>
              <li>Development</li>
              <li>Testing & Quality Assurance</li>
              <li>Launch</li>
              <li>Handover, training, and documentation</li>
            </ul>
          </div>

          {/* 3. Payment */}
          <div>
            <h5 className="text-[2.2rem] font-bold">3. Payment Terms</h5>
            <p className="mt-[1.5rem]">Unless otherwise agreed in writing:</p>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>40% deposit due upon signing to commence work</li>
              <li>30% mid-project payment due upon design approval</li>
              <li>30% final payment due before website launch</li>
            </ul>
            <p className="mt-[1.5rem]">
              All invoices are payable within 14 days. Late payments may incur
              interest at 8% above the Bank of England base rate.
            </p>
          </div>

          {/* 4. Client Responsibilities */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              4. Client Responsibilities
            </h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Provide content within agreed timelines</li>
              <li>Designate a single point of contact</li>
              <li>Provide feedback within 5 business days</li>
              <li>Obtain permissions for third-party content</li>
              <li>Provide access to hosting, domains, and services</li>
            </ul>
          </div>

          {/* 5. Revisions */}
          <div>
            <h5 className="text-[2.2rem] font-bold">5. Revisions & Changes</h5>
            <p className="mt-[1.5rem]">Revision allowances per phase:</p>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Growth Website: 2 revision rounds</li>
              <li>E-commerce Scale: 3 revision rounds</li>
              <li>Custom Application: Unlimited within scope</li>
            </ul>
            <p className="mt-[1.5rem]">
              Out-of-scope changes require written approval and may incur
              additional fees.
            </p>
          </div>

          {/* 6. Timeline */}
          <div>
            <h5 className="text-[2.2rem] font-bold">6. Timeline & Delays</h5>
            <p className="mt-[1.5rem]">
              Timelines are estimates and depend on timely client feedback.
              Delays may result in rescheduling, extended timelines, or
              additional fees.
            </p>
          </div>

          {/* 7. IP */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              7. Intellectual Property
            </h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>
                You own the final website and custom code upon full payment
              </li>
              <li>We retain ownership of pre-existing frameworks and tools</li>
              <li>
                Third-party assets remain subject to their respective licenses
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              We may display the work in our portfolio unless otherwise agreed.
            </p>
          </div>

          {/* 8. Warranty */}
          <div>
            <h5 className="text-[2.2rem] font-bold">8. Warranties & Support</h5>
            <p className="mt-[1.5rem]">
              We provide a 30-day bug-fix warranty covering functionality and
              display issues. This excludes client modifications and third-
              party updates.
            </p>
          </div>

          {/* 9. Cancellation */}
          <div>
            <h5 className="text-[2.2rem] font-bold">9. Cancellation</h5>
            <p className="mt-[1.5rem]">
              Either party may cancel with 14 days written notice. Work
              completed to date must be paid for. Deposits are non-refundable
              once work has begun.
            </p>
          </div>

          {/* 10. Liability */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              10. Limitation of Liability
            </h5>
            <p className="mt-[1.5rem]">
              Our total liability shall not exceed the total fees paid for the
              project. We are not liable for indirect or consequential damages.
            </p>
          </div>

          {/* 11. Confidentiality */}
          <div>
            <h5 className="text-[2.2rem] font-bold">11. Confidentiality</h5>
            <p className="mt-[1.5rem]">
              Both parties agree to keep confidential any proprietary
              information shared during the project.
            </p>
          </div>

          {/* 12. Law */}
          <div>
            <h5 className="text-[2.2rem] font-bold">12. Governing Law</h5>
            <p className="mt-[1.5rem]">
              This Agreement is governed by the laws of England and Wales.
            </p>
          </div>

          {/* 13. Acceptance */}
          <div>
            <h5 className="text-[2.2rem] font-bold">13. Acceptance</h5>
            <p className="mt-[1.5rem]">
              By signing a proposal or making a deposit payment, you confirm
              acceptance of these terms.
            </p>
          </div>

          {/* CTA */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              Need a Custom Agreement?
            </h5>
            <p className="mt-[1.5rem]">
              For enterprise projects or specific legal requirements, we can
              provide tailored agreements. Contact our team to discuss.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAgreementPage;
