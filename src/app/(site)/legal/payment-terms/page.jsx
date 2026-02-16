import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const PaymentTermsPage = () => {
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
            Payment Terms
          </h1>
          <span className="mt-[0.5rem] block text-[1.6rem] text-[#312749]">
            Last updated: January 2026
          </span>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          {/* 1 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              1. Accepted Payment Methods
            </h2>

            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>
                <strong>Bank Transfer (BACS):</strong> Preferred for invoices
                over £1,000. Details provided on invoice.
              </li>
              <li>
                <strong>Credit / Debit Card:</strong> Visa, Mastercard, and
                American Express accepted via Stripe.
              </li>
              <li>
                <strong>Direct Debit:</strong> Available for retainer clients
                via GoCardless.
              </li>
              <li>
                <strong>Financing:</strong> 0% interest spread payments via our
                financing partner.
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              2. Project Payment Schedules
            </h2>

            <p className="mt-[1.5rem] font-semibold">
              Standard Projects (Under £10,000)
            </p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>40% Deposit: Due upon acceptance</li>
              <li>30% Design Milestone: Due upon design approval</li>
              <li>30% Final Payment: Due before website launch</li>
            </ul>

            <p className="mt-[2rem] font-semibold">Large Projects (£10,000+)</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>30% Deposit: Due upon acceptance</li>
              <li>25% Discovery Complete: Due after wireframes approval</li>
              <li>
                25% Development Midpoint: Due at 50% development completion
              </li>
              <li>20% Final Payment: Due before website launch</li>
            </ul>

            <p className="mt-[2rem] font-semibold">Flexible Payment Plans</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>3-month spread: Deposit + 2 equal monthly payments</li>
              <li>
                6-month spread: Deposit + 5 monthly payments (approval required)
              </li>
              <li>
                12-month financing: Available via 0% interest partner (credit
                approval required)
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">3. Retainer Billing</h2>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Retainers are billed monthly in advance on the 1st</li>
              <li>First month is pro-rated from start date</li>
              <li>Automatic payment setup is required</li>
              <li>30 days notice required for cancellation or downgrade</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">4. Invoice Terms</h2>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Invoices payable within 14 days</li>
              <li>Issued electronically via email</li>
              <li>VAT charged at prevailing UK rate (currently 20%)</li>
              <li>All invoices issued in GBP</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">5. Late Payment</h2>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Interest charged at 8% above Bank of England base rate</li>
              <li>Work may pause after 7 days overdue</li>
              <li>Staging access suspended after 14 days</li>
              <li>Debt recovery costs may apply</li>
            </ul>

            <p className="mt-[1.5rem]">
              If you anticipate payment difficulties, please contact us
              immediately to discuss alternatives.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">6. Refund Policy</h2>

            <p className="mt-[1.5rem] font-semibold">Deposits</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Non-refundable once work has commenced</li>
              <li>Full refund if cancelled before work begins</li>
              <li>
                100% satisfaction guarantee on initial design (within 14 days)
              </li>
            </ul>

            <p className="mt-[2rem] font-semibold">Milestone Payments</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Non-refundable once milestone is completed</li>
              <li>Pro-rata refund if we cannot complete the project</li>
            </ul>

            <p className="mt-[2rem] font-semibold">Retainers</p>
            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>No refunds for partial months</li>
              <li>Unused hours do not roll over</li>
              <li>Cancellation effective at billing period end</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">7. Disputed Invoices</h2>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Notify us within 7 days of invoice date</li>
              <li>Provide full dispute details in writing</li>
              <li>Undisputed amounts remain payable</li>
              <li>We respond within 5 business days</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              8. Currency & International Payments
            </h2>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>All invoices issued in GBP</li>
              <li>International payments via SWIFT or card</li>
              <li>Exchange rate differences are client responsibility</li>
              <li>International transfer fees paid by sender</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">9. Credit Terms</h2>
            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>Available to established clients</li>
              <li>Public sector and charities</li>
              <li>Enterprise contracts (subject to credit checks)</li>
            </ul>
            <p className="mt-[1.5rem]">
              Credit must be approved in writing before project commencement.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              10. Changes to These Terms
            </h2>
            <p className="mt-[1.5rem]">
              We reserve the right to update these payment terms. Changes apply
              to new projects and retainer renewals only.
            </p>
          </section>

          {/* CTA */}
          <section>
            <h2 className="text-[2.2rem] font-bold">
              Questions About Payment?
            </h2>
            <p className="mt-[1.5rem]">
              Our finance team is happy to help with billing, financing, or
              payment options.
            </p>
            <p className="mt-[1rem] font-semibold">
              Contact us →{" "}
              <Link href="mailto:accounts@creativepixels.co.uk">
                accounts@creativepixels.co.uk
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PaymentTermsPage;
