"use client";

import Image from "next/image";
import img from "../serviceImages/stress-1.jpg";
import img2 from "../serviceImages/stress-2.jpg";
import { useState } from "react";

export default function Home() {
  const faqs = [
    {
      question: "CAN STRESS & ANXIETY BE TREATED?",
      answer:
        "Yes! Stress and anxiety can be effectively managed with therapy, relaxation techniques, lifestyle adjustments, and sometimes medication. With proper support, you can regain balance and peace of mind.",
    },
    {
      question: "DO YOUR THERAPISTS SPECIALIZE IN STRESS & ANXIETY CARE?",
      answer:
        "Absolutely. Our therapists are trained to help clients manage stress and anxiety using evidence-based approaches, coping strategies, and personalized support for both adults and teens.",
    },
    {
      question: "WHAT IF I FEEL NERVOUS ABOUT STARTING THERAPY?",
      answer:
        "It’s completely normal to feel nervous. We provide an initial consultation to explain your options, answer questions, and help you feel comfortable before starting therapy.",
    },
    {
      question: "DO YOU WORK WITH TEENS DEALING WITH ANXIETY?",
      answer:
        "Yes. We offer specialized programs for teens to help them manage anxiety at school, home, and socially, while also supporting parents with effective strategies.",
    },
    {
      question: "DO YOU OFFER IN-PERSON SESSIONS?",
      answer:
        "Yes, we offer both in-person and virtual sessions depending on your preference, ensuring you get professional support whether you’re local or remote.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="w-full min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      >
        <div className="text-center px-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-serif text-[#5E6F63] tracking-wide">
            STRESS & ANXIETY THERAPY
          </h1>

          <p className="mt-3 text-[#5E6F63] font-semibold">
            at Consola Mental Health
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-[#7A9A7E] text-white text-sm md:text-base shadow-md hover:bg-[#6a876d] transition">
            Schedule your consultation
          </button>
        </div>
      </section>

      <div className="w-full border-t border-[#A7B8A3] mt-0" />

      {/* INTRO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#6F7F76] mb-4 leading-relaxed">
            Are stress and anxiety making daily life feel overwhelming?
          </h2>

          <p className="text-[#494949] mb-4 text-sm md:text-base leading-relaxed">
            Do you constantly feel on edge, worried, or unable to relax—even in
            moments where nothing is actually wrong?
          </p>

          <p className="text-[#494949] mb-4 text-sm md:text-base leading-relaxed">
            Are you having trouble sleeping, focusing, or keeping up with work,
            school, or relationships because your mind feels tense or
            overloaded?
          </p>

          <p className="text-lg md:text-xl font-semibold text-[#6F7F76] mb-4 leading-relaxed">
            If so, you may be experiencing symptoms of chronic stress or
            anxiety.
          </p>

          <p className="text-[#494949] text-sm md:text-base leading-relaxed">
            Stress & anxiety show up in many ways—constant worrying, physical
            tension, restlessness, or emotional exhaustion. These feelings can
            build up slowly, making daily life harder than it should be.{" "}
            <span className="font-semibold">
              With the right support, calmness and balance are absolutely
              possible.
            </span>
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src={img}
            alt="Therapist session"
            className="rounded-lg w-full max-w-sm md:max-w-md shadow-lg object-cover"
          />
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="w-full bg-[#5E7B68] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-serif mb-10 tracking-wide">
            HOW DO I KNOW IF I HAVE STRESS OR ANXIETY?
          </h2>

          <p className="text-base md:text-lg mb-6">Does this sound familiar?</p>

          <ul className="space-y-4 text-sm md:text-base leading-relaxed">
            <li>
              <span className="font-semibold">
                You often feel worried, tense, or unable to relax,
              </span>{" "}
              even when nothing major is happening.
            </li>

            <li>
              <span className="font-semibold">
                Your thoughts race or spiral into the worst-case scenarios,
              </span>{" "}
              making it hard to think clearly.
            </li>

            <li>
              <span className="font-semibold">
                You struggle to focus or stay present
              </span>{" "}
              during conversations, work, or daily tasks.
            </li>

            <li>
              <span className="font-semibold">
                You feel easily overwhelmed or emotionally exhausted,
              </span>{" "}
              even by small tasks.
            </li>

            <li>
              <span className="font-semibold">
                Your sleep is affected — trouble falling asleep or waking up
                anxious,
              </span>{" "}
              leaving you drained.
            </li>

            <li>
              <span className="font-semibold">
                You experience physical symptoms like tightness, restlessness,
                or a heavy chest
              </span>{" "}
              when stress builds up.
            </li>
          </ul>

          <p className="text-sm md:text-base mt-10 leading-relaxed">
            Stress & anxiety affect everyone differently. With early guidance
            and personalized support, you can regain control, develop healthier
            coping tools, and build a calmer, more stable daily life. You don’t
            have to go through this alone — support is available at Consola
            Mental Health.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full bg-[#7E9075] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm">
              <Image
                src={img2}
                width={450}
                height={450}
                alt="Decor table"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="text-white space-y-6">
            {faqs.map((item, index) => (
              <div key={index} className="border-b border-white/50 pb-4">
                <button
                  className="w-full flex justify-between items-center text-left text-lg tracking-wide"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {item.question}
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="text-sm opacity-80 mt-3">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mt-16 text-white">
          <p className="text-sm md:text-base leading-relaxed font-medium">
            Ready to get support, understand your mind more clearly, and move
            toward a calmer, more balanced life?
          </p>

          <button className="mt-6 bg-[#64865C] text-white px-10 py-3 rounded-full font-medium hover:bg-[#5a7b53] transition">
            Schedule your consultation
          </button>
        </div>
      </section>
    </main>
  );
}
