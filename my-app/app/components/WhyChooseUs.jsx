"use client";
import Image from "next/image";
import { HeartPulse, Eye, Target } from "lucide-react";
import familyImg from "../Images/whyyyy.webp";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Image Section */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={familyImg}
              alt="Happy Family"
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-green-700 text-white text-center py-6 rounded-b-2xl">
            <h2 className="text-4xl font-bold">09</h2>
            <p className="mt-2 text-sm px-4">
              Consola Mental Health has 9 years of professional experience
              providing mental health care across Texas.
            </p>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col gap-6">
          <p className="text-sm text-gray-500 font-medium">
            Why Choose Consola Mental Health?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Our Team Is Dedicated To <br /> Your Health And Happiness
          </h2>

          <div className="space-y-5">
            {/* Mission */}
            <div className=" p-6  shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-zinc-700">
                <HeartPulse className="" /> Our Mission
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To help and advocate for patients who struggle to be heard and
                understood, and to manage their treatment with empathy and
                compassion.
              </p>
            </div>

            {/* Vision */}
            <div className=" p-6 shadow-xl">
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-zinc-700">
                <Eye className="" /> Our Vision
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To arise to the occasion culturally competent, holistic,
                wellness when giving patient care. Fostering and sustaining a
                professional environment that attracts and retains the best of
                the best providers in the profession.
              </p>
            </div>

            {/* Goal */}
            <div className="p-6 shadow-xl">
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-zinc-700">
                <Target className="" /> Our Goal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To use our expertise in psychiatric medication management to
                help patients achieve their mental health goals by providing
                quality, holistic care and integrative medicine tailored to each
                patient’s individual needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
