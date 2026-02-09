"use client";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email.";
    if (!formData.service) return "Please select a service.";
    if (!formData.message.trim()) return "Please enter a message.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus("error");
      setErrorMsg(error);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        style={{ boxShadow: "13px 13px 40px 0px #00000014" }}
        className="flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border-t-8 border-[#FF37B3] bg-white p-[3.8rem] md:w-[59.5rem]"
      >
        <div className="flex w-full flex-col gap-[1rem] border-b border-[#D6D6D6] pb-[2.5rem]">
          <h4 className="text-[2.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
            Message sent! 🎉
          </h4>
        </div>
        <div className="mt-[2.5rem] flex w-full flex-col items-center gap-6">
          <p className="text-center text-[1.6rem] text-[#625C70]">
            Thank you! We&apos;ll get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-[1.4rem] font-semibold text-[#FF37B3] underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          boxShadow: "13px 13px 40px 0px #00000014",
        }}
        className="flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border-t-8 border-[#FF37B3] bg-white p-[3.8rem] md:w-[59.5rem]"
      >
        {/* Header */}
        <div className="flex w-full flex-col gap-[1rem] border-b border-[#D6D6D6] pb-[2.5rem]">
          <h4 className="text-[2.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
            Hello, how can we help?
          </h4>
        </div>
        {/* Main */}
        <div className="mt-[2.5rem] mb-[3rem] flex w-full flex-col items-start gap-[2.5rem]">
          <div className="grid w-full grid-cols-1 gap-[1.5rem] md:grid-cols-2">
            <fieldset className="w-full">
              <label
                htmlFor="name"
                className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
              >
                My name is <span className="text-[#F14A58]">*</span>
              </label>

              <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </fieldset>

            <fieldset className="w-full">
              <label
                htmlFor="help"
                className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
              >
                I need help with <span className="text-[#F14A58]">*</span>
              </label>

              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger
                  id="help"
                  className="!h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB] px-[1.5rem] text-[1.6rem] font-normal tracking-normal text-[#625C70]"
                >
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent align="center">
                  <SelectItem value="Design & Branding">
                    Design & Branding
                  </SelectItem>
                  <SelectItem value="Website Development">
                    Website Development
                  </SelectItem>
                  <SelectItem value="Maintenance & Growth">
                    Maintenance & Growth
                  </SelectItem>
                  <SelectItem value="Something else">Something else</SelectItem>
                </SelectContent>
              </Select>
            </fieldset>
          </div>

          <fieldset className="w-full">
            <label
              htmlFor="email"
              className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
            >
              Here is my email <span className="text-[#F14A58]">*</span>
            </label>

            <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
              <input
                id="email"
                type="email"
                name="email"
                className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </fieldset>

          <fieldset className="w-full">
            <label
              htmlFor="message"
              className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
            >
              And message <span className="text-[#F14A58]">*</span>{" "}
            </label>

            <div className="w-full overflow-hidden rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
              <textarea
                id="message"
                name="message"
                className="h-[12.8rem] w-full resize-none p-[1.5rem] outline-0"
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
          </fieldset>
        </div>
        {/* Footer */}
        <div className="flex w-full flex-col items-center justify-center gap-[2.3rem]">
          {status === "error" && (
            <p className="text-[1.4rem] text-[#F14A58]">{errorMsg}</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full cursor-pointer items-center justify-center disabled:opacity-60"
          >
            <span className="inline-flex h-[4rem] w-full items-center justify-center rounded-[7rem] bg-[#FF37B3] px-[3rem] py-[1rem] text-center text-[1.4rem] font-semibold tracking-normal text-white md:h-[5rem] md:text-[1.8rem]">
              {status === "loading" ? "Sending..." : "Send enquiry"}
            </span>

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-[-3px]"
            >
              <path
                d="M1.5752 0C2.62647 1.81667 4.58995 3.04004 6.83984 3.04004C9.08953 3.03987 11.0523 1.81654 12.1035 0H13.6787V13.6787H12.1035C11.0523 11.8621 9.08956 10.6388 6.83984 10.6387C4.58992 10.6387 2.62646 11.862 1.5752 13.6787H0V0H1.5752Z"
                fill="#FF37B3"
              />
            </svg>

            <i className="inline-flex size-[4rem] min-w-[4rem] items-center justify-center rounded-full bg-[#FF37B3] md:size-[5rem] md:min-w-[5rem]">
              <RightArrowIcon
                color="#ffffff"
                width="18"
                height="18"
                className="size-[1.4rem] md:size-[1.8rem]"
              />
            </i>
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
