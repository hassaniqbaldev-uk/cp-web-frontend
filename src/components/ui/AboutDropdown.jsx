import ChevronDownIcon from "../icons/ChevronDownIcon";

const AboutDropdown = ({ className }) => {
  return (
    <>
      <button
        className={`inline-flex items-start justify-center gap-[.6rem] ${className}`}
      >
        <span>About</span>{" "}
        <i className="relative top-[1rem]">
          <ChevronDownIcon height="6" width="10" />
        </i>
      </button>

      <div className="absolute top-full left-1/2 w-[127.2rem] -translate-x-1/2 pt-[4rem]">
        {/* <div
          style={{
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
            background: "#ffffff",
            height: "2.3rem",
            width: "2.6rem",
          }}
          className="absolute top-[2rem] left-[30rem]"
        /> */}

        {/* <div className="w-full rounded-[3rem] bg-white px-[3.5rem] py-[4rem]"></div> */}
      </div>
    </>
  );
};

export default AboutDropdown;
