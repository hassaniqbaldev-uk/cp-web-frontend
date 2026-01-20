import Link from "next/link";
import RightArrowIcon from "@/components/icons/RightArrowIcon";

const PrimaryButton = ({
  href = "",
  text = "",
  bGcolor = "#070707",
  textColor = "#ffffff",
  target = "",
}) => {
  return (
    <>
      <Link
        href={href}
        target={target}
        className="inline-flex items-center justify-center"
      >
        <span
          style={{ background: bGcolor, color: textColor }}
          className="inline-flex h-[4rem] items-center justify-center rounded-[7rem] px-[2.4rem] py-[1rem] text-center text-[1.4rem] font-semibold tracking-normal md:h-[5rem] md:px-[3rem] md:text-[1.8rem]"
        >
          {text}
        </span>

        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-[-3px] md:mx-[-2px]"
        >
          <path
            d="M1.5752 0C2.62647 1.81667 4.58995 3.04004 6.83984 3.04004C9.08953 3.03987 11.0523 1.81654 12.1035 0H13.6787V13.6787H12.1035C11.0523 11.8621 9.08956 10.6388 6.83984 10.6387C4.58992 10.6387 2.62646 11.862 1.5752 13.6787H0V0H1.5752Z"
            fill={bGcolor}
          />
        </svg>

        <i
          style={{ background: bGcolor }}
          className="inline-flex size-[4rem] items-center justify-center rounded-full md:size-[5rem]"
        >
          <RightArrowIcon color={textColor} width="14" height="14" />
        </i>
      </Link>
    </>
  );
};
export default PrimaryButton;
