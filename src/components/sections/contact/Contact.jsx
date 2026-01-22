import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import ClockIcon from "@/assets/icons/ui/clock-icon.svg";
import CheckmarkIcon2 from "@/assets/icons/ui/checkmark-icon-2.svg";
import RefreshIcon from "@/assets/icons/ui/refresh-icon.svg";
import SendIcon2 from "@/assets/icons/ui/send-icon-2.svg";
import ContactJoinBox from "@/assets/svgs/contact-join-box.svg";
import ContactAssistantImg from "@/assets/images/cards/contact-assistant-img.png";
import Image from "next/image";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center gap-[4rem] xl:flex-row xl:items-start">
          <div className="flex w-[30rem] flex-col items-center text-center md:w-[56.3rem] xl:items-start xl:text-left">
            <div>
              <SectionLabel text="Book a call" textColor="#FF37B3" />
            </div>

            <div className="mt-[1rem] mb-[2rem]">
              <SectionTitle text="Unlock your brand's hidden potential." />
            </div>

            <div>
              <SectionDescription text="Stop guessing. Let's build a data-driven roadmap to scale your digital presence with a custom strategy." />
            </div>

            <div className="mt-[3.2rem] mb-[2.2rem] flex w-full flex-col items-start gap-[1.2rem] rounded-[2rem] border border-[#3078FF] bg-white px-[3rem] py-[3.5rem] text-left md:mt-[4rem] md:mb-[2rem] md:gap-[2.5rem]">
              <div className="flex items-start gap-[1.2rem] md:items-center">
                <i>
                  <Image src={ClockIcon} alt="Icon" width={24} height={24} />
                </i>

                <h4 className="text-[1.8rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[2.2rem]">
                  Included in your free strategy:
                </h4>
              </div>

              <ul className="grid grid-cols-1 gap-x-[5rem] gap-y-[.6rem] md:grid-cols-2 md:gap-y-[1.2rem]">
                {[
                  "Custom Roadmap",
                  "Competitor Intel",
                  "Competitor Intel",
                  "Growth Opportunities",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-[1.2rem]">
                    <i className="inline-flex size-[2.4rem] items-center justify-center rounded-full bg-[#44b276]/20">
                      <Image
                        src={CheckmarkIcon2}
                        alt="Icon"
                        width={14}
                        height={14}
                      />
                    </i>

                    <span className="text-[1.6rem] font-semibold tracking-normal text-[#625C70]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex overflow-hidden">
              <Image
                src={ContactJoinBox}
                width={282}
                height={44}
                alt="Image Box"
              />
            </div>
          </div>

          <div
            style={{
              boxShadow: "17px 21px 34px 0px #6D6D6D1A",
            }}
            className="flex hidden h-[52.7rem] w-full flex-col overflow-hidden rounded-[2rem] border border-[#EE7621] bg-white md:w-[61.8rem]"
          >
            {/* Header */}
            <div className="flex h-[7.7rem] w-full items-center justify-between border-b border-[#B0ADB7] px-[2rem] py-[1.6rem]">
              <div className="flex items-center gap-[5px]">
                <div className="relative inline-flex size-[4.6rem] items-center justify-center rounded-full bg-amber-200 text-[1rem]">
                  <div className="absolute right-[2px] bottom-[2px] size-[1rem] rounded-full bg-[#50C461] outline-2 outline-white" />
                  Avatar
                </div>

                <div className="flex flex-col items-start text-left">
                  <h5 className="text-[2.2rem] leading-[2.5rem] font-semibold tracking-[-0.02em] text-[#312749]">
                    Pixel AI
                  </h5>

                  <div className="inline-flex items-center gap-[3px]">
                    <div className="size-[5px] rounded-full bg-[#50C461]" />

                    <span className="text-[1.6rem] leading-[2rem] font-normal tracking-normal text-[#625c70]/70">
                      Replies instantly
                    </span>
                  </div>
                </div>
              </div>

              <button className="inline-flex size-[2rem] cursor-pointer items-center justify-center">
                <i>
                  <Image src={RefreshIcon} width={20} height={20} alt="Icon" />
                </i>
              </button>
            </div>
            {/* Main */}
            <div className="flex flex-1 items-center justify-center overflow-scroll">
              <Image
                src={ContactAssistantImg}
                width={594}
                height={329}
                alt="Image"
              />
            </div>
            {/* Footer */}
            <div className="flex h-[9.1rem] w-full items-center justify-center border-t border-[#B0ADB7] p-[2rem]">
              <fieldset className="relative h-full w-full overflow-hidden rounded-[1.2rem] border border-[#B0ADB7] bg-white">
                <input
                  type="text"
                  className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                  placeholder="Type your answer..."
                />

                <button className="absolute top-1/2 right-0 inline-flex h-full w-[5rem] -translate-y-1/2 cursor-pointer items-center justify-center bg-white">
                  <i>
                    <Image src={SendIcon2} width={24} height={24} alt="Icon" />
                  </i>
                </button>
              </fieldset>
            </div>
          </div>

          {/* New Form */}
          <div
            style={{
              boxShadow: "13px 13px 40px 0px #00000014",
            }}
            className="flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border-t-8 border-[#FF37B3] bg-white p-[3.8rem] md:w-[59.5rem]"
          >
            {/* Header */}
            <div className="flex w-full flex-col gap-[1rem] border-b border-[#D6D6D6] pb-[2.5rem]">
              <h4 className="text-[2.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
                Hello, how can we help? 👋
              </h4>
            </div>
            {/* Main */}
            <div className="mt-[2.5rem] mb-[3rem] flex w-full flex-col items-start gap-[2.5rem]">
              <div className="grid w-full grid-cols-1 gap-[1.5rem] md:grid-cols-2">
                <fieldset className="w-full">
                  <label
                    htmlFor="name"
                    className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
                  >
                    My name is <span className="text-[#F14A58]">*</span>
                  </label>

                  <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                    <input
                      type="text"
                      className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                      placeholder="Jane Doe"
                    />
                  </div>
                </fieldset>

                <fieldset className="w-full">
                  <label
                    htmlFor="help"
                    className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
                  >
                    I need a help with <span className="text-[#F14A58]">*</span>
                  </label>

                  <Select>
                    <SelectTrigger className="!h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB] px-[1.5rem] text-[1.6rem] font-normal tracking-normal text-[#625C70]">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent align="center">
                      <SelectItem value="Design & Branding">
                        Design & Branding
                      </SelectItem>
                      <SelectItem value="Website Development">
                        Website Development
                      </SelectItem>
                      <SelectItem value="Maintenance & Growth">
                        Maintenance & Growth
                      </SelectItem>
                      <SelectItem value="Something else">
                        Something else
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </fieldset>
              </div>

              <fieldset className="w-full">
                <label
                  htmlFor="email"
                  className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
                >
                  Here is my email <span className="text-[#F14A58]">*</span>
                </label>

                <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                  <input
                    type="text"
                    className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                    placeholder="What do you want to fix?"
                  />
                </div>
              </fieldset>

              <fieldset className="w-full">
                <label
                  htmlFor="message"
                  className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
                >
                  And message <span className="text-[#F14A58]">*</span>{" "}
                </label>

                <div className="w-full overflow-hidden rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                  <textarea
                    type="text"
                    className="h-[12.8rem] w-full resize-none p-[1.5rem] outline-0"
                    placeholder="Enter your message"
                  />
                </div>
              </fieldset>
            </div>
            {/* Footer */}
            <div className="flex w-full flex-col items-center justify-center gap-[2.3rem]">
              <button className="inline-flex w-full cursor-pointer items-center justify-center">
                <span className="inline-flex h-[4rem] w-full items-center justify-center rounded-[7rem] bg-[#FF37B3] px-[3rem] py-[1rem] text-center text-[1.4rem] font-semibold tracking-normal text-white md:h-[5rem] md:text-[1.8rem]">
                  Send enquiry
                </span>

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-[-3px]"
                >
                  <path
                    d="M1.5752 0C2.62647 1.81667 4.58995 3.04004 6.83984 3.04004C9.08953 3.03987 11.0523 1.81654 12.1035 0H13.6787V13.6787H12.1035C11.0523 11.8621 9.08956 10.6388 6.83984 10.6387C4.58992 10.6387 2.62646 11.862 1.5752 13.6787H0V0H1.5752Z"
                    fill="#FF37B3"
                  />
                </svg>

                <i className="inline-flex size-[4rem] min-w-[4rem] items-center justify-center rounded-full bg-[#FF37B3] md:size-[5rem] md:min-w-[5rem]">
                  <RightArrowIcon
                    color="#ffffff"
                    width="18"
                    height="18"
                    className="size-[1.4rem] md:size-[1.8rem]"
                  />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
