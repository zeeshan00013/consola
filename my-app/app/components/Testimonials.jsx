"use client";
import { useState } from "react";
import Image from "next/image";
import googleLogo from "../Images/google.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Consola Mental Health has truly changed my life. The therapists are compassionate, understanding, and incredibly skilled at what they do. I’ve gained confidence and coping strategies that have made a real difference in my daily life. Highly recommend!",
      name: "Emily R.",
    },
    {
      text: "From the moment I reached out, I felt heard and supported. The team at Consola Mental Health made the process so easy, and my therapist has been a guiding light in my healing journey. I finally feel like I’m on the right path.",
      name: "James L.",
    },
    {
      text: "Amazing service and professional staff. I felt comfortable from day one and got the support I needed. Truly grateful!",
      name: "Sophia M.",
    },
    {
      text: "I never thought therapy could be so approachable and supportive. Consola Mental Health helped me overcome anxiety and build confidence in myself.",
      name: "Michael T.",
    },
    {
      text: "Highly professional and compassionate therapists. Every session has helped me gain clarity and progress in my personal growth journey.",
      name: "Olivia K.",
    },
    {
      text: "The team at Consola is amazing! They genuinely care and provide personalized guidance. I finally feel like I am making progress.",
      name: "Liam B.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-[#4e7e50] py-16 mb-10 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 gap-10 flex flex-col  items-center">
        {/* Left Text Section */}
        <div className=" text-white space-y-3 mb-8 lg:mb-0 ">
          <p className="text-sm font-medium">Feedback</p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            What Our Patients Say
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="lg:col-span-2 relative w-full">
          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white shadow-md p-6 flex flex-col justify-center items-center h-[200px] sm:h-[200px] rounded-lg">
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed text-center">
                      {t.text}
                    </p>
                    <div className="flex items-center gap-2 mt-4 mb-4">
                      <Image
                        src={googleLogo}
                        alt="Google"
                        width={40}
                        height={40}
                      />
                      <span className="font-semibold text-gray-900">
                        {t.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 flex justify-between items-center px-4 sm:justify-center sm:gap-4 bottom-0 sm:bottom-4">
            <button
              onClick={prevSlide}
              className="bg-[#4e7e50] text-white p-2 rounded-full shadow-md hover:bg-gray-700"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#4e7e50] text-white p-2 rounded-full shadow-md hover:bg-gray-700"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
