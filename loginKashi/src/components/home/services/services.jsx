import React from "react";
import { motion } from "framer-motion";
import { Map, Users, Heart, Landmark } from "lucide-react"; // Ensure you have lucide-react installed

const Services = () => {
  const services = [
    {
      icon: <Map className="w-10 h-10 text-blue-600" />,
      title: "Custom Spiritual Tours",
      desc: "Tailored itineraries across Kashi, Ayodhya, and Prayagraj for your unique spiritual quest.",
    },
    {
      icon: <Users className="w-10 h-10 text-indigo-600" />,
      title: "Experienced Guides",
      desc: "Local experts share insightful stories and guide you through each sacred site with care.",
    },
    {
      icon: <Landmark className="w-10 h-10 text-purple-600" />,
      title: "Pilgrimage Planning",
      desc: "We handle travel, stays, darshan bookings, and more—so you can focus on your devotion.",
    },
    {
      icon: <Heart className="w-10 h-10 text-pink-600" />,
      title: "Comfort & Care",
      desc: "From premium transport to cultural immersion, your comfort is our priority.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
