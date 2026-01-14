"use client";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import IdeaIcon2 from "@/assets/icons/ui/idea-icon-2.svg";
import CodeScreenIcon from "@/assets/icons/ui/code-screen-icon.svg";
import ConnectIcon from "@/assets/icons/ui/connect-icon.svg";
import GuidelineIcon from "@/assets/icons/ui/guideline-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const steps = [
  {
    id: "01",
    title: "Discovery Workshop",
    description:
      "We facilitate a deep-dive session to uncover your brand's archetype, values, and personality.",
    icon: IdeaIcon2,
  },
  {
    id: "02",
    title: "Concept Development",
    description:
      "Our designers explore multiple visual territories, presenting you with distinct strategic directions.",
    icon: CodeScreenIcon,
  },
  {
    id: "03",
    title: "Refinement & Systems",
    description:
      "We select the strongest direction and build out the full visual language and asset library.",
    icon: ConnectIcon,
  },
  {
    id: "04",
    title: "Guidelines & Handoff",
    description:
      "You receive a comprehensive brand book and all source files, empowering your team to use the brand correctly.",
    icon: GuidelineIcon,
  },
];

export const themeColors = {
  primary: {
    color: "#FF37B3",
    gradient:
      "linear-gradient(180deg, #FF37B3 19.93%, rgba(255, 55, 179, 0) 100%)",
  },
  secondary: {
    color: "#EE7621",
    gradient:
      "linear-gradient(180deg, #EE7621 19.93%, rgba(238, 118, 33, 0) 100%)",
  },
  accent: {
    color: "#3078FF",
    gradient:
      "linear-gradient(180deg, #3078FF 19.93%, rgba(48, 120, 255, 0) 100%)",
  },
  success: {
    color: "#F14A58",
    gradient:
      "linear-gradient(180deg, #F14A58 19.93%, rgba(241, 74, 88, 0) 100%)",
  },
};

export const themeColorList = Object.values(themeColors);

const Methodology = () => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <SectionLabel text="Our Methodology" textColor="#3078FF" />
            </div>

            <div className="mt-[.5rem] mb-[1.4rem]">
              <SectionTitle text="How we deliver results" textColor="#312749" />
            </div>

            <div>
              <SectionDescription
                text="A proven process that minimizes risk and maximizes ROI."
                textColor="#625C70"
              />
            </div>
          </div>

          <div className="mt-[5rem] hidden flex-col gap-[3.5rem] xl:flex">
            {steps.map((step, idx) => {
              const theme = getThemeColor(idx);

              return (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-[2rem] border px-[5rem] py-[3.4rem]"
                  style={{ borderColor: theme.color }}
                >
                  <h3
                    style={{
                      backgroundImage: theme.gradient,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                    }}
                    className="block text-[16rem] leading-[16rem] font-bold tracking-[-0.03em]"
                  >
                    {step.id}
                  </h3>

                  <div className="flex items-center gap-[8rem] text-left">
                    <div className="flex max-w-[60rem] flex-col gap-[1rem]">
                      <h4 className="text-[3.4rem] leading-[4.8rem] font-bold tracking-[-0.02em] text-[#312749]">
                        {step.title}
                      </h4>

                      <p className="text-[2.2rem] leading-[2.8rem] tracking-normal text-[#625C70]">
                        {step.description}
                      </p>
                    </div>

                    <div className="h-[14rem] min-w-[13rem]">
                      <Image
                        src={step.icon}
                        width={130}
                        height={140}
                        alt="Icon"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Responsive */}
          <div className="mt-[5rem] block w-full xl:hidden">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={0}
              breakpoints={{
                767: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
              }}
              className="mySwiper"
            >
              {steps.map((step, idx) => {
                const theme = getThemeColor(idx);

                return (
                  <SwiperSlide
                    key={idx}
                    className="!flex !h-auto !items-center !justify-center px-[1rem] pt-[.5rem] pb-[10rem]"
                  >
                    <div
                      className="flex h-full flex-col items-center justify-between gap-[3rem] rounded-[2rem] border px-[3rem] py-[3.4rem] xl:gap-[0rem] xl:px-[5rem]"
                      style={{ borderColor: theme.color }}
                    >
                      <h3
                        style={{
                          backgroundImage: theme.gradient,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          display: "inline-block",
                        }}
                        className="block text-[13rem] leading-[13rem] font-bold tracking-[-0.03em] xl:text-[16rem] xl:leading-[16rem]"
                      >
                        {step.id}
                      </h3>

                      <div className="flex flex-col items-center gap-[5rem] text-center lg:gap-[8rem]">
                        <div className="flex max-w-[60rem] flex-col gap-[1rem]">
                          <h4 className="text-[2.8rem] leading-[3.5rem] font-bold tracking-[-0.02em] text-[#312749] lg:text-[3.4rem] lg:leading-[4.8rem]">
                            {step.title}
                          </h4>

                          <p className="text-[1.8rem] leading-[2.4rem] tracking-normal text-[#625C70] lg:text-[2.2rem] lg:leading-[2.8rem]">
                            {step.description}
                          </p>
                        </div>

                        <div className="h-[14rem] min-w-[13rem]">
                          <Image
                            src={step.icon}
                            width={130}
                            height={140}
                            alt="Icon"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Methodology;
