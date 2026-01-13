"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import WorkCardImg1 from "@/assets/images/cards/work-card-img-1.png";
import WorkCardImg2 from "@/assets/images/cards/work-card-img-2.png";
import WorkCardImg3 from "@/assets/images/cards/work-card-img-3.png";
import Image from "next/image";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CASESTUDIES_CARD } from "@/contants";

const Work = () => {
  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-[3rem] xl:flex-row xl:items-end">
            <div className="flex w-[30rem] flex-col items-center text-center md:w-[58.5rem] xl:items-start xl:text-left">
              <div>
                <SectionLabel text="Our Work" textColor="#EE8D00" />
              </div>

              <div className="mt-[5px] mb-[14px]">
                <SectionTitle text="Digital Done Right." />
              </div>

              <div>
                <SectionDescription text="We've crafted websites and brands that blend design, development, and strategy into measurable success." />
              </div>
            </div>

            <div>
              <PrimaryButton
                text="View All Projects"
                textColor="#FFFFFF"
                href=""
                bGcolor="#FF37B3"
              />
            </div>
          </div>

          <div className="mt-[7.4rem] hidden w-full gap-[4.1rem] xl:flex">
            <div className="w-[79.1rem]">
              <Link href="" className="flex flex-col gap-[3.9rem]">
                <div className="flex h-[55.1rem] w-full overflow-hidden rounded-[1rem]">
                  <Image
                    src={WorkCardImg1}
                    alt="Card Image"
                    width={801}
                    height={551}
                  />
                </div>

                <div className="flex w-full flex-col">
                  <ul className="flex items-center gap-[1.2rem]">
                    {["NON-PROFIT", "STRATEGY", "UX DESIGN"].map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="inline-flex h-[2.8rem] items-center justify-center rounded-[20rem] bg-[#F2F1F4] px-[12px] text-center text-[1.4rem] leading-[2.4rem] font-bold text-[#312749]"
                        >
                          {item}
                        </li>
                      ),
                    )}
                  </ul>

                  <hr className="my-[2.7rem] w-full border-t border-black/20" />

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start text-left">
                      <h4 className="text-[3.4rem] leading-[4.8rem] font-bold tracking-[-0.02em] text-[#312749]">
                        Casabotanica
                      </h4>

                      <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                        Global Fundraising Platform
                      </span>
                    </div>

                    <i className="inline-flex size-[6rem] items-center justify-center rounded-full bg-[#FFD799]">
                      <TiltArrowIcon />
                    </i>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex w-[36.3rem] flex-col gap-[5.7rem]">
              <Link href="" className="flex w-full flex-col gap-[3rem]">
                <div className="flex h-[24.2rem] w-full overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={WorkCardImg2}
                    alt="Card Image"
                    width={363}
                    height={242}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start text-left">
                    <h4 className="text-[3.4rem] leading-[4.8rem] font-bold tracking-[-0.02em] text-[#312749]">
                      Ndifo Safari
                    </h4>

                    <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                      LMS Migration & Rebrand
                    </span>
                  </div>

                  <i className="inline-flex size-[6rem] items-center justify-center rounded-full bg-[#58937F]">
                    <TiltArrowIcon color="#ffffff" />
                  </i>
                </div>
              </Link>

              <Link href="" className="flex w-full flex-col gap-[3rem]">
                <div className="flex h-[24.2rem] w-full overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={WorkCardImg3}
                    alt="Card Image"
                    width={363}
                    height={242}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start text-left">
                    <h4 className="text-[3.4rem] leading-[4.8rem] font-bold tracking-[-0.02em] text-[#312749]">
                      Smokey Carter
                    </h4>

                    <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                      LMS Migration & Rebrand
                    </span>
                  </div>

                  <i className="inline-flex size-[6rem] items-center justify-center rounded-full bg-[#FA5D27]">
                    <TiltArrowIcon color="#ffffff" />
                  </i>
                </div>
              </Link>
            </div>
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
              {CASESTUDIES_CARD.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  className="!flex !h-auto !justify-center pb-[5rem]"
                >
                  <Link
                    href=""
                    className="flex h-full w-[27.5rem] flex-col gap-[2.2rem]"
                  >
                    <div className="flex h-[18.3rem] w-full overflow-hidden rounded-[1.1rem]">
                      <Image
                        src={item.img}
                        alt="Card Image"
                        width={275}
                        height={183}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-start text-left">
                        <h4 className="text-[2.5rem] leading-[3.6rem] font-bold tracking-[-0.02em] text-[#312749]">
                          {item.title}
                        </h4>

                        <span className="text-[1.4rem] leading-[1.9rem] font-semibold text-[#625C70]">
                          {item.excerpt}
                        </span>
                      </div>

                      <i
                        style={{
                          backgroundColor: item.iconBg,
                        }}
                        className="inline-flex size-[4.6rem] items-center justify-center rounded-full"
                      >
                        <TiltArrowIcon color={item.iconColor} />
                      </i>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Work;
