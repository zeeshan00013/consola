"use client";
import { motion } from "framer-motion";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const quickLinks = ["About Us", "Our Services", "Our Team", "Contact Us"];

  const services = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Ophthalmology",
    "Emergency Care",
    "General Medicine",
    "Pharmacy",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-emerald-400 mr-3" />
              <div>
                <h3 className="text-2xl font-bold">Consola</h3>
                <p className="text-emerald-400">Mental Health </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Providing exceptional healthcare services for over 25 years. Your
              health and well-being are our top priorities.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-gray-300">info@mediwellclinic.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-gray-300">
                  123 Healthcare Ave, Medical District
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Connect With Us</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-emerald-400 mb-2">
                  Office Hours
                </h4>
                <div className="text-gray-300 space-y-1">
                  <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                  <p>Saturday: 8:00 AM - 6:00 PM</p>
                  <p>Sunday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-400 mb-2">
                  Emergency
                </h4>
                <p className="text-gray-300">24/7 Emergency Services</p>
                <p className="text-gray-300">(555) 911-HELP</p>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 MediWell Clinic. All rights reserved. |
              <a href="#" className="hover:text-emerald-400 ml-1">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="hover:text-emerald-400 ml-1">
                Terms of Service
              </a>
            </p>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Licensed Healthcare Provider</span>
              <div className="w-px h-4 bg-gray-600"></div>
              <span>HIPAA Compliant</span>
              <div className="w-px h-4 bg-gray-600"></div>
              <span>Accredited Facility</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
