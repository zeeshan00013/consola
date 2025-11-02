"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, FileText } from "lucide-react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const services = [
    "General Consultation",
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Ophthalmology",
    "Emergency Care",
  ];

  const doctors = [
    "Dr. Sarah Johnson",
    "Dr. Michael Chen",
    "Dr. Emily Rodriguez",
    "Dr. James Wilson",
  ];

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ];

  return (
    <section
      id="appointment"
      className="py-20 bg-gradient-to-br from-emerald-900 to-teal-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Book Your <span className="text-emerald-200">Appointment</span>
              </h2>
              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                Take the first step towards better health. Our team of
                experienced healthcare professionals is ready to provide you
                with personalized care and treatment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-emerald-300" />
                <div>
                  <div className="font-semibold">Flexible Scheduling</div>
                  <div className="text-sm text-emerald-200">7 days a week</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-8 h-8 text-emerald-300" />
                <div>
                  <div className="font-semibold">Quick Response</div>
                  <div className="text-sm text-emerald-200">
                    Same day appointments
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-8 h-8 text-emerald-300" />
                <div>
                  <div className="font-semibold">Expert Doctors</div>
                  <div className="text-sm text-emerald-200">
                    Board certified
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-8 h-8 text-emerald-300" />
                <div>
                  <div className="font-semibold">24/7 Support</div>
                  <div className="text-sm text-emerald-200">Emergency care</div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800/50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Why Choose MediWell?</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-3"></div>
                  State-of-the-art medical facilities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-3"></div>
                  Experienced and caring medical staff
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-3"></div>
                  Comprehensive healthcare services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-3"></div>
                  Insurance accepted and flexible payment options
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 medical-shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Schedule Appointment
                </h3>
                <p className="text-gray-600">
                  Fill out the form below to book your visit
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                    required
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Doctor
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Any Available</option>
                    {doctors.map((doctor) => (
                      <option key={doctor} value={doctor}>
                        {doctor}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                    required
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                  placeholder="Please describe your symptoms or reason for visit..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full gradient-green text-white py-4 px-6 rounded-lg font-semibold text-lg"
              >
                Book Appointment
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
