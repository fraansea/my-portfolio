import React from 'react';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Working with Francis was an absolute pleasure! His keen eye for detail and deep understanding of user experience transformed our project from concept to reality. He delivered a design that was not only visually stunning but also highly intuitive for users. Francis's responsiveness to feedback and ability to iterate quickly made him an invaluable member of our team.",
      name: "Sarah",
      role: "Head of Design",
      avatarUrl: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/ed08e1e808e9128aaa85fa246d64e1509196cdc9?placeholderIfAbsent=true"
    },
    {
      content: "Francis is a product designer who truly elevates the design process. His innovative approach and creative solutions helped us rethink the entire user journey. His work doesn't just look great—it solves real problems, making it easy for users to engage with our product. I highly recommend Francis for any design challenges",
      name: "Tom",
      role: "Product Manager",
      avatarUrl: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/8495a89e1c85dee18a8050610a4084ba5f558d4f?placeholderIfAbsent=true"
    },
    {
      content: "I've had the pleasure of collaborating with Francis on several projects, and he never fails to impress. His design aesthetic is both modern and functional, and his communication skills make working with him seamless. Francis combines creativity with practicality, ensuring that every design choice serves both the brand and the user's needs",
      name: "Jessica",
      role: "Marketing Director",
      avatarUrl: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/8730485ca0633ec6934dcc2d45f4dbccc17586c3?placeholderIfAbsent=true"
    },
    {
      content: "Francis has an exceptional ability to transform complex problems into elegant design solutions. He was integral in redesigning our app, improving both its functionality and visual appeal. Francis's dedication to understanding the user's needs, combined with his technical expertise, makes him an outstanding designer to work with",
      name: "David",
      role: "CEO",
      avatarUrl: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/2452c35bee6f362e08713b535a1612a9de9af6e2?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="flex flex-col items-center w-full py-24">
      <h2 className="text-black text-2xl font-bold font-manrope text-center mb-12">Testimonials</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8 w-full max-w-[1440px]">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-1 min-w-[320px] max-w-[500px]">
            <TestimonialCard
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              avatarUrl={testimonial.avatarUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
