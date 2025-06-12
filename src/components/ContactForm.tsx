import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="flex flex-col items-center w-full px-4 sm:px-8 md:px-12 max-md:items-center max-md:text-center" data-aos="fade-up">
      <h2 className="text-black text-[22px] font-semibold leading-none tracking-[-0.72px] mt-8 max-md:mt-6">
        Get in touch
      </h2>
      
      <p className="text-[rgba(90,90,90,1)] text-base font-normal leading-[22px] tracking-[0.16px] mt-[25px] max-md:max-w-full text-center">
        I'm always interested in exploring new opportunities, collaborating,
        or <br />
        exchanging ideas with like-minded individuals. Feel free to book a
        call <br />
        or email me if you'd like to see my portfolio deck or to discuss a{" "}
        <br />
        potential project.
      </p>
      
      {isSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="w-[510px] max-w-full mt-[33px]">
        <div className="flex gap-5 flex-wrap">
          <div className="bg-[rgba(187,187,187,0.15)] overflow-hidden flex-1 rounded-[14px]">
            <input
              {...register('fullName', { 
                required: 'Full name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
              type="text"
              placeholder="Full Name"
              className="border w-full px-3 py-[19px] rounded-[14px] border-[rgba(0,0,0,0.1)] border-solid bg-transparent text-sm text-[rgba(153,153,153,1)] font-medium placeholder:text-[rgba(153,153,153,1)] focus:outline-none focus:border-[rgba(25,25,25,1)] focus:text-black"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1 px-3">{errors.fullName.message}</p>
            )}
          </div>
          
          <div className="bg-[rgba(187,187,187,0.15)] overflow-hidden flex-1 rounded-[14px]">
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              placeholder="Email Address"
              className="border w-full px-3 py-[19px] rounded-[14px] border-[rgba(0,0,0,0.1)] border-solid bg-transparent text-sm text-[rgba(153,153,153,1)] font-medium placeholder:text-[rgba(153,153,153,1)] focus:outline-none focus:border-[rgba(25,25,25,1)] focus:text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 px-3">{errors.email.message}</p>
            )}
          </div>
        </div>
        
        <div className="bg-[rgba(187,187,187,0.15)] w-full overflow-hidden mt-5 rounded-[14px]">
          <textarea
            {...register('message', { 
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' }
            })}
            placeholder="Write your Message"
            rows={4}
            className="border w-full pt-4 pb-[93px] px-3 rounded-[14px] border-[rgba(0,0,0,0.1)] border-solid bg-transparent text-sm text-[rgba(153,153,153,1)] font-medium placeholder:text-[rgba(153,153,153,1)] focus:outline-none focus:border-[rgba(25,25,25,1)] focus:text-black resize-none max-md:pb-[110px]"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1 px-3">{errors.message.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[rgba(25,25,25,1)] w-full text-base text-white font-medium tracking-[-0.32px] leading-none mt-5 px-[70px] py-4 rounded-[14px] max-md:px-5 hover:bg-[rgba(25,25,25,0.9)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};
