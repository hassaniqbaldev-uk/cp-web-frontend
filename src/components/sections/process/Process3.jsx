import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROCESS_3_CARD } from "@/contants";
import Image from "next/image";

const Process3 = () => {
  return (
    <>
      <section className="py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <SectionLabel text="Our Process" textColor="#EE8D00" />
            </div>

            <div className="mt-[5px] mb-[14px]">
              <SectionTitle
                text="How we work with agencies"
                textColor="#312749"
              />
            </div>

            <div>
              <SectionDescription
                text="We adapt to your workflow, not the other way around."
                textColor="#625C70"
              />
            </div>
          </div>

          <div className="mt-[7rem] grid grid-cols-5">
            {PROCESS_3_CARD.map((item, idx) => (
              <div
                key={item.step}
                className="flex flex-col items-center gap-[3.8rem]"
              >
                <div className="relative flex w-full justify-center">
                  <hr className="absolute top-1/2 z-[0] w-full -translate-y-1/2 border-t-2 border-[#F1F1F3]" />

                  <div
                    style={{
                      boxShadow: "0px 12px 30px 0px #0000002E",
                      borderColor: item.color,
                    }}
                    className="relative z-[1] inline-flex size-[4.8rem] items-center justify-center rounded-full border-2 bg-white text-center text-[1.8rem] font-semibold tracking-[-0.02em] text-[#312749]"
                  >
                    0{item.step}
                  </div>
                </div>

                <div className="flex w-[23rem] flex-col items-center text-center">
                  <i
                    style={{
                      background: item.color,
                      boxShadow: item.boxShadow,
                    }}
                    className="inline-flex size-[6.4rem] items-center justify-center rounded-[1.6rem]"
                  >
                    <Image
                      src={item.icon}
                      width={item.iconWidth}
                      height={item.iconHeight}
                      alt="Icon"
                    />
                  </i>

                  <h4 className="mt-[3rem] mb-[2.2rem] text-[1.8rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#312749]">
                    {item.title}
                  </h4>

                  <p className="text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Process3;
