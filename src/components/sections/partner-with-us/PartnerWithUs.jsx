import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import PartnerWithUsBg from "@/assets/images/backgrounds/partner-with-us-bg.png";
import PartnerWithUsCardImg from "@/assets/images/cards/partner-with-us-card-img.png";
import PenIcon from "@/assets/icons/ui/pen-icon.svg";
import XIcon from "@/assets/icons/ui/x-icon.svg";
import CpIcon from "@/assets/icons/ui/cp-icon.svg";
import Image from "next/image";
import CheckMarkIcon3 from "@/components/icons/CheckMarkIcon3";

const PartnerWithUs = () => {
  return (
    <>
      <section className="relative overflow-hidden py-[10rem]">
        {/*Background Image*/}
        <Image
          src={PartnerWithUsBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <SectionLabel text="partner with us" textColor="#3078FF" />
            </div>

            <div className="mt-[5px] mb-[14px]">
              <SectionTitle text="Why partner with us?" textColor="#312749" />
            </div>

            <div>
              <SectionDescription
                text="Compare the difference between hiring in-house vs partnering with CreativePixels."
                textColor="#625C70"
              />
            </div>
          </div>

          <div className="mt-[5rem] grid w-full grid-cols-2 gap-[3.3rem]">
            <div className="flex w-full flex-col items-start rounded-[3rem] border border-[#FF37B3] bg-white p-[4rem] text-left">
              <div className="relative size-[6.3rem]">
                <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                  <i>
                    <Image src={PenIcon} alt="Icon" width={35} height={35} />
                  </i>
                </div>
                <div
                  style={{
                    background: "#FF37B3",
                  }}
                  className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                />
              </div>

              <h4 className="mt-[3rem] mb-[1.5rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-[#312749]">
                Traditional Hiring
              </h4>

              <ul>
                {[
                  "High fixed salary costs & overheads",
                  "Limited skill set of single employees",
                  "Management & HR headaches",
                  "Capacity bottlenecks during busy periods",
                  "Paying for idle time during quiet periods",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-[1.6rem]">
                    <i>
                      <Image src={XIcon} alt="Icon" width={12} height={12} />
                    </i>

                    <span className="text-[1.8rem] leading-[4rem] font-normal tracking-normal text-[#625C70]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-full overflow-hidden rounded-[3rem] p-[4rem] text-left">
              {/*Background Image*/}
              <Image
                src={PartnerWithUsCardImg}
                alt="Background Image"
                fill
                priority
                className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
              />

              <div className="relative z-[10] flex flex-col items-start text-left">
                <div
                  style={{
                    boxShadow: "5px 5px 44px 0px #FF37B3CC",
                  }}
                  className="relative inline-flex size-[6.3rem] items-center justify-center rounded-[1.5rem] bg-[#FF37B3]"
                >
                  <i>
                    <Image src={CpIcon} alt="Icon" width={35} height={35} />
                  </i>
                </div>

                <h4 className="mt-[3rem] mb-[1.5rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                  CreativePixels Partner
                </h4>

                <ul>
                  {[
                    "Pay only for work delivered",
                    "Full team access (Dev, Design, SEO, Strategy)",
                    "Zero management or HR required",
                    "Infinite scalability on demand",
                    "White label - we are YOUR team",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-[1.6rem]">
                      <i>
                        <CheckMarkIcon3 fillColor="#ffffff" />
                      </i>

                      <span className="text-[1.8rem] leading-[4rem] font-normal tracking-normal text-white">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerWithUs;
