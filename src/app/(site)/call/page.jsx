import Contact from "@/components/sections/contact/Contact";
import CallHero from "@/components/sections/hero/CallHero";

const CallPage = () => {
  return (
    <>
      <CallHero />
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};

export default CallPage;
