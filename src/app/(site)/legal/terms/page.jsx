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
                CP Agency Ltd
              </span>
            </div>
          </div>

          <div className="mt-[4rem] max-w-[90rem] space-y-[3rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
            {/* Intro */}
            <div className="space-y-[1.5rem]">
              <p>
                These Terms of Service (&quot;Terms&quot;) apply to all services
                provided by:
              </p>

              <p>
                CP Agency Ltd, a company incorporated in England and Wales,
                trading as Hassan Iqbal, CreativePixels, Creative Hosting,
                Monthly Design, and other associated trading names
                (&quot;CP&quot;, &quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;).
              </p>

              <p>
                By accepting a Proposal, instructing us to proceed, or using our
                services, you (&quot;the Client&quot;, &quot;you&quot;,
                &quot;your&quot;) agree to these Terms.
              </p>
            </div>

            {/* 1 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                1. How These Terms Work
              </h5>

              <p>
                These Terms set out the general legal framework for our
                services.
              </p>

              <p>They operate alongside:</p>
              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>One or more written Proposals</li>
                <li>
                  Any agreed schedules or appendices (such as support or
                  maintenance terms)
                </li>
                <li>
                  A Data Processing Agreement, where personal data is processed
                </li>
              </ul>

              <p>If there is any conflict:</p>
              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>
                  The Proposal takes priority only for scope, deliverables,
                  timelines, and pricing
                </li>
                <li>These Terms govern all other matters</li>
              </ul>
            </div>

            {/* 2 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">2. Scope of Services</h5>

              <p>
                We will provide the services described in the applicable
                Proposal.
              </p>
              <p>
                Any work not expressly included in scope is outside scope. If
                additional work is requested, we will discuss and agree any
                impact on cost or timelines before proceeding.
              </p>
            </div>

            {/* 3 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">3. Our Relationship</h5>

              <p>We provide services as an independent contractor.</p>
              <p>
                Nothing in these Terms creates a partnership, joint venture,
                employment relationship, or agency relationship between the
                parties.
              </p>
            </div>

            {/* 4 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                4. How We Deliver Services
              </h5>

              <p>Services may be delivered by:</p>
              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>Our employed team</li>
                <li>Group companies or subsidiaries wholly owned by us</li>
                <li>
                  Trusted specialist partners or suppliers where appropriate
                </li>
              </ul>
              <p>
                We remain responsible for the delivery of the services under
                these Terms.
              </p>
            </div>

            {/* 5 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                5. Client Responsibilities
              </h5>

              <p>To allow us to deliver services effectively, you agree to:</p>
              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>
                  Provide accurate information, materials, and access when
                  reasonably required
                </li>
                <li>
                  Appoint a primary point of contact with authority to provide
                  instructions and approvals
                </li>
                <li>
                  Review and respond to requests for feedback within reasonable
                  timeframes
                </li>
                <li>
                  Ensure that any content or materials you supply are lawful and
                  accurate
                </li>
              </ul>
              <p>
                Delays caused by missing information, late feedback, or
                conflicting instructions may require timelines to be adjusted.
              </p>
            </div>

            {/* 6 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                6. Timelines and Scheduling
              </h5>

              <p>
                Any timelines provided are estimates unless expressly agreed
                otherwise in writing.
              </p>
              <p>
                We manage work across multiple clients and will schedule work
                reasonably and in good faith. Time is not of the essence unless
                explicitly stated.
              </p>
            </div>

            {/* 7 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">7. Changes to Scope</h5>

              <p>
                If you request changes or additions to the agreed scope, we will
                discuss the implications on cost and delivery before proceeding.
              </p>
              <p>
                We are not obliged to undertake additional work until revised
                terms are agreed in writing.
              </p>
            </div>

            {/* 8 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">8. Fees and Payment</h5>

              <p>
                Fees and payment terms are set out in the applicable Proposal.
              </p>

              <p>Unless otherwise stated:</p>
              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>Invoices are payable on receipt</li>
                <li>Fees are exclusive of VAT</li>
              </ul>

              <p>
                If an invoice remains unpaid for more than 14 days after the due
                date, we may suspend services, access, hosting support, or
                delivery of work until payment is received. We will not be
                responsible for any loss or disruption arising from such
                suspension.
              </p>

              <p>
                We reserve the right to charge interest on overdue amounts in
                accordance with the Late Payment of Commercial Debts (Interest)
                Act 1998, together with reasonable recovery costs, where
                applicable.
              </p>

              <p>
                Suspension of services due to non-payment does not constitute
                termination of the agreement, and fees will continue to accrue
                in accordance with the agreed Proposal unless otherwise agreed
                in writing.
              </p>
            </div>

            {/* 9 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                9. Support and Service Levels
              </h5>

              <p>
                Where ongoing support or maintenance is included, response times
                and service levels will be set out in the applicable support or
                maintenance schedule.
              </p>
              <p>
                Response times relate to acknowledgement and initial assessment.
                Resolution times may vary depending on complexity, your input,
                or third-party dependencies.
              </p>
            </div>

            {/* 10 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">10. Peak Periods</h5>

              <p>
                Certain times of the year involve increased demand, including
                periods such as Black Friday, Christmas, and New Year.
              </p>
              <p>
                During these periods, non-critical requests may take longer to
                respond to. We will continue to prioritise critical issues
                affecting availability, security, or core functionality and will
                provide advance notice where reasonably possible.
              </p>
            </div>

            {/* 11 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                11. Hosting and Infrastructure
              </h5>

              <p>
                We may provide managed hosting services, either directly or
                under one of our trading names, using carefully selected premium
                third-party hosting and cloud infrastructure providers.
              </p>
              <p>
                We manage and support the hosting environment within the agreed
                scope. The underlying infrastructure is operated by independent
                providers under their own terms and service levels.
              </p>
              <p>
                While we take reasonable steps to maintain performance,
                stability, and security, no hosting provider can guarantee
                uninterrupted availability. Where hosting issues arise, we will
                use reasonable efforts to investigate, assist, and liaise with
                the relevant provider to resolve the issue.
              </p>
            </div>

            {/* 12 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                12. Third-Party Services
              </h5>

              <p>
                Websites, platforms, and marketing activity often rely on
                third-party services such as plugins, APIs, analytics tools,
                advertising platforms, and email services.
              </p>
              <p>
                We will take reasonable care when recommending or integrating
                third-party services but cannot control their availability,
                performance, or continued operation. Changes or issues with
                third-party services may require additional work, which we will
                discuss with you where applicable.
              </p>
            </div>

            {/* 13 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                13. Content and Information
              </h5>

              <p>
                You are responsible for reviewing and approving all content,
                data, pricing, specifications, and information used or published
                as part of the services.
              </p>
              <p>
                We do not independently verify legal, regulatory, or factual
                accuracy unless expressly agreed in writing.
              </p>
            </div>

            {/* 14 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                14. Marketing and SEO Services
              </h5>

              <p>
                Where we provide marketing services, including SEO, content, or
                advertising support:
              </p>
              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>
                  We do not guarantee specific rankings, traffic levels,
                  conversions, or commercial outcomes
                </li>
                <li>
                  Results may vary due to factors outside our control, including
                  algorithm changes, competition, and third-party platforms
                </li>
                <li>
                  Recommendations are made in good faith based on experience and
                  industry best practice
                </li>
              </ul>
              <p>
                You remain responsible for final approval of content and
                strategy.
              </p>
            </div>

            {/* 15 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                15. Platform and Product Development
              </h5>

              <p>
                Where services involve platform or product development,
                functionality may be delivered in stages.
              </p>
              <p>
                Any roadmaps, feature lists, or future plans are indicative only
                and may evolve as the product develops.
              </p>
            </div>

            {/* 16 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                16. Performance and Usage
              </h5>

              <p>
                Performance expectations are based on anticipated usage at the
                time of agreement. Significant changes in traffic, users, or
                usage patterns may require additional optimisation or
                infrastructure, which we will discuss with you where relevant.
              </p>
            </div>

            {/* 17 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                17. Intellectual Property
              </h5>

              <p>
                Ownership of deliverables does not transfer until all
                outstanding fees relating to those deliverables have been paid
                in full.
              </p>

              <p>Once payment has been made in full:</p>
              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>
                  You own the final deliverables created specifically for you
                </li>
                <li>
                  We retain ownership of our pre-existing tools, frameworks,
                  processes, and know-how
                </li>
                <li>
                  Open-source software remains subject to its own licences
                </li>
              </ul>
            </div>

            {/* 18 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                18. Portfolio, Attribution, and White-Label Work
              </h5>

              <p>
                For work delivered directly to you, we may reference
                non-confidential aspects of the work in our portfolio unless
                agreed otherwise.
              </p>

              <p>
                Where services are provided on a white-label basis for an agency
                or intermediary:
              </p>
              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>
                  Such work is excluded from our public portfolio by default
                </li>
                <li>
                  We will not publicly attribute or promote the work unless
                  expressly permitted in writing
                </li>
              </ul>

              <p>
                Unless restricted by a specific NDA, we may reference
                white-label work privately for internal discussions, proposals,
                or experience-sharing, without disclosing confidential or
                identifying details.
              </p>
            </div>

            {/* 19 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                19. Confidentiality and NDAs
              </h5>

              <p>
                Each party agrees to keep confidential information secure and
                not disclose it except as required to deliver the services.
              </p>
              <p>
                Where a non-disclosure agreement is in place, it will apply
                alongside these Terms. Any conflict will be clarified in
                writing.
              </p>
            </div>

            {/* 20 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">20. Data Protection</h5>

              <p>Where personal data is processed:</p>
              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>You act as Data Controller</li>
                <li>We act as Data Processor</li>
                <li>Processing is governed by the Data Processing Agreement</li>
              </ul>
              <p>
                Where data is processed outside the UK or EEA, appropriate
                safeguards will be applied in accordance with UK GDPR.
              </p>
            </div>

            {/* 21 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                21. Accessibility and Regulatory Matters
              </h5>

              <p>
                Unless expressly agreed in writing, we do not warrant compliance
                with specific regulatory or accessibility standards. Ongoing
                compliance remains your responsibility.
              </p>
            </div>

            {/* 22 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">22. Use of AI Tools</h5>

              <p>
                We may use AI-assisted tools to support parts of the services.
                All outputs remain subject to your review and approval.
              </p>
            </div>

            {/* 23 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">23. Liability</h5>

              <p>
                We will perform the services with reasonable skill and care.
              </p>
              <p>
                To the extent permitted by law, our total liability arising
                under these Terms is limited to the fees paid by you in the 12
                months preceding the claim.
              </p>
              <p>
                Nothing in these Terms limits liability for matters that cannot
                be excluded under UK law.
              </p>
            </div>

            {/* 24 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">
                24. Right to Refuse or Withdraw Services
              </h5>

              <p>
                We reserve the right to decline or withdraw from providing
                services where continuing would be unlawful, unethical, or would
                place us in breach of another agreement, provided we act
                reasonably and give notice where practicable.
              </p>
            </div>

            {/* 25 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">25. Termination</h5>

              <p>Termination terms are set out in the applicable Proposal.</p>

              <p>On termination:</p>
              <ul className="list-disc space-y-[1rem] pl-[2rem]">
                <li>Outstanding fees become immediately payable</li>
                <li>
                  Suspension for non-payment does not amount to termination
                </li>
                <li>We will reasonably assist with transition where agreed</li>
              </ul>
            </div>

            {/* 26 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">26. Force Majeure</h5>

              <p>
                Neither party is liable for delays or failures caused by events
                beyond their reasonable control.
              </p>
            </div>

            {/* 27 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">27. Notices</h5>

              <p>
                Any notices under these Terms may be given by email to the last
                known contact details provided by either party and will be
                deemed received on the next business day.
              </p>
            </div>

            {/* 28 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">28. Governing Law</h5>

              <p>
                These Terms are governed by the laws of England and Wales, and
                the courts of England and Wales have exclusive jurisdiction.
              </p>
            </div>

            {/* 29 */}
            <div className="space-y-[1.5rem]">
              <h5 className="text-[2.2rem] font-bold">29. Entire Agreement</h5>

              <p>
                These Terms, together with any Proposals and agreed schedules,
                constitute the entire agreement between the parties. Any
                variation must be agreed in writing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
