import Image from "next/image";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import { PROCESS_2_CARD } from "@/contants";

const Process2 = () => {
  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="hidden flex-col xl:flex">
            {PROCESS_2_CARD.map((item, idx) => (
              <div
                key={idx}
                style={{ flexDirection: item.flexDirection }}
                className={`relative flex w-full items-center justify-center gap-[16rem] ${idx === 4 ? "pb-[0rem]" : "pb-[10rem]"}`}
              >
                {/* Progress Step */}
                <div className="absolute top-0 left-1/2 size-[4.8rem] -translate-x-1/2 overflow-hidden rounded-full">
                  <div
                    style={{
                      background: item.color,
                    }}
                    className="absolute z-[1] h-full w-full"
                  />

                  <span
                    style={{
                      color: item.color,
                    }}
                    className="absolute top-1/2 left-1/2 z-[2] flex size-[4rem] -translate-1/2 items-center justify-center rounded-full bg-white text-center text-[1.8rem] font-semibold tracking-[-0.02em]"
                  >
                    0{item.step}
                  </span>
                </div>
                {/* Progress Line */}
                <div className="absolute top-0 left-1/2 z-[-1] h-full w-[4px] -translate-x-1/2 bg-[#dfdfdf]/50">
                  <div
                    style={{
                      background: item.color,
                    }}
                    className="h-full w-full"
                  />
                </div>

                <div
                  style={{
                    background: item.cardImageBg,
                  }}
                  className="flex h-[42rem] w-[52rem] items-center justify-center rounded-[1.6rem]"
                >
                  <Image
                    src={item.cardImage}
                    width={item.cardImageWidth}
                    height={item.cardImageHeight}
                    alt="Card Image"
                  />
                </div>

                <div
                  style={{
                    textAlign: item.textAlign,
                    alignItems: item.alignment,
                  }}
                  className="flex w-[52rem] flex-col items-start text-left"
                >
                  <div className="relative size-[6.3rem]">
                    <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                      <i>
                        <Image
                          src={item.icon}
                          alt="Icon"
                          width={30}
                          height={30}
                        />
                      </i>
                    </div>
                    <div
                      style={{
                        background: item.color,
                      }}
                      className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                    />
                  </div>

                  <h3 className="my-[1rem] mt-[2rem] text-[3.4rem] font-bold tracking-[-0.02em] text-[#312749]">
                    {item.title}
                  </h3>

                  <h4
                    style={{
                      color: item.color,
                    }}
                    className="text-[2.2rem] leading-[2.6rem] font-semibold tracking-normal"
                  >
                    {item.subTitle}
                  </h4>

                  <p className="mt-[1.2rem] mb-[2rem] text-[1.8rem] leading-[2.8rem] font-normal tracking-normal text-[#625C70]">
                    {item.description}
                  </p>

                  <div className="flex w-full flex-col gap-[1rem] rounded-[1.6rem] border border-[#E4E3E8] bg-[#FBFAFB] p-[2rem]">
                    <h5 className="text-[1.4rem] leading-[2.4rem] font-bold tracking-normal text-black uppercase">
                      Key Deliverables
                    </h5>

                    <ul
                      style={{
                        placeItems: item.alignment,
                      }}
                      className="grid grid-cols-2"
                    >
                      {item.list.map((item2, idx) => (
                        <li
                          key={idx}
                          style={{
                            flexDirection: item.flexDirection,
                          }}
                          className="inline-flex items-center gap-[1rem]"
                        >
                          <i>
                            <CheckMarkIcon color={item.color} />
                          </i>

                          <span className="text-[1.6rem] leading-[2.8rem] font-medium tracking-normal text-[#312749]">
                            {item2}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Responsive */}
          <div className="flex flex-col px-[5rem] xl:hidden">
            {PROCESS_2_CARD.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex w-full flex-col items-start justify-center gap-[5rem] lg:flex-row lg:items-center ${idx === 4 ? "pb-[0rem]" : "pb-[5rem] lg:pb-[10rem]"}`}
              >
                {/* Progress Step */}
                <div className="absolute top-0 left-[-4rem] size-[4.8rem] -translate-x-1/2 overflow-hidden rounded-full">
                  <div
                    style={{
                      background: item.color,
                    }}
                    className="absolute z-[1] h-full w-full"
                  />

                  <span
                    style={{
                      color: item.color,
                    }}
                    className="absolute top-1/2 left-1/2 z-[2] flex size-[4rem] -translate-1/2 items-center justify-center rounded-full bg-white text-center text-[1.8rem] font-semibold tracking-[-0.02em]"
                  >
                    0{item.step}
                  </span>
                </div>
                {/* Progress Line */}
                <div className="absolute top-0 left-[-4rem] z-[-1] h-full w-[4px] -translate-x-1/2 bg-[#dfdfdf]/50">
                  <div
                    style={{
                      background: item.color,
                    }}
                    className="h-full w-full"
                  />
                </div>

                <div
                  style={{
                    background: item.cardImageBg,
                  }}
                  className="flex h-[23rem] w-full items-center justify-center rounded-[1.6rem] md:h-[42rem] lg:w-[52rem]"
                >
                  <Image
                    src={item.cardImage}
                    width={item.cardImageWidth}
                    height={item.cardImageHeight}
                    alt="Card Image"
                  />
                </div>

                <div className="flex w-full flex-col items-start text-left lg:w-[52rem]">
                  <div className="relative size-[6.3rem]">
                    <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                      <i>
                        <Image
                          src={item.icon}
                          alt="Icon"
                          width={30}
                          height={30}
                        />
                      </i>
                    </div>
                    <div
                      style={{
                        background: item.color,
                      }}
                      className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                    />
                  </div>

                  <h3 className="my-[1rem] mt-[2rem] text-[2rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[3rem]">
                    {item.title}
                  </h3>

                  <h4
                    style={{
                      color: item.color,
                    }}
                    className="text-[1.8rem] leading-[2rem] font-semibold tracking-normal md:text-[2.2rem] md:leading-[2rem]"
                  >
                    {item.subTitle}
                  </h4>

                  <p className="mt-[1.2rem] mb-[2rem] text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70] md:text-[1.6rem] md:leading-[2.8rem]">
                    {item.description}
                  </p>

                  <div className="flex w-full flex-col gap-[1rem] rounded-[1.6rem] border border-[#E4E3E8] bg-[#FBFAFB] p-[2rem]">
                    <h5 className="text-[1.4rem] leading-[2.4rem] font-bold tracking-normal text-black uppercase">
                      Key Deliverables
                    </h5>

                    <ul className="grid grid-cols-1 md:grid-cols-2">
                      {item.list.map((item2, idx) => (
                        <li
                          key={idx}
                          className="inline-flex items-center gap-[1rem]"
                        >
                          <i>
                            <CheckMarkIcon color={item.color} />
                          </i>

                          <span className="text-[1.2rem] leading-[2.4rem] font-medium tracking-normal text-[#312749]">
                            {item2}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Process2;
