"use client";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Consola Mental Health Care &{" "}
                <span className="text-gradient">Counseling Services </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mt-6 leading-relaxed"
              >
                Consola Mental Health provides compassionate, confidential, and
                evidence-based mental health care. Our licensed therapists offer
                personalized counseling, therapy, and support to help you lead a
                balanced and peaceful life.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="bg-emerald-600  text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">15K+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">50+</div>
                <div className="text-gray-600">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">24/7</div>
                <div className="text-gray-600">Emergency Care</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden medical-shadow-lg">
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical professionals"
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-4 -left-4 bg-white rounded-xl p-4 medical-shadow"
            >
              <Shield className="w-8 h-8 text-emerald-600 mb-2" />
              <div className="text-sm font-semibold text-gray-900">
                Certified
              </div>
              <div className="text-xs text-gray-600">Healthcare</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 medical-shadow"
            >
              <Clock className="w-8 h-8 text-emerald-600 mb-2" />
              <div className="text-sm font-semibold text-gray-900">Quick</div>
              <div className="text-xs text-gray-600">Response</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
