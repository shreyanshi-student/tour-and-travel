import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bannerImg from '../../assets/images/banner/banner2.jpg'; // adjust path as needed

const packages = [
  {
    title: '1-Day Student Package',
    price: '₹999',
    description: 'Quick and affordable day trip for students.',
    features: ['Kashi Vishwanath Darshan', 'Assi Ghat Aarti', 'Simple Veg Lunch'],
    type: 'student',
  },
  {
    title: '2-Day Student Package',
    price: '₹1799',
    description: 'Extended budget-friendly spiritual experience.',
    features: ['All from 1-Day', 'Sarnath Visit', 'Boat Ride at Sunset'],
    type: 'student',
  },
  {
    title: 'Intermediate Package',
    price: '₹2999',
    description: 'Perfect balance of comfort and spirituality.',
    features: ['Temple Tours', 'Boat Rides', 'Cultural Snacks'],
    type: 'intermediate',
  },
  {
    title: 'Middle Package',
    price: '₹4999',
    description: 'Stay comfortably and explore more.',
    features: ['Guided Tour', '3-Star Hotel', 'Evening Aarti + Show'],
    type: 'middle',
  },
  {
    title: 'Luxury Package',
    price: '₹8999',
    description: 'Experience Varanasi in style and peace.',
    features: ['5-Star Hotel', 'Private Boat', 'Personal Guide', 'Spa Session'],
    type: 'luxury',
  },
  // {
  //   title: 'Couple’s Special',
  //   price: '₹7499',
  //   description: 'Celebrate love with blessings of Kashi.',
  //   features: ['Couple Spa', 'Candlelight Dinner', 'Premium Stay', 'Photo Shoot'],
  //   type: 'special',
  // },
];

const typeStyles = {
  student: 'from-green-300 to-emerald-200',
  intermediate: 'from-yellow-300 to-orange-200',
  middle: 'from-indigo-300 to-indigo-100',
  luxury: 'from-pink-300 to-pink-100',
  special: 'from-rose-300 to-pink-200',
};

const OfferList = () => {
  return (
    <div className="text-gray-800 bg-white">
      {/* Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Affordable Spiritual Tour Packages
          </motion.h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Handpicked experiences for students, couples, and spiritual seekers — starting under ₹1000!
          </p>
        </div>
      </section>

      {/* Package List */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            className="text-4xl font-bold text-indigo-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Choose Your Package
          </motion.h2>
          <p className="text-lg text-gray-600 mt-4">
            Whether you're a student, a traveler, or a newlywed couple — we have a package for you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl p-6 bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl bg-gradient-to-br ${typeStyles[pkg.type]}`}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold">{pkg.title}</h3>
                <p className="text-sm text-gray-700 mt-1 italic">{pkg.description}</p>
              </div>
              <ul className="list-disc pl-4 text-sm text-gray-800 mb-6 space-y-1">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-blue-700">{pkg.price}</span>
                <Link to="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition">
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-indigo-700 text-white text-center py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-4">Still Confused?</h2>
        <p className="text-lg mb-6">
          Talk to our tour expert before booking. We’ll help you pick the best experience.
        </p>
        <Link to="/contact">
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Request a Call
          </button>
        </Link>
      </motion.section>
    </div>
  );
};

export default OfferList;
