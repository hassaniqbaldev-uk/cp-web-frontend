import Image from "next/image";
import ServicesLogoShape from "@/assets/svgs/services-logo-shape.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";

export const expertiseData = [
  {
    step: "1",
    title: "Human-Led Strategy",
    description:
      "No faceless account managers. You get direct access to Hassan and senior strategists who understand your business goals first, technology second.",
  },
  {
    step: "2",
    title: "No Templates",
    description:
      "We don't churn out cookie-cutter sites. Every solution is custom-architected to solve your specific problems and scale with your growth.",
  },
  {
    step: "3",
    title: "Outcome Focused",
    description:
      "We don't just deliver 'code'. We deliver leads, sales, and efficiency. If it doesn't move the needle for your business, we don't build it.",
  },
];

export const themeColors = {
  primary: {
    color: "#EE7621",
  },
  secondary: {
    color: "#FF37B3",
  },
  accent: {
    color: "#3078FF",
  },
};

export const themeColorList = Object.values(themeColors);

const Expertise2 = () => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  return (
    <>
      <section className="relative overflow-hidden bg-[#F0F6FF] py-[10rem]">
        {/*Background Element*/}
        <div className="pointer-events-none absolute top-[7.8rem] right-[0rem] h-[17.7rem] w-[12.9rem] rotate-[-34deg] select-none">
          <Image
            src={ServicesLogoShape}
            alt="Services Logo Shape"
            width={129}
            height={177}
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5px] text-center">
            <div>
              <SectionLabel text="Our Expertise" textColor="#EE8D00" />
            </div>

            <div>
              <SectionTitle
                text="What makes us different?"
                textColor="#312749"
              />
            </div>

            <div>
              <SectionDescription
                text="We're not a factory. We're a strategic partner invested in your long-term success."
                textColor="#625C70"
              />
            </div>
          </div>

          <div className="mt-[5rem] grid w-full grid-cols-3 gap-[3rem]">
            {expertiseData.map((item, idx) => {
              const theme = getThemeColor(idx);

              return (
                <div
                  key={idx}
                  style={{
                    background: theme.color,
                  }}
                  className="flex h-[29rem] w-full flex-col items-start justify-center rounded-[3rem] px-[3rem] text-left"
                >
                  <div
                    style={{
                      boxShadow: "5px 5px 44px 0px #FFFFFFCC",
                      color: theme.color,
                    }}
                    className="inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] bg-white text-center text-[2.6rem] font-semibold tracking-normal"
                  >
                    0{item.step}
                  </div>

                  <h4 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h4>

                  <p className="text-[1.6rem] leading-[2.4rem] tracking-normal text-white">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise2;
