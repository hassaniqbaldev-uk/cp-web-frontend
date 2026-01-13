import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { OPPORTUNITIES_DATA } from "@/contants";
import Image from "next/image";
import BriefcaseIcon from "@/assets/icons/ui/breifcase-icon.svg";
import LocationIcon from "@/assets/icons/ui/location-icon.svg";
import TimelineIcon from "@/components/icons/TimelineIcon";

const Opportunities = () => {
  return (
    <>
      <section className="pb-[10rem]">
        <div className="container">
          <div className="flex flex-col items-start">
            <SectionLabel text="Opportunities" textColor="#EE8D00" />

            <div className="mt-[5px] mb-[30px]">
              <SectionTitle text="Open Positions" textColor="#312749" />
            </div>

            <div className="flex w-full flex-col gap-[1.2rem]">
              {OPPORTUNITIES_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-[1.6rem] border border-[#E4E3E8] bg-[#FCFCFD] px-[4rem] py-[3.5rem]"
                >
                  <div className="flex flex-col items-start gap-[1rem] text-left">
                    <h4 className="text-[2.6rem] font-semibold tracking-[-0.02em] text-[#312749]">
                      {item.title}
                    </h4>

                    <ul className="flex items-center gap-[2.4rem]">
                      <li className="inline-flex items-center gap-[8px]">
                        <i>
                          <Image
                            src={BriefcaseIcon}
                            width={18}
                            height={16}
                            alt="Icon"
                          />
                        </i>

                        <span className="text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
                          {item.department}
                        </span>
                      </li>

                      <li className="inline-flex items-center gap-[8px]">
                        <i>
                          <TimelineIcon
                            color="#625C70"
                            width="18"
                            height="18"
                          />
                        </i>

                        <span className="text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
                          {item.timing}
                        </span>
                      </li>

                      <li className="inline-flex items-center gap-[8px]">
                        <i>
                          <Image
                            src={LocationIcon}
                            width={14}
                            height={16}
                            alt="Icon"
                          />
                        </i>

                        <span className="text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
                          {item.location}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <PrimaryButton
                      text="Apply Now"
                      textColor="#FFFFFF"
                      bGcolor="#FF37B3"
                      href={item.href}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Opportunities;
