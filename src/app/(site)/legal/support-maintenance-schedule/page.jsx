import PrimaryButton from "@/components/ui/PrimaryButton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const SupportMaintenanceSchedule = () => {
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
            Support &amp; Maintenance Schedule
          </h4>

          <span className="mt-[1rem] block text-[1.8rem] font-semibold text-[#312749]">
            CP Agency Ltd
          </span>

          <p className="mt-[1rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
            This Support &amp; Maintenance Schedule (&quot;Schedule&quot;) forms
            part of the Terms of Service between CP Agency Ltd (&quot;CP&quot;,
            &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) and the Client.
          </p>
          <p className="mt-[0.5rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
            This Schedule applies only where support or maintenance services are
            included in an agreed Proposal.
          </p>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* Precedence */}
          <div>
            <p className="font-semibold">Where there is any conflict:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                The Proposal or any project-specific agreement takes precedence
                for scope, deliverables, and timelines
              </li>
              <li>The Terms of Service govern all other matters</li>
              <li>
                This Schedule applies unless expressly overridden in writing
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
          </div>

          {/* 1 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              1. Purpose of Support &amp; Maintenance
            </h5>
            <p className="mt-[1.5rem]">
              Our support and maintenance services are designed to:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                Keep supported websites, platforms, or applications operating
                reliably
              </li>
              <li>
                Address issues, bugs, and reasonable day-to-day requests
              </li>
              <li>
                Provide technical assistance within the agreed scope
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              Support is intended to maintain existing systems, not to replace
              ongoing development, redesign, or feature expansion unless
              expressly agreed.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              2. Platforms Covered
            </h5>
            <p className="mt-[1.5rem]">
              Support and maintenance may apply to, but are not limited to:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>WordPress websites</li>
              <li>Shopify stores</li>
              <li>Webflow sites</li>
              <li>Custom-built websites or applications</li>
            </ul>
            <p className="mt-[1.5rem]">
              The specific platform(s) covered are defined in the Proposal.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              3. What Support Typically Includes
            </h5>
            <p className="mt-[1.5rem]">
              Unless otherwise stated in the Proposal, support and maintenance
              may include:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                Monitoring for availability and critical errors (where
                applicable)
              </li>
              <li>
                Platform, theme, plugin, or app updates where supported
              </li>
              <li>Security updates and basic hardening</li>
              <li>Bug fixes relating to existing functionality</li>
              <li>Reasonable configuration or content adjustments</li>
              <li>
                Hosting support and liaison where hosting is provided or managed
                by CP
              </li>
              <li>
                Technical advice relating to the supported platform or stack
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              All support is provided on a reasonable endeavours basis.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              4. What Support Does Not Include
            </h5>
            <p className="mt-[1.5rem]">
              Unless expressly agreed otherwise, support does not include:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>New features, functionality, or integrations</li>
              <li>
                New page builds, templates, layouts, or design work
              </li>
              <li>Redesigns or visual changes</li>
              <li>Performance optimisation beyond agreed scope</li>
              <li>Major refactoring or replatforming</li>
              <li>
                Recovery from unauthorised changes made by third parties
              </li>
              <li>
                Fixes arising from unsupported plugins, themes, apps, or custom
                code
              </li>
              <li>
                Issues caused by third-party services, platforms, or
                infrastructure
              </li>
              <li>
                Content creation, copywriting, SEO strategy, or marketing
                services
              </li>
              <li>
                Training beyond brief explanations directly related to support
                tasks
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              Where work falls outside scope, we will discuss options and pricing
              before proceeding.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              5. Proposals and Project Work May Override This Schedule
            </h5>
            <p className="mt-[1.5rem]">
              From time to time, we may agree to deliver:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>New pages, templates, or designs</li>
              <li>
                Enhancements or changes outside standard support
              </li>
              <li>
                Project-based, campaign-specific, or one-off work
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              Where this occurs, the relevant Proposal or project agreement
              overrides this Schedule for the agreed scope and duration. This
              Schedule continues to apply to all other support activity.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              6. Service Levels &amp; Response Times (SLAs)
            </h5>
            <p className="mt-[1.5rem]">
              Response times relate to acknowledgement and initial assessment,
              not guaranteed resolution.
            </p>
            <p className="mt-[1rem]">
              Unless otherwise agreed, the following targets apply during
              business hours:
            </p>

            <div className="mt-[2rem] space-y-[2rem]">
              <div>
                <p className="font-semibold">
                  &bull; Critical issue
                </p>
                <p className="pl-[1.5rem]">
                  (Website unavailable, checkout failure, confirmed security
                  incident)
                </p>
                <p className="pl-[1.5rem] font-semibold">
                  Response within 4 business hours
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  &bull; High priority issue
                </p>
                <p className="pl-[1.5rem]">
                  (Major functionality impaired)
                </p>
                <p className="pl-[1.5rem] font-semibold">
                  Response within 1 business day
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  &bull; Standard request
                </p>
                <p className="pl-[1.5rem]">
                  (Minor issues or general support)
                </p>
                <p className="pl-[1.5rem] font-semibold">
                  Response within 2 business days
                </p>
              </div>
            </div>

            <p className="mt-[2rem]">
              Resolution times depend on complexity, Client input, and
              third-party dependencies.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">7. Peak Periods</h5>
            <p className="mt-[1.5rem]">
              Certain periods experience increased demand, including:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Black Friday and Cyber Monday</li>
              <li>Christmas and New Year</li>
              <li>UK public holidays</li>
              <li>Other pre-notified peak periods</li>
            </ul>

            <p className="mt-[1.5rem] font-semibold">During peak periods:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Non-critical requests may take longer to respond to</li>
              <li>Critical issues will continue to be prioritised</li>
              <li>
                Planned changes are encouraged outside peak periods where
                possible
              </li>
            </ul>
          </div>

          {/* 8 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              8. Hosting Support, Backups, and Infrastructure
            </h5>
            <p className="mt-[1.5rem]">
              Where hosting is provided or managed by CP:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                We manage and support the hosting environment within the agreed
                scope
              </li>
              <li>
                The underlying infrastructure is operated by third-party
                providers under their own terms and service levels
              </li>
              <li>
                No hosting provider can guarantee uninterrupted availability,
                performance, or security
              </li>
            </ul>

            <p className="mt-[1.5rem]">
              Where backups are in place as part of hosting or maintenance
              services, they are provided on a best-efforts basis only. No
              backup or restore process can be guaranteed, and we recommend that
              Clients maintain their own independent backups of critical data.
            </p>
            <p className="mt-[1rem]">
              Where hosting or infrastructure issues arise, we will use
              reasonable efforts to investigate, mitigate, and liaise with the
              relevant provider.
            </p>
            <p className="mt-[1.5rem]">
              Support SLAs do not apply to outages or failures caused by:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Third-party hosting or infrastructure providers</li>
              <li>Network failures or external service disruptions</li>
              <li>Force majeure events</li>
              <li>Factors outside our reasonable control</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              9. Security Responsibilities
            </h5>
            <p className="mt-[1.5rem]">
              We take reasonable steps to maintain security in line with industry
              practices and the agreed scope of services.
            </p>
            <p className="mt-[1rem]">
              However, no website, platform, or system can be guaranteed to be
              completely secure. Security threats, vulnerabilities, and attacks
              may occur despite appropriate precautions, and we do not warrant
              that security incidents will never arise.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              10. Third-Party Services and Client Licences
            </h5>
            <p className="mt-[1.5rem]">
              Websites and platforms commonly rely on third-party services,
              including:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Plugins, apps, or extensions</li>
              <li>Payment gateways</li>
              <li>Email, analytics, or marketing platforms</li>
              <li>APIs and integrations</li>
            </ul>

            <p className="mt-[1.5rem]">
              Where services rely on Client-held licences, subscriptions, or
              accounts, the Client is responsible for maintaining these in an
              active and valid state. Issues arising from expired, inactive, or
              misconfigured licences may fall outside the scope of support and
              may require additional chargeable work.
            </p>
            <p className="mt-[1rem]">
              We are not responsible for the availability, performance, security,
              or continued operation of third-party services.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              11. Access and Third-Party Changes
            </h5>
            <p className="mt-[1.5rem]">Support assumes that:</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                We retain appropriate access to the supported systems
              </li>
              <li>
                Changes are not made by unauthorised third parties
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              Issues caused by Client-side changes, access restrictions, or
              third-party modifications may require additional chargeable work.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              12. Fair Use (Retainers)
            </h5>
            <p className="mt-[1.5rem]">
              Where support is provided on a retainer basis:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                Support time must be used reasonably and in good faith
              </li>
              <li>
                Excessive, repeated, or disproportionate requests may be reviewed
              </li>
              <li>
                Where usage consistently exceeds expectations, we may propose
                adjustments or alternative arrangements
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              This ensures fair service across all clients.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              13. Suspension of Support
            </h5>
            <p className="mt-[1.5rem]">
              We may suspend support services where:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Invoices remain unpaid</li>
              <li>Required access is unavailable</li>
              <li>
                Continued support would be unlawful, unsafe, or impractical
              </li>
            </ul>
            <p className="mt-[1.5rem]">
              Suspension does not waive payment obligations under the Proposal or
              Terms of Service.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              14. Client Cooperation
            </h5>
            <p className="mt-[1.5rem]">
              Effective support relies on timely cooperation.
            </p>
            <p className="mt-[1rem]">
              Delays caused by missing information, delayed approvals, or
              unclear instructions may impact response or resolution times.
            </p>
          </div>

          {/* 15 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              15. Communication Channels
            </h5>
            <p className="mt-[1.5rem]">
              To ensure requests are properly tracked and prioritised, support
              requests and instructions must be submitted via approved channels:
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Email</li>
              <li>Slack (where a shared workspace is in place)</li>
              <li>Approved project or ticketing systems</li>
            </ul>

            <p className="mt-[1.5rem]">
              Requests sent via SMS, WhatsApp, social media, or other instant
              messaging platforms are not treated as valid support requests.
            </p>
            <p className="mt-[1rem]">
              Phone calls or meetings may be used for discussion, but
              instructions and approvals must be confirmed in writing via an
              approved channel.
            </p>
          </div>

          {/* 16 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              16. Updates to This Schedule
            </h5>
            <p className="mt-[1.5rem]">
              This Schedule may be updated from time to time. The version
              referenced in the applicable Proposal will apply unless otherwise
              agreed.
            </p>
          </div>

          {/* 17 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              17. Relationship to the Terms of Service
            </h5>
            <p className="mt-[1.5rem]">
              This Schedule forms part of and is governed by the Terms of
              Service.
            </p>
            <p className="mt-[1rem]">
              We reserve the right to charge interest on overdue amounts in
              accordance with the Late Payment of Commercial Debts (Interest)
              Act 1998, together with reasonable recovery costs, where
              applicable.
            </p>
            <p className="mt-[1rem]">
              Suspension of services due to non-payment does not constitute
              termination of the agreement, and fees will continue to accrue in
              accordance with the agreed Proposal unless otherwise agreed in
              writing.
            </p>
            <p className="mt-[1rem]">
              In the event of any conflict, the Terms of Service prevail unless
              expressly overridden in writing.
            </p>
          </div>

          {/* CTA */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              Need to Discuss Support?
            </h5>
            <p className="my-[1.5rem]">
              Get in touch to discuss a support and maintenance plan tailored to
              your needs.
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

export default SupportMaintenanceSchedule;
