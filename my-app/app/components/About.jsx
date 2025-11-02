"use client";
import { motion } from "framer-motion";
import { Award, Users, Clock, Shield } from "lucide-react";
import Image from "next/image";
import img1 from "../Images/mental1.jpg";
import img2 from "../Images/mental2.jpg";
import img3 from "../Images/mental3.jpg";
import img4 from "../Images/mental4.jpg";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Excellence in Care",
      description:
        "Award-winning healthcare with nationally recognized quality standards.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Board-certified physicians with years of specialized experience.",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Round-the-clock emergency services and patient support.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "State-of-the-art facilities with the highest safety protocols.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-gradient">Consola</span> Mental
                Health
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Consola Mental Health, we believe that your mental well-being
                is just as important as your physical health. Our mission is to
                provide a safe, supportive, and non-judgmental space where
                individuals can explore their emotions, overcome challenges, and
                achieve inner peace.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine modern therapeutic techniques with compassionate care
                to address conditions such as anxiety, depression, stress,
                trauma, and relationship difficulties. Our expert mental health
                professionals are committed to empowering you with the tools and
                strategies needed to regain control of your life and emotional
                health.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full text-emerald-600 border border-emerald-600 py-2 px-4 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <Image
                src={img1}
                alt="Medical facility"
                width={50}
                height={50}
                className="rounded-2xl w-full h-48 object-cover medical-shadow"
              />
              <Image
                src={img2}
                alt="Healthcare team"
                height={50}
                weight={50}
                className="rounded-2xl w-full h-32 object-cover medical-shadow"
              />
            </div>
            <div className="space-y-4 pt-8">
              <Image
                src={img3}
                alt="Medical equipment"
                width={100}
                height={100}
                className="rounded-2xl w-full h-32 object-cover "
              />
              <Image
                src={img4}
                alt="Patient care"
                width={50}
                height={50}
                className="rounded-2xl w-full h-48 object-cover medical-shadow"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
