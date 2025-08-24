import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../../../assets/images/team-image.jpg'; // Replace with your image

const HomeAbout = () => {
  return (
    <section className="relative bg-gradient-to-r from-white via-blue-50 to-white py-20 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob " />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 relative z-10">
        {/* Image */}
        {/* <motion.img
          src={aboutImg}
          alt="About Our Team"
          className="w-full rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        /> */}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Your Trusted Spiritual Travel Companion
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We curate soul-enriching journeys to the spiritual heartlands of India—Kashi, Ayodhya, and Prayagraj. With a blend of tradition, comfort, and authenticity, we turn every trip into a meaningful memory.
          </p>
          <a
            href="/about"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
