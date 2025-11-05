"use client";
import React from "react";

const About = () => {
  return (
    <section className="bg-white text-gray-800 z-10">
      {/* Hero Section */}
      <div className="bg-[#4e7e50] py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          About Consola Mental Health
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-100">
          Your Journey to Mental Wellness Begins Here
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <p className="text-lg leading-relaxed text-gray-700">
          At{" "}
          <span className="font-semibold text-green-600">
            Consola Mental Health
          </span>
          , we believe that everyone deserves peace of mind and emotional
          well-being. We are a compassionate mental health center dedicated to
          helping individuals, couples, and families overcome life’s challenges
          through professional therapy, counseling, and emotional support.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Our team of licensed therapists and counselors provides a safe,
          confidential, and judgment-free environment where healing begins
          through understanding, trust, and care. Whether you’re struggling with
          anxiety, depression, relationship issues, or everyday stress, Consola
          Mental Health is here to guide you toward balance and clarity.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="bg-green-60 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower individuals to live emotionally healthy,
              fulfilling lives. We aim to break the stigma around mental health
              by offering accessible, evidence-based care that focuses on
              compassion, trust, and personal growth.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To create a world where mental health care is as normalized and
              essential as physical health care — where every person feels
              supported, understood, and valued.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-black text-center mb-8">
          Why Choose Consola Mental Health
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white shadow-md p-6 rounded-2xl">
            🩵{" "}
            <span className="font-semibold">Personalized Treatment Plans:</span>{" "}
            Every person is unique. We tailor our approach to your emotional
            needs and life experiences.
          </li>
          <li className="bg-white shadow-md p-6 rounded-2xl">
            🧘 <span className="font-semibold">Evidence-Based Therapies:</span>{" "}
            We use proven therapeutic methods including CBT and mindfulness
            techniques.
          </li>
          <li className="bg-white shadow-md p-6 rounded-2xl">
            💻{" "}
            <span className="font-semibold">Online & In-Person Options:</span>{" "}
            Access therapy from anywhere through secure online or in-office
            sessions.
          </li>
          <li className="bg-white shadow-md p-6 rounded-2xl">
            🤝{" "}
            <span className="font-semibold">
              Confidential & Compassionate Support:
            </span>{" "}
            Your comfort and privacy are our top priorities.
          </li>
          <li className="bg-white shadow-md p-6 rounded-2xl">
            🌿 <span className="font-semibold">Holistic Approach:</span> We
            focus on the whole person — mind, body, and lifestyle — for
            long-term healing.
          </li>
        </ul>
      </div>

      {/* Our Team */}
      <div className="bg-green-60 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Meet Our Team
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Our team is made up of qualified mental health professionals,
            therapists, and counselors who bring compassion, expertise, and
            dedication to every session. We listen without judgment, support
            without pressure, and guide with care.
          </p>
          <p className="italic text-green-600 mt-4">
            “Healing doesn’t mean the damage never existed — it means it no
            longer controls your life.”
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-black text-center mb-8">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          <div className="bg-white shadow-md p-6 rounded-2xl">
            <h3 className="font-semibold  mb-2">Compassion</h3>
            <p>We listen, understand, and care deeply about your well-being.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl">
            <h3 className="font-semibold  mb-2">Integrity</h3>
            <p>Every session is conducted with professionalism and respect.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl">
            <h3 className="font-semibold  mb-2">Empowerment</h3>
            <p>
              We help you find strength within yourself to take control of your
              journey.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl">
            <h3 className="font-semibold  mb-2">Inclusivity</h3>
            <p>
              Everyone is welcome, regardless of age, background, or belief.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl">
            <h3 className="font-semibold  mb-2">Confidentiality</h3>
            <p>Your privacy and trust are sacred to us.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Let’s Start Your Healing Journey Today
        </h2>
        <p className="max-w-2xl mx-auto text-gray-200 mb-6">
          Taking the first step toward mental wellness can be hard — but you’re
          not alone. At Consola Mental Health, we walk with you every step of
          the way.
        </p>
        <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-green-600 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default About;
