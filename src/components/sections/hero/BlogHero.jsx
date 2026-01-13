import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";
import BlogHeroBg from "@/assets/images/backgrounds/blog-hero-bg.png";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import TimelineIcon from "@/assets/icons/ui/timeline-icon.svg";
import HomeHeroLogoShape1 from "@/assets/svgs/home-hero-logo-shape-1.svg";
import HomeHeroLogoShape2 from "@/assets/svgs/home-hero-logo-shape-2.svg";
import Link from "next/link";

const BlogHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[10rem] pb-[5rem] md:pt-[19.2rem] xl:px-[0rem] xl:pb-[10rem]">
        {/*Background Element*/}
        <div className="absolute top-[5.8px] left-[12px] z-[2] h-[18.4rem] w-[9.1rem] rotate-[25deg] opacity-40">
          <Image
            src={HomeHeroLogoShape1}
            alt="Logo Shape"
            width={91}
            height={184}
          />
        </div>

        <div className="absolute top-[27rem] right-[8rem] z-[2] h-[18.4rem] w-[9.1rem] rotate-[33deg] opacity-60">
          <Image
            src={HomeHeroLogoShape2}
            alt="Logo Shape"
            width={91}
            height={184}
          />
        </div>

        <div className="container">
          <div className="flex flex-col items-center text-center">
            <SectionLabel text="Thinking & Research" textColor="#FF37B3" />

            <h1 className="mt-[1.4rem] mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8.5rem]">
              Insights for the{" "}
              <span className="bg-gradient-pink-blue bg-clip-text text-transparent">
                digital age.
              </span>
            </h1>

            <div>
              <SectionDescription
                text="Deep dives into strategy, design, and technology. No fluff, just
              actionable advice for digital leaders."
                textColor="#625C70"
              />
            </div>
          </div>

          <div
            style={{
              boxShadow: "0px 12px 40px 0px #00000014",
            }}
            className="relative mt-[5rem] h-[45rem] w-full overflow-hidden rounded-[3rem] md:mt-[6rem] md:h-[51.5rem]"
          >
            {/*Background Image*/}
            <Image
              src={BlogHeroBg}
              alt="Background Image"
              fill
              priority
              className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
            />

            <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center p-[2rem] text-center md:p-[5rem] xl:items-start xl:text-left">
              <div className="flex items-center gap-[1.2rem]">
                <span className="inline-flex h-[2.8rem] items-center justify-center rounded-[20rem] bg-[#FF37B3] px-[1.2rem] text-center text-[1.1rem] leading-[2.4rem] font-bold tracking-normal text-white md:text-[1.4rem]">
                  STRATEGY
                </span>

                <div className="inline-flex items-center justify-center gap-[6px] text-center">
                  <i className="inline-flex size-[1.4rem] items-center justify-center">
                    <Image
                      src={TimelineIcon}
                      width={14}
                      height={14}
                      alt="Icon"
                    />
                  </i>

                  <span className="text-[1.1rem] leading-[2.4rem] font-bold tracking-normal text-white md:text-[1.4rem]">
                    5 MIN READ
                  </span>
                </div>
              </div>

              <div className="mt-[2rem] max-w-[55.7rem] md:mt-[4rem]">
                <SectionTitle
                  text="Why 'Template' is a Dirty Word in Enterprise Web Design"
                  textColor="#FFFFFF"
                />
              </div>

              <p className="mt-[2rem] mb-[4rem] max-w-[50.8rem] text-[1.6rem] leading-[2.2rem] font-medium tracking-normal text-white md:mb-[6rem] md:text-[1.8rem] md:leading-[2.8rem]">
                Templates are fast, but they don&apos;t scale. Here&apos;s why
                custom builds are the only viable path for growth-focused
                brands.
              </p>

              <Link
                href=""
                style={{
                  color: "#FF37B3",
                }}
                className="inline-flex items-center gap-[.8rem] text-[1.4rem] leading-[1.4rem] font-semibold tracking-normal md:text-[1.6rem]"
              >
                <span>Read Article</span>{" "}
                <i>
                  <RightArrowIcon color="#FF37B3" />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHero;
