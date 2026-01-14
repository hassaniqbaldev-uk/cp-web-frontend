import CardImg1 from "@/assets/images/cards/project-showcase-card-img-1.png";
import CardImg2 from "@/assets/images/cards/project-showcase-card-img-2.png";
import CardImg3 from "@/assets/images/cards/project-showcase-card-img-3.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import CopyCheckIcon from "@/assets/icons/ui/copy-check-icon.svg";
import CheckMarkIcon3 from "@/components/icons/CheckMarkIcon3";
import XIcon from "@/components/icons/XIcon";
import CancelIcon from "@/assets/icons/ui/cancel-icon.svg";
const ProjectShowcase = () => {
  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div
          className="w-full"
          style={{
            maskImage:
              "linear-gradient(to right,rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%,rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <Marquee speed={50} pauseOnHover gradient={false}>
            <div className="mx-[1rem] flex w-[30rem] flex-col items-start gap-[2rem] md:mx-[1.5rem] md:w-[58.5rem]">
              <div className="h-[22rem] w-full overflow-hidden rounded-[2rem] md:h-[39rem]">
                <Image
                  src={CardImg1}
                  width={585}
                  height={390}
                  alt="Card Image"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex w-full flex-col items-start border-b border-black/20 pb-[1.4rem] text-left">
                <h4 className="text-[2.8rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[3.4rem] md:leading-[4.8rem]">
                  Ivy & Duke
                </h4>

                <span className="text-[1.6rem] leading-[2.6rem] font-bold tracking-normal text-[#625C70]">
                  LMS Migration & Rebrand
                </span>
              </div>
            </div>

            <div className="mx-[1rem] flex w-[30rem] flex-col items-start gap-[2rem] md:mx-[1.5rem] md:w-[58.5rem]">
              <div className="h-[22rem] w-full overflow-hidden rounded-[2rem] md:h-[39rem]">
                <Image
                  src={CardImg2}
                  width={585}
                  height={390}
                  alt="Card Image"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex w-full flex-col items-start border-b border-black/20 pb-[1.4rem] text-left">
                <h4 className="text-[2.8rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[3.4rem] md:leading-[4.8rem]">
                  Tappizza
                </h4>

                <span className="text-[1.6rem] leading-[2.6rem] font-bold tracking-normal text-[#625C70]">
                  Logo Design/Branding
                </span>
              </div>
            </div>

            <div className="mx-[1rem] flex w-[30rem] flex-col items-start gap-[2rem] md:mx-[1.5rem] md:w-[58.5rem]">
              <div className="h-[22rem] w-full overflow-hidden rounded-[2rem] md:h-[39rem]">
                <Image
                  src={CardImg3}
                  width={585}
                  height={390}
                  alt="Card Image"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex w-full flex-col items-start border-b border-black/20 pb-[1.4rem] text-left">
                <h4 className="text-[2.8rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[3.4rem] md:leading-[4.8rem]">
                  Virtue Property
                </h4>

                <span className="text-[1.6rem] leading-[2.6rem] font-bold tracking-normal text-[#625C70]">
                  Flyer Design
                </span>
              </div>
            </div>

            <div className="mx-[1rem] flex w-[30rem] flex-col items-start gap-[2rem] md:mx-[1.5rem] md:w-[58.5rem]">
              <div className="h-[22rem] w-full overflow-hidden rounded-[2rem] md:h-[39rem]">
                <Image
                  src={CardImg1}
                  width={585}
                  height={390}
                  alt="Card Image"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex w-full flex-col items-start border-b border-black/20 pb-[1.4rem] text-left">
                <h4 className="text-[2.8rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[3.4rem] md:leading-[4.8rem]">
                  Ivy & Duke
                </h4>

                <span className="text-[1.6rem] leading-[2.6rem] font-bold tracking-normal text-[#625C70]">
                  LMS Migration & Rebrand
                </span>
              </div>
            </div>

            <div className="mx-[1rem] flex w-[30rem] flex-col items-start gap-[2rem] md:mx-[1.5rem] md:w-[58.5rem]">
              <div className="h-[22rem] w-full overflow-hidden rounded-[2rem] md:h-[39rem]">
                <Image
                  src={CardImg2}
                  width={585}
                  height={390}
                  alt="Card Image"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex w-full flex-col items-start border-b border-black/20 pb-[1.4rem] text-left">
                <h4 className="text-[2.8rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[3.4rem] md:leading-[4.8rem]">
                  Tappizza
                </h4>

                <span className="text-[1.6rem] leading-[2.6rem] font-bold tracking-normal text-[#625C70]">
                  Logo Design/Branding
                </span>
              </div>
            </div>

            <div className="mx-[1rem] flex w-[30rem] flex-col items-start gap-[2rem] md:mx-[1.5rem] md:w-[58.5rem]">
              <div className="h-[22rem] w-full overflow-hidden rounded-[2rem] md:h-[39rem]">
                <Image
                  src={CardImg3}
                  width={585}
                  height={390}
                  alt="Card Image"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex w-full flex-col items-start border-b border-black/20 pb-[1.4rem] text-left">
                <h4 className="text-[2.8rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[3.4rem] md:leading-[4.8rem]">
                  Virtue Property
                </h4>

                <span className="text-[1.6rem] leading-[2.6rem] font-bold tracking-normal text-[#625C70]">
                  Flyer Design
                </span>
              </div>
            </div>
          </Marquee>
        </div>

        {/* <div className="container mt-[10rem]">
          <div className="flex gap-[3rem]">
            <div className="flex w-full flex-col items-start rounded-[3rem] bg-[#f0f6ff]/50 p-[2rem] text-left md:p-[4rem]">
              <div className="relative size-[6.3rem]">
                <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                  <i>
                    <Image
                      src={CopyCheckIcon}
                      alt="Icon"
                      width={35}
                      height={35}
                    />
                  </i>
                </div>
                <div
                  style={{
                    background: "#3078FF",
                  }}
                  className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                />
              </div>

              <h4 className="mt-[3rem] mb-[1.5rem] text-[2.2rem] font-semibold tracking-[-0.02em] text-[#3078FF] md:text-[2.6rem]">
                Perfect for you if...
              </h4>

              <ul className="flex flex-col gap-[1rem]">
                {[
                  "Startups needing a professional face for investors",
                  "Established companies looking to refresh or pivot",
                  "Brands needing English & Urdu/Arabic bilingual identity",
                  "Companies merging or acquiring new entities",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-[1.6rem]">
                    <i className="inline-flex size-[2.4rem] min-w-[2.4rem] items-center justify-center rounded-[.6rem] bg-[#3078ff]/10">
                      <CheckMarkIcon3 fillColor="#3078FF" />
                    </i>

                    <span className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-black md:text-[1.8rem]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full flex-col items-start rounded-[3rem] bg-[#FEEDEE]/50 p-[2rem] text-left md:p-[4rem]">
              <div className="relative size-[6.3rem]">
                <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                  <i>
                    <Image src={CancelIcon} alt="Icon" width={35} height={35} />
                  </i>
                </div>
                <div
                  style={{
                    background: "#F14A58",
                  }}
                  className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                />
              </div>

              <h4 className="mt-[3rem] mb-[1.5rem] text-[2.2rem] font-semibold tracking-[-0.02em] text-[#F14A58] md:text-[2.6rem]">
                Not a fit if...
              </h4>

              <ul className="flex flex-col gap-[1rem]">
                {[
                  "Anyone wanting a $50 Fiverr logo",
                  "Companies who think branding is just 'colors'",
                  "Projects with a 24-hour turnaround time",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-[1.6rem]">
                    <i className="inline-flex size-[2.4rem] min-w-[2.4rem] items-center justify-center rounded-[.6rem] bg-[#F14A58]/10">
                      <XIcon fillColor="#F14A58" />
                    </i>

                    <span className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-black md:text-[1.8rem]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default ProjectShowcase;
