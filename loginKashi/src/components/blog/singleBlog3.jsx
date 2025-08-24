// Blog: Ganga Aarti at Dashashwamedh Ghat: What Makes It So Special?

import React from 'react';
import { motion } from 'framer-motion';
import blogImage from '../../assets/images/blogs/blogs3.avif';

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

const GangaAartiBlog = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-md">
            Ganga Aarti at Dashashwamedh Ghat: What Makes It So Special?
          </h1>
          <p className="mt-2 text-lg font-light drop-shadow">
            Published on July 28, 2025 · by <strong>admin</strong>
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
          Every evening at Dashashwamedh Ghat, a sacred spectacle unfolds — the grand Ganga Aarti. It's not just a ritual, it’s an experience of light, devotion, and divine rhythm performed by priests with synchronized movements, chants, and flaming lamps.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          The Spiritual Significance
        </motion.h2>
        <motion.p variants={fadeInUp}>
          The Ganga Aarti is an expression of gratitude to Maa Ganga, the river goddess. It symbolizes purification and the eternal flow of energy. Thousands gather daily to witness and participate in this divine offering.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          What Makes It Unique?
        </motion.h2>
        <motion.ul variants={fadeInUp}>
          <li>🔥 <b>Grandeur & Synchrony:</b> 7 priests perform the Aarti in perfect coordination</li>
          <li>🌊 <b>River Blessings:</b> The ritual is done right on the banks of the sacred Ganges</li>
          <li>🎶 <b>Vedic Chants:</b> Soothing Sanskrit mantras and conch shells create an ethereal vibe</li>
          <li>🪔 <b>Divine Lamps:</b> Large brass lamps with multi-tiered flames illuminate the night</li>
        </motion.ul>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Best Time & Tips to Attend
        </motion.h2>
        <motion.ul variants={fadeInUp}>
          <li>⏰ Reach by 5:30 PM to get a good spot</li>
          <li>🚤 Opt for a boat ride to view the Aarti from the river (an unforgettable angle)</li>
          <li>📸 Photography is allowed — but be respectful during rituals</li>
          <li>🎫 Book with Login to Kashi for guided access and premium viewing arrangements</li>
        </motion.ul>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          How Login-2-Kashi Enhances Your Experience
        </motion.h2>
        <motion.ul variants={fadeInUp}>
          <li> Reserved seating and boat bookings</li>
          <li> On-ground guide for ritual understanding and cultural context</li>
          <li> Combo tours with nearby temples and sunset photography sessions</li>
        </motion.ul>

        <motion.p className="mt-10" variants={fadeInUp}>
          With the shimmering lamps and soul-touching chants, the Ganga Aarti is not just seen — it's felt. Witness this celestial ceremony with the guidance and comfort of Login to Kashi.
        </motion.p>
      </motion.main>
    </div>
  );
};

export default GangaAartiBlog;
