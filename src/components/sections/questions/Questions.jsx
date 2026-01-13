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

export const questionsData = [
  {
    question: "Are you okay with signing NDAs?",
    answer:
      "Yes. We are happy to sign NDAs and ensure complete confidentiality for all client projects.",
  },
  {
    question: "What is your typical working process?",
    answer:
      "Absolutely. All work is delivered under your brand name and email domain with no external attribution.",
  },
  {
    question: "Do you only work with WordPress?",
    answer:
      "We collaborate via Slack, email, or your preferred project management tool for seamless communication.",
  },
  {
    question:
      "Can you work directly with our clients using our own email addresses?",
    answer:
      "Turnaround times vary by scope, but we typically deliver 2x faster than in-house teams.",
  },
  {
    question: "Can you help with agency growth strategy?",
    answer:
      "Yes. You can scale capacity instantly based on client demand without long-term commitments.",
  },
  {
    question: "Do you work with agencies outside the UK?",
    answer:
      "Yes. We offer long-term maintenance and support to ensure your projects remain up to date.",
  },
  {
    question: "How quickly can you start on a new project?",
    answer:
      "Yes. We offer long-term maintenance and support to ensure your projects remain up to date.",
  },
];

const Questions = () => {
  return (
    <>
      <section className="py-[10rem]">
        <div className="container">
          <div className="flex items-start justify-center gap-[12.4rem]">
            <div className="flex w-[33rem] flex-col items-start text-left">
              <div>
                <SectionTitle text="Common Questions" textColor="#312749" />
              </div>

              <div className="mt-[1rem] mb-[3rem]">
                <SectionDescription
                  text="Everything you need to know about partnering with us."
                  textColor="#625C70"
                />
              </div>

              <div>
                <PrimaryButton
                  text="Have More Questions?"
                  textColor="#FFFFFF"
                  bGcolor="#FF37B3"
                  href=""
                />
              </div>
            </div>

            <div className="flex-1">
              <Accordion type="single" collapsible>
                {questionsData.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className={`border-b-2 border-[#F1F1F3] py-[1.5rem] ${idx === 0 ? "pt-[0rem]" : ""}`}
                  >
                    <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] text-[2.2rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#312749]">
                      <span>{item.question}</span>{" "}
                      <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDownIcon />
                      </i>
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}

                {/* <hr className="mx-auto my-[1.5rem] w-full border-t-2 border-[#F1F1F3]" /> */}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;
