import Contact from "@/components/sections/contact/Contact";
import AuditHero from "@/components/sections/hero/AuditHero";
import Testimonials from "@/components/sections/testimonials/Testimonials";

const AuditPage = () => {
  return (
    <>
      <AuditHero />
      <section className="bg-white px-[2rem] xl:px-[0rem]">
        <Testimonials />
      </section>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};

export default AuditPage;
