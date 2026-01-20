import Cta from "@/components/sections/cta/Cta";
import Estimate from "@/components/sections/estimate/Estimate";
import AboutHero from "@/components/sections/hero/AboutHero";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Values from "@/components/sections/values/Values";

const AboutPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <AboutHero />
        <Estimate />
      </div>
      <Values />
      <section className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ed910c]/10 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
    </>
  );
};
export default AboutPage;
