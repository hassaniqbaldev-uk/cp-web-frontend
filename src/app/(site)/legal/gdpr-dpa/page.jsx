import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GraphicDesignIcon from "@/assets/icons/ui/graphic-design-icon.svg";

const GdprDpaPage = () => {
  return (
    <div className="px-[2rem] pt-[20rem] pb-[10rem] xl:px-[0rem]">
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
        <div className="mt-[3rem] flex items-center gap-[3rem]">
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
              style={{ backgroundColor: "#0073F8" }}
            />
          </div>

          <div>
            <h4 className="text-[3.6rem] leading-[4rem] font-bold tracking-[-0.9px] text-[#312749]">
              GDPR Compliance
            </h4>

            <span className="text-[1.6rem] leading-[2.4rem] text-[#312749]">
              Last updated: January 2026
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-[5rem] max-w-[90rem] space-y-[4rem] text-[1.6rem] leading-[2.8rem] text-[#312749]">
          <p>
            CreativePixels Ltd. is committed to protecting the privacy and
            security of personal data in compliance with the UK General Data
            Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          {/* Rights */}
          <div>
            <h5 className="text-[2.2rem] font-bold">Your Rights Under GDPR</h5>
            <p className="mt-[1.5rem]">
              Under the UK GDPR, you have the following rights regarding your
              personal data:
            </p>

            <ul className="mt-[1.5rem] list-disc pl-[2rem]">
              <li>
                <strong>Right of Access:</strong> Request a copy of the personal
                data we hold about you (response within one month).
              </li>
              <li>
                <strong>Right to Rectification:</strong> Request correction of
                inaccurate or incomplete data.
              </li>
              <li>
                <strong>Right to Erasure:</strong> Request deletion of your data
                where it is no longer necessary.
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> Request limits on
                how your data is processed.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Receive your data in
                a structured, machine-readable format.
              </li>
              <li>
                <strong>Right to Object:</strong> Object to processing,
                including direct marketing.
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> Withdraw consent at
                any time where applicable.
              </li>
            </ul>
          </div>

          {/* Data Protection */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              How We Protect Your Data
            </h5>
            <p className="mt-[1.5rem]">
              We implement appropriate technical and organisational measures,
              including:
            </p>

            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls and authentication measures</li>
              <li>Staff training on data protection</li>
              <li>Incident response procedures</li>
              <li>Regular backups and disaster recovery plans</li>
            </ul>
          </div>

          {/* Processing */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              Data Processing Activities
            </h5>
            <p className="mt-[1.5rem]">
              We act as a <strong>Data Controller</strong> for personal data we
              collect directly, including:
            </p>

            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Contact form submissions</li>
              <li>Newsletter subscriptions</li>
              <li>Client project information</li>
              <li>Website analytics data</li>
            </ul>

            <p className="mt-[1.5rem]">
              When processing data on behalf of clients, we act as a{" "}
              <strong>Data Processor</strong> and follow Data Processing
              Agreements.
            </p>
          </div>

          {/* Transfers */}
          <div>
            <h5 className="text-[2.2rem] font-bold">
              International Data Transfers
            </h5>
            <p className="mt-[1.5rem]">
              Where data is transferred outside the UK or EEA, we ensure
              safeguards such as:
            </p>

            <ul className="mt-[1rem] list-disc pl-[2rem]">
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>UK Adequacy Regulations</li>
              <li>Binding Corporate Rules (where applicable)</li>
            </ul>
          </div>

          {/* Exercising Rights */}
          <div>
            <h5 className="text-[2.2rem] font-bold">Exercising Your Rights</h5>
            <p className="mt-[1.5rem]">
              To exercise your rights, contact our Data Protection Officer:
            </p>

            <p className="mt-[1.5rem] font-semibold">Data Protection Officer</p>
            <p>CreativePixels Ltd.</p>
            <p>
              Email:{" "}
              <a
                href="mailto:dpo@creativepixels.co.uk"
                className="underline hover:text-[#0073F8]"
              >
                dpo@creativepixels.co.uk
              </a>
            </p>
            <p>Address: Manchester, United Kingdom</p>

            <p className="mt-[1.5rem]">
              We respond within one month. In complex cases, this may be
              extended by two months.
            </p>
          </div>

          {/* Complaints */}
          <div>
            <h5 className="text-[2.2rem] font-bold">Making a Complaint</h5>
            <p className="mt-[1.5rem]">
              If you believe your data protection rights have been violated, you
              may contact the Information Commissioner&apos;s Office (ICO):
            </p>

            <p className="mt-[1.5rem] font-semibold">
              Information Commissioner&apos;s Office
            </p>
            <p>
              Website:{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#0073F8]"
              >
                ico.org.uk
              </a>
            </p>
            <p>Helpline: 0303 123 1113</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GdprDpaPage;
