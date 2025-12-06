"use client";
import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-medium  text-center text-zinc-900 mb-4">
          What Our Clients Say
        </h2>

        <div>
          <p className="text-green-600  text-xl">No reviews Yet</p>
        </div>
      </div>
    </section>
  );
}
