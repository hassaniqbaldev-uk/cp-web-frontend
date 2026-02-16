import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const RetainerAgreementPage = () => {
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
            Retainer Agreement
          </h4>

          <span className="mt-[0.5rem] block text-[1.6rem] leading-[2.4rem] text-[#312749]">
            Last updated: January 2026
          </span>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* 1. Overview */}
          <div>
            <h5 className="text-[2.2rem] font-bold">1. Overview</h5>
            <p className="mt-[1.5rem]">
              This Retainer Agreement (&quot;Agreement&quot;) governs the
              ongoing provision of services by CreativePixels Ltd
              (&quot;we&quot;, &quot;us&quot;, &quot;the Agency&quot;) to the
              Client (&quot;you&quot;) on a monthly recurring basis.
            </p>
          </div>

          {/* 2. Retainer Types */}
          <div>
            <h5 className="text-[2.2rem] font-bold">2. Retainer Types</h5>

            <p className="mt-[1.5rem] font-semibold">Maintenance Retainers</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>
                Essential Care (£250/mo): Daily backups, security updates,
                uptime monitoring
              </li>
              <li>
                Performance Plus (£450/mo): Essential + 2 hours development time
              </li>
              <li>
                Dedicated Support (£850/mo): Priority support, 5 hours dev time,
                monthly calls
              </li>
            </ul>

            <p className="mt-[2rem] font-semibold">Growth Retainers</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>SEO Growth (from £1,500/mo)</li>
              <li>Paid Media (from £2,000/mo)</li>
              <li>CRO (from £2,500/mo)</li>
              <li>Full Growth Partner (from £4,000/mo)</li>
            </ul>
          </div>

          {/* 3. Hours */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              3. Service Hours & Rollover
            </h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Hours are allocated per calendar month</li>
              <li>Unused hours do not roll over</li>
              <li>Additional hours billed at £125/hour</li>
              <li>Emergency/out-of-hours work billed at 1.5× rate</li>
            </ul>
          </div>

          {/* 4. Response Times */}
          <div>
            <h5 className="text-[2.2rem] font-bold">4. Response Times</h5>
            <div className="mt-[1.5rem] overflow-x-auto">
              <table className="w-full border border-[#E4E3E8] text-left">
                <thead className="bg-[#F7F7FA]">
                  <tr>
                    <th className="border px-[1.5rem] py-[1rem]">
                      Retainer Level
                    </th>
                    <th className="border px-[1.5rem] py-[1rem]">
                      Response Time
                    </th>
                    <th className="border px-[1.5rem] py-[1rem]">
                      Resolution Target
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-[1.5rem] py-[1rem]">
                      Essential Care
                    </td>
                    <td className="border px-[1.5rem] py-[1rem]">24 hours</td>
                    <td className="border px-[1.5rem] py-[1rem]">72 hours</td>
                  </tr>
                  <tr>
                    <td className="border px-[1.5rem] py-[1rem]">
                      Performance Plus
                    </td>
                    <td className="border px-[1.5rem] py-[1rem]">8 hours</td>
                    <td className="border px-[1.5rem] py-[1rem]">48 hours</td>
                  </tr>
                  <tr>
                    <td className="border px-[1.5rem] py-[1rem]">
                      Dedicated Support
                    </td>
                    <td className="border px-[1.5rem] py-[1rem]">2 hours</td>
                    <td className="border px-[1.5rem] py-[1rem]">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-[1.5rem]">
              Response times apply during business hours (9am–6pm GMT,
              Monday–Friday).
            </p>
          </div>

          {/* 5. Billing */}
          <div>
            <h5 className="text-[2.2rem] font-bold">5. Billing & Payment</h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Retainers are billed monthly in advance</li>
              <li>Invoices issued on the 1st of each month</li>
              <li>Payment due within 14 days</li>
              <li>VAT charged at the prevailing UK rate</li>
            </ul>
          </div>

          {/* 6. Minimum Term */}
          <div>
            <h5 className="text-[2.2rem] font-bold">6. Minimum Term</h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Maintenance Retainers: No minimum term</li>
              <li>Growth Retainers: 3-month minimum recommended</li>
            </ul>
          </div>

          {/* 7. Cancellation */}
          <div>
            <h5 className="text-[2.2rem] font-bold">7. Cancellation</h5>
            <p className="mt-[1.5rem]">
              Either party may cancel with 30 days written notice. Services
              continue until the end of the billing period. No refunds for
              partial months.
            </p>
          </div>

          {/* 8. Scope Changes */}
          <div>
            <h5 className="text-[2.2rem] font-bold">8. Scope Changes</h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Quoted as a one-off project, or</li>
              <li>Added via an upgraded retainer</li>
            </ul>
          </div>

          {/* 9. Reporting */}
          <div>
            <h5 className="text-[2.2rem] font-bold">9. Reporting</h5>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Maintenance: Monthly uptime/security report</li>
              <li>Growth: Monthly performance report</li>
              <li>Dedicated: Weekly updates + strategy calls</li>
            </ul>
          </div>

          {/* 10–13 */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              10. Intellectual Property
            </h5>
            <p className="mt-[1.5rem]">
              Work is owned by the Client upon payment, subject to third-party
              licenses and our right to portfolio usage.
            </p>
          </div>

          <div>
            <h5 className="text-[2.2rem] font-bold">11. Confidentiality</h5>
            <p className="mt-[1.5rem]">
              Both parties agree to keep all proprietary and commercial
              information confidential.
            </p>
          </div>

          <div>
            <h5 className="text-[2.2rem] font-bold">12. Liability</h5>
            <p className="mt-[1.5rem]">
              Liability is limited to fees paid in the 3 months preceding any
              claim.
            </p>
          </div>

          <div>
            <h5 className="text-[2.2rem] font-bold">13. Governing Law</h5>
            <p className="mt-[1.5rem]">
              This Agreement is governed by the laws of England and Wales.
            </p>
          </div>

          {/* CTA */}
          <div>
            <h5 className="text-[2.2rem] font-bold">Ready to Get Started?</h5>
            <p className="mt-[1.5rem]">
              Discuss your needs with our team and find the right retainer
              package for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetainerAgreementPage;
