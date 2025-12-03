"use client";
import Image from "next/image";
import Link from "next/link";

import individual from "../Images/depressed.jpg";
import family from "../Images/bipolar.jpg";
import medication from "../Images/Schizophrenia.jpg";
import adhd from "../Images/hyperactivity.jpg";
import anxiety from "../Images/stress.jpg";

const Services = [
  { img: individual, title: "Depression", route: "/depression" },
  { img: family, title: "Bipolar Disorder", route: "/bipolar-disorder" },
  { img: medication, title: "Schizophrenia", route: "/schizophrenia" },
  { img: anxiety, title: "Anxiety", route: "/stress-anxiety" },
  {
    img: adhd,
    title: "Attention deficit hyperactivity disorder (ADHD)",
    route: "/ADHD",
  },
  {
    img: medication,
    title: "Post Traumatic Stress Disorder (PTSD)",
    route: "/ADHD",
  },
  { img: family, title: "Obsessive Compulsive Disorder (OCD)", route: "/ADHD" },
  { img: family, title: "Psychosis", route: "/ADHD" },
];

export default function Service() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Conditions We Treat
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12 px-4">
        At Consola Mental Health, we provide compassionate, evidence-based care
        for a wide range of mental health conditions, including but not limited
        to:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center px-6">
        {Services.map((item, index) => (
          <Link
            href={item.route}
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
            <div className="p-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link href={"/services"}>
          <button className="bg-[#376941] rounded-xl px-3 py-3 text-white cursor-pointer">
            View More Services
          </button>
        </Link>
      </div>
    </section>
  );
}
