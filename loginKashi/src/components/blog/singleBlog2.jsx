import React from 'react';
import { motion } from 'framer-motion';
import blogImage from '../../assets/images/blogs/blogs1.avif';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DayInKashiBlog = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* Banner */}
      <section
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${blogImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-md max-w-4xl mx-auto px-6">
            A Day in Kashi: How to Make the Most of Your Pilgrimage
          </h1>
          <p className="mt-2 text-lg font-light drop-shadow">
            Published on June 20, 2025 · by <strong>admin</strong>
          </p>
        </motion.div>
      </section>

      {/* Blog Content */}
      <motion.main
        className="max-w-4xl mx-auto px-6 py-12 leading-relaxed text-lg"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeInUp}>
          Experiencing Kashi in a day is both humbling and transformative. From the early morning Mangala Aarti to the peaceful Ganga Aarti at night, every hour in this sacred city offers spiritual enrichment and cultural immersion.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Early Morning: Mangala Aarti and Sunrise at Assi Ghat
        </motion.h2>
        <motion.p variants={fadeInUp}>
          Begin your day before dawn at Assi Ghat, where the Mangala Aarti welcomes the sun with Vedic chants and rituals. The serenity of the Ganga and the rising sun offer a peaceful start to your pilgrimage.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Mid-Morning: Kashi Vishwanath Temple Darshan
        </motion.h2>
        <motion.p variants={fadeInUp}>
          Head to the sacred Kashi Vishwanath Temple for darshan of Lord Shiva. Booking a guided visit with Login-2-Kashi ensures a hassle-free, spiritually fulfilling experience.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Afternoon: Visit Sarnath or Enjoy a Heritage Walk
        </motion.h2>
        <motion.p variants={fadeInUp}>
          Explore the tranquil ruins of Sarnath, where Lord Buddha gave his first sermon. Alternatively, stroll through the lanes of Kashi with a heritage guide to discover hidden temples, local artisans, and ancient traditions.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Evening: Ganga Aarti at Dashashwamedh Ghat
        </motion.h2>
        <motion.p variants={fadeInUp}>
          Conclude your day by attending the mesmerizing Ganga Aarti at Dashashwamedh Ghat. The synchronized rituals, the sound of conch shells, and the spiritual energy in the air make it a once-in-a-lifetime experience.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Travel with Ease — Let Login-2-Kashi Help
        </motion.h2>
        <motion.p variants={fadeInUp}>
          Our team handles all arrangements including darshan bookings, local transport, pooja rituals, and heritage experiences. Focus only on your devotion — we manage the rest.
        </motion.p>

        <motion.h4 className="text-lg font-semibold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Contact us today to plan your unforgettable day in Kashi.
        </motion.h4>
      </motion.main>
    </div>
  );
};

export default DayInKashiBlog;
