import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ComplaintsProcedurePage = () => {
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
            Complaints Procedure
          </h1>
          <span className="mt-[0.5rem] block text-[1.6rem] text-[#312749]">
            Last updated: January 2026
          </span>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* Commitment */}
          <section>
            <h2 className="text-[2.2rem] font-bold">Our Commitment</h2>
            <p className="mt-[1.5rem]">
              We take all feedback seriously and are committed to resolving any
              issues quickly and fairly. Your satisfaction is our priority, and
              we view complaints as opportunities to improve our service.
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              1. Before Making a Formal Complaint
            </h2>
            <p className="mt-[1.5rem]">
              Many issues can be resolved quickly through direct communication.
              Before submitting a formal complaint, we encourage you to:
            </p>

            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Speak with your project manager or account contact</li>
              <li>Email your concerns to your usual point of contact</li>
              <li>Schedule a call to discuss the issue</li>
            </ul>

            <p className="mt-[1.5rem]">
              We aim to resolve most concerns informally within 2 business days.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              2. How to Submit a Formal Complaint
            </h2>

            <p className="mt-[1.5rem] font-semibold">By Email</p>
            <p>complaints@creativepixels.co.uk</p>

            <p className="mt-[1.5rem] font-semibold">By Post</p>
            <p>
              Complaints Department
              <br />
              CreativePixels Ltd
              <br />
              [Company Address]
            </p>

            <p className="mt-[1.5rem] font-semibold">What to Include</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Your name and contact details</li>
              <li>Project name or reference number</li>
              <li>Clear description of the issue</li>
              <li>Dates and details of previous discussions</li>
              <li>Supporting documentation (emails, screenshots, etc.)</li>
              <li>Your desired outcome or resolution</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              3. Our Resolution Process
            </h2>

            <p className="mt-[1.5rem] font-semibold">
              Step 1: Acknowledgement (Within 2 days)
            </p>
            <p>
              We will acknowledge receipt of your complaint and assign it to a
              senior team member for investigation.
            </p>

            <p className="mt-[1.5rem] font-semibold">
              Step 2: Investigation (5–10 days)
            </p>
            <p>
              We will review relevant documentation, speak with involved team
              members, and may contact you for further information.
            </p>

            <p className="mt-[1.5rem] font-semibold">
              Step 3: Resolution (Within 14 days)
            </p>
            <p>
              You will receive a written response outlining our findings and
              proposed resolution.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">4. Possible Outcomes</h2>

            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Corrective work or completion of deliverables</li>
              <li>Partial refund or service credit</li>
              <li>Process improvements</li>
              <li>Staff training</li>
              <li>Formal apology</li>
              <li>Explanation where service is deemed appropriate</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">5. Escalation</h2>

            <p className="mt-[1.5rem] font-semibold">Internal Escalation</p>
            <p>
              Request a review by our Managing Director by emailing{" "}
              <span className="font-medium">director@creativepixels.co.uk</span>
              . We will respond within 10 business days.
            </p>

            <p className="mt-[1.5rem] font-semibold">External Escalation</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Mediation via an independent mediator</li>
              <li>Trade bodies (if applicable)</li>
              <li>Small Claims Court (for disputes under £10,000)</li>
              <li>Legal action through courts of England and Wales</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              6. What We Cannot Accept
            </h2>

            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Complaints made more than 6 months after completion</li>
              <li>Issues arising from client modifications</li>
              <li>Disputes already in legal proceedings</li>
              <li>Anonymous complaints</li>
              <li>Abusive or threatening communications</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              7. Learning From Complaints
            </h2>

            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Logged in our quality management system</li>
              <li>Reviewed monthly by management</li>
              <li>Used to identify improvement areas</li>
              <li>Integrated into staff training</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">8. Confidentiality</h2>
            <p className="mt-[1.5rem]">
              All complaints are handled confidentially and retained for 6 years
              in line with our data retention policy.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">9. Your Rights</h2>

            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Fair and impartial handling</li>
              <li>Progress updates</li>
              <li>Independent review</li>
              <li>Access to personal complaint data</li>
              <li>Right to escalate</li>
            </ul>
          </section>

          {/* CTA */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              Need to Raise a Concern?
            </h2>
            <p className="mt-[1.5rem]">
              We’re here to help. Please reach out if something isn’t right.
            </p>
            <p className="mt-[1rem] font-semibold">
              complaints@creativepixels.co.uk
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsProcedurePage;
