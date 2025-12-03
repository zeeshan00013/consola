"use client";

import Image from "next/image";

// Import images
import atena from "../InsuranceImages/Aetna.png";
import Blue from "../InsuranceImages/Blue.png";
import Carelon from "../InsuranceImages/Carelon.png";
import CDPHP from "../InsuranceImages/CDPHP.jpg";
import EmblemHealth from "../InsuranceImages/EmblemHealth.jpg";
import Fidelis from "../InsuranceImages/Fidelis.jpg";
import FirstHealth from "../InsuranceImages/FirstHealth.png";
import GHI from "../InsuranceImages/GHI.png";
import HIP from "../InsuranceImages/HIP.jpg";
import Humana from "../InsuranceImages/Humana.png";
import MagnaCare from "../InsuranceImages/MagnaCare.png";
import Medicaid from "../InsuranceImages/Medicaid.jpg";
import Medicare from "../InsuranceImages/Medicare.jpg";
import Meritain from "../InsuranceImages/Meritain.png";
import Northwell from "../InsuranceImages/Northwell.png";
import NYSHIP from "../InsuranceImages/NYSHIP.png";
import Optum from "../InsuranceImages/Optum.png";
import Oscar from "../InsuranceImages/Oscar.png";
import UMR from "../InsuranceImages/UMR.png";
import { motion } from "framer-motion";

export default function Insuranace() {
  const insurances = [
    { name: "Aetna", logo: atena },
    { name: "Blue Cross / Blue Shield", logo: Blue },
    { name: "Carelon Behavioral Health", logo: Carelon },
    { name: "CDPHP", logo: CDPHP },
    { name: "EmblemHealth", logo: EmblemHealth },
    { name: "Fidelis Care", logo: Fidelis },
    { name: "First Health", logo: FirstHealth },
    { name: "GHI (Group Health Incorporated)", logo: GHI },
    { name: "HIP (Health Plan of New York)", logo: HIP },
    { name: "Humana", logo: Humana },
    { name: "MagnaCare", logo: MagnaCare },
    { name: "Medicaid", logo: Medicaid },
    { name: "Medicare", logo: Medicare },
    { name: "Meritain Health", logo: Meritain },
    { name: "Northwell Direct", logo: Northwell },
    { name: "NYSHIP (NY State Empire Plan)", logo: NYSHIP },
    { name: "Optum", logo: Optum },
    { name: "Oscar Health", logo: Oscar },
    { name: "UMR (United Medical Resources)", logo: UMR },
  ];
  const scrollingLogos = [...insurances, ...insurances];

  return (
    <section className="w-full  " id="insurance">
      <div className="w-full px-6 py-10">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className={` text-4xl font-bold leading-tight  max-w-7xl mx-auto text-center `}
            >
              Insurances We Accept
            </motion.h2>
            <p className="text-zinc-800  mb-4  ">
              We accept a variety of insurance plans to make our services
              accessible to everyone.
            </p>
          </div>

          <motion.div className="overflow-hidden">
            <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap gap-12">
              {scrollingLogos.map((insurance, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
                >
                  <Image
                    src={insurance.logo}
                    alt={insurance.name}
                    className="object-contain"
                    width={120}
                    height={60}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
