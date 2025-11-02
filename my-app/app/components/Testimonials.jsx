"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Garcia",
      age: "42",
      condition: "Stress & Anxiety Management",
      rating: 5,
      text: "Consola Mental Health has completely changed my life. I finally feel understood, supported, and confident again.”",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Robert Thompson",
      age: "55",
      condition: "Family Therapy",
      rating: 5,
      text: "The therapy sessions helped me manage my anxiety better than I ever thought possible. The team truly cares about your progress.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Jennifer Lee",
      age: "34",
      condition: "Couples Counseling",
      rating: 5,
      text: "I was nervous about therapy, but Consola made it so easy and welcoming. I’m finally in control of my emotions and relationships.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "David Kim",
      age: "48",
      condition: "Individual Therapy",
      rating: 5,
      text: "Their online counseling option was perfect for my busy schedule. I felt the same connection and care as in-person sessions",
      image:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Patient <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our patients have to say about their experience with our
            healthcare services and medical professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 medical-shadow hover:medical-shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Age {testimonial.age} • {testimonial.condition}
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <Quote className="w-8 h-8 text-emerald-200" />
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                {testimonial.text}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Verified Patient
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-600">
                      Excellent Care
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-8 medical-shadow">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">2,847</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">98%</div>
              <div className="text-sm text-gray-600">Recommended</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
