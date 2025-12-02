"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Wifi,
  CreditCard,
  Shield,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["Main: 443 739 5882 "],
      color: "text-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: [" info@consolamentalhealth.com"],
      color: "text-emerald-600",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["9331 Liberty Rd Randallstown Md 21133"],
      color: "text-emerald-600",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 7:00 AM - 8:00 PM", "Weekend: 8:00 AM - 6:00 PM"],
      color: "text-emerald-600",
    },
  ];

  const facilities = [
    { icon: Car, title: "Free Parking", description: "Ample parking space" },
    { icon: Wifi, title: "Free Wi-Fi", description: "High-speed internet" },
    {
      icon: CreditCard,
      title: "Insurance",
      description: "Most plans accepted",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "COVID-19 protocols",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-gradient">Clinic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you with all your healthcare needs. Contact us or
            visit our modern facility equipped with the latest medical
            technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 medical-shadow hover:medical-shadow-lg transition-all duration-300"
                  >
                    <Icon className={`w-8 h-8 ${info.color} mb-4`} />
                    <h3 className="font-bold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Map and Location */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center medical-shadow">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600 mb-4">
                  123 Healthcare Avenue, Medical District
                </p>
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
