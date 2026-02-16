import Cta3 from "@/components/sections/cta/Cta3";
import LegalHero from "@/components/sections/hero/LegalHero";
import Policies from "@/components/sections/policies/Policies";
import Reference from "@/components/sections/reference/Reference";
import Resources from "@/components/sections/resources/Resources";

const LegalPage = () => {
  return (
    <>
      <LegalHero />
      <Resources />
      <Policies />
      {/* <section className="overflow-hidden px-[2rem] pt-[5rem] xl:px-[0rem] xl:pt-[10rem]">
        <Cta3 />
      </section>
      <Reference /> */}
    </>
  );
};

export default LegalPage;
