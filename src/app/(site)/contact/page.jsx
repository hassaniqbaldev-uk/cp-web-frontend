import Contact from "@/components/sections/contact/Contact";
import ContactHero from "@/components/sections/hero/ContactHero";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};

export default ContactPage;
