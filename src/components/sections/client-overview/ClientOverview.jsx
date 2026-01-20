import Image from "next/image";
import AlertLogo from "@/assets/icons/ui/alert-icon.svg";
import { urlFor } from "@/sanity/image";

const ClientOverview = ({ caseStudy }) => {
  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-start justify-center gap-[4rem] md:gap-[5rem] xl:flex-row xl:gap-[10.9rem]">
            <div className="flex w-full flex-col items-start gap-[2rem] text-left md:gap-[3rem] xl:w-[61rem]">
              <h2 className="text-[2.3rem] leading-[3rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8rem]">
                {caseStudy.clientOverview.title}
              </h2>

              <p className="text-[1.6rem] leading-[2.6rem] font-medium tracking-normal text-[#625C70] md:text-[2.2rem] md:leading-[4rem]">
                {caseStudy.clientOverview.description}
              </p>
            </div>

            <div className="flex w-full flex-col gap-[1.8rem] xl:w-[48rem]">
              <div className="flex w-full flex-col gap-[7px] rounded-[1.5rem] border border-[#ED910C] p-[2.3rem]">
                <h5 className="text-[1.8rem] leading-[3rem] font-bold tracking-normal text-[#ED910C] md:text-[2.2rem] md:leading-[3.7rem]">
                  Industry
                </h5>

                <ul className="flex flex-wrap gap-[5px]">
                  {caseStudy.industries.map((item, idx) => (
                    <li
                      key={item._id}
                      className="inline-flex items-center gap-[5px] text-[1.8rem] leading-[3rem] font-medium tracking-normal text-[#625C70] md:text-[2.2rem] md:leading-[3.7rem]"
                    >
                      {item.title}
                      {idx < caseStudy.services.length - 1 && " / "}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col gap-[7px] rounded-[1.5rem] border border-[#FF37B3] p-[2.3rem]">
                <h5 className="text-[1.8rem] leading-[3rem] font-bold tracking-normal text-[#FF37B3] md:text-[2.2rem] md:leading-[3.7rem]">
                  Services
                </h5>

                <ul className="flex flex-wrap gap-[5px]">
                  {caseStudy.services.map((item, idx) => (
                    <li
                      key={item._id}
                      className="inline-flex items-center gap-[5px] text-[1.8rem] leading-[3rem] font-medium tracking-normal text-[#625C70] md:text-[2.2rem] md:leading-[3.7rem]"
                    >
                      {item.title}
                      {idx < caseStudy.services.length - 1 && " / "}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col gap-[7px] rounded-[1.5rem] border border-[#3078FF] p-[2.3rem]">
                <h5 className="text-[1.8rem] leading-[3rem] font-bold tracking-normal text-[#3078FF] md:text-[2.2rem] md:leading-[3.7rem]">
                  Tools Used
                </h5>

                <ul className="flex items-center gap-[2rem] md:gap-[3rem]">
                  {caseStudy.tools.map((item) => (
                    <li key={item._id}>
                      <img
                        src={urlFor(item.toolImage).url()}
                        alt={item.altText}
                        className="h-[2.6rem]"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-[3rem] mb-[5rem] flex w-full flex-col items-start justify-start gap-[3.5rem] rounded-[1.5rem] bg-[#f14a58]/15 px-[3rem] py-[2.5rem] md:mt-[4rem] md:mb-[10rem] md:flex-row md:items-center md:px-[4.5rem]">
            <div className="relative size-[6.3rem] min-w-[6.3rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                <Image src={AlertLogo} alt="Icon" width={32} height={32} />
              </div>

              <div
                className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                style={{ backgroundColor: "#F14A58" }}
              />
            </div>

            <p className="text-[1.8rem] leading-[3rem] font-bold tracking-normal text-[#625C70] md:text-[2.2rem] md:leading-[3.7rem]">
              All visuals used in these case studies are provided by our clients
              or their partners. All such images remain the property of their
              respective owners and may be subject to copyright.
            </p>
          </div>

          <div className="flex w-full items-center justify-center overflow-hidden rounded-[1rem] md:rounded-[3rem]">
            <Image
              src={urlFor(caseStudy.clientOverview.cardImage)
                .width(1200)
                .height(600)
                .url()}
              alt={caseStudy.clientOverview.title}
              width={1200}
              height={600}
              unoptimized
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientOverview;
