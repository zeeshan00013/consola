"use client";

import Link from "next/link";
import { FaClock } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";

export default function LocationHours() {
  return (
    <section className="bg-[#4e7e50] w-full py-16 px-6 md:px-10 mb-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Office Hours */}
        <div className="text-[#ffffff]">
          <div className="flex items-center gap-2 mb-4">
            <FaClock className="text-white text-xl" />
            <h2 className="text-xl font-bold uppercase">Office Hours</h2>
          </div>

          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <IoMdArrowDroprightCircle className="text-[#00a2d4]" />{" "}
              <strong>Monday:</strong> 8am – 5pm
            </li>
            <li className="flex items-center gap-3">
              <IoMdArrowDroprightCircle className="text-[#00a2d4]" />{" "}
              <strong>Tuesday:</strong> 8am – 5pm
            </li>
            <li className="flex items-center gap-3">
              <IoMdArrowDroprightCircle className="text-[#00a2d4]" />
              <strong>Wednesday:</strong> 8am – 5pm
            </li>
            <li className="flex items-center gap-3">
              <IoMdArrowDroprightCircle className="text-[#00a2d4]" />{" "}
              <strong>Thursday:</strong> 8am – 6pm
            </li>
            <li className="flex items-center gap-3">
              <IoMdArrowDroprightCircle className="text-[#00a2d4]" />{" "}
              <strong>Friday:</strong> 8am – 5pm
            </li>
          </ul>

          <div className="mt-6 text-center">
            <Link
              href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=eXJuaHNYWnVvenU1NHYxc2d6bzkxUT09&lid=NWRmMHphNFhUcEF1RnZmSVl5eVZSdz09"
              target="_blank"
            >
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md w-full transition duration-300">
                REQUEST AN APPOINTMENT
              </button>
            </Link>
          </div>
        </div>

        {/* Virtual Practice Location */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Find Us
          </h2>
          <p className="text-gray-100 mb-4">
            9331 Liberty Rd Randallstown Md 21133
          </p>
          <div className="w-full h-64 md:h-72 rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.2654274154975!2d-76.8107683252647!3d39.372868518511574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8181498b86f5f%3A0x5cfcbebf39069d82!2s9331%20Liberty%20Rd%2C%20Randallstown%2C%20MD%2021133%2C%20USA!5e0!3m2!1sen!2s!4v1764742174982!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
