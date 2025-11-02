"use client";
import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Stethoscope,
  Eye,
  Bone,
  Activity,
  Baby,
  Pill,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Individual Therapy",
      description:
        "Personalized one-on-one therapy sessions focused on self-discovery, healing, and emotional balance.",
      features: [
        "Anxiety & Depression Management",
        "Cognitive Behavioral Therapy (CBT)",
        "Mindfulness & Stress Reduction",
      ],
    },
    {
      icon: Brain,
      title: "Couples Counseling",
      description:
        "Relationship-focused therapy designed to rebuild trust, improve communication, and strengthen emotional connection.",
      features: [
        "Conflict Resolution",
        "Marriage & Relationship Therapy",
        "Communication Skill Building",
      ],
    },
    {
      icon: Stethoscope,
      title: "Family Therapy",
      description:
        "Supportive sessions that help families improve relationships, resolve conflicts, and enhance understanding.",
      features: [
        "Parent-Child Relationship Support",
        "Family Conflict Resolution",
        "Group Family Sessions",
      ],
    },
    {
      icon: Eye,
      title: "Stress & Anxiety Management",
      description:
        "Evidence-based strategies to identify stress triggers, reduce anxiety, and promote relaxation.",
      features: [
        "Mindfulness Meditation",
        "Breathing & Relaxation Techniques",
        "Coping Skills Training",
      ],
    },
    {
      icon: Bone,
      title: "Depression Treatment",
      description:
        "Comprehensive care using therapy and lifestyle guidance to help overcome sadness and regain motivation.",
      features: [
        "Cognitive Behavioral Therapy (CBT)",
        "Mood Tracking & Support",
        "Positive Psychology Sessions",
      ],
    },
    {
      icon: Activity,
      title: "Online Counseling",
      description:
        "Private and secure virtual sessions that bring mental health support to you anytime, anywhere.",
      features: [
        "Video & Chat Sessions",
        "Confidential Virtual Consultations",
        "Flexible Scheduling",
      ],
    },
    {
      icon: Baby,
      title: "Child & Adolescent Therapy",
      description:
        "Compassionate therapy designed to help children and teens manage emotions, behavior, and school-related stress.",
      features: [
        "Behavioral Therapy",
        "Emotional Regulation",
        "Academic Stress Support",
      ],
    },
    {
      icon: Pill,
      title: "Medication Management",
      description:
        "Professional assessment and monitoring of prescribed medications to support your mental health treatment plan.",
      features: [
        "Psychiatric Evaluation",
        "Medication Review & Adjustment",
        "Follow-Up Consultations",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a range of personalized mental health services tailored to
            meet your emotional and psychological needs:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 medical-shadow hover:medical-shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full text-emerald-600 border border-emerald-600 py-2 px-4 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
