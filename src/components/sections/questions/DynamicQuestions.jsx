"use client";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const DynamicQuestions = ({ service }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col justify-center gap-[5rem] xl:flex-row xl:items-start xl:gap-[12.4rem]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center text-center xl:w-[33rem] xl:items-start xl:text-left"
            >
              <motion.div variants={itemVariants}>
                <SectionTitle text="Common Questions" textColor="#312749" />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-[1rem] mb-[3rem]"
              >
                <SectionDescription
                  text="Everything you need to know about partnering with us."
                  textColor="#625C70"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <PrimaryButton
                  text="Have More Questions?"
                  textColor="#FFFFFF"
                  bGcolor="#FF37B3"
                  href="/contact"
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1"
            >
              <Accordion type="single" collapsible>
                {service.map((item, idx) => (
                  <motion.div variants={itemVariants} key={idx}>
                    <AccordionItem
                      value={`item-${idx}`}
                      className={`border-b-2 border-[#F1F1F3] py-[1.5rem] ${idx === 0 ? "pt-[0rem]" : ""}`}
                    >
                      <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] text-left text-[1.6rem] leading-[2.4rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.2rem] md:leading-[4rem]">
                        <span>{item.question}</span>{" "}
                        <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                          <ChevronDownIcon />
                        </i>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="pt-[1rem]">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}

                {/* <hr className="mx-auto my-[1.5rem] w-full border-t-2 border-[#F1F1F3]" /> */}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicQuestions;
