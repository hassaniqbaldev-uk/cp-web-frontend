"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/home-hero-bg.png";
import ContactHeroLogoShape1 from "@/assets/svgs/contact-hero-logo-shape-1.svg";
import HomeHeroLogoShape1 from "@/assets/svgs/home-hero-logo-shape-1.svg";
import HomeHeroLogoShape2 from "@/assets/svgs/home-hero-logo-shape-2.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import PhoneIcon from "@/assets/icons/ui/phone-icon.svg";
import EmailIcon from "@/assets/icons/ui/email-icon.svg";
import TimelineIcon from "@/assets/icons/ui/timeline-icon.svg";
import Link from "next/link";
import SectionDescription from "@/components/ui/SectionDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ContactHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[10rem] pb-[5rem] md:pt-[15.7rem] xl:px-[0rem] xl:pb-[8.3rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="absolute top-[5.8px] left-[12px] z-[2] h-[18.4rem] w-[9.1rem] rotate-[25deg]">
          <Image
            src={HomeHeroLogoShape1}
            alt="Logo Shape"
            width={91}
            height={184}
          />
        </div>

        <div className="absolute top-[12rem] right-[2rem] z-[2] h-[18.4rem] w-[9.1rem] rotate-[33deg] md:right-[8rem]">
          <Image
            src={HomeHeroLogoShape2}
            alt="Logo Shape"
            width={91}
            height={184}
          />
        </div>

        <div className="absolute bottom-[8rem] left-[-6rem] z-[2] h-[13.2rem] w-[14.2rem] rotate-[33deg]">
          <Image
            src={ContactHeroLogoShape1}
            alt="Logo Shape"
            width={142}
            height={132}
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center gap-[4rem]">
            <div className="flex flex-col items-center text-center">
              <SectionLabel text="Contact" textColor="#FF37B3" />

              <h1 className="mt-[1.4rem] mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
                Let&apos;s build something
                <span className="bg-gradient-pink-white block bg-clip-text text-transparent">
                  extraordinary.
                </span>
              </h1>

              <div className="max-w-[62.8rem]">
                <SectionDescription
                  text="Ready to start? Choose how you'd like to connect."
                  textColor="#FFFFFF"
                />
              </div>
            </div>

            <div className="hidden grid-cols-3 gap-[3.4rem] xl:grid">
              <div className="contact-hero-card">
                <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center text-center">
                  <i
                    style={{
                      boxShadow: "5px 5px 44px 0px #3078FFCC",
                    }}
                    className="inline-flex size-[6.5rem] min-w-max items-center justify-center rounded-[1.5rem] bg-[#3078FF]"
                  >
                    <Image
                      src={TimelineIcon}
                      width={34}
                      height={34}
                      alt="Icon"
                    />
                  </i>

                  <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                    Book Strategy Call
                  </h4>

                  <p className="mt-[1rem] mb-[2rem] text-[1.6rem] font-semibold tracking-normal text-white">
                    Fastest way to get answers.{" "}
                  </p>

                  <div className="w-full px-[3rem]">
                    <Link
                      href=""
                      className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[3rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#3078FF] hover:bg-[#3078FF]"
                    >
                      15-min chat with Hassan
                    </Link>
                  </div>
                </div>
              </div>

              <div className="contact-hero-card">
                <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center text-center">
                  <i
                    style={{
                      boxShadow: "5px 5px 44px 0px #ED910CCC",
                    }}
                    className="inline-flex size-[6.5rem] min-w-max items-center justify-center rounded-[1.5rem] bg-[#ED910C]"
                  >
                    <Image src={EmailIcon} width={34} height={34} alt="Icon" />
                  </i>

                  <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                    Have a Brief?
                  </h4>

                  <p className="mt-[1rem] mb-[2rem] text-[1.6rem] font-semibold tracking-normal text-white">
                    Email your brief and we will get back to you.
                  </p>

                  <div className="w-full px-[3rem]">
                    <Link
                      href=""
                      className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[3rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#ED910C] hover:bg-[#ED910C]"
                    >
                      hello@cp.agency
                    </Link>
                  </div>
                </div>
              </div>

              <div className="contact-hero-card">
                <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center text-center">
                  <i
                    style={{
                      boxShadow: "5px 5px 44px 0px #FF37B3CC",
                    }}
                    className="inline-flex size-[6.5rem] min-w-max items-center justify-center rounded-[1.5rem] bg-[#FF37B3]"
                  >
                    <Image src={PhoneIcon} width={34} height={34} alt="Icon" />
                  </i>

                  <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                    Direct Call
                  </h4>

                  <p className="mt-[1rem] mb-[2rem] text-[1.6rem] font-semibold tracking-normal text-white">
                    Prefer to call?
                  </p>

                  <div className="w-full px-[3rem]">
                    <Link
                      href=""
                      className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[3rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#FF37B3] hover:bg-[#FF37B3]"
                    >
                      0161 820 2667
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive */}
            <div className="block w-full xl:hidden">
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
                <SwiperSlide className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[5rem]">
                  <div className="contact-hero-card h-[33rem] w-full">
                    <div className="absolute inset-0 z-[10] flex flex-col items-center justify-between p-[2rem] text-center">
                      <div>
                        <i
                          style={{
                            boxShadow: "5px 5px 44px 0px #3078FFCC",
                          }}
                          className="inline-flex size-[6.5rem] min-w-max items-center justify-center rounded-[1.5rem] bg-[#3078FF]"
                        >
                          <Image
                            src={TimelineIcon}
                            width={34}
                            height={34}
                            alt="Icon"
                          />
                        </i>

                        <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                          Book Strategy Call
                        </h4>

                        <p className="mt-[1rem] mb-[2rem] text-[1.6rem] font-semibold tracking-normal text-white">
                          Fastest way to get answers.{" "}
                        </p>
                      </div>

                      <div className="w-full">
                        <Link
                          href=""
                          className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[1rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#3078FF] hover:bg-[#3078FF]"
                        >
                          15-min chat with Hassan
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[5rem]">
                  <div className="contact-hero-card h-[33rem] w-full">
                    <div className="absolute inset-0 z-[10] flex flex-col items-center justify-between p-[2rem] text-center">
                      <div>
                        <i
                          style={{
                            boxShadow: "5px 5px 44px 0px #ED910CCC",
                          }}
                          className="inline-flex size-[6.5rem] min-w-max items-center justify-center rounded-[1.5rem] bg-[#ED910C]"
                        >
                          <Image
                            src={EmailIcon}
                            width={34}
                            height={34}
                            alt="Icon"
                          />
                        </i>

                        <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                          Have a Brief?
                        </h4>

                        <p className="mt-[1rem] mb-[2rem] text-[1.6rem] font-semibold tracking-normal text-white">
                          Email your brief and we will get back to you.
                        </p>
                      </div>

                      <div className="w-full">
                        <Link
                          href=""
                          className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[1rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#ED910C] hover:bg-[#ED910C]"
                        >
                          hello@cp.agency
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[5rem]">
                  <div className="contact-hero-card h-[33rem] w-full">
                    <div className="absolute inset-0 z-[10] flex flex-col items-center justify-between p-[2rem] text-center">
                      <div>
                        <i
                          style={{
                            boxShadow: "5px 5px 44px 0px #FF37B3CC",
                          }}
                          className="inline-flex size-[6.5rem] min-w-max items-center justify-center rounded-[1.5rem] bg-[#FF37B3]"
                        >
                          <Image
                            src={PhoneIcon}
                            width={34}
                            height={34}
                            alt="Icon"
                          />
                        </i>

                        <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                          Direct Call
                        </h4>

                        <p className="mt-[1rem] mb-[2rem] text-[1.6rem] font-semibold tracking-normal text-white">
                          Prefer to call?
                        </p>
                      </div>

                      <div className="w-full">
                        <Link
                          href=""
                          className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[1rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#FF37B3] hover:bg-[#FF37B3]"
                        >
                          0161 820 2667
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHero;
