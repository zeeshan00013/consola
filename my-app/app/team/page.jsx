"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Team = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Chief of Cardiology",
      experience: "15+ years",
      education: "Harvard Medical School",
      image:
        "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "(555) 123-4567",
      email: "s.johnson@mediwellclinic.com",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12+ years",
      education: "Johns Hopkins University",
      image:
        "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "(555) 123-4568",
      email: "m.chen@mediwellclinic.com",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10+ years",
      education: "Stanford Medical School",
      image:
        "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "(555) 123-4569",
      email: "e.rodriguez@mediwellclinic.com",
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      experience: "18+ years",
      education: "Mayo Clinic School",
      image:
        "https://images.pexels.com/photos/6749769/pexels-photo-6749769.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "(555) 123-4570",
      email: "j.wilson@mediwellclinic.com",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our board-certified physicians bring decades of experience and
            expertise to provide you with the highest quality of care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 medical-shadow hover:medical-shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative mb-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/80 to-transparent rounded-b-xl p-4">
                  <div className="text-white">
                    <div className="text-sm font-medium">
                      {doctor.experience}
                    </div>
                    <div className="text-xs opacity-90">Experience</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {doctor.name}
              </h3>

              <p className="text-emerald-600 font-semibold mb-2">
                {doctor.specialty}
              </p>

              <p className="text-gray-600 text-sm mb-4">{doctor.education}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                  {doctor.phone}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Mail className="w-4 h-4 mr-2 text-emerald-600" />
                  {doctor.email}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full gradient-green text-white py-2 px-4 rounded-lg font-semibold"
              >
                Book Consultation
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
