import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      className="flex w-full flex-col items-center px-4 max-md:items-center max-md:text-center sm:px-8 md:px-12"
      data-aos="fade-up"
    >
      <h2 className="mt-8 text-[22px] font-semibold leading-none tracking-[-0.72px] text-black max-md:mt-6">
        Get in touch
      </h2>

      <p className="mt-[25px] text-center text-base font-normal leading-[22px] tracking-[0.16px] text-[rgba(90,90,90,1)] max-md:max-w-full">
        I'm always interested in exploring new opportunities, collaborating, or{" "}
        <br />
        exchanging ideas with like-minded individuals. Feel free to book a call{" "}
        <br />
        or email me if you'd like to see my portfolio deck or to discuss a{" "}
        <br />
        potential project.
      </p>

      {isSubmitted && (
        <div className="mt-4 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[33px] w-[510px] max-w-full"
      >
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 overflow-hidden rounded-[14px] bg-[rgba(187,187,187,0.15)]">
            <input
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              type="text"
              placeholder="Full Name"
              className="w-full rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-transparent px-3 py-[19px] text-sm font-medium text-[rgba(153,153,153,1)] placeholder:text-[rgba(153,153,153,1)] focus:border-[rgba(25,25,25,1)] focus:text-black focus:outline-none"
            />
            {errors.fullName && (
              <p className="mt-1 px-3 text-xs text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="flex-1 overflow-hidden rounded-[14px] bg-[rgba(187,187,187,0.15)]">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email Address"
              className="w-full rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-transparent px-3 py-[19px] text-sm font-medium text-[rgba(153,153,153,1)] placeholder:text-[rgba(153,153,153,1)] focus:border-[rgba(25,25,25,1)] focus:text-black focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 px-3 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 w-full overflow-hidden rounded-[14px] bg-[rgba(187,187,187,0.15)]">
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            placeholder="Write your Message"
            rows={4}
            className="w-full resize-none rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-transparent px-3 pb-[93px] pt-4 text-sm font-medium text-[rgba(153,153,153,1)] placeholder:text-[rgba(153,153,153,1)] focus:border-[rgba(25,25,25,1)] focus:text-black focus:outline-none max-md:pb-[110px]"
          />
          {errors.message && (
            <p className="mt-1 px-3 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-5 w-full rounded-[14px] bg-[rgba(25,25,25,1)] px-[70px] py-4 text-base font-medium leading-none tracking-[-0.32px] text-white transition-colors hover:bg-[rgba(25,25,25,0.9)] disabled:cursor-not-allowed disabled:opacity-50 max-md:px-5"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};
