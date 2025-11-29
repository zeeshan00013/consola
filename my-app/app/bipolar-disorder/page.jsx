"use client";

import Image from "next/image";
import img from "../serviceImages/bipolar-1.jpeg";
import { useState } from "react";
import bipolar from "..//serviceImages/bipolar-2.webp";

export default function Home() {
  const faqs = [
    {
      question: "CAN BIPOLAR DISORDER BE TREATED?",
      answer:
        "Yes! Bipolar Disorder can be effectively managed with therapy, lifestyle strategies, and sometimes medication. With proper support, individuals can experience more stable moods and improved daily functioning.",
    },
    {
      question: "DO YOUR THERAPISTS SPECIALIZE IN BIPOLAR DISORDER?",
      answer:
        "Absolutely. Our therapists have experience treating Bipolar Disorder and provide personalized care, including mood management strategies, coping techniques, and family support.",
    },
    {
      question: "WHAT IF I’M UNSURE ABOUT STARTING THERAPY?",
      answer:
        "It’s normal to feel uncertain. We offer an initial consultation to answer your questions, explain treatment options, and make sure you feel comfortable before beginning therapy.",
    },
    {
      question: "DO YOU SUPPORT TEENS WITH BIPOLAR SYMPTOMS?",
      answer:
        "Yes. We provide specialized programs for teens to help manage mood swings, emotional regulation, and daily challenges while supporting families with guidance and strategies.",
    },
    {
      question: "DO YOU OFFER IN-PERSON SESSIONS?",
      answer:
        "Yes, we offer both in-person and virtual sessions depending on your convenience, ensuring access to care whether you’re local or remote.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="w-full min-h-screen">
      <section
        className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      >
        <div className="text-center px-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-serif text-[#5E6F63] tracking-wide">
            BIPOLAR DISORDER TREATMENT
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

      <section className="max-w-5xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#6F7F76] mb-4 leading-relaxed">
            Do your moods shift from feeling unstoppable one moment to drained
            or hopeless the next?
          </h2>

          <p className="text-[#494949] mb-4 text-sm md:text-base leading-relaxed">
            Are you struggling with periods of high energy, racing thoughts, or
            impulsive behavior followed by deep fatigue or sadness?
          </p>

          <p className="text-[#494949] mb-4 text-sm md:text-base leading-relaxed">
            Do these changes make it hard to stay consistent at work, in
            relationships, or in your daily routine?
          </p>

          <p className="text-lg md:text-xl font-semibold text-[#6F7F76] mb-4 leading-relaxed">
            If so, you may be experiencing symptoms of Bipolar Disorder.
          </p>

          <p className="text-[#494949] text-sm md:text-base leading-relaxed">
            Bipolar Disorder involves more than mood swings — it’s a medical
            condition that affects your energy, focus, behavior, and emotional
            regulation. Many people go years without proper diagnosis because
            their symptoms are misunderstood or minimized.{" "}
            <span className="font-semibold">
              With the right support, stability is possible.
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

      <section className="w-full bg-[#5E7B68] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-serif mb-10 tracking-wide">
            HOW DO I KNOW IF I HAVE BIPOLAR DISORDER?
          </h2>

          <p className="text-base md:text-lg mb-6">Does this sound familiar?</p>

          <ul className="space-y-4 text-sm md:text-base leading-relaxed">
            <li>
              <span className="font-semibold">
                You go through periods of intense energy or motivation
              </span>{" "}
              where you feel “on top of the world.”
            </li>

            <li>
              <span className="font-semibold">
                You experience sudden drops in mood
              </span>{" "}
              leaving you tired, unproductive, or disconnected.
            </li>

            <li>
              <span className="font-semibold">
                Your thoughts sometimes race so quickly
              </span>{" "}
              it becomes hard to focus or sleep.
            </li>

            <li>
              <span className="font-semibold">
                You sometimes act impulsively or take risks
              </span>{" "}
              you normally wouldn’t take.
            </li>

            <li>
              <span className="font-semibold">
                You feel confused by how unpredictable your emotions can be
              </span>{" "}
              and you struggle to maintain stability.
            </li>

            <li>
              <span className="font-semibold">
                You rely on others to help you stay grounded
              </span>{" "}
              when your mood shifts suddenly.
            </li>
          </ul>

          <p className="text-sm md:text-base mt-10 leading-relaxed">
            Bipolar Disorder affects each person differently. A professional
            evaluation can help you understand what type of bipolar symptoms you
            may be experiencing and what treatment options can bring balance and
            stability into your life. You don’t have to figure this out alone —
            support is available.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#7E9075] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm">
              <Image
                src={bipolar}
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
            Ready to bring balance back into your life and regain control of
            your mood and energy?
          </p>

          <button className="mt-6 bg-[#64865C] text-white px-10 py-3 rounded-full font-medium hover:bg-[#5a7b53] transition">
            Schedule your consultation
          </button>
        </div>
      </section>
    </main>
  );
}
