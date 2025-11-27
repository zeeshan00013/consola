"use client";

import Image from "next/image";
import img from "../Images/GettyImages-1271550771.webp";
import { useState } from "react";
import adhd from "../Images/hyperactivity.jpg";

export default function Home() {
  const faqs = [
    {
      question: "CAN ADHD BE TREATED?",
      answer:
        "Yes! ADHD is a manageable condition. With therapy, behavioral strategies, and sometimes medication, individuals can improve focus, organization, and emotional regulation, leading to a more balanced daily life.",
    },
    {
      question: "DO YOUR THERAPISTS SPECIALIZE IN ADHD SUPPORT?",
      answer:
        "Absolutely. All our therapists are trained to work with ADHD clients, offering tailored strategies, coping skills, and support for children, teens, and adults.",
    },
    {
      question: "WHAT IF I FEEL UNSURE ABOUT STARTING TREATMENT?",
      answer:
        "It’s normal to feel hesitant. Our team provides an initial consultation to answer your questions, explain treatment options, and ensure you feel comfortable before starting.",
    },
    {
      question: "DO YOU WORK WITH TEENS STRUGGLING WITH ADHD SYMPTOMS?",
      answer:
        "Yes. We have specialized programs for teens to help with focus, schoolwork, self-esteem, and emotional regulation, while supporting parents with strategies for home and school.",
    },
    {
      question: "DO YOU OFFER IN-PERSON SESSIONS?",
      answer:
        "Yes, we offer both in-person and teletherapy sessions depending on your needs and convenience, ensuring access to care whether you’re local or remote.",
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
            ADHD TREATMENT
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
            Are you struggling to stay focused or keep up with daily tasks?
          </h2>

          <p className="text-[#494949] mb-4 text-sm md:text-base leading-relaxed">
            Do you often feel distracted, overwhelmed, or unable to finish
            things even when you truly want to? Maybe your thoughts race from
            one idea to another, making it hard to stay organized or calm.
          </p>

          <p className="text-[#494949] mb-4 text-sm md:text-base leading-relaxed">
            Has school, work, or your personal life become challenging because
            staying on track takes more energy than it should?
          </p>

          <p className="text-lg md:text-xl font-semibold text-[#6F7F76] mb-4 leading-relaxed">
            If so, you may be experiencing symptoms of ADHD.
          </p>

          <p className="text-[#494949] text-sm md:text-base leading-relaxed">
            ADHD is a common neurodevelopmental condition that affects
            attention, focus, impulse control, and organization. Many people
            live with ADHD without knowing it, often blaming themselves for
            difficulties that actually have a real, treatable cause.{" "}
            <span className="font-semibold">
              With the right support, clarity and confidence are absolutely
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

      <section className="w-full bg-[#5E7B68] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-serif mb-10 tracking-wide">
            HOW DO I KNOW IF I HAVE ADHD?
          </h2>

          <p className="text-base md:text-lg mb-6">Does this sound familiar?</p>

          <ul className="space-y-4 text-sm md:text-base leading-relaxed">
            <li>
              <span className="font-semibold">
                You get easily distracted or lose focus,
              </span>{" "}
              even on tasks that matter to you.
            </li>

            <li>
              <span className="font-semibold">
                Your mind jumps between thoughts quickly,
              </span>{" "}
              making it hard to stay organized or finish tasks.
            </li>

            <li>
              <span className="font-semibold">
                You struggle with time management
              </span>{" "}
              or often feel like you’re always “running behind.”
            </li>

            <li>
              <span className="font-semibold">
                You act on impulse sometimes,
              </span>{" "}
              speaking or reacting before you’ve fully thought it through.
            </li>

            <li>
              <span className="font-semibold">
                You find it hard to sit still or stay calm,
              </span>{" "}
              especially when your brain feels restless or overstimulated.
            </li>

            <li>
              <span className="font-semibold">
                You feel frustrated with yourself
              </span>{" "}
              because staying focused or consistent feels harder than it is for
              others.
            </li>
          </ul>

          <p className="text-sm md:text-base mt-10 leading-relaxed">
            ADHD looks different for everyone — some people are hyperactive,
            others are primarily inattentive, and many are a mix of both.
            Professional support can help you understand your patterns,
            strengthen your skills, and build tools that work for your unique
            brain. You don’t have to manage this alone — support is available at
            Consola Mental Health.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#7E9075] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm">
              <Image
                src={adhd}
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
            Ready to gain clarity, build confidence, and learn tools that truly
            work for your ADHD mind?
          </p>

          <button className="mt-6 bg-[#64865C] text-white px-10 py-3 rounded-full font-medium hover:bg-[#5a7b53] transition">
            Schedule your consultation
          </button>
        </div>
      </section>
    </main>
  );
}
