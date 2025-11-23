"use client";
import { motion } from "framer-motion";

import individual from "../Images/individual.jpg";
import family from "../Images/sleepdisorder.jpg";
import couple from "../Images/bipolar.jpg";
import medication from "../Images/medication.jpg";
import depress from "../Images/depressed.jpg";
import child from "../Images/hyperactivity.jpg";
import online from "../Images/Schizophrenia.jpg";
import stress from "../Images/stress.jpg";
import Image from "next/image";

const Services = () => {
  const Services = [
    { img: individual, title: "Individual Therapy" },
    { img: family, title: "Sleep Disorder" },
    { img: couple, title: "Bipolar Disorder" },
    { img: medication, title: " Medication Management" },
    { img: depress, title: "depressed" },
    { img: child, title: " Attention hyperactivity disorder" },
    { img: online, title: "Schizophrenia" },
    { img: stress, title: "Stress & anxity" },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a range of personalized mental health services tailored to
            meet your emotional and psychological needs:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center px-6">
          {Services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-green-700 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 w-full max-w-[250px] overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
