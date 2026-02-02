import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@/assets/icons/social/facebook-dark-icon.svg";
import InstagramIcon from "@/assets/icons/social/instagram-dark-icon.svg";
import LinkedinIcon from "@/assets/icons/social/linkedin-dark-icon.svg";

const BlogShare = () => {
  return (
    <>
      <section className="px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[7.4rem]">
        <div className="container flex flex-col items-start justify-between gap-[4rem] border-t border-[#E6E6E6] pt-[3.5rem] md:flex-row">
          <div className="flex flex-col items-start gap-[1.8rem]">
            <h5 className="text-[2rem] leading-[3.2rem] font-normal tracking-normal text-[#625C70]">
              Share this post:
            </h5>

            <ul className="flex items-center gap-[8px]">
              <li>
                <Link
                  href=""
                  className="inline-flex size-[3.4rem] items-center justify-center rounded-full bg-black/15"
                >
                  <Image src={FacebookIcon} width={20} height={20} alt="Icon" />
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="inline-flex size-[3.4rem] items-center justify-center rounded-full bg-black/15"
                >
                  <Image
                    src={InstagramIcon}
                    width={20}
                    height={20}
                    alt="Icon"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="inline-flex size-[3.4rem] items-center justify-center rounded-full bg-black/15"
                >
                  <Image src={LinkedinIcon} width={20} height={20} alt="Icon" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-[33rem]">
            <ul className="flex w-full flex-wrap gap-[1rem]">
              {["TAG 01", "TAG 02", "TAG 03", "TAG 04", "TAG 05", "TAG 06"].map(
                (item, idx) => (
                  <li
                    key={idx}
                    className="inline-flex h-[2.8rem] items-center justify-center rounded-[20rem] border border-[#D2D2D2] px-[1.2rem] text-center text-[1.4rem] leading-[2.4rem] font-bold tracking-normal text-[#263238] uppercase transition-all duration-200 hover:border-[#FF37B3] hover:bg-[#FF37B3] hover:text-white"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogShare;
