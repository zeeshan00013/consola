"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// ✅ Import images from public (or /app/assets if you prefer)
import family1 from "../Images/home1.jpg";
import family2 from "../Images/home3.webp";
import family3 from "../Images/home2.jpg";

export default function HomePage() {
  const images = [family1, family2, family3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="Background"
            fill
            className="object-cover brightness-75"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 sm:px-16 md:px-24 text-white">
        <p className="text-sm sm:text-base mb-2 bg-green-700 px-3 py-1 rounded-md">
          Welcome to Consola Mental Health
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          Your Loved One&apos;s <br /> Care Is <br /> Our Priority
        </h1>
        <button className="mt-4 bg-green-700 hover:bg-green-800 transition-all px-5 py-2 rounded-lg text-sm sm:text-base">
          Book Appointment
        </button>
      </div>

      {/* Bottom Green Section */}
    </div>
  );
}
