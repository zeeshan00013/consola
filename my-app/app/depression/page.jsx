"use client";

import Image from "next/image";
import img from "../Images/GettyImages-1271550771.webp";
import { useState } from "react";
import depress from "../Images/depressed.jpg";

export default function Home() {
  const faqs = [
    {
      question: "CAN DEPRESSION BE TREATED?",
      answer:
        "Yes! Depression is treatable with therapy, lifestyle strategies, and sometimes medication. With the right support, people can regain energy, motivation, and a sense of well-being.",
    },
    {
      question: "DO ALL OF YOUR THERAPISTS WORK WITH DEPRESSION?",
      answer:
        "Absolutely. Our therapists are trained to help clients navigate depression, offering personalized strategies, emotional support, and evidence-based treatments for both adults and teens.",
    },
    {
      question: "WHAT IF I’M NOT READY FOR THERAPY YET?",
      answer:
        "It’s normal to feel hesitant. We provide an initial consultation to answer your questions, explain treatment options, and ensure you feel comfortable before beginning therapy.",
    },
    {
      question: "DO YOU SUPPORT TEENS STRUGGLING WITH DEPRESSION?",
      answer:
        "Yes. We have specialized programs for teens to help manage mood, school challenges, self-esteem, and social relationships, while also providing guidance for parents.",
    },
    {
      question: "DO YOU OFFER IN-PERSON SESSIONS?",
      answer:
        "Yes, we offer both in-person and virtual sessions to accommodate your needs, ensuring access to professional support whether you are local or remote.",
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
            DEPRESSION THERAPY
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
            Do you often feel emotionally drained, unmotivated, or disconnected
            from the people around you?
          </h2>

          <p className="text-[#494949] mb-4 text-sm md:text-base leading-relaxed">
            Are you struggling to get through the day because even simple tasks
            feel overwhelming?
          </p>

          <p className="text-[#494949] mb-4 text-sm md:text-base leading-relaxed">
            Do you catch yourself avoiding activities you once enjoyed because
            you no longer feel the same joy or energy?
          </p>

          <p className="text-lg md:text-xl font-semibold text-[#6F7F76] mb-4 leading-relaxed">
            If so, you may be experiencing symptoms of Depression.
          </p>

          <p className="text-[#494949] text-sm md:text-base leading-relaxed">
            Depression isn’t just sadness — it affects your thoughts, emotions,
            energy, and overall ability to function. Many people minimize their
            symptoms or think they just need to “push through,” but depression
            is a real medical condition that deserves care and support.{" "}
            <span className="font-semibold">
              And you don’t have to face it alone.
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
            HOW DO I KNOW IF I HAVE DEPRESSION?
          </h2>

          <p className="text-base md:text-lg mb-6">Does this sound familiar?</p>

          <ul className="space-y-4 text-sm md:text-base leading-relaxed">
            <li>
              <span className="font-semibold">
                You feel tired or mentally exhausted most days
              </span>{" "}
              even when you havent done much.
            </li>

            <li>
              <span className="font-semibold">
                You’ve lost interest in activities you used to enjoy
              </span>{" "}
              like hobbies, socializing, or personal goals.
            </li>

            <li>
              <span className="font-semibold">
                Your thoughts often feel heavy or negative
              </span>{" "}
              and you struggle to feel hopeful about the future.
            </li>

            <li>
              <span className="font-semibold">
                You prefer to keep your feelings to yourself
              </span>{" "}
              because you don’t want to burden anyone.
            </li>

            <li>
              <span className="font-semibold">
                You feel guilty for not being “yourself”
              </span>{" "}
              or worry that something is wrong with you.
            </li>

            <li>
              <span className="font-semibold">
                You rely on others to motivate or reassure you
              </span>{" "}
              because your confidence has taken a hit.
            </li>
          </ul>

          <p className="text-sm md:text-base mt-10 leading-relaxed">
            Depression affects everyone differently. A trained professional can
            help you understand your symptoms and guide you toward the right
            treatment. You deserve support, healing, and a path forward — and
            we’re here to provide it.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#7E9075] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm">
              <Image
                src={depress}
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
            Are you ready to overcome depression and reconnect with your energy,
            motivation, and sense of self?
          </p>

          <button className="mt-6 bg-[#64865C] text-white px-10 py-3 rounded-full font-medium hover:bg-[#5a7b53] transition">
            Schedule your consultation
          </button>
        </div>
      </section>
    </main>
  );
}
