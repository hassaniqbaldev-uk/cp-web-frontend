"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import StarIcon from "@/components/icons/StarIcon";
import TestimonialAvatar1 from "@/assets/icons/ui/testimonial-avatar-1.svg";
import TestimonialAvatar2 from "@/assets/icons/ui/testimonial-avatar-2.svg";
import TestimonialAvatar3 from "@/assets/icons/ui/testimonial-avatar-3.svg";
import TestimonialAvatar4 from "@/assets/icons/ui/testimonial-avatar-4.svg";
import TestimonialCardImg from "@/assets/images/cards/testimonial-card-img.png";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div>
            <SectionLabel text="Testimonials" textColor="#3078FF" />
          </div>

          <div className="mt-[10px] mb-[18px] md:mt-[5px] md:mb-[14px]">
            <SectionTitle text="Built with Pixels. Backed by people." />
          </div>

          <div className="flex items-center justify-center gap-[1.2rem]">
            <ul className="flex items-center gap-[3px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index}>
                  <StarIcon color="#FF37B3" className="size-[1.5rem]" />
                </li>
              ))}
            </ul>

            <span className="text-[1.4rem] leading-[3.2rem] font-bold text-[#625C70] md:text-[2rem]">
              4.9/5 from 47+ Clients
            </span>
          </div>
        </div>

        <div className="my-[5rem] hidden grid-cols-3 gap-[1.3rem] xl:grid">
          <div className="row-span-2 flex h-full w-full flex-col items-center gap-[2rem] rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] pt-[3rem] pb-[4.1rem] backdrop-blur-[10px]">
            <div className="flex overflow-hidden rounded-[1.2rem]">
              <Image
                src={TestimonialCardImg}
                alt="Card Image"
                width={319}
                height={319}
              />
            </div>

            <div className="flex flex-col gap-[4rem]">
              <div className="flex flex-col items-start gap-[1.9rem] text-left">
                <ul className="flex items-center gap-[3px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <StarIcon color="#FFBF00" height="20" width="20" />
                    </li>
                  ))}
                </ul>

                <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                  &quot;CreativePixels&apos; expertise on our programme
                  materials was invaluable. Together, we raised over £478,000 to
                  protect children in danger.&quot;
                </p>
              </div>

              <div className="flex items-center gap-[1.2rem]">
                <div className="flex overflow-hidden rounded-full">
                  <Image
                    src={TestimonialAvatar1}
                    alt="Avatar Image"
                    width={56}
                    height={56}
                  />
                </div>

                <div className="flex flex-col items-start text-left">
                  <h6 className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                    Special Events Coordinator
                  </h6>

                  <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                    Coordinator, UNICEF UK
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[31.5rem] w-full flex-col justify-between rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] py-[4.1rem] backdrop-blur-[10px]">
            <div className="flex flex-col items-start gap-[1.9rem] text-left">
              <ul className="flex items-center gap-[3px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index}>
                    <StarIcon color="#FFBF00" height="20" width="20" />
                  </li>
                ))}
              </ul>

              <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                &quot;They delivered under intense time pressure—responsive,
                creative, and excellent finished artwork within 48 hours.&quot;
              </p>
            </div>

            <div className="flex items-center gap-[1.2rem]">
              <div className="flex overflow-hidden rounded-full">
                <Image
                  src={TestimonialAvatar2}
                  alt="Avatar Image"
                  width={56}
                  height={56}
                />
              </div>

              <div className="flex flex-col items-start text-left">
                <h6 className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                  Clare Huddlestone
                </h6>

                <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                  Marketing Director, Herbert Smith
                </span>
              </div>
            </div>
          </div>

          <div className="flex h-[31.5rem] w-full flex-col justify-between rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] py-[4.1rem] backdrop-blur-[10px]">
            <div className="flex flex-col items-start gap-[1.9rem] text-left">
              <ul className="flex items-center gap-[3px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index}>
                    <StarIcon color="#FFBF00" height="20" width="20" />
                  </li>
                ))}
              </ul>

              <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                &quot;My new site is significantly faster and easier to
                navigate. We&apos;ve seen a 30% increase in inquiries since
                launch.&quot;
              </p>
            </div>

            <div className="flex items-center gap-[1.2rem]">
              <div className="flex overflow-hidden rounded-full">
                <Image
                  src={TestimonialAvatar3}
                  alt="Avatar Image"
                  width={56}
                  height={56}
                />
              </div>

              <div className="flex flex-col items-start text-left">
                <h6 className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                  Simon Hobbs
                </h6>

                <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                  Owner, Precise Print
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex h-[31.5rem] w-full flex-col justify-between rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] py-[4.1rem] backdrop-blur-[10px]">
            <div className="flex flex-col items-start gap-[1.9rem] text-left">
              <ul className="flex items-center gap-[3px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index}>
                    <StarIcon color="#FFBF00" height="20" width="20" />
                  </li>
                ))}
              </ul>

              <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                &quot;The ROI has been incredible. The team really understood
                our sector and delivered a solution that converts. The ROI has
                been incredible. The team really understood our sector and
                delivered a solution that converts. The ROI has been incredible.
                The team really understood our sector and delivered a solution
                that converts.&quot;
              </p>
            </div>

            <div className="flex items-center gap-[1.2rem]">
              <div className="flex overflow-hidden rounded-full">
                <Image
                  src={TestimonialAvatar4}
                  alt="Avatar Image"
                  width={56}
                  height={56}
                />
              </div>

              <div className="flex flex-col items-start text-left">
                <h6 className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                  James Wilson
                </h6>

                <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                  CEO, TechFlow
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive */}
        <div className="my-[3rem] block w-full xl:hidden">
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
            {Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide
                key={index}
                className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]"
              >
                <div className="flex w-full flex-col justify-between gap-[1.5rem] rounded-[2rem] border border-[#E4E3E8] bg-white px-[1.5rem] py-[2.3rem] backdrop-blur-[10px]">
                  <div className="flex flex-col items-start gap-[1.5rem] text-left">
                    <ul className="flex items-center gap-[2px]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <li key={index}>
                          <StarIcon color="#FFBF00" height="14" width="14" />
                        </li>
                      ))}
                    </ul>

                    <p className="text-[1.4rem] leading-[2.1rem] font-medium tracking-normal text-[#625C70]">
                      &quot;My new site is significantly faster and easier to
                      navigate. We&apos;ve seen a 30% increase in inquiries
                      since launch.&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-[1rem]">
                    <div className="flex overflow-hidden rounded-full">
                      <Image
                        src={TestimonialAvatar3}
                        alt="Avatar Image"
                        width={40}
                        height={40}
                      />
                    </div>

                    <div className="flex flex-col items-start text-left">
                      <h6 className="text-[1.2rem] leading-[1.8rem] font-semibold tracking-normal text-[#312749]">
                        Simon Hobbs
                      </h6>

                      <span className="text-[1.1rem] leading-[1.7rem] font-medium tracking-normal text-[#625C70]">
                        Owner, Precise Print
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center">
          <PrimaryButton
            text="See More Reviews & Results"
            textColor="#FFFFFF"
            href=""
            bGcolor="#312749"
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
