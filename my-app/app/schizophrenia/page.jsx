"use client";

import Image from "next/image";
import img from "../serviceImages/schi-1.jpg";
import { useState } from "react";
import online from "../serviceImages/schi-2.jpg";

export default function Home() {
  const faqs = [
    {
      question: "CAN SCHIZOPHRENIA BE TREATED?",
      answer:
        "Yes! Schizophrenia can be effectively managed with a combination of therapy, medication, and support. With proper treatment, individuals can experience improved clarity, stability, and quality of life.",
    },
    {
      question: "DO YOUR THERAPISTS SPECIALIZE IN SCHIZOPHRENIA SUPPORT?",
      answer:
        "Absolutely. Our therapists are trained to provide evidence-based support for Schizophrenia, including coping strategies, symptom management, and guidance for both patients and families.",
    },
    {
      question: "WHAT IF I FEEL UNSURE ABOUT STARTING TREATMENT?",
      answer:
        "It’s normal to feel uncertain. We offer an initial consultation to answer your questions, explain treatment options, and ensure you feel comfortable before beginning any therapy.",
    },
    {
      question: "DO YOU WORK WITH TEENS EXPERIENCING PSYCHOTIC SYMPTOMS?",
      answer:
        "Yes. We provide specialized programs for teens experiencing early signs of psychosis or schizophrenia, offering support for both emotional regulation and academic/social challenges.",
    },
    {
      question: "DO YOU OFFER IN-PERSON SESSIONS?",
      answer:
        "Yes, we provide both in-person and teletherapy sessions depending on your needs, ensuring convenient access to professional care whether you are local or remote.",
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
            SCHIZOPHRENIA TREATMENT
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
            Are you finding it hard to tell what’s real and what isn’t?
          </h2>

          <p className="text-[#494949] mb-4 text-sm md:text-base leading-relaxed">
            Do you sometimes hear or see things that others don’t, or feel like
            your thoughts are moving in ways you can’t fully control?
          </p>

          <p className="text-[#494949] mb-4 text-sm md:text-base leading-relaxed">
            Have relationships, work, or school become difficult because your
            mind feels overwhelming, confusing, or disconnected?
          </p>

          <p className="text-lg md:text-xl font-semibold text-[#6F7F76] mb-4 leading-relaxed">
            If so, you may be experiencing symptoms of Schizophrenia.
          </p>

          <p className="text-[#494949] text-sm md:text-base leading-relaxed">
            Schizophrenia is a complex mental health condition that affects how
            you think, feel, and understand the world. Many people live with it
            for years before receiving an accurate diagnosis because symptoms
            can be subtle, misunderstood, or mistaken for something else.{" "}
            <span className="font-semibold">
              With the right support, stability and clarity are possible.
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
            HOW DO I KNOW IF I HAVE SCHIZOPHRENIA?
          </h2>

          <p className="text-base md:text-lg mb-6">Does this sound familiar?</p>

          <ul className="space-y-4 text-sm md:text-base leading-relaxed">
            <li>
              <span className="font-semibold">
                You hear voices or sounds others don’t hear,
              </span>{" "}
              or you see things that feel real but others don’t notice.
            </li>

            <li>
              <span className="font-semibold">
                You sometimes feel like your thoughts aren’t fully your own
              </span>{" "}
              or that your mind is working against you.
            </li>

            <li>
              <span className="font-semibold">
                You struggle to stay focused or keep track of your thoughts
              </span>{" "}
              during conversations, work, or daily tasks.
            </li>

            <li>
              <span className="font-semibold">
                You feel withdrawn, disconnected, or isolated
              </span>{" "}
              even around people you care about.
            </li>

            <li>
              <span className="font-semibold">
                You have beliefs that others say aren’t true
              </span>{" "}
              but feel completely real to you.
            </li>

            <li>
              <span className="font-semibold">
                You find everyday situations overwhelming
              </span>{" "}
              because your brain feels overstimulated or confused.
            </li>
          </ul>

          <p className="text-sm md:text-base mt-10 leading-relaxed">
            Schizophrenia shows up differently for everyone. Early support from
            trained professionals can help you understand your symptoms and find
            treatment options that promote clarity, stability, and safety. You
            don’t have to navigate this alone — support is available at Consola
            Mental Health.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#7E9075] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm">
              <Image
                src={online}
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
            Ready to get support, understand your mind more clearly, and take
            steps toward stability and peace?
          </p>

          <button className="mt-6 bg-[#64865C] text-white px-10 py-3 rounded-full font-medium hover:bg-[#5a7b53] transition">
            Schedule your consultation
          </button>
        </div>
      </section>
    </main>
  );
}
