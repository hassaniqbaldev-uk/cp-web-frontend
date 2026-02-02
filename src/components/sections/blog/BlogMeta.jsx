import CalendarIcon from "@/components/icons/CalendarIcon";
import TimelineIcon from "@/components/icons/TimelineIcon";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@/assets/icons/social/facebook-dark-icon.svg";
import InstagramIcon from "@/assets/icons/social/instagram-dark-icon.svg";
import LinkedinIcon from "@/assets/icons/social/linkedin-dark-icon.svg";

const BlogMeta = () => {
  return (
    <>
      <section className="px-[2rem] pt-[5rem] xl:px-[0rem] xl:pt-[28.6rem]">
        <div className="container flex flex-col items-start justify-between gap-[4rem] border-b border-[#E6E6E6] pb-[5rem] md:items-center xl:flex-row xl:pb-[5.6rem]">
          <div className="flex flex-wrap items-center gap-[2.4rem]">
            <div className="flex items-center gap-[1.6rem]">
              <div className="size-[5rem] overflow-hidden rounded-full bg-amber-800 md:size-[6.2rem]"></div>

              <div className="flex flex-col items-start gap-[.6rem] text-left">
                <h5 className="text-[2rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.4rem] md:leading-[2.4rem]">
                  Adam Smith
                </h5>

                <span className="text-[1.6rem] leading-[1.6rem] font-normal tracking-normal text-[#625C70]">
                  Co-Founder
                </span>
              </div>
            </div>

            <div className="hidden h-[6.2rem] w-[.1rem] bg-[#E6E6E6] md:block" />

            <div className="flex items-center gap-[1.6rem]">
              <div className="inline-flex size-[5rem] items-center justify-center overflow-hidden rounded-full bg-[#FF37B3] md:size-[6.2rem]">
                <CalendarIcon width="20" height="23" />
              </div>

              <div className="flex flex-col items-start gap-[.6rem] text-left">
                <h5 className="text-[2rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.4rem] md:leading-[2.4rem]">
                  Date
                </h5>

                <span className="text-[1.6rem] leading-[1.6rem] font-normal tracking-normal text-[#625C70]">
                  Nov 28, 2024
                </span>
              </div>
            </div>

            <div className="hidden h-[6.2rem] w-[.1rem] bg-[#E6E6E6] md:block" />

            <div className="flex items-center gap-[1.6rem]">
              <div className="inline-flex size-[5rem] items-center justify-center overflow-hidden rounded-full bg-[#44B276] md:size-[6.2rem]">
                <TimelineIcon height="23" width="23" color="#ffffff" />
              </div>

              <div className="flex flex-col items-start gap-[.6rem] text-left">
                <h5 className="text-[2rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.4rem] md:leading-[2.4rem]">
                  Time
                </h5>

                <span className="text-[1.6rem] leading-[1.6rem] font-normal tracking-normal text-[#625C70]">
                  8 Min Read
                </span>
              </div>
            </div>
          </div>

          <ul className="flex items-center gap-[8px]">
            <li>
              <Link
                href="https://www.facebook.com/CPAgencyUK"
                className="inline-flex size-[5rem] items-center justify-center rounded-full bg-black/15 md:size-[5.7rem]"
              >
                <Image
                  src={FacebookIcon}
                  width={34}
                  height={34}
                  alt="Icon"
                  className="size-[2.5rem] md:size-[3.4rem]"
                />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/cpagencyuk/"
                className="inline-flex size-[5rem] items-center justify-center rounded-full bg-black/15 md:size-[5.7rem]"
              >
                <Image
                  src={InstagramIcon}
                  width={34}
                  height={34}
                  alt="Icon"
                  className="size-[2.5rem] md:size-[3.4rem]"
                />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/company/creativepixels/"
                className="inline-flex size-[5rem] items-center justify-center rounded-full bg-black/15 md:size-[5.7rem]"
              >
                <Image
                  src={LinkedinIcon}
                  width={34}
                  height={34}
                  alt="Icon"
                  className="size-[2.5rem] md:size-[3.4rem]"
                />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default BlogMeta;
