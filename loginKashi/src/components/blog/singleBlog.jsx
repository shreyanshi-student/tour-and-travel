import React from 'react';
import { motion } from 'framer-motion';
import blogImage from '../../assets/images/blogs/blogs2.avif';

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

const SingleBlog = () => {
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
            Kashi Vishwanath Temple: History, Importance & Darshan Guide
          </h1>
          <p className="mt-2 text-lg font-light drop-shadow">
            Published on June 14, 2025 · by <strong>Kushagra Srivastav</strong>
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
          Kashi Vishwanath Temple, dedicated to Lord Shiva, is the spiritual heart of Varanasi (Kashi) and one of the 12 Jyotirlingas in India. Located on the western bank of the Ganga, it draws millions of pilgrims each year who come seeking darshan and moksha.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          A Glimpse into History
        </motion.h2>
        <motion.p variants={fadeInUp}>
          The original temple is believed to date back thousands of years. It has been destroyed and rebuilt multiple times — most famously reconstructed in 1780 by Queen Ahilyabai Holkar of Indore. The current structure stands as a symbol of devotion, resilience, and divine energy.


        </motion.p>

        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Why Is It So Important?
        </motion.h2>
        <motion.ul variants={fadeInUp}>
          <li> <b>Jyotirlinga:</b> One of the 12 most sacred Shiva shrines in India</li>

          <li><b>Spiritual Belief:</b> A darshan here is said to liberate one from the cycle of birth and death</li>

          <li><b>Ganga Proximity</b> Located near the holy river, making it ideal for rituals like pind daan and asthi visarjan</li>

          <li><b>Shiv-Bhakta Destination:</b> Every devotee of Shiva dreams of visiting this temple at least once in life</li>
        </motion.ul>
        <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Darshan Guide: How to Plan Your Visit
        </motion.h2>
        <motion.h3 className="text-xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Location:
        </motion.h3>
        <motion.p variants={fadeInUp}>
          Within the <b>Kashi Vishwanath Corridor</b>, near Dashashwamedh Ghat
        </motion.p>

        <motion.h3 className="text-xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Timings:
        </motion.h3>
        <motion.ul variants={fadeInUp}>
          <li> <b>Open daily</b> 3:00 AM – 11:00 PM</li>

          <li>Best time for peaceful darshan: <b> early morning or late evening</b></li>


        </motion.ul>

        <motion.h3 className="text-xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Tips for Devotees:
        </motion.h3>
        <motion.ul variants={fadeInUp}>
          <li> Book darshan or pooja online in advance (VIP darshan also available)</li>

          <li> Carry only essentials inside the temple </li>
          <li>Follow dress codes (preferably traditional/covered clothing)</li>
          <li>Keep your ID handy for security checks</li>
        </motion.ul>

        <motion.h3 className="text-xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Special Experiences by Login-2-Kashi:
        </motion.h3>
        <motion.ul variants={fadeInUp}>
          <li> Guided entry with darshan assistance</li>

          <li> Rudrabhishek and Shravan month poojas </li>
          <li>Personalized spiritual itineraries including Ganga Aarti and nearby temple visits</li>
       
        </motion.ul>

           <motion.h2 className="text-2xl font-bold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Planning a Sacred Trip to Kashi?
        </motion.h2>
          <motion.p variants={fadeInUp}>
         Let Login-2-Kashi help you with complete arrangements, including darshan, rituals, accommodation, and local guidance — so you focus only on your devotion.
        </motion.p>
        <motion.h4 className="text-lg font-semibold mt-10 mb-4 text-blue-800" variants={fadeInUp}>
          Contact us today for your Kashi Vishwanath Yatra.
        </motion.h4>
      

      </motion.main>

      {/* Author Box */}
      <motion.section
        className="bg-gray-100 py-10 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto flex items-center gap-6">
          <img
            src={blogImage}
            alt="Author"
            className="w-20 h-20 rounded-full object-cover shadow-lg"
          />
          <div>
            <h4 className="text-xl font-semibold">admin</h4>
            <p className="text-gray-600 text-sm">
              admin is a spiritual traveler and author who writes about India's ancient cities and their hidden stories.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Related Posts */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-10 text-center text-blue-900">You might also like</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={blogImage}
                  alt="related blog"
                  className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 group-hover:opacity-80 transition duration-500"></div>
              </div>

              <div className="absolute bottom-0 p-5 text-white w-full z-10">
                <h4 className="text-xl font-bold drop-shadow">Exploring Rishikesh</h4>
                <p className="text-sm opacity-80 mt-1">A journey to the yoga capital of the world.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default SingleBlog;
