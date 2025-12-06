"use client";
import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img from "../Images/google.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    feedback:
      "Consola Mental Health has truly changed my life. They are compassionate, understanding, and incredibly skilled at what they do. I’ve gained confidence and coping strategies that have made a real difference in my daily life. Highly recommend!",
    image: img,
  },
  {
    name: "Dr. Michael Lee",
    feedback:
      "Amazing service and professional staff. I felt comfortable from day one and got the support I needed. Truly grateful!",

    image: img,
  },
  {
    name: "Emily Davis",
    feedback:
      "I never thought therapy could be so approachable and supportive. Consola Mental Health helped me overcome anxiety and build confidence in myself.",

    image: img,
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-medium  text-center text-zinc-900 mb-4">
          What Our Clients Say
        </h2>

        {/* Testimonial Card */}
        <div className="relative bg-white shadow-lg rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <FaQuoteLeft className="text-green-300 text-3xl mb-4 mx-auto" />
          <p className="text-gray-700 italic mb-6">
            {testimonials[current].feedback}
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Image
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#154d32]"
            />
            <div className="text-left">
              <h4 className="text-lg font-bold text-green-700">
                {testimonials[current].name}
              </h4>
            </div>
          </div>

          {/* Navigation Arrows */}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === index ? "bg-[#36025d]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
